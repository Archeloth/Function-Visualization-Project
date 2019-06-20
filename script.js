//Variables
const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');
ctx.transform(1,0,0,-1,canvas.width/2,canvas.height/2);//Flip around the coordinate system so its realistic now (easier to model) and sets up 0;0 where it should be

const input = document.getElementById('inputField');

function Init(){
    if(canvas.getContext){
        
        //Clear and reset everything
        ctx.clearRect(-300,-300,600,600);
        ctx.fillStyle = "rgb(0,0,0)";


        //Draw the base
        
        //Vertical line
        ctx.fillRect(-300,0,600,1);

        //Horizontal line
        ctx.fillRect(0,-300,1,600);

        //Scale text
        ctx.font = "10px monospace";
        ctx.fillText('-300',-290,-10);
        ctx.fillText('300',280,-10);
        ctx.fillText('300',10,-290);
        ctx.fillText('-300',10, 290);

        //Center point
        ctx.fillRect(-5,-5,10,10);
    }
}
function Calc(){
    if(input.value == ""){//Checks if the input field is empty
        alert('Fill in the input field!')
    }//Here comes other data validation logic
    else{//Trying to draw values in the scale of the canvas
        if(canvas.getContext){

            ctx.strokeStyle = "rgb(255,0,0)";

            if(input.value.indexOf("x") >=0){
                //There is something before the X value
                //console.log("Input X index: "+input.value.indexOf("x"));
                ctx.beginPath();

                //gets the first (x = -300) point and starts drawing from there
                let x=-300;
                let result = eval(input.value);
                ctx.moveTo(-300,result);
                
                
                for (let i = -299; i <= 300; i++){
                    x = i;
                    result = eval(input.value);

                    ctx.lineTo(i,result);
                    //console.log((i)+":"+(result));
                }
                ctx.closePath();
                ctx.stroke();
            }
            else{//Linear horizontal line
                ctx.fillStyle="rgb(255,0,0)";
                ctx.fillRect(-300,  input.value, 600, 1);
            }
        }
    }
}