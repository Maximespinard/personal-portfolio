import React from 'react';
import { Route, Routes } from 'react-router';
import NavBar from './components/navigation';
import Home from './pages/Home';
import Journey from './pages/Journey';

const App: React.FC = () => {
  return (
    <>
      <div className="bg-main-background">
        <header>
          <NavBar />
        </header>
        <main className="min-h-screen py-6 px-10 sm:p-20 md:px-30 lg:px-20 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journey" element={<Journey />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
