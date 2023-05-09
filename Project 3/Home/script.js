$(function() {  
    $('article').viewportChecker({
      classToAdd: 'current',
      repeat: true,
      offset: '50%'
    });
  });

  var rellax = new Rellax('.rellax');