//alert("Loading");
function addNewWEField() {
    //console.log("Adding New field");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder','Enter here')

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQfield() {
    //console.log("Adding New field");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder','Enter here')

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);

}

//generate CV
function generateCV(){
    //console.log("Generating CV");

    let nameField = document.getElementById("namefield").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
    document.getElementById('nameT2').innerHTML = nameField;
    document.getElementById('contactT').innerHTML = document.getElementById('contactfield').value;
    document.getElementById('addressT').innerHTML = document.getElementById('addressfield').value;
    document.getElementById('fbT').innerHTML = document.getElementById('fbfield').value;
    document.getElementById('instaT').innerHTML = document.getElementById('instafield').value;
    document.getElementById('LinkedT').innerHTML = document.getElementById('linkedfield').value;
    document.getElementById('objectiveT').innerHTML = document.getElementById('objectivefield').value;
    let wes = document.getElementsByClassName('wefield');
    let str='';
    for(let e of wes){
        str = str+`<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML = str;
    let aqs = document.getElementsByClassName('aqField');
    let st = '';
    for(let e of aqs){
        st = st+`<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML = st;

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
}

function printCV(){
    window.print();
}