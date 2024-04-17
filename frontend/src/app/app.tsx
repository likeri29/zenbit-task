import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Register, Error } from "../pages/pages";
import { Header } from "../components/components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
