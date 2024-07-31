export const updateThemeColor = (resolvedTheme: string) => {
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  if (themeColorMeta) {
    if (resolvedTheme === 'dark') {
      themeColorMeta.setAttribute('content', 'black');
    }
    if (resolvedTheme === 'light') {
      themeColorMeta.setAttribute('content', '#f5f5f7');
    }
  }
};
