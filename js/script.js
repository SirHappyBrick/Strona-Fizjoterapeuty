// language switching button

const languageSwitch = Vue.createApp ({
    data() {
        return {
            languageSwitched: true
        }
    },
    methods: {
        toggleLanguage() {
            this.languageSwitched = !this.languageSwitched
        }
    }
})

languageSwitch.mount('#body')

// on scroll animations

