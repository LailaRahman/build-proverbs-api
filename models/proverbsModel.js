export function createProverb({ textDari, textPashto, translationEn, meaning, category }, existingData) {
  const nextId = existingData.length
    ? Math.max(...existingData.map(p => Number(p.id))) + 1
    : 1;

  return {
    id: String(nextId),
    textDari: textDari || '',
    textPashto: textPashto || '',
    translationEn: translationEn || '',
    meaning: meaning || '',
    category: category || ''
  };
}
