function getFirstSelector(selector){
    return document.querySelector(selector);
}

function nestedTarget(){
    return document.querySelector('#nested .target');
}

function deepestChild(){
    const node = document.getElementById('grand-node');
    const moreNodes = node.querySelectorAll('div');
    return moreNodes[3];
};

function increaseRankBy(n){
    const node = document.querySelectorAll('.ranked-list li');
    for (let i = 0; i < node.length; i++){
        node[i].innerHTML = parseInt(node[i].innerHTML) + n
    }  
}