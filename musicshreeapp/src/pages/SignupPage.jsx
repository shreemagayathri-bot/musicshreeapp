import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, firebaseDB } from "../config/firebase.js";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";

function SignupPage() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    if (
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) ||
      username.length > 10 ||
      password.length < 8
    ) {
      alert(
        "Email must be valid." +
          "\n" +
          "Username must be between 1 to 10 characters." +
          "\n" +
          "Password must have at least 8 characters."
      );
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(firebaseDB, "users", user.uid), {
          email: user.email,
          username: username,
        });
      }
      alert("USER SIGNUP SUCCESSFULLY!");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
      navigate("/signup");
    }
  };

  return (
    <form
      className="signup-container w-[300px] flex flex-col justify-center items-center my-20 mx-auto bg-black border-2 border-black rounded-lg"
      onSubmit={handleSignup}
    >
      <h1 className="title text-4xl text-center uppercase p-5">sign up</h1>
      <label
        className="username text-2xl text-center uppercase p-2"
        htmlFor="username"
      >
        username
      </label>
      <input
        id="username"
        name="username"
        type="text"
        placeholder="username"
        value={username}
        onChange={(event) => {
          event.preventDefault();
          setUsername(event.target.value);
        }}
        required
      />
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
        value={email}
        onChange={(event) => {
          event.preventDefault();
          setEmail(event.target.value);
        }}
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
        value={password}
        onChange={(event) => {
          event.preventDefault();
          setPassword(event.target.value);
        }}
        required
      />
      <button
        className="signup-button my-5 bg-orange-500 border-white border-2 rounded-md text-black text-2xl p-5"
        type="submit"
      >
        submit
      </button>
      <p>
        Already Sign Up? <a href="/login">Login</a>
      </p>
    </form>
  );
}

export default SignupPage;