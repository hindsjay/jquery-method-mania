


// document ready
$(function() {


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
      options: ['closestElement()', 'closest()', 'parents()'],
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
      question: 'This method returns whether event.preventDefault() was ever called on the event object.',
      options: ['event.preventDefault()', 'event.isDefaultPrevented()', 'event.defaultPrevented()'],
      answer: 'event.isDefaultPrevented()',
      link: 'https://api.jquery.com/event.isDefaultPrevented/'
    },
    {
      question: 'This method .',
      options: ['event.stopDefault()', 'event.prevent()', 'event.preventDefault()'],
      answer: 'event.preventDefault()',
      link: 'https://api.jquery.com/event.preventDefault/'
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
      options: ['conflict()', 'removeConflict()', 'noConflict()'],
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
      options: ['className()', 'addClass()', 'classListAdd()'],
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

  // console.log(questionData);


}); // end of document ready