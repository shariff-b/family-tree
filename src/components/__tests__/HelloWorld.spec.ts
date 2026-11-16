import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomePage from '@/components/HomePage.vue'

describe('HelloWorld - displays the text passed as prop', () => {
  it('renders properly', () => {
    const wrapper = mount(HomePage, { props: { displayString: "Hello world"} });
    expect(wrapper.text()).toContain('Hello world');
  });
})
