var root = new Vue(
  {
    el: '#root',
    data: {
      films: [],
      userSearch: '',
      filmsSearched: []
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
              query: self.userSearch
            }
          }
        )
          .then(function (result) {
            console.log(result.data.results);
          }
        );
      },
    },


})
