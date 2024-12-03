const secondaryColorNeonBlue = '#485CEA';
const backgroundColor = '#F2F2F2';
const GradientColors = {
  grape: '#7011BA', // Grape
  neonBlue: secondaryColorNeonBlue, // Neon Blue
  vividSkyBlue: '#4CC6EF', // Vivid Sky Blue
};

const FontColors = {
  dark: {
    background: '#485CEA',
  },
  light: {
    background: '#FFFFFF',
  },
};
const StatusColors = {
  notPlayed: {
    background: secondaryColorNeonBlue,
    text: "notPlayed",
  },
  error: {
    background: '#BA1111',
    text: "error",
  },
  success: {
    background: '#11BA93',
    text: "success",
  },
};

export { GradientColors, FontColors, StatusColors, secondaryColorNeonBlue, backgroundColor };
