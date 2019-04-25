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
    const td = document.createElement('td');
        for (let information of dataArray){
            const trName = document.createElement('tr');
            trName.innerText = information.Name;
            const trDate = document.createElement('tr');
            trDate.innerText = information.Date;
            const trPrice = document.createElement('tr');
            trPrice.innerText = information.Price;
            console.log('information',information);
            td.setAttribute( 'draggable','true');
            td.setAttribute('ondragstart', "event.dataTransfer.setData('text/plain',null)");

            //rendering data in dom 
            td.appendChild(trName);
            td.appendChild(trDate);
            td.appendChild(trPrice);
            console.log('td' , td);
            //this.tableGenerator.table.appendChild(td);
        }
    
   
    
    
}
/** 
render();
    let row = document.createElement('tr');
    for (let i of dataa){
        console.log(i);
    }
*/