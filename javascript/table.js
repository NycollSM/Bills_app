const headerTable = ['Name', 'Date', 'Total'];

function tableGenerator (){
    const tableContainer = document.getElementById('tableContainer');
    const table = document.createElement('table');

    const header = document.createElement('tr');

    for(let title of headerTable){
        let titleTxt = document.createElement('th');
        titleTxt.innerText = title;
        header.appendChild(titleTxt);
    }

    table.appendChild(header);
    tableContainer.appendChild(table);
    document.body.appendChild(tableContainer);
} tableGenerator();



function renderDATA(){
    event.preventDefault();
    //list(name, date, email, description, price, quantity);
    name = document.getElementById('inputName').value;
    date = document.getElementById('inputDate').value;
    email = document.getElementById('email').value;
    description = document.getElementById('description').value;
    price = document.getElementById('price').value;
    quantity = document.getElementById('quantity').value;
    dataArray.push({Name: name, Date: date, Email: email, Description: description, Price: price, Quantity: quantity});
    // console.log(name, date, email, description, price, quantity);
    console.log(dataArray);
    
    
}
/** 
render();
    let row = document.createElement('tr');
    for (let i of dataa){
        console.log(i);
    }
*/