import './App.css'
import RoutesApp from './routes/RoutesApp'
import { AuthProvider } from './context/auth'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AuthProvider>
          <RoutesApp />
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
