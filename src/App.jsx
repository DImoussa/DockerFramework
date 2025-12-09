import { BrowserRouter as Router,Link } from 'react-router-dom'
import AppRoutes from './route.jsx' 


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/about">À propos</Link> |{" "}
        <Link to="/count">Compteur</Link> |{" "}
        <Link to="/todo">Todo liste</Link>
      </nav>
      <AppRoutes />
     </Router>
  )
}

export default App
