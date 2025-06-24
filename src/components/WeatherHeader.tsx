
import { Calendar, MapPin, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface WeatherHeaderProps {
  location: string;
}

const WeatherHeader = ({ location }: WeatherHeaderProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setCurrentDate(new Date());
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <header className="text-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-float">
            Weather Dashboard
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-white/90">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span className="text-lg">{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={20} />
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <span className="text-lg">{formatDate(currentDate)}</span>
                <span className="text-lg font-mono">{formatTime(currentDate)}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 md:mt-0">
          <Button
            onClick={handleRefresh}
            variant="ghost"
            className="text-white hover:bg-white/20"
            disabled={isRefreshing}
          >
            <RefreshCw size={20} className={isRefreshing ? 'animate-spin' : ''} />
            <span className="ml-2">Refresh</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default WeatherHeader;
