//this is a box!

class Box {
    constructor(){
        let box = document.createElement('img');   

        box.src = 'assets/aBox/boxsprite.png'

        box.style.position = 'absolute'    
        box.style.left = '50px'
        box.style.top = '0px'
        box.style.width ='50px'
        box.className = 'also created with JavaScript'
        this.box = box;
        document.body.appendChild(box);
    }

}