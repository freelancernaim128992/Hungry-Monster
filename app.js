const input = document.getElementById('searching-food-input');
const button = document.getElementById('search-button');

// const getFoodData = () => {
//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
//     .then(res => res.json())
//     .then(data => displayFood(data))
// }
// const displayFood = data => {
//     const showFood = data.meals[0].strMeal
//     console.log(showFood);
//     // for (let i = 0; i < showFood.length; i++) {
//     //     const food = showFood[i];
//     //     console.log(food);
        
//     // }
// }
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
    .then(res => res.json())
    .then(data => {
        const showFood = data.meals
        const display = document.getElementById('show-item')
        for (let i = 0; i < showFood.length; i++) {
            const element = showFood[i].strMeal;
            const li = document.createElement('li');
            li.innerText = element;
            display.appendChild(li);

        }
    })





    // fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
    // .then(res => res.json())
    // .then(data => {
    //     const showFood = data.meals;
    //     for (let i = 0; i < showFood.length; i++) {
    //         const element = showFood[i].strMeal;
    //         // for (let y = 0; y < element.length; y++) {
    //         //     const Add = element[y].strMeal;
    //         //     console.log(Add);
                
    //         // }
    //         console.log(element);
    //     }
    // })