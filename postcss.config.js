module.exports = {
    plugins: [    
        require('tailwindcss'),
        require('postcss-nesting'),
        require('cssnano')({
            preset: 'default',
        }),
        require('autoprefixer'),
    ],
}
