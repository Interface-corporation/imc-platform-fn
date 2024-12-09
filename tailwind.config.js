module.exports = {
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    theme: {
      extend: {
        backgroundImage: {
          'user-pic': "url('/user.png')",
        },
        container: {
          padding: '2rem',
        },
        screens: {
          'xs': '320px',  // You can add extra small screen support if needed
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
        },
        images: {
          domains: ['your-image-domain.com'],  // Add image domains here
          deviceSizes: [320, 420, 768, 1024, 1200],
          imageSizes: [16, 32, 48, 64, 96],
        },
      },
    },
    plugins: [],
  };
  
  