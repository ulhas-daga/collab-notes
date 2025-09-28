import './App.css'
import {Route, Routes} from "react-router-dom"
import Categories from './components/Categories'
import Settings from './components/Settings'
import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage'
import Sidebar from './components/Sidebar/Sidebar'
import ProtectedRoute from './components/ProtectedRoute'
import NavBar from './components/Navbar'
import CategoryNotes from './components/CategoryView'
import NoteEditor from './components/NoteEditor'
// import NoteCard from './components/NoteCard'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     {/* just to check if these components are working */}
     <NavBar />
     <div className="d-flex">
      <Sidebar />
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route element={<ProtectedRoute/>}>
          <Route path="/" element={<HomePage />} />
          <Route path='/settings' element={<Settings/>} />
          <Route path='/categories' element={<Categories />} />
          <Route path="/categories/:name" element={<CategoryNotes />} />
          <Route path='/noteform' element={<NoteEditor/>} />
        </Route>
      </Routes>
      </div>
    </>
  )
}

export default App
