// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // config nuxt content
    modules: [
        '@vueuse/nuxt',
        'nuxt-windicss',
        '@pinia/nuxt',
        '@sidebase/nuxt-auth'
    ],
    auth: {
        origin: process.env.ORIGIN,
        enableGlobalAppMiddleware: true
    }
})
