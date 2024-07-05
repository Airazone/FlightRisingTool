var FRData = {};

FRData.OddsList = [
    ['Plentiful', 15],
    ['Common', 20],
    ['Uncommon', 25],
    ['Limited', 30],
    ['Rare', 35]
];

FRData.GenderList = [
    ['Male'],
    ['Female']
];

FRData.ModernPrimaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Bar', 'Common', '250000 T'],
    ['Clown', 'Common', '175000 T'],
    ['Fade', 'Common', '125000 T'],
    ['Falcon', 'Common', '170000 T'],
    ['Laced', 'Common', '140000 T'],
    ['Leopard', 'Common', '140000 T'],
    ['Orb', 'Common', ''],
    ['Piebald', 'Common', '235000 T'],
    ['Savannah', 'Common', '235000 T'],
    ['Speckle', 'Common', '125000 T'],
    ['Swirl', 'Common', '150000 T'],
    ['Tapir', 'Common', '185000 T'],
    ['Tiger', 'Common', '135000 T'],

    ['Boa', 'Uncommon', '170000 T'],
    ['Cherub', 'Uncommon', '185000 T'],
    ['Cider', 'Uncommon', '185000 T'],
    ['Flaunt', 'Uncommon', ''],
    ['Giraffe', 'Uncommon', '225000 T'],
    ['Jaguar', 'Uncommon', '250000 T'],
    ['Jupiter', 'Uncommon', '230000 T'],
    ['Lionfish', 'Uncommon', '230000 T'],
    ['Mosaic', 'Uncommon', '300000 T'],
    ['Python', 'Uncommon', 'The Coliseum'],
    ['Ribbon', 'Uncommon', ''],
    ['Ripple', 'Uncommon', '250000 T'],
    ['Vipera', 'Uncommon', '235000 T'],

    ['Boulder', 'Limited', ''],
    ['Chrysocolla', 'Limited', ''],
    ['Fern', 'Limited', ''],
    ['Ground', 'Limited', ''],
    ['Pinstripe', 'Limited', '100000 T (Baldwin)'],
    ['Poison', 'Limited', '100000 T (Baldwin)'],
    ['Skink', 'Limited', '95000 T (Baldwin)'],
    ['Slime', 'Limited', '100000 T (Baldwin)'],
    ['Stitched', 'Limited', '100000 T (Baldwin)'],
    ['Tide', 'Limited', ''],

    ['Crystal', 'Rare', '1500 G'],
    ['Harlequin', 'Rare', '1500 G'],
    ['Iridescent', 'Rare', '1500 G'],
    ['Metallic', 'Rare', '1500 G'],
    ['Petals', 'Rare', '1500 G'],
    ['Pharaoh', 'Rare', ''],
    ['Starmap', 'Rare', '1500 G'],
    ['Wasp', 'Rare', '1500 G']
]

FRData.ModernSecondaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Blend', 'Common', '100000 T'],
    ['Clouded', 'Common', '120000 T'],
    ['Edged', 'Common', '120000 T'],
    ['Freckle', 'Common', '90000 T'],
    ['Marbled', 'Common', '130000 T'],
    ['Paint', 'Common', '165000 T'],
    ['Peregrine', 'Common', '140000 T'],
    ['Safari', 'Common', '120000 T'],
    ['Striation', 'Common', '120000 T'],
    ['Stripes', 'Common', '90000 T'],
    ['Weaver', 'Common', ''],

    ['Blaze', 'Uncommon', ''],
    ['Breakup', 'Uncommon', '200000 T'],
    ['Current', 'Uncommon', '165000 T'],
    ['Daub', 'Uncommon', '165000 T'],
    ['Eel', 'Uncommon', ''],
    ['EyeSpots', 'Uncommon', '110000 T'],
    ['Flair', 'Uncommon', ''],
    ['Hex', 'Uncommon', '160000 T'],
    ['Hypnotic', 'Uncommon', '185000 T'],
    ['Morph', 'Uncommon', 'The Coliseum'],
    ['Noxtide', 'Uncommon', '170000 T'],
    ['Saddle', 'Uncommon', '150000 T'],
    ['Rosette', 'Uncommon', '185000 T'],
    ['Saturn', 'Uncommon', '160000 T'],
    ['Seraph', 'Uncommon', '125000 T'],

    ['Fissure', 'Limited', ''],
    ['Foam', 'Limited', ''],
    ['Malachite', 'Limited', ''],
    ['Myrid', 'Limited', ''],
    ['Paisley', 'Limited', ''],
    ['Patchwork', 'Limited', '100000 T (Baldwin)'],
    ['Sludge', 'Limited', '90000 T (Baldwin)'],
    ['Spinner', 'Limited', '95000 T (Baldwin)'],
    ['Toxin', 'Limited', '100000 T (Baldwin)'],
    ['Trail', 'Limited', '100000 T (Baldwin)'],

    ['Alloy', 'Rare', '1200 G'],
    ['Bee', 'Rare', '1200 G'],
    ['Butterfly', 'Rare', '1200 G'],
    ['Constellation', 'Rare', '1200 G'],
    ['Facet', 'Rare', '1200 G'],
    ['Jester', 'Rare', ''],
    ['Sarcophagus', 'Rare', '1200 G'],
    ['Shimmer', 'Rare', '1200 G']
]

FRData.ModernTertiaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Contour', 'Common', '150000 T'],
    ['Peacock-Gene', 'Common', '150000 T'],
    ['Points', 'Common', '130000 T'],
    ['Thylacine', 'Common', '155000 T'],
    ['Underbelly', 'Common', '150000 T'],

    ['Crackle', 'Uncommon', '190000 T'],
    ['Flecks', 'Uncommon', ''],
    ['Gembond', 'Uncommon', '200000 T'],
    ['Ghost', 'Uncommon', '160000 T'],
    ['Lace', 'Uncommon', '155000 T'],
    ['Okapi', 'Uncommon', '190000 T'],
    ['Ringlets', 'Uncommon', '155000 T'],
    ['Smoke-Gene', 'Uncommon', '190000 T'],
    ['Sparkle', 'Uncommon', ''],
    ['Spines', 'Uncommon', '190000 T'],

    ['Capsule', 'Limited', '110000 T (Baldwin)'],
    ['Firebreather', 'Limited', ""],
    ['Firefly', 'Limited', "Swipp's Swap Stand"],
    ['Keel', 'Limited', '100000 T (Baldwin)'],
    ['Polkadot', 'Limited', ''],
    ['Runes', 'Limited', '190000 T'],
    ['Polkadot', 'Limited', ''],
    ['Scales', 'Limited', '100000 T (Baldwin)'],
    ['Smirch', 'Limited', '200000 T'],
    ['Veined', 'Limited', '100000 T (Baldwin)'],

    ['Circuit', 'Rare', '1200 G'],
    ['Filigree', 'Rare', '1200 G'],
    ['Glimmer', 'Rare', '1200 G'],
    ['Glowtail', 'Rare', '1200 G'],
    ['Koi', 'Rare', ''],
    ['Opal', 'Rare', '1200 G'],
    ['Soap', 'Rare', ''],
    ['Stained', 'Rare', '1200 G'],
    ['Wish', 'Rare', '']
]

FRData.GaolerPrimaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Clown', 'Common', ''],
    ['Fade', 'Common', ''],
    ['Falcon', 'Common', '85000 T'],
    ['Laced', 'Common', ''],
    ['Leopard', 'Common', ''],
    ['Piebald', 'Common', '117500 T'],
    ['Shaggy', 'Common', '112500 T'],
    ['Tapir', 'Common', '92500 T'],
    ['Tiger', 'Common', '67500 T'],

    ['Bar', 'Uncommon', '125000 T'],
    ['Boa', 'Uncommon', ''],
    ['Cinder', 'Uncommon', ''],
    ['Flaunt', 'Uncommon', ''],
    ['Giraffe', 'Uncommon', '112500 T'],
    ['Jaguar', 'Uncommon', '70000 T'],
    ['Mosaic', 'Uncommon', '150000 T'],
    ['Ribbon', 'Uncommon', ''],
    ['Ripple', 'Uncommon', ''],

    ['Phantom', 'Limited', 'The Coliseum'],
    ['Pinstripe', 'Limited', '50000 T (Baldwin)'],
    ['Poison', 'Limited', ''],
    ['Skink', 'Limited', ''],
    ['Slime', 'Limited', ''],
    ['Stitched', 'Limited', ''],
    ['Tide', 'Limited', ''],

    ['Crystal', 'Rare', '750 G'],
    ['Wasp', 'Rare', '750 G']
]

FRData.GaolerSecondaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Blend', 'Common', ''],
    ['Clouded', 'Common', ''],
    ['Edged', 'Common', ''],
    ['EyeSpots', 'Common', ''],
    ['Marbled', 'Common', ''],
    ['Paint', 'Common', '75000 T'],
    ['Peregrine', 'Common', '70000 T'],
    ['Safari', 'Common', ''],
    ['Streak', 'Common', '80000 T'],
    ['Striation', 'Common', '60000 T'],
    ['Stripes', 'Common', '45000 T'],

    ['Blaze', 'Uncommon', ''],
    ['Breakup', 'Uncommon', '100000 T'],
    ['Current', 'Uncommon', ''],
    ['Daub', 'Uncommon', '82500 T'],    
    ['Eel', 'Uncommon', ''],
    ['Flair', 'Uncommon', ''],
    ['Hex', 'Uncommon', '80000 T'],
    ['Rosette', 'Uncommon', '50000 T'],
    ['Saddle', 'Uncommon', ''],

    ['Foam', 'Limited', ''],
    ['Patchwork', 'Limited', ''],
    ['Sludge', 'Limited', ''],
    ['Spinner', 'Limited', ''],
    ['Spirit', 'Limited', 'The Coliseum'],
    ['Toxin', 'Limited', ''],
    ['Trail', 'Limited', '50000 T (Baldwin)'],

    ['Bee', 'Rare', '600 G'],
    ['Facet', 'Rare', '600 G'],
]

FRData.GaolerTertiaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Contour', 'Common', ''],
    ['Shardflank', 'Common', '75000 T'],
    ['Thylacine', 'Common', '77500 T'],
    ['Underbelly', 'Common', '75000 T'],

    ['Braids', 'Uncommon', '85000 T'],
    ['Ghost', 'Uncommon', '80000 T'],
    ['Runes', 'Uncommon', '77500 T'],
    ['Ringlets', 'Uncommon', '77500 T'],
    ['Runes', 'Uncommon', ''],
    ['Smoke-Gene', 'Uncommon', '95000 T'],
    ['Sparkle', 'Uncommon', ''],
    ['Wintercoat', 'Uncommon', '95000 T'],

    ['Angler', 'Limited', ''],
    ['Blossom', 'Limited', "Swipp's Swap Stand"],
    ['Capsule', 'Limited', ''],
    ['Carnivore', 'Limited', ''],
    ['Crystalline', 'Limited', ''],
    ['Firebreather', 'Limited', ''],
    ['Riot', 'Limited', ''],
    ['Scorpion', 'Limited', '45000 T (Baldwin)'],
    ['Thundercrack', 'Limited', ''],
    ['Veined', 'Limited', '50000 T (Baldwin)'],
    ['Weathered', 'Limited', 'The Coliseum'],

    ['Fans', 'Rare', ''],
    ['Glimmer', 'Rare', ''],
    ['Gnarlhorns', 'Rare', '500 G'],
    ['Opal', 'Rare', '500 G'],
    ['Pinions', 'Rare', ''],
    ['Stained', 'Rare', '']

]

FRData.BanescalePrimaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Clown', 'Common', ''],
    ['Fade', 'Common', ''],    
    ['Falcon', 'Common', ''],
    ['Laced', 'Common', '70000 T'],
    ['Leopard', 'Common', ''],
    ['Marble', 'Common', '90000 T'],
    ['Savannah', 'Common', '70000 T'],
    ['Speckle', 'Common', ''],
    ['Tapir', 'Common', ''],
    ['Tiger', 'Common', '67500 T'],

    ['Bar', 'Uncommon', ''],
    ['Boa', 'Uncommon', ''],
    ['Cherub', 'Uncommon', '92500 T'],
    ['Chevron', 'Uncommon', '100000 T'],
    ['Cinder', 'Uncommon', ''],
    ['Giraffe', 'Uncommon', ''],
    ['Jaguar', 'Uncommon', '70000 T'],
    ['Ragged', 'Uncommon', '100000 T'],
    ['Ribbon', 'Uncommon', ''],
    ['Ripple', 'Uncommon', ''],

    ['Candycane', 'Limited', 'The Coliseum'],
    ['Fern', 'Limited', ''],
    ['Pinstripe', 'Limited', '50000 T (Baldwin)'],
    ['Poison', 'Limited', '50000 T (Baldwin)'],
    ['Skink', 'Limited', '47500 T (Baldwin)'],
    ['Tide', 'Limited', ''],

    ['Crystal', 'Rare', ''],
    ['Metallic', 'Rare', '750 G'],
    ['Petals', 'Rare', '750 G'],
    ['Pharaoh', 'Rare', '']
]

FRData.BanescaleSecondaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Blend', 'Common', ''],
    ['Clouded', 'Common', ''],
    ['Edged', 'Common', '60000 T'],
    ['EyeSpots', 'Common', ''],
    ['Freckle', 'Common', ''],
    ['Mottle', 'Common', '60000 T'],
    ['Peregrine', 'Common', ''],
    ['Safari', 'Common', '49000 T'],
    ['Striation', 'Common', ''],
    ['Stripes', 'Common', '45000'],

    ['Arrow', 'Uncommon', '80000 T'],
    ['Blaze', 'Uncommon', ''],
    ['Current', 'Uncommon', ''],
    ['Daub', 'Uncommon', ''],
    ['Eel', 'Uncommon', ''],
    ['Hex', 'Uncommon', ''],
    ['Rosette', 'Uncommon', '50000 T'],
    ['Saddle', 'Uncommon', ''],
    ['Seraph', 'Uncommon', '49000 T'],
    ['Tear', 'Uncommon', '80000 T'],

    ['Foam', 'Limited', ''],
    ['Paisley', 'Limited', ''],
    ['Spinner', 'Limited', '47500 T (Baldwin)'],
    ['Sugarplum', 'Limited', 'The Coliseum'],
    ['Toxin', 'Limited', '50000 T (Baldwin)'],
    ['Trail', 'Limited', '50000 T (Baldwin)'],

    ['Alloy', 'Rare', '600 G'],
    ['Butterfly', 'Rare', '600 G'],
    ['Facet', 'Rare', ''],
    ['Sarcophagus', 'Rare', '']
]

FRData.BanescaleTertiaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Contour', 'Common', '75000 T'],
    ['Peacock', 'Common', ''],
    ['Trimmings', 'Common', '75000 T'],
    ['Underbelly', 'Common', '75000 T'],

    ['Crackle', 'Uncommon', '95000 T'],
    ['Ghost', 'Uncommon', '80000 T'],
    ['Lace', 'Uncommon', '77500 T'],    
    ['Ringlets', 'Uncommon', '77500 T'],
    ['Sparkle', 'Uncommon', ''],
    ['Spines', 'Uncommon', ''],

    ['Capsule', 'Limited', ''],
    ['Carnivore', 'Limited', ''],
    ['Firebreather', 'Limited', ''],
    ['Flameforger', 'Limited', ''],
    ['Gliders', 'Limited', ''],
    ['Mistral', 'Limited', ''],
    ['Porcupine', 'Limited', '50000 T (Baldwin)'],
    ['Skeletal', 'Limited', 'The Coliseum'],
    ['Squiggle', 'Limited', "Swipp's Swap Stand"],

    ['Fans', 'Rare', '500 G'],
    ['Filigree', 'Rare', '500 G'],
    ['Glimmer', 'Rare', ''],
    ['Monarch', 'Rare', ''],
    ['Plumage', 'Rare', '500 G'],
    ['Soap', 'Rare', ''],
    ['Stained', 'Rare', ''],
    ['Wraith', 'Rare', '500 G']

    
]

FRData.VeilspunPrimaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Clown', 'Common', ''],
    ['Fade', 'Common', ''],
    ['Falcon', 'Common', ''],
    ['Laced', 'Common', ''],
    ['Leopard', 'Common', ''],
    ['Speckled', 'Common', ''],
    ['Tapir', 'Common', ''],

    ['Arc', 'Uncommon', ''],
    ['Bar', 'Uncommon', ''],
    ['Boa', 'Uncommon', ''],
    ['Bright', 'Uncommon', ''],
    ['Cinder', 'Uncommon', ''],
    ['Giraffe', 'Uncommon', ''],
    ['Jupiter', 'Uncommon', ''],
    ['Shell', 'Uncommon', ''],
    ['Sphinxmoth', 'Uncommon', ''],
    ['Vipera', 'Uncommon', ''],

    ['Boulder', 'Limited', ''],
    ['Fern', 'Limited', ''],
    ['Poison', 'Limited', ''],
    ['Skink', 'Limited', ''],
    ['Slime', 'Limited', ''],
    ['Stitched', 'Limited', ''],

    ['Crystal', 'Rare', ''],
    ['Petals', 'Rare', ''],
    ['Starmap', 'Rare', ''],
    ['Wasp', 'Rare', '']
]

FRData.VeilspunSecondaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Blend', 'Common', ''],
    ['Blouded', 'Common', ''],
    ['Edged', 'Common', ''],
    ['EyeSpots', 'Common', ''],
    ['Freckle', 'Common', ''],
    ['Hex', 'Common', ''],
    ['Peregrine', 'Common', ''],
    ['Striation', 'Common', ''],

    ['Blaze', 'Uncommon', ''],
    ['Daub', 'Uncommon', ''],
    ['Hawkmoth', 'Uncommon', ''],
    ['Hypnotic', 'Uncommon', ''],
    ['Loop', 'Uncommon', ''],
    ['Saddle', 'Uncommon', ''],
    ['Saturn', 'Uncommon', ''],
    ['Vivid', 'Uncommon', ''],
    ['Web', 'Uncommon', ''],

    ['Myrid', 'Limited', ''],
    ['Paisley', 'Limited', ''],
    ['Patchwork', 'Limited', ''],
    ['Sludge', 'Limited', ''],
    ['Spinner', 'Limited', ''],
    ['Toxin', 'Limited', ''],

    ['Bee', 'Rare', ''],
    ['Butterfly', 'Rare', ''],
    ['Constellation', 'Rare', ''],
    ['Facet', 'Rare', '']
]

FRData.VeilspunTertiaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Peacock-Gene', 'Common', ''],
    ['Underbelly', 'Common', ''],

    ['Ghost', 'Uncommon', ''],
    ['Okapi', 'Uncommon', ''],
    ['Runes', 'Uncommon', ''],
    ['Sparkle', 'Uncommon', ''],
    ['Thorns', 'Uncommon', ''],

    ['Angler', 'Limited', ''],
    ['Beetle', 'Limited', ''],
    ['Branches', 'Limited', ''],
    ['Brightshine', 'Limited', ''],
    ['Capsule', 'Limited', ''],
    ['Carnivore', 'Limited', ''],
    ['Crackle', 'Limited', ''],
    ['Firebreather', 'Limited', ''],
    ['Firefly', 'Limited', ''],
    ['Flecks', 'Limited', ''],
    ['Trickmurk', 'Limited', ''],
    ['Veined', 'Limited', ''],

    ['Diaphanous', 'Rare', ''],
    ['Filigree', 'Rare', ''],
    ['Glimmer', 'Rare', ''],
    ['Koi', 'Rare', ''],
    ['Mop', 'Rare', ''],
    ['Opal', 'Rare', ''],
    ['Stained', 'Rare', '']
]

FRData.AberrationPrimaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Clown', 'Common', ''],
    ['Fade', 'Common', ''],
    ['Falcon', 'Common', ''],
    ['Leopard', 'Common', ''],
    ['Savannah', 'Common', ''],
    ['Speckle', 'Common', ''],
    ['Swirl', 'Common', ''],
    ['Tapir', 'Common', ''],

    ['Bar', 'Uncommon', ''],
    ['Boa', 'Uncommon', ''],
    ['Cherub', 'Uncommon', ''],
    ['Cinder', 'Uncommon', ''],
    ['Flaunt', 'Uncommon', ''],
    ['Giraffe', 'Uncommon', ''],
    ['Jaguar', 'Uncommon', ''],
    ['Lionfish', 'Uncommon', ''],
    ['Ribbon', 'Uncommon', ''],
    ['Ripple', 'Uncommon', ''],
    ['Vipera', 'Uncommon', ''],

    ['Boulder', 'Limited', ''],
    ['Diamond', 'Limited', ''],
    ['Fern', 'Limited', ''],
    ['Ground', 'Limited', ''],
    ['Orb', 'Limited', ''],
    ['Pinstripe', 'Limited', ''],
    ['Poison', 'Limited', ''],
    ['Skink', 'Limited', ''],
    ['Slime', 'Limited', ''],
    ['Stitched', 'Limited', ''],
    ['Tide', 'Limited', ''],

    ['Crystal', 'Rare', ''],
    ['Harlequin', 'Rare', ''],
    ['Pharoh', 'Rare', ''],
    ['Starmap', 'Rare', ''],
    ['Wasp', 'Rare', '']
]

FRData.AberrationSecondaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Blend', 'Common', ''],
    ['EyeSpots', 'Common', ''],
    ['Freckled', 'Common', ''],
    ['Marbled', 'Common', ''],
    ['Peregrine', 'Common', ''],
    ['Safari', 'Common', ''],
    ['Striation', 'Common', ''],

    ['Blaze', 'Uncommon', ''],
    ['Current', 'Uncommon', ''],
    ['Daub', 'Uncommon', ''],
    ['Eel', 'Uncommon', ''],
    ['Flair', 'Uncommon', ''],
    ['Hex', 'Uncommon', ''],
    ['Hypnotic', 'Uncommon', ''],
    ['Noxtide', 'Uncommon', ''],
    ['Rosette', 'Uncommon', ''],
    ['Saddle', 'Uncommon', ''],
    ['Seraph', 'Uncommon', ''],

    ['Fissure', 'Limited', ''],
    ['Foam', 'Limited', ''],
    ['Myrid', 'Limited', ''],
    ['Paisley', 'Limited', ''],
    ['Patchwork', 'Limited', ''],
    ['Sludge', 'Limited', ''],
    ['Spade', 'Limited', ''],
    ['Spinner', 'Limited', ''],
    ['Toxin', 'Limited', ''],
    ['Trail', 'Limited', ''],
    ['Weaver', 'Limited', ''],

    ['Bee', 'Rare', ''],
    ['Constellation', 'Rare', ''],
    ['Facet', 'Rare', ''],
    ['Jester', 'Rare', ''],
    ['Sarcophagus', 'Rare', '']
]

FRData.AberrationTertiaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Contour', 'Common', ''],
    ['Kumo', 'Common', ''],
    ['Peacock-Gene', 'Common', ''],
    ['Thylacine', 'Common', ''],

    ['Braids', 'Uncommon', ''],
    ['Fangs', 'Uncommon', ''],
    ['Ghost', 'Uncommon', ''],
    ['Sparkle', 'Uncommon', ''],
    ['Spines', 'Uncommon', ''],
    ['Thorns', 'Uncommon', ''],

    ['Capsule', 'Limited', ''],
    ['Carnivore', 'Limited', ''],
    ['Firebreather', 'Limited', ''],
    ['Firefly', 'Limited', ''],
    ['Flameforger', 'Limited', ''],
    ['Flecks', 'Limited', ''],
    ['Mucous', 'Limited', ''],
    ['Polkadot', 'Limited', ''],
    ['Polypore', 'Limited', ''],
    ['Riot', 'Limited', ''],
    ['Scales', 'Limited', ''],
    ['Skeletal', 'Limited', ''],
    ['Smirch', 'Limited', ''],
    ['Veined', 'Limited', ''],

    ['Augment', 'Rare', ''],
    ['Fans', 'Rare', ''],
    ['Frills', 'Rare', ''],
    ['Glimmer', 'Rare', ''],
    ['Glowtail', 'Rare', ''],
    ['Jewels', 'Rare', ''],
    ['Koi', 'Rare', ''],
    ['Stained', 'Rare', '']
]

FRData.UndertidePrimaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Checkers', 'Common', ''],
    ['Clown', 'Common', ''],
    ['Fade', 'Common', ''],
    ['Falcon', 'Common', ''],
    ['Piebald', 'Common', ''],
    ['Savannah', 'Common', ''],
    ['Speckle', 'Common', ''],
    ['Swirl', 'Common', ''],
    ['Tapir', 'Common', ''],
    ['Tiger', 'Common', ''],
    ['Varnish', 'Common', ''],
    ['Wrought', 'Common', ''],

    ['Bar', 'Uncommon', ''],
    ['Boa', 'Uncommon', ''],
    ['Cherub', 'Uncommon', ''],
    ['Cinder', 'Uncommon', ''],
    ['Flaunt', 'Uncommon', ''],
    ['Giraffe', 'Uncommon', ''],
    ['Jaguar', 'Uncommon', ''],
    ['Jupiter', 'Uncommon', ''],
    ['Lionfish', 'Uncommon', ''],
    ['Ribbon', 'Uncommon', ''],
    ['Ripple', 'Uncommon', ''],
    ['Wolf', 'Uncommon', ''],

    ['Boulder', 'Limited', ''],
    ['Chrysocolla', 'Limited', ''],
    ['Fern', 'Limited', ''],
    ['Ground', 'Limited', ''],
    ['Octopus', 'Limited', ''],
    ['Orb', 'Limited', ''],
    ['Pinstripe', 'Limited', ''],
    ['Poison', 'Limited', ''],
    ['Stitched', 'Limited', ''],
    ['Tide', 'Limited', ''],

    ['Crystal', 'Rare', ''],
    ['Harlequin', 'Rare', ''],
    ['Metallic', 'Rare', ''],
    ['Petals', 'Rare', ''],
    ['Pharoh', 'Rare', ''],
    ['Starmap', 'Rare', ''],
    ['Wasp', 'Rare', '']
]

FRData.UndertideSecondaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Blend', 'Common', ''],
    ['Chess', 'Common', ''],
    ['EyeSpots', 'Common', ''],
    ['Freckled', 'Common', ''],
    ['Lacquer', 'Common', ''],
    ['Marbled', 'Common', ''],
    ['Paint', 'Common', ''],
    ['Peregrine', 'Common', ''],
    ['Safari', 'Common', ''],
    ['Spire', 'Common', ''],
    ['Striation', 'Common', ''],
    ['Stripes', 'Common', ''],

    ['Blaze', 'Uncommon', ''],
    ['Current', 'Uncommon', ''],
    ['Daub', 'Uncommon', ''],
    ['Eel', 'Uncommon', ''],
    ['Flair', 'Uncommon', ''],
    ['Hex', 'Uncommon', ''],
    ['Noxtide', 'Uncommon', ''],
    ['Pack', 'Uncommon', ''],
    ['Rosette', 'Uncommon', ''],
    ['Saddle', 'Uncommon', ''],
    ['Saturn', 'Uncommon', ''],
    ['Seraph', 'Uncommon', ''],

    ['Fissure', 'Limited', ''],
    ['Foam', 'Limited', ''],
    ['Malachite', 'Limited', ''],
    ['Myrid', 'Limited', ''],
    ['Paisley', 'Limited', ''],
    ['Patchwork', 'Limited', ''],
    ['Rings', 'Limited', ''],
    ['Toxin', 'Limited', ''],
    ['Trail', 'Limited', ''],
    ['Weaver', 'Limited', ''],

    ['Alloy', 'Rare', ''],
    ['Bee', 'Rare', ''],
    ['Butterfly', 'Rare', ''],
    ['Constellation', 'Rare', ''],
    ['Facet', 'Rare', ''],
    ['Jester', 'Rare', ''],
    ['Sarcophagus', 'Rare', '']
]

FRData.UndertideTertiaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Contour', 'Common', ''],
    ['Topcoat', 'Common', ''],
    ['Underbelly', 'Common', ''],

    ['Crackle', 'Uncommon', ''],
    ['Crest', 'Uncommon', ''],
    ['Gembond', 'Uncommon', ''],
    ['Ghost', 'Uncommon', ''],
    ['Jellyfish', 'Uncommon', ''],
    ['Okapi', 'Uncommon', ''],
    ['Plating', 'Uncommon', ''],
    ['Pufferfish', 'Uncommon', ''],
    ['Ringlets', 'Uncommon', ''],
    ['Runes', 'Uncommon', ''],
    ['Smoke', 'Uncommon', ''],
    ['Sparkle', 'Uncommon', ''],
    ['Spines', 'Uncommon', ''],
    ['Stinger', 'Uncommon', ''],
    ['Thorns', 'Uncommon', ''],

    ['Angler', 'Limited', ''],
    ['Blossom', 'Limited', ''],
    ['Branches', 'Limited', ''],
    ['Brightshine', 'Limited', ''],
    ['Capsule', 'Limited', ''],
    ['Carnivore', 'Limited', ''],
    ['Featherbeard', 'Limited', ''],
    ['Firebreather', 'Limited', ''],
    ['Firefly', 'Limited', ''],
    ['Flecks', 'Limited', ''],
    ['Keel', 'Limited', ''],
    ['Mistral', 'Limited', ''],
    ['Nudibranch', 'Limited', ''],
    ['Porcupine', 'Limited', ''],
    ['Scales', 'Limited', ''],
    ['Shark', 'Limited', ''],
    ['Smirch', 'Limited', ''],
    ['Veined', 'Limited', ''],
    ['Wavecrest', 'Limited', ''],

    ['Circuit', 'Rare', ''],
    ['Fans', 'Rare', ''],
    ['Filigree', 'Rare', ''],
    ['Koi', 'Rare', ''],
    ['Medusa', 'Rare', ''],
    ['Opal', 'Rare', ''],
    ['Remora', 'Rare', ''],
    ['Sailfin', 'Rare', ''],
    ['Soap', 'Rare', ''],
    ['Stained', 'Rare', ''],
    ['Tentacles', 'Rare', '']
]

FRData.AetherPrimaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Clown', 'Common', ''],
    ['Fade', 'Common', ''],
    ['Laced', 'Common', ''],
    ['Piebald', 'Common', ''],
    ['Spool', 'Common', ''],

    ['Bar', 'Uncommon', ''],
    ['Boa', 'Uncommon', ''],
    ['Cinder', 'Uncommon', ''],
    ['Flaunt', 'Uncommon', ''],
    ['Jaguar', 'Uncommon', ''],
    ['Jupiter', 'Uncommon', ''],
    ['Lionfish', 'Uncommon', ''],
    ['Mosaic', 'Uncommon', ''],

    ['Boulder', 'Limited', ''],
    ['Candy', 'Limited', ''],
    ['Python', 'Limited', ''],
    ['Skink', 'Limited', ''],
    ['Stitched', 'Limited', ''],
    ['Tide', 'Limited', ''],

    ['Metallic', 'Rare', ''],
    ['Petals', 'Rare', ''],
    ['Starmap', 'Rare', ''],
    ['Twinkle', 'Rare', '']
]

FRData.AetherSecondaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Blend', 'Common', ''],
    ['Edged', 'Common', ''],
    ['EyeSpots', 'Common', ''],
    ['Paint', 'Common', ''],
    ['Thread', 'Common', ''],

    ['Blaze', 'Uncommon', ''],
    ['Breakup', 'Uncommon', ''],
    ['Daub', 'Uncommon', ''],
    ['Flair', 'Uncommon', ''],
    ['Noxtide', 'Uncommon', ''],
    ['Noxtide', 'Uncommon', ''],
    ['Rosette', 'Uncommon', ''],
    ['Saddle', 'Uncommon', ''],
    ['Saturn', 'Uncommon', ''],

    ['Foam', 'Limited', ''],
    ['Lcing', 'Limited', ''],
    ['Morph', 'Limited', ''],
    ['Myrid', 'Limited', ''],
    ['Patchwork', 'Limited', ''],
    ['Spinner', 'Limited', ''],

    ['Alloy', 'Rare', ''],
    ['Butterfly', 'Rare', ''],
    ['Constellation', 'Rare', ''],
    ['Flicker', 'Rare', '']
]

FRData.AetherTertiaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Contour', 'Common', ''],
    ['Points', 'Common', ''],
    ['Underbelly', 'Common', ''],

    ['Gembond', 'Uncommon', ''],
    ['Lace', 'Uncommon', ''],
    ['Smoke', 'Uncommon', ''],
    ['Sparkle', 'Uncommon', ''],
    ['Spines', 'Uncommon', ''],
    ['Stinger', 'Uncommon', ''],
    ['Whiskers', 'Uncommon', ''],

    ['Carnivore', 'Limited', ''],
    ['Firebreather', 'Limited', ''],
    ['Flutter', 'Limited', ''],
    ['Keel', 'Limited', ''],
    ['Mandibles', 'Limited', ''],
    ['Scales', 'Limited', ''],
    ['Smirch', 'Limited', ''],
    ['Starfall', 'Limited', ''],
    ['Trickmurk', 'Limited', ''],

    ['Circuit', 'Rare', ''],
    ['Glowtail', 'Rare', ''],
    ['Monarch', 'Rare', ''],
    ['Space', 'Rare', ''],
    ['Stained', 'Rare', ''],
    ['Wish', 'Rare', '']
]
FRData.AuraboaPrimaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Caterpillar', 'Common', ''],
    ['Fade', 'Common', ''],
    ['Falcon', 'Common', ''],
    ['Laced', 'Common', ''],
    ['Piebald', 'Common', ''],
    ['Tapir', 'Common', ''],
    ['Tiger', 'Common', ''],
    ['Varnish', 'Common', ''],

    ['Bar', 'Uncommon', ''],
    ['Boa', 'Uncommon', ''],
    ['Flaunt', 'Uncommon', ''],
    ['Giraffe', 'Uncommon', ''],
    ['Jaguar', 'Uncommon', ''],
    ['Mochlus', 'Uncommon', ''],
    ['Mosaic', 'Uncommon', ''],
    ['Rattlesnake', 'Uncommon', ''],
    ['Ripple', 'Uncommon', ''],
    ['Vipera', 'Uncommon', ''],

    ['Boulder', 'Limited', ''],
    ['Fern', 'Limited', ''],
    ['Love', 'Limited', ''],
    ['Orb', 'Limited', ''],
    ['Python', 'Limited', ''],

    ['Harlequin', 'Rare', ''],
    ['Metallic', 'Rare', ''],
    ['Starmap', 'Rare', ''],
    ['Wicker', 'Rare', '']
]
DRData.AurboaboaSecondaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Blend', 'Common', ''],
    ['Edged', 'Common', ''],
    ['Lacquer', 'Common', ''],
    ['Larvae', 'Common', ''],
    ['Paint', 'Common', ''],
    ['Peregrine', 'Common', ''],
    ['Strition', 'Common', ''],
    ['Stripes', 'Common', ''],

    ['Breakup', 'Uncommon', ''],
    ['Current', 'Uncommon', ''],
    ['Daub', 'Uncommon', ''],
    ['Diamondback', 'Uncommon', ''],
    ['Flair', 'Uncommon', ''],
    ['Hex', 'Uncommon', ''],
    ['Hypnotic', 'Uncommon', ''],
    ['Riopa', 'Uncommon', ''],
    ['Rosette', 'Uncommon', ''],
    ['Saddle', 'Uncommon', ''],

    ['Affection', 'Limited', ''],
    ['Morph', 'Limited', ''],
    ['Myrid', 'Limited', ''],
    ['Paisley', 'Limited', ''],
    ['Weaver', 'Limited', ''],

    ['Alloy', 'Rare', ''],
    ['Constellation', 'Rare', ''],
    ['Jester', 'Rare', ''],
    ['Woven', 'Rare', '']
]
DRData.AurboaTertiaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Contour', 'Common', ''],
    ['Peacock', 'Common', ''],
    ['Terracotta', 'Common', ''],
    ['Topcoat', 'Common', ''],
    ['Underbelly', 'Common', ''],

    ['Crackle', 'Uncommon', ''],
    ['Crest', 'Uncommon', ''],
    ['Fishbone', 'Uncommon', ''],
    ['Paradise', 'Uncommon', ''],
    ['Smoke', 'Uncommon', ''],
    ['Spines', 'Uncommon', ''],
    ['Stinger', 'Uncommon', ''],
    ['Thorns', 'Uncommon', ''],
    ['Willow', 'Uncommon', ''],

    ['Batty', 'Limited', ''],
    ['Branches', 'Limited', ''],
    ['Capsule', 'Limited', ''],
    ['Crystalline', 'Limited', ''],
    ['Firebreather', 'Limited', ''],
    ['Firefly', 'Limited', ''],
    ['Greenskeeper', 'Limited', ''],
    ['Keel', 'Limited', ''],
    ['Polkadot', 'Limited', ''],
    ['Porcupine', 'Limited', ''],
    ['Rockbreaker', 'Limited', ''],
    ['Scales', 'Limited', ''],
    ['Scuttle', 'Limited', ''],

    ['Koi', 'Rare', ''],
    ['Medusa', 'Rare', ''],
    ['Opal', 'Rare', ''],
    ['Plumage', 'Rare', ''],
    ['Sailfin', 'Rare', ''],
    ['Stained', 'Rare', '']
]
FRData.DusthidePrimaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Checkers', 'Common', ''],
    ['Fade', 'Common', ''],
    ['Falcon', 'Common', ''],
    ['Laced', 'Common', ''],
    ['Orb', 'Common', ''],
    ['Piebald', 'Common', ''],
    ['Savannah', 'Common', ''],
    ['Speckle', 'Common', ''],
    ['Varnish', 'Common', ''],
    ['Wrought', 'Common', ''],

    ['Arc', 'Uncommon', ''],
    ['Bar', 'Uncommon', ''],
    ['Cinder', 'Uncommon', ''],
    ['Giraffe', 'Uncommon', ''],
    ['Jupiter', 'Uncommon', ''],
    ['Ribbon', 'Uncommon', ''],
    ['Ripple', 'Uncommon', ''],
    ['Strike', 'Uncommon', ''],

    ['Display', 'Limited', ''],
    ['Ground', 'Limited', ''],
    ['Pinstripe', 'Limited', ''],
    ['Sailfish', 'Limited', ''],
    ['Skink', 'Limited', ''],

    ['Harlequin', 'Rare', ''],
    ['Petals', 'Rare', ''],
    ['Petrified', 'Rare', ''],
    ['Wasp', 'Rare', '']
]
FRData.DusthideSecondaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Blend', 'Common', ''],
    ['Chess', 'Common', ''],
    ['Edged', 'Common', ''],
    ['Freckle', 'Common', ''],
    ['Lacquer', 'Common', ''],
    ['Paint', 'Common', ''],
    ['Peregrine', 'Common', ''],
    ['Safari', 'Common', ''],
    ['Spire', 'Common', ''],
    ['Weaver', 'Common', ''],

    ['Blaze', 'Uncommon', ''],
    ['Coil', 'Uncommon', ''],
    ['Current', 'Uncommon', ''],
    ['Daub', 'Uncommon', ''],
    ['Eel', 'Uncommon', ''],
    ['Hex', 'Uncommon', ''],
    ['Loop', 'Uncommon', ''],
    ['Saturn', 'Uncommon', ''],

    ['Fissure', 'Limited', ''],
    ['Marlin', 'Limited', ''],
    ['Parade', 'Limited', ''],
    ['Spinner', 'Limited', ''],
    ['Trail', 'Limited', ''],

    ['Bee', 'Rare', ''],
    ['Butterfly', 'Rare', ''],
    ['Jester', 'Rare', ''],
    ['Lode', 'Rare', '']
]
FRData.DusthideTertiaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Topcoat', 'Common', ''],
    ['Underbelly', 'Common', ''],

    ['Antlers', 'Uncommon', ''],
    ['Fishbone', 'Uncommon', ''],
    ['Gembond', 'Uncommon', ''],
    ['Ghost', 'Uncommon', ''],
    ['Okapi', 'Uncommon', ''],
    ['Ringlets', 'Uncommon', ''],
    ['Smoke', 'Uncommon', ''],
    ['Sparkle', 'Uncommon', ''],
    ['Spines', 'Uncommon', ''],
    ['Whiskers', 'Uncommon', ''],

    ['Angler', 'Limited', ''],
    ['Batty', 'Limited', ''],
    ['Blossom', 'Limited', ''],
    ['Carnivore', 'Limited', ''],
    ['Dewlap', 'Limited', ''],
    ['Greenskeeper', 'Limited', ''],
    ['Mandibles', 'Limited', ''],
    ['Pachy', 'Limited', ''],
    ['Poladot', 'Limited', ''],
    ['Wavecrest', 'Limited', ''],

    ['Augment', 'Rare', ''],
    ['Glowtail', 'Rare', ''],
    ['Opal', 'Rare', ''],
    ['Spores', 'Rare', ''],
    ['Stained', 'Rare', ''],
    ['Veil', 'Rare', '']
]
FRData.SandsurgePrimaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Arapaima', 'Common', ''],
    ['Clown', 'Common', ''],
    ['Fade', 'Common', ''],
    ['Piebald', 'Common', ''],
    ['Savannah', 'Common', ''],
    ['Swirl', 'Common', ''],
    ['Tapir', 'Common', ''],
    ['Tiger', 'Common', ''],
    ['Wrought', 'Common', ''],

    ['Boa', 'Uncommon', ''],
    ['Cherub', 'Uncommon', ''],
    ['Cinder', 'Uncommon', ''],
    ['Flaunt', 'Uncommon', ''],
    ['Jaguar', 'Uncommon', ''],
    ['Jupiter', 'Uncommon', ''],
    ['Lionfish', 'Uncommon', ''],
    ['Mosaic', 'Uncommon', ''],
    ['Rattlesnake', 'Uncommon', ''],

    ['Boulder', 'Limited', ''],
    ['Chrysocolla', 'Limited', ''],
    ['Ground', 'Limited', ''],
    ['Pinstripe', 'Limited', ''],
    ['Python', 'Limited', ''],
    ['Sailfish', 'Limited', ''],
    ['Slime', 'Limited', ''],

    ['Harlequin', 'Rare', ''],
    ['Wasp', 'Rare', '']
]
FRData.SandsurgeSecondaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Arowana', 'Common', ''],
    ['Blend', 'Common', ''],
    ['EyeSpots', 'Common', ''],
    ['Marbled', 'Common', ''],
    ['Paint', 'Common', ''],
    ['Safari', 'Common', ''],
    ['Spire', 'Common', ''],
    ['Striation', 'Common', ''],
    ['Stripes', 'Common', ''],

    ['Blaze', 'Uncommon', ''],
    ['Breakup', 'Uncommon', ''],
    ['Diamondback', 'Uncommon', ''],
    ['Flair', 'Uncommon', ''],
    ['Noxtide', 'Uncommon', ''],
    ['Rosette', 'Uncommon', ''],
    ['Saddle', 'Uncommon', ''],
    ['Saturn', 'Uncommon', ''],
    ['Seraph', 'Uncommon', ''],

    ['Fissure', 'Limited', ''],
    ['Malachite', 'Limited', ''],
    ['Marlin', 'Limited', ''],
    ['Morph', 'Limited', ''],
    ['Myrid', 'Limited', ''],
    ['Sludge', 'Limited', ''],
    ['Trail', 'Limited', ''],

    ['Bee', 'Rare', ''],
    ['Jester', 'Rare', '']
]
FRData.SandsurgeTertiaryGeneList = [
    ['Basic', 'Plentiful', '10000 T'],

    ['Chitin', 'Common', ''],
    ['Darts', 'Common', ''],
    ['Kumo', 'Common', ''],
    ['Peacock', 'Common', ''],
    ['Thylacine', 'Common', ''],
    ['Underbelly', 'Common', ''],

    ['Beard', 'Uncommon', ''],
    ['Crest', 'Uncommon', ''],
    ['Fishbone', 'Uncommon', ''],
    ['Gembond', 'Uncommon', ''],
    ['Lace', 'Uncommon', ''],
    ['Okapi', 'Uncommon', ''],
    ['Runes', 'Uncommon', ''],
    ['Sparkle', 'Uncommon', ''],
    ['Spines', 'Uncommon', ''],

    ['Branches', 'Limited', ''],
    ['Firebreather', 'Limited', ''],
    ['Keel', 'Limited', ''],
    ['Rockbreaker', 'Limited', ''],
    ['Shark', 'Limited', ''],
    ['Smirch', 'Limited', ''],
    ['Starfall', 'Limited', ''],
    ['Thundercrack', 'Limited', ''],

    ['Augment', 'Rare', ''],
    ['Soap', 'Rare', ''],
    ['Spectre', 'Rare', ''],
    ['Stained', 'Rare', '']
]

FRData.ColorList = [
    ['Maize', '#FFFDEA'],
    ['Cream', '#FFEFDC'],
    ['Antique', '#D8D6CD'],
    ['White', '#FFFFFF'],
    ['Moon', '#D8D7D8'],
    ['Ice', '#F1F3FF'],
    ['Orca', '#E0DFFF'],
    ['Platinum', '#C8BECE'],
    ['Silver', '#BBBABF'],
    ['Dust', '#9C9C9E'],
    ['Grey', '#808080'],
    ['Smoke', '#9494A9'],
    ['Gloom', '#535264'],
    ['Lead', '#413C3F'],
    ['Shale', '#4D4850'],
    ['Flint', '#626268'],
    ['Charcoal', '#545454'],
    ['Coal', '#4B4946'],
    ['Oilslick', '#342B25'],
    ['Black', '#333333'],
    ['Obsidian', '#1D2224'],
    ['Eldritch', '#252A25'],
    ['Midnight', '#292B38'],
    ['Shadow', '#392D43'],
    ['Blackberry', '#4B294F'],
    ['Mulberry', '#6e235d'],
    ['Plum', '#853390'],
    ['Wisteria', '#724E7B'],
    ['Thistle', '#8F7C8B'],
    ['Fog', '#A593B0'],
    ['Mist', '#E1CEFF'],
    ['Lavender', '#CCA4E0'],
    ['Heather', '#9777BD'],
    ['Purple', '#A261CF'],
    ['Orchid', '#D950FF'],
    ['Amethyst', '#993BD0'],
    ['Nightshade', '#782EB2'],
    ['Violet', '#643F9C'],
    ['Grape', '#570FC0'],
    ['Royal', '#4D2C89'],
    ['Eggplant', '#332B65'],
    ['Iris', '#535195'],
    ['Storm', '#757ADB'],
    ['Twilight', '#474AA0'],
    ['Indigo', '#2D237A'],
    ['Sapphire', '#0D095B'],
    ['Navy', '#212B5F'],
    ['Cobalt', '#003484'],
    ['Ultramarine', '#1C51E7'],
    ['Blue', '#324BA9'],
    ['Periwinkle', '#4866D5'],
    ['Lapis', '#2B84FF'],
    ['Splash', '#6394DD'],
    ['Cornflower', '#75A8FF'],
    ['Sky', '#AEC8FF'],
    ['Stonewash', '#7895C1'],
    ['Overcast', '#444F69'],
    ['Steel', '#556979'],
    ['Denim', '#2F4557'],
    ['Abyss', '#0D1E24'],
    ['Phthalo', '#0B2D46'],
    ['Azure', '#0A3D67'],
    ['Caribbean', '#0086CE'],
    ['Teal', '#2B768F'],
    ['Cerulean', '#00B4D6'],
    ['Cyan', '#00FFF0'],
    ['Robin', '#9AEAEF'],
    ['Aqua', '#72C4C4'],
    ['Turquoise', '#3AA0A1'],
    ['Spruce', '#8BBBB2'],
    ['Pistachio', '#E2FFE6'],
    ['Seafoam', '#B2E2BD'],
    ['Mint', '#9AFFC7'],
    ['Jade', '#61AB89'],
    ['Spearmint', '#148E67'],
    ['Thicket', '#005E48'],
    ['Peacock', '#1F4739'],
    ['Emerald', '#20603F'],
    ['Shamrock', '#236925'],
    ['Jungle', '#1E361A'],
    ['Hunter', '#1D2715'],
    ['Forest', '#425035'],
    ['Camo', '#51684C'],
    ['Algae', '#97AF8B'],
    ['Swamp', '#687F67'],
    ['Avocado', '#567C34'],
    ['Green', '#629C3F'],
    ['Fern', '#7ECE73'],
    ['Mantis', '#99FF9C'],
    ['Pear', '#8ECD55'],
    ['Leaf', '#A5E32D'],
    ['Radioactive', '#C6FF00'],
    ['Honeydew', '#D0E672'],
    ['Peridot', '#E8FFB5'],
    ['Chartreuse', '#B4CD3C'],
    ['Spring', '#A9A032'],
    ['Crocodile', '#828335'],
    ['Olive', '#697135'],
    ['Murk', '#4B4420'],
    ['Moss', '#7E7745'],
    ['Goldenrod', '#BEA55D'],
    ['Amber', '#C18E1B'],
    ['Honey', '#D1B300'],
    ['Lemon', '#FFE63B'],
    ['Yellow', '#F9E255'],
    ['Grapefruit', '#F7FF6F'],
    ['Banana', '#FFEC80'],
    ['Sanddollar', '#EBE7AE'],
    ['Flaxen', '#FDE9AE'],
    ['Ivory', '#FFD297'],
    ['Buttercup', '#F6BF6B'],
    ['Gold', '#E8AF49'],
    ['Metals', '#D1B046'],
    ['Marigold', '#FFB43B'],
    ['Sunshine', '#FA912B'],
    ['Saffron', '#FF8400'],
    ['Sunset', '#FFA248'],
    ['Peach', '#FFB576'],
    ['Cantaloupe', '#FF984F'],
    ['Orange', '#D5602B'],
    ['Bronze', '#B2560D'],
    ['Terracotta', '#B23B07'],
    ['Carrot', '#FF5500'],
    ['Fire', '#EF5C23'],
    ['Pumpkin', '#FF6840'],
    ['Tangerine', '#FF7360'],
    ['Cinnamon', '#C05A39'],
    ['Caramel', '#C67047'],
    ['Sand', '#B27749'],
    ['Tan', '#C49A70'],
    ['Beige', '#CABBA2'],
    ['Stone', '#827A64'],
    ['Taupe', '#6D665A'],
    ['Slate', '#564D48'],
    ['Driftwood', '#766359'],
    ['Latte', '#977B6C'],
    ['Dirt', '#76483F'],
    ['Clay', '#603F3D'],
    ['Sable', '#57372C'],
    ['Umber', '#2F1E1A'],
    ['Soil', '#5A4534'],
    ['Hickory', '#725639'],
    ['Tarnish', '#855C32'],
    ['Ginger', '#90532B'],
    ['Brown', '#8E5B3F'],
    ['Chocolate', '#563012'],
    ['Auburn', '#7B3C1D'],
    ['Copper', '#A44B28'],
    ['Rust', '#8B3220'],
    ['Tomato', '#BA311C'],
    ['Vermillion', '#E22D17'],
    ['Ruby', '#CD000E'],
    ['Cherry', '#AA0024'],
    ['Crimson', '#850012'],
    ['Garnet', '#5B0F14'],
    ['Sanguine', '#2E0002'],
    ['Blood', '#451717'],
    ['Maroon', '#652127'],
    ['Berry', '#8B272C'],
    ['Red', '#C1272D'],
    ['Strawberry', '#DE3235'],
    ['Cerise', '#A22929'],
    ['Carmine', '#B13A3A'],
    ['Brick', '#9A534D'],
    ['Coral', '#CC6F6F'],
    ['Blush', '#FFA2A2'],
    ['Cottoncandy', '#EB7997'],
    ['Watermelon', '#DB518D'],
    ['Magenta', '#E934AA'],
    ['Fuchsia', '#EC0089'],
    ['Raspberry', '#8A0249'],
    ['Wine', '#4D0F28'],
    ['Mauve', '#9C4875'],
    ['Pink', '#E77FBF'],
    ['Bubblegum', '#EAA9FF'],
    ['Rose', '#FFD6F6'],
    ['Pearl', '#FBE9F8']
]

FRData.ModernBreedList = [
    ['Fae', 'Plentiful', ['Insects']],
    ['Guardian', 'Plentiful', ['Meat', 'Seafood', 'Insects', 'Plants']],
    ['Mirror', 'Plentiful', ['Meat', 'Seafood']],
    ['Tundra', 'Plentiful', ['Plants']],

    ['Pearlcatcher', 'Common', ['Insects', 'Plants']],
    ['Ridgeback', 'Common', ['Seafood']],
    ['Snapper', 'Common', ['Plants', 'Seafood']],
    ['Spiral', 'Common', ['Insects', 'Meet']],

    ['Bogsneak', 'Uncommon',['Plants', 'Meat']],
    ['Fathom', 'Uncommon',['Plants', 'Seafood']],
    ['Skydancer', 'Uncommon', ['Plants', 'Insects']],
    ['Obelisk', 'Uncommon', ['Insects', 'Seafood']],

    ['Imperial', 'Limited', ['Insects', 'Meat', 'Seafood', 'Plants']],
    ['Nocturne', 'Limited', ['Meat', 'Insects']],

    ['Coatl', 'Rare', ['Seafood']],
    ['Wildclaw', 'Rare', ['Meat']]
]

FRData.AncientBreedList = [
    ['Gaoler', 'Common', ['Meat', 'Plants']],
    ['Banescale', 'Common', ['Insects', 'Seafood', 'Meat']],
    ['Veilspun', 'Common', ['Insects', 'Plants', 'Seafood', 'Meat']],
    ['Aberration', 'Common', ['Insects', 'Plants', 'Seafood', 'Meat']],
    ['Undertide', 'Common', ['Seafood', 'Plants']],
    ['Aether', 'Common', ['Plants', 'Insects']],
    ['Auraboa', 'Common', ['Seafood', 'Meat']],
    ['Dusthide', 'Common', ['Insects']],
    ['Sandsurge', 'Common', ['Insects', 'Meat']]
]

FRData.BreedRuleList = [
    [
        ['Plentiful', 'Plentiful'],
        [0.5, 0.5]
    ],
    [
        ['Plentiful', 'Common'],
        [0.7, 0.3]
    ],
    [
        ['Plentiful', 'Uncommon'],
        [0.85, 0.15]
    ],
    [
        ['Plentiful', 'Limited'],
        [0.97, 0.03]
    ],
    [
        ['Plentiful', 'Rare'],
        [0.99, 0.01]
    ],
    [
        ['Common', 'Common'],
        [0.5, 0.5]
    ],
    [
        ['Common', 'Uncommon'],
        [0.75, 0.25]
    ],
    [
        ['Common', 'Limited'],
        [0.9, 0.1]
    ],
    [
        ['Common', 'Rare'],
        [0.99, 0.01]
    ],
    [
        ['Uncommon', 'Uncommon'],
        [0.5, 0.5]
    ],
    [
        ['Uncommon', 'Limited'],
        [0.85, 0.15]
    ],
    [
        ['Uncommon', 'Rare'],
        [0.98, 0.02]
    ],
    [
        ['Limited', 'Limited'],
        [0.5, 0.5]
    ],
    [
        ['Limited', 'Rare'],
        [0.97, 0.03]
    ],
    [
        ['Rare', 'Rare'],
        [0.5, 0.5]
    ]
]

FRData.GeneRuleList = [
    [
        ['Plentiful', 'Plentiful'],
        [0.5, 0.5]
    ],
    [
        ['Plentiful', 'Common'],
        [0.7, 0.3]
    ],
    [
        ['Plentiful', 'Uncommon'],
        [0.85, 0.15]
    ],
    [
        ['Plentiful', 'Limited'],
        [0.97, 0.03]
    ],
    [
        ['Plentiful', 'Rare'],
        [0.99, 0.01]
    ],
    [
        ['Common', 'Common'],
        [0.5, 0.5]
    ],
    [
        ['Common', 'Uncommon'],
        [0.75, 0.25]
    ],
    [
        ['Common', 'Limited'],
        [0.9, 0.1]
    ],
    [
        ['Common', 'Rare'],
        [0.99, 0.01]
    ],
    [
        ['Uncommon', 'Uncommon'],
        [0.5, 0.5]
    ],
    [
        ['Uncommon', 'Limited'],
        [0.85, 0.15]
    ],
    [
        ['Uncommon', 'Rare'],
        [0.98, 0.02]
    ],
    [
        ['Limited', 'Limited'],
        [0.5, 0.5]
    ],
    [
        ['Limited', 'Rare'],
        [0.97, 0.03]
    ],
    [
        ['Rare', 'Rare'],
        [0.5, 0.5]
    ]
]

FRData.Age = [
    'Modern',
    'Ancient'
]
