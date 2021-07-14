const { filterEmployeesBelowAge } = require("..");

const data = [
  { nom: "cadoret", prenom: "gael", age: "29", skill: "php" },
  { nom: "cadoret", prenom: "gael", age: "29", skill: "javascript" },
  { nom: "cadoret", prenom: "gael", age: "29", skill: "nodejs" },
  { nom: "dupond", prenom: "bob", age: "42", skill: "nodejs" },
  { nom: "doe", prenom: "joe", age: "36", skill: "javascript" },
];

const expectedResult = [
  { nom: "cadoret", prenom: "gael", age: "29", skill: "php" },
  { nom: "cadoret", prenom: "gael", age: "29", skill: "javascript" },
  { nom: "cadoret", prenom: "gael", age: "29", skill: "nodejs" },
  { nom: "doe", prenom: "joe", age: "36", skill: "javascript" },
];

describe("filterEmployeesBelowAge", () => {
  it("should filter employees below 40 y.o", () => {
    const employeesBelow40 = filterEmployeesBelowAge(data, 40);
    expect(employeesBelow40).toStrictEqual(expectedResult);
  });
});
