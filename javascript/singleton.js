let dataArray = [];
let table = (function Singleton (){

})();

function dragnDrop() {
   // console.log(names);
    for (let i= 0; i < dataArray; i++) {
        console.log(i);
        i.setAttribute('class', 'hola');
        dataArray[i].addEventListener('click', function(){
            console.log('v');
        })
    }
    let dragged;

    document.addEventListener("dragstart", function(event) {
    dragged = event.target;
    }, false);

    document.addEventListener("dragover", function(event) {
    event.preventDefault();
    }, false);

    document.addEventListener("drop", function(event) {
        if (event.target.className == "table") {
            event.target.appendChild( dragged);
            ContainerSongs.push(event);
        }
    }, false);
}dragnDrop();