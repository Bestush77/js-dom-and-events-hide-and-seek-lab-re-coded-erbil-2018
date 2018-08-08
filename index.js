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
  let selectedParent = document.querySelectorAll('.rankedList');
  for(let i = 0; i< selected.length; i++){
    selectedParentChildOfChild[i].innerText = parseInt(selectedParentChildOfChild[i].innerText) * n;
  }
  
}