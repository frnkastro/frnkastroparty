import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Videos from "./Videos";
import Shows from "./Shows";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/shows" element={<Shows />} />
    </Routes>
  );
}
