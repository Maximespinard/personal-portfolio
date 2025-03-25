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
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
