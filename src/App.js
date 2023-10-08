import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';


function App() {
  return (

        <BrowserRouter>
        <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/" element={<Home/>} />

      </Routes>
      </BrowserRouter>


  );
}

export default App;
