const cars = [
    {
      "id": 401,
      "make": "Toyota",
      "model": "Camry",
      "year": 2021,
      "color": "Blue"
    },
    {
      "id": 402,
      "make": "Honda",
      "model": "Civic",
      "year": 2020,
      "color": "Silver"
    },
    {
      "id": 403,
      "make": "Ford",
      "model": "Mustang",
      "year": 2019,
      "color": "Red"
    },
    {
      "id": 404,
      "make": "Chevrolet",
      "model": "Tahoe",
      "year": 2022,
      "color": "Black"
    },
    {
      "id": 405,
      "make": "Nissan",
      "model": "Altima",
      "year": 2020,
      "color": "White"
    }
  ];
/**********
Question 1:
You have a function getCarMake(car) that:
- receives a car object
- returns the make (brand) of the car
Don't forget to uncomment the console.log
===
ANSWER: Toyota
**********/

function getCarMake(car) {
    return car.make; // calling car model in index 1 of the cars object array 
  }
console.log(getCarMake(cars[0]));  // calling fucntion 


/**********
Question 2:
You have a function that:
- receives a car object
- receives a car color (string)
- returns true if the car's color matches the provided color, otherwise returns false
===
ANSWER: false
**********/

function isCarColorMatching(car, color) {
    if (car.color === color) { // if statment to check if the car.color of the honda is === to our input
        return true;
    } else {
        return false;
    }
  }
console.log(isCarColorMatching(cars[1], "Blue")); // calling function output should be false 


/**********
Question 3:
addCar(cars, car):
- receives an array of car objects
- receives a new car object (with id, make, model, year, and color)
- adds the new car to the array
- returns the updated array
===
ANSWER: 
[
  {
    "id": 401,
    "make": "Toyota",
    "model": "Camry",
    "year": 2021,
    "color": "Blue"
  },
  {
    "id": 402,
    "make": "Honda",
    "model": "Civic",
    "year": 2020,
    "color": "Silver"
  },
  {
    "id": 403,
    "make": "Ford",
    "model": "Mustang",
    "year": 2019,
    "color": "Red"
  },
  {
    "id": 404,
    "make": "Chevrolet",
    "model": "Tahoe",
    "year": 2022,
    "color": "Black"
  },
  {
    "id": 405,
    "make": "Nissan",
    "model": "Altima",
    "year": 2020,
    "color": "White"
  },
  {
    "id": 406,
    "make": "Kia",
    "model": "Sorento",
    "year": 2021,
    "color": "Green"
  }
]
**********/

function addCar(cars, car) {
     cars.push(car); // using push method to add new object to an array
     return cars; // return new array 
}

  
  const newCar = { // new array we want to add
  "id": 406,
  "make": "Kia",
   "model": "Sorento",
  "year": 2021,
   "color": "Green"
  };
  
console.log(addCar(cars, newCar)); // calling function


/**********
Question 4:
countCarsMadeInYear(cars, year):
- receives an array of car objects
- receives a manufacturing year (number)
- returns the number of cars made in the specified year
===
ANSWER: 2
**********/

function countCarsMadeInYear(cars, year) {
    let count = 0; 
    for (let i = 0; i < cars.length; i++) { // iterating over each object 
        if (cars[i].year === year) {  // checking if we have cars that are equal to 2022 and then using count++ to see how many we having 
            count++;
        }
    }
    return count++; // returing count++ to see the result in the terminal which is 2
  }
console.log(countCarsMadeInYear(cars, 2020));  // calling fucntion with year vlaue 
  

/**********
Question 5:
removeCarById(cars, id):
- Receives an array of car objects.
- Receives an id (number) as an argument.
- Removes the car with the matching id from the array.
- Returns the updated array.
===
/**********
ANSWER: 
[
  {
    "id": 401,
    "make": "Toyota",
    "model": "Camry",
    "year": 2021,
    "color": "Blue"
  },
  {
    "id": 402,
    "make": "Honda",
    "model": "Civic",
    "year": 2020,
    "color": "Silver"
  },
  {
    "id": 403,
    "make": "Ford",
    "model": "Mustang",
    "year": 2019,
    "color": "Red"
  },
  {
    "id": 405,
    "make": "Nissan",
    "model": "Altima",
    "year": 2020,
    "color": "White"
  }
]
**********/
function removeCarById(cars, id) {
    return cars.filter(car => car.id !== id); // filtering the car that is not equal to id => remove it 
  }
console.log(removeCarById(cars, 404)); // Caling function removes 404 id car





/**********
Question 6:
updateCarColor(cars, id, newColor):
- Receives an array of car objects.
- Receives an id (number) and a newColor (string).
- Updates the color of the car with the given id to the new color.
- Returns the updated car object. If no car is found with the given id, return "No Car Found".
===

ANSWER: 
{
  "id": 401,
  "make": "Toyota",
  "model": "Camry",
  "year": 2021,
  "color": "Yellow"
}
**********/

function updateCarColor(cars, id, newColor) {
    for (let i = 0; i < cars.length; i++) { // used for loop as before same steps
        if (cars[i].id === id) {
            cars[i].color = newColor;
            return cars; // return new array 
        } else {
            return "Car Not Found!"; // return false 
        }
    }
  }
console.log(updateCarColor(cars, 401, "Yellow")); // calling function with values of id and color choice 