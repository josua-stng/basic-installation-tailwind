module.exports = {
  // mengaktifkan mode JIT  
  mode: 'jit',
  // pastikan tetap mengkonfigurasi purge, karena jit akan menggunakannya untuk prosesnya
  purge: ['build/**/*.html', 'build/**/*.js'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};