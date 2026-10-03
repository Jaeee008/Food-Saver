// Game logic: menus, levels, scoring.
const app=document.getElementById("app");
let unlocked=1,lv,qs,i,score,locked;
const shuffle=a=>[...a].sort(()=>Math.random()-.5);
function home(){app.className="narrow";app.innerHTML=`<h1>🥬 Food Savers</h1><p class="muted" style="text-align:center">Learn to waste less food at home, school, restaurants, and in the community.</p>
<div class="card"><button class="btn primary" onclick="levels()">🎮 Play</button><button class="btn primary" onclick="lessons(0)">📖 Lessons</button></div>`}
function levels(){app.className="narrow";app.innerHTML=`<h1>🔒 Unlock all 4 levels</h1><p class="muted" style="text-align:center">Start at Level 1. Pass a level to unlock the next one.</p><div class="card"><div class="grid2">${LEVELS.map((l,n)=>`<button class="btn" ${n+1>unlocked?"disabled":""} onclick="play(${n})">${n+1>unlocked?"🔒":l.icon} Level ${n+1}: ${l.name}</button>`).join("")}</div><p class="muted">Score 7/10 to unlock the next level.</p><button class="btn" onclick="home()">← Back</button></div>`}
function play(n){lv=n;qs=shuffle(LEVELS[n].qs);i=0;score=0;show()}
function show(){app.className="narrow";locked=false;const q=qs[i];q.opts=q.opts||shuffle([q[2],q[3],q[4]]);
app.innerHTML=`<div class="top"><button class="exit" aria-label="Exit level" onclick="quit()">✕ Exit</button><span>${LEVELS[lv].icon} ${LEVELS[lv].name}</span><span>${i+1}/10</span><span>⭐ ${score}</span></div>
<div class="bar"><div style="width:${i*10}%"></div></div><div class="card" style="margin-top:12px"><div class="item">${q[0]}</div><p class="q">${q[1]}</p>
${q.opts.map((t,n)=>`<button class="btn" id="b${n}" onclick="pick(${n})">${t}</button>`).join("")}<div id="fb"></div></div>`}
function pick(n){if(locked)return;locked=true;const q=qs[i],ok=q.opts[n]===q[2];
document.getElementById("b"+n).classList.add(ok?"good":"bad");if(!ok)document.getElementById("b"+q.opts.indexOf(q[2])).classList.add("good");else score++;
document.getElementById("fb").innerHTML=`<div class="why">${ok?"✅ Correct!":"❌ Best choice shown in green."} ${q[5]}</div><button class="btn primary" onclick="next()">${i==9?"See results":"Next"}</button>`}
function quit(){if(confirm("Exit this level? Your progress will be lost."))levels()}
function next(){i++;i>9?end():show()}
function end(){app.className="narrow";const pass=score>=7;if(pass&&lv+1==unlocked&&unlocked<4)unlocked++;
app.innerHTML=`<div class="card"><div class="item">${pass?"🎉":"💪"}</div><h1>${pass?"Level cleared!":"Keep practicing"}</h1><p style="text-align:center">Score: <b>${score}/10</b><br>Estimated food saved: <b>${(score*0.5).toFixed(1)} kg</b></p>
<button class="btn primary" onclick="play(${lv})">Play again</button>${pass&&lv<3?`<button class="btn primary" onclick="play(${lv+1})">Next level →</button>`:""}<button class="btn" onclick="levels()">Levels</button></div>`}
function lessons(t){app.className="wide";const names=Object.keys(LESSONS);
app.innerHTML=`<div class="head"><button class="back" aria-label="Back" onclick="home()">←</button><h1>📖 Lessons</h1></div><div class="tabs">${names.map((n,k)=>`<button class="${k==t?"on":""}" onclick="lessons(${k})">${n}</button>`).join("")}</div>
<div class="cards">${LESSONS[names[t]].map(([h,l])=>`<div class="card"><h2>${h}</h2><ul${/^\d\./.test(l[0])?' class="plain"':''}>${l.map(x=>`<li>${x}</li>`).join("")}</ul></div>`).join("")}</div>`}
home();
