import React from 'react';
import Header from './Header';

import QuizApp from './QuizApp';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <QuizApp />
      <Footer />
    </div>
  );
}

export default App;
