const game = {
    playerHand: [],
    dealerHand: [],
    splitHand: [],
    wallet: 1000,
    currentBet: 0,
    splitBet:0,
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
        pokecard = "images/pokemon-card-back.png"
    ],

    randomPlayerCard () {
        return Math.floor(Math.random() * this.cardsInDeck.length)
    },

    randomSplitCard () {
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
        $("#player-hand-value").text(`Hand Value: ${this.playerHandValue()}`)
        console.log(this.playerHand);
        console.log(this.dealerHand);
        console.log(this.cardsInDeck);
    },

    reset () {
        this.beforePlaceBet();
        this.currentBet = 0;
        this.splitBet = 0;
        this.updateStatus();
        $("#split-status-row").remove();
        $("#split-row").remove();
        $("#split-button-row").remove();
        $(".dealer-card-back").eq(0).attr("class", "card");
        for (let i = this.playerHand.length - 1; i >= 0; i--){
            this.cardsInDeck.push(this.playerHand[i]);
            this.playerHand.splice(i, 1);
        };
        for (let i = this.splitHand.length - 1; i >= 0; i--){
            this.cardsInDeck.push(this.splitHand[i]);
            this.splitHand.splice(i, 1);
        };
        for (let i = this.dealerHand.length - 1; i >= 0; i--){
            this.cardsInDeck.push(this.dealerHand[i]);
            this.dealerHand.splice(i, 1);
        };
        $(".player-text").text(``).css("color", "black");
        $(".dealer-text").text(``).css("color", "black");
        $(".card .card-img-top").css({"width":"129.8px", "height":"180px"});
        $(".player-card-img").attr("src", pokecard);
        $(".dealer-card-img").attr("src", pokecard);
        for(let i = $("#player-row .card").length - 1; i > 1; i--) {
            $("#player-row .card").eq(i).remove();
        };
        for(let i = $("#dealer-row .card").length - 1; i > 1; i--) {
            $("#dealer-row .card").eq(i).remove();
        };
        $("#dealer-row .card").attr("class", "dealer-card-back");
        $("#player-row .card").attr("class", "player-card-back");
        $("#nextRound").prop("disabled", true);
        $("#bet").prop("disabled", true);

    },

    dealPlayerCard() {
        let randPlayerNum = this.randomPlayerCard();
        this.playerHand.push(this.cardsInDeck[randPlayerNum]);
        this.cardsInDeck.splice(randPlayerNum, 1);
    },

    playerCardReveal() {
                // $(".player-text").eq(this.playerHand.length-1).addClass(`${this.playerHand[this.playerHand.length-1].suit} ${this.playerHand[this.playerHand.length-1].icon}`)

        $(".player-text").eq(this.playerHand.length-1).text(`${this.playerHand[this.playerHand.length-1].sign}${this.playerHand[this.playerHand.length-1].unicode}`);
        if(this.playerHand[this.playerHand.length-1].suit==="diamonds" || this.playerHand[this.playerHand.length-1].suit==="hearts"){
            $(".player-text").eq(this.playerHand.length-1).css("color", "red");
        }
        else{
            $(".player-text").eq(this.playerHand.length-1).css("color", "black");
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
        }
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
        }
        else {
            $(".dealer-text").eq(this.dealerHand.length-1).css("color", "black");
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
        let acePlayerArray = [];
        for (let i = 0; i < this.playerHand.length; i++){
            if(this.playerHand[i].icon === "ace"){
                if(value > 21 || value + 11 > 21){
                    value += this.playerHand[i].value[0];
                }
                else{
                    value += this.playerHand[i].value[1];
                    acePlayerArray.push(this.playerHand[i].value[1]);
                }
            }
            else {
                value += this.playerHand[i].value;
            }
        }
        while (value > 21 && acePlayerArray.length > 0){
            value -= 10;
            acePlayerArray.splice(0, 1);
        }
        return value;
    },

    dealerHandValue () {
        let value = 0;
        let aceDealerArray = [];
        for (let i = 0; i < this.dealerHand.length; i++){
            if(this.dealerHand[i].icon === "ace"){
                if(value + 11 > 21){
                    value += this.dealerHand[i].value[0];
                }
                else{
                    value += this.dealerHand[i].value[1];
                    aceDealerArray.push(this.dealerHand[i].value[1]);
                }
            }
            else {
                value += this.dealerHand[i].value;
            }
        }
        while (value > 21 && aceDealerArray.length > 0){
            value -= 10;
            aceDealerArray.splice(0, 1);
        }
        return value;
    },

    checkDealerBlackjack () {
        if(this.dealerHandValue() === 21){
            this.dealerCardReveal();
            $(".dealer-card-back").eq(0).attr("class", "card");
            $(".card .card-img-top").css({"width":"118px", "height":"118px"});
            console.log(`Dealer has blackjack!`);
            $("#modalDealerBlackjack").modal();
            $("#nextRound").prop("disabled", false);
            $("#hit").prop("disabled", true);
            $("#stand").prop("disabled", true);
            $("#doubleDown").prop("disabled", true);
            $("#insurance").prop("disabled", true);
            $("#no-insurance").prop("disabled", true);
        }
        else {
            console.log(`Dealer does not have blackjack.`)
        }
    },

    checkPlayerBlackjack () {

        if(this.playerHandValue() === 21){
            console.log(`You have blackjack!`);
            $("#modalPlayerBlackjack").modal();
            this.wallet += (this.currentBet * 2.5);
            $("#nextRound").prop("disabled", false);
            $("#hit").prop("disabled", true);
            $("#stand").prop("disabled", true);
            $("#doubleDown").prop("disabled", true);
            $("#insurance").prop("disabled", true);
            $("#no-insurance").prop("disabled", true);
        }
        else {
            console.log(`You do not have blackjack.`)
        }
    },

    playerHit () {
        if(this.splitHand.length > 0) {
            this.dealPlayerCard();
            $("#player-row .card").eq(0).clone().attr("id", `player-card${this.playerHand.length}`).appendTo("#player-row");
            this.playerCardReveal();
            $("#player-hand-value").text(`Hand Value: ${this.playerHandValue()}`);
        }
        else{
            this.dealPlayerCard();
            $(".card").eq(game.dealerHand.length).clone().attr("id", `player-card${this.playerHand.length}`).appendTo("#player-row");
            this.playerCardReveal();
            $("#player-hand-value").text(`Hand Value: ${this.playerHandValue()}`);
        }
    },

    checkIfPlayerBust () {
        if (this.splitHand.length > 0){
            if(this.playerHandValue () > 21){
                $("#modalBust").modal();
                $("#hit").prop("disabled", true);
                $("#stand").prop("disabled", true);
                $("#doubleDown").prop("disabled", true);
                $("#insurance").prop("disabled", true);
                $("#splitHit").prop("disabled", false);
                $("#splitStand").prop("disabled", false);
                $("#splitDoubleDown").prop("disabled", false);
            }
        }
        else if(this.playerHandValue() > 21) {
            console.log(`Bust!`);
            $("#modalBust").modal();
            $("#hit").prop("disabled", true);
            $("#stand").prop("disabled", true);
            $("#nextRound").prop("disabled", false);
            $("#doubleDown").prop("disabled", true);
            $("#insurance").prop("disabled", true);
        }
    },

    checkDealer16 () {
        $(".dealer-card-back").eq(0).attr("class", "card");
        game.dealerCardReveal();
        $(".card .card-img-top").css({"width":"118px", "height":"118px"});
        $("#dealer-hand-value").text(`Hand Value: ${this.dealerHandValue()}`);
        while (this.dealerHandValue() < 17) {
            this.dealerHit();
            $(".dealer-card-back").eq(0).attr("class", "card");
            $("#dealer-hand-value").text(`Hand Value: ${this.dealerHandValue()}`)
        };
    },

    dealerHit(){
        this.dealDealerCard();
        $(".card").eq(0).clone().attr("id", `dealer-card${this.dealerHand.length}`).appendTo("#dealer-row");
        this.dealerCardReveal();
        $("#dealer-hand-value").text(`Hand Value: ${this.dealerHandValue()}`)
    },

    checkPlayerWinner () {
        if (this.dealerHandValue() > 21) {
            console.log(`You win!`);
            $("#modalWin").modal();
            this.wallet += (this.currentBet * 2);
            $("#nextRound").prop("disabled", false);
        }
        else if(this.playerHandValue() > this.dealerHandValue() && this.playerHandValue() <= 21) {
            console.log(`You win!`);
            $("#modalWin").modal();
            this.wallet += (this.currentBet * 2);
            $("#nextRound").prop("disabled", false);
        }
        else if (this.playerHandValue() === this.dealerHandValue() && this.dealerHandValue() <= 21 && this.playerHandValue() <= 21){
            console.log(`It's a draw!`)
            $("#modalDraw").modal();
            this.wallet += this.currentBet;
            $("#nextRound").prop("disabled", false);
        }
        else if (this.playerHandValue() < this.dealerHandValue() && this.dealerHandValue() <= 21){
            console.log(`Dealer wins!`)
            $("#modalLost").modal();
            $("#nextRound").prop("disabled", false);
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
        const $doubleDownButton = $("#stand").clone().attr("id", "doubleDown").text("Double Down");
        $("#gameplay-button-row").append($doubleDownButton);
        const $nextRoundButton = $("#doubleDown").clone().attr("id", "nextRound").text("Next Round");
        $("#bet-button-row").append($nextRoundButton);
        const $insurance = $("#nextRound").clone().attr("id", "insurance").text("Insurance");
        $("#gameplay-button-row").append($insurance);
        const $resetPage = $("#insurance").clone().attr("id", "reset").text("Reset Game");
        $("#bet-button-row").append($resetPage);
        const $noInsurance = $("#reset").clone().attr("id", "no-insurance").text("No Insurance");
        $("#gameplay-button-row").append($noInsurance);
        const $music = $("#no-insurance").clone().attr("id", "music").text("Toggle Music");
        $("#bet-button-row").append($music);
        const $splitButton = $("#music").clone().attr("id", "split").text("Split");
        $("#gameplay-button-row").append($splitButton);
        $("#hit").prop("disabled", true);
        $("#stand").prop("disabled", true);
        // $("#split").prop("disabled", true);
        $("#doubleDown").prop("disabled", true);
        $("#nextRound").prop("disabled", true);
        $("#bet").prop("disabled", true);
        $("#insurance").prop("disabled", true);
        $("#reset").prop("disabled", true);
        $("#no-insurance").prop("disabled", true);

    },

    add100() {
        $("#add100").on("click", () => {
            if(this.wallet >= 100) {
                this.currentBet += 100;
                this.wallet -= 100;
                this.updateStatus();
                $("#bet").prop("disabled", false);
            }
        });
    },

    allIn() {
        $("#allIn").on("click", () => {
            if(this.wallet > 0) {
                this.currentBet += this.wallet;
                this.wallet -= this.wallet;
                this.updateStatus();
                $("#add100").prop("disabled", true);
                $("#allIn").prop("disabled", true);
                $("#bet").prop("disabled", false);
            }
        });
    },
    
    placeBet() {
        $("#bet").on("click", () => {
            if (this.currentBet > 0) {
                this.deal();
                this.afterPlaceBet();
                this.checkPlayerBlackjack();
                if(this.dealerHand[0].icon !== "ace"){
                    this.checkDealerBlackjack();
                }
            }
        });
    },

    hit() {
        $("#hit").on("click", () => {
            this.playerHit();
            $("#doubleDown").prop("disabled", true);
            $("#insurance").prop("disabled", true);
            this.checkIfPlayerBust();
        });
    },

    stand(){
        $("#stand").on("click", () => {
            $("#hit").prop("disabled", true);
            $("#stand").prop("disabled", true);
            $("#doubleDown").prop("disabled", true);
            $("#insurance").prop("disabled", true);
            this.checkDealer16();
            this.checkPlayerWinner();
        });
    },

    doubleDown(){
        $("#doubleDown").on("click", () => {
            this.wallet -= this.currentBet;
            this.currentBet += this.currentBet;
            this.updateStatus();
            $("#hit").prop("disabled", true);
            $("#stand").prop("disabled", true);
            $("#doubleDown").prop("disabled", true);
            this.playerHit();
            this.checkIfPlayerBust();
            if(this.playerHandValue() <= 21){
                this.checkDealer16();
                this.checkPlayerWinner();
            }
        });
    },

    insurance () {
        $("#insurance").on("click", () => {
            const insuranceBet = this.currentBet / 2
            this.wallet -= (insuranceBet);
            this.currentBet += (insuranceBet);
            this.updateStatus();
            $("#insurance").prop("disabled", true);
            this.checkDealerBlackjack();
            if(this.dealerHandValue() !== 21){
                this.currentBet -= insuranceBet;
                this.updateStatus();
                $("#modalNoDealerBlackjack").modal();
                $("#insurance").prop("disabled", true);
                $("#no-insurance").prop("disabled", true);
                $("#hit").prop("disabled", false);
                $("#stand").prop("disabled", false);
                $("#doubleDown").prop("disabled", false);
            }
        });
    },

    noInsurance () {
        $("#no-insurance").on("click", () => {
            $("#insurance").prop("disabled", true);
            $("#no-insurance").prop("disabled", true);
            $("#hit").prop("disabled", false);
            $("#stand").prop("disabled", false);
            $("#doubleDown").prop("disabled", false);
            this.checkDealerBlackjack();
        });
    },

    split(){
        $("#split").on("click", () => {
            $("#split").prop("disabled", true);
            this.wallet -= this.currentBet;
            this.splitBet += this.currentBet;
            this.updateStatus();
            this.splitHand.push(this.playerHand[1]);
            this.playerHand.splice(1, 1);
            $("#player-row").clone().attr("id", "split-row").appendTo($(".container-fluid"));
            const $splitRow = $("#split-row")
            $splitRow.prev().insertAfter($splitRow);
            $splitRow.prev().insertAfter($splitRow);
            $("#player-row #player-card2").remove();
            $("#split-row #player-card1").remove();
            $("#player-hand-value").text(`Hand Value: ${this.playerHand[0].value}`);

            $("#player-status-row").clone().attr("id", "split-status-row").appendTo($(".container-fluid"));
            $(".player-status").eq(3).remove();
            const $splitStatusRow = $("#split-status-row");
            $("#split-status-row #player-hand-value").attr({class:"split-status", id:"split-hand-value"});
            $("#split-status-row #current-bet").attr({class:"split-status", id:"split-current-bet"});
            $("#split-row .card").attr("id", "split-card");
            $(".player-text").eq(1).attr("class", "card-text split-text")

            $splitStatusRow.prev().insertAfter($splitStatusRow);
            $splitStatusRow.prev().insertAfter($splitStatusRow);
            $splitStatusRow.prev().insertAfter($splitStatusRow);
            if(this.splitHand[0].icon === "ace"){
                $("#split-hand-value").text(`Hand Value: 11`);
            }
            else{
                $("#split-hand-value").text(`Hand Value: ${this.splitHand[0].value}`);
            }

            $("#gameplay-button-row").clone().attr("id", "split-button-row").appendTo($(".container-fluid"));
            $("#split-button-row").children().remove();
            const $splitHit = $("#split").clone().attr("id", "splitHit").text("Split Hit");
            $("#split-button-row").append($splitHit);
            const $splitStand = $("#splitHit").clone().attr("id", "splitStand").text("Split Stand");
            $("#split-button-row").append($splitStand);
            const $splitDoubleDown = $("#splitStand").clone().attr("id", "splitDoubleDown").text("Split Double Down");
            $("#split-button-row").append($splitDoubleDown);
            $("#splitHit").prop("disabled", true);
            $("#splitStand").prop("disabled", true);
            $("#splitDoubleDown").prop("disabled", true);
            this.splitHitButton();
            this.splitStand();
            this.splitDoubleDown();
            });
    },

    dealSplitCard() {
        let randSplitNum = this.randomSplitCard();
        this.splitHand.push(this.cardsInDeck[randSplitNum]);
        this.cardsInDeck.splice(randSplitNum, 1);
    },

    splitHit () {
        this.dealSplitCard();
        $("#split-row .card").eq(0).clone().attr("id", `split-card${this.splitHand.length}`).appendTo("#split-row");
        this.splitCardReveal();
        $("#split-hand-value").text(`Hand Value: ${this.splitHandValue()}`);
    },

    splitCardReveal() {
        $(".split-text").eq(this.splitHand.length-1).text(`${this.splitHand[this.splitHand.length-1].sign}${this.splitHand[this.splitHand.length-1].unicode}`);
        if(this.splitHand[this.splitHand.length-1].suit==="diamonds" || this.splitHand[this.splitHand.length-1].suit==="hearts"){
            $(".split-text").eq(this.splitHand.length-1).css("color", "red");
        }
        else{
            $(".split-text").eq(this.splitHand.length-1).css("color", "black");
        };
        if(this.splitHand[this.splitHand.length-1].icon==="two"){
            $("#split-row .player-card-img").eq(this.splitHand.length-1).attr("src", caterpie)
        }
        else if(this.splitHand[this.splitHand.length-1].icon==="three"){
            $("#split-row .player-card-img").eq(this.splitHand.length-1).attr("src", zubat)
        }
        else if(this.splitHand[this.splitHand.length-1].icon==="four"){
            $("#split-row .player-card-img").eq(this.splitHand.length-1).attr("src", geodude)
        }
        else if(this.splitHand[this.splitHand.length-1].icon==="five"){
            $("#split-row .player-card-img").eq(this.splitHand.length-1).attr("src", machop)
        }
        else if(this.splitHand[this.splitHand.length-1].icon==="six"){
            $("#split-row .player-card-img").eq(this.splitHand.length-1).attr("src", gastly)
        }
        else if(this.splitHand[this.splitHand.length-1].icon==="seven"){
            $("#split-row .player-card-img").eq(this.splitHand.length-1).attr("src", chansey)
        }
        else if(this.splitHand[this.splitHand.length-1].icon==="eight"){
            $("#split-row .player-card-img").eq(this.splitHand.length-1).attr("src", alakazam)
        }
        else if(this.splitHand[this.splitHand.length-1].icon==="nine"){
            $("#split-row .player-card-img").eq(this.splitHand.length-1).attr("src", onix)
        }
        else if(this.splitHand[this.splitHand.length-1].icon==="ten"){
            $("#split-row .player-card-img").eq(this.splitHand.length-1).attr("src", gyrados)
        }
        else if(this.splitHand[this.splitHand.length-1].icon==="jack"){
            $("#split-row .player-card-img").eq(this.splitHand.length-1).attr("src", snorlax)
        }
        else if(this.splitHand[this.splitHand.length-1].icon==="queen"){
            $("#split-row .player-card-img").eq(this.splitHand.length-1).attr("src", dragonite)
        }
        else if(this.splitHand[this.splitHand.length-1].icon==="king"){
            $("#split-row .player-card-img").eq(this.splitHand.length-1).attr("src", mewtwo)
        }
        else if(this.splitHand[this.splitHand.length-1].icon==="ace"){
            $("#split-row .player-card-img").eq(this.splitHand.length-1).attr("src", pikachu)
        };
    },

    splitHandValue () {
        let value = 0;
        let aceSplitArray = [];
        for (let i = 0; i < this.splitHand.length; i++){
            if(this.splitHand[i].icon === "ace"){
                if(value > 21 || value + 11 > 21){
                    value += this.splitHand[i].value[0];
                }
                else{
                    value += this.splitHand[i].value[1];
                    aceSplitArray.push(this.splitHand[i].value[1]);
                }
            }
            else {
                value += this.splitHand[i].value;
            }
        }
        while (value > 21 && aceSplitArray.length > 0){
            value -= 10;
            aceSplitArray.splice(0, 1);
        }
        return value;
    },

    checkIfSplitBust () {
         if(this.splitHandValue() > 21) {
            console.log(`Bust!`);
            $("#modalBust").modal();
            $("#splitHit").prop("disabled", true);
            $("#splitStand").prop("disabled", true);
            $("#splitDoubleDown").prop("disabled", true);
        };
        if(this.splitHandValue() > 21 && this.playerHandValue() > 21){
            $("#nextRound").prop("disabled", false);
        }
    },

    splitHitButton() {
        $("#splitHit").on("click", () => {
            this.splitHit();
            this.checkIfSplitBust();
        });
    },

    splitStand(){
        $("#splitStand").on("click", () => {
            $("#splitHit").prop("disabled", true);
            $("#splitStand").prop("disabled", true);
            $("#splitDoubleDown").prop("disabled", true);
            // this.checkDealer16();
            // this.checkPlayerWinner();
        });
    },

    splitDoubleDown(){
        $("#splitDoubleDown").on("click", () => {
            this.wallet -= this.splitBet;
            this.splitBet += this.splitBet;
            this.updateSplitStatus();
            $("#splitHit").prop("disabled", true);
            $("#splitStand").prop("disabled", true);
            $("#splitDoubleDown").prop("disabled", true);
            this.splitHit();
            this.checkIfSplitBust();
            if(this.splitHandValue() <= 21){
                this.checkDealer16();
                this.checkPlayerWinner();
            }
        });
    },

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
        if(this.wallet >= this.currentBet){
            $("#doubleDown").prop("disabled", false);
        }
        if(this.dealerHand[0].icon === "ace" && this.wallet >= this.currentBet / 2){
            $("#insurance").prop("disabled", false);
            $("#no-insurance").prop("disabled", false);
            $("#hit").prop("disabled", true);
            $("#stand").prop("disabled", true);
            $("#doubleDown").prop("disabled", true);
        }
        else if(this.dealerHand[0].icon === "ace" && this.wallet < this.currentBet / 2){
            this.checkDealerBlackjack();
        }

    },

    updateStatus () {
        $("#wallet").text(`Wallet: ${this.wallet} Pokecoins`);
        $("#current-bet").text(`Current Bet: ${this.currentBet} Pokecoins`);
    },

    updateSplitStatus () {
        $("#wallet").text(`Wallet: ${this.wallet} Pokecoins`);
        $("#split-current-bet").text(`Current Bet: ${this.splitBet} Pokecoins`);
    },

    nextRound() {
        $("#nextRound").on("click", () => {
            if(this.wallet <= 0){
                $("#nextRound").prop("disabled", true);
                $("#reset").prop("disabled", false);
            }
            else{
                this.reset();
                $("#dealer-hand-value").text(`Hand Value: 0`);
                $("#player-hand-value").text(`Hand Value: 0`);
            }
        });
    },

    resetPage () {
        $("#reset").on("click", () => {
            location.reload();
        })
    },

    musicToggle () {
        $("#music").on("click", () => {
            audio.loop = true;
            if (audio.paused === false) {
                audio.pause();
            }
            else {
                audio.play();
            }
        })
    }
};

const audio = new Audio("sound/pokemon-theme-song-instrumental.mp3");

$("#start").on("click", () => {
    if(game.cardsInDeck.length === 52){
        game.betButtonSetup();
        $("#start").remove();


        // const audio = new Audio("sound/pokemon-theme-song-instrumental.mp3");
        // audio.play();
    }
    game.placeBet();
    game.add100();
    game.allIn();
    game.hit();
    game.stand();
    game.nextRound();
    game.doubleDown();
    game.insurance();
    game.resetPage();
    game.noInsurance();
    game.musicToggle();
    game.split();
});
