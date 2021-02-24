import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SidebarContext from "./contexts/SidebarContext";
import SearchVideoContext from "./contexts/SearchVideoContext";

import Header from "./components/Header/Header";
import Asidebar from "./components/Asidebar/Asidebar";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import SearchPage from "./components/SearchPage";
import VideoPage from "./components/VideoPage";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [videos, setVideos] = useState(null);
  const [channels, setChannels] = useState(null);

  useEffect(() => {
    sidebarToggle && (document.querySelector("body").style.overflow = "hidden");
    !sidebarToggle && (document.querySelector("body").style.overflow = "unset");
  }, [sidebarToggle]);

  return (
    <SidebarContext.Provider value={{ sidebarToggle, setSidebarToggle }}>
      <SearchVideoContext.Provider
        value={{ videos, setVideos, channels, setChannels }}
      >
        <div className="app">
          <Router>
            <Header />
            <div className="app__page">
              <Asidebar />
              <Switch>
                <Route path="/search/:searchTerm" component={SearchPage} />
                <Route path="/video/:videoId" component={VideoPage} />
                <Route path="/" exact component={RecommendedVideos} />
              </Switch>
            </div>
          </Router>
        </div>
      </SearchVideoContext.Provider>
    </SidebarContext.Provider>
  );
}

export default App;
