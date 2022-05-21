---
title: 'What got me into programming?'
date: '2022-05-20'
---

The big question that everyone gets asked... "What got you into programming".

I absolutely love this question!  Within this blog, I will be discussing how I got into programming myself! Web Development specifically.

Back in 2010, I was about 8 years old.  My Dad had worked in the IT field for a good amount of time at this point, and I had a growing interest in what he was doing day to day.  Because of my curiosity he one day started teaching me HTML on a chalkboard in our basement.  This lead to even more curiosity on my end, and eventually, I started to want to build my own websites.  For a time I would do small pages for myself and little projects here and there for enjoyment, but what really got things going was a project I did with my Dad.  

This project was known as "The Randomizr"!  A very simple web app that would help my brothers and me decide on what movie we wanted to watch for the night. 

**The Randomizr** had a basic unordered list that held all the movies we owned on DVD and online.  There was a very basic *styles.css* file that was linked and held basic styles to make the website look a tad more appealing.  Other than that, add a little JavaScript to randomly search through the list and highlight a movie to watch!

Here is an example of what that JavaScript looked like!

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
