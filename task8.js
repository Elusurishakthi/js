class FoodItems {
    getCalories() {
        return this.calories;
    }
}

const f1 = new FoodItems();
f1.name = "apple";
f1.calories = 29;

console.log(f1.getCalories());
const f2 = new FoodItems();
f2.name = "banana";
f2.calories = 100;

console.log(f2.getCalories());