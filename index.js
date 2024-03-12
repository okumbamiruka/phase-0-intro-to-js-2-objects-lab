const employee = {
    name: 'Sam',
    streetAddress: '123 Main St'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a copy of the employee object using the spread operator
    const updatedEmployee = { ...employee };
    
    // Update the value for the specified key in the new employee object
    updatedEmployee[key] = value;
    
    // Return the new employee object
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    // Create a copy of the employee object using the spread operator
    const newEmployee = { ...employee };
    
    // Delete the property with the given key from the new employee object
    delete newEmployee[key];
    
    // Return the new employee object
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}



console.log(employee["name"]);