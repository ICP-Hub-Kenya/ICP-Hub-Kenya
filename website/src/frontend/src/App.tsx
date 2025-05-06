import { useState } from 'react';

function App() {
  const [greeting, setGreeting] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = (document.getElementById('name') as HTMLInputElement).value;
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center p-4">
      {/* Test element to verify Tailwind styles */}
      <div className="fixed top-4 left-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
        Tailwind Test
      </div>
      <main className="bg-white/10 backdrop-blur-sm rounded-xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-8">
          <img src="/logo2.svg" alt="DFINITY logo" className="h-16" />
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white mb-2 font-oxygen">
              Enter your name:
            </label>
            <input
              id="name"
              type="text"
              className="bg-white/5 border border-borderLight rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Type your name..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primaryLight text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Click Me!
          </button>
        </form>

        {greeting && (
          <div className="mt-6 text-center">
            <p className="text-2xl font-rem text-badge">{greeting}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
