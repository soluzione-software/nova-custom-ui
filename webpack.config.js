const path = require('path')

const novaPath = path.resolve(__dirname, 'vendor/laravel/nova');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve(novaPath, 'resources/js/'), // must stay here
            '@nova-path': novaPath,
        },
    },
}
