const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img");
cpuResult = document.querySelector(".cpu_result img");
result = document.querySelector(".result");
optionImages = document.querySelectorAll(".option_image");

//console.log(gameContainer, userResult, cpuResult, result, OptionImages);
//looping through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener(
    "click",
    (e) => {
      image.classList.add("active");

      //looping through each option image again
      optionImages.forEach((image2, index2) => {
        //if the current index doesn't match the clicked index
        //Removing the "active" class from the other option images
        index !== index2 && image.classList.remove("active");
      });
      gameContainer.classList.add("Start");
      // Setting a timeout to delay the result calculation
      let time = setTimeout(() => {
        gameContainer.classList.remove("Start");

        //Getting the source of the clicked option image
        let imageSrc = e.target.querySelector("img").src;
        // setting the user image to the clicked option image
        userResult.src = imageSrc;
        //    console.log(e.target);

        // Generating a random number between 0 and 2
        let randomNumber = Math.floor(Math.random() * 3);

        //creating an array of cpu image option
        let cpuImages = [
          "images/rock.jpg",
          "images/paper.jpg",
          "images/siccsor.jpg",
        ];
        //setting the cpu image to random option from the array
        cpuResult.src = cpuImages[randomNumber];

        // Assigning the letter value to the Cpu option (R for Rock ,P for Paper, S for Scissors)
        let cpuValue = ["R", "P", "S"][randomNumber];

        //Assigning a letter value to the clicked option (based on index)
        let userValue = ["R", "P", "S"][index];

        // creating an object with all possible outcomes
        let outcomes = {
          RR: "Draw",
          RP: "cpu",
          RS: "User",
          PP: "Draw",
          PR: "User",
          PS: "Cpu",
          SS: "Draw",
          SR: "Cpu",
          SP: "User",
        };

        // looking up the outcome value based on user and cpu options
        let outComeValue = outcomes[userValue + cpuValue];

        //Displaying the result
        result.textContent =
          userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
        console.log(outComeValue);
      });
    },
    2500
  );
});
