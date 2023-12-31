import './App.css';
import Post from "./Post.js";
import Header from "./Header.js";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout.js";
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
