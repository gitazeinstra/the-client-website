# b-RAIN
b-RAIN is een project van SPATwater om waterspilling tegen te gaan en water kwaliteit te verbeteren. 

## Inhoudsopgave
  * [Beschrijving](#beschrijving)
  * [User story](#user-story)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Voor b-RAIN maak ik een website met informatie over het project. De bedoeling is dat de website de huisstijl van SPATwater krijgt, zodat je ziet dat het een project van SPATwater is. De website moet de aandacht trekken van investeerders en potientiële klanten. Het moet een interactieve website worden die het project op een leuke manier presenteert. Ook moet er een optie zijn om makkelijk contact op te nemen met SPATwater. 

![b-rain_sreenshot](https://github.com/gitazeinstra/the-client-website/assets/40466580/1dd8402e-d06c-4d28-9a2c-5f191ef54cc6)

**Link naar de website**\
[🔗gitazeinstra.github.io/the-client-website/](https://gitazeinstra.github.io/the-client-website/)

## User story 
1. **Als gebruiker wil ik zien wat voor project b-RAIN is zodat ik een keuze kan maken om wel of niet te investeren**\
*oplossing*: een scroll pagina met alle informatie over het project

2. **Als gebruiker wil ik weten hoe ik contact kan opnemen met b-RAIN zodat ik kan investeren**\
*oplossing*: een contact sectie en meerdere buttons die daar naartoe linken

## Kenmerken
* **HTML**: Ik heb één html pagina gebruikt voor de hele website, omdat het één lange scroll pagina is. 
* **CSS**: Door de website van SPATwater te inspecteren heb ik de kleuren van hun huisstijl overgenomen in de `:root` van b-RAIN. Om de elementen te positioneren heb ik veel `display: flex;` gebruikt. 
* **JavaScript**: Ik heb JavaScript gebruikt om de navbar transparant en non-transparant te makenn en om de scroll-up button te laten verschijnen of verdwijnen. Dit heb ik met een functie gedaan die kijkt hoeveel pixels de gebruiker gescrolt heeft, aan de hand daarvan bepaald de functie of de navbar transparant of non-transparant is en of de scroll-up button verschijnt of verdwijnt. Om de AOS library te initialeren heb ik ook JavaScript gebruikt.
* **AOS library**: Voor de animaties ben ik op zoek gegaan naar een library. Ik heb gekozen voor AOS library omdat ik alleen op zoek was naar simpele animaties. Via een CSS en JavaScript link in `index.html` heb ik de library gekoppeld. In `main.js` heb ik de library geinitializeerd. In html kon ik met de `data-aos=""` tag animaties toevoegen in een element. 

## Bronnen
* [SPATwater](https://www.spatwater.nl/)
* [AOS library](https://michalsnik.github.io/aos/)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
