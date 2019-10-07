const game = {
    playerHand: [],
    dealerHand: [],
    wallet: 1000,
    currentBet: 0,
    cardsInDeck: [
        twoSpades = {
            value: 2,
            suit: "spades",
            icon: "two",
            sign: "2",
            unicode: "\u2660"
        },
        twoClubs = {
            value: 2,
            suit: "clubs",
            icon: "two",
            sign: "2",
            unicode: "\u2663"
        },
        twoDiamonds = {
            value: 2,
            suit: "diamonds",
            icon: "two",
            sign: "2",
            unicode: "\u2666"
        },
        twoHearts = {
            value: 2,
            suit: "hearts",
            icon: "two",
            sign: "2",
            unicode: "\u2665"
        },
        threeSpades = {
            value: 3,
            suit: "spades",
            icon: "three",
            sign: "3",
            unicode: "\u2660"
        },
        threeClubs = {
            value: 3,
            suit: "clubs",
            icon: "three",
            sign: "3",
            unicode: "\u2663"
        },
        threeDiamonds = {
            value: 3,
            suit: "diamonds",
            icon: "three",
            sign: "3",
            unicode: "\u2666"
        },
        threeHearts = {
            value: 3,
            suit: "hearts",
            icon: "three",
            sign: "3",
            unicode: "\u2665"
        },
        fourSpades = {
            value: 4,
            suit: "spades",
            icon: "four",
            sign: "4",
            unicode: "\u2660"
        },
        fourClubs = {
            value: 4,
            suit: "clubs",
            icon: "four",
            sign: "4",
            unicode: "\u2663"
        },
        fourDiamonds = {
            value: 4,
            suit: "diamonds",
            icon: "four",
            sign: "4",
            unicode: "\u2666"
        },
        fourHearts = {
            value: 4,
            suit: "hearts",
            icon: "four",
            sign: "4",
            unicode: "\u2665"
        },
        fiveSpades = {
            value: 5,
            suit: "spades",
            icon: "five",
            sign: "5",
            unicode: "\u2660"
        },
        fiveClubs = {
            value: 5,
            suit: "clubs",
            icon: "five",
            sign: "5",
            unicode: "\u2663"
        },
        fiveDiamonds = {
            value: 5,
            suit: "diamonds",
            icon: "five",
            sign: "5",
            unicode: "\u2666"
        },
        fiveHearts = {
            value: 5,
            suit: "hearts",
            icon: "five",
            sign: "5",
            unicode: "\u2665"
        },
        sixSpades = {
            value: 6,
            suit: "spades",
            icon: "six",
            sign: "6",
            unicode: "\u2660"
        },
        sixClubs = {
            value: 6,
            suit: "clubs",
            icon: "six",
            sign: "6",
            unicode: "\u2663"
        },
        sixDiamonds = {
            value: 6,
            suit: "diamonds",
            icon: "six",
            sign: "6",
            unicode: "\u2666"
        },
        sixHearts = {
            value: 6,
            suit: "hearts",
            icon: "six",
            sign: "6",
            unicode: "\u2665"
        },
        sevenSpades = {
            value: 7,
            suit: "spades",
            icon: "seven",
            sign: "7",
            unicode: "\u2660"             
        },
        sevenClubs = {
            value: 7,
            suit: "clubs",
            icon: "seven",
            sign: "7",
            unicode: "\u2663"
        },
        sevenDiamonds = {
            value: 7,
            suit: "diamonds",
            icon: "seven",
            sign: "7",
            unicode: "\u2666"             
        },
        sevenHearts = {
            value: 7,
            suit: "hearts",
            icon: "seven",
            sign: "7",
            unicode: "\u2665"
        },
        eightSpades = {
            value: 8,
            suit: "spades",
            icon: "eight",
            sign: "8" ,
            unicode: "\u2660"            
        },
        eightClubs = {
            value: 8,
            suit: "clubs",
            icon: "eight",
            sign: "8",
            unicode: "\u2663"
        },
        eightDiamonds = {
            value: 8,
            suit: "diamonds",
            icon: "eight",
            sign: "8",
            unicode: "\u2666"             
        },
        eightHearts = {
            value: 8,
            suit: "hearts",
            icon: "eight",
            sign: "8",
            unicode: "\u2665"
        },
        nineSpades = {
            value: 9,
            suit: "spades",
            icon: "nine",
            sign: "9" ,
            unicode: "\u2660"           
        },
        nineClubs = {
            value: 9,
            suit: "clubs",
            icon: "nine",
            sign: "9",
            unicode: "\u2663"
        },
        nineDiamonds = {
            value: 9,
            suit: "diamonds",
            icon: "nine",
            sign: "9",
            unicode: "\u2666"            
        },
        nineHearts = {
            value: 9,
            suit: "hearts",
            icon: "nine",
            sign: "9",
            unicode: "\u2665"
        },
        tenSpades = {
            value: 10,
            suit: "spades",
            icon: "ten",
            sign: "10" ,
            unicode: "\u2660"           
        },
        tenClubs = {
            value: 10,
            suit: "clubs",
            icon: "ten",
            sign: "10",
            unicode: "\u2663"
        },
        tenDiamonds = {
            value: 10,
            suit: "diamonds",
            icon: "ten",
            sign: "10",
            unicode: "\u2666"            
        },
        tenHearts = {
            value: 10,
            suit: "hearts",
            icon: "ten",
            sign: "10",
            unicode: "\u2665"
        },
        jackSpades = {
            value: 10,
            suit: "spades",
            icon: "jack",
            sign: "J",
            unicode: "\u2660"
        },
        jackClubs = {
            value: 10,
            suit: "clubs",
            icon: "jack",
            sign: "J",
            unicode: "\u2663"
        },
        jackDiamonds = {
            value: 10,
            suit: "diamonds",
            icon: "jack",
            sign: "J",
            unicode: "\u2666"
        },
        jackHearts = {
            value: 10,
            suit: "hearts",
            icon: "jack",
            sign: "J",
            unicode: "\u2665"
        },
        queenSpades = {
            value: 10,
            suit: "spades",
            icon: "queen",
            sign: "Q",
            unicode: "\u2660"            
        },
        queenClubs = {
            value: 10,
            suit: "clubs",
            icon: "queen",
            sign: "Q",
            unicode: "\u2663"
        },
        queenDiamonds = {
            value: 10,
            suit: "diamonds",
            icon: "queen",
            sign: "Q",
            unicode: "\u2666"            
        },
        queenHearts = {
            value: 10,
            suit: "hearts",
            icon: "queen",
            sign: "Q",
            unicode: "\u2665"
        },
        kingSpades = {
            value: 10,
            suit: "spades",
            icon: "king",
            sign: "K",
            unicode: "\u2660"
        },
        kingClubs = {
            value: 10,
            suit: "clubs",
            icon: "king",
            sign: "K",
            unicode: "\u2663"
        },
        kingDiamonds = {
            value: 10,
            suit: "diamonds",
            icon: "king",
            sign: "K",
            unicode: "\u2666"
        },
        kingHearts = {
            value: 10,
            suit: "hearts",
            icon: "king",
            sign: "K",
            unicode: "\u2665"
        },
        aceSpades = {
            value: [1, 11],
            suit: "spades",
            icon: "ace",
            sign: "A",
            unicode: "\u2660"
        },
        aceClubs = {
            value: [1, 11],
            suit: "clubs",
            icon: "ace",
            sign: "A",
            unicode: "\u2663"
        },
        aceDiamonds = {
            value: [1, 11],
            suit: "diamonds",
            icon: "ace",
            sign: "A",
            unicode: "\u2666"
        },
        aceHearts = {
            value: [1, 11],
            suit: "hearts",
            icon: "ace",
            sign: "A",
            unicode: "\u2665"
        },
    ],
    
    cardImages: [
        caterpie = "images/caterpie.png",
        zubat = "images/zubat.png",
        geodude = "images/geodude.png",
        machop = "images/machop.png",
        gastly = "images/gastly.png",
        chansey = "images/chansey.png",
        alakazam = "images/alakazam.png",
        onix = "images/onix.png",
        gyrados = "images/gyrados.png",
        snorlax = "images/snorlax.png",
        dragonite = "images/dragonite.png",
        mewtwo = "images/mewtwo.png",
        pikachu = "images/pikachu.png",
        // pokecard = "images/pokemon-card-back.png"
    ],

    randomPlayerCard () {
        return Math.floor(Math.random() * this.cardsInDeck.length)
    },

    randomDealerCard () {
        return Math.floor(Math.random() * this.cardsInDeck.length)
    },

    deal () {
        for (let i = 0; i < 2; i++) {
            this.dealPlayerCard();
            this.playerCardReveal();
            $(".player-card-back").attr("class", "card");
        };
        this.dealDealerCard();
        this.dealerCardReveal();
        $(".dealer-card-back").eq(0).attr("class", "card");
        $(".card .card-img-top").css({"width":"118px", "height":"118px"});
        this.dealDealerCard();
        console.log(this.playerHand);
        console.log(this.dealerHand);
        console.log(this.cardsInDeck);
    },

    reset () {
        this.beforePlaceBet();
        this.currentBet = 0;
        this.updateStatus();

    },

    dealPlayerCard() {
        let randPlayerNum = this.randomPlayerCard();
        this.playerHand.push(this.cardsInDeck[randPlayerNum]);
        this.cardsInDeck.splice(randPlayerNum, 1);
    },

    playerCardReveal() {
        $(".player-text").eq(this.playerHand.length-1).text(`${this.playerHand[this.playerHand.length-1].sign}${this.playerHand[this.playerHand.length-1].unicode}`);
        if(this.playerHand[this.playerHand.length-1].suit==="diamonds" || this.playerHand[this.playerHand.length-1].suit==="hearts"){
            $(".player-text").eq(this.playerHand.length-1).css("color", "red");
        };
        if(this.playerHand[this.playerHand.length-1].icon==="two"){
            $(".player-card-img").eq(this.playerHand.length-1).attr("src", caterpie)
        }
        else if(this.playerHand[this.playerHand.length-1].icon==="three"){
            $(".player-card-img").eq(this.playerHand.length-1).attr("src", zubat)
        }
        else if(this.playerHand[this.playerHand.length-1].icon==="four"){
            $(".player-card-img").eq(this.playerHand.length-1).attr("src", geodude)
        }
        else if(this.playerHand[this.playerHand.length-1].icon==="five"){
            $(".player-card-img").eq(this.playerHand.length-1).attr("src", machop)
        }
        else if(this.playerHand[this.playerHand.length-1].icon==="six"){
            $(".player-card-img").eq(this.playerHand.length-1).attr("src", gastly)
        }
        else if(this.playerHand[this.playerHand.length-1].icon==="seven"){
            $(".player-card-img").eq(this.playerHand.length-1).attr("src", chansey)
        }
        else if(this.playerHand[this.playerHand.length-1].icon==="eight"){
            $(".player-card-img").eq(this.playerHand.length-1).attr("src", alakazam)
        }
        else if(this.playerHand[this.playerHand.length-1].icon==="nine"){
            $(".player-card-img").eq(this.playerHand.length-1).attr("src", onix)
        }
        else if(this.playerHand[this.playerHand.length-1].icon==="ten"){
            $(".player-card-img").eq(this.playerHand.length-1).attr("src", gyrados)
        }
        else if(this.playerHand[this.playerHand.length-1].icon==="jack"){
            $(".player-card-img").eq(this.playerHand.length-1).attr("src", snorlax)
        }
        else if(this.playerHand[this.playerHand.length-1].icon==="queen"){
            $(".player-card-img").eq(this.playerHand.length-1).attr("src", dragonite)
        }
        else if(this.playerHand[this.playerHand.length-1].icon==="king"){
            $(".player-card-img").eq(this.playerHand.length-1).attr("src", mewtwo)
        }
        else if(this.playerHand[this.playerHand.length-1].icon==="ace"){
            $(".player-card-img").eq(this.playerHand.length-1).attr("src", pikachu)
        };
    },

    dealDealerCard() {
        let randDealerNum = this.randomDealerCard();
        this.dealerHand.push(this.cardsInDeck[randDealerNum]);
        this.cardsInDeck.splice(randDealerNum, 1);
    },

    dealerCardReveal() {
        $(".dealer-text").eq(this.dealerHand.length-1).text(`${this.dealerHand[this.dealerHand.length-1].sign}${this.dealerHand[this.dealerHand.length-1].unicode}`);
        if(this.dealerHand[this.dealerHand.length-1].suit==="diamonds" || this.dealerHand[this.dealerHand.length-1].suit==="hearts"){
            $(".dealer-text").eq(this.dealerHand.length-1).css("color", "red");
        };
        if(this.dealerHand[this.dealerHand.length-1].icon==="two"){
            $(".dealer-card-img").eq(this.dealerHand.length-1).attr("src", caterpie)
        }
        else if(this.dealerHand[this.dealerHand.length-1].icon==="three"){
            $(".dealer-card-img").eq(this.dealerHand.length-1).attr("src", zubat)
        }
        else if(this.dealerHand[this.dealerHand.length-1].icon==="four"){
            $(".dealer-card-img").eq(this.dealerHand.length-1).attr("src", geodude)
        }
        else if(this.dealerHand[this.dealerHand.length-1].icon==="five"){
            $(".dealer-card-img").eq(this.dealerHand.length-1).attr("src", machop)
        }
        else if(this.dealerHand[this.dealerHand.length-1].icon==="six"){
            $(".dealer-card-img").eq(this.dealerHand.length-1).attr("src", gastly)
        }
        else if(this.dealerHand[this.dealerHand.length-1].icon==="seven"){
            $(".dealer-card-img").eq(this.dealerHand.length-1).attr("src", chansey)
        }
        else if(this.dealerHand[this.dealerHand.length-1].icon==="eight"){
            $(".dealer-card-img").eq(this.dealerHand.length-1).attr("src", alakazam)
        }
        else if(this.dealerHand[this.dealerHand.length-1].icon==="nine"){
            $(".dealer-card-img").eq(this.dealerHand.length-1).attr("src", onix)
        }
        else if(this.dealerHand[this.dealerHand.length-1].icon==="ten"){
            $(".dealer-card-img").eq(this.dealerHand.length-1).attr("src", gyrados)
        }
        else if(this.dealerHand[this.dealerHand.length-1].icon==="jack"){
            $(".dealer-card-img").eq(this.dealerHand.length-1).attr("src", snorlax)
        }
        else if(this.dealerHand[this.dealerHand.length-1].icon==="queen"){
            $(".dealer-card-img").eq(this.dealerHand.length-1).attr("src", dragonite)
        }
        else if(this.dealerHand[this.dealerHand.length-1].icon==="king"){
            $(".dealer-card-img").eq(this.dealerHand.length-1).attr("src", mewtwo)
        }
        else if(this.dealerHand[this.dealerHand.length-1].icon==="ace"){
            $(".dealer-card-img").eq(this.dealerHand.length-1).attr("src", pikachu)
        };
    },

    playerHandValue () {
        let value = 0;
        for (let i = 0; i < this.playerHand.length; i++){
            if(this.playerHand[i].icon === "ace"){
                if(value > 21 || value + 11 > 21){
                    value += this.playerHand[i].value[0];
                }
                else{
                    value += this.playerHand[i].value[1];
                }
            }
            else {
                value += this.playerHand[i].value;
            }
        }
        return value;
    },

    dealerHandValue () {
        let value = 0;
        for (let i = 0; i < this.dealerHand.length; i++){
            if(this.dealerHand[i].icon === "ace"){
                if(value + 11 > 21){
                    value += this.dealerHand[i].value[0];
                }
                else{
                    value += this.dealerHand[i].value[1];
                }
            }
            else if(i > 0 && this.dealerHand[i-1].icon === "ace" && value + this.dealerHand[i] > 21){
                value += this.dealerHand[i].value;
                value -= 10;
            }
            else {
                value += this.dealerHand[i].value;
            }
        }
        return value;
    },

    checkDealerBlackjack () {
        if(this.dealerHandValue() === 21){
            this.dealerCardReveal();
            $(".dealer-card-back").eq(0).attr("class", "card");
            $(".card .card-img-top").css({"width":"118px", "height":"118px"});
            console.log(`Dealer has blackjack!`);
        }
        else {
            console.log(`Dealer does not have blackjack.`)
        }
    },

    checkPlayerBlackjack () {

        if(this.playerHandValue() === 21){
            console.log(`You have blackjack!`)
        }
        else {
            console.log(`You do not have blackjack.`)
        }
    },

    playerHit () {
        this.dealPlayerCard();
        $(".card").eq(game.dealerHand.length).clone().attr("id", `player-card${this.playerHand.length}`).appendTo("#player-row");
        this.playerCardReveal();
    },

    playerStand () {
        this.checkDealer16();
    },

    checkIfPlayerBust () {
        if(this.playerHandValue() > 21) {
            console.log(`Bust!`);
            $("#modalBust").modal();
        }
    },

    checkDealer16 () {
        $(".dealer-card-back").eq(0).attr("class", "card");
        game.dealerCardReveal();
        $(".card .card-img-top").css({"width":"118px", "height":"118px"});
        while (this.dealerHandValue() < 17) {
            this.dealerHit();
            $(".dealer-card-back").eq(0).attr("class", "card");
        };
    },

    dealerHit(){
        this.dealDealerCard();
        $(".card").eq(0).clone().attr("id", `dealer-card${this.dealerHand.length}`).appendTo("#dealer-row");
        this.dealerCardReveal();
    },

    checkPlayerWinner () {
        if(this.playerHandValue() > this.dealerHandValue() && this.playerHandValue() <= 21) {
            console.log(`You win!`)
        }
        else if (this.playerHandValue() < this.dealerHandValue() && this.dealerHandValue() <= 21){
            console.log(`Dealer wins!`)
        }
    },

    betButtonSetup () {
        const $betButton = $(".btn-primary").clone().attr("id", "bet").text("Place Bet");
        $("#bet-button-row").append($betButton);
        const $addButton = $("#bet").clone().attr("id", "add100").text("+100 Current Bet");
        $("#bet-button-row").append($addButton);
        const $allInButton = $("#add100").clone().attr("id", "allIn").text("All In");
        $("#bet-button-row").append($allInButton);        const $hitButton = $("#allIn").clone().attr("id", "hit").text("Hit");
        $("#gameplay-button-row").append($hitButton);
        const $standButton = $("#hit").clone().attr("id", "stand").text("Stand");
        $("#gameplay-button-row").append($standButton);
        const $splitButton = $("#stand").clone().attr("id", "split").text("Split");
        $("#gameplay-button-row").append($splitButton);
        const $doubleDownButton = $("#split").clone().attr("id", "doubleDown").text("Double Down");
        $("#gameplay-button-row").append($doubleDownButton);
        $("#hit").prop("disabled", true);
        $("#stand").prop("disabled", true);
        $("#split").prop("disabled", true);
        $("#doubleDown").prop("disabled", true);
    },

    add100() {
        $("#add100").on("click", () => {
            if(game.wallet >= 100) {
                game.currentBet += 100;
                game.wallet -= 100;
                game.updateStatus();
            }
        });
    },

    allIn() {
        $("#allIn").on("click", () => {
            if(game.wallet > 0) {
                game.currentBet += game.wallet;
                game.wallet -= game.wallet;
                game.updateStatus();
            }
        });
    },
    
    placeBet() {
        $("#bet").on("click", () => {
            if (game.currentBet > 0) {
                this.deal();
                this.checkDealerBlackjack();
                this.checkPlayerBlackjack();
                this.afterPlaceBet();
            }
        });
    },

    hit() {
        $("#hit").on("click", () => {
            this.playerHit();
            this.checkIfPlayerBust();
        });
    },

    // stand(){
    //     $("#stand").on("click", () => {
    //         this.playerHit();
    //     });
    // },

    beforePlaceBet () {
        $("#add100").prop("disabled", false);
        $("#allIn").prop("disabled", false);
        $("#bet").prop("disabled", false);
        $("#hit").prop("disabled", true);
        $("#stand").prop("disabled", true);
    },
    
    afterPlaceBet () {
        $("#add100").prop("disabled", true);
        $("#allIn").prop("disabled", true);
        $("#bet").prop("disabled", true);
        $("#hit").prop("disabled", false);
        $("#stand").prop("disabled", false);
    },

    updateStatus () {
        $("#wallet").text(`Wallet: ${this.wallet} Pokecoins`);
        $("#current-bet").text(`Current Bet: ${this.currentBet} Pokecoins`);
    }

};


$("#start").on("click", () => {
    if(game.cardsInDeck.length === 52){
        game.betButtonSetup();
        $("#start").remove();
    }
    game.add100()
    game.allIn()
    game.placeBet();
    game.hit();
});



// game.deal();
// game.dealerCardReveal();
// $(".dealer-card-back").eq(0).attr("class", "card");

