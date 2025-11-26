// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Working from './Pages/Work';
import ServicePage from './Pages/Servicepage';
import ContactPage from './Pages/ContactPage';
import PrivacyPage from "./Pages/Privacy";  
import TermsPage from "./Pages/Terms"

function App() {
  return (
    
      <div className="app-root min-h-screen flex flex-col">
        <Navbar />

        {/* Main content grows to push footer down */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Working />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage/>} />

            {/* Redirect any unknown route back to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    
  );
}

export default App;
