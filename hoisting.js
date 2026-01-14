function greet(name, callback) {
    const message = "Hello " + name;
    callback(message);
}

function printMessage(text) {
    console.log(text);
}

greet("Alice", printMessage);
