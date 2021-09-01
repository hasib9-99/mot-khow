const lodeData = () =>{
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => thamnel(data.drinks[0]))
}
const thamnel = data => {
    const contenar = document.getElementById('conteanar');
    const div = document.createElement('div');
    div.innerHTML = `''`
    div.innerHTML = `
    <img src="${data.strDrinkThumb}" alt=""> <br>
    <h2>${data.strDrink}</h2>
    `
    contenar.appendChild(div);
    // console.log(photo);

}