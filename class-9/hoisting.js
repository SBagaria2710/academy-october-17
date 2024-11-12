// TEMPORAL DEAD ZONE - START
console.log(a); // Reference Error: Cannot access 'a' before initialization

const a = 10;
// TEMPORAL DEAD ZONE - END
console.log(a); // 10
