document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded");
  let nextButtonCount = -1;
  let imageClickCount = 0;

  // State Specific Data
  // Indices (0-based): 19 (Senators), 42 (Governor), 43 (Capital)
  // Note: Q23 (Index 22) is Representative which is district specific, handled generically.
  const stateAnswers = {
    AL: {
      19: "Tommy Tuberville and Katie Britt",
      42: "Kay Ivey",
      43: "Montgomery"
    },
    AK: {
      19: "Lisa Murkowski and Dan Sullivan",
      42: "Mike Dunleavy",
      43: "Juneau"
    },
    AZ: {
      19: "Kyrsten Sinema and Mark Kelly",
      42: "Katie Hobbs",
      43: "Phoenix"
    },
    AR: {
      19: "John Boozman and Tom Cotton",
      42: "Sarah Huckabee Sanders",
      43: "Little Rock"
    },
    CA: {
      19: "Alex Padilla and Laphonza Butler",
      42: "Gavin Newsom",
      43: "Sacramento"
    },
    CO: {
      19: "Michael Bennet and John Hickenlooper",
      42: "Jared Polis",
      43: "Denver"
    },
    CT: {
      19: "Richard Blumenthal and Chris Murphy",
      42: "Ned Lamont",
      43: "Hartford"
    },
    DE: {
      19: "Tom Carper and Chris Coons",
      42: "John Carney",
      43: "Dover"
    },
    FL: {
      19: "Marco Rubio and Rick Scott",
      42: "Ron DeSantis",
      43: "Tallahassee"
    },
    GA: {
      19: "Jon Ossoff and Raphael Warnock",
      42: "Brian Kemp",
      43: "Atlanta"
    },
    HI: {
      19: "Brian Schatz and Mazie Hirono",
      42: "Josh Green",
      43: "Honolulu"
    },
    ID: {
      19: "Mike Crapo and Jim Risch",
      42: "Brad Little",
      43: "Boise"
    },
    IL: {
      19: "Dick Durbin and Tammy Duckworth",
      42: "J.B. Pritzker",
      43: "Springfield"
    },
    IN: {
      19: "Todd Young and Mike Braun",
      42: "Eric Holcomb",
      43: "Indianapolis"
    },
    IA: {
      19: "Chuck Grassley and Joni Ernst",
      42: "Kim Reynolds",
      43: "Des Moines"
    },
    KS: {
      19: "Jerry Moran and Roger Marshall",
      42: "Laura Kelly",
      43: "Topeka"
    },
    KY: {
      19: "Mitch McConnell and Rand Paul",
      42: "Andy Beshear",
      43: "Frankfort"
    },
    LA: {
      19: "Bill Cassidy and John Kennedy",
      42: "Jeff Landry",
      43: "Baton Rouge"
    },
    ME: {
      19: "Susan Collins and Angus King",
      42: "Janet Mills",
      43: "Augusta"
    },
    MD: {
      19: "Ben Cardin and Chris Van Hollen",
      42: "Wes Moore",
      43: "Annapolis"
    },
    MA: {
      19: "Elizabeth Warren and Ed Markey",
      42: "Maura Healey",
      43: "Boston"
    },
    MI: {
      19: "Debbie Stabenow and Gary Peters",
      42: "Gretchen Whitmer",
      43: "Lansing"
    },
    MN: {
      19: "Amy Klobuchar and Tina Smith",
      42: "Tim Walz",
      43: "Saint Paul"
    },
    MS: {
      19: "Roger Wicker and Cindy Hyde-Smith",
      42: "Tate Reeves",
      43: "Jackson"
    },
    MO: {
      19: "Josh Hawley and Eric Schmitt",
      42: "Mike Parson",
      43: "Jefferson City"
    },
    MT: {
      19: "Jon Tester and Steve Daines",
      42: "Greg Gianforte",
      43: "Helena"
    },
    NE: {
      19: "Deb Fischer and Pete Ricketts",
      42: "Jim Pillen",
      43: "Lincoln"
    },
    NV: {
      19: "Catherine Cortez Masto and Jacky Rosen",
      42: "Joe Lombardo",
      43: "Carson City"
    },
    NH: {
      19: "Jeanne Shaheen and Maggie Hassan",
      42: "Chris Sununu",
      43: "Concord"
    },
    NJ: {
      19: "Cory Booker and George Helmy",
      42: "Phil Murphy",
      43: "Trenton"
    },
    NM: {
      19: "Martin Heinrich and Ben Ray Luján",
      42: "Michelle Lujan Grisham",
      43: "Santa Fe"
    },
    NY: {
      19: "Chuck Schumer and Kirsten Gillibrand",
      42: "Kathy Hochul",
      43: "Albany"
    },
    NC: {
      19: "Thom Tillis and Ted Budd",
      42: "Roy Cooper",
      43: "Raleigh"
    },
    ND: {
      19: "John Hoeven and Kevin Cramer",
      42: "Doug Burgum",
      43: "Bismarck"
    },
    OH: {
      19: "Sherrod Brown and J.D. Vance",
      42: "Mike DeWine",
      43: "Columbus"
    },
    OK: {
      19: "James Lankford and Markwayne Mullin",
      42: "Kevin Stitt",
      43: "Oklahoma City"
    },
    OR: {
      19: "Ron Wyden and Jeff Merkley",
      42: "Tina Kotek",
      43: "Salem"
    },
    PA: {
      19: "Bob Casey Jr. and John Fetterman",
      42: "Josh Shapiro",
      43: "Harrisburg"
    },
    RI: {
      19: "Jack Reed and Sheldon Whitehouse",
      42: "Dan McKee",
      43: "Providence"
    },
    SC: {
      19: "Lindsey Graham and Tim Scott",
      42: "Henry McMaster",
      43: "Columbia"
    },
    SD: {
      19: "John Thune and Mike Rounds",
      42: "Kristi Noem",
      43: "Pierre"
    },
    TN: {
      19: "Marsha Blackburn and Bill Hagerty",
      42: "Bill Lee",
      43: "Nashville"
    },
    TX: {
      19: "John Cornyn and Ted Cruz",
      42: "Greg Abbott",
      43: "Austin"
    },
    UT: {
      19: "Mike Lee and Mitt Romney",
      42: "Spencer Cox",
      43: "Salt Lake City"
    },
    VT: {
      19: "Bernie Sanders and Peter Welch",
      42: "Phil Scott",
      43: "Montpelier"
    },
    VA: {
      19: "Mark Warner and Tim Kaine",
      42: "Glenn Youngkin",
      43: "Richmond"
    },
    WA: {
      19: "Patty Murray and Maria Cantwell",
      42: "Jay Inslee",
      43: "Olympia"
    },
    WV: {
      19: "Joe Manchin and Shelley Moore Capito",
      42: "Jim Justice",
      43: "Charleston"
    },
    WI: {
      19: "Ron Johnson and Tammy Baldwin",
      42: "Tony Evers",
      43: "Madison"
    },
    WY: {
      19: "John Barrasso and Cynthia Lummis",
      42: "Mark Gordon",
      43: "Cheyenne"
    },
    DC: {
      19: "No Senators (District of Columbia)",
      42: "Muriel Bowser (Mayor)",
      43: "N/A"
    }
  };

  const stateSpecificIndices = [19, 42, 43];
  const representativeIndex = 22; // Special case for generic message

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
  
  // New Elements
  const stateSelector = document.getElementById("stateSelector");
  const textAnswerContainer = document.getElementById("textAnswerContainer");
  const textAnswerContent = document.getElementById("textAnswerContent");
  const stateNameDisplay = document.getElementById("stateNameDisplay");

  const stateSelectorContainer = document.getElementById("stateSelectorContainer");

  function hideTextAnswer() {
    textAnswerContainer.classList.add("hidden");
  }

  function showTextAnswer(text, stateName) {
    textAnswerContent.textContent = text;
    stateNameDisplay.textContent = stateName ? `(${stateName})` : "";
    textAnswerContainer.classList.remove("hidden");
  }

  function updateStateSelectorVisibility(index) {
    if (stateSpecificIndices.includes(index) || index === representativeIndex) {
      stateSelectorContainer.classList.remove("hidden");
    } else {
      stateSelectorContainer.classList.add("hidden");
    }
  }

  function updateAnswerDisplay() {
      const selectedState = stateSelector.value;
      
      if (nextButtonCount === representativeIndex) {
         // Special case for Representative (District specific)
         showTextAnswer("Answers will vary. \n(Residents of territories with nonvoting Delegates or Resident Commissioners may provide the name of that Delegate or Commissioner. Also acceptable is any statement that the territory has no (voting) Representatives in Congress.)", selectedState ? stateSelector.options[stateSelector.selectedIndex].text : "");
      } else if (selectedState && stateAnswers[selectedState] && stateAnswers[selectedState][nextButtonCount]) {
        // Show state specific answer
        showTextAnswer(stateAnswers[selectedState][nextButtonCount], stateSelector.options[stateSelector.selectedIndex].text);
      } else if (!selectedState) {
        // Prompt to select state
        showTextAnswer("Please select your state above to see the correct answer.", "");
      } else {
         // Fallback if data missing
         cardImage.src = cardsAnswer[nextButtonCount];
         // If we fell back to image, hide text container
         hideTextAnswer();
         cardImage.classList.remove("invisible");
      }
  }

  nextButton.addEventListener("click", function () {
    nextButtonCount++;
    cardImage.src = cardsQuestion[nextButtonCount];
    welcomeCard.classList.add("hidden");
    cardImage.classList.remove("hidden");
    speakButton.classList.remove("hidden");
    previousButton.classList.add("ml-10");
    face = "Question";
    hideTextAnswer(); // Reset text answer on new card
    updateStateSelectorVisibility(nextButtonCount);
    
    console.log(nextButtonCount);
    if (nextButtonCount >= 100) {
      startOver.classList.remove("hidden");
      nextButton.classList.add("hidden");
      previousButton.classList.add("hidden");
      speakButton.classList.add("hidden");
      startOverCardImage.classList.remove("hidden");
      cardImage.classList.add("hidden");
      hideTextAnswer();
      stateSelectorContainer.classList.add("hidden");
    }
  });

  cardImage.addEventListener("click", function () {
    imageClickCount++;
    if (imageClickCount % 2 === 0) {
      // Showing Question
      cardImage.src = cardsQuestion[nextButtonCount];
      face = "Question";
      hideTextAnswer();
    } else {
      // Showing Answer
      face = "Answer";
      
      // Check if it's a state specific question
      if (stateSpecificIndices.includes(nextButtonCount) || nextButtonCount === representativeIndex) {
        updateAnswerDisplay();
      } else {
        // Normal image answer
        cardImage.src = cardsAnswer[nextButtonCount];
      }
    }
  });

  // Also handle clicks on the text container to flip back to question
  textAnswerContainer.addEventListener("click", function() {
    imageClickCount++;
    // Should go back to question
    cardImage.src = cardsQuestion[nextButtonCount];
    face = "Question";
    hideTextAnswer();
  });

  stateSelector.addEventListener("change", function() {
    if (face === "Answer") {
      updateAnswerDisplay();
    }
  });

  previousButton.addEventListener("click", function () {
    if (nextButtonCount > 0) {
      nextButtonCount--;
      cardImage.src = cardsQuestion[nextButtonCount];
      face = "Question";
      hideTextAnswer();
      updateStateSelectorVisibility(nextButtonCount);
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
    welcomeCard.classList.remove("hidden");
    cardImage.classList.add("hidden");
    startOver.classList.add("hidden");
    nextButton.classList.remove("hidden");
    previousButton.classList.remove("hidden");
    speakButton.classList.remove("hidden");
    startOverCardImage.classList.add("hidden");
    speakButton.classList.add("hidden");
    previousButton.classList.remove("ml-10");
    hideTextAnswer();
    stateSelector.selectedIndex = 0; // Reset selector
    stateSelectorContainer.classList.add("hidden");
  });
});
