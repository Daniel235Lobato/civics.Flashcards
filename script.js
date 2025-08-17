document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded");
  let nextButtonCount = -1;
  let imageClickCount = 0;

  let cardsAnswer = [
    "images/flashcard_001_A.jpg",
    "images/flashcard_002_A.jpg",
    "images/flashcard_003_A.jpg",
    "images/flashcard_004_A.jpg",
    "images/flashcard_005_A.jpg",
    "images/flashcard_006_A.jpg",
    "images/flashcard_007_A.jpg",
    "images/flashcard_008_A.jpg",
    "images/flashcard_009_A.jpg",
    "images/flashcard_010_A.jpg",
    "images/flashcard_011_A.jpg",
    "images/flashcard_012_A.jpg",
    "images/flashcard_013_A.jpg",
    "images/flashcard_014_A.jpg",
    "images/flashcard_015_A.jpg",
    "images/flashcard_016_A.jpg",
    "images/flashcard_017_A.jpg",
    "images/flashcard_018_A.jpg",
    "images/flashcard_019_A.jpg",
    "images/flashcard_020_A.jpg",
    "images/flashcard_021_A.jpg",
    "images/flashcard_022_A.jpg",
    "images/flashcard_023_A.jpg",
    "images/flashcard_024_A.jpg",
    "images/flashcard_025_A.jpg",
    "images/flashcard_026_A.jpg",
    "images/flashcard_027_A.jpg",
    "images/flashcard_028_A.jpg",
    "images/flashcard_029_A.jpg",
    "images/flashcard_030_A.jpg",
    "images/flashcard_031_A.jpg",
    "images/flashcard_032_A.jpg",
    "images/flashcard_033_A.jpg",
    "images/flashcard_034_A.jpg",
    "images/flashcard_035_A.jpg",
    "images/flashcard_036_A.jpg",
    "images/flashcard_037_A.jpg",
    "images/flashcard_038_A.jpg",
    "images/flashcard_039_A.jpg",
    "images/flashcard_040_A.jpg",
    "images/flashcard_041_A.jpg",
    "images/flashcard_042_A.jpg",
    "images/flashcard_043_A.jpg",
    "images/flashcard_044_A.jpg",
    "images/flashcard_045_A.jpg",
    "images/flashcard_046_A.jpg",
    "images/flashcard_047_A.jpg",
    "images/flashcard_048_A.jpg",
    "images/flashcard_049_A.jpg",
    "images/flashcard_050_A.jpg",
    "images/flashcard_051_A.jpg",
    "images/flashcard_052_A.jpg",
    "images/flashcard_053_A.jpg",
    "images/flashcard_054_A.jpg",
    "images/flashcard_055_A.jpg",
    "images/flashcard_056_A.jpg",
    "images/flashcard_057_A.jpg",
    "images/flashcard_058_A.jpg",
    "images/flashcard_059_A.jpg",
    "images/flashcard_060_A.jpg",
    "images/flashcard_061_A.jpg",
    "images/flashcard_062_A.jpg",
    "images/flashcard_063_A.jpg",
    "images/flashcard_064_A.jpg",
    "images/flashcard_065_A.jpg",
    "images/flashcard_066_A.jpg",
    "images/flashcard_067_A.jpg",
    "images/flashcard_068_A.jpg",
    "images/flashcard_069_A.jpg",
    "images/flashcard_070_A.jpg",
    "images/flashcard_071_A.jpg",
    "images/flashcard_072_A.jpg",
    "images/flashcard_073_A.jpg",
    "images/flashcard_074_A.jpg",
    "images/flashcard_075_A.jpg",
    "images/flashcard_076_A.jpg",
    "images/flashcard_077_A.jpg",
    "images/flashcard_078_A.jpg",
    "images/flashcard_079_A.jpg",
    "images/flashcard_080_A.jpg",
    "images/flashcard_081_A.jpg",
    "images/flashcard_082_A.jpg",
    "images/flashcard_083_A.jpg",
    "images/flashcard_084_A.jpg",
    "images/flashcard_085_A.jpg",
    "images/flashcard_086_A.jpg",
    "images/flashcard_087_A.jpg",
    "images/flashcard_088_A.jpg",
    "images/flashcard_089_A.jpg",
    "images/flashcard_090_A.jpg",
    "images/flashcard_091_A.jpg",
    "images/flashcard_092_A.jpg",
    "images/flashcard_093_A.jpg",
    "images/flashcard_094_A.jpg",
    "images/flashcard_095_A.jpg",
    "images/flashcard_096_A.jpg",
    "images/flashcard_097_A.jpg",
    "images/flashcard_098_A.jpg",
    "images/flashcard_099_A.jpg",
    "images/flashcard_100_A.jpg",
  ];

  let cardsQuestion = [
    "images/flashcard_001_Q.jpg",
    "images/flashcard_002_Q.jpg",
    "images/flashcard_003_Q.jpg",
    "images/flashcard_004_Q.jpg",
    "images/flashcard_005_Q.jpg",
    "images/flashcard_006_Q.jpg",
    "images/flashcard_007_Q.jpg",
    "images/flashcard_008_Q.jpg",
    "images/flashcard_009_Q.jpg",
    "images/flashcard_010_Q.jpg",
    "images/flashcard_011_Q.jpg",
    "images/flashcard_012_Q.jpg",
    "images/flashcard_013_Q.jpg",
    "images/flashcard_014_Q.jpg",
    "images/flashcard_015_Q.jpg",
    "images/flashcard_016_Q.jpg",
    "images/flashcard_017_Q.jpg",
    "images/flashcard_018_Q.jpg",
    "images/flashcard_019_Q.jpg",
    "images/flashcard_020_Q.jpg",
    "images/flashcard_021_Q.jpg",
    "images/flashcard_022_Q.jpg",
    "images/flashcard_023_Q.jpg",
    "images/flashcard_024_Q.jpg",
    "images/flashcard_025_Q.jpg",
    "images/flashcard_026_Q.jpg",
    "images/flashcard_027_Q.jpg",
    "images/flashcard_028_Q.jpg",
    "images/flashcard_029_Q.jpg",
    "images/flashcard_030_Q.jpg",
    "images/flashcard_031_Q.jpg",
    "images/flashcard_032_Q.jpg",
    "images/flashcard_033_Q.jpg",
    "images/flashcard_034_Q.jpg",
    "images/flashcard_035_Q.jpg",
    "images/flashcard_036_Q.jpg",
    "images/flashcard_037_Q.jpg",
    "images/flashcard_038_Q.jpg",
    "images/flashcard_039_Q.jpg",
    "images/flashcard_040_Q.jpg",
    "images/flashcard_041_Q.jpg",
    "images/flashcard_042_Q.jpg",
    "images/flashcard_043_Q.jpg",
    "images/flashcard_044_Q.jpg",
    "images/flashcard_045_Q.jpg",
    "images/flashcard_046_Q.jpg",
    "images/flashcard_047_Q.jpg",
    "images/flashcard_048_Q.jpg",
    "images/flashcard_049_Q.jpg",
    "images/flashcard_050_Q.jpg",
    "images/flashcard_051_Q.jpg",
    "images/flashcard_052_Q.jpg",
    "images/flashcard_053_Q.jpg",
    "images/flashcard_054_Q.jpg",
    "images/flashcard_055_Q.jpg",
    "images/flashcard_056_Q.jpg",
    "images/flashcard_057_Q.jpg",
    "images/flashcard_058_Q.jpg",
    "images/flashcard_059_Q.jpg",
    "images/flashcard_060_Q.jpg",
    "images/flashcard_061_Q.jpg",
    "images/flashcard_062_Q.jpg",
    "images/flashcard_063_Q.jpg",
    "images/flashcard_064_Q.jpg",
    "images/flashcard_065_Q.jpg",
    "images/flashcard_066_Q.jpg",
    "images/flashcard_067_Q.jpg",
    "images/flashcard_068_Q.jpg",
    "images/flashcard_069_Q.jpg",
    "images/flashcard_070_Q.jpg",
    "images/flashcard_071_Q.jpg",
    "images/flashcard_072_Q.jpg",
    "images/flashcard_073_Q.jpg",
    "images/flashcard_074_Q.jpg",
    "images/flashcard_075_Q.jpg",
    "images/flashcard_076_Q.jpg",
    "images/flashcard_077_Q.jpg",
    "images/flashcard_078_Q.jpg",
    "images/flashcard_079_Q.jpg",
    "images/flashcard_080_Q.jpg",
    "images/flashcard_081_Q.jpg",
    "images/flashcard_082_Q.jpg",
    "images/flashcard_083_Q.jpg",
    "images/flashcard_084_Q.jpg",
    "images/flashcard_085_Q.jpg",
    "images/flashcard_086_Q.jpg",
    "images/flashcard_087_Q.jpg",
    "images/flashcard_088_Q.jpg",
    "images/flashcard_089_Q.jpg",
    "images/flashcard_090_Q.jpg",
    "images/flashcard_091_Q.jpg",
    "images/flashcard_092_Q.jpg",
    "images/flashcard_093_Q.jpg",
    "images/flashcard_094_Q.jpg",
    "images/flashcard_095_Q.jpg",
    "images/flashcard_096_Q.jpg",
    "images/flashcard_097_Q.jpg",
    "images/flashcard_098_Q.jpg",
    "images/flashcard_099_Q.jpg",
    "images/flashcard_100_Q.jpg",
  ];

  let face = "Question";

  const startOverCardImage = document.getElementById("startOverCardImage");
  const startOver = document.getElementById("startOver");
  const cardImage = document.getElementById("cardImage");
  const nextButton = document.getElementById("nextButton");
  const welcomeCard = document.getElementById("welcomeCardImage");
  const previousButton = document.getElementById("previousButton");
  const speakButton = document.getElementById("speakButton");
  const speakImageButton = document.getElementById("speakImageButton");

  nextButton.addEventListener("click", function () {
    nextButtonCount++;
    cardImage.src = cardsQuestion[nextButtonCount];
    welcomeCard.classList.add("hidden");
    cardImage.classList.remove("hidden");
    speakImageButton.classList.remove("hidden")
    face = "Question";
    console.log(nextButtonCount);
    if (nextButtonCount >= 100) {
      startOver.classList.remove("hidden");
      nextButton.classList.add("hidden");
      previousButton.classList.add("hidden");
      speakButton.classList.add("hidden");
      startOverCardImage.classList.remove("hidden")
      cardImage.classList.add("hidden")
    }
  });

  cardImage.addEventListener("click", function () {
    imageClickCount++;
    if (imageClickCount % 2 === 0) {
      cardImage.src = cardsQuestion[nextButtonCount];
      face = "Question";
    } else {
      cardImage.src = cardsAnswer[nextButtonCount];
      face = "Answer";
    }
  });

  previousButton.addEventListener("click", function () {
    if (nextButtonCount > 0) {
      nextButtonCount--;
      cardImage.src = cardsQuestion[nextButtonCount];
      face = "Question";
    } else {
      console.log("Already at the first question. Can't go back further.");
    }
  });

  speakButton.addEventListener("click", function () {
    if (face === "Answer") {
      const sound = new Audio(
        `./audioFiles/q${nextButtonCount + 1}.Answer.mp3`
      );
      sound.play();
    } else if (face === "Question") {
      const sound = new Audio(
        `./audioFiles/q${nextButtonCount + 1}.Question.mp3`
      );
      sound.play();
    }
    console.log(face);
  });

  startOver.addEventListener("click", function () {
    nextButtonCount = -1;
    welcomeCard.classList.remove("hidden")
    cardImage.classList.add("hidden")
    startOver.classList.add("hidden")
    nextButton.classList.remove("hidden")
    previousButton.classList.remove("hidden")
    speakButton.classList.remove("hidden")
    startOverCardImage.classList.add("hidden")
  });
});
