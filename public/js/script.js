// PLAYER
const playerRock = document.getElementById("player-rock");
const playerPaper = document.getElementById("player-paper");
const playerScissors = document.getElementById("player-scissors");
const itemRock = document.getElementById("item-rock");
const itemPaper = document.getElementById("item-paper");
const itemScissors = document.getElementById("item-scissors");
// RESULT
const onlyVs = document.querySelector(".only-vs");
const resultText = document.querySelector(".result-text");

// COMPUTER
const itemRockComp = document.getElementById("item-rock-comp");
const itemPaperComp = document.getElementById("item-paper-comp");
const itemScissorsComp = document.getElementById("item-scissors-comp");

// PLAY AGAIM
const refreshPage = document.getElementById("refresh-page");

class Player {
  rock() {
    playerRock.addEventListener("click", () => {
      console.log(playerRock.id)
      const hands = [compRock, compPaper, compScissors];
      const hand = hands[Math.floor(Math.random()*hands.length)].id;

      itemRock.style.background = "#C4C4C4";

      function set(durationOne, durationTwo, durationThree) {
        setTimeout(() => {
            itemRockComp.style.background = "#C4C4C4";
          setTimeout(() => {
            itemRockComp.style.background = "#C4C4C4";
          }, 300)
        }, durationOne)
        setTimeout(() => {
          itemPaperComp.style.background = "#C4C4C4";
          setTimeout(() => {
            itemPaperComp.style.background = "";
          }, 300)
        }, durationTwo)
        setTimeout(() => {
          itemScissorsComp.style.background = "#C4C4C4";
          setTimeout(() => {
            itemScissorsComp.style.background = "";
          }, 300)
        }, durationThree)
      }

      for(let i = 0; i < 10; i++) {
        if(i === 1) {
          set(300, 600, 900);
        } else if(i === 2) {
          set(1200, 1500, 1800);
        } else if(i === 3) {
          set(2100, 2400, 2700)
         } else if(i === 4) {
          set(3000, 3300, 3600)
         }
      }

        setTimeout(() => {
          itemRockComp.style.background = "#C4C4C4";
          setTimeout(() => {
            if(hand === "compRock") {
              onlyVs.className = "result-draw";
              resultText.innerHTML = "DRAW";
              itemRockComp.style.background = "#C4C4C4";
              console.log("Hasil DRAW")
              setTimeout(() => {
                if(confirm("play again?")) {
                  history.go(0);
                } else {
                  return;
                }
              }, 1500)
            } else {
              itemRockComp.style.background = "";
            }
          }, 300)
        }, 3900)

        if(hand === "compRock") {
          return;
        }

        console.log(hand)

        setTimeout(() => {
          itemPaperComp.style.background = "#C4C4C4";
          setTimeout(() => {
            if(hand === "compPaper") {
              onlyVs.className = "result";
              resultText.innerHTML = "COMP <br> WIN";
              itemPaperComp.style.background = "#C4C4C4";
              console.log("COMP WIN")
              setTimeout(() => {
                if(confirm("play again?")) {
                  history.go(0);
                } else {
                  return;
                }
              }, 1500)
            } else {
              itemPaperComp.style.background = "";
            }
          }, 300)
        }, 4200)

        if(hand === "compPaper") {
          return;
        }

        setTimeout(() => {
          itemScissorsComp.style.background = "#C4C4C4";
          setTimeout(() => {
            if(hand === "compScissors") {
              onlyVs.className = "result";
              resultText.innerHTML = "PLAYER 1 <br> WIN";
              itemScissorsComp.style.background = "#C4C4C4";
              console.log("PLAYER WIN");
              setTimeout(() => {
                if(confirm("play again?")) {
                  history.go(0);
                } else {
                  return;
                }
              }, 1500)
            } else {
              itemScissorsComp.style.background = "";
            }
          }, 300)
        }, 4500)
    })
  }

  paper() {
    playerPaper.addEventListener("click", () => {
      console.log(playerPaper.id)
      const hands = [compRock, compPaper, compScissors];
      const hand = hands[Math.floor(Math.random()*hands.length)].id;
      console.log(hand)

      itemPaper.style.background = "#C4C4C4";

      function set(durationOne, durationTwo, durationThree) {
        setTimeout(() => {
          itemRockComp.style.background = "#C4C4C4";
          setTimeout(() => {
            itemRockComp.style.background = "";
          }, 300)
        }, durationOne)
        setTimeout(() => {
          itemPaperComp.style.background = "#C4C4C4";
          setTimeout(() => {
            itemPaperComp.style.background = "";
          }, 300)
        }, durationTwo)
        setTimeout(() => {
          itemScissorsComp.style.background = "#C4C4C4";
          setTimeout(() => {
            itemScissorsComp.style.background = "";
          }, 300)
        }, durationThree)
      }

      for(let i = 0; i < 10; i++) {
        if(i === 1) {
          set(300, 600, 900);
        } else if(i === 2) {
          set(1200, 1500, 1800);
        } else if(i === 3) {
          set(2100, 2400, 2700)
         } else if(i === 4) {
          set(3000, 3300, 3600)
         }
      }

        setTimeout(() => {
          itemRockComp.style.background = "#C4C4C4";
          setTimeout(() => {
            if(hand === "compRock") {
              onlyVs.className = "result";
              resultText.innerHTML = "PLAYER 1 <br> WIN";
              itemRockComp.style.background = "#C4C4C4";
              console.log("PLAYER WIN");
              setTimeout(() => {
                if(confirm("play again?")) {
                  history.go(0);
                } else {
                  return;
                }
              }, 1500)
            } else {
              itemRockComp.style.background = "";
            }
          }, 300)
        }, 3900)

        if(hand === "compRock") {
          return;
        }



        setTimeout(() => {
          itemPaperComp.style.background = "#C4C4C4";
          setTimeout(() => {
            if(hand === "compPaper") {
              onlyVs.className = "result-draw";
              resultText.innerHTML = "DRAW";
              itemPaperComp.style.background = "#C4C4C4";
              console.log("DRAW");
              setTimeout(() => {
                if(confirm("play again?")) {
                  history.go(0);
                } else {
                  return;
                }
              }, 1500)
            } else {
              itemPaperComp.style.background = "";
            }
          }, 300)
        }, 4200)

        if(hand === "compPaper") {
          return;
        }

        setTimeout(() => {
          itemScissorsComp.style.background = "#C4C4C4";
          setTimeout(() => {
            if(hand === "compScissors") {
              onlyVs.className = "result";
              resultText.innerHTML = "COMP WIN";
              itemScissorsComp.style.background = "#C4C4C4";
              console.log("COMP WIN");
              setTimeout(() => {
                if(confirm("play again?")) {
                  history.go(0);
                } else {
                  return;
                }
              }, 1500)
            } else {
              itemScissorsComp.style.background = "";
            }
          }, 300)
        }, 4500)
    })
  }

  scissors() {
    playerScissors.addEventListener("click", () => {
      console.log(playerScissors.id)
      const hands = [compRock, compPaper, compScissors];
      const hand = hands[Math.floor(Math.random()*hands.length)].id;
      console.log(hand)

      itemScissors.style.background = "#C4C4C4";

      function set(durationOne, durationTwo, durationThree) {
        setTimeout(() => {
          itemRockComp.style.background = "#C4C4C4";
          setTimeout(() => {
            itemRockComp.style.background = "";
          }, 300)
        }, durationOne)
        setTimeout(() => {
          itemPaperComp.style.background = "#C4C4C4";
          setTimeout(() => {
            itemPaperComp.style.background = "";
          }, 300)
        }, durationTwo)
        setTimeout(() => {
          itemScissorsComp.style.background = "#C4C4C4";
          setTimeout(() => {
            itemScissorsComp.style.background = "";
          }, 300)
        }, durationThree)
      }

      for(let i = 0; i < 10; i++) {
        if(i === 1) {
          set(300, 600, 900);
        } else if(i === 2) {
          set(1200, 1500, 1800);
        } else if(i === 3) {
          set(2100, 2400, 2700)
         } else if(i === 4) {
          set(3000, 3300, 3600)
         }
      }

        setTimeout(() => {
          itemRockComp.style.background = "#C4C4C4";
          setTimeout(() => {
            if(hand === "compRock") {
              onlyVs.className = "result";
              resultText.innerHTML = "COMP WIN";
              itemRockComp.style.background = "#C4C4C4";
              console.log("COMP WIN");
              setTimeout(() => {
                if(confirm("play again?")) {
                  history.go(0);
                } else {
                  return;
                }
              }, 1500)
            } else {
              itemRockComp.style.background = "";
            }
          }, 300)
        }, 3900)

        if(hand === "compRock") {
          return;
        }



        setTimeout(() => {
          itemPaperComp.style.background = "#C4C4C4";
          setTimeout(() => {
            if(hand === "compPaper") {
              onlyVs.className = "result";
              resultText.innerHTML = "PLAYER 1 <br> WIN";
              itemPaperComp.style.background = "#C4C4C4";
              console.log("Player WIN");
              setTimeout(() => {
                if(confirm("play again?")) {
                  history.go(0);
                } else {
                  return;
                }
              }, 1500)
            } else {
              itemPaperComp.style.background = "";
            }
          }, 300)
        }, 4200)

        if(hand === "compPaper") {
          return;
        }

        setTimeout(() => {
          itemScissorsComp.style.background = "#C4C4C4";
          setTimeout(() => {
            if(hand === "compScissors") {
              onlyVs.className = "result-draw";
              resultText.innerHTML = "DRAW";
              itemScissorsComp.style.background = "#C4C4C4";
              console.log("Hasil DRAW");
              setTimeout(() => {
                if(confirm("play again?")) {
                  history.go(0);
                } else {
                  return;
                }
              }, 1500)
            } else {
              itemScissorsComp.style.background = "";
            }
          }, 300)
        }, 4500)
    })
  }

  playAgain() {
    refreshPage.style.height = "70px";
    refreshPage.addEventListener("click", () => {
      history.go(0);
    })
  }
}

const main = new Player();

main.rock();
main.paper();
main.scissors();
main.playAgain();