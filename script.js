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

const examples = [
  {
    title: "Фишинговое письмо от «банка»",
    type: "Email-фишинг",
    text: "Ваш аккаунт будет заблокирован! Срочно перейдите по ссылке и подтвердите данные.",
    danger: "Создаётся эффект срочности, ссылка ведёт на поддельный сайт.",
    tip: "Банки никогда не просят подтверждать данные по ссылке."
  },
  {
    title: "Сообщение о выигрыше",
    type: "Социальная инженерия",
    text: "Поздравляем! Вы выиграли iPhone. Для получения оплатите доставку.",
    danger: "Мошенники используют жадность и эмоции.",
    tip: "Настоящие конкурсы не требуют оплат."
  },
  {
    title: "Поддельный вход в соцсеть",
    type: "Фишинговый сайт",
    text: "Обнаружен подозрительный вход. Срочно войдите и смените пароль.",
    danger: "Ссылка визуально похожа на настоящий сайт.",
    tip: "Всегда проверяйте домен сайта."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("phishContainer");
  container.innerHTML = "";

  examples.forEach(ex => {
    const div = document.createElement("div");
    div.className = "phish-card";
    div.innerHTML = `
      <h3>${ex.title}</h3>
      <p><b>Тип атаки:</b> ${ex.type}</p>
      <p><b>Сообщение:</b> ${ex.text}</p>
      <p><b>Почему опасно:</b> ${ex.danger}</p>
      <p><b>Как распознать:</b> ${ex.tip}</p>
    `;
    container.appendChild(div);
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
