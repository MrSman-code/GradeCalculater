// Define an Array
let cars = ['Honda', 'Toyota', 'Camry', 'Mazda', 'Mitsubishi', 'Tesla'];

//Log the first item to the console
console.log(cars[0]);

// Log the last item using the length property
console.log(cars[cars.length - 1]);

// Add an item 'mercedes-benz' to the array
cars.push('mercedes-benz');

// Log the new item to the console
console.log(cars[cars.length - 1]);

// Loop through all items and log them to the console
console.log('All items:');
for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

