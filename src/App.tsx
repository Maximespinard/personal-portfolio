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
      <main className="bg-main-background min-h-screen px-6 py-2 sm:px-20 sm:py-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
