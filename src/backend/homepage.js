let bgRed = true;
const changeDivColor = () => {
    let element = document.getElementById("changeDivColor");
    if(bgRed === true){
        element.classList.add("bg-yellow-400");
        element.classList.remove("bg-red-700");
        // console.log("yellow");
        bgRed = false;
    }
    else{
        element.classList.add("bg-red-700");
        element.classList.remove("bg-yellow-400");
        // console.log("red");
        bgRed = true;
    }
    // console.log("working");
}

// js for custom css
const customChange = () => {
    let element2 = document.getElementById("customChangeColor");
    element2.classList.toggle("changeInGreen");
    // console.log("working2");

}