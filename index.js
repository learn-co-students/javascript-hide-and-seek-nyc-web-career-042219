function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function deepestChild() {
    const goingBallsDeep = document.getElementById('app');
    const helmsDeep = goingBallsDeep.querySelectorAll('div') 
    return helmsDeep[helmsDeep.length - 1]
}

function increaseRankBy(n) {
    const increaseThatB = document.getElementById('app');
    const keepGoing = increaseThatB.querySelectorAll('ul.ranked-list li');
    for(let i = 0; i < keepGoing.length; i++) {
        keepGoing[i].innerHTML = parseInt(keepGoing[i].innerHTML) + n;
        //console.log(typeof parseInt(keepGoing[i].innerHTML));
    }
}