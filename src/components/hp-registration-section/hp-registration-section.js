$("#submit").click(function () {
  let name = $("#name").val();
  let surname = $("#surname").val();
  let birthday = $("#birthday").val();
  let adress = $("#adress").val();
  let surname2 = $("#surname2").val();
  let name2 = $("#name2").val();
  let tel = $("#tel").val();
  let email = $("#email").val();
  if (
    name == "" ||
    name2 == "" ||
    surname == "" ||
    surname2 == "" ||
    birthday == "" ||
    adress == "" ||
    tel == "" ||
    email == ""
  ) {
  } else {
    swal("Formulář úspěšně odeslán", "Děkujeme");
  }
});
