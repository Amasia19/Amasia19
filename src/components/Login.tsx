import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 3000);
  };

  const handleGoogleLogin = () => {
    setEmail("amasiarajaobelina.jw@gmail.com");
    setPassword("Amasia*22");
  };

  return (
    <div className="login-screen">
      <form onSubmit={handleSubmit} className="login-form">
        <img src="/logos.svg" alt="logo" className="logo" />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Connexion..." : "Se connecter"}
        </button>
        <button
          type="button"
          className="google-login"
          onClick={handleGoogleLogin}
          disabled={isLoading}
        >
          <img src="./src/image/google.svg" alt="Google" className="google" />
          <span className="text">Continue avec Google</span>
        </button>
        <button className="apple-login" disabled={isLoading}>
          <img src="/apple.svg" alt="" className="google" />
          Continue avec Apple
        </button>
      </form>
    </div>
  );
}

export default Login;
