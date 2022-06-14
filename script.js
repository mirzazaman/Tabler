// get elements of Html
let input1 = document.getElementById("firstNum");
let input2 = document.getElementById("secondNum");
let btn = document.getElementById("btn");
let table = document.getElementById("table");
// ------------------------

// click listener Added to Add Btn
btn.addEventListener('click', addTable);
// ----------

// start of game
function addTable(){
// taken input from user
    let firstValue = input1.value.trim();
    let secondValue = input2.value.trim();
// ------------

// if user not enter any value it will not run
    if (firstValue.length === 0 || secondValue.length === 0){
        return;
    }
// ------------

// empty input after taken
    input1.value = "";
    input2.value = 10;
// --------------

// Elements created for Clear Button
    let conDiv = document.createElement("div");
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let clear = document.createElement("h4");
// ---------------

    clear.innerText = "Clear";

// Set attributes to apply function and Styles
    conDiv.setAttribute("id","conDiv");
    clear.setAttribute("onclick","clearContainer(this)");
    clear.setAttribute("id","clearBtn")
// ----------

// child Appended
    table.appendChild(conDiv);
    conDiv.appendChild(tr);
    tr.appendChild(td);
    td.appendChild(clear);
// ---------

// main Item
    for (let i = 1; i <= secondValue; i++){
        
        result = firstValue * i ;

        let tr2 = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');

        td1.innerText = firstValue;
        td2.innerText = "*";
        td3.innerText = i;
        td4.innerText = "=";
        td5.innerText = result;

        conDiv.appendChild(tr2);
        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);
        tr2.appendChild(td4);
        tr2.appendChild(td5);


    }
}

// clear table
function clearContainer(para1){
    para1.parentNode.parentNode.parentNode.remove();
}
// -----------

// on Enter press
function enter(e) {
    if (e.keyCode === 13) {
        addTable();
    }   
   }