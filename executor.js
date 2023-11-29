function check(input){
    let button = document.getElementById(input);
    let val = button.getAttribute("id");
    // console.log(val)
    let screen = document.getElementById("screen");
    screen.value += val;
}

function deleteone(){
    let screen = document.getElementById("screen");
    let display = screen.value.toString()
    screen.value = display.substring(0,display.length-1)
}

function evaluate(){
    let screen = document.getElementById("screen");
    let display = screen.value.toString();
    screen.value = math.evaluate(display);
}

function clearall(){
    let screen = document.getElementById("screen");
    screen.value = '';
}

function activate(){
    //========= input number =======================
    let buttons = document.getElementsByClassName("buttin");
    for ( let abutt of buttons){
        let v = abutt.getAttribute("id");
        abutt.addEventListener("click", function (){check(v)}) // very important step create an anonymous function.
		// abutt.addEventListener("click", check())
    }

    //========= delete text ========================
    let todel = document.getElementById("leftarr");
    todel.addEventListener('click',deleteone)
    
    //========= clear text ========================
    let clear = document.getElementById("clear");
    clear.addEventListener('click',clearall)

    //========== calculate ==========================
    let solve = document.getElementById("equal");
    solve.addEventListener('click',evaluate)
}

activate()