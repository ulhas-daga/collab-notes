import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notesData } from "../../Data/NotesData"
// import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState([
        {email : "nagendra@lloyds.com", password : "Nagendra123", token : "ab2cd3ef", userId: 1},
        {email : "manish@lloyds.com", password : "Manish123", token : "ab2cd3ef", userId : 2},
        {email : "ulhas@lloyds.com", password : "Ulhas123", token : "ab2cd3ef", userId : 3},
  ])
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);

    try{
      let auth = -1
      for(let i = 0; i < 3; i++){
        if(credentials[i].email === formData.email && credentials[i].password === formData.password){
          auth = i; break;
        }
      }

      if(auth === -1){
        throw new Error();
      }

      localStorage.setItem("token", credentials[auth].token);
      localStorage.setItem("userId", credentials[auth].userId);
      localStorage.setItem("userName", credentials[auth].email);
      localStorage.setItem("NotesData", JSON.stringify(notesData));
      navigate("/");
    }
    catch(err){
      alert("Invalid Username or Password!")
    }

  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: "93vh"}}>
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
        </form>

      </div>
    </div>
  );
};

export default LoginForm;
