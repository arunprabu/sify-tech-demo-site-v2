function contactSubmitHandler(event) {
  event.preventDefault();

  let name = document.getElementById("fullNameInput").value;
  let email = document.getElementById("emailInput").value;
  let phone = document.getElementById("phoneInput").value;
  let query = document.getElementById("queryInput").value;


  console.log($);
  $.ajax({
    method: "POST",
    url: "http://jsonplaceholder.typicode.com/users",
    data: { name: name, email: email }
  })
  .done(function(result) {

    console.log(result);

  });

  

}

