
import { useState, useEffect } from 'react';
import WeatherHeader from '../components/WeatherHeader';
import CurrentWeather from '../components/CurrentWeather';
import WeatherDetails from '../components/WeatherDetails';
import ForecastSection from '../components/ForecastSection';

const Index = () => {
  const [currentWeather, setCurrentWeather] = useState({
    temperature: 24,
    condition: 'sunny',
    location: 'San Francisco, CA',
    description: 'Sunny',
    humidity: 65,
    windSpeed: 12,
    uvIndex: 6,
    visibility: 10
  });

  const [forecast, setForecast] = useState([
    { day: 'Today', high: 24, low: 16, condition: 'sunny', description: 'Sunny' },
    { day: 'Tomorrow', high: 22, low: 14, condition: 'cloudy', description: 'Cloudy' },
    { day: 'Wednesday', high: 19, low: 12, condition: 'rainy', description: 'Light Rain' },
    { day: 'Thursday', high: 21, low: 13, condition: 'cloudy', description: 'Partly Cloudy' },
    { day: 'Friday', high: 25, low: 17, condition: 'sunny', description: 'Sunny' }
  ]);

  const getBackgroundClass = (condition: string) => {
    switch (condition) {
      case 'sunny': return 'bg-sunny';
      case 'cloudy': return 'bg-cloudy';
      case 'rainy': return 'bg-rainy';
      case 'snowy': return 'bg-snowy';
      default: return 'bg-sunny';
    }
  };

  return (
    <div className={`min-h-screen ${getBackgroundClass(currentWeather.condition)} transition-all duration-1000`}>
      <div className="min-h-screen bg-black/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="animate-fade-in">
            <WeatherHeader location={currentWeather.location} />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
              <div className="lg:col-span-2 space-y-6">
                <CurrentWeather 
                  temperature={currentWeather.temperature}
                  condition={currentWeather.condition}
                  description={currentWeather.description}
                />
                <ForecastSection forecast={forecast} />
              </div>
              
              <div className="space-y-6">
                <WeatherDetails 
                  humidity={currentWeather.humidity}
                  windSpeed={currentWeather.windSpeed}
                  uvIndex={currentWeather.uvIndex}
                  visibility={currentWeather.visibility}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
