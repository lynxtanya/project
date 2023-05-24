'use strict';

const popup = document.querySelector('.popup');

popup.addEventListener('click', (e) => {

    if(e.target.classList.contains('btn-more')) {
        
        popup.classList.toggle('active');
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
  
  