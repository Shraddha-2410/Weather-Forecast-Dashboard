
import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface LocationSelectorProps {
  onLocationChange: (location: string) => void;
}

const LocationSelector = ({ onLocationChange }: LocationSelectorProps) => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const indianStates = [
    { code: 'MH', name: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad'] },
    { code: 'DL', name: 'Delhi', cities: ['New Delhi', 'Central Delhi', 'South Delhi', 'North Delhi'] },
    { code: 'KA', name: 'Karnataka', cities: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum'] },
    { code: 'TN', name: 'Tamil Nadu', cities: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli'] },
    { code: 'AP', name: 'Andhra Pradesh', cities: ['Hyderabad', 'Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore'] },
    { code: 'WB', name: 'West Bengal', cities: ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri'] },
    { code: 'GJ', name: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'] },
    { code: 'RJ', name: 'Rajasthan', cities: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Bikaner'] },
    { code: 'UP', name: 'Uttar Pradesh', cities: ['Lucknow', 'Kanpur', 'Ghaziabad', 'Agra', 'Varanasi'] },
    { code: 'MP', name: 'Madhya Pradesh', cities: ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain'] },
  ];

  const handleStateChange = (stateCode: string) => {
    setSelectedState(stateCode);
    setSelectedCity('');
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };

  const handleApplyLocation = () => {
    if (selectedCity && selectedState) {
      const stateName = indianStates.find(state => state.code === selectedState)?.name;
      const location = `${selectedCity}, ${stateName}`;
      onLocationChange(location);
    }
  };

  const selectedStateData = indianStates.find(state => state.code === selectedState);

  return (
    <Card className="bg-white/20 backdrop-blur-md border-white/30 p-6 text-white">
      <div className="flex items-center gap-2 mb-4">
        <MapPin size={20} />
        <h3 className="text-lg font-semibold">Select Location</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div>
          <label className="block text-sm text-white/80 mb-2">State</label>
          <Select value={selectedState} onValueChange={handleStateChange}>
            <SelectTrigger className="bg-white/10 border-white/30 text-white">
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent>
              {indianStates.map((state) => (
                <SelectItem key={state.code} value={state.code}>
                  {state.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm text-white/80 mb-2">City</label>
          <Select 
            value={selectedCity} 
            onValueChange={handleCityChange}
            disabled={!selectedState}
          >
            <SelectTrigger className="bg-white/10 border-white/30 text-white">
              <SelectValue placeholder="Select City" />
            </SelectTrigger>
            <SelectContent>
              {selectedStateData?.cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={handleApplyLocation}
          disabled={!selectedCity || !selectedState}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Apply Location
        </Button>
      </div>
    </Card>
  );
};

export default LocationSelector;
