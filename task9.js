class Fooditems {
    constructor( name, calories) {
        this.name = name;
        this.calories = calories;
    }
    getcalories() {
        return this.calories;
    }
}
const f1=new Fooditems("Apple", 95);
console.log(f1.getcalories());
const f2=new Fooditems("Banana", 105);
console.log(f2.getcalories());