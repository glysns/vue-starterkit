import { createI18n } from 'vue-i18n'
  import pt_BR from '../locales/pt_BR.json'
  import en from '../locales/en.json'
  
  const i18n = createI18n({
    legacy: false,
    locale: import.meta.env.VITE_I18N_LOCALE || 'pt_BR',
    fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'en',
    messages: {
        pt_BR,
        en,
      
     
    }
  })

  export default i18n