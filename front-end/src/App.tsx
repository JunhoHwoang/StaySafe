import { Button } from "./components/ui/button";
import Header from "./components/header";
import "./App.css";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <div className="flex flex-col w-full h-screen items-stretch">
      <Header />
      <div className="grid grid-cols-5 grid-rows-1  h-full">
        <div className="col-auto"></div>
        <Sidebar />
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default App;
