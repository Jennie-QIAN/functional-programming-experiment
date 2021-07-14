const fs = require("fs");
const csv = require("csvtojson");
const pipe = require("ramda/src/pipe");

const enrichEmployeeWithSkill = (employeeWithoutSkills) => (skill) => ({
  ...employeeWithoutSkills,
  skill,
});

const buildEmployeeBySkill = (skills, employeeWithoutSkills) =>
  skills.split(",").map(enrichEmployeeWithSkill(employeeWithoutSkills));

const duplicateEmployeeBySkill = (
  acc,
  { skills, ...employeeWithoutSkills }
) => [...acc, ...buildEmployeeBySkill(skills, employeeWithoutSkills)];

//const transform = (employees) => employees.flatMap(duplicateEmployeeBySkill);
const transform = (employees) => employees.reduce(duplicateEmployeeBySkill, []);

const writeFileSync = (fileName, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      resolve("fichier cree");
    });
  });

const parseCSVFile = (filePath) =>
  new Promise((resolve, reject) => {
    csv({ delimiter: ";" })
      .fromFile(filePath)
      .then((jsonObj) => {
        resolve(jsonObj);
      });
  });

const keepEmployeeBelowAge =
  (maxAge) =>
  ({ age }) =>
    age < maxAge;

const keepEmployeeBelow40 = keepEmployeeBelowAge(40);
const keepEmployeeBelow30 = keepEmployeeBelowAge(30);

const keepEmployeeOver40 = ({ age }) => age > 40;

const filterEmployeesBelow40 = (employees) =>
  employees.filter(keepEmployeeBelow40); //programming wishful thinking

const filterEmployeesBelowAge = (employees, maxAge) =>
  employees.filter(keepEmployeeBelowAge(maxAge));

const filterEmployeesOver40 = (employees) =>
  employees.filter(keepEmployeeOver40);

const enrichEmployeeWithSenority = (employee) => ({
  ...employee,
  isSenior: employee.age > 40,
});

const enrichEmployeesWithSenority = (employees) =>
  employees.map(enrichEmployeeWithSenority);

const employeesPipelineBelow40 = pipe(
  transform,
  filterEmployeesBelow40,
  enrichEmployeesWithSenority
);

const employeesPipelineOver40 = pipe(
  transform,
  filterEmployeesOver40,
  enrichEmployeesWithSenority
);

module.exports = {
  transform,
  writeFileSync,
  parseCSVFile,
  filterEmployeesBelow40,
  filterEmployeesOver40,
  enrichEmployeesWithSenority,
  employeesPipelineOver40,
  employeesPipelineBelow40,
  filterEmployeesBelowAge,
};
