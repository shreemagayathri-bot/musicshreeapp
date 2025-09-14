import "./App.css";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LogInPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./Pages/SignupPage";
import HomePagewithProfile from "./Pages/HomePagewithProfile";
import LibraryPage from "./Pages/LibraryPage";
import AddToLibraryPage from "./Pages/AddToLibraryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<HomePagewithProfile />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/addtolibrary" element={<AddToLibraryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;