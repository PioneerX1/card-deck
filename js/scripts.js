$(document).ready(function() {
  var cardArray = [];
  var numOfSuits = [" of clubs", " of hearts", " of diamonds", " of spades"];
  var numOfRanks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
  i = 0;

  numOfSuits.forEach(function(suit) {

    numOfRanks.forEach(function(rank) {
      cardArray[i] = rank + suit;
      i++;
    });
  });

  alert(cardArray.toString());

  
});
