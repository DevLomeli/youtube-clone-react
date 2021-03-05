import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { SidebarProvider } from "./contexts/SidebarContext";
import { ThemeProvider } from "./contexts/ThemeContext";

import Header from "./components/Header/Header";
import Asidebar from "./components/Asidebar/Asidebar";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Subscriptions from "./pages/Subscriptions";
import SearchPage from "./pages/SearchPage";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className="app">
          <Router basename={process.env.PUBLIC_URL || "/"}>
            <Header />
            <div className="app__page">
              <Asidebar />
              <Switch>
                <Route path="/subscriptions" exact component={Subscriptions} />
                <Route path="/trending" exact component={Trending} />
                <Route
                  path="/search/:searchTerm"
                  exact
                  component={SearchPage}
                />
                <Route path="/video/:videoId" exact component={VideoPage} />
                <Route path="/" exact component={Home} />
              </Switch>
            </div>
          </Router>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
