
let sample = {
    sample1: 1,
    sample2: 2,
    sample3: 3,
    sample4: 4,
    sample5: 5
};

function add(a, b) {
    return a + b;
}

let values = Object.values(sample);

for (let i = 0; i < values.length - 1; i++) {
    console.log(add(values[i], values[i + 1]));
}

console.log("Basic JavaScript file executed.");

