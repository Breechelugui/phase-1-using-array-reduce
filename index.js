const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// index.js

// Example battery array
const batteries = [4, 5, 2, 8, 12];

// Sum all batteries
const totalBatteries = batteries.reduce((sum, val) => sum + val, 0);

// Expose it globally so the test can see it
if (typeof window !== 'undefined') {
  window.totalBatteries = totalBatteries;
} else {
  global.totalBatteries = totalBatteries;
}
// Code your solution here
