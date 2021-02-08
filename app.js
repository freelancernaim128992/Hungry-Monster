const searchItems = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayItems(data.meals))
}

const displayItems = items => {
    items.forEach(item => {
        const itemsContainer = document.getElementById('items-container');
        const itemDiv = document.createElement('div');
        itemDiv.className = 'card mt-5 card-style';
        itemDiv.style.width = '18rem';
        itemDiv.innerHTML = `
            <img onclick="getItemInfo(${JSON.stringify(item).split('"').join("&quot;")})" src="${item.strMealThumb}" class="card-img-top" alt="Food Thumbnail">
            <div class="card-body bg-light">
                <h3 class="text-center">${item.strMeal}</h3>
            </div>
        `;
        itemsContainer.appendChild(itemDiv);
    })
}


const getItemInfo = itemInfo => {
    
}

