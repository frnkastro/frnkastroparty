import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import TinyDesk from "./TinyDesk";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tiny-desk" element={<TinyDesk />} />
    </Routes>
  );
}
