function getFirstSelector(selector){
  return document.querySelector(selector)
}


function nestedTarget(){
  return document.querySelector("#nested .target")
}

function increaseRankBy(n){
 document.querySelectorAll(".ranked-list > li")
  forEach(function(el){
  var cur = parseInt(el.innerText); 
   cur += n;
   el.innerText = cur
  })
}

function deepestChild(){
 return document.querySelector("#grand-node").lastElementChild
}