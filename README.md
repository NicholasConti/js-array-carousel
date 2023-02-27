- Creo un array contenente in nomi delle immagini
- Creo una variabile a cui aggancio la classe slider dell HTML
- Creo una variabile momentaneamente vuota in cui inseriro la stringa di codice HTML per inserire le immagini
- in un ciclo FOR con i < array.lenght
    - inserico nella variabile vuota  il codice HTML per le immagini
-inesrisco nello slider con innerHTML le stringhe inserite nella variabile che era vuota
- assegno al primo elemento con classe item la classe show per mostrarlo a schermo
-creo 2 variabili per i 2 tasti che avranno le interazioni
- creo una variabile che seleziona tutti gli elementi con classe item
-creo una variabile ACTIVE con valore 0 da usare come contatore nel carosello
- creo un eventi al click del tasto next
    -SE active < array.lenght -1 
        -rimuovo la classe show dall item[ative]
        -incremento active +1
        -assegno la classe show al intem[active+1]
- creo un eventi al click del tasto prev
    -SE active > 0
        -rimuovo la classe show dall item[ative]
        -incremento active -1
        -assegno la classe show al intem[active-1]


BONUS 1

negli event listener:
-Quando premo next
    e active >= array.lenght -1 
        -rimuovo la classe show dall item[ative]
        -active = 0
        - -assegno la classe show al intem[active]
-Quando premo prev
    e active = 0
        -rimuovo la classe show dall item[ative]s
        -active = array.lenght
        - -assegno la classe show al intem[active-1]

BONUS 2

- Creo una variabile a cui aggancio la classe tumbnial dell HTML
- Creo una variabile momentaneamente vuota in cui inseriro la stringa di codice HTML per inserire le immagini nella tumbnail
- nel ciclo FOR 
    -inserico nella variabile vuota della tumbnial il codice html sotto forma di stringa

- assegno al primo elemento della tumbnail la classe selected per togliere l opacita
- creo una variabile che seleziona tutti gli elementi con classe tumb-item
-negli eventi aggiungo e tolgo la classe selected come fatto con show
