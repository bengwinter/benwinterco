$(document).ready(function(){
  personalSite.animateAboutMeEvent();
  personalSite.animateProjectsEvent();
  personalSite.animateContactEvent();
});

var personalSite = {
  animateAboutMeEvent: function() {
    $('#about-me').click(function(e) {
      e.preventDefault();
      $('#display-text').show();
      $('#display-text').html('');
      $('#display-message').html('');
      $('#about-me').css('color', 'rgba(87, 10, 22, 1.0)');
      $('#current-projects').css('color', 'rgba(37, 69, 138, 1.0)');
      $('#contact').css('color', 'rgba(37, 69, 138, 1.0)');

      var html = "<p>I graduated from Middlebury College in 2010 with a BA in Economics. After previous experiences in consulting, finance and marketing, I have recently entered the developer world as a full stack developer with a focus in RoR. In my free time, I love to ski, throw pottery and watch Boston sports.</p>"
      $('#display-text').append(html);
    });
  },

  animateProjectsEvent: function() {
    $('#current-projects').click(function(e) {
      e.preventDefault();
      $('#display-text').show();
      $('#display-text').html('');
      $('#display-message').html('');
      $('#about-me').css('color', 'rgba(37, 69, 138, 1.0)');
      $('#current-projects').css('color', 'rgba(87, 10, 22, 1.0)');
      $('#contact').css('color', 'rgba(37, 69, 138, 1.0)');
      var html = "<a href='http://www.monroeapi.com' class='project-list-header-link'>Monroe</a>&nbsp;&nbsp;(<a href='https://github.com/blakeruddock/political-sentiment' class='launch-list-item'>Github Repo</a>)<p class='project-description'>Twitter and news content aggregator that performs sentiment analysis and builds associations between collected content  and a database of federal politicians</p><a href='http://www.usincomecalculator.com' class='project-list-header-link'>US Income Calculator</a>&nbsp;&nbsp;(<a href='https://github.com/bengwinter/america_wealth' class='launch-list-item'>Github Repo</a>)<p class='project-description'>In testing stage of development. Application that allows an individual to see where he/she is positioned in the income structure of the United States</p><h4 class='project-list-header'>Apollo</h4>(<a href='https://github.com/bengwinter/political-sentiment' class='launch-list-item'>Github Repo</a>)<p class='project-description'>Currently in development. Building an online music player that offers the ability to access multiple music providers through one platform.</p>"
      
      $('#display-text').append(html);
    });
  },

  animateContactEvent: function() {
    $('#contact').click(function(e) {
      e.preventDefault();
      $('#display-text').html('');
      $('#display-text').show();
      $('#display-message').html('');
      $('#about-me').css('color', 'rgba(37, 69, 138, 1.0)');
      $('#current-projects').css('color', 'rgba(37, 69, 138, 1.0)');
      $('#contact').css('color', 'rgba(87, 10, 22, 1.0)');

      var html = "<ul id='contact-list'><li><a href='https://github.com/bengwinter'>Github</a></li><li><a href='http://www.linkedin.com/in/bengwinter'>LinkedIn</a></li><li><a href='https://twitter.com/#!/winterbos'>Twitter</a></li><li>I can also be reached via email at ben.g.winter@gmail.com</li></ul>"
      $('#display-text').append(html);
    });
  }
};

