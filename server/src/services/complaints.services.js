import { createComplaint, getComplaint } from '../dal/complaints.dal.js';

export async function createCmp(category, message) {
  if (!category || !message) {
    throw new Error('Some field empty please check your fields');
  } else {
    return await createComplaint(category, message);
  }
}

export async function getCmp() {
  return getComplaint();
}
