// pass the array and find the largest salary people's object and return in the finalArray

let presentProb = (array) => {
    let result = [];
    let max = {};
    for (let i = 0; i < array.length; i++) {
        let inner = array[i];
        for (let j = 0; j < inner.length; j++) {
            if (inner[j].salary <= inner[j + 1]?.salary) {
                max = inner[j + 1];
            }
        }
        result.push([max]);
        max = {};
    }
    return result;
}

let array = [
    [
        {
            empId: 1,
            empName: 'veer',
            salary: 1000000
        },
        {
            empId: 2,
            empName: 'pandya',
            salary: 2000000
        },
        {
            empId: 1,
            empName: 'kattabomman',
            salary: 1500000
        },
    ],
    [
        {
            empId: 4,
            empName: 'brahma',
            salary: 1100000
        },
        {
            empId: 5,
            empName: 'saketa',
            salary: 1200000
        },
        {
            empId: 6,
            empName: 'mandan',
            salary: 1300000
        },
    ],
    [
        {
            empId: 7,
            empName: 'etho',
            salary: 1700000
        },
        {
            empId: 8,
            empName: 'oru',
            salary: 1800000
        },
        {
            empId: 9,
            empName: 'lambu',
            salary: 1900000
        },
    ],
];
console.log(presentProb(array))

// answer will be this:>>>>>>>>>>>>>>>>>>>>>>
// [
//     { empId: 2, empName: 'pandya', salary: 2000000 },
//     { empId: 6, empName: 'mandan', salary: 1300000 },
//     { empId: 9, empName: 'lambu', salary: 1900000 }
//   ]