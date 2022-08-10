
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChessBoard from './components/ChessBoard/ChessBoard';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import Header from './components/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/chessBoard" element={<ChessBoard></ChessBoard>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
      </Routes>
    </div>
  );
}

export default App;
