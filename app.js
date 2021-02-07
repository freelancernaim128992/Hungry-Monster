// store button and input location in variable
const input = document.getElementById('searching-food-input');
const button = document.getElementById('search-button');


// Display Item from Api
const getFoodData = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
    .then(res => res.json())
    .then(data => displayFood(data))
}
const displayFood = items => {
    const showFood = items.meals;
        const display = document.getElementById('item');
        for (let i = 0; i < showFood.length; i++) {
            const element = showFood[i];
            const itemsDiv = document.createElement('div');
            const itemInfo = `
                <div class="item-size mt-5">
                <img class="w-100 mb-3" src="${element.strMealThumb}">
                <h3 class="text-center">${element.strMeal}</h3>
                </div>
            `
            itemsDiv.innerHTML = itemInfo;
            display.appendChild(itemsDiv);

        }
}

