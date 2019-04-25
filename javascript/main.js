(function (){
    const divContainer = document.getElementById('bills');

    function buttons(){
        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class','deleteBtn');
        deleteBtn.innerText = 'Delete';
        
        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'editBtn');
        editBtn.innerText = 'Edit';


        let search = document.createElement('input');
        search.setAttribute('class','search');
        search.setAttribute('type', 'text');

        divContainer.appendChild(deleteBtn);
        divContainer.appendChild(editBtn);
        divContainer.appendChild(search);
    } buttons();
})();

