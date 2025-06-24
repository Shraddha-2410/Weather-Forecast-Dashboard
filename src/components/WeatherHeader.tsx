
import { Calendar, MapPin } from 'lucide-react';

interface WeatherHeaderProps {
  location: string;
}

const WeatherHeader = ({ location }: WeatherHeaderProps) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="text-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-float">
            Weather Dashboard
          </h1>
          <div className="flex items-center gap-4 text-white/90">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span className="text-lg">{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={20} />
              <span className="text-lg">{currentDate}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WeatherHeader;
