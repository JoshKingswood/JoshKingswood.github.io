
var currentPage = 0;
var page = document.querySelector(".page");

document.querySelector(".left-button").style.visibility = "hidden";

//var origin = parseInt(window.getComputedStyle(page).left, 10);

document.querySelector( ".right-button" ).addEventListener("click", callShiftLeft);
document.querySelector( ".left-button" ).addEventListener("click", callShiftRight);

document.querySelector( ".page" ).addEventListener("transitionend", function(){
  document.querySelector( ".right-button" ).addEventListener("click", callShiftLeft);
  document.querySelector( ".left-button" ).addEventListener("click", callShiftRight);
 });


function callShift(direction){
  shift(direction);
  document.querySelector( ".right-button" ).removeEventListener("click", callShiftLeft);
  document.querySelector( ".left-button" ).removeEventListener("click", callShiftRight);
}

function callShiftLeft(){
  callShift("left");
  currentPage = currentPage + 1;

}

function callShiftRight(){
  callShift("right");
  currentPage = currentPage - 1;
}


//////////////////////////////////////////////////////////////////////////////////////////
function shift(direction) {

    var pages = document.querySelectorAll(".page");

    for (var i = 0; i < pages.length; i++)
          {
            var offset = parseInt(window.getComputedStyle(pages[i]).left, 10);
            var vw = window.innerWidth;
            var newoffset = 0;

                  if (direction === "left")
                    {
                    newoffset = offset - vw;
                    }

                  if (direction === "right")
                    {
                     newoffset = offset + vw;
                    }
              pages[i].style.left = newoffset + 'px';
          }

          if(currentPage === 2 && direction === "left")
          {
            document.querySelector( ".right-button" ).style.visibility = "hidden";
          }
          else
          {
            document.querySelector( ".right-button" ).style.visibility = "visible";
          }
          if(currentPage === 1 && direction === "right")
          {
            document.querySelector(".left-button").style.visibility = "hidden";
          }
          else
          {
              document.querySelector(".left-button").style.visibility = "visible";
          }
}
//////////////////////////////////////////////////////////////////////////////////////////////////
