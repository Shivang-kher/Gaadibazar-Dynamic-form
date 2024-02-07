import './App.css';
import DynamicForm from './pages/DynamicForm';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import pvcv from './assets/pvcv';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<DynamicForm data={pvcv}/>} />
    </Routes>
    </>
  );
}

export default App;
