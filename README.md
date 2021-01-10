![](https://www.frontendbastards.nl/wp-content/uploads/2019/03/Logo-frontend-bastards.png)

# Code Test

Om jouw vaardigheden rondom Javascript te testen hebben we een kleine opdracht ontwikkeld. Voor de opdracht vragen wij je om een een validator te schrijven, die aan de hand van een schema, objecten kan valideren. 

Omdat we niet teveel van jouw tijd willen vragen, hebben we de opdracht zo opgezet dat deze in uiterlijk één uur uit te voeren is.

## Opdracht
Bij een denkbeeldige klant word je gevraagd om een validator te schrijven voor objecten. Dit omdat API responses niet altijd alle properties teruggeven die de software verwacht. De hoop is dat een object validator kan helpen met het sneller inzichtelijk maken van foutieve API responses of breaking changes.

De schema’s van objecten zijn in principe zelf gewoon JS object literals (key -> value), waarbij de key ook de key is in het te valideren object, en de value een string die aangeeft wat de type is van deze key.

Een voorbeeld van een schema:

```javascript
const personSchema = {
   name: 'string',
   age: 'number',
   siblings: 'array',
   metaData: 'object',
   active: 'boolean',
};
```

Ervanuit gaande van het bovenstaande schema zou het volgende object positief uit de validator moeten komen:

```javascript
const personObj = {
   name: 'James',
   age: 25,
   siblings: ['Johnnathan'],
   metaData: {},
   active: true,
};
```

We verwachten dat de validator overweg kan gaan met de onderstaande waarden:

* string
* number
* array 
* object
* boolean

Om het simpel te houden gaan we er even vanuit dat alle properties van het schema verplicht zijn, dus geen optionele velden. Verder gaat het om één dimensionale objecten, dus ook geen sub-objecten of arrays die gevalideerd dienen te worden.

Zie de `examples` folder voor voorbeelden van schema validaties.

De implementatie staat geheel open, wij zien graag wat jouw go-to manier is om zoiets op te lossen. Denk hierbij aan de leesbaarheid, testbaarheid, schaalbaarheid en overdraagbaarheid (en elke andere soort heid die je kan bedenken).


## Oplevering
Gelieve een Git repo die wij kunnen clonen en lokaal kunnen draaien. Verder is het handig als wij de werking van je code makkelijk kunnen bevestigen d.m.v. wat code dat het script runt. 

Succes! 
