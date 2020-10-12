
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

function  searchTemplate() {
    var Items = document.getElementById("search__template").innerHTML;
    var template = Handlebars.compile(Items);
    var data = template(
        {
            item: {
                title:"Los Mejores Agentes de Seguridad",
                searchBar:"Buscar por Ubicación"
            },
        });
    document.getElementById("search").innerHTML += data;
}

function  footerTemplate() {
    var Items = document.getElementById("footer__template").innerHTML;
    var template = Handlebars.compile(Items);
    var data = template(
        {
            item: {
                description:"Desarrollado por Akurey.com",
                rights:"Todos los derechos reservados.",
                terms:"Términos y condiciones"
            },
        });
    document.getElementById("footer").innerHTML += data;
}

function cardTemplate() {
    var cardItems = document.getElementById("card__template").innerHTML;
    var cardTemplate = Handlebars.compile(cardItems);
    var card = cardTemplate(
        {
            cardItem: [{
                title: "Chuck Norris Bodyguards",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend vel enim ac lacinia. Phasellus ac nisl id velit tristique accumsan nec at enim. Etiam posuere tellus ut ligula feugiat auctor. Morbi ut quam aliquet, viverra purus in, convallis ante.",
                price: "Desde: $15 / 12 horas",
                button: "Contratar"
            },
            {
                title: "Chuck Norris Bodyguards",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend vel enim ac lacinia. Phasellus ac nisl id velit tristique accumsan nec at enim. Etiam posuere tellus ut ligula feugiat auctor. Morbi ut quam aliquet, viverra purus in, convallis ante.",
                price: "Desde: $15 / 12 horas",
                button: "Contratar"
            },
            {
                title: "Chuck Norris Bodyguards",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend vel enim ac lacinia. Phasellus ac nisl id velit tristique accumsan nec at enim. Etiam posuere tellus ut ligula feugiat auctor. Morbi ut quam aliquet, viverra purus in, convallis ante.",
                price: "Desde: $15 / 12 horas",
                button: "Contratar"
            },
            {
                title: "Chuck Norris Bodyguards",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend vel enim ac lacinia. Phasellus ac nisl id velit tristique accumsan nec at enim. Etiam posuere tellus ut ligula feugiat auctor. Morbi ut quam aliquet, viverra purus in, convallis ante.",
                price: "Desde: $15 / 12 horas",
                button: "Contratar"
            },
            {
                title: "Chuck Norris Bodyguards",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend vel enim ac lacinia. Phasellus ac nisl id velit tristique accumsan nec at enim. Etiam posuere tellus ut ligula feugiat auctor. Morbi ut quam aliquet, viverra purus in, convallis ante.",
                price: "Desde: $15 / 12 horas",
                button: "Contratar"
            },
            {
                title: "Chuck Norris Bodyguards",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend vel enim ac lacinia. Phasellus ac nisl id velit tristique accumsan nec at enim. Etiam posuere tellus ut ligula feugiat auctor. Morbi ut quam aliquet, viverra purus in, convallis ante.",
                price: "Desde: $15 / 12 horas",
                button: "Contratar"
            }],
        });
    
    document.getElementById("content").innerHTML += card;
 }     

menuTemplate();
cardTemplate();
searchTemplate();
footerTemplate();