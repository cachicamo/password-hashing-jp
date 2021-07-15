import { hashPassword, validatePassword } from "./password";

const PASSWORD = "1234";

const VALUES = {
  hash: "e05e61d810285cf04ba975fd015e46d64a18996ba552e1b4531bf71f2f0e583c8ee7bbca67257cbe49e46711ffc1c226a5ac59dcb65442a5268adbf53bcecaa6",
  salt: "59d336478b7d3d700dba360706d29ede",
  correctString: "1234",
  wrongString: "admin1234",
};

describe("hashPassword", () => {
  test("hassPassword returns an object with hash", () => {
    const result = hashPassword(PASSWORD);
    expect(result).toHaveProperty("hash");
  });

  test("hassPassword returns an object with salt", () => {
    const result = hashPassword(PASSWORD);
    expect(result).toHaveProperty("salt");
  });
});

describe("validatePassword", () => {
  test("with correct password", () => {
    expect(
      validatePassword(VALUES.correctString, VALUES.salt, VALUES.hash)
    ).toBe(true);
  });

  test("with wrong password", () => {
    expect(validatePassword(VALUES.wrongString, VALUES.salt, VALUES.hash)).toBe(
      false
    );
  });
});
