// store button and input location in variable
const input = document.getElementById('searching-food-input');
const button = document.getElementById('search-button');

// Call Api 
const getFoodData = () =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input.value}`)
    .then(res => res.json())
    .then(data => displayFood(data))
}

// Display Item from Api
const displayFood = items => {
    const showFood = items.meals;
    const display = document.getElementById('item');
        showFood.forEach(item => {
            const itemsDiv = document.createElement('div');
            const itemInfo = `
                <div class="item-size mt-5">
                <img class="w-100" src="${item.strMealThumb}">
                <h3 class="text-center bg-light p-3">${item.strMeal}</h3>
                </div>
            `;
            itemsDiv.innerHTML = itemInfo;
            display.appendChild(itemsDiv);
        });
    input.value = '';
    

}

