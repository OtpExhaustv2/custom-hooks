import { useGeolocation } from "./useGeolocation";

interface GeolocationComponentProps {}

const GeolocationComponent: React.FC<GeolocationComponentProps> = ({}) => {
  const {
    loading,
    error,
    data: { latitude, longitude },
  } = useGeolocation();
  return (
    <div>
      <div>Loading : {loading.toString()}</div>
      <div>Error: {error?.message}</div>
      <div>
        <div>Latitude: {latitude}</div>
        <div>Longitude: {longitude}</div>
      </div>
    </div>
  );
};

export default GeolocationComponent;
