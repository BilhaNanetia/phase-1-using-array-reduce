const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
//Add the total number of batteries by using the reduce method 
const totalBatteries = batteryBatches.reduce((total, current) => total + current, 0);

module.exports = { totalBatteries };
