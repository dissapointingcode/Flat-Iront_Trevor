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


//collisions
function checkCollision (dim1,dim2) {

    
    // var playerdim = Crafty.e("2D, Canvas").attr(playerdim);
    // var aBoxCollBox = Crafty.e("2D, Canvas").attr(aBoxdim);
    if (dim1.x < dim2.x + dim2.w &&
        dim1.x + dim1.w > dim2.x &&
        dim1.y < dim2.y + dim2.h &&
        dim1.h + dim1.y > dim2.y) {
        // collision detected!
       return  false;
    } else {
        // no collision
        return true;
    }
};