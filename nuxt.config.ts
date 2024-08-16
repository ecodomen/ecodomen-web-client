// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    imports: {
        dirs: ["utils/**"]
    },

    typescript: { shim: false },

    modules: [
        "@pinia/nuxt"
    ],
    pages: true,

    css: [
        '~/assets/css/project.css',
    ],

    nitro: {
        compressPublicAssets: {
            brotli: true
        }
    }
});
