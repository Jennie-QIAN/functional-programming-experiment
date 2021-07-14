/**
 * Exercice duration : 45 minutes
 * With the given CSV file "employees.csv", create a JSON file "employeeBySkill.json" with following data :
 [
     { nom: 'cadoret', prenom: 'gael', age: '29', skill: 'php' },
     { nom: 'cadoret', prenom: 'gael', age: '29', skill: 'javascript' },
     { nom: 'cadoret', prenom: 'gael', age: '29', skill: 'nodejs' },
     { nom: 'dupond', prenom: 'bob', age: '42', skill: 'nodejs' }
 ]
 * TODO :
 * 1 - run command "yarn test" (watcher is active) until test pass !
 * 2 - Please fix TU inside "/modules/__tests__/transform.test.js" file (2 min)
 * 3 - Add your code to make the test pass (30 min)
 * 4 - Create the JSON file "employeeBySkill.json" (3 min)
 * 5 - ADVANCE: "Done!" must be the last message shown (NB: add log to watch order execution function) (10 min)
 */

const {
  writeFileSync,
  parseCSVFile,
  employeesPipelineOver40,
} = require("./modules");

const EMPLOYEES_FILENAME = "./employees.csv";
const EMPLOYEES_BY_SKILL_FILENAME = "./employeesBySkill.json";

(async () => {
  const fileContent = await parseCSVFile(EMPLOYEES_FILENAME);
  const employees = employeesPipelineOver40(fileContent);
  console.log("employees", employees);
  const data = JSON.stringify(employees);
  await writeFileSync(EMPLOYEES_BY_SKILL_FILENAME, data);
  console.log("Done!");
})();
