const employee = {
    name: "Jeff",
    streetAddress: "Kitengela",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const copyOfEmployee = employee;
  
  copyOfEmployee.name = 'Sam';
  const newEmployee = { ...copyOfEmployee, streetAddress: '11 Broadway'};
  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee.name = 'Sam';
  employee.streetAddress = '12 Broadway';
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const copyOfEmployee = {...employee, name: undefined}
  return copyOfEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee.name;
  return employee;
}