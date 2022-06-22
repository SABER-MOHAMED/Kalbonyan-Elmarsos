let markMass, markHeight, JohnMass, johnHeight, markHighrBmi;

markMass = 92; // kg
markHeight = 1.69; // meter
johnMass = 78; // kg
johnHeight = 1.95; // meter

let bmiMark = markMass / markHeight ** 2;
let bmiJohn = johnMass / johnHeight ** 2;

console.log(bmiJohn + "  " + bmiMark);

if ((higherBmi = bmiMark > bmiJohn)) {
  console.log("Mark have a highr BMI than John ${bmiMark} ");
} else {
  console.log("John have a highr BMI than John ${bmiMark}");
}
