// storing movie posters images

let pstr1 =
  "https://2.bp.blogspot.com/_o31CLSHm6KA/TA8B1M5gpmI/AAAAAAAAAE8/96x3rDbzJQU/s1600/Inception+banner+3.jpg";
let pstr2 =
  "https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422";
let pstr3 =
  "https://thefilmstage.com/wp-content/uploads/2014/09/interstellar_banner.jpg";
let pstr4 =
  "https://murai.my/wp-content/uploads/2019/03/D2jvOdmUgAALnnx.jpg-large.jpeg";
let pstr5 =
  "https://i.dailymail.co.uk/i/pix/2012/01/21/article-0-07C8C15E000005DC-649_634x474.jpg";

let images = JSON.parse(localStorage.getItem("images")) || [];
images.push(pstr1, pstr2, pstr3, pstr4, pstr5);

localStorage.setItem("images", JSON.stringify(images));

// displaying the above images as slideshows

let i = 0;

let slideshow = document.querySelector("#slideshow");

setInterval(function () {
  if (i === images.length) {
    i = 0;
  }

  let image = images[i];

  slideshow.innerHTML = null;

  let img = document.createElement("img");
  img.id = "imgs";
  img.src = image;

  slideshow.append(img);

  i++;
}, 2000);

// sort options

document.querySelector("#sort-lh").addEventListener("click", sortlh);

document.querySelector("#sort-hl").addEventListener("click", sorthl);

function sorthl() {
  var sortedmovies = movies.sort(function (a, b) {
    return b.ratings - a.ratings;
  });
  displayData(sortedmovies);
}

function sortlh() {
  var sortedmovies = movies.sort(function (a, b) {
    return a.ratings - b.ratings;
  });
  console.log(sortedmovies);
  displayData(sortedmovies);
}

// displaying the movie boxes in grid fashion

let moviess = [
  {
    url: "https://tse3.mm.bing.net/th?id=OIP.8UGEVWbF9oYyh_4nrQOfNwHaDa&pid=Api&P=0&w=357&h=165",
    name: "Interstellar",
    date: "October 26, 2014",
    ratings: 8.7,
  },

  {
    url: "https://tse3.mm.bing.net/th?id=OIP.0Ft_Ya_euI8K-VNqbrusVgHaDZ&pid=Api&P=0&w=373&h=171",
    name: "Inception",
    date: "July 8, 2010",
    ratings: 8.8,
  },
  {
    url: "https://i.ytimg.com/vi/EweuTOz7g-g/maxresdefault.jpg",
    name: "The Matrix",
    date: "March 24, 1999",
    ratings: 8.7,
  },
  {
    url: "https://tse2.mm.bing.net/th?id=OIP.w3hXnuTTNWLCY4gvxxQGlwHaEK&pid=Api&P=0&w=319&h=179",
    name: "The 13th Floor",
    date: "April 16, 1999",
    ratings: 7.0,
  },
  {
    url: "http://3.bp.blogspot.com/-U1XkQo44O3g/UP3cVwarBNI/AAAAAAAATk4/ClS8rmIrZfc/s1600/source-code-movie-wallpaper.jpg",
    name: "Source Code",
    date: "October 26, 2014",
    ratings: 7.5,
  },
  {
    url: "https://tse3.mm.bing.net/th?id=OIP.WAeIWkAInSfKhWNTpuC2uQHaEo&pid=Api&P=0&w=281&h=176",
    name: "Oblivion",
    date: "October 26, 2014",
    ratings: 7.0,
  },
  {
    url: "https://image.tmdb.org/t/p/original/vIAm7UDNjGztvUYtDuS0in1VAXg.jpg",
    name: "Titanic",
    date: "November 1, 1997",
    ratings: 7.9,
  },
  {
    url: "https://www.myfreewallpapers.com/movies/social/the-fault-in-our-stars.jpg",
    name: "The Fault In Our Stars",
    date: "July 4, 2014",
    ratings: 7.7,
  },
  {
    url: "https://mamalikesthis.com/wp-content/uploads/2019/03/top-five-feet-apart-movie.jpg",
    name: "Five Feet Apart",
    date: "March 15, 2019",
    ratings: 7.2,
  },
];

let movies = JSON.parse(localStorage.getItem("movies")) || moviess;

localStorage.setItem("movies", JSON.stringify(movies));

console.log(movies);
displayData(movies);

function displayData(movies) {
  document.querySelector("#movies").innerHTML = "";

  movies.map(function (item) {
    var innerDiv = document.createElement("div");
    innerDiv.id = "innerDiv";

    // first div for flex
    var firstDiv = document.createElement("div");

    var img = document.createElement("img");
    img.id = "imgm";
    img.src = item.url;

    firstDiv.appendChild(img);

    // second div for flex
    var secondDiv = document.createElement("div");

    var name = document.createElement("h2");
    name.innerText = item.name;

    var date = document.createElement("h4");
    date.innerText = item.date;

    var ratings = document.createElement("h4");
    ratings.innerText = item.ratings;

    secondDiv.append(name, date, ratings);

    innerDiv.append(firstDiv, secondDiv);

    document.querySelector("#movies").append(innerDiv);
  });
}
