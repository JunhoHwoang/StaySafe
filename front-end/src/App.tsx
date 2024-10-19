import { useState } from "react";
import { Button } from "./components/ui/button";
import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-red min-h-screen flex items-center justify-center">
      <Button variant="outline">Click me</Button>
    </div>
  );
}

export default App;
