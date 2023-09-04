// "use strict"
let string = "";

let ispercentage = false;
let firvalue;

let Allbuttons = document.querySelectorAll('.All-button-class');
Array.from(Allbuttons).forEach(function(LisClick){
    
        LisClick.addEventListener('click', function(e){

            if(e.target.innerHTML === '='){
               if(ispercentage) {
                    let Per = (firvalue * string)/100;
                    string = Per;
                    document.querySelector('.inputvk').value = string
                }
                /////////////////////////////////////////////
                string = eval(string)
                document.querySelector('.inputvk').value = string;
            }
            else if (e.target.innerHTML === "%"){
                ispercentage = true;
                firvalue = string ;
                string = ""
            }
///////// esle if for Double (+ ,- , * , /) stop /////////////
            else if(['+','-','*','/'].includes(e.target.value)){
                let displayE = document.querySelector('.inputvk');
                let inputX = displayE.value;

                let RemoveDoubel = inputX.charAt(inputX.length -1);
                if(['+','-','*','/'].includes(RemoveDoubel) && ['+','-','*','/'].includes(e.target.value)){
                    inputX = inputX
                } 
                else {
                    inputX += e.target.value;
                    string = inputX
                }
                displayE.value = inputX;
            }
///////// else if for Clean(C) //////////////
            else if(e.target.innerHTML === 'C'){
                string = "";
                document.querySelector('.inputvk').value = string;
            }
///////// else if for Delete (DEL) //////////
            else if (e.target.innerHTML === "DEL"){
                string = string.slice(0,-1);
                document.querySelector('.inputvk').value = string;            
            }
///////// Default //////////////////////////
            else{
///////// remove before 0 ////////////
                if(string.charAt(0) == '0'){
                  string = string.slice(1,0)
                }
                string = string + e.target.innerHTML;
                document.querySelector('.inputvk').value = string;

            }
 
 
            
        })
    });


        

