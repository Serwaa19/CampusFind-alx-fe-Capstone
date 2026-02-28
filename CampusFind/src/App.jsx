import { useState } from "react";
import HomeScreen from "./pages/HomeScreen";
import ReportScreen from "./pages/ReportScreen";
import BrowseScreen from "./pages/BrowseScreen";
import "./App.css";

function App() {
  const [currentScreen, setCurrentScreen] = useState("home");

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="app">
      {currentScreen === "home" && <HomeScreen onNavigate={navigate} />}
      {currentScreen === "report" && <ReportScreen onNavigate={navigate} />}
      {currentScreen === "browse" && <BrowseScreen onNavigate={navigate} />}
    </div>
  );
}

export default App;
