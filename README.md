## Pokemon Blackjack

Pokemon Blackjack is blackjack stylized within the Pokemon universe. It's the cross-section between passions that I grew up with and a game I learned as an adult.

## Rules

The player assumes the role of Ash Ketchum, local Pokemon hero.

The dealer assumes the role of Team Rocket, Pokemon villains.

Players bust with hand values over 21.

Dealer must draw a card if the value of their hand is 16 or less. If it is over 16, they must stand.

Insurance, split, and double down will be available to the player depending on the card conditions.

Split is available on the initial hand only.

## User Flow

1. Player is able to view the amount of Pokecoins in their wallet, the current bet on the hand, and the value of their hand.

2. Choose to add 100 coins to the table or go all-in. Place bet after money is on the table.

3. Team Rocket and the player are dealt 2 cards each. The game will check to see if the player has blackjack. If it's there, the player will receive 2.5x their initial bet.

4. If the dealer is showing an ace, the player will have the option to buy insurance to recoup their bet if the dealer has blackjack. If they do not buy, the game will check to see if the dealer has blackjack. If they do, the player loses the bet.

5. If neither player or dealer has blackjack, the player will be able to hit, stand, or double down. If the player holds two cards of the same image, they will be able to split.

    - If the player hits, double down and split will no longer be available. Game will check if player busts. If they don't, player can continue to hit or stand.

    - If the player doubles down, the current bet will double if they have enough in their wallet. Dealer will then draw cards and a winner comparison will initiate.

    - If the player splits, they will be able to hit, stand, or double down per hand.

    - If the player stands, dealer will draw cards and winner comparison will initiate.

6. Player will be rewarded or lose their bet if they beat the dealer.


## 3rd Party Tech

Bootstrap was used to structure the visual layout of the game, in addition to the structure of the cards.

jQuery is utilized for DOM manipulation.

Google Font Ubunto and Bangers was used.