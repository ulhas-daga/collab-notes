import './App.css'
import Categories from './components/Categories'
import Settings from './components/Settings'
import LoginForm from './components/LoginForm'
import NoteCard from './components/NoteCard'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CategoryNotes from './components/CategoryView'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
       <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:name" element={<CategoryNotes />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
