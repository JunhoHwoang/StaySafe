import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/mainPage";
import CardPage from "./components/cardPage";
import "./App.css";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="bg-background text-foreground">
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="/card" element={<CardPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;