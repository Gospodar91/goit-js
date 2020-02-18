export default fetchCountries;
function fetchCountries(searchQuery, callback) {
  const baseUrl = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  fetch(baseUrl)
    .then(responce => {
      return responce.json();
    })
    .then(data => {
      callback(data);
    })
    .catch(error => {
      console.log(error);
    });
}
