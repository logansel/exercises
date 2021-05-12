import React from "react";
import "./styles/app.css";
import { PlatformPage, GamesPage } from "./components/PlatformPage";
// import GamesPage from "./components/GamesPage";

export const App: React.FC = () => {
  return (
    <div id="app" className="container default-flex justify-content-start align-items-start">
      <PlatformPage />
      <GamesPage />
    </div>
  );
};
