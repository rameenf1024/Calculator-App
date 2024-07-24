let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

// first we make a empty string and then make array to call buttons
let string = "";
let arr = Array.from(buttons);

//here we used forEach function to call each

arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
 
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;

        }

        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
            
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})