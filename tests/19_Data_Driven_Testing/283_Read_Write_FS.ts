import fs from 'fs'
import path from 'path'

const jsonpath = path.join(__dirname,"279_data.json");
console.log(jsonpath)

const fileData = fs.readFileSync(jsonpath,'utf-8');
const fileDataJSObject = JSON.parse(fileData);


console.log(fileDataJSObject.username);
console.log(fileDataJSObject.password);

// Writing Data to a JSON File

const user = {
  name: "Pramod",
  role: "QA Trainer"
};

const jsonData = JSON.stringify(user);

fs.writeFileSync("output.json", jsonData);
console.log("JSON file created successfully");