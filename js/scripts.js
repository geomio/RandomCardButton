// $(document).ready(function() {
  
// });


// const cardSuite = ["clubs", "diamonds", "spades", "hearts"]
// const cardNumber = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
// let shownCard = (cardNumber[Math.floor(Math.random() * cardNumber.length)] + " of " + cardSuite[Math.floor(Math.random() * cardSuite.length)]);

// console.log(shownCard);

$(document).ready(function() {
  $("#button").click(function(event){
    const cardSuite = ["clubs", "diamonds", "spades", "hearts"]
    const cardNumber = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
    let shownCard = (cardNumber[Math.floor(Math.random() * cardNumber.length)] + " of " + cardSuite[Math.floor(Math.random() * cardSuite.length)]);
    
    //outputArray.push($("input#input1").val().toUpperCase())
    // above is combine const area and lower push are in one line


    $(".card").text(shownCard);
    $("ul").prepend("<li>" + shownCard + "</li>");


    event.preventDefault();
  
  });
});