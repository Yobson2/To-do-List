let ajouter=document.querySelector("#ajoutez");
ajouter.addEventListener('click',function(e){
    e.preventDefault();
    let barre =document.querySelector('.input');

    // console.log(barre);




    let minidiv=`<p class="taches" id="taches"> <input type="checkbox"> <span>${barre.value}</span> 
    <a href="#"><i class="fa-solid fa-trash-can"></i></a></p>`;

    let granddiv=document.querySelector('.données')
    granddiv.innerHTML+=minidiv;
    barre.value=" ";
});