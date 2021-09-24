export default {
    fonts: {
        body: 'system-ui, sans-serif',
        heading: "'Handlee', cursive",
        monospace: 'Menlo, monospace',
      },
      fontSizes: [10, 12, 14, 16, 18, 20, 22, 24, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70],
      fontWeights: {
        ultraLite: 200,
        lite: 300,
        body: 400,
        heading: 700,
      },
      lineHeights: {
        body: 1.5,
        heading: 1.25,
        code: 2,
        expanded: 1.8
      },
      text: {
        default: {
          fontSize: [1,2,2],
          color: 'text',
          lineHeight: 'body',
          fontFamily: 'special',
        },
        caps: {
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
        },
        heading: {
          color: 'primary_a',
          letterSpacing: '.07em',
          fontFamily: 'special',
          fontWeight: 'bold',
      },
    },
    links: {
      heading:{
        textDecoration: 'none',
        color: 'primary_b',
        letterSpacing: 1
      }
    }
}