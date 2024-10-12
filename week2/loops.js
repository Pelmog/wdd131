// loops.js
myInfo = {
    name: "Sister K",
    photo: "images/kim.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Lamb", "Shrimp", "Smoked Salmon"],
    hobbies: ["Reading", "Hiking", "Travel"],
    placesLived: [
        {
            place: "Gauteng, ID",
            length: "5 years",
        },
        {
            place: "Jeddah, ID",
            length: "4 years",
        },
        {
            place: "Edinburgh",
            length: "8 years",
        },
    ],
};

const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");

// Function to generate the HTML markup for any list using a template
function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join(""); // Flatten the array into a single string
}

// Template function for foods
function foodsTemplate(food) {
    return `<li>${food}</li>`;
}

// Template function for places lived (with place and length)
function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

// Set the innerHTML for the favorite foods
foodsElement.innerHTML = generateListMarkup(myInfo.favoriteFoods, foodsTemplate);

// Set the innerHTML for the places lived
placesElement.innerHTML = generateListMarkup(myInfo.placesLived, placesTemplate);




/*// Step 1: Using .forEach() to loop over the favoriteFoods array
const foodsElement = document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
    .map((food) => `<li>${food}</li>`)
    .join("");

const placesElement = document.querySelector("#places-lived");

function createAndAppendFoodItem(food) {
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    foodsElement.appendChild(favoriteFood);
}

// Loop through each food item using .forEach()
myInfo.favoriteFoods.forEach(createAndAppendFoodItem);

// Step 2: Using .map() to loop over the favoriteFoods array
const foodListElements = myInfo.favoriteFoods.map((food) => {
    return `<li>${food}</li>`;
});*/

/*// Flatten the array of HTML strings into one string and insert it into the <ul>
foodsElement.innerHTML = foodListElements.join("");
  
  
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  let favoriteFood1 = document.createElement("li");
  favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
  let favoriteFood2 = document.createElement("li");
  favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
  let favoriteFood3 = document.createElement("li");
  favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
  let favoriteFood4 = document.createElement("li");
  favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  document.querySelector("#favorite-foods").appendChild(favoriteFood1);
  document.querySelector("#favorite-foods").appendChild(favoriteFood2);
  document.querySelector("#favorite-foods").appendChild(favoriteFood3);
  document.querySelector("#favorite-foods").appendChild(favoriteFood4);*/
