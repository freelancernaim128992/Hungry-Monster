// store button and input location in variable
const input = document.getElementById('searching-food-input');
const button = document.getElementById('search-button');

// Call Api 
const getFoodData = () =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
    .then(res => res.json())
    .then(data => displayFood(data))
}

// Display Item from Api
const displayFood = items => {
    const showFood = items.meals;
    const display = document.getElementById('item');
    display.innerHTML= '';
        showFood.forEach(item => {
            console.log(item);
            const itemsDiv = document.createElement('div');
            const itemInfo = `
                <div class="item-size mt-5">
                <img onclick="displayItemAllInfo('${item}')" class="w-100" src="${item.strMealThumb}">
                <h3 class="text-center bg-light p-3">${item.strMeal}</h3>
                </div>
            `;
            itemsDiv.innerHTML = itemInfo;
            display.appendChild(itemsDiv);
        });
    input.value = '';
}

const displayItemAllInfo = allInfo => {
    console.log(allInfo);
    
}

