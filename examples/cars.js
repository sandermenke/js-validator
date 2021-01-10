const carSchema = {
    brand: 'string',
    type: 'string',
    milage: 'number',
    extras: 'array',
};

// Validates true
const carObj = {
    brand: 'Mazda',
    type: 'MX5 NB 1.8',
    milage: 199999.99,
    extras: [
        '2001 Special Edition'
    ],
};

// Validates false
const carObjF = {
    brand: 'BMW',
    type: '335',
    milage: '100000', // < No number
    extras: [
        'LCI',
        'KW Coilovers',
    ],
};
