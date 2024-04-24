let countries = ["USA", "Canada", "UK", "Australia", "Germany", "France"];

function display() {
    let input = document.getElementById('inputField').value.trim().toLowerCase();
    let outputList = document.getElementById('outputList');

    // Clear previous content
    outputList.innerHTML = '';

    // Display filtered countries if input is not empty
    if (input) {
        let filteredCountries = countries.filter(country => country.toLowerCase().includes(input));
        if (filteredCountries.length > 0) {
            filteredCountries.forEach(country => {
                let countryElement = document.createElement('div');
                countryElement.textContent = country;
                outputList.appendChild(countryElement);
            });
        } else {
            outputList.textContent = 'No matching countries found.';
        }
    }
}

function clearInputField() {
    document.getElementById('inputField').value = '';
    document.getElementById('outputList').innerHTML = ''; // Clear the output list
}