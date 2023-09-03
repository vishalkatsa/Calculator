let x = "";
let ispercentage = false;
let firVal;




let ButtonValue = document.querySelectorAll('.All-button-class');
Array.from(ButtonValue).forEach((Data1) => {
    Data1.addEventListener("click", (v) => {
        // console.log(v.target)

        if (v.target.innerHTML === '=') {
            if (ispercentage) {
                let per = (firVal * x) / 100;
                x = per
                document.querySelector('.inputvk').value = x;
                ispercentage = false;
                return
                // console.log(firVal , x , per)
            }
            x = eval(x)
            document.querySelector('.inputvk').value = x;
        }
        else if (v.target.innerHTML === '%') {
            ispercentage = true
            firVal = x;
            console.log("pv", firVal)
            x = ""

            // x =   (x * sec) / 100;

        }
        else if (v.target.innerHTML === "DEL") {
            x = x.slice(0, -1)
            document.querySelector('.inputvk').value = x;

        }
        
        /////////////////////////// single + - * / Code ////////////////////////////////
        else if (['*', '+', '-', '/'].includes(v.target.value)) {

            let inputElement = document.querySelector('.inputvk');

            let inputValue = inputElement.value;

            let lastCharacter = inputValue.charAt(inputValue.length - 1);

            if (['*', '+', '-', '/'].includes(lastCharacter) && ['*', '+', '-', '/'].includes(v.target.value)) {
                inputValue = inputValue

            } else {
                inputValue += v.target.value;
                x = inputValue

            }
            inputElement.value = inputValue;


        }

        else if (v.target.innerHTML == "C") {
            x = "";
            document.querySelector('.inputvk').value = x;
        }
        else {
            if (x.charAt(0) == '0') {
                x = x.slice(1, 0)
            }
            x = x + v.target.innerHTML;
            console.log("input", x)
            document.querySelector('.inputvk').value = x;
        };


    })
})

// document.getElementById("gg").innerHTML = 80 * 10 / 100