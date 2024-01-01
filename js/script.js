function addStudent(){
    var name = document.querySelector("#name").value;
    var roll = document.querySelector("#roll").value;
    var course = document.querySelector("#course").value;
    
    if(name === ""){
        alert("Name field is Empty !");
        
    } else if(roll === ""){
        alert("Roll Number field is Empty !");
    } else if(course === ""){
        alert("Course field is Empty !");
    }
    else{
        var table = document.querySelector("#studentTable").getElementsByTagName("tbody")[0];
        var newRow = table.insertRow(0);
        var newCell1 = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(1);
        var newCell3 = newRow.insertCell(2);
        newCell1.innerHTML = name;
        newCell2.innerHTML = roll;
        newCell3.innerHTML = course;
    }
    
}
var buttonSubmit = document.querySelector("#buttonSubmit");

buttonSubmit.addEventListener("click", function(){
    let nameClean = document.querySelector("#name").value;
    let rollClean = document.querySelector("#roll").value;
    let courseClean = document.querySelector("#course").value;
    if(nameClean !== "" && rollClean !== "" && courseClean !== ""){
        document.querySelector("#name").value = "";
        document.querySelector("#roll").value = "";
        document.querySelector("#course").value = "";
    }
})


var buttonClear = document.querySelector("#buttonClear");
function clearStudent(){
    let nameClean = document.querySelector("#name").value;
    let rollClean = document.querySelector("#roll").value;
    let courseClean = document.querySelector("#course").value;
    if(nameClean === "" && rollClean === "" && courseClean === ""){
        alert("Nothing to clear.");
    }else{
        document.querySelector("#name").value = "";
        document.querySelector("#roll").value = "";
        document.querySelector("#course").value = "";        
    }
}