
    const getFirstSelector = function(selector){
    return document.querySelector(selector)
    }
    const nestedTarget = function(){
        return document.querySelector("#nested .target")
    }

    const deepestChild = function(){

        let node = document.getElementById('grand-node')
        let node2 = node.children[0]

        while(node2){
            node = node2
            node2 = node.children[0]
        }
        return node
    }

    function increaseRankBy(n){
        const rankedList = document.querySelectorAll('.ranked-list')
        for(let i = 0, l = rankedList.length; i < l; i++ ){
            let children = rankedList[i].children

        for (let j = 0, k = children.length; j < k; j++)
        children[j].innerHTML = parseInt(children[j].innerHTML) + n 

        }
    }
