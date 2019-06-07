function getFirstSelector(selector){
  return document.querySelector(selector)
};

function nestedTarget(){
  return document.querySelector('#nested  .target')
};

function deepestChild() {
  return document.querySelector('#grand-node  div div div div')
};

function increaseRankBy(n){
   let all = document.querySelectorAll('.ranked-list li')
   for (let i = 0; i < all.length; i++){
     all[i].innerHTML = n + parseInt(all[i].innerHTML)
   }
};
