import './App.css'
import RoutesApp from './routes/RoutesApp'
import { AuthProvider } from './context/auth'

function App() {
  return (
    <>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </>
  )
}

export default App
