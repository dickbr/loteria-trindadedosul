import { globalCss } from '.';

export const globalStyles = (color = '$violet500') => {
  const global = globalCss({
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      outline: 0
    },
    html: {
      fontSize: '16px'
    },
    'body, html, #root': {
      minHeight: '100vh',
      // maxWidth: 1280,
      margin: '0 auto'
    },
    body: {
      background: color,
      backgroundSize: 'cover',
      color: '$white',
      '-webkit-font-smoothing': 'antialiased',
      textRendering: 'optimizeLegibility',
      fontWeight: 400,
      fontFamily: '$default',
      fontSize: '$md'
    },
    'body, input, button': {
      fontFamily: '$default',
      fontSize: '$md'
    },
    'h1,h2,h3,h4,h5,h6,strong': {
      fontFamily: '$default',
      fontWeight: '$medium'
    },
    button: {
      cursor: 'pointer'
    },
    '[type=button], [type=reset], [type=submit], button': {
      '-webkitAppearance': 'button'
    },
    'button, input[type="submit"], input[type="reset"]': {
      background: 'none',
      color: 'inherit',
      border: 'none',
      padding: 0,
      font: 'inherit',
      cursor: 'pointer',
      outline: 'inherit'
    },
    'button, select': {
      textTransform: 'none'
    },
    'buton, input': {
      overflow: 'visible'
    },
    strong: {
      fontWeight: '$bold'
    },
    img: {
      maxWidth: '100%'
    },
    a: {
      textDecoration: 'none'
    }
  });

  return global();
};
