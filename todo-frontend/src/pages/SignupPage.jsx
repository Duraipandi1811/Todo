import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/register`, {
        name,
        email,
        password
      }); 
      alert("Registered Successfully...")
      navigate("/login");  // or "/dashboard"
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h4 className="text-center mb-2">Create Account</h4>
        <p className="text-center text-muted">Join us today!</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter your name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              placeholder="Create password" 
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
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="terms" />
            <label className="form-check-label" htmlFor="terms">
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-2">
            Create Account
          </button>
          <div className="text-center text-muted my-2">Or continue with</div>
          <button type="button" className="btn btn-outline-danger w-100">
            <i className="bi bi-google me-2"></i> Continue with Google
          </button>
        </form>
        <p className="text-center mt-3">
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
