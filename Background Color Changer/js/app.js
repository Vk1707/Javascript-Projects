//Function for Color

const getColor = () =>{
    //Hex Code Generator
    const randomNum = Math.floor(Math.random() * 16777215);

    const colorCode = "#" + randomNum.toString(16);
    // console.log(randomNum, colorCode);

    document.body.style.backgroundColor = colorCode ;
    document.getElementById("cCode").innerHTML = 'Color Code is : ' + colorCode;
}

// Initialize Function
getColor();


//Automatic Color Change
// setInterval( () => {
//     getColor();
// },1000
// )