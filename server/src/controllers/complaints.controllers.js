import { createCmp, getCmp } from '../services/complaints.services.js';

export async function createComplaint(req, res) {
  const { category, message } = req.body;
  try {
    const create = await createCmp(category, message);
    res.status(200).json({ message: 'success', data: create });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getComplaint(req, res) {
  try {
    const complaints = await getCmp();
    res.status(200).json({ complaints: complaints });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
