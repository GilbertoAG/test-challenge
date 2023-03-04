// You already have the methods imported
// const { default: expect } = require('expect');
const {getUser, getUsers} = require('./users');

const users = require ('./data');


// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

test("regresa el array de users", () => {
    expect(getUsers()).toStrictEqual(users);
})

test("Muestra el usuario con su ID especifico", () => {
    expect(getUser(2)).toStrictEqual(users[1]);
})

// READ documentationn