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
        self.userSearch = '';
        self.filmsSearched.push(input);

        console.log(input);
        console.log(self.filmsSearched);

        axios
        
          .get('https://api.themoviedb.org/3/search/movie?api_key=d65d8c3ec5cb5d67bcfef8d1bc60f32c&query=ritorno al futuro')
          .then(function (result) {
            console.log(result.data.results);
          }
        );
      },
    },


})
