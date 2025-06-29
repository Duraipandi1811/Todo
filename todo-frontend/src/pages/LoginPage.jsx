import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/login`, {
        email,
        password
      });

      localStorage.setItem("token", data.token);
      navigate("/"); // redirect to home/dashboard
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h4 className="text-center mb-2">Welcome Back!</h4>
        <p className="text-center text-muted">Sign in to your account</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email Address</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 position-relative">
            <label>Password</label>
            <input 
              type={showPassword ? "text" : "password"} 
              className="form-control" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span 
              className="position-absolute top-50 end-0 translate-middle-y me-3"
              style={{ cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`bi bi-eye${showPassword ? "-slash" : ""}`}></i>
            </span>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div>
              <input type="checkbox" className="form-check-input" id="remember" />
              <label className="form-check-label ms-1" htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="small">Forgot Password?</a>
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-2">
            Sign In
          </button>
          <div className="text-center text-muted my-2">Or continue with</div>
          <button type="button" className="btn btn-outline-danger w-100">
            <i className="bi bi-google me-2"></i> Continue with Google
          </button>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
