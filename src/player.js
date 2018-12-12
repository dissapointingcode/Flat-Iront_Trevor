 class Player {   
        //draw the player
        constructor(){
            let player = document.createElement('img')

            player.src = `assets/character/static.gif` 
    
            player.style.position = 'absolute'
            player.style.left = '0px'
            player.style.top = '0px'
            player.style.width = "50px"
            player.className = 'created with JavaScript'
            this.player = player
            document.body.appendChild(player);
        }   
//movement
 walkWest() {
    stop()

    movement = setInterval(()=> {
        if (checkCollision(playerdim,aBoxdim)) {
        let currentXval = parseInt (this.player.style.left);
        this.player.style.left = currentXval + -1 + "px";
    }
    },15)

    console.log(movement);

this.player.src = 'assets/character/walkleft.gif';
}
 walkNorth() {
    stop()
    movement = setInterval(()=> {
        if (checkCollision(playerdim,aBoxdim)) { 
    let currentYval = parseInt (this.player.style.top);
this.player.style.top = currentYval + -1 + "px";
}    
},15)

    console.log(movement);
    
this.player.src = 'assets/character/walkup.gif';
}
 walkSouth() {
    stop()
    movement = setInterval(()=> {
        if (checkCollision(playerdim,aBoxdim)) {{
    let currentYval = parseInt (this.player.style.top);
this.player.style.top = currentYval + 1 + "px";
}    
}
    },15)

    console.log(movement);
    this.player.src = 'assets/character/walkdown.gif';
}
 walkEast(){
    stop()

    movement = setInterval(()=>{
        if (checkCollision(playerdim,aBoxdim)) {
        
        let currentXval = parseInt(this.player.style.left)

    this.player.style.left = currentXval + 1 + 'px'
        }
    }, 15)

     console.log(movement)

this.player.src = `assets/character/walkright.gif`
}
     

        
    }
