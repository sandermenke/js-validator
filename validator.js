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

const objectIsArray = obj => Array.isArray(obj)

const validate = (schema, obj) => {
    for (const name in schema) {
        if (typeof obj[name] === 'object') {
            if (schema[name] === 'array' && !objectIsArray(obj[name])) return false
            if (schema[name] === 'object' && objectIsArray(obj[name])) return false
        } else {
            if (typeof obj[name] != schema[name]) return false
        }
    }

    return true
}

console.log('Is object valid: ' + !!validate(personSchema, personObjF))