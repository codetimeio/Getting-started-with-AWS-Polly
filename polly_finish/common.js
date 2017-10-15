
var app = new Vue({
  el: '#app',
  data: {
    text: 'Hello Vue!'
  }, 
  watch: {
    text: function () {
      console.log('it ran');
      var params = new URLSearchParams();
      params.append('text', this.text);

      axios.post('process.php',params)
      .then(function (response) {
        console.log(response.data);
          var audio = $('audio');
          audio[0].src = response.data;
          audio[0].play(); 
      })
      .catch(function (error) {
        console.log(error);
      });

    }
  }
})





 