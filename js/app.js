const game = {
    playerHand: [],
    dealerHand: [],
    cardsInDeck: [
        twoSpades = {
            value: 2,
            suit: "spades",
            icon: "two"
        },
        twoClubs = {
            value: 2,
            suit: "clubs",
            icon: "two"
        },
        twoDiamonds = {
            value: 2,
            suit: "diamonds",
            icon: "two"
        },
        twoHearts = {
            value: 2,
            suit: "hearts",
            icon: "two"             
        },
        threeSpades = {
            value: 3,
            suit: "spades",
            icon: "three"
        },
        threeClubs = {
            value: 3,
            suit: "clubs",
            icon: "three"
        },
        threeDiamonds = {
            value: 3,
            suit: "diamonds",
            icon: "three"
        },
        threeHearts = {
            value: 3,
            suit: "hearts",
            icon: "three"             
        },
        fourSpades = {
            value: 4,
            suit: "spades",
            icon: "four"
        },
        fourClubs = {
            value: 4,
            suit: "clubs",
            icon: "four"
        },
        fourDiamonds = {
            value: 4,
            suit: "diamonds",
            icon: "four"
        },
        fourHearts = {
            value: 4,
            suit: "hearts",
            icon: "four"             
        },
        fiveSpades = {
            value: 5,
            suit: "spades",
            icon: "five"
        },
        fiveClubs = {
            value: 5,
            suit: "clubs",
            icon: "five"
        },
        fiveDiamonds = {
            value: 5,
            suit: "diamonds",
            icon: "five"
        },
        fiveHearts = {
            value: 5,
            suit: "hearts",
            icon: "five"             
        },
        sixSpades = {
            value: 6,
            suit: "spades",
            icon: "six"
        },
        sixClubs = {
            value: 6,
            suit: "clubs",
            icon: "six"
        },
        sixDiamonds = {
            value: 6,
            suit: "diamonds",
            icon: "six"
        },
        sixHearts = {
            value: 6,
            suit: "hearts",
            icon: "six"             
        },
        sevenSpades = {
            value: 7,
            suit: "spades",
            icon: "seven"             
        },
        sevenClubs = {
            value: 7,
            suit: "clubs",
            icon: "seven"             
        },
        sevenDiamonds = {
            value: 7,
            suit: "diamonds",
            icon: "seven"             
        },
        sevenHearts = {
            value: 7,
            suit: "hearts",
            icon: "seven"             
        },
        eightSpades = {
            value: 8,
            suit: "spades",
            icon: "eight"             
        },
        eightClubs = {
            value: 8,
            suit: "clubs",
            icon: "eight"             
        },
        eightDiamonds = {
            value: 8,
            suit: "diamonds",
            icon: "eight"             
        },
        eightHearts = {
            value: 8,
            suit: "hearts",
            icon: "eight"             
        },
        nineSpades = {
            value: 9,
            suit: "spades",
            icon: "nine"            
        },
        nineClubs = {
            value: 9,
            suit: "clubs",
            icon: "nine"            
        },
        nineDiamonds = {
            value: 9,
            suit: "diamonds",
            icon: "nine"            
        },
        nineHearts = {
            value: 9,
            suit: "hearts",
            icon: "nine"            
        },
        tenSpades = {
            value: 10,
            suit: "spades",
            icon: "ten"            
        },
        tenClubs = {
            value: 10,
            suit: "clubs",
            icon: "ten"            
        },
        tenDiamonds = {
            value: 10,
            suit: "diamonds",
            icon: "ten"            
        },
        tenHearts = {
            value: 10,
            suit: "hearts",
            icon: "ten"            
        },
        jackSpades = {
            value: 10,
            suit: "spades",
            icon: "jack"
        },
        jackClubs = {
            value: 10,
            suit: "clubs",
            icon: "jack"
        },
        jackDiamonds = {
            value: 10,
            suit: "diamonds",
            icon: "jack"
        },
        jackHearts = {
            value: 10,
            suit: "hearts",
            icon: "jack"
        },
        queenSpades = {
            value: 10,
            suit: "spades",
            icon: "queen"            
        },
        queenClubs = {
            value: 10,
            suit: "clubs",
            icon: "queen"            
        },
        queenDiamonds = {
            value: 10,
            suit: "diamonds",
            icon: "queen"            
        },
        queenHearts = {
            value: 10,
            suit: "hearts",
            icon: "queen"            
        },
        kingSpades = {
            value: 10,
            suit: "spades",
            icon: "king"
        },
        kingClubs = {
            value: 10,
            suit: "clubs",
            icon: "king"
        },
        kingDiamonds = {
            value: 10,
            suit: "diamonds",
            icon: "king"
        },
        kingHearts = {
            value: 10,
            suit: "hearts",
            icon: "king"
        },
        aceSpades = {
            value: [1, 11],
            suit: "spades",
            icon: "ace"
        },
        aceClubs = {
            value: [1, 11],
            suit: "clubs",
            icon: "ace"
        },
        aceDiamonds = {
            value: [1, 11],
            suit: "diamonds",
            icon: "ace"
        },
        aceHearts = {
            value: [1, 11],
            suit: "hearts",
            icon: "ace"
        },
    ],

    randomPlayerCard () {
        return Math.floor(Math.random() * this.cardsInDeck.length)
    },

    randomDealerCard () {
        return Math.floor(Math.random() * this.cardsInDeck.length)
    },

    shuffle () {
        for (let i = 0; i < 2; i++) {
            let randPlayerNum = this.randomPlayerCard();
            this.playerHand.push(this.cardsInDeck[randPlayerNum]);
            this.cardsInDeck.splice(randPlayerNum, 1);
            let randDealerNum = this.randomDealerCard();
            this.dealerHand.push(this.cardsInDeck[randDealerNum]);
            this.cardsInDeck.splice(randDealerNum, 1);
        };
        console.log(this.playerHand);
        console.log(this.dealerHand);
        console.log(this.cardsInDeck);
    },

    playerHandValue () {
        let value = 0;
        for (let i = 0; i < this.playerHand.length; i++){
            value += this.playerHand[i].value;
        }
        return value;
    },

    dealerHandValue () {
        let value = 0;
        for (let i = 0; i < this.dealerHand.length; i++){
            value += this.dealerHand[i].value;
        }
        return value;
    },


};

const cardImages = [

];

game.shuffle();

