import "./App.css";
import React from "react";
import Header from "./components/Header";
import Asidebar from "./components/Asidebar";
import RecommendedVideos from "./components/RecommendedVideos";
function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__page">
        <Asidebar />

        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
