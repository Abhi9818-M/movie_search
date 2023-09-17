const container = document.getElementById("container")
const search = document.getElementById("search")
const button = document.getElementById("button")

button.addEventListener("click", getMovies)

async function getMovies(){
    container.innerText="";
    let movieName = search.value;
    try {
        let response = await fetch(`https://www.omdbapi.com/?&apikey=bce5f182&s=${movieName}`);
        let data = await response.json();
        console.log(data);
        const movieList = data.Search;
        console.log(movieList);
        movieList.forEach((search) => {
            console.log(search);
            PrintMovieList(search)
        });
        function PrintMovieList(ele){
            const div = document.createElement("div")
            div.classList.add("content")

            div.innerHTML = `<img src = ${ele.Poster}>
            <div class="title">${ele.Title}</div>
            <div class="year"> ${ele.Year}</div>
            `
            container.appendChild(div);
        }
        search.value = "";
    }
    catch (error) {
        console.log(error, "error");
    }
}

