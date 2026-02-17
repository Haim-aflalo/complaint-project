import jwt from 'jsonwebtoken';
import 'dotenv/config';

export async function checkAdmin(req, res) {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ error: 'Password missing' });
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const token = jwt.sign({ isAdmin: true }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return res.status(200).json({ message: 'Authentication succeeded', token });
}
