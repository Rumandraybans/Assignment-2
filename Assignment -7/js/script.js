let movieItems = [];
let favItems = [];

const getMovies = () => {
    return fetch('http://localhost:3000/movies')
        .then(response => {
            if (!response.ok) throw new Error("Failed to fetch movies");
            return response.json();
        })
        .then(data => {
            movieItems = data;
            createMovieList(); 
            return movieItems;
        })
        .catch(error => console.error("Error:", error));
};

function getFavourites() {
    return fetch('http://localhost:3000/favourites')
        .then(response => {
            if (!response.ok) throw new Error("Failed to fetch favourites");
            return response.json();
        })
        .then(data => {
            favItems = data;
            createFavouriteList(); 
            return favItems;
        })
        .catch(error => console.error("Error:", error));
}

const postMovie = (myMovie) => {
    return fetch('http://localhost:3000/favourites', {
        method: 'POST',
        body: JSON.stringify(myMovie),
        headers: { 'Content-Type': 'application/json' }
    }).then(response => {
        if (!response.ok) throw new Error("Movie already exists in favourites");
        return response.json();
    });
};

const deleteFavourite = (id) => {
    return fetch(`http://localhost:3000/favourites/${id}`, { method: 'DELETE' })
        .then(response => {
            if (response.ok) return getFavourites();
            throw new Error("Could not remove movie");
        })
        .catch(error => alert(error.message));
};

function addFavourite(id) {
    if (isMoviePresentInFavItems(id)) {
        alert("Movie is already added to favourites");
        return Promise.reject("Duplicate");
    }
    const movie = getMovieById(id);
    return postMovie(movie).then(() => getFavourites());
}

function isMoviePresentInFavItems(selectedMovieId) {
    return favItems.some(movie => movie.id == selectedMovieId);
}

function getMovieById(id) {
    return movieItems.find(movie => movie.id == id);
}


const createMovieList = () => {
    const moviesContainer = document.getElementById('moviesList');
    if(!moviesContainer) return;
    
    moviesContainer.innerHTML = ''; 
    let html = '';
    movieItems.forEach(movie => {
        html += `
        <div class="col-12 col-lg-6 mb-4">
            <div class="card h-100 shadow-sm border-0">
                <img src="${movie.posterPath}" class="card-img-top" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/150'">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text text-muted small">Release: ${movie.releaseDate}</p>
                    <button class="btn btn-primary btn-sm btn-block" onclick="addFavourite('${movie.id}')">Add to Favourites</button>
                </div>
            </div>
        </div>`;
    });
    moviesContainer.innerHTML = html;
};

const createFavouriteList = () => {
    const favContainer = document.getElementById('favouritesList');
    if(!favContainer) return;
    
    favContainer.innerHTML = ''; 
    let html = '';
    favItems.forEach(movie => {
        html += `
        <div class="col-12 col-lg-6 mb-4">
            <div class="card h-100 shadow-sm border-danger">
                <img src="${movie.posterPath}" class="card-img-top" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/150'">
                <div class="card-body">
                    <h5 class="card-title text-danger">${movie.title}</h5>
                    <button class="btn btn-outline-danger btn-sm btn-block" onclick="deleteFavourite('${movie.id}')">Remove</button>
                </div>
            </div>
        </div>`;
    });
    favContainer.innerHTML = html;
};