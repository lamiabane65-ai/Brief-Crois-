const openBtn = document.getElementById("button_add");
const modal = document.getElementById("modale");
const remove= document.getElementById("remove");
const workers=[];
const list =document.getElementById("workers_list");
affichageEmploye(workers)
// Ouvrir la modale
openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("open");
});

// Bouton Submit dans la modale
const submitBtn = modal.querySelector(".Submit");
submitBtn.addEventListener("click", () => {
    const nom = document.getElementById("Nom").value;
    const role = document.getElementById("role").value;
    const photo = document.getElementById("photo").value;
    const email = document.getElementById("Email").value;
    const tel = document.getElementById("Telephone").value;

    if(!nom || !role || !photo || !email || !tel){
        alert("erreur")
        return; 
    }
   workers.push({
    name:nom,
    role:role,
    photo:photo,
    email:email,
    tel:tel
   })
   
    modal.classList.add("hidden");
    modal.classList.remove("open");
    list.innerHTML = "";
    affichageEmploye(workers)
});
// btn remove 
modal.addEventListener("click",(e)=>{
    const btn = e.target;
    if(btn.closest("#remove")){
        modal.classList.add("hidden");
    }
})
 
function affichageEmploye(w){
    w.forEach(ele => {
        const profil= document.createElement("div");
        profil.classList.add("profil");
        profil.innerHTML=`
        <img src="${ele.photo}">
        <div class="info">
         <h1>${ele.name}</h1>
         <p>${ele.role}</p>
        </div> 
        `;

       list.appendChild(profil) 
    });
}