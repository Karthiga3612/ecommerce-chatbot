import React, { useState } from 'react';
import ChatBot from './components/ChatBot';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>🛍️ Uplyft E-commerce ChatBot</h1>
      <ChatBot />
    </div>
  );
}

export default App;
