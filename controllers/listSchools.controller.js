import pool from '../db.js';

const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; 
  const toRad = (v) => (v * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; 
};

export const listSchools = async (req, res) => {
  let { lat, lng } = req.query;

  lat = parseFloat(lat);
  lng = parseFloat(lng);


  if (isNaN(lat) || isNaN(lng)) {
    return res.status(400).json({ message: 'Invalid latitude or longitude' });
  }

  try {
    const [schools] = await pool.query('SELECT * FROM schools');

   
    const result = schools.map((school) => ({
      ...school,
      distance: getDistance(lat, lng, school.latitude, school.longitude),
    }));

   
    result.sort((a, b) => a.distance - b.distance);

   
    const response = result.map(({ distance, ...rest }) => rest);

    res.json(response);
  } catch (err) {
    console.error('Error retrieving schools:', err);
    res.status(500).json({ message: 'Error retrieving schools' });
  }
};
