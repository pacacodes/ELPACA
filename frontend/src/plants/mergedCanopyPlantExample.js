// Merged example for a canopy plant from wiki and ensembl sources
// Only one field for each overlapping info, all unique fields included

const mergedCanopyPlantExample = {
  // Overlapping fields (choose one name for each)
  common: "White Oak", // from wiki
  scientific: "Quercus alba", // from wiki (ensembl: scientific_name)
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Quercus_alba_001.jpg/320px-Quercus_alba_001.jpg", // from wiki (ensembl: photo)
  about: "White Oak is a large deciduous tree native to eastern North America, valued for its strong wood and edible acorns.", // from wiki (ensembl: about)

  // Unique to wiki
  image_flower: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Quercus_alba_flower.jpg",
  image_stem: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Quercus_alba_bark.jpg",
  image_leaf: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Quercus_alba_leaf.jpg",
  climate_zone: "3-9",
  native_region: "Eastern North America",
  soil_type: "Well-drained, loamy",
  watering: "Moderate",
  sun: "Full sun to partial shade",
  typical_use: [
    { type: "Edible", part: "Acorn", use: "Ground into flour, leached and eaten" },
    { type: "Timber", part: "Wood", use: "Furniture, flooring" }
  ],
  toxicity: [
    { part: "Acorn", to: ["Dogs", "Horses"], effect: "Gastrointestinal upset if consumed in large quantities" },
    { part: "Leaves", to: ["Humans"], effect: "Generally non-toxic" }
  ],
  companion_plants: ["Hazelnut", "Serviceberry"],
  antagonistic_plants: ["Black Walnut"],
  genetic_code: "ATCG...",
  wiki: "https://en.wikipedia.org/wiki/Quercus_alba",
  blurb: "White Oak is a large deciduous tree native to eastern North America, valued for its strong wood and edible acorns.",
  growth_rate: "slow",
  lifecycle: "perennial",
  root_type: "deep taproot",

  // Unique to ensembl
  classification: {
    kingdom: "Plantae",
    phylum: "Tracheophyta",
    class: "Magnoliopsida",
    order: "Fagales",
    family: "Fagaceae",
    genus: "Quercus",
    species: "Q. robur"
  },
  taxon_id: "58334",
  genome_assembly: "Quercus_robur_v2.3",
  dna_sequence: "[FASTA or large string omitted for brevity]"
};

export default mergedCanopyPlantExample;
