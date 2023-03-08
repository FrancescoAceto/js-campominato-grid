let gridEL = document.getElementById("grid");
let DifficultyEL = document.getElementById("Difficulty");

const PlayButtonEL = document.getElementById("play")
PlayButtonEL.addEventListener("click", function () {
    
    const cellNumber = getCellNumber(DifficultyEL.value);
    console.log(cellNumber);

    const bombs = generateBombs(16 , cellNumber);
    console.log(bombs);

    GenerateGrid(gridEL, cellNumber, bombs);
});



function getCellNumber(difficulty) {
    if (difficulty == "Easy") {
        
        return 100;

    } else if (difficulty == "Medium") {
        
        return 81;

    } else {

        return 49;
    }
}

function GenerateGrid(gridContainerEL, cellNumber, bombs) {
    
    for (let i = 0; i < cellNumber; i++) {
       
        let newElement = document.createElement("div")

        newElement.className = "square";

        gridcontainerEL.append(newElement);
        
    }
}

function generateBombs(quantity, maxNumber) {
    
    const bombs = [];

    while (bombs.length < quantity) {
        
        let RandomNumber = RandomNumberBetween(1, maxNumber);
        bombs.push(RandomNumber);
        
        if (!bombs.includes(RandomNumber)) {
            bombs.push(RandomNumber);
        }
    }

    console.log(bombs);

}


function RandomNumberBetween(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1) + min)
    return random;
}