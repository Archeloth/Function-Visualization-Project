function Init(){
    const canvas = document.getElementById('mainCanvas');

    if(canvas.getContext){
        const ctx = canvas.getContext('2d');
        //Clear and reset everything
        ctx.clearRect(0,0,1200,1200);
        ctx.fillStyle = "rgb(0,0,0)";
        //Draw the base
        
        //Vertical line
        ctx.fillRect(300,0,1,1200);

        //Horizontal line
        ctx.fillRect(0,300,1200,1);

        //Scale text
        ctx.font = "10px monospace";
        ctx.fillText('-300',0,310);
        ctx.fillText('300',580,310);
        ctx.fillText('300',310, 10);
        ctx.fillText('-300', 310, 595);
    }
}
function Calc(){
    const input = document.getElementById('inputField');
    if(input.value == ""){//Checks if the input field is empty
        alert('Fill in the input field!')
    }//Here comes other data validation logic
    else{//Trying to draw values in the scale of the canvas
        const canvas = document.getElementById('mainCanvas');

        if(canvas.getContext){
            const ctx = canvas.getContext('2d');

            if(input.value.indexOf("x") >=0){
                //console.log("Input X index: "+input.value.indexOf("x"));
                ctx.beginPath();
                ctx.moveTo(0,600);
                for (let i = 300; i >= 0; i--){
                    if(input.value.indexOf("x")==0){
                        ctx.lineTo(300+i,300-i);
                        //console.log((300+i)+":"+(300-i));
                    }
                    else{
                        ctx.lineTo(300+i,(-300*(input.value.charAt(input.value.indexOf("x")-1)) - (input.value.charAt(input.value.indexOf("x")-1) * - i)));//Gets the multiplier before the X
                        //console.log((300+i)+":"+(-300*(input.value.charAt(input.value.indexOf("x")-1)) - (input.value.charAt(input.value.indexOf("x")-1) *  - i)));
                    }
                }
                ctx.closePath();
                ctx.stroke();
            }
            else{//Linear horizontal line
                ctx.fillStyle="rgb(255,0,0)";
                ctx.fillRect(0, 300 - input.value, 1200, 1);
            }
        }
    }
}