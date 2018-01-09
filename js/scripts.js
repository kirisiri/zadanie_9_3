var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
alert(text);
var dinosaur = 'triceratops';
var bigDinosaur = dinosaur.toUpperCase();
alert(bigDinosaur);
var textAfterchange = text.replace('Velociraptor', bigDinosaur);
var whereCuttext = textAfterchange.length/2;
alert(whereCuttext);
var firstHalf = textAfterchange.slice(0,72);
alert(firstHalf); 



/* Poniższy tekst przypisz do zmiennej text:
Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.
To nie jest prawda. Powyższe zdanie dotyczy Triceratopsa :)
Zadeklaruj nową zmienną o nazwie `dinosaur` zawierającą tekst 'triceratops' , a następnie spraw, by stał się on 'UPPERCASE', czyli składał się z wielkich liter.
Następnie zamień 'Velociraptor' w tekście ze zmiennej 'text' na wartość zmiennej 'dinosaur', używając wbudowanych funkcji napisów.
Na koniec wyświetl za pomocą console.log() tylko pierwszą połowę otrzymanego zdania (length/2), również z użyciem funkcji napisów.
Spodziewany wynik to:
TRICERATOPS is a genus of herbivorous ceratopsid dinosaur that first app
Stwórz nowe repozytorium i wyślij tam swoje zadanie, a link do niego wklej poniżej. Pamiętaj o udostępnieniu repozytorium swojemu mentorowi. */