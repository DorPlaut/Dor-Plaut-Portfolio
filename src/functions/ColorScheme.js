const handleColorScheme = (color) => {
  const root = document.querySelector(':root');
  const rootStyle = getComputedStyle(root);

  //   const primaryColor = rootStyle.getPropertyValue('--primaryDarkColor');

  const colors = [
    {
      // green
      primaryDarkColor: '#243022',
      primaryLightColor: '#d9ffd2',
    },
    {
      // purple
      primaryDarkColor: '#302230',
      primaryLightColor: '#fcb1ff',
    },
    {
      // red
      primaryDarkColor: '#302222',
      primaryLightColor: '#ff9696',
    },
    {
      // blue
      primaryDarkColor: '#222830',
      primaryLightColor: '#c6d5ff',
    },
    {
      // yellow
      primaryDarkColor: '#302b1b',
      primaryLightColor: '#ffe38f',
    },
  ];
  let newColor;
  if (color == 'green') {
    newColor = colors[0];
  }
  if (color == 'purple') {
    newColor = colors[1];
  }
  if (color == 'red') {
    newColor = colors[2];
  }
  if (color == 'blue') {
    newColor = colors[3];
  }
  if (color == 'yellow') {
    newColor = colors[4];
  }

  root.style.setProperty('--primaryDarkColor', newColor.primaryDarkColor);
  root.style.setProperty('--primaryLightColor', newColor.primaryLightColor);
};

export default handleColorScheme;
