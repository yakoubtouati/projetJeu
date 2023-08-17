
let nouveauJeu=document.querySelector(".btn-nouveau")
let lancerDe=document.querySelector(".btn-lancer")
let commuter=document.querySelector(".btn-commuter")
let imgDe=document.querySelector(".de")
imgDe.style.display="none"
let scoresGlobals=[0,0]
let scoreEnCours=0;
let joueurActif=1
let jouer = true;


window.addEventListener("load",()=>{


})

let btnNouveauJeu = document.querySelector('.btn-nouveau');
 btnNouveauJeu.addEventListener('click',()=>{
    initial()
    lancerDe.disabled=false
 });

 lancerDe.addEventListener("click",()=>{ 
 if(jouer){
    let x=Math.floor(Math.random()*6)+1
    imgDe.style.display="block"
   imgDe.src=`images/de-${x}.png`
   if (x!=1){
        scoreEnCours+=x
        document.getElementById(`encours-${joueurActif}`).textContent=scoreEnCours
    }
    else{
       joueurSuivant()
    }
 }
 })

  commuter.addEventListener("click",()=>{
    if(jouer){
    scoresGlobals[joueurActif - 1] += scoreEnCours;
    document.getElementById(`score-${joueurActif}`).textContent=scoresGlobals[joueurActif-1];
    if (scoresGlobals[joueurActif - 1] >= 100) {
    document.getElementById(`nom-${joueurActif}`).textContent = 'Bravo !!!'; 
    document.querySelector('.de').style.display = 'none';
    lancerDe.disabled = true;
     document.querySelector(`.joueur-${joueurActif}-panel`).classList.add('vainqueur'); 
    document.querySelector(`.joueur-${joueurActif}-panel`).classList.remove('active');
  }
  else{
    joueurSuivant();
}
    }
  })


// =================== FUNCTIONS ========================

 function joueurSuivant() {
    joueurActif === 1 ? joueurActif = 2 : joueurActif = 1;
    scoreEnCours = 0;
    document.getElementById(`encours-${joueurActif}`).textContent = '0';
    document.querySelector('.joueur-1-panel').classList.toggle('active');
    document.querySelector('.joueur-2-panel').classList.toggle('active');
    document.querySelector('.de').style.display = 'none';
 }

 function initial(){
    scoresGlobals = [0, 0]; scoreEnCours = 0; joueurActif = 1;
    document.querySelector('.de').style.display = 'none';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-2').textContent = '0';
    document.getElementById('encours-1').textContent = '0'; 
    document.getElementById('encours-2').textContent = '0';
    document.getElementById('nom-1').textContent = 'Joueur 1';
    document.getElementById('nom-2').textContent = 'Joueur 2';
    document.querySelector('.joueur-1-panel').classList.remove('vainqueur');
    document.querySelector('.joueur-2-panel').classList.remove('vainqueur');
    document.querySelector('.joueur-2-panel').classList.remove('active');
    document.querySelector('.joueur-1-panel').classList.add('active');

 }