var playerdim;
var aBoxdim;

        let aBox = new Box();
        let characterElement = new Player();

let movement; // Why would I declare "movement" here and not inside of the function walkEast?
        
            document.addEventListener('keydown', function(e){
                aBoxdim = {x: parseInt(aBox.box.style.left), y: parseInt(aBox.box.style.top), w: 50, h: 50};
                playerdim = {x: parseInt(characterElement.player.style.left), y: parseInt(characterElement.player.style.top), w: 50, h: 77};

                if(e.key == "ArrowLeft") {
                    characterElement.walkWest();
                }
                if(e.key == "ArrowRight") {
                    characterElement.walkEast();
                }
                if(e.key == "ArrowUp") {
                    characterElement.walkNorth();
                }   
                if(e.key == "ArrowDown") {
                    characterElement.walkSouth();
                }
                
            })
            document.addEventListener("keyup", stop);
         

       
        

        
        function stop(){
            clearInterval(movement)
            characterElement.player.src = `assets/character/static.gif`
        }

let oldPx = characterElement.player.style.top;
let oldPy = characterElement.player.style.left;
let dirCol = "it hasnt moved"; //save the directional collision as a string to be read later
//collisions
function checkCollision (dim1,dim2) {
    let newPx = dim1.x;
    let newPy = dim1.y;
    
    // var playerdim = Crafty.e("2D, Canvas").attr(playerdim);
    // var aBoxCollBox = Crafty.e("2D, Canvas").attr(aBoxdim);
    //dim1 = playerdim while dim2 = boxdim. w - width h = height;
    if (dim1.x < dim2.x + dim2.w && //if player x is less then box x + box width
        dim1.x + dim1.w > dim2.x && //if player x + player width is greater than box x
        dim1.y < dim2.y + dim2.h && //if player y is less than box y plus box height
        dim1.h + dim1.y > dim2.y) { //if player height plus player y is greater then box y
        // collision detected!
        //check which direction player just moved   
        if (newPx < oldPx) {  
            dirCol = "just moved left";
            characterElement.player.style.left = dim2.x + dim2.w + 1 + "px";
        }
        if (newPx > oldPx) { 
            dirCol = "just moved right";
            characterElement.player.style.left = dim2.x - 1 + - dim1.w + "px";
        }
        if (newPy < oldPy) {
            dirCol = "just moved up";   
            characterElement.player.style.top = dim2.y + dim2.h + 1 + "px";
        }     
        if (newPy > oldPy)   {     
            dirCol = "just moved down"; 
            characterElement.player.style.top = dim2.y - 1 - dim1.h + "px";
        }

        oldPy = newPy;
        oldPx = newPx;  
        console.log(dirCol);     
       return  false;
    } else {
        // no collision
        oldPy = newPy;
        oldPx = newPx; 
        return true;
    }
    
  
};