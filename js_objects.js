let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

// Challenge 1
function printObj(students){
    for (i in students){
        console.log("Name: " + students[i].name + ", Cohort: " + students[i].cohort)
    }
}

printObj(students)

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
    {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
    {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

// Challenge 2
function nameLength(obj){
    console.log("EMPLOYEES");
    var length = 0;
    for (let i in obj.employees){
        length = (obj.employees[i].first_name.length + obj.employees[i].last_name.length);
        console.log(i + " - " + obj.employees[i].last_name.toUpperCase() + ", " + obj.employees[i].first_name.toUpperCase() + " - " + length);
    }
    console.log("MANAGERS");
    var length = 0;
    for (let i in obj.managers){
        length = (obj.managers[i].last_name.length + obj.managers[i].first_name.length);
        console.log(i + " - " + obj.managers[i].last_name.toUpperCase() + ", " + obj.managers[i].first_name.toUpperCase() + " - " + length);
    }
}
nameLength(users);