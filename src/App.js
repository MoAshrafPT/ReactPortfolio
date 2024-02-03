import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Posts from './pages/Posts';
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
