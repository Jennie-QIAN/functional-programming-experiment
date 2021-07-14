const { enrichEmployeesWithSenority } = require("..");

const data = [
  { nom: "cadoret", prenom: "gael", age: "29", skill: "php" },
  { nom: "cadoret", prenom: "gael", age: "29", skill: "javascript" },
  { nom: "cadoret", prenom: "gael", age: "29", skill: "nodejs" },
  { nom: "dupond", prenom: "bob", age: "42", skill: "nodejs" },
  { nom: "doe", prenom: "joe", age: "36", skill: "javascript" },
];

const expectedResult = [
  { nom: "cadoret", prenom: "gael", age: "29", skill: "php", isSenior: false },
  {
    nom: "cadoret",
    prenom: "gael",
    age: "29",
    skill: "javascript",
    isSenior: false,
  },
  {
    nom: "cadoret",
    prenom: "gael",
    age: "29",
    skill: "nodejs",
    isSenior: false,
  },
  { nom: "dupond", prenom: "bob", age: "42", skill: "nodejs", isSenior: true },
  {
    nom: "doe",
    prenom: "joe",
    age: "36",
    skill: "javascript",
    isSenior: false,
  },
];

describe("enrichEmployeesWithSenority", () => {
  it("should enrich employees with senority property", () => {
    const result = enrichEmployeesWithSenority(data);
    expect(result).toStrictEqual(expectedResult);
  });
});
