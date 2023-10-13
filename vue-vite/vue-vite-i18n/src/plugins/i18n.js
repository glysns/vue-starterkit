import { createI18n } from 'vue-i18n'

  import en from '../locales/en.json'
  import pt_BR from '../locales/pt_BR.json'
  
  const i18n = createI18n({
    legacy: false,
    locale: 'pt_BR',
    messages: {
      en,
      pt_BR
    }
  })

  export default i18n