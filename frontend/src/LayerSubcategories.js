// LayerSubcategories.js
// Utility for grouping plant data by subcategories for layer popups

export const SUBCATEGORY_LABELS = [
  'Native Region',
  'Climate Zone',
  'Watering',
  'Sun',
  'Soil Type',
  'Typical Use'
];

// Example: group plants by subcategory value
export function groupPlantsBySubcategory(plants, subcategory) {
  // subcategory should be one of SUBCATEGORY_LABELS
  const key = subcategory.replace(/\s+/g, '').toLowerCase();
  const grouped = {};
  plants.forEach(plant => {
    const value = plant[key] || 'Unknown';
    if (!grouped[value]) grouped[value] = [];
    grouped[value].push(plant);
  });
  return grouped;
}

// Example usage:
// import { groupPlantsBySubcategory, SUBCATEGORY_LABELS } from './LayerSubcategories';
// const byRegion = groupPlantsBySubcategory(plants, 'Native Region');
