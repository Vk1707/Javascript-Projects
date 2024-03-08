// DataSet For Password
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numSet = "0123456789";
const symbolSet = "~!@#$%^&*()_+=-";

// Selectors
const upperCase = document.getElementById("upper-case");
const lowerCase = document.getElementById("lower-case");
const numCase = document.getElementById("num-case");
const symbCase = document.getElementById("symb-case");
const passLength = document.getElementById("pass-length");
const passBox = document.getElementById("pass-box");

//checkedCount
let checkedCount = 0;

//Function To Get Raandom Data From DataSet
const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
};

//Function to Generate Random Password
const generatePass = (password = "") => {
    if (upperCase.checked) {
        checkedCount++;
    }
    if (lowerCase.checked) {
        checkedCount++;
    }
    if (numCase.checked) {
        checkedCount++;
    }
    if (symbCase.checked) {
        checkedCount++;
    }
    if (passLength.value < checkedCount) {
        alert(
            `You Have Extra Choose No. Of Type Of Password\n Check And Try Again `
        );
        passBox.innerHTML = "Click Generate Button";
        resetChecked();
    } else {
        if (upperCase.checked) {
            password += getRandomData(upperSet);
        }
        if (lowerCase.checked) {
            password += getRandomData(lowerSet);
        }
        if (numCase.checked) {
            password += getRandomData(numSet);
        }
        if (symbCase.checked) {
            password += getRandomData(symbolSet);
        }
        if (password.length < passLength.value) {
            resetChecked();
            return generatePass(password);
        }
        passBox.innerHTML = truncateString(password, passLength.value);
    }
};

//Call Function Onclick To Button
document.getElementById("btn").addEventListener(
    "click", 
    function () {
  generatePass(), resetChecked();
});

// function to truncate length of password
const truncateString = (str, num) => {
    if (str.length > num) {
        return str.slice(0, num);
    } else {
        return str;
    }
};

//function to reset checked Count Value
const resetChecked = () => {
    return (checkedCount = 0);
};
