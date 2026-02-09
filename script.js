function showSection(id){
  document.querySelectorAll('.section').forEach(s=>s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function checkLink(){
  let url=document.getElementById('urlInput').value.trim();
  let out=document.getElementById('checkResult');
  if(!url){out.textContent="Введите ссылку.";return;}
  if(url.match(/(free|gift|login|bonus|secure-check|.ru.ru|verify)/i)){
    out.textContent="⚠️ Ссылка подозрительная!";
  } else out.textContent="✔ Безопасно.";
}

const examples=[
  "📩 «Ваш аккаунт будет удалён!»",
  "🎁 «Вы выиграли iPhone!»",
  "💳 «Подтвердите карту сейчас»",
  "🔐 «Необычный вход в аккаунт»"
];

document.addEventListener("DOMContentLoaded",()=>{
  let c=document.getElementById("phishContainer");
  examples.forEach(e=>{
    let d=document.createElement("div");
    d.textContent=e;
    c.appendChild(d);
  });
});

let trainData=[
  {text:"Подтвердите карту по ссылке",phish:true},
  {text:"Ваш заказ готов",phish:false},
  {text:"Получите подарок!",phish:true},
  {text:"Изменение расписания уроков",phish:false}
];

let cur=null;

function generateTraining(){
  cur=trainData[Math.floor(Math.random()*trainData.length)];
  document.getElementById("trainText").textContent=cur.text;
  document.getElementById("trainResult").textContent="";
}

function answer(phish){
  if(cur===null)return;
  document.getElementById("trainResult").textContent=
    (phish===cur.phish) ? "✔ Правильно!" : "❌ Ошибка!";
}
