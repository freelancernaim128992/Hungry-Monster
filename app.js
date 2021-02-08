//  Call API and Search Items Function Below
const searchItems = () => {
    const searchText = document.getElementById('search-field');
    if(searchText){
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText.value}`;
        // Load Data
        fetch(url)
        .then(res => res.json())
        .then(data => displayItems(data.meals))
        searchText.value = '';
    }
}


// Display Items Function
const displayItems = items => {
    const errorMessageDiv = document.getElementById('error-message-area');
    if(!items){
        errorMessageDiv.style.display = 'block';
    }
    else{
        const itemsContainer = document.getElementById('items-container');
        errorMessageDiv.style.display = 'none';
        itemsContainer.innerHTML = '';
        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'card mt-5 card-style';
            itemDiv.innerHTML = `
                <img onclick="getItemInfo(${JSON.stringify(item).split('"').join("&quot;")})" src="${item.strMealThumb}" class="card-img-top" alt="Food Thumbnail">
                <div class="card-body bg-light">
                    <h3 class="text-center">${item.strMeal}</h3>
                </div>
            `;
            itemsContainer.appendChild(itemDiv);
        })
    }
}


// Display Item Information Function Below
const getItemInfo = itemInfo => {
    const itemContainerInfo = document.getElementById('all-items-info');
    itemContainerInfo.innerHTML = '';
    const itemInfoDiv = document.createElement('div');
    itemInfoDiv.className = 'item-info-style';
    itemInfoDiv.innerHTML = `
        <img src="${itemInfo.strMealThumb}" alt="Food Thumbnail">
        <h3 class="my-3">${itemInfo.strMeal}</h3>
        <div class="ingredients">
            <h5>Ingredients</h5>
            <i class="fas fa-check-square bg-danger text-white"></i> <span>${itemInfo.strMeasure1}</span> <span>${itemInfo.strIngredient1}</span><br>
            <i class="fas fa-check-square bg-danger text-white"></i> <span>${itemInfo.strMeasure2}</span> <span>${itemInfo.strIngredient2}</span><br>
            <i class="fas fa-check-square bg-danger text-white"></i> <span>${itemInfo.strMeasure3}</span> <span>${itemInfo.strIngredient3}</span><br>
            <i class="fas fa-check-square bg-danger text-white"></i> <span>${itemInfo.strMeasure4}</span> <span>${itemInfo.strIngredient4}</span><br>
            <i class="fas fa-check-square bg-danger text-white"></i> <span>${itemInfo.strMeasure5}</span> <span>${itemInfo.strIngredient5}</span><br>
            <i class="fas fa-check-square bg-danger text-white"></i> <span>${itemInfo.strMeasure6}</span> <span>${itemInfo.strIngredient6}</span><br>
            <i class="fas fa-check-square bg-danger text-white"></i> <span>${itemInfo.strMeasure7}</span> <span>${itemInfo.strIngredient7}</span><br>
            <i class="fas fa-check-square bg-danger text-white"></i> <span>${itemInfo.strMeasure8}</span> <span>${itemInfo.strIngredient8}</span><br>
            <i class="fas fa-check-square bg-danger text-white"></i> <span>${itemInfo.strMeasure9}</span> <span>${itemInfo.strIngredient9}</span><br>
            <i class="fas fa-check-square bg-danger text-white"></i> <span>${itemInfo.strMeasure10}</span> <span>${itemInfo.strIngredient10}</span>
        </div>
    `;
    itemContainerInfo.appendChild(itemInfoDiv);
}

// End