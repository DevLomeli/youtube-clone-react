import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SidebarContext from "./contexts/SidebarContext";

import Header from "./components/Header/Header";
import Asidebar from "./components/Asidebar/Asidebar";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Subscriptions from "./pages/Subscriptions";
import SearchPage from "./pages/SearchPage";
import VideoPage from "./components/VideoPage";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  useEffect(() => {
    sidebarToggle && (document.querySelector("body").style.overflow = "hidden");
    !sidebarToggle && (document.querySelector("body").style.overflow = "unset");
  }, [sidebarToggle]);

  return (
    <SidebarContext.Provider value={{ sidebarToggle, setSidebarToggle }}>
      <div className="app">
        <Router basename={process.env.PUBLIC_URL}>
          <Header />
          <div className="app__page">
            <Asidebar />
            <Switch>
              <Route path="/subscriptions" component={Subscriptions} />
              <Route path="/trending" component={Trending} />
              <Route path="/search/:searchTerm" component={SearchPage} />
              <Route path="/video/:videoId" component={VideoPage} />
              <Route path="/" exact component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    </SidebarContext.Provider>
  );
}

export default App;
