var introductionObj = new Vue({
  el: '#introduction',

  created () {
    var ctx = this;
    axios.get('introduction.json').then(function(response) {
      var data = response.data;
      ctx.name = data.name;
      ctx.introduction = data.introduction;
      ctx.languages = data.languages;
    });
  },

  data: {
    name: '',
    introduction: '',
    languages: []
  }
});

var skillsObj = new Vue({
  el: '#skills',

  created () {
    var ctx = this;
    axios.get('skills.json').then(function(response) {
      var data = response.data;
      ctx.skills = data.skills;
      ctx.interests = data.interests;
    });
  },

  data: {
    skills: [],
    interests: []
  }
});