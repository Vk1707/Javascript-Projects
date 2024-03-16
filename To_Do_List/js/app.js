// Selectors
const addBtn = document.querySelector("#btn");
const ulList = document.querySelector("#todoBox");
const inputs = document.querySelector("input");


inputs.addEventListener(
    "keyup",
    function(event) {
        if (event.key == "Enter") {
            addToDO();
        }
    }
)

addBtn.addEventListener(
    "click",
    function(){
        addToDO()
    }
);


const addToDO = () => {
    if(inputs.value == ""){
        return;
    }
        const listItem = document.createElement("li")
        listItem.innerHTML =`
        ${inputs.value}
        <i class="remove fa-solid fa-circle-xmark"></i>
        `;
    
        ulList.appendChild(listItem);
        // console.log(todo);
        inputs.value ="";

        listItem.addEventListener(
            "click",
            function() {
                this.classList.toggle("listStyle");
            }
        )

        listItem.querySelector("i").addEventListener(
            "click",
            function(){
                listItem.remove()
            }
        )

}