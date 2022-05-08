# CS50x Final Project - CINEMATRON

#### Video Demo: <https://youtu.be/dw-6M4zBNpw>
#### Description:
Welcome to Cinematron, a simplistic website for movies and tv shows fans.
I chose to build this web application as my final project because one of the things I found very interesting in the problem set Finance was the API. Since it wasn't taught in class, I had to learn from scratch. In this web application, I built seven different API URLs. I also expanded my knowledge of python, jinja, CSS, and HTML.

Languages:
- HTML
- CSS
- Python
- SQLite3

APIs:
- [IMDB](https://imdb-api.com/api)
- [Gravatar](https://en.gravatar.com/site/implement)

Technologies:
- Flask
- Jinja
- Bootstrap
- Google Fonts: Material Icons
- Third-party cards. (Credit attribuition in HTML pages)

On the index page, you'll see the bests movies and TV shows ever released per [IMDB's](https://www.imdb.com/) rating.

You can also search for a title and receive some matches. Any title you see you can click on "More," and you'll see the title's stars, plot, a link to the trailer, and similar titles.

Registering on the site will give you another functionality: favorites! That's right, you can have your favorites gathered in one place. That'll make it easier to find them, and you only need to click in more to see some similar titles that you may like. Pretty cool, right?

Have you heard about [Gravatar](https://en.gravatar.com/)? Global Avatar (get it?) is an Automattic project to centralize your public information. It means that you can define your avatar and which information will be public. This information is automatically recognized by Cinematron and big brands like WordPress, GitHub, and Slack. Just remember to register on Cinematron with the same email you are registered with at Gravatar.

The background is a reference to the movie Tron

helpers.py - It is based on what CS50's staff wrote for Finance. I changed lookup function and added others functions to make six requests from IMDB and one request from Gravatar.
application.py - Is the Web Application controller. Everything goes through it and it renders every template, redirects to every route and interacts with everything: from HTML to database.
movies.db - Is the database. It will save the user email and the hash with the password. In the table favorites, will save the imdb id for the movie or serie.
In the folder templates will go all HTML. layout.html is the design pattern that will be used in all other pages.
delete.html will ask for confirmation if the user trully wants to delete the account.
index.html is the first page the site shows. With jinja it generates the movie and series cards.
ms_info.html will generate a card with more information about the title and cards for the similar titles.
mylist.html will generate a list of cards for every movie the user have as favorite.
profile.html will create a profile card with all information the user has from Gravatar. If user don't have a Gravatar account, it will display only the number of favorites titles and a button to erase account.