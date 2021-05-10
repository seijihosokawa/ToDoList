var draggableElements = document.getElementsByClassName("card border-primary mb-3");
//grabs all cards and calls the animate function on them
$(document).ready(function(){
    for(var i = 1; i <= draggableElements.length; i++){
        animateDiv(".card.border-primary.mb-3."+i+"");
    }
});
//makes new position for moving card
function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 190;
    var w = $(window).width() - 145;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];
}
//animates the div to move towards the new position
function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 15000,   function(){
      animateDiv(myclass);
    });

};