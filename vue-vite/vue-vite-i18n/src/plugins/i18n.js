import { createI18n } from 'vue-i18n'
import pt_BR from '../locales/pt_BR.json'
import en from '../locales/en.json'

const datetimeFormats = {
    'en-US': {
      short: {
        year: 'numeric', month: 'numeric', day: 'numeric'
      },
      long: {
        year: 'numeric', month: 'short', day: 'numeric',
        weekday: 'short', hour: 'numeric', minute: 'numeric'
      }
    },
    'pt-BR': {
      short: {
        year: 'numeric', month: 'numeric', day: 'numeric'
      },
      long: {
        year: 'numeric', month: 'short', day: 'numeric',
        weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true
      }
    }
  }

const i18n = createI18n({
    legacy: false,
    locale: import.meta.env.VITE_I18N_LOCALE || 'en-US',
    fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'en',
    messages: {
        "pt-BR": pt_BR.messages,
        "en-US": en.messages,
    },
    datetimeFormats
})

export default i18n