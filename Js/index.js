// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");

// theGradient = ctx.createLinearGradient(0 , 24 , 10 , 10);

// theGradient.addColorStop(0 , "black")
// theGradient.addColorStop(1 , "yellow")
// // theGradient.addColorStop(2 , "yellow")
// // // theGradient.addColorStop(3 , "green")

// // let widthOfCanvas = window.innerWidth;
// // let heightOfCanvas = window.innerHeight;

// // ctx.strokeStyle = "blue";
// // ctx.lineWidth = 2
// // ctx.strokeStyle = theGradient;
// // ctx.strokeRect(100 , 50 , 50 , 50);
// // ctx.font = "22px Tahoma"
// // ctx.fillStyle = theGradient
// // ctx.fillText("Hakouna" , 70 , 100 , 200)

// ctx.font = "22px Tahoma"
// ctx.strokeStyle = theGradient
// ctx.strokeText("Hakouna" , 70 , 100)



// Setting
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let posX = null;
let posY = null;
let rectArr = []


function getPosition(e){
    posX = e.clientX
    posY = e.clientY
//     console.log("Iam X" , posX)
// console.log("Iam Y" , posY)

}

// console.log(posX)
// console.log(posY)

// console.log(posX)


class Rectangeles {
    constructor(x , y , dx , dy , ctx){
        this.x = x,
        this.y = y
        this.dx = dx,
        this.dy = dy,
        this.ctx = ctx,
        this.color = `hsl(${Math.floor(Math.random() * 360)} , 70% , 50%)`,
        this.speedDown = -3;
    }

    draw(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x , this.y , this.dx, this.dy)
    }


    update(posX , posY){
        // console.log(posX)
        if(this.isMouseAboveMe(posX)){
            this.dy = Math.min(-60 , posY - window.innerHeight)
            this.draw()
        }
        else{
            this.dy = Math.min(-60 , this.dy - this.speedDown)
        }
    }

    isMouseAboveMe(posX){
        return posX > this.x && posX < this.x + this.dx ;
    }
    
}


function animate(){
    ctx.clearRect(0 , 0, window.innerWidth , window.innerHeight)
    rectArr.forEach(rec =>{
        rec.update(posX , posY)
        rec.draw()

    })
    requestAnimationFrame(animate)

}

requestAnimationFrame(animate)



function rectnagele(numOfRectangele){
    let x = 0;
    let y = window.innerHeight;
    let dx = window.innerWidth / numOfRectangele;
    let dy =- 100 
    for (let i = 1; i <= numOfRectangele ; i++) {
        const rect = new Rectangeles(x , y , dx , dy , ctx)
        rect.draw()
        rectArr.push(rect);
        x += dx;
    }
    document.addEventListener("mousemove" , getPosition)

}
// console.log(rectArr)

rectnagele(70)