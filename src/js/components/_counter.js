var counter = $('.js-counter');

counter.each(function() {
  var this_ = $(this),
    countTo = this_.attr('data-count');
    
  $({ countNum: this_.text()}).animate({
    countNum: countTo
  },
  
  {
  
    duration: 1000,
    easing:'linear',
    step: function() {
      this_.text(Math.floor(this.countNum));
    },
    complete: function() {
      this_.text(this.countNum);
      //alert('finished');
    }
  
  });  
    
    
  
});
