class Card {
  constructor(
    Card_ID,
    Set_ID,
    catName,
    cardQuote,
    cardTitle,
    cardNumber,
    cardRartity
  ) {
    this.Card_ID = Card_ID;
    this.Set_ID = Set_ID;
    this.catName = catName;
    this.cardQuote = cardQuote;
    this.cardTitle = cardTitle;
    this.cardNumber = cardNumber;
    this.cardRartity = cardRartity;
  }
}

module.exports = Card;
