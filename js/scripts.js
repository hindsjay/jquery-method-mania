// document ready
$(function() {

  //variables
  let counter = 0;
  let lives = 2;
  let questionCorrectAnswer;

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
  $score = $('.score');
  $questionBubblePara = $('.question-bubble p');
  $optionsContainer = $('.options-container');
  $optionButton = $('.option');


  // function to get random number
  const getRandomNumber = (num) => {
    return Math.floor(Math.random() * num);
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
    // gets random number and put into variable to be used
    const randomNumber = getRandomNumber(array.length);
    // function to get random question
    const getRandomQuestion = () => {
      return array[randomNumber].question;
    };
    //adds random question to DOM
    $questionBubblePara.html(getRandomQuestion());
    // get corresponding answer options array --> this returns an array
    const getAnswerOptions = () => {
      return array[randomNumber].options;
    };
    // after get answerOptions array, append each item to the DOM
    getAnswerOptions().forEach( (option) => {
      $optionsContainer.append(`<button class="option">${option}</button>`);
    });
    // store correct answer
    questionCorrectAnswer = array[randomNumber].answer;
  }

  // initialize game
  initializeGame();


  // when one of the options is chosen, it is the correct answer or an incorrect answer?
  $('.option').on('click', function(event) {
    const $eventTarget = $(event.target);
    const $eventTargetHTML = $(event.target).html();

    if ($eventTargetHTML === questionCorrectAnswer) {
      counter++;
      $score.html(counter);
      
      addQuestionToScreen(questionData);
    } else {
      const livesIconsArray = Object.values($('.devicon-jquery-plain'));
      livesIconsArray[lives].style.visibility = 'hidden';
      lives--;
      // blur out incorrect answer and prevent item from being clicked again
      $eventTarget.css('filter', 'blur(1px)').attr("disabled", true);
    }
    endGameCheck();
  });

  // if correct answer - a message should pop up saying they chose the correct answer and the score adds a point

  // if incorrect answer - a message should pop up saying they chose an incorrect answer
    // on incorrect answer the following should happen:
    // 1. life is removed
    // 2. the option they chose is blanked out


  // function to check after each guess if the player won the game (i.e. pts = 10) or they lose the game (i.e. lives = 0)

  const endGameCheck = () => {
    if (counter === 10 || lives === 0) {
      if (counter === 10) {
        console.log('Sweet!  You won the game!  You know your jQuery methods well!');
      } else if (lives === 0) {
        console.log('Sorry!  You lost the game!  Check out the jQuery docs to study up on your methods!');
      }
      // resetGame();
    }
  };


  // function to reset game after game was won or lost
  const resetGame = () => {

  };



}); // end of document ready