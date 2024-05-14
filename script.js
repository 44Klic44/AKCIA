
let okonchYa=[44,43,42,34,33,32,24,23,22,4,3,2];
let okonchN=[41,31,21,1];

function contains(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}


$(document).ready(function(){
    setTimeout(function() {
        let dayNumCount=parseInt(document.querySelector('.timer-flipchart-bottom.timer-flipchart-face').innerHTML);
        let dayNum=document.querySelector('#timer-number-34c0d0a5d16a4bd0b6f1016d6dd3be7f-days');
        
        if (contains(okonchYa, dayNumCount)){
            dayNum.classList.add("dayMuch");
        }
        else if (contains(okonchN, dayNumCount)){
            dayNum.classList.add("dayLess");
        }
    
    },500);
});




//POPUP
!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {


   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');


 
   modalButtons.forEach(function(item){

   
      item.addEventListener('click', function(e) {

      
         e.preventDefault();

     
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


        
         modalElem.classList.add('active');
         overlay.classList.add('active');
      }); 

   }); 


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

   }); 


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });




}); 

window.onload = function() {
   
    document.getElementById("form").reset();
};

