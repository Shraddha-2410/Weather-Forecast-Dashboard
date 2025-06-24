
import { Card } from '@/components/ui/card';
import { Sun, Cloud, CloudRain, CloudSnow } from 'lucide-react';

interface ForecastDay {
  day: string;
  high: number;
  low: number;
  condition: string;
  description: string;
}

interface ForecastSectionProps {
  forecast: ForecastDay[];
}

const ForecastSection = ({ forecast }: ForecastSectionProps) => {
  const getWeatherIcon = (condition: string) => {
    const iconClass = "text-white/80";
    switch (condition) {
      case 'sunny': return <Sun size={32} className={`${iconClass} text-yellow-300`} />;
      case 'cloudy': return <Cloud size={32} className={`${iconClass} text-gray-300`} />;
      case 'rainy': return <CloudRain size={32} className={`${iconClass} text-blue-300`} />;
      case 'snowy': return <CloudSnow size={32} className={`${iconClass} text-blue-200`} />;
      default: return <Sun size={32} className={`${iconClass} text-yellow-300`} />;
    }
  };

  const getDayName = (dayString: string, index: number) => {
    if (dayString === 'Today') return 'Today';
    if (dayString === 'Tomorrow') return 'Tomorrow';
    
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + index);
    
    return futureDate.toLocaleDateString('en-IN', { weekday: 'short' });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-4">5-Day Forecast</h2>
      <Card className="bg-white/20 backdrop-blur-md border-white/30 p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {forecast.map((day, index) => (
            <div 
              key={day.day}
              className="text-center p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-white/90 font-medium mb-2">
                {getDayName(day.day, index)}
              </div>
              <div className="mb-3 flex justify-center">
                {getWeatherIcon(day.condition)}
              </div>
              <div className="text-white/80 text-sm mb-2 capitalize">
                {day.description}
              </div>
              <div className="flex justify-between text-white">
                <span className="font-semibold">{day.high}°</span>
                <span className="text-white/70">{day.low}°</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ForecastSection;
