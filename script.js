var selectedRow = null;

//show alerts
function showAlert(message, className){
    const  div = document.createElement("div");
    div.className = `alert alert-${className}`

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main")
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(),3000);
}
//clear All fields
function clearFields(){
    document.querySelector("firstName").value="";
    document.querySelector("lastName").value="";
    document.querySelector("Rollnum").value="";
}

//Adding data
document.querySelector("#student-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    //Get Form Values
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const Rollnum = document.querySelector("#Rollnum").value;

    //validate
    if(firstName == "" || lastName == "" || Rollnum == ""){
        showAlert("Please fill in all fields", "danger");
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${Rollnum}</td>
                <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("student Added", "sucess");
        }
        else{
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = lastName;
            selectedRow.children[2].Rollnum = Rollnum;
            selectedRow = null;
            showAlert("Student  info edited", "info");
        }
        clearFields();
    }
});


//Edit data
document.querySelector("student-list").addEventListener("click",(e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#firstName").value = selectedRow.children[0].textContent;
        document.querySelector("#lastName").value = selectedRow.children[1].textContent;
        document.querySelector("#Rollnum").value = selectedRow.children[2].textContent;

    }
});


//Delete Data
document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted", "danger");
    }
})


