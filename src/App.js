// src/App.js
import React from 'react';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <h1>Book a Table at Little Lemon</h1>
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;