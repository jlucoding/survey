$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    const foodVal = $('#food').val();
    const dateVal = $('#dob').val();
    // $('#output').text(foodVal);
    // $('#output').text(dateVal);
    console.log(`You selected ${foodVal} as your favorite food.` )
    console.log(`You selected ${dateVal} as your date of birth.` )





    // $('form#add').submit(function (event) {
    //   event.preventDefault();
      const name = $("input#userName").val();
      console.log(name)
    // });
  
    const favoriteMusic = $("input:radio[name=genre]:checked").val();
    console.log(favoriteMusic)

    const favoriteColor = $("#color").val();
    console.log(favoriteColor)
  });
})
