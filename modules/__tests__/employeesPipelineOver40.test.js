const { employeesPipelineOver40 } = require("..");

const data = [
  {
    nom: "cadoret",
    prenom: "gael",
    age: "29",
    skills: "php,javascript,nodejs",
  },
  {
    nom: "dupond",
    prenom: "bob",
    age: "42",
    skills: "nodejs",
  },
  {
    nom: "doe",
    prenom: "joe",
    age: "36",
    skills: "javascript",
  },
];

const expectedResult = [
  {
    nom: "dupond",
    prenom: "bob",
    age: "42",
    skill: "nodejs",
    isSenior: true,
  },
];

describe("employeesPipelineOver40", () => {
  it("should filter and add senority to employees over 40", () => {
    const result = employeesPipelineOver40(data);
    expect(result).toStrictEqual(expectedResult);
  });
});
