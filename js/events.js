//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  })
};

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass('tasty');
  })
};

function pressIt() {
  $('input').on('keydown', function(key) {
    if (key.which === 71) {
      alert('Hey!')
    }
  })
};

function submitIt() {
  $('p').on('click', function() {
    alert("Hey!");
  })
};


$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();

});
