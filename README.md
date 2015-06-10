# Qourant
## HvA CMD - project 6

----
Dit is een realtime platform speciaal ontworpen voor Q42 met het platform Meteor.js. De hoofdvraag van dit project was: "Hoe kunnen wij er voor zorgen dat de werknemers van de verschillende filialen van Q42 elkaar goed leren en blijven kennen?"

We hebben uiteindelijk de Qourant bedacht, een wekelijkse krant, een platform, met een reeks aan widgets die informatie geven over wat er zoal in en rondom Q42 gebeurt. Q42 heeft onlangs een filiaal geopend in San Francisco. We zien juist de kracht van dit platform in de brug die het slaat tussen San Francisco en Nederland. Daarom zal de voertaal op de Qourant ook Engels zijn. 

Dit betreft een prototype, het voornamelijke doel was om een indruk te geven van hoe het werkt en hoe het eruit ziet. Een aantal functionaliteiten zijn dus niet echt uitgewerkt. De volgorde en het aantal widgets wat getoond wordt, is nu met een vaste array gemaakt. In een eind product zou er een back-end bij zitten die zo'n array zou genereren. 

### De widgets
Je kunt de widgets in twee gedeeltes op delen: widgets die informatie geven en widgets die extra functionaliteiten toevoegen aan de Qourant.

#### Grocerylist
Dit is een widget waarmee je per filiaal boodschappen kunt opschrijven. Als iemand dan vervolgens naar de supermarkt gaat kan hij kijken op de grocerylist wat andere mensen nog willen.

#### Birthdays
Dit is een lijst met de eerste drie aankomende verjaardagen.

#### Who's in?
Dit is een widget waarin je kan zie wie er aanwezig is op welk kantoor. Q42 heeft een app waarmee ze hun voordeur kunnen openmaken. Met deze app wordt ook bijgehouden wie zich waar bevindt. In de huidige versie is de aanwezigheid statisch, er wordt gebruik gemaakt van voorbeeld data uit hun eigen API.

#### Q of the Week
The Q of the Week is een widget waarin elke week een Q'er iets vertelt over iets wat hij heeft meegemaakt, iets wat hem bezighoudt de laatste tijd of bijvoorbeeld gewoon een leuk artikel wat hij tegenkwam.

#### Fun Tasks
De Fun Task is een kleine widget die de gebruiker een opdrachtje geeft om iets te doen voor of met een andere collega.

#### Skill Search
Deze widget is in beperkte voor uitgewerkt, om de gebruiker een idee te geven. In de Skill Search kan je op basis van een skill een collega opzoeken. Stel je hebt iemand nodig die van alles weet over 'Functional Programming', dan kan je daarop zoeken in de skill search en krijg je collega's met die skill terug.

#### Calendar
De kalendar widget is een widget die de komende drie events uit een google calendar laat zien. Het idee is dat er een google calendar komt met verschillende interessante evenementen.

#### Photo gallery
De photo gallery is een widget waarin een gallerij foto's te zien is.

#### Know your company
Know your company is een widget waarin de knowyourcompany vragen komen te staan. Je kunt ze beantwoorden en de antwoorden van andere mensen lezen.

#### Video
Dit is een widget waarmee een youtube video geplaatst kan worden in de qourant. Op dit moment geeft de widget een aantal errors in chrome. Ik ben nog aan het onderzoeken waar dit aan ligt. 

----

### Packages
Ik heb de volgende packages gebruikt voor dit project:

* accounts-google              1.0.2 	Login service for Google accounts
* http                         1.0.8 	Make HTTP calls to remote servers
* ian:accounts-ui-bootstrap-3  1.1.26 	Bootstrap-styled accounts-ui with multi-language support.
* iron:router                  1.0.1 	Routing specifically designed for Meteor
* jagi:google-oauth-jwt        1.0.3  	Implementation of Google OAuth 2.0 for server-to-server interactions
* meteor-platform              1.2.0 	Include a standard set of Meteor packages in your app
* mizzao:bootstrap-3           3.3.0 	HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.
* mrt:fancybox                 0.5.0  	Responsive media / lightbox repackaged for meteor
* sacha:spin                   2.0.4  	Simple spinner package for Meteor
* service-configuration        1.0.2 	Manage the configuration for third-party services
* underscore                   1.0.1 	Collection of small helpers: _.map, _.each, ... 