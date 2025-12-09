import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Count from './Pages/Count.jsx'
import Todo from './Pages/Todo.jsx'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/count" element={<Count />} />
      <Route path="/todo"  element={<Todo />}  />
    </Routes>
  )
}

export default AppRoutes