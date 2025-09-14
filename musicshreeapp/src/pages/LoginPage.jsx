import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../config/firebase.js";
import { useNavigate } from "react-router-dom";

function LogInPage() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      alert("USER LOGIN SUCCESSFULLY");
      navigate("/profile");
    } catch (error) {
      console.log(error.message);
      alert("LOG IN FAILED");
      navigate("/login");
    }
  };

  return (
    <form
      className="signup-container w-[300px] flex flex-col justify-center items-center my-20 mx-auto bg-black border-2 border-black rounded-lg"
      onSubmit={handleSignup}
    >
      <h1 className="title text-4xl text-center uppercase p-5">LOG IN</h1>
      <label
        className="email text-2xl text-center uppercase p-2"
        htmlFor="email"
      >
        email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="email"
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <label
        className="password text-2xl text-center uppercase p-2"
        htmlFor="password"
      >
        password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="password"
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <button
        className="signup-button my-5 bg-orange-500 border-white border-2 rounded-md text-black text-2xl p-5"
        type="submit"
      >
        submit
      </button>
      <p>
        Not Sign Up Yet? <a href="/signup">Sign Up</a>
      </p>
    </form>
  );
}

export default LogInPage;