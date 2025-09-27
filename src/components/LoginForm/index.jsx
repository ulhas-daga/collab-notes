import {useState} from 'react'

const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
   return (
    <div>
      <h2>CollabNotes Lite</h2>
      <br></br>
      <h2>Welcome Back!</h2>
      <p>Enter your credentials to access your notes</p>
      <form>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required></input>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm