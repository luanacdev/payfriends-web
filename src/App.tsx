import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'styled-components'
import { AuthContextProvider } from './contexts/AuthContext'
import { RoutesApp } from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ToastContainer />
      <AuthContextProvider>
        <RoutesApp />
      </AuthContextProvider>
    </ThemeProvider>
  )
}
