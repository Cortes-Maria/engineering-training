const searchBar = document.getElementById("searchBar"); 
const searchIcon = document.getElementById("searchIcon");
var vcompanies = [];
const originalHtml = document.getElementById("content").innerHTML;


function  menuTemplate() {
    var menuItems = document.getElementById("menu__template").innerHTML;
    var template = Handlebars.compile(menuItems);
    var menu = template(
        {
            menuItem: [
                "Directorio De Agentes",
                "Contacto",
                "Ingresar",
            ],
        });
    document.getElementById("nav__menu").innerHTML += menu;
}  

function cardTemplate(companies) {
    var cardItems = document.getElementById("card__template").innerHTML;
    var cardTemplate = Handlebars.compile(cardItems);
    var card = cardTemplate({companies});

    document.getElementById("content").innerHTML = originalHtml;
    document.getElementById("content").innerHTML += card;
} 

searchBar.addEventListener('keyup',(e) => {
    const target = e.target.value;
      const filteredCompanies = vcompanies.filter ( companies => {
          return companies.name.includes(target);
      });
      console.log(filteredCompanies);
      if(e.key === "Enter"){
        cardTemplate(filteredCompanies);
        console.log('Hola');
      } else {
          searchIcon.addEventListener('click',(e) => {
              cardTemplate(filteredCompanies);
          })
      }
 });

 
function loadCompanies() {
    const fetchPromise = fetch("https://my-json-server.typicode.com/cortes-maria/Agents/companies");
 
    fetchPromise.then(response => {
        return response.json();
    }).then(companies => {
        vcompanies = companies;
        cardTemplate(vcompanies);
    });
 }
 loadCompanies();
 menuTemplate();   

