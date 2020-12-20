var root = new Vue(
  {
    el: '#root',
    data: {
      films: [],
      userSearch: ''
    },

    methods: {
      searchFilm: function() {
        var input = this.userSearch;
        this.userSearch = '';
        console.log(input);

        },

      },

    mounted: function() {
      var self = this;
      axios
      .get('https://api.themoviedb.org/3/search/movie?api_key=d65d8c3ec5cb5d67bcfef8d1bc60f32c&query=ritorno al futuro')
      .then(
        (result) => {
          console.log(result.data.results);
      }
    );

  },
})
