import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import OurShop from './pages/our-shop';

function App() {
  const [greeting, setGreeting] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = (document.getElementById('name') as HTMLInputElement).value;
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<OurShop />} />
      </Routes>
    </Router>
  );
}

export default App;
