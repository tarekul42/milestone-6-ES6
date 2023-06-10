const loadCounties = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCounties(data))
}
const displayCounties = countries =>{
    const countiesContainer = document.getElementById('all-counties');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name : ${country.name.common} </h3>
        <p>Capital : ${country.capital ? country.capital[0] : 'No Capital'}</p>
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countiesContainer.appendChild(countryDiv)
})
}
const loadCountryDetails = code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(response => response.json())
    .then(data => showCountryDetail(data[0]))
}
const showCountryDetail = country =>{
    const detailContainer = document.getElementById('country-detail')
    detailContainer.innerHTML = `
    <h2>Country Detail</h2>
    <h3>Name: ${country.name.common}</h3>
    <p>Capital: ${country.capital}</p>
    <img src="${country.flags.png}" alt="">
    `
}
loadCounties();