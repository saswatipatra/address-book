$(document).ready(function () {
  $("form").submit(function (event){
    var name = $("#name").val();
    var address = $("#address").val();

    $("#contacts").append('<li>' + name + '</li>');

    event.preventDefault();
  });
});
