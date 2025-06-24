
import { Card } from '@/components/ui/card';
import { Thermometer, Wind, Sun, CloudRain } from 'lucide-react';

interface WeatherDetailsProps {
  humidity: number;
  windSpeed: number;
  uvIndex: number;
  visibility: number;
}

const WeatherDetails = ({ humidity, windSpeed, uvIndex, visibility }: WeatherDetailsProps) => {
  const details = [
    {
      icon: <CloudRain size={24} className="text-blue-400" />,
      label: 'Humidity',
      value: `${humidity}%`,
      description: humidity > 70 ? 'High' : humidity > 40 ? 'Moderate' : 'Low'
    },
    {
      icon: <Wind size={24} className="text-gray-300" />,
      label: 'Wind Speed',
      value: `${windSpeed} km/h`,
      description: windSpeed > 20 ? 'Strong' : windSpeed > 10 ? 'Moderate' : 'Light'
    },
    {
      icon: <Sun size={24} className="text-yellow-400" />,
      label: 'UV Index',
      value: uvIndex.toString(),
      description: uvIndex > 7 ? 'High' : uvIndex > 3 ? 'Moderate' : 'Low'
    },
    {
      icon: <Thermometer size={24} className="text-green-400" />,
      label: 'Visibility',
      value: `${visibility} km`,
      description: visibility > 8 ? 'Excellent' : visibility > 5 ? 'Good' : 'Poor'
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-white mb-4">Weather Details</h2>
      {details.map((detail, index) => (
        <Card 
          key={detail.label} 
          className="bg-white/20 backdrop-blur-md border-white/30 p-4 text-white hover:bg-white/25 transition-all duration-300"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {detail.icon}
              <div>
                <div className="text-sm text-white/70">{detail.label}</div>
                <div className="text-lg font-semibold">{detail.value}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-white/80">{detail.description}</div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default WeatherDetails;
