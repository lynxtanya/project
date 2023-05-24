'use strict';

const post = document.querySelector('.post');
const form = document.querySelector('.comment-form');
const formName = document.getElementById('autor');
const formComment = document.getElementById('comment');
const requiredFields = document.querySelectorAll('.required');
const formDataEl = document.querySelector('.form-data');
const box = document.querySelector('.form-data');

const EMPTY_FIELD = 'The field is empty';

post.addEventListener('click', (event) => {

    if(event.target.classList.contains('btn-comment')) {
        form.classList.add('active-form');
    } 
    
});

function printError(el, errorMessage) {
    if (errorMessage) {
        form.elements[el].classList.add('has-error');
    } else {
        form.elements[el].classList.remove('has-error');
    }
    form.elements[el].parentElement.querySelector('.error-text').textContent = errorMessage;
}

function sendFormToHTML() {
    console.log('valid');

    for (let i = 0; i < form.elements.length - 1; i++) {
        const div = document.createElement('div');
        let formElementValue = form.elements[i].value;

        div.textContent = `${form.elements[i].name}: ${formElementValue}`;
        formDataEl.append(div);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formValid = true;
    const btnComment = document.querySelector('.btn-comment');

    // Check the Errors
    requiredFields.forEach((field) => {
        if (field.value === '') {
            printError(field.id, EMPTY_FIELD);
            formValid = false;
        }
    });
    
    if (formValid) {
        sendFormToHTML();
        form.classList.remove('active-form');
        btnComment.classList.add('hidden');
    }
    
});

formName.addEventListener('input', (e) => {
    if (e.target.value.length > 0) {
        printError('autor', '');
    }
});

formComment.addEventListener('input', (e) => {
    if (e.target.value.length > 0) {
        printError('comment', '');
    }
});

function Voter(options) {
    var elem = options.elem;

    var voteElem = elem.querySelector('.vote');

    elem.onclick = function(event) {
      if (event.target.closest('.down')) {
        voteDecrease();
      } else if (event.target.closest('.up')) {
        voteIncrease();
      }
    }

    elem.onmousedown = function() {
      return false;
    };

    function voteDecrease() {
      voteElem.innerHTML = +voteElem.innerHTML - 1;
    }

    function voteIncrease() {
      voteElem.innerHTML = +voteElem.innerHTML + 1;
    }

    this.setVote = function(vote) {
      voteElem.innerHTML = +vote;
    };

  }

  var voter = new Voter({
    elem: document.getElementById('voter')
  });
  voter.setVote(0);








