import './App.css';
import Post from "./Post.js";
import Header from "./Header.js";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={
    <main>
         <Header />
         <Post />
         <Post />
         <Post />
        </main>
      } />
      <Route path={'/login'} element={
        <div>login</div>
      } />
    </Routes>
  );
}

export default App;
