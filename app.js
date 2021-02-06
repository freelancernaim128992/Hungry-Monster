fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
.then(res => res.json())
.then(data => displayItem(data))

const displayItem = item => {
    console.log(item) 
}