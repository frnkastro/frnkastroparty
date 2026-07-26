import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import TinyDesk from "./TinyDesk";
import Shows from "./Shows";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tiny-desk" element={<TinyDesk />} />
      <Route path="/shows" element={<Shows />} />
    </Routes>
  );
}
