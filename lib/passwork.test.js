"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var password_1 = require("./password");
var PASSWORD = "1234";
var VALUES = {
    hash: "e05e61d810285cf04ba975fd015e46d64a18996ba552e1b4531bf71f2f0e583c8ee7bbca67257cbe49e46711ffc1c226a5ac59dcb65442a5268adbf53bcecaa6",
    salt: "59d336478b7d3d700dba360706d29ede",
    correctString: "1234",
    wrongString: "admin1234",
};
describe("hashPassword", function () {
    test("hassPassword returns an object with hash", function () {
        var result = password_1.hashPassword(PASSWORD);
        expect(result).toHaveProperty("hash");
    });
    test("hassPassword returns an object with salt", function () {
        var result = password_1.hashPassword(PASSWORD);
        expect(result).toHaveProperty("salt");
    });
});
describe("validatePassword", function () {
    test("with correct password", function () {
        expect(password_1.validatePassword(VALUES.correctString, VALUES.salt, VALUES.hash)).toBe(true);
    });
    test("with wrong password", function () {
        expect(password_1.validatePassword(VALUES.wrongString, VALUES.salt, VALUES.hash)).toBe(false);
    });
});
