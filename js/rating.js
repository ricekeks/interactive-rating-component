document.addEventListener('DOMContentLoaded', function () {
  (function () {
    let rating = document.querySelectorAll('.my-rating');
    let i = 0;
    //loop through stars
    while (i < rating.length) {
      //attach click event
      rating[i].addEventListener('click', function () {
        //current value
        let val = parseInt(this.getAttribute("rating-value"));
        //display recently clicked value
        document.querySelector('#ratingdisplay').value = 'You selected ' + val + ' out of 5';
      });
      i++;
    } //end of while loop
  })(); // end of rate function

  (function () {
    let submitbttn = document.getElementById("submitbttn");
    submitbttn.onclick = function(){
      if(document.querySelector('#ratingdisplay').value != ''){
        console.log("Button pressed");
        let ratingbox = document.querySelector(".userrating");
        let thankyoubox = document.querySelector(".thankyou");

        ratingbox.style.display = "none";
        thankyoubox.style.display = "block";
      }

      return false;
    }
  })(); // end of submitrating function
});
