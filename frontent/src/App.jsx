
import Home from './pages/home'
import { Routes, Route, Link } from 'react-router-dom';
import Search from './pages/search.jsx';
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        </Routes>
     </div>
  )
}

export default App
