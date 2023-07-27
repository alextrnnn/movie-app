const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWU0MmZmMjcxODA4NWM4YjExYTg4MTI0ODQ1MjgyMSIsInN1YiI6IjY0YmYwNDdhYmIwNzBkMDIzN2Q3YjFlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CQml32EVIn1ngIqnx1Pc_xy4Zk6IkrlJsE6LLtaB2xo'
    }
};

const DEFAULT_API = 'https://api.themoviedb.org/3/movie/popular';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/original/';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?query='
const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

/*
    This code fetches data from the specified url, 
    converts the response to a JSON object, and 
    then logs the results property of the JSON data to the console.
*/

returnMovies(DEFAULT_API);

function returnMovies(url) {
    fetch(url, options)
        .then(res => res.json())
        .then(function (data) {
            data.results.forEach(element => {

                const div_card = document.createElement('div');
                div_card.setAttribute('class', 'card');
                //same as div_card.className = card

                const div_row = document.createElement('div');
                div_row.setAttribute('class', 'row');

                const div_column = document.createElement('div');
                div_column.setAttribute('class', 'column');

                const image = document.createElement('img');
                image.setAttribute('class', 'thumbnail');
                image.setAttribute('id', 'image');

                const title = document.createElement('h3');
                title.setAttribute('id', 'title');

                const center = document.createElement('center');

                title.innerHTML = `${element.title}<br><a href="movie.html?id=${element.id}&title=${element.title}">Reviews</a>`;

                image.src = IMAGE_PATH + element.poster_path;

                center.appendChild(image);
                div_card.appendChild(center);
                div_card.appendChild(title);
                div_column.appendChild(div_card);
                div_row.appendChild(div_column);

                main.appendChild(div_row);
            });
        })
        .catch(err => console.error(err));

}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const query = search.value;

    if (query) {
        returnMovies(SEARCH_API+ query);
        search.value = "";
    }
});
