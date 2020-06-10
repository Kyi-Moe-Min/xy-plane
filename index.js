let fx = (y) => Math.sin(y);
let fy = (x) => Math.cos(x);

let unit = "cm";

function move(event) {
  let value = event.target.value;
  let point = document.getElementById("point");
  let x = fx(value);
  let y = fy(value);

  document.getElementById("rangeValue").value = value;
  point.innerText = `(${Number(x).toFixed(2)}${unit}, ${Number(y).toFixed(
    2
  )}${unit})`;
  point.style.transform = `translate(${x}${unit}, ${y}${unit}) scaleY(-1)`;
}

function unitChange(event) {
  let input = event.target;
  unit = input.value;
}

function minValueChange(event) {
  document.getElementById("range").min = event.target.value;
}
function maxValueChange(event) {
  document.getElementById("range").max = event.target.value;
}

const yChange = (event) => {
  fy = new Function("x", `return ${convertMathFunction(event.target.value)}`);
};
const xChange = (event) => {
  fx = new Function("y", `return ${convertMathFunction(event.target.value)}`);
};

function convertMathFunction(equation) {
  for (let key of Object.getOwnPropertyNames(Math))
    equation = equation.replace(
      new RegExp(`(?<!(Math.))${key}`, "g"),
      `Math.${key}`
    );
  return equation;
}
