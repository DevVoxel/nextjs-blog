---
title: 'Qu'est-ce qui m'a amené à la programmation?'
date: '2022-05-20'
---

La grande question que tout le monde se pose... "Qu'est-ce qui vous a amené à la programmation".

J'adore cette question ! Dans ce blog, je vais discuter de la façon dont je me suis moi-même lancé dans la programmation ! Développement Web spécifiquement.

En 2010, j'avais environ 8 ans. Mon père avait travaillé dans le domaine informatique pendant une bonne période de temps à ce moment-là, et j'avais un intérêt croissant pour ce qu'il faisait au jour le jour. À cause de ma curiosité, il a commencé un jour à m'apprendre le HTML sur un tableau noir dans notre sous-sol. Cela a suscité encore plus de curiosité de ma part, et finalement, j'ai commencé à vouloir créer mes propres sites Web. Pendant un certain temps, je faisais de petites pages pour moi et de petits projets ici et là pour le plaisir, mais ce qui a vraiment fait avancer les choses, c'est un projet que j'ai fait avec mon père.

Ce projet était connu sous le nom de "The Randomizr" ! Une application Web très simple qui aiderait mes frères et moi à décider quel film nous voulions regarder pour la nuit.

**Le Randomizr** avait une liste non ordonnée de base qui contenait tous les films que nous possédions sur DVD et en ligne. Il y avait un fichier *styles.css* très basique qui était lié et contenait des styles de base pour rendre le site Web un peu plus attrayant. En dehors de cela, ajoutez un peu de JavaScript pour rechercher au hasard dans la liste et mettre en évidence un film à regarder !

Voici un exemple de ce à quoi ressemblait ce JavaScript !

```javascript
        <script>
            function myFunction() {
                var movies = document.getElementById("movies");
                var moviesLi = movies.getElementsByTagName("li");
                var selectedNumber = Math.floor((Math.random() * moviesLi.length - 1) + 1);
                var selectedMovie = moviesLi[selectedNumber];


                for (var i = moviesLi.length - 1; i >= 0; i--) {
                    moviesLi[i].setAttribute("style", "font-weight: normal;color: black;");
                }

                selectedMovie.setAttribute("style", "font-weight: bold;color: red;");
                document.getElementById('selectedTitle').innerHTML = selectedMovie.innerHTML;
            }
        </script>
```
