let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

let screenValue = '';
const sine = () => {
    var x = eval(screen.value);
    console.log("x value is..", x)
    // x = x * Math.PI / 180;
    screen.value = Math.sin(x);
    screenValue = screen.value
}
const cosine = () => {
    var x = eval(screen.value);
    console.log("x value is..", x,  Math.cos(x))
    // x = x * Math.PI / 180;
    screen.value = Math.cos(x);
    screenValue = screen.value
}
const square = () => {
    let y = screen.value
    var x = eval(y * y);
    screen.value = x
    screenValue = x
}
const expont = () => {
    screen.value += "^"
    screenValue = screen.value
    console.log("Exponent value ", screenValue)
}
const squareRoot = () => {
    screen.value = Math.sqrt(screen.value)
    screenValue = screen.value
}
const syntaxError = () => {
    if (eval(screen.value) == SyntaxError || eval(screen.value) == ReferenceError || eval(screen.value) == TypeError) {
        screen.value == "Syntax Error";
    }
}
const tan = () => {
    screen.value = Math.tan(screen.value);
}
const log = () => {
    screen.value = Math.log10(screen.value);
}
const ln = () => {
    screen.value = Math.log(screen.value);
}
const pi = () => {
    screen.value = (screen.value * Math.PI);
}
const  radians =()=> {
    screen.value = screen.value * (Math.PI / 180);
  }
const degrees =()=> {
    screen.value = screen.value * (180 / Math.PI);
  }
const factorial =() => {
    var number = 1;
    if (screen.value === 0) {
      screen.value = "1";
    } else if (screen.value < 0) {
      screen.value = "undefined";
    } else {
      var number = 1;
      for (var i = screen.value; i > 0; i--) {
        number *=  i;
      }
      screen.value = number;
    }
  }
 const backSpace =()=>{
    screen.value = screen.value.slice(0, - 1);
}
for (item of buttons) {

    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == '÷') {
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            //  separate  base and exponent 
            if ((screen.value).indexOf("^") > -1) {
                // separate base as a before the value of ^ using slice method
                var base = (screen.value).slice(0, (screen.value).indexOf("^"));
                console.log("base", base)
                // separate exponent as after the value of ^ using slice method
                var exponent = (screen.value).slice((screen.value).indexOf("^") + 1);
                console.log("exponent vl", exponent)
                //  eval function evalute only  string value  that's  why we use Math.pow inside the string
                let pwval = "Math.pow(" + base + "," + exponent + ")"
                console.log("pwval", pwval)
                let evl = eval(pwval)
                console.log("evl is ..", evl)
                screen.value = eval(pwval);

            } else {
                screen.value = eval(screen.value)

                syntaxError()
            }
            // screen.value = eval(screenValue);
        } else if (buttonText == "sin") {
            sine()

        } else if (buttonText == "cos") {
            cosine()
        } else if (buttonText == "x ²") {
            square()
        } else if (buttonText == "x^") {
            expont()
        } else if (buttonText == "√") {
            squareRoot()
        } else if (buttonText == "tan") {
            tan()
        } else if (buttonText == "log") {
            log()
        } else if (buttonText == "ln") {
            ln()
        } else if (buttonText == "π") {
            pi()
        }else if (buttonText == "x!") {
            factorial()
        }else if (buttonText == "CE") {
            backSpace()
        }else if (buttonText == "Rad") {
           radians()
        }else if (buttonText == "Deg") {
            degrees()
         }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

