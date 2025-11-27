const openBtn = document.getElementById("button_add");
const buttonExperience = document.querySelector("#addExperience");
const modal = document.getElementById("modale");
const remove= document.getElementById("remove");
// button de profil X
const displayProfil = document.querySelector(".displayProfil")
const removebutton = document.getElementById("removebutton")
// form inputs
const inputName = document.querySelector("#Nom");
const inputRole = document.querySelector("#role");
const inputImage = document.querySelector("#photo");
const inputEmail = document.querySelector("#Email");
const inputTel = document.querySelector("#Telephone");
// input experience
const inputEntreprise = document.querySelector("#entreprise");
const inputPoste = document.querySelector("#poste");
const inputDateDebut = document.querySelector("#debut");
const inputDateFin = document.querySelector("#fin");
//buuton X
removebutton.addEventListener("click",()=>{
    displayProfil.classList.add("hidden");
})

const workers=[];
let experiences=[];

const list =document.getElementById("workers_list");
affichageEmploye(workers)
// Ouvrir la modale
openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("open");
});

// Ajout d'experience
buttonExperience.addEventListener("click", () => {
    document.querySelector(".experiences").style.display="flex"
})

document.querySelector("#addExperience").addEventListener("click", () => {
    const experience = {
        employerName: inputEntreprise.value,
        jobPosition: inputPoste.value,
        dateOfStart: inputDateDebut.value,
        dateOfFinish: inputDateFin.value
    }

    inputEntreprise.value = '';
    inputPoste.value = '';
    inputDateDebut.value = '';
    inputDateFin.value = '';

    experiences.push(experience);
})

// Bouton Submit dans la modale
const submitBtn = modal.querySelector(".Submit");
submitBtn.addEventListener("click", () => {
   
   workers.push({
    name: inputName.value,
    role:inputRole.value,
    photo:inputImage.value,
    email:inputEmail.value,
    tel:inputTel.value,
    exps: experiences
   })
   
   inputEntreprise.value = '';
   inputPoste.value = '';
   inputDateDebut.value = '';
   inputDateFin.value = '';
   inputName.value = "";
   inputRole.value = "";
   inputImage.value = "";
   inputEmail.value = "";
   inputTel.value = "";
   experiences = [];

   console.log(workers)

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
