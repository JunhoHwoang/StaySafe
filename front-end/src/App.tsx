import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/mainPage";
import CardPage from "./components/cardPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/:id" element={<CardPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
