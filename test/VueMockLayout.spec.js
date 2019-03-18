import { shallowMount } from '@vue/test-utils'
import VueMockLayout from '@/vue-mock-layout.vue'

describe('VueMockLayout.vue', () => {
    it('Sets props correctly', async () => {
        let initialPropsData = {
            mobileBreakpoint: 992,
            deskTopHeight: 200,
            mobileHeight: 100,
            background: '#eee',
            textColor: '#333',
            text: 'Test text',
            fontSize: '2rem'
        }

        const wrapper = shallowMount(VueMockLayout, {
            propsData: {
                mobileBreakpoint: initialPropsData.mobileBreakpoint,
                deskTopHeight: initialPropsData.deskTopHeight,
                mobileHeight: initialPropsData.mobileHeight,
                background: initialPropsData.background,
                textColor: initialPropsData.textColor,
                text: initialPropsData.text,
                fontSize: initialPropsData.fontSize
            }
        })

        expect(wrapper.vm.mobileBreakpoint).toBe(initialPropsData.mobileBreakpoint)
        expect(wrapper.vm.deskTopHeight).toBe(initialPropsData.deskTopHeight)
        expect(wrapper.vm.mobileHeight).toBe(initialPropsData.mobileHeight)
        expect(wrapper.vm.background).toBe(initialPropsData.background)
        expect(wrapper.vm.textColor).toBe(initialPropsData.textColor)
        expect(wrapper.vm.text).toBe(initialPropsData.text)
        expect(wrapper.vm.fontSize).toBe(initialPropsData.fontSize)
    })
})