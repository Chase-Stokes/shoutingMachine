$(document).ready(function(){
  $("#words").submit(function(event){
    event.preventDefault();
    const shout = $("#yell").val().toUpperCase().concat("!!!!");
    $(".output").text(shout);
  })
});