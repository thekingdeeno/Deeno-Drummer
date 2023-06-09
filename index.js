// Second Method (More Effective) //
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

    document.addEventListener("keypress", function(event) {
        var key = event.key;
        playSound(key);
        buttonAnimation(key);
});

function playSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        default:
            console.log(key);
    }
};

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed")
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)
    console.log(activeButton);
};




// This was the method I used for this project a while back //

// function playSound1() {
//     var sound = document.querySelectorAll("audio")[0];
//     sound.play();
//   }

//   function playSound2() {
//     var sound = document.querySelectorAll("audio")[1];
//     sound.play();
//   }

//   function playSound3() {
//     var sound = document.querySelectorAll("audio")[2];
//     sound.play();
//   }

//   function playSound4() {
//     var sound = document.querySelectorAll("audio")[3];
//     sound.play();
//   }

//   function playSound5() {
//     var sound = document.querySelectorAll("audio")[4];
//     sound.play();
//   }

//   function playSound6() {
//     var sound = document.querySelectorAll("audio")[5];
//     sound.play();
//   }

//   function playSound7() {
//     var sound = document.querySelectorAll("audio")[6];
//     sound.play();
//   }

//   document.addEventListener('keydown', (event) => {
//     if (event.key === 'w') {
//         console.log(playSound1());  
//     }
    
//     if (event.key === 'a') {
//         console.log(playSound2());
//     }

//     if (event.key === 's') {
//       console.log(playSound3());
//     }

//     if (event.key === 'd') {
//       console.log(playSound4()); 
//     }

//     if (event.key === 'f') {
//       console.log(playSound5());
//     }

//     if (event.key === 'g') {
//       console.log(playSound6());
//     }

//     if (event.key === 'h') {
//       console.log(playSound7());
//     }
// });
