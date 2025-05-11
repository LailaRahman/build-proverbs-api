import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { createProverb } from '../models/proverbsModel.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '../data/proverbs.json');

const readData = async () => JSON.parse(await fs.readFile(dataPath));
const writeData = async (data) => fs.writeFile(dataPath, JSON.stringify(data, null, 2));

// GET all proverbs
export const getAllProverbs = async (req, res) => {
  const data = await readData();
  const { category } = req.query;
  const result = category ? data.filter(p => p.category === category) : data;
  res.json(result);
};

// GET single proverb
export const getProverbById = async (req, res) => {
  const data = await readData();
  const id = Number(req.params.id);
  const proverb = data.find(p => p.id === id);
  if (proverb) {
    res.json(proverb);
  } else {
    res.status(404).json({ message: 'Not found' });
  }
};

// POST new proverb
export const addProverb = async (req, res) => {
  const data = await readData();
  const newProverb = createProverb(req.body, data);
  data.push(newProverb);
  await writeData(data);
  res.status(201).json(newProverb);
};

// PUT update proverb
export const updateProverb = async (req, res) => {
  const data = await readData();
  const index = data.findIndex(p => String(p.id) === String(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Not found' });

  data[index] = { ...data[index], ...req.body, id: data[index].id };
  await writeData(data);
  res.json(data[index]);
};

// DELETE proverb
export const deleteProverb = async (req, res) => {
  const data = await readData();
  const index = data.findIndex(p => String(p.id) === String(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Not found' });

  const deleted = data.splice(index, 1);
  await writeData(data);
  res.json(deleted[0]);
};
