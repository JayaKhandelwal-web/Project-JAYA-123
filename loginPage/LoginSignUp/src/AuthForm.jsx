import React, { useState } from "react";

// AuthForm Component
const AuthForm = () => {

  // Toggle between Login & Signup
  const [isLogin, setIsLogin] = useState(true);

  // Form Data State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // Error & Loading State
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Show/Hide Password
  const [showPassword, setShowPassword] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Clear error on typing
    setErrors({
      ...errors,
      [e.target.name]: ""
    });
  };

  // Email Validation 
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);  // checks: abc@gmail.com format
  };

  // Form Validation Function
  const validateForm = () => {
    let newErrors = {};

    // Name validation (Signup only)
    if (!isLogin && formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!isValidEmail(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    // Password validation
    if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    // Confirm password validation
    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert(isLogin ? "Login Successful" : "Signup Successful ");

      // Reset form
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    }, 1500);
  };

  return (
    <div className="container">

      <div className="form-container">

        {/* Toggle Buttons */}
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>

          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="form">

          <h2>{isLogin ? "Welcome Back " : "Create Account "}</h2>

          {/* Name Field */}
          {!isLogin && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <small className="error">{errors.name}</small>}
            </>
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small className="error">{errors.email}</small>}

          {/* Password */}
          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          {errors.password && <small className="error">{errors.password}</small>}

          {/* Confirm Password */}
          {!isLogin && (
            <>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <small className="error">{errors.confirmPassword}</small>
              )}
            </>
          )}

          {/* Forgot Password */}
          {isLogin && <a href="#">Forgot Password?</a>}

          {/* Submit Button */}
          <button type="submit" disabled={loading}>
            {loading
              ? "Please wait..."
              : isLogin
              ? "Login"
              : "Signup"}
          </button>

          {/* Switch */}
          <p>
            {isLogin ? "New user?" : "Already have an account?"}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="switch-link"
            >
              {isLogin ? " Signup" : " Login"}
            </span>
          </p>

        </form>
      </div>
    </div>
  );
};

export default AuthForm;