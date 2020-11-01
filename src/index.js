import API from "./api-service";
import countryTpl from "./templates/country-card.hbs";
import getRefs from "./get-refs";
// import debounce from "lodash.debounce";
const refs = getRefs();
refs.searchForm.addEventListener('submit', onSearch)

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  console.log(e.currentTarget)
  const searchQuery = form.elements.query.value;
   API.fetchCountry(searchQuery)
    .then(renderCountryCard)
    .catch(onFetchError)
    .finally(() => form.reset());
};

function renderCountryCard(country) {
   const markup = countryTpl(country[0]);
  refs.cardContainer.innerHTML = markup;
};
function onFetchError(error) {
  alert('Hello! I am an alert box!!Nothing was found!');
  
}

