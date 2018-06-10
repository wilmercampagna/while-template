import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import messages from '@/tasks/messages'

Vue.use(VueI18n)

const messages = {
  en: {
    login: 'Login',
    email: 'Email',
    password: 'Password',
    acc1: 'Havent an account',
    acc2: 'Create One.',
    orlog: 'Or Login With',
    gologin: 'Go Login',
    signin: 'Sign In',
    cAccount: 'Create Account',
    home: 'Home',
    search: '>> >> Search << <<'
  },
  es: {
    login: 'Iniciar Sesión',
    email: 'Correo',
    password: 'Contraseña',
    acc1: 'No tienes una cuenta?',
    acc2: 'Registrate',
    orlog: 'O Inicia Sesión Con',
    gologin: 'Iniciar Sesión',
    signin: 'Registrate',
    cAccount: 'Crear Cuenta',
    home: 'Inicio',
    search: '>> >> Buscar << <<'
  }
}

const i18n = new VueI18n({
  messages,
  locale: 'es'
})

export default i18n
