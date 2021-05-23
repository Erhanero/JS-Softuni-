function movieRating(input) {
    let countMovies = input[0];
    let index = 1;
    let minRating = 10;
    let maxRating = 0;
    let maxRatingMovie = "";
    let minRatingMovie = "";
    let sumRating = 0;
    while (index != input.length) {
        let currentMovie = input[index++];

        let rating = input[index]
        sumRating += rating;
        if (rating > maxRating) {
            maxRating = rating;
            maxRatingMovie = currentMovie;
        }
        if (rating < minRating) {
            minRating = rating;
            minRatingMovie = currentMovie;
        }


        index++
    }
    console.log(`${maxRatingMovie} is with highest rating: ${maxRating}`);
    console.log(`${minRatingMovie} is with lowest rating: ${minRating}`);
    console.log(`Average rating: ${sumRating / countMovies}`);
}
