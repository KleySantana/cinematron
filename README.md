# CS50x Final Project - CINEMATRON

## About

#### Video Demo: <https://youtu.be/ioBLOyjrfZw>
#### Description:
Welcome to Cinematron 2.0, an improvement from my [CS50 Final Project](https://youtu.be/dw-6M4zBNpw).
There's not much change in the Controller (application.py and helpers.py). My goal was to improve the front end. Now the site is fancy, responsive, and accessible.

Languages:
- HTML
- CSS
- Python
- SQLite3
- JavaScript

APIs:
- [IMDB](https://imdb-api.com/api)
- [Gravatar](https://en.gravatar.com/site/implement)

Technologies:
- Flask
- Jinja
- Bootstrap
- Google Fonts: Material Icons
- FontAwesome
- Third-party cards. (Credit attribution in HTML pages)

On the index page, you'll see the best movies and TV shows ever released per [IMDB's](https://www.imdb.com/) rating.

You can also search for a title and receive some matches. Any title you see you can just click on, and you'll see the title's plot, a link to the trailer, and similar titles.

Registering on the site will give you another functionality: favorites! That's right, you can have your favorites gathered in one place. That'll make it easier to find them, and you only need to click in more to see some similar titles that you may like. Pretty cool, right?

Have you heard about [Gravatar](https://en.gravatar.com/)? Global Avatar (get it?) is an Automattic project to centralize your public information. It means that you can define your avatar and which information will be public. This information is automatically recognized by Cinematron and big brands like WordPress, GitHub, and Slack. Just remember to register on Cinematron with the same email you are registered with at Gravatar.

The background is a reference to the movie Tron

## How to run ([VS Code](https://code.visualstudio.com/))

- Clone or download this repository and open it in a code editor
- Register at [IMDB](https://imdb-api.com/api) to receive an API key
- Create a [dotenv file](https://pypi.org/project/python-dotenv/) and save key in it: ```API_KEY=your_key_here```
- Create a [virtual environment](https://code.visualstudio.com/docs/python/tutorial-flask)
- Install all libraries: ```pip install -r /path/to/requirements.txt```
- ```flask run```, and have fun!
