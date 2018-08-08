function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget () {
  return document.querySelector('#nested').querySelector('.target');
}


function deepestChild () {
  let deepestChildElement = document.getElementById('grand-node');
  let nextChild = deepestChildElement.children[0];
  for(;nextChild;){
  deepestChildElement = nextChild;
  nextChild = nextChild.children[0];
  }
  
  return deepestChildElement;
}



function increaseRankBy(n) {
  let parent = document.querySelectorAll('.rankedList');
  for(let i = 0; i< parent.length; i++){
    let child = parent[i].children;
    for(let i = 0; i< parent.length; i++){
      child[i].innerHTML = parseInt(child[i].innerHTML) * n;
     }
  }
}