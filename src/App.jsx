import './App.css'
import Categories from './components/Categories'
import Settings from './components/Settings'
import LoginForm from './components/LoginForm'
import NoteCard from './components/NoteCard'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     {/* just to check if these components are working */}
    <Categories />
    <Settings/>
    <LoginForm/>
 
    </>
  )
}

export default App
