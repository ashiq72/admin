import { ThemeProvider } from './components/ThemeProvider';
import AppRouter from './router';

export const App = () => {
  return (
    <>
      <ThemeProvider
        defaultTheme='dark'
        storageKey='vite-ui-theme'
      >
        <AppRouter />
      </ThemeProvider>
    </>
  );
};
