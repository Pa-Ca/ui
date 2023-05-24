/**
 * @brief Gets the name of a location
 *
 * @param latitude Location latitude
 * @param longitude Location longitude
 * @param api_key Google maps API key
 *
 * @returns Name of a location
 */
export default async (
  latitude: number,
  longitude: number,
  api_key: string
): Promise<string> => {
  const uri = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${api_key}`;

  const response = await fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  });
  const data = await response.json();
  return data.results[0].formatted_address;
};
