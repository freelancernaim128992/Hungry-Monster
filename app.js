const input = document.getElementById('searching-food-input');
const button = document.getElementById('search-button');

// const getFoodData = () => {
//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
//     .then(res => res.json())
//     .then(data => displayFood(data))
// }
// const displayFood = data => {
//     const showFood = data.meals
//         const display = document.getElementById('show-item')
//         for (let i = 0; i < showFood.length; i++) {
//             const element = showFood[i].strMeal;
//             const li = document.createElement('li');
//             li.innerText = element;
//             display.appendChild(li);

//         }
// }


fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
    .then(res => res.json())
    .then(data => {
        const showFood = data.meals
        const display = document.getElementById('item');
        for (let i = 0; i < showFood.length; i++) {
            const element = showFood[i].strMeal;
            const h3 = document.createElement('h3');
            h3.innerText = element;
            display.appendChild(h3);
            const image = document.createElement('img');

        }
    })


