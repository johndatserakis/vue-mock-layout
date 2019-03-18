<template>
    <div>

        <div
            class="vue-mock-layout"
            :style="{
                height: ($vssWidth > mobileBreakpoint) ? deskTopHeight + 'px' : mobileHeight + 'px',
                background: background
            }"
        >
            <div
                class="vue-mock-layout__text"
                :style="{color: textColor, fontSize: fontSize}"
            >
                {{text}}
            </div>
        </div>

    </div>
</template>

<script>
import VueScreenSize from 'vue-screen-size'

export default {
    name: 'vue-template',
    mixins: [VueScreenSize.VueScreenSizeMixin],
    props: {
        mobileBreakpoint: {
            type: Number,
            required: false,
            default: 992
        },
        deskTopHeight: {
            type: Number,
            required: false,
            default: 100
        },
        mobileHeight: {
            type: Number,
            required: false,
            default: 100
        },
        background: {
            type: String,
            required: false,
            default: '#128AB2'
        },
        textColor: {
            type: String,
            required: false,
            default: 'white'
        },
        text: {
            type: String,
            required: false,
            default: 'section'
        },
        fontSize: {
            type: String,
            required: false,
            default: '2rem'
        }
    },
    data () {
        return {
        }
    }
}
</script>

<style lang="scss">
    .vue-mock-layout {
        font-family: sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 20px;
        padding-right: 20px;
    }
</style>