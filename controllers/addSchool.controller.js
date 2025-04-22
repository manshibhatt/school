import pool from '../db.js';

const isValidLatitude = (lat) => typeof lat === 'number' && lat >= -90 && lat <= 90;
const isValidLongitude = (lng) => typeof lng === 'number' && lng >= -180 && lng <= 180;

export const addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (
    typeof name !== 'string' ||
    typeof address !== 'string' ||
    !isValidLatitude(latitude) ||
    !isValidLongitude(longitude)
  ) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  try {
    await pool.execute(
      'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
      [name.trim(), address.trim(), latitude, longitude]
    );
    res.status(201).json({ message: 'School added successfully' });
  } catch (err) {
    console.error('DB Error:', err);
    res.status(500).json({ message: 'Database error' });
  }
};
