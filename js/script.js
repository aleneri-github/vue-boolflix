var root = new Vue(
  {
    el: '#root',
    data: {
      films: [],
      userSearch: '',
      imgNotAvailable: 'img/img_not_availiable.jpg',
      prefixPath: 'https://image.tmdb.org/t/p/w220_and_h330_face'
    },

    methods: {

      searchFilm: function() {
        var self = this;
        var input = self.userSearch;
        console.log(input);

        axios

          .get('https://api.themoviedb.org/3/search/movie',
          {
            params: {
              api_key: 'd65d8c3ec5cb5d67bcfef8d1bc60f32c',
              query: self.userSearch,
              language: 'it-IT'
            }
          }
        )
          .then(function (result) {
            console.log(result.data.results);
            self.userSearch = '';
            self.films = result.data.results

            self.films.forEach(
              (element) => {
                let roundNumber = element.vote_average / 2;
                element.starFull = Math.ceil(roundNumber);
                // console.log(element.starFull);
              }
            )
          }
        );


        axios

          .get('https://api.themoviedb.org/3/search/tv',
          {
            params: {
              api_key: 'd65d8c3ec5cb5d67bcfef8d1bc60f32c',
              query: self.userSearch,
              language: 'it-IT'
            }
          }
        )
          .then(function (result) {
            console.log(result.data.results);
            self.userSearch = '';
            self.series = result.data.results

            self.series.forEach(
              (element) => {
                let roundNumber = element.vote_average / 2;
                element.starFull = Math.ceil(roundNumber);
                // console.log(element.starFull);
              }
            )
          }
        );






      },
    },
  }
)
