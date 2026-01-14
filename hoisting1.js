function processUser(user, callback) {
    user.status = "active";
    callback(user);
}

function displayUser(userObj) {
    console.log("Name:", userObj.name);
    console.log("Status:", userObj.status);
}

processUser({ name: "John", age: 25 }, displayUser);
