const personSchema = {
    name: 'string',
    age: 'number',
    siblings: 'array',
    metaData: 'object',
    active: 'boolean',
};

// Validates true
const personObj = {
    name: 'James',
    age: 25,
    siblings: ['Johnnathan'],
    metaData: {},
    active: true,
};

// Validates false
const personObjF = {
    name: 'James',
    age: 25,
    active: true,
};

const isArray = obj => Array.isArray(obj)

const validate = (schema, obj) => {
    for (const key in schema) {
        if (typeof obj[key] === 'object') {
            if (schema[key] === 'array' && !isArray(obj[key])) return false;
            if (schema[key] === 'object' && isArray(obj[key])) return false;
        } else {
            if (typeof obj[key] !== schema[key]) return false;
        }
    }

    return true;
};

const validate2 = (schema, obj) => {
    for (const key in schema) {
        const value = obj[key];
        const type = schema[key];

        if (type === "array") {
            if (!isArray(value)) return false;
        } else if (typeof value !== type) {
            return false;
        }
    }

    return true;
};

console.log('Is valid object valid: ' + validate(personSchema, personObj));
console.log('Is invalid object valid: ' + validate(personSchema, personObjF));

console.log("Is valid object valid2: " + validate2(personSchema, personObj));
console.log("Is invalid object valid2: " + validate2(personSchema, personObjF));