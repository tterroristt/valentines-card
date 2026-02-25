const envelope=document.getElementById('envelope');
const flap=document.getElementById('flap');
const letter=document.getElementById('letter');
const seal=document.getElementById('seal');
const yesBtn=document.getElementById('yesBtn');
const noBtn=document.getElementById('noBtn');
const questionText=document.getElementById('questionText');
const overlay=document.getElementById('nameOverlay');
const canvas=document.getElementById('confetti');
const ctx=canvas.getContext('2d');

let opened=false;
let confetti=[];
canvas.width=innerWidth;
canvas.height=innerHeight;

window.addEventListener('resize',()=>{
  canvas.width=innerWidth;
  canvas.height=innerHeight;
});

function updateCountdown(){
  const now=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Manila"}));
  let valentines=new Date(now.getFullYear(),1,14);
  if(now>valentines){valentines=new Date(now.getFullYear()+1,1,14);}
  const diff=valentines-now;
  const d=Math.floor(diff/(1000*60*60*24));
  const h=Math.floor((diff/(1000*60*60))%24);
  const m=Math.floor((diff/(1000*60))%60);
  document.getElementById('countdown').innerText=
  `${d}D ${h}H ${m}M UNTIL VALENTINE'S DAY`;
}
setInterval(updateCountdown,1000);
updateCountdown();

function startExperience(){
  overlay.classList.add("fade");
  setTimeout(()=>{
    overlay.style.display="none";
    envelope.classList.add("show");
  },1000);

  setTimeout(()=>{
    questionText.innerHTML="Will you be my<br>Valentine, Kaila?";
  },1300);
}

envelope.addEventListener('click',()=>{
  if(opened) return;
  opened=true;
  seal.classList.add('break');
  flap.style.transform='rotateX(-170deg)';
  setTimeout(()=>letter.classList.add('show'),400);
});

function launchConfetti(){
  confetti=[];
  for(let i=0;i<120;i++){
    confetti.push({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height-canvas.height,
      r:Math.random()*6+2,
      speed:Math.random()*3+2
    });
  }
  animateConfetti();
}

function animateConfetti(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="#8b1e2d";
  confetti.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
    p.y+=p.speed;
  });
  requestAnimationFrame(animateConfetti);
}

yesBtn.addEventListener('click',()=>{
  launchConfetti();
  document.querySelector('.buttons').remove();

  const loveMsg=document.createElement('div');
  loveMsg.className="love-message";
  loveMsg.innerHTML="Yay! I love you.";
  letter.appendChild(loveMsg);

  setTimeout(()=>{loveMsg.style.opacity="1";},200);

  setTimeout(()=>{
    document.body.style.background="#efe7e1"; // softer warm tone
    envelope.style.transition="opacity 3s ease, transform 3s ease";
    envelope.style.opacity="0";
    envelope.style.transform="scale(0.98)";
  },5000);
});

noBtn.addEventListener('mouseover',()=>{
  noBtn.style.left=(Math.random()*200-100)+'px';
  noBtn.style.top=(Math.random()*100-50)+'px';
});