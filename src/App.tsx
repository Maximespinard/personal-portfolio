import { Route, Routes } from 'react-router';
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import Journey from './pages/Journey';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="bg-main-background min-h-screen py-6 px-10 sm:p-20 md:px-30 lg:px-20 overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
