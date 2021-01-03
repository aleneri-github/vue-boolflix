var root = new Vue(
  {
    el: '#root',
    data: {
      films: [],
      series: [],
      userSearch: '',
      imgNotAvailable: 'img/img_not_availiable.jpg',
      prefixPath: 'https://image.tmdb.org/t/p/w220_and_h330_face'
    },

    methods: {

      searchFilm: function() {
        var self = this;


        // Chiamata ajax per film
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


                axios
                  // chiamata ajax cast film
                  .get('https://api.themoviedb.org/3/movie/' + element.id + '/credits', {
                      params: {
                          api_key: "d65d8c3ec5cb5d67bcfef8d1bc60f32c",
                          language: 'it-IT',
                      }
                  }
                )
                  .then(function (result) {

                      element.actors = [];
                      element.cast = result.data.cast;
                      console.log(element.cast);

                      for (let i = 0; i < 5; i++) {
                          const actor = element.cast[i];
                          element.actors.push(actor.name);
                      }
                    self.$forceUpdate();
                  }
                );

              }
            )
          }
        );


        // Chiamata ajax per serie TV
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
            // console.log(result.data.results);
            self.userSearch = '';
            self.series = result.data.results
            console.log(result.data.results);

            self.series.forEach(
              (element) => {
                let roundNumber = element.vote_average / 2;
                element.starFull = Math.ceil(roundNumber);

                axios
                  // chiamata ajax cast serie tv
                  .get('https://api.themoviedb.org/3/tv/' + element.id + '/credits', {
                    params: {
                        api_key: "d65d8c3ec5cb5d67bcfef8d1bc60f32c",
                        language: 'it-IT',
                    }
                  }
                )
                  .then(function (result) {

                      element.actors = [];
                      element.cast = result.data.cast;
                      console.log(element.cast);

                      for (let i = 0; i < 5; i++) {
                          const actor = element.cast[i];
                          element.actors.push(actor.name);
                      }
                    self.$forceUpdate();
                  }
                );

              }
            )
          }
        );

      },
    },
  }
)
