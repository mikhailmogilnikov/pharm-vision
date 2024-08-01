export const LightenDarkenColor = (col: string, amt: number) => {
  var usePound = false;

  if (col[0] == '#') {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
};

export const shiftColor = (hexColor: string, shiftAmount: number) => {
  // Функция для преобразования HEX цвета в RGB
  function hexToRgb(hex: string) {
    let r = 0,
      g = 0,
      b = 0;

    // Удаление символа #
    hex = hex.replace(/^#/, '');

    // Преобразование HEX в RGB
    if (hex.length === 4) {
      r = parseInt(hex.charAt(1) + hex.charAt(1), 16);
      g = parseInt(hex.charAt(2) + hex.charAt(2), 16);
      b = parseInt(hex.charAt(3) + hex.charAt(3), 16);
    } else if (hex.length === 7) {
      r = parseInt(hex.substr(1, 2), 16);
      g = parseInt(hex.substr(3, 2), 16);
      b = parseInt(hex.substr(5, 2), 16);
    }

    return { r, g, b };
  }

  // Функция для преобразования RGB цвета в HEX
  function rgbToHex(r, g, b) {
    return (
      '#' +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16).padStart(2, '0');

          return hex;
        })
        .join('')
    );
  }

  // Преобразование HEX цвета в RGB
  let { r, g, b } = hexToRgb(hexColor);

  // Сдвигаем цвет в сторону голубого, увеличивая значение синего канала и уменьшая значения красного и зеленого
  b = Math.min(255, b + shiftAmount);
  r = Math.max(0, r - shiftAmount / 2);
  g = Math.max(0, g - shiftAmount / 2);

  // Преобразование RGB обратно в HEX
  return rgbToHex(r, g, b);
};
