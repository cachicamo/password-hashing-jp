import { randomBytes, pbkdf2Sync } from "crypto";

/**
 * Given an input password a salt ans a hash
 * Does the given password match with the hash?
 * @param {string} inputPassword
 * @param {string} salt
 * @param {string} storedHash
 * @returns {boolean} does hash(inputPassword + salt) === storedHash?
 */
export const validatePassword = (
  inputPassword: string,
  salt: string,
  storedHash: string
): boolean => {
  const inputHash = pbkdf2Sync(
    inputPassword,
    salt,
    1000,
    64,
    "sha512"
  ).toString("hex");

  return storedHash === inputHash;
};

/**
 * @typedef {Object} HashAndSalt
 * @property {string} hash - The hash we got
 * @property {string} salt - The salt used for hashing
 */

/**
 * Given a Password, hash it with salt, then return the hash and the salt
 * @param {string} password
 * @returns {HashAndSalt} object containing the hash and the salt
 */
export const hashPassword = (
  password: string
): { hash: string; salt: string } => {
  const salt = randomBytes(16).toString("hex");
  const hash = pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");

  return { hash, salt };
};
