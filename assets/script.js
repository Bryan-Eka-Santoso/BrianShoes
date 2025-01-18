// Pick a card game
let gameCard = document.getElementById("game-card");
let gameScore = document.getElementById("game-score");
let alertGame = document.getElementById("alert-game");
let cardNumbers = [1, 2, 3];
let scoreInGame = 0;
    
function renderCards() {
        gameCard.innerHTML = '';
    
        cardNumbers = cardNumbers.sort(() => Math.random() - 0.5);
    
        for (let i = 0; i < cardNumbers.length; i++) {
            gameCard.innerHTML += `
                <div class="col-md-4">
                    <div class="card card-game bg-light" onclick="checkCard(${cardNumbers[i]})">
                        <h1> ? </h1>
                    </div>
                </div>
            `;
        }
    }
    
    function checkCard(value) {
        if (value === 1) {
            alertGame.innerHTML = `
            <div class="alert alert-danger" role="alert">
                You Lose!! You picked the bomb. Score: ${scoreInGame}
            </div>
            `;
            scoreInGame = 0;
        } else {
            scoreInGame += 10;
            alertGame.innerHTML = `
            <div class="alert alert-success" role="alert">
                You can pick a card again. Score: ${scoreInGame}
            </div>
            `;
        }
        setTimeout(() => {
            renderCards();
        }, 100);
        }
        renderCards();