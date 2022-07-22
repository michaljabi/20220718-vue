# Time to test 
              
> Twoim zadaniem jest przetestowanie komponentu [ItemRating](./ItemRating.vue)
                
### Przepis na rozwiązanie zadania:

1. Uruchom testy jako task: `test:verbose` albo poleceniem
```npm
npm run test:verbose
```

2. Utwórz poprawnie nazwany plik z testem `.spec`
3. Przygotuj analogiczny do pozostałych testów [describe](https://vitest.dev/api/#describe)
4. Zaplanuj, co będziesz testować (możesz do tego użyć [it.todo('should sth..')](https://vitest.dev/api/#test-todo)) 
5. Przygotuj odpowiedni `wrapper` do komponentu, w oparciu o: `@vue/test-utils` [mount](https://test-utils.vuejs.org/api/#mount).
6. Napisz odpowiednie testy

> hint: do testowania może być przydatna metoda: [.findAll()](https://test-utils.vuejs.org/api/#findall)

### Opcjonalnie:
O1. Zainstaluj dodatek [Vitest](https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer) do VSC  
O2. Uruchom testy jako `npm run test:ui` aby zobaczyć graficzne GUI do testowania w `vitest`.  
O3. Przed napisaniem testu, jednak już po przygotowaniu jego podstawowej wersji z zaimportowanym komponentem, uruchom polecenie `npm run test:coverage`, aby zobaczyć pokrycie testowe (pojawi się wtedy katalog [./coverage](./coverage)). Po wykonaniu testów znów uruchom to samo polecenie i zobacz, jakie jest pokrycie kodu testami.

### _CHALLENGE_: 
C1. Czy potrafisz znaleźć błąd typu _silent assassin_, nieoczywistego **bug'a** w komponencie, i zrobić odpowiedni test, który go wychwyci?  
