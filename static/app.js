const radicals = [
  {"id":1,"char":"人","name":"Nhân","meaning":"Người","examples":"他, 化, 休"},
  {"id":2,"char":"刀","name":"Đao","meaning":"Con dao, cây đao","examples":"剪, 争, 兔"},
  {"id":3,"char":"力","name":"Lực","meaning":"Sức mạnh","examples":"边, 办, 务"},
  {"id":4,"char":"口","name":"Khẩu","meaning":"Cái miệng","examples":"吐, 句, 右, 叫"},
  {"id":5,"char":"囗","name":"Vi","meaning":"Vây quanh","examples":"团, 困, 四"},
  {"id":6,"char":"土","name":"Thổ","meaning":"Đất","examples":"坐, 圣, 在"},
  {"id":7,"char":"大","name":"Đại","meaning":"To lớn","examples":"太, 夬"},
  {"id":8,"char":"女","name":"Nữ","meaning":"Nữ giới","examples":"妈, 姐姐, 妹妹"},
  {"id":9,"char":"宀","name":"Miên","meaning":"Mái che, mái hiên","examples":"家, 按"},
  {"id":10,"char":"山","name":"Sơn","meaning":"Núi non","examples":"山, 官, 家, 寄"},
  {"id":11,"char":"巾","name":"Cân","meaning":"Quảng","examples":"帅, 师, 币"},
  {"id":12,"char":"广","name":"Nghiễm/Quảng","meaning":"Mái nhà lớn","examples":"库, 庙, 店"},
  {"id":13,"char":"彳","name":"Xích","meaning":"Bước chân trái","examples":"行"},
  {"id":14,"char":"心","name":"Tâm","meaning":"Tim, tâm trí, tấm lòng","examples":"忘, 愁, 想"},
  {"id":15,"char":"手","name":"Thủ","meaning":"Tay","examples":"指"},
  {"id":16,"char":"攴","name":"Phộc","meaning":"Đánh khẽ","examples":"政, 教, 数"},
  {"id":17,"char":"日","name":"Nhật","meaning":"Ngày, mặt trời","examples":"旧, 早, 明, 是"},
  {"id":18,"char":"木","name":"Mộc","meaning":"Gỗ, cây cối","examples":"本, 树, 机, 杀"},
  {"id":19,"char":"水","name":"Thủy","meaning":"Nước","examples":"冰, 海, 湖"},
  {"id":20,"char":"火","name":"Hỏa","meaning":"Lửa","examples":"炒, 灯, 烫, 灾"},
  {"id":21,"char":"牛","name":"Ngưu","meaning":"Trâu","examples":"牧, 牲, 牴"},
  {"id":22,"char":"犬","name":"Khuyển","meaning":"Con chó","examples":"狗, 狐, 哭"},
  {"id":23,"char":"玉","name":"Ngọc","meaning":"Đá quý, ngọc","examples":"国, 宝石"},
  {"id":24,"char":"田","name":"Điền","meaning":"Ruộng","examples":"电, 男, 画"},
  {"id":25,"char":"疒","name":"Nạch","meaning":"Bệnh tật","examples":"病, 痰"},
  {"id":26,"char":"目","name":"Mục","meaning":"Mắt","examples":"看, 眉, 省"},
  {"id":27,"char":"石","name":"Thạch","meaning":"Đá","examples":"破, 碰, 碗"},
  {"id":28,"char":"禾","name":"Hòa","meaning":"Lúa","examples":"私, 稳, 稿, 种, 稻草"},
  {"id":29,"char":"竹","name":"Trúc","meaning":"Tre, trúc","examples":"笔, 笑, 笨"},
  {"id":30,"char":"米","name":"Mễ","meaning":"Gạo","examples":"将来, 数"},
  {"id":31,"char":"糸","name":"Mịch","meaning":"Sợi tơ nhỏ","examples":"糺, 糿"},
  {"id":32,"char":"肉","name":"Nhục","meaning":"Thịt","examples":"肉慾, 肉刑"},
  {"id":33,"char":"艸","name":"Thảo","meaning":"Cỏ","examples":"草, 茶, 节, 苦"},
  {"id":34,"char":"虫","name":"Trùng","meaning":"Sâu bọ","examples":"虾, 蛇, 蚊"},
  {"id":35,"char":"衣","name":"Y","meaning":"Y phục, quần áo","examples":"滚, 袋, 装"},
  {"id":36,"char":"言","name":"Ngôn","meaning":"Nói","examples":"诗, 谁, 请, 课"},
  {"id":37,"char":"貝","name":"Bối","meaning":"Vật báu","examples":"货, 贵, 贴, 费"},
  {"id":38,"char":"足","name":"Túc","meaning":"Chân, đầy đủ","examples":"踢, 跑, 跟, 跪"},
  {"id":39,"char":"車","name":"Xa","meaning":"Chiếc xe","examples":"自行车, 电动车"},
  {"id":40,"char":"辵","name":"Quai Xước","meaning":"Chợt đi chợt dừng","examples":"边, 过, 这, 达"},
  {"id":41,"char":"邑","name":"Ấp","meaning":"Vùng đất","examples":"扈, 邕"},
  {"id":42,"char":"金","name":"Kim","meaning":"Kim loại, vàng","examples":"铜, 钱, 铅, 锁"},
  {"id":43,"char":"門","name":"Môn","meaning":"Cửa hai cánh","examples":"问, 闭, 闲"},
  {"id":44,"char":"阜","name":"Phụ","meaning":"Đống đất, gò đất","examples":"陧, 险, 院, 隔"},
  {"id":45,"char":"雨","name":"Vũ","meaning":"Mưa","examples":"雪, 雷, 零, 雾"},
  {"id":46,"char":"頁","name":"Hiệt","meaning":"Đầu, trang giấy","examples":"顶, 顺, 顿, 题"},
  {"id":47,"char":"食","name":"Thực","meaning":"Ăn","examples":"饼, 饭, 饿"},
  {"id":48,"char":"馬","name":"Mã","meaning":"Con ngựa","examples":"妈, 骂, 骑"},
  {"id":49,"char":"魚","name":"Ngư","meaning":"Con cá","examples":"鲁, 魸"},
  {"id":50,"char":"鳥","name":"Điểu","meaning":"Con chim","examples":"鳦"}
];

let mastered = new Set(JSON.parse(localStorage.getItem("mastered") || "[]"));
let cardIndex = 0;
let quizIndex = 0, quizScore = 0, quizAnswered = false;
let quizQuestions = [];
let gameSelected = null, gameScore = 0, gameMatched = 0;
let strokeWriter = null;
let activeStudyRadicals = radicals;
let radicalGroups = [];

function updateStats(){
  document.getElementById("mastered").textContent = mastered.size;
  document.getElementById("learned-count").textContent = mastered.size;
  document.getElementById("today-percent").textContent = Math.round(mastered.size/50*100)+"%";
  document.getElementById("today-bar").style.width = Math.round(mastered.size/50*100)+"%";
}
function switchView(name){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  document.getElementById(name+"-view").classList.add("active");
  document.querySelectorAll(".nav-item").forEach(n=>n.classList.toggle("active",n.dataset.view===name));
  const titles={home:["Chào buổi sáng!","Tiếp tục hành trình"],flashcards:["THƯ VIỆN BỘ THỦ","Học với flashcards"],groups:["HỌC THEO CHỦ ĐỀ","Các nhóm bộ thủ"],game:["LUYỆN TẬP","Ghép bộ thủ - nghĩa"],quiz:["KIỂM TRA","Thử thách 10 câu"]};
  document.getElementById("header-eyebrow").textContent=titles[name][0]; document.getElementById("header-title").textContent=titles[name][1];
  document.querySelector(".sidebar").classList.remove("open");
  if(name==="game") startGame();
  if(name==="quiz") startQuiz();
}
document.querySelectorAll("[data-view]").forEach(b=>b.onclick=()=>switchView(b.dataset.view));
document.querySelectorAll("[data-view-link]").forEach(b=>b.onclick=()=>switchView(b.dataset.viewLink));
document.getElementById("menu-button").onclick=()=>document.querySelector(".sidebar").classList.toggle("open");

const featured=[radicals[0],radicals[3],radicals[6],radicals[17],radicals[45]];
document.getElementById("featured-grid").innerHTML=featured.map(r=>`<article class="radical-card" data-card="${r.id-1}"><div class="char">${r.char}</div><strong>${r.name}</strong><small>${r.meaning}</small></article>`).join("");
document.querySelectorAll(".radical-card").forEach(c=>c.onclick=()=>{activeStudyRadicals=radicals;cardIndex=+c.dataset.card;renderCard();switchView("flashcards")});

function renderCard(){
  const r=activeStudyRadicals[cardIndex];
  document.getElementById("card-position").textContent=`${cardIndex+1}/${activeStudyRadicals.length}`;
  ["card-char-back"].forEach(id=>{
    const element=document.getElementById(id);
    if(element) element.textContent=r.char;
  });
  document.getElementById("card-name").textContent=r.name; document.getElementById("card-meaning").textContent=r.meaning;document.getElementById("card-examples").textContent=r.examples.replace(/,\s*/g," · ");
  document.getElementById("flashcard").classList.remove("flipped");
  if(window.HanziWriter){
    document.getElementById("stroke-writer").innerHTML="";
    strokeWriter=HanziWriter.create("stroke-writer",r.char,{
      width:230,height:230,padding:12,
      showOutline:true,strokeColor:"#282625",radicalColor:"#b85c4a",
      outlineColor:"#ddd7cb",drawingColor:"#b85c4a",
      strokeAnimationSpeed:1,delayBetweenStrokes:250
    });
    strokeWriter.animateCharacter();
  }
  document.getElementById("card-list").innerHTML=activeStudyRadicals.map((x,i)=>`<button class="list-item" data-index="${i}"><span class="mini">${x.char}</span><strong>${x.name}</strong><small>${mastered.has(x.id || x.char)?"✓":x.name}</small></button>`).join("");
  document.querySelectorAll(".list-item").forEach(b=>b.onclick=()=>{cardIndex=+b.dataset.index;renderCard()});
}
document.getElementById("flashcard").onclick=()=>document.getElementById("flashcard").classList.toggle("flipped");
document.getElementById("stroke-button").onclick=(event)=>{
  event.stopPropagation();
  if(strokeWriter) strokeWriter.animateCharacter();
};
document.getElementById("prev-card").onclick=()=>{cardIndex=(cardIndex+activeStudyRadicals.length-1)%activeStudyRadicals.length;renderCard()};
document.getElementById("next-card").onclick=()=>{cardIndex=(cardIndex+1)%activeStudyRadicals.length;renderCard()};
document.getElementById("mark-mastered").onclick=()=>{
  const r=activeStudyRadicals[cardIndex];
  mastered.add(r.id || r.char);localStorage.setItem("mastered",JSON.stringify([...mastered]));updateStats();renderCard();
};

function renderRadicalGroups(){
  document.getElementById("radical-group-grid").innerHTML=radicalGroups.map(group=>`
    <article class="radical-group-card" data-group="${group.id}">
      <div class="group-card-top">
        <div class="group-icon">${group.icon}</div>
        <div><h2>${group.name}</h2><small>${group.items.length} bộ thủ</small></div>
      </div>
      <div class="group-radicals">
        ${group.items.map(item=>`<span class="group-radical" title="${item.name} - ${item.meaning}">${item.char}</span>`).join("")}
      </div>
    </article>
  `).join("");
  document.querySelectorAll(".radical-group-card").forEach(card=>{
    card.onclick=()=>{
      const group=radicalGroups.find(item=>item.id===Number(card.dataset.group));
       activeStudyRadicals=group.items;
      cardIndex=0;
      renderCard();
      switchView("flashcards");
    };
  });
}

function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function startGame(){
  gameSelected=null;gameMatched=0;gameScore=0;document.getElementById("game-score").textContent=0;document.getElementById("game-result").textContent="";
  const items=shuffle(radicals).slice(0,6);
  window.gameItems=items;
  document.getElementById("game-radicals").innerHTML=items.map(r=>`<button data-id="${r.id}" data-type="char">${r.char}</button>`).join("");
  document.getElementById("game-meanings").innerHTML=shuffle(items).map(r=>`<button data-id="${r.id}" data-type="meaning">${r.meaning}</button>`).join("");
}
document.addEventListener("click",e=>{
  const b=e.target.closest("#game-radicals button,#game-meanings button");if(!b)return;
  if(b.disabled)return;
  document.querySelectorAll(".game-options button.selected").forEach(x=>{if(!x.disabled)x.classList.remove("selected")});
  b.classList.add("selected");
  if(!gameSelected){gameSelected={id:b.dataset.id,type:b.dataset.type,el:b};return}
  if(gameSelected.type===b.dataset.type){gameSelected.el.classList.remove("selected");gameSelected={id:b.dataset.id,type:b.dataset.type,el:b};return}
  if(gameSelected.id===b.dataset.id){
    [gameSelected.el,b].forEach(x=>{x.classList.remove("selected");x.classList.add("correct");x.disabled=true});
    gameScore+=10;gameMatched++;document.getElementById("game-score").textContent=gameScore;document.getElementById("game-result").textContent="Chính xác! +10 điểm";
  }else{
    [gameSelected.el,b].forEach(x=>x.classList.add("wrong"));
    setTimeout(()=>[gameSelected.el,b].forEach(x=>x.classList.remove("wrong")),500);
  }
  gameSelected=null;
});

function startQuiz(){
  quizIndex=0;quizScore=0;quizQuestions=shuffle(radicals).slice(0,10);renderQuiz();
}
function renderQuiz(){
  if(quizIndex>=quizQuestions.length){document.getElementById("quiz-counter").textContent="Hoàn thành";document.getElementById("quiz-question").innerHTML=`Bạn đạt <b>${quizScore}/10</b> điểm`;document.getElementById("quiz-options").innerHTML='<div style="grid-column:1/-1;text-align:center;color:#77766f">Hãy ôn lại và thử lại lần sau!</div>';document.getElementById("quiz-next").disabled=false;document.getElementById("quiz-next").textContent="Làm lại";return}
  const q=quizQuestions[quizIndex];quizAnswered=false;let wrong=shuffle(radicals.filter(r=>r.id!==q.id)).slice(0,3);let options=shuffle([q,...wrong]);
  document.getElementById("quiz-counter").textContent=`Câu ${quizIndex+1}/10`;
  document.getElementById("question-bar").style.width=((quizIndex)/10*100)+"%";
  document.getElementById("quiz-question").textContent=`Bộ thủ nào có nghĩa là "${q.meaning}"?`;
  document.getElementById("quiz-options").innerHTML=options.map(r=>`<button class="quiz-option" data-id="${r.id}" data-correct="${r.id===q.id}">${r.char}</button>`).join("");
  document.getElementById("quiz-next").disabled=true;document.getElementById("quiz-next").textContent="Câu tiếp theo →";
}
document.getElementById("quiz-options").onclick=e=>{
  const b=e.target.closest(".quiz-option");if(!b||quizAnswered)return;quizAnswered=true;
  if(b.dataset.correct==="true"){b.classList.add("correct");quizScore++}else b.classList.add("wrong");
  document.querySelectorAll(".quiz-option").forEach(x=>{if(x.dataset.correct==="true")x.classList.add("correct");x.disabled=true});
  document.getElementById("quiz-next").disabled=false;document.getElementById("accuracy").textContent=Math.round(quizScore/(quizIndex+1)*100)+"%";
};
document.getElementById("quiz-next").onclick=()=>{
  if(quizIndex>=quizQuestions.length){startQuiz();return}
  quizIndex++;renderQuiz();
};
async function loadRadicalGroups(){
 const response=await fetch("/api/radical-groups");
 if(!response.ok) throw new Error("Không thể tải danh sách nhóm bộ thủ");
 radicalGroups=await response.json();
 renderRadicalGroups();
}

loadRadicalGroups().catch(error=>console.error(error));
renderCard();updateStats();
