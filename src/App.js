import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import TinyDesk from "./TinyDesk";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tiny-desk" element={<TinyDesk />} />
    </Routes>
  );
};

export default App;
