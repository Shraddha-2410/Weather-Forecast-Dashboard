
import { Sun, Cloud, CloudRain, CloudSnow } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface CurrentWeatherProps {
  temperature: number;
  condition: string;
  description: string;
}

const CurrentWeather = ({ temperature, condition, description }: CurrentWeatherProps) => {
  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny': return <Sun size={80} className="text-yellow-300 animate-float" />;
      case 'cloudy': return <Cloud size={80} className="text-gray-200 animate-float" />;
      case 'rainy': return <CloudRain size={80} className="text-blue-200 animate-float" />;
      case 'snowy': return <CloudSnow size={80} className="text-blue-100 animate-float" />;
      default: return <Sun size={80} className="text-yellow-300 animate-float" />;
    }
  };

  return (
    <Card className="bg-white/20 backdrop-blur-md border-white/30 p-8 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {getWeatherIcon(condition)}
          <div>
            <div className="text-6xl md:text-7xl font-light mb-2">
              {temperature}°
            </div>
            <div className="text-xl text-white/90 capitalize">
              {description}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-white/70 mb-1">Feels like</div>
          <div className="text-2xl">{temperature + 2}°</div>
        </div>
      </div>
    </Card>
  );
};

export default CurrentWeather;
