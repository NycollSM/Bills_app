const createBtn = document.getElementById('createBtn');
const modalForm = document.getElementById('modalForm');
const dialog = document.createElement('dialog');

function dialogForm (){
    modalForm.style.display = 'block';
    dialog.setAttribute('open', 'open');

    let form = document.createElement('form');
    //Name
    const labelName = document.createElement('label');
    labelName.innerText= 'Name';
    const inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');

    //Date 
    const labelDate = document.createElement('label');
    labelDate.innerText = 'Date';
    const inputDate = document.createElement('input');
    inputDate.setAttribute('type', 'date');

    //email
    const labelEmail =  document.createElement('label');
    labelEmail.innerText = 'Email';
    const inputEmail =  document.createElement('input');
    inputEmail.setAttribute('type', 'text');

    //Description 
    const labelDescription = document.createElement('label');
    labelDescription.innerText = 'Description';
    const inputDescript = document.createElement('input');
    inputDescript.setAttribute('type', 'text');

    //Price
    const labelPrice = document.createElement('label');
    labelPrice.innerText = 'Price';
    const inputPrice = document.createElement('input');
    inputPrice.setAttribute('type', 'number');

    //Quantity 
    const labelQuantity = document.createElement('label');
    labelQuantity.innerText = 'Quantity';
    const inputQuant = document.createElement('input');
    inputQuant.setAttribute('type', 'number');

    //buttons (cancel, save)
    const cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'Cancel';
    cancelBtn.setAttribute('class', 'cancelBtn');
    const saveBtn = document.createElement('button');
    saveBtn.innerText = 'Save';
    saveBtn.setAttribute('class', 'saveBtn')


    //dom 
    form.appendChild(labelName);
    form.appendChild(inputName);
    form.appendChild(labelDate);
    form.appendChild(inputDate);
    form.appendChild(labelEmail);
    form.appendChild(inputEmail);
    form.appendChild(labelDescription);
    form.appendChild(inputDescript);
    form.appendChild(labelPrice);
    form.appendChild(inputPrice);
    form.appendChild(labelQuantity);
    form.appendChild(inputQuant);
    form.appendChild(cancelBtn);
    form.appendChild(saveBtn);
    // adding form in dialog 
    dialog.appendChild(form);
    modalForm.appendChild(dialog);
}
console.log(saveBtn);

createBtn.addEventListener('click', dialogForm);