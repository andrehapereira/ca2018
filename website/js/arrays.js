var movieObjArr = [];

function pushMovies() {
  movieObjArr.push(colo);
  movieObjArr.push(batraquio);
  movieObjArr.push(cidadePequena);
  movieObjArr.push(coelhoMau);
  movieObjArr.push(farpoesBaldios);
  movieObjArr.push(ondeOVeraoVai);
  movieObjArr.push(amorAvenidasNovas);
  movieObjArr.push(veraoDanado);
  movieObjArr.push(terraFranca);
  movieObjArr.push(djonAfrica);
}
  //movieObjArr.push(auxObj);

pushMovies();

function createMoviesHTML() {
  var moviesHTML = "<div class='container-fluid'>";
  moviesHTML += "<div class='row'>";
  var counter = 0;
  movieObjArr.forEach(function (movie) {
    moviesHTML += "<div class='col-xs-12 col-sm-6 col-md-4 margin-movies'>"
    moviesHTML += "<img class='film-poster' src='" + movie.img + "' />"
    moviesHTML += "<div class='more-info'>"
    moviesHTML += "<div class='row'>";
    moviesHTML += "<div class='col-xs-2 col-sm-2 col-md-2 col-2'>";
    moviesHTML += "<img class='cursor-pointer' onclick='openSubContent(" + counter + ")' src='imagens/plus.png' />";
    moviesHTML += "</div>";
    moviesHTML += "<div class='col-xs-10 col-sm-10 col-md-10 col-10'>";
    moviesHTML += "<span class='span-pad'>" + movie.Título.toUpperCase() + "</span>";
    moviesHTML += "</div>";
    moviesHTML += "</div>";
    moviesHTML += "</div>";
    moviesHTML += "</div>";
    counter++;
  });
  moviesHTML += "</div>";
  moviesHTML += "</div>";
  document.getElementById("conteudo_filmes").innerHTML = moviesHTML;
}
