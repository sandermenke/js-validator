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
    for (const key in schema) {
        if (typeof obj[key] === 'object') {
            if (schema[key] === 'array' && !objectIsArray(obj[key])) return false
            if (schema[key] === 'object' && objectIsArray(obj[key])) return false
        } else {
            if (typeof obj[key] != schema[key]) return false
        }
    }

    return true
}

console.log('Is valid object valid: ' + !!validate(personSchema, personObj))
console.log('Is invalid object valid: ' + !!validate(personSchema, personObjF))