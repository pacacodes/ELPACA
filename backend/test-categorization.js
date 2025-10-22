/**
 * Test script for permaculture layer categorization
 * Run with: node test-categorization.js
 */

const { categorizeByPermacultureLayer } = require('./scraper');

console.log('Testing Permaculture Layer Categorization\n');
console.log('='.repeat(60));

// Test cases organized by expected layer
const testCases = {
    canopy: [
        'Quercus robur (English Oak)',
        'Acer platanoides (Norway Maple)',
        'Betula pendula (Silver Birch)',
        'Fagus sylvatica (European Beech)',
        'Pinus sylvestris (Scots Pine)',
        'Fraxinus excelsior (European Ash)',
        'Tilia cordata (Small-leaved Lime)',
        'Ulmus glabra (Wych Elm)',
        'Carpinus betulus (European Hornbeam)',
        'Alnus glutinosa (Common Alder)',
        'Castanea sativa (Sweet Chestnut)',
        'Populus tremula (Aspen)',
        'Salix alba (White Willow)'
    ],
    understory: [
        'Prunus avium (Wild Cherry)',
        'Sorbus aucuparia (Rowan)',
        'Crataegus monogyna (Common Hawthorn)',
        'Amelanchier lamarckii (Serviceberry)',
        'Cornus mas (Cornelian Cherry)',
        'Malus domestica (Apple)',
        'Pyrus communis (Pear)'
    ],
    shrub: [
        'Corylus avellana (Common Hazel)',
        'Sambucus nigra (Elder)',
        'Ribes rubrum (Red Currant)',
        'Rubus idaeus (Raspberry)',
        'Rosa canina (Dog Rose)',
        'Viburnum opulus (Guelder Rose)',
        'Vaccinium myrtillus (Blueberry)'
    ],
    herbaceous: [
        'Triticum aestivum (Wheat)',
        'Avena sativa (Oats)',
        'Hordeum vulgare (Barley)',
        'Secale cereale (Rye)',
        'Medicago sativa (Alfalfa)',
        'Taraxacum officinale (Dandelion)',
        'Plantago major (Broadleaf Plantain)'
    ],
    groundcover: [
        'Fragaria vesca (Wild Strawberry)',
        'Thymus vulgaris (Common Thyme)',
        'Sedum acre (Biting Stonecrop)',
        'Vinca minor (Lesser Periwinkle)',
        'Ajuga reptans (Carpet Bugle)'
    ]
};

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

// Run tests
for (const [expectedLayer, plants] of Object.entries(testCases)) {
    console.log(`\nTesting ${expectedLayer.toUpperCase()} layer:`);
    console.log('-'.repeat(60));
    
    for (const plantName of plants) {
        totalTests++;
        const result = categorizeByPermacultureLayer(plantName);
        const passed = result === expectedLayer;
        
        if (passed) {
            passedTests++;
            console.log(`✓ ${plantName.padEnd(45)} → ${result}`);
        } else {
            failedTests++;
            console.log(`✗ ${plantName.padEnd(45)} → ${result} (expected: ${expectedLayer})`);
        }
    }
}

// Print summary
console.log('\n' + '='.repeat(60));
console.log('TEST SUMMARY');
console.log('='.repeat(60));
console.log(`Total tests:  ${totalTests}`);
console.log(`Passed:       ${passedTests} (${Math.round(passedTests/totalTests*100)}%)`);
console.log(`Failed:       ${failedTests} (${Math.round(failedTests/totalTests*100)}%)`);
console.log('='.repeat(60));

// Test edge cases
console.log('\nTesting Edge Cases:');
console.log('-'.repeat(60));

const edgeCases = [
    ['Unknown Plant Species', 'herbaceous'], // Default case
    ['Some Generic Tree', 'herbaceous'], // No keywords match
    ['', 'herbaceous'] // Empty string
];

for (const [plantName, expectedLayer] of edgeCases) {
    const result = categorizeByPermacultureLayer(plantName);
    const passed = result === expectedLayer;
    const status = passed ? '✓' : '✗';
    console.log(`${status} "${plantName}" → ${result} (expected: ${expectedLayer})`);
}

console.log('\n' + '='.repeat(60));
console.log('Test complete!');

// Exit with appropriate code
process.exit(failedTests > 0 ? 1 : 0);
