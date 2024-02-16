import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'background.primary',
      },
    },
  },
  colors: {
    background: {
      primary: '#1A202C',
      secondary: 'rgb(79, 209, 197, 0.03)',
      gray: '#0F121A',
    },
    label: {
      primary: '#4FD1C5',
    },
    text: {
      primary: '#fff',
    },
  },
});
