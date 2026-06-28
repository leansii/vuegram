import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import TgButton from '../TgButton.vue'
import TgCell from '../TgCell.vue'

describe('TgButton', () => {
  it('renders its slot and defaults to the primary variant', () => {
    const w = mount(TgButton, { slots: { default: 'Save' } })
    expect(w.text()).toBe('Save')
    expect(w.classes()).toContain('tg-button--primary')
    expect(w.attributes('type')).toBe('button')
  })

  it('applies the variant and disabled state', () => {
    const w = mount(TgButton, { props: { variant: 'destructive', disabled: true } })
    expect(w.classes()).toContain('tg-button--destructive')
    expect(w.attributes('disabled')).toBeDefined()
  })
})

describe('TgCell', () => {
  it('shows a chevron only when clickable', () => {
    const plain = mount(TgCell, { props: { title: 'Row' } })
    expect(plain.find('.tg-cell__chevron').exists()).toBe(false)
    const tappable = mount(TgCell, { props: { title: 'Row', clickable: true } })
    expect(tappable.find('.tg-cell__chevron').exists()).toBe(true)
    expect(tappable.classes()).toContain('tg-cell--clickable')
  })
})
