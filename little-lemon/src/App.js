// src/App.js
import React from 'react';
import BookingForm from './BookingForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Book a Table at Little Lemon</h1>
        <BookingForm />
      </header>
    </div>
  );
}

export default App;