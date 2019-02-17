# Solvro Spectacle Boilerplate
Stworzone przy użyciu `spectacles`!
Można w slajdach używać wszystkiego co mamy w Reakcie, więc prezentacje interaktywne jak najbardziej wchodzą w grę.

Boisz się `dżawaskryptu`? No worries - wystarczy Ci markdown.

## Jak włączyć prezkę
1. Odpalamy jak każdą nodeową apkę

    `yarn start`

2. Na ekranie wyświetlanym dla publiczności włączamy

    `localhost:3000`

3. Dla siebie na monitorku odpalamy

    `localhost:3000/#/?presenter&timer`
    
    lub 
    
    `localhost:3000/#/?presenter` - bez timera jeśli nie lubimy się spieszyć
    
## Dodawanie slajdów
1. Wszystkie slajdy znajdują się w pliku `index.mdx`
2. Slajdy oddzielone są znakiem `---`
3. Mamy dostępne 3 domyślne rodzaje slajdów - `DarkSlide`, `CodeSlide` i `SolvroSlide` 🦊💙
    
    by wybrać dany rodzaj slajdu wpisujemy np. `export default SolvroSlide`

4. Mamy kilka rodzajów przejść, które można dowolnie łączyć. Umieszczamy ich nazwy w tablicy stringów

    Przykład: `export const transition = ['zoom']`
    
5. 💕 Komponenty Reactowe 💕

    Nie ma nic prostszego - wrzucamy do slajdu zaimportowany w `index.mdx` komponent
    
6. W razie problemów śmiało i niedomówień śmiało sięgać do [oficjalnej dokumentacji](https://github.com/FormidableLabs/spectacle) 



