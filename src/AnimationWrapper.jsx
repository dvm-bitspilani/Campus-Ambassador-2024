import React from "react";

import App from "./App.jsx";
import Leaderboard from "./Leaderboard.jsx";

import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import {
  Route,
  Routes,
} from "react-router-dom";

export default function AnimationWrapper() {
    
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<App />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </AnimatePresence>
  );
}
