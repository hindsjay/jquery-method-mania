// document ready
$(function() {

  //variables
  let counter = 0;
  let lives = 2;
  // array used in getRandomNumber function
  let randomNumberArray = [];
  let questionCorrectAnswer;
  let linkToDocs;

  // question/answer data structure --> array of objects that hold question/answer data
  const questionData = [
    {
      question: 'This method allows you to attach a handler to an event for the elements.',
      options: ['bind()', 'bindEvent()', 'attach()'],
      answer: 'bind()',
      link: 'https://api.jquery.com/bind/',
      tip: 'Did you know this method is now deprecated as of jQuery 3.0?'
    },
    {
      question: 'This method gets the HTML contents of the first element in a set of matched elements.',
      options: ['html()', 'contents()', 'innerHTML()'],
      answer: 'html()',
      link: 'https://api.jquery.com/html/'
    },
    {
      question: 'This method is a shortcut for the "focus" event handler.',
      options: ['trigger()', 'inFocus()', 'focus()'],
      answer: 'focus()',
      link: 'https://api.jquery.com/focus/'
    },
    {
      question: 'This method is primarily used to get the values of form elements.',
      options: ['value()', 'val()', 'inputValue()'],
      answer: 'val()',
      link: 'https://api.jquery.com/val/'
    },
    {
      question: 'This method gets the first element that matches the selector.',
      options: ['firstElement()', 'closest()', 'parents()'],
      answer: 'closest()',
      link: 'https://api.jquery.com/closest/'
    },
    {
      question: 'This method removes the whitespace from the beginning and end of a string.',
      options: ['remove()', 'clear()', 'trim()'],
      answer: 'trim()',
      link: 'https://api.jquery.com/jQuery.trim/'
    },
    {
      question: 'This method attaches an event handler function for one or more events.',
      options: ['on()', 'onClick()', 'onEvent()'],
      answer: 'on()',
      link: 'https://api.jquery.com/on/'
    },
    {
      question: 'This method attaches a handler to an event, but the handler is only executed at most once per element per event type.',
      options: ['onOne()', 'fireOnce()', 'one()'],
      answer: 'one()',
      link: 'https://api.jquery.com/one/'
    },
    {
      question: 'This method inserts content to the end of each element in the set of matched elements.',
      options: ['append()', 'insert()', 'addContent()'],
      answer: 'append()',
      link: 'https://api.jquery.com/append/'
    },
    {
      question: 'This method gets the text contents of each element in the set of matched elements.',
      options: ['contents()', 'textContent()', 'text()'],
      answer: 'text()',
      link: 'https://api.jquery.com/text/'
    },
    {
      question: 'This method removes all child nodes of matched elements from the DOM.',
      options: ['deleteAll()', 'empty()', 'remove()'],
      answer: 'empty()',
      link: 'https://api.jquery.com/empty/'
    },
    {
      question: 'This method removes the set of matched elements from the DOM but keeps all jQuery data associated with the removed elements.',
      options: ['detach()', 'remove()', 'removeAll()'],
      answer: 'detach()',
      link: 'https://api.jquery.com/detach/'
    },
    {
      question: 'This method enables fade on an element by fading them to opaque (i.e. not transparent).',
      options: ['fadeIn()', 'fade()', 'fadeElement()'],
      answer: 'fadeIn()',
      link: 'https://api.jquery.com/fadein/'
    },
    {
      question: 'This method displays or hides an element with a sliding motion.',
      options: ['toggle()', 'slide()', 'slideToggle()'],
      answer: 'slideToggle()',
      link: 'https://api.jquery.com/slidetoggle/'
    },
    {
      question: 'This method relinquishes jQuery\'s control of the "$" variable.',
      options: ['conflict()', 'control()', 'noConflict()'],
      answer: 'noConflict()',
      link: 'https://api.jquery.com/jQuery.noConflict/'
    },
    {
      question: 'This method performs a deep copy of the set of matched elements.',
      options: ['clone()', 'copy()', 'deepCopy()'],
      answer: 'clone()',
      link: 'https://api.jquery.com/clone/'
    },
    {
      question: 'This method stores arbitrary data associated with the matched elements.',
      options: ['key()', 'store()', 'data()'],
      answer: 'data()',
      link: 'https://api.jquery.com/data/'
    },
    {
      question: 'This method adds the specified class(es) to each element in the set of matched elements.',
      options: ['className()', 'addClass()', 'classAdd()'],
      answer: 'addClass()',
      link: 'https://api.jquery.com/addClass/'
    },
    {
      question: 'This method checks to see if any of the matched elements have the given class.',
      options: ['checkClass()', 'hasClass()', 'class()'],
      answer: 'hasClass()',
      link: 'https://api.jquery.com/hasClass/'
    },
    {
      question: 'This method displays the matched elements.',
      options: ['display()', 'show()', 'enable()'],
      answer: 'show()',
      link: 'https://api.jquery.com/show/'
    }
  ];

  // cache jQuery variables
  const $score = $('.score');
  const $questionBubble = $('.question-bubble');
  const $optionsContainer = $('.options-container');
  const $overlay = $('.overlay');
  const $overlayText = $('.overlay-text');
  const $overlayButton = $('.overlay-text button');
  const $livesIcons = $('.devicon-jquery-plain')
  const livesIconsArray = $.makeArray($livesIcons);


  /*
  function to get random number
  added logic to avoid the same question from showing twice in a game
  utilized recursion to do this ( I believe it's recursion :) )
  */
  const getRandomNumber = (num) => {
    // if we randomly chose all the questions then reset
    if (randomNumberArray.length === 20) {
      randomNumberArray = [];
    }
    // get random number
    let randomNumber = Math.floor(Math.random() * num);;
    // recursive case
    // if random number has already been used then run again until we get a non-used random number
    if (randomNumberArray.includes(randomNumber)) {
      return getRandomNumber(num);
    // base case
    } else {
      // add/store random number to array
      randomNumberArray.push(randomNumber);
      return randomNumber;
    }
  };


  // function to initialize game
  const initializeGame = () => {
    // add score to screen at start
    $score.html(counter);
    // get random question from data structure and add it to the screen
    addQuestionToScreen(questionData);
  };


  // function to dynamically add random question to DOM
  const addQuestionToScreen = (array) => {
    // if options container has child elements then remove them
    // if no child elements then we are at very beginning of game and will not enter function
    if ($optionsContainer[0].childElementCount > 0) {
      $('.option').remove();
    }
    // similar to above if question bubble container has child element then remove it
    if ($questionBubble[0].childElementCount > 0) {
      $questionBubble[0].children[0].remove();
    }
    // gets random number and put into variable to be used
    const randomNumber = getRandomNumber(array.length);
    // function to get random question from data structure
    const getRandomQuestion = () => {
      return array[randomNumber].question;
    };
    //adds random question to DOM
    $questionBubble.append(`<p>${getRandomQuestion()}</p>`);
    // funtion to get answer options for the retrieved question from data structure --> returns an array
    const getAnswerOptions = () => {
      return array[randomNumber].options;
    };
    // store correct answer
    questionCorrectAnswer = array[randomNumber].answer;
    // store link to jQuery docs for specific question
    linkToDocs = array[randomNumber].link;
    // get answerOptions array, append each item to the DOM
    getAnswerOptions().forEach( (option) => {
      if (option === questionCorrectAnswer) {
        $optionsContainer.append(`<button class="option hover-style">${option}</button>`);
      } else {
        $optionsContainer.append(`<button class="option hover-style">${option}<span class="options-overlay overlay-wrong">Oh no! That's not right!</span></button>`);
      }
    });
  }

  // initialize game
  initializeGame();


  // when one of the options is chosen, is it the correct answer or an incorrect answer?
  // using bubbling to add event listener to dynamically added options
  $optionsContainer.on('click', '.option', function() {
    const $eventTarget = $(event.target);
    const $eventTargetChild = $(event.target).children();
    // if the option chosen is the correct answer
    if ($eventTarget[0].innerText === questionCorrectAnswer) {
      counter++;
      $score.html(counter);
      // remove elements in the overlay-text container if there are any
      $('.overlay-text h3, .overlay-text p, .overlay-text a').remove();
      // add elements to overlay-text container to show message when overlay is shown at correct answer
      $overlayText.prepend(`<h3>Congratulations!</h3><p>That's correct!</p><p>To read more on this method, check it out here:</p><a href="${linkToDocs}" target="_blank">${linkToDocs}</a>`);
      // change text inside button
      $overlayButton.html('Next Question');
      // scroll to top of page where overlay text is positioned then show overlay
      window.scroll(0,0);
      // show correct answer overlay
      $overlay.fadeIn(300).css('display', 'flex');
    } else {
      // hide lives icon at incorrect guess
      livesIconsArray[lives].style.visibility = 'hidden';
      lives--;
      // at incorrect answer show wrong answer button overlay
      $eventTargetChild.fadeIn(200, function() {
        $(this).delay(2000).fadeOut(500);
      });
      // blur out incorrect answer, prevent item from being clicked again, and remove hover effect
      setTimeout( () => {
        $eventTarget.css('filter', 'blur(1px)').attr("disabled", true).removeClass('hover-style').delay(1500);
      }, 2500);
    }
    // execute function to check to see if we are at the end of game (i.e. win or lose status)
    endGameCheck();
  });


  // function to check after each guess if the player won the game (i.e. pts = 10) or they lose the game (i.e. lives = 0)
  const endGameCheck = () => {
    if (counter === 5 || lives < 0) {
      // remove elements in the overlay-text container making room for new elements to be dynamically added
      $('.overlay-text h3, .overlay-text p, .overlay-text a').remove();
      $overlayButton.html('Play Again?');
      // win game when counter reached five
      if (counter === 5) {
        $overlayText.prepend(`<h3>Congratulations!</h3><p>You Won the game!</p><p>You sure know your jQuery methods well!</p>`);
      } else if (lives < 0) {
        $overlayText.prepend(`<h3>Sorry!</h3><p>You Lost the game!</p><p>To do further reading on this method, check it out here:</p><a href="${linkToDocs}" target="_blank">${linkToDocs}</a>`);
      }

      window.scroll(0,0);
      $overlay.fadeIn(300).css('display', 'flex');
    }
  };


  // function to reset game after game was won or lost
  const resetGame = () => {
    // reset counter and lives variables back to initial start values
    counter = 0;
    lives = 2;
    // return lives icons to start game state
    $livesIcons.each(function() {
      $(this).css('visibility', 'initial');
    });

    initializeGame();
    $overlay.fadeOut(300);
  };


  // event listener on button in overlay to either get new question or reset game
  $overlayButton.on('click', (event) => {
    const $eventTarget = $(event.target);
    // if overlay is shown after correct question then add new question to screen after click
    if ($eventTarget[0].innerHTML === 'Next Question') {
      // get new question added to the screen
      addQuestionToScreen(questionData);
      $overlay.fadeOut(300);
    // if the innerHTML of the button is not 'Next Question' then it would be 'Play Again' and if user clicks button we would want to restart game  
    } else {
      resetGame();
    }
  });

}); // end of document ready