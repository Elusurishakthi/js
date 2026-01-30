class student {
    #idcard;
    constructor(name, age, idcard) {
        this.name = name;
        this.age = age;
        this.#idcard = idcard;
    }
    getidcard(enterid)
{
    if (enterid !== this.#idcard) {
        return "Access Denied: Incorrect ID Card";
    }
    else {
        return "Access Granted";
    }
}
}

const stu1 = new student("Alice", 20, "ID12345");
console.log(stu1.getidcard("ID12345")); 
