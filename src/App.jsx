// src/App.jsx
import { useState } from 'react';

function App() {
  const [country, setCountry] = useState('');
  const [meals, setMeals] = useState([]);

  const handleSearch = async () => {
    if (!country.trim()) return;

    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error('Error fetching meals:', error);
      setMeals([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 min-h-screen text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Header with neon effect */}
        <div className="text-center mb-16">
          <div className="inline-block p-8 glass-effect rounded-3xl neon-glow mb-6">
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              FOODIE
            </h1>
            <div className="text-2xl">🌍✨🍜</div>
          </div>
          <p className="text-xl text-purple-200 font-light">Explore global cuisines in style</p>
        </div>

        {/* Search bar with futuristic design */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="glass-effect rounded-2xl p-8">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="🌎 Type a country name..."
                className="flex-1 bg-white/10 border-2 border-purple-400/30 rounded-xl px-6 py-4 text-white placeholder-purple-300 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all"
              />
              <button
                onClick={handleSearch}
                className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 px-8 py-4 rounded-xl font-bold text-white shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
              >
                DISCOVER
              </button>
            </div>
          </div>
        </div>

        {/* Cards grid layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {meals.map((meal) => (
            <div key={meal.idMeal} className="food-card break-inside-avoid mb-6">
              <div className="bg-gradient-to-br from-purple-800/40 to-blue-800/40 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative overflow-hidden">
                  <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-bold text-xl text-white drop-shadow-lg leading-tight">{meal.strMeal}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                      #{meal.idMeal}
                    </span>
                    <div className="text-2xl">🍽️</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;