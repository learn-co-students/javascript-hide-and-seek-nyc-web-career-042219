function getFirstSelector(selector){

    return document.querySelector(selector);
}

function nestedTarget(){
    return document.querySelector('#nested .target')
}

function deepestChild(){
    let item = document.getElementById('grand-node').querySelectorAll('div')
    for (let i = 0; i < item.length; i++){
      if (item[i].querySelectorAll('div').length < 1){
          var deepest = (item[i])}
    }
    return deepest;
}

function increaseRankBy(n){
    const lis = document
  .querySelectorAll('ul.ranked-list li');
 
    for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
    }
}