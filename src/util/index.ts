export const getImages = (name) => {
  return `https://raw.githubusercontent.com/tristansoriaga/game-of-thrones-quotes/main/src/images/characters/${name}/1.webp`;
};

export const getBackground = () => {
  const random = Math.floor(Math.random() * 10);
  const arrTexture = ['carbon_fibre.webp', 'connectwork.webp', 'dark-honeycomb.webp', 'double-bubble-dark.webp', 'green_dust_scratch.webp', 'halftone-yellow.webp', 'old_map.webp', 'pool_table.webp', 'wheat.webp', 'y-so-serious.webp'];
  return `https://raw.githubusercontent.com/tristansoriaga/game-of-thrones-quotes/main/src/images/textures/${arrTexture[random]}`;
};
