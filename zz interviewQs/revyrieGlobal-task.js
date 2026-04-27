// Question : Parking Lot System
//  Category: Time Parsing & Aggregation

// SCENARIO :
// You are building the billing module for a smart parking garage. The system logs every vehicle’s entry and exit times. 
// A single vehicle may park multiple times in the same day (for example, KA01 parks from 10:00–12:30, leaves for lunch, 
// and returns from 14:00–15:00). Your task is to process these raw log records to calculate how long each vehicle -
// stayed in total, identify the longest-staying vehicle, and compute the parking fee using a tiered pricing model.

// DATASET :
// const dataSet = [
//     {
//         vehicleId: "KA01",
//         entryTime: "10:00",
//         exitTime: "12:30",
//     },
//     {
//         vehicleId: "KA02",
//         entryTime: "11:00",
//         exitTime: "13:00",
//     },
//     {
//         vehicleId: "KA01",
//         entryTime: "14:00",
//         exitTime: "15:00",
//     },
// ]

// TASKS — What the Candidate Must Do
// Calculate total parking time per vehicle: Parse the entryTime and exitTime strings (format “HH:MM”) into a 
// time representation, compute the duration of each individual parking session in hours (or minutes), 
// then group all sessions by vehicleId and sum their durations. For the sample data, 
//  - KA01 has two sessions: 10:00–12:30 (2.5 hours) and 14:00–15:00 (1 hour), so KA01’s total is 3.5 hours. 
//  - KA02 has one session: 11:00–13:00 (2 hours). Return the result as a dictionary/map: {KA01: 3.5, KA02: 2.0}.

// Output: parkingTime { KA01: 3.5, KA02: 2 }

// Find the vehicle with the maximum parking duration: From the aggregated totals computed in Task 1, 
// find the vehicleId with the highest total duration. In the sample data, KA01 (3.5 hours) is the longest. 
// If there’s a tie, return any one of the tied vehicles. Think about what data structure makes this lookup 
// efficient — iterating over the map and tracking the max, or using a sorting approach.

// Output: maxParkingVehicle KA01

// Calculate parking fee using a tiered pricing model: The pricing rule is: the first 1 hour (or any fraction of it) 
// costs ₹20 flat, and every additional hour (or fraction) after the first hour costs ₹10. This means you need to 
// round UP partial hours using ceiling. 
// Examples: 0.5 hours → ₹20 (within first hour), 1.0 hours → ₹20, 1.5 hours → ₹20 + ceil(0.5) × ₹10 = ₹30, 
// 2.5 hours → ₹20 + ceil(1.5) × ₹10 = ₹20 + 2 × ₹10 = ₹40, 3.5 hours → ₹20 + ceil(2.5) × ₹10 = ₹20 + 3 × ₹10 = ₹50. 
// Apply this formula to each vehicle’s total duration and return a map of {vehicleId: fee}.

// Output: calculateParkingFee { KA01: 50, KA02: 30 }



const dataSet = [
    {
        vehicleId: "KA01",
        entryTime: "10:00",
        exitTime: "12:30",
    },
    {
        vehicleId: "KA02",
        entryTime: "11:00",
        exitTime: "13:00",
    },
    {
        vehicleId: "KA01",
        entryTime: "14:00",
        exitTime: "15:00",
    },
]


const normalFee = 20;
const extraFee = 10;

function fetchVehicleEntries(data) {
    // answer 1:
    const parkingTime = totalParkingTimePerVehicle(data);
    console.log("parkingTime", parkingTime)

    // answer 2:
    const maxParkingVehicle = calculateMaximumParkingDuration(parkingTime);
    console.log("maxParkingVehicle", maxParkingVehicle)

    // answer 3:
    const calculateParkingFee = calculateParkingFeePerVehicle(parkingTime);
    console.log("calculateParkingFee", calculateParkingFee)

}

function calculateParkingFeePerVehicle(parkingTime) {
    let result = {};
    for (const [vehicleId, duration] of Object.entries(parkingTime)) {
        let fee = normalFee;
        if (duration > 1) {
            let remaining = duration - 1;
            let mathing = Math.ceil(remaining) * extraFee;
            fee = fee + mathing;
        }
        result[vehicleId] = fee;
    }
    return result;
}


function calculateMaximumParkingDuration(parkingTime) {
    let maxDuration = 0;
    let maxVehicleId = "";
    for (const [vehicleId, duration] of Object.entries(parkingTime)) {
        if (duration > maxDuration) {
            maxDuration = duration;
            maxVehicleId = vehicleId;
        }
    }
    return maxVehicleId;
}


function totalParkingTimePerVehicle(data) {
    const hm = new Map();

    for (let vehicle of data) {

        const a = vehicle.exitTime;
        const b = vehicle.entryTime;

        const date1 = new Date("01-01-2017 " + a + ":00");
        const date2 = new Date("01-01-2017 " + b + ":00");
        const diff = Math.abs(date1 - date2);

        const hourDiff = diff / 3600 / 1000; // in hours

        let obj = vehicle.vehicleId;
        if (!hm.has(obj)) {
            hm.set(obj, 0)
        }
        hm.set(obj, hm.get(obj) + hourDiff)
    }
    return Object.fromEntries(hm);
}


fetchVehicleEntries(dataSet);


// Output:
// parkingTime { KA01: 3.5, KA02: 2 }
// maxParkingVehicle KA01
// calculateParkingFee { KA01: 50, KA02: 30 }