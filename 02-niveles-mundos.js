let G,E=[],CO=[],DE=[],BU=[],PA=[],LEN,FX,FY,lv=1,score=0,coins=0,hp=3,best=0,cx=0,clearAt=0,combo=0;
try{best=+localStorage.getItem('sbg_best')||0}catch(e){}
let UNL=1;try{UNL=Math.min(120,+localStorage.getItem('sbg_unl')||1)}catch(e){}
let PI=[];const P={x:80,y:300,w:26,h:40,vx:0,vy:0,g:0,f:1,inv:0,t:0,coy:0,buf:0,jp:0,sx:80,sy:300};
const wd=()=>Math.min(5,((lv-1)/20)|0),WT=()=>wd()==5,li=()=>(lv-1)%20+1;
const MN=['GRAVEDAD LUNAR','ENEMIGOS VELOCES','OSCURIDAD','HIELO','VIENTO','ENJAMBRE','VOLADORES'],BPW=['Embiste y escupe veneno','Corre, embiste y aúlla','Vuela y lanza fuego helado','Golpea el suelo y lanza carámbanos','Vuela y lanza bolas de fuego','Tres cabezas escupen fuego','Embiste y suelta toxinas','Salta y lanza ácido','Vuela y dispara flechas','Invisible: solo ves sus ojos','Lanza tinta y azota con tentáculos','Embiste y lanza burbujas'],BN=['SERPIENTE GIGANTE','LOBO SALVAJE','DRAGÓN DE HIELO','HOMBRE DE HIELO','DEMONIO','CERBERO','RATA MUTANTE','MONSTRUO DE ÁCIDO','ÁNGEL ARQUERO','LUZ DIVINA','PULPO GIGANTE','TIBURÓN BLANCO'];
const _pc=a=>{let n=0;while(a){n+=a&1;a>>=1}return n};
// Modificadores (bits): 0 gravedad lunar, 1 enemigos veloces, 2 oscuridad, 3 hielo, 5 enjambre, 6 voladores, 4 viento (solo en invierno y cielo; el cielo además siempre tiene ráfagas).
// Cada mundo (20 niveles) recibe 20 combinaciones DISTINTAS, de menos a más difíciles. En el mar no hay oscuridad.
const MKT=(()=>{const t=[0],RG=[[0,2],[1,3],[2,3],[2,4],[3,4],[1,3]];for(let w=0;w<6;w++){const rg=mkRng(w*1013+100008);let pool=[];for(let m=0;m<128;m++){if(m&16&&w!=1&&w!=4||(w==5&&m&4))continue;const p=_pc(m);if(p>=RG[w][0]&&p<=RG[w][1])pool.push([p,rg(),m])}
pool=pool.sort((a,b)=>a[0]-b[0]||a[1]-b[1]).map(x=>x[2]);for(let i=0;i<20;i++)t.push(pool[Math.floor(i*pool.length/20)])}t[1]=0;return t})();
const FLY=['bee','flake','fbat','bat','bird','jelly'],FLC={bee:'#ffd030',flake:'#8ad8ff',fbat:'#ff6a20',bat:'#b060ff',bird:'#9ad0ff',jelly:'#ff7ad0'},WLK=[0,['pen','snow'],['imp','lava'],['rat','slime'],['cloud','cloud'],['crab','urch']];
function sk2(e){if(e.t!='m')return;const L=WLK[wd()];if(!L)return;e.sp=L[Math.random()<.6?0:1];
 if(e.sp=='rat')e.vx*=1.3;if(e.sp=='snow'||e.sp=='slime'||e.sp=='urch'){e.vx*=.75;e.hpv+=1}
 if(e.sp=='imp'||e.sp=='cloud'||e.sp=='crab')e.hop=1}
const mk=()=>MKT[((lv-1)%120)+1],hasM=i=>mk()>>i&1,isB=()=>lv%10==0;let BP=[],BOSSE=null,BD=0,LB=0;
const TH=[{a:'#6fb98a',b:'#d9f0c0',m:'#3f7a55',m2:'#5a9a70',s:'#fff',t:'#1f5a38',t2:'#2f7a4a',d:'#6b4a2a',d2:'#4a3018',d3:'#8a6a40',de:'#3a2410',gr:'#2f8a2a',gr2:'#5fc23a',gr3:'#1f6a1f',w:'#1f7fd6'},{a:'#8fc4e8',b:'#eef8ff',m:'#8aa8c8',m2:'#aac4dc',s:'#ffffff',t:'#2a6a58',t2:'#3a8470',d:'#6f86ad',d2:'#566c92',d3:'#9ab0d0',de:'#3e5278',gr:'#dfeefa',gr2:'#ffffff',gr3:'#b8d0e6',w:'#58b8e8'},{a:'#4a0f1a',b:'#ff8a3a',m:'#5a2a30',m2:'#7a3a3a',s:'#ffb070',t:'#3a1a1a',t2:'#5a2a22',d:'#4a3030',d2:'#341e1e',d3:'#6a4a40',de:'#1e1010',gr:'#b8321a',gr2:'#ff6a2a',gr3:'#8a2010',w:'#ff4a1a'},{a:'#1a2a20',b:'#4a6a40',m:'#2a3a30',m2:'#3a4e3c',s:'#aaffaa',t:'#16261c',t2:'#1e3326',d:'#5a6a58',d2:'#3e4c3e',d3:'#788a74',de:'#2a342a',gr:'#5a9a2a',gr2:'#9acc3a',gr3:'#3a6a1a',w:'#4a7a2a'},{a:'#3a9aff',b:'#e8f6ff',m:'#a8d0f8',m2:'#c8e4ff',s:'#fff',t:'#cfe6fb',t2:'#e4f2ff',d:'#e8f0fa',d2:'#bcd0e8',d3:'#ffffff',de:'#9ab0d0',gr:'#ffd24a',gr2:'#fff0a0',gr3:'#d8a820',w:'#8ad0ff'},{a:'#33b4e0',b:'#0a4a88',m:'#1a6aa0',m2:'#2a88b8',s:'#d8f8ff',t:'#0e5a6a',t2:'#168a86',d:'#d8c48a',d2:'#b09a60',d3:'#efe0aa',de:'#8a7440',gr:'#2fb89a',gr2:'#58e0b0',gr3:'#1a8a78',w:'#0a5a9a'}];
const CVS=[{a:'#06120c',b:'#143024',m:'#1c3a2a',m2:'#285040',s:'#b8f0c0',t:'#0f2418',t2:'#16301f',d:'#5a5a40',d2:'#3e3e2a',d3:'#767658',de:'#242a1a',gr:'#4a9a4a',gr2:'#7ad060',gr3:'#2a6a2a',w:'#2a8a4a'},{a:'#0a1a2e',b:'#1e4668',m:'#2a4a70',m2:'#3a6490',s:'#d8f0ff',t:'#16304e',t2:'#1e4468',d:'#6a88b0',d2:'#4a6a94',d3:'#9ab8d8',de:'#2e4468',gr:'#cfe8ff',gr2:'#ffffff',gr3:'#9cc4e8',w:'#2a8ad8'},{a:'#1a0505',b:'#4a1408',m:'#3a1410',m2:'#5a2418',s:'#ffb070',t:'#2a0e0c',t2:'#3a1612',d:'#5a3028',d2:'#3a1c18',d3:'#7a463a',de:'#240c0a',gr:'#c8421a',gr2:'#ff8a2a',gr3:'#8a2210',w:'#ff4a1a'},{a:'#0a120a',b:'#243018',m:'#1c2a18',m2:'#2a3c24',s:'#c8ff9a',t:'#141e12',t2:'#1c2a18',d:'#58634a',d2:'#3c4636',d3:'#7a866a',de:'#232a1e',gr:'#6a9a2a',gr2:'#a8d03a',gr3:'#44661a',w:'#6a8a1a'},{a:'#2a3a7a',b:'#8a9ae0',m:'#4a5a9a',m2:'#6a7ab8',s:'#ffffff',t:'#3a4a8a',t2:'#4a5a9a',d:'#c8d4f0',d2:'#9aaad8',d3:'#eef2ff',de:'#6a78b0',gr:'#ffffff',gr2:'#fff8d8',gr3:'#c8d4f0',w:'#7a8aff'},{a:'#04223a',b:'#0a4a70',m:'#0e4a6a',m2:'#1a6a8a',s:'#aaf0ff',t:'#082a44',t2:'#0c3a58',d:'#4a7a90',d2:'#2e5a70',d3:'#6a9ab0',de:'#1a3a50',gr:'#2ab8a0',gr2:'#6af0c8',gr3:'#188a78',w:'#0a5aaa'}],
CV={a:'#0b0716',b:'#241a3a',m:'#2c2244',m2:'#382c52',s:'#cfe4f4',t:'#1a1228',t2:'#221a34',d:'#4a4458',d2:'#363046',d3:'#625a74',de:'#2a2438',gr:'#5a8a9a',gr2:'#8ac8d8',gr3:'#3a6a7a',w:'#2a6ac8'},VM=[0,2,3,1,4];
const PM=[['#bd7230','#7a4015'],['#8a3fc4','#4e1a80'],['#4aa8d8','#1f5f8a'],['#3a2a3a','#7a1a22'],['#f0b800','#a06a00']];
let UG=0,SAVE=null,cavDone=0,ctot=0,STARS={},stars=0;try{STARS=JSON.parse(localStorage.getItem('sbg_stars'))||{}}catch(e){}
const cur=()=>UG?CVS[wd()]:TH[wd()],bk=()=>UG?9+wd():wd();
function buildCave(){const _r=Math.random;Math.random=mkRng(lv*2654435+wd()*97+7);try{buildCave0()}finally{Math.random=_r}}
let CVN='SUBTERRÁNEO',CVP=null;
// Plan de cuevas: 15 diseños x 10 modalidades = 150 pares; los 108 niveles con cueva reciben pares DISTINTOS,
// sin repetir diseño en los 6 niveles anteriores ni modalidad en los 4 anteriores.
function cvPlan(L){if(!CVP){CVP=[];const rg=mkRng(424242);let pr=[];for(let a=0;a<15;a++)for(let m=0;m<10;m++)pr.push([rg(),a,m]);pr=pr.sort((x,y)=>x[0]-y[0]).map(x=>[x[1],x[2]]);const ra=[],rm=[];for(let l=1;l<=120;l++){if(l%10==0){CVP[l]=[0,0];continue}let i=pr.findIndex(q=>!ra.includes(q[0])&&!rm.includes(q[1]));if(i<0)i=pr.findIndex(q=>q[0]!=ra[ra.length-1]&&q[1]!=rm[rm.length-1]);if(i<0)i=0;const q=pr.splice(i,1)[0];CVP[l]=q;ra.push(q[0]);rm.push(q[1]);if(ra.length>6)ra.shift();if(rm.length>4)rm.shift()}}return CVP[((L-1)%120)+1]}
const CVM=['MINA DE ORO','FIESTA DE HONGOS','NIDO DE VOLADORES','ZONA DE CARACOLES','JARDÍN CARNÍVORO','ARSENAL OCULTO','ÉLITES','CAOS TOTAL','CARRERA LOCA','CÁMARA DEL TESORO'];
function buildCave0(){G=Array.from({length:ROWS},()=>new Uint8Array(480));E=[];SPR=[];CO=[];DE=[];BU=[];PA=[];IT=[];BL=[];DC=[];BX={};PI=[];NEAR=null;
 const rnd=Math.random,F=ROWS-2,CP2=cvPlan(lv),A=CP2[0],M=CP2[1],w=wd(),L=40+(rnd()*12|0)+A*2,k=2+Math.min(6,lv/14|0),v0=VM[Math.min(4,lv/12|0)];
 CVN=CVM[M];
 for(let x=0;x<L+4;x++){for(let r=F;r<ROWS;r++)G[r][x]=1;for(let r=0;r<3;r++)G[r][x]=1}
 for(let r=0;r<ROWS;r++)for(let x=L;x<L+4;x++)G[r][x]=1;
 const stp=col=>{for(let q=1;q<=2;q++)for(let j=0;j<2;j++)G[F-q][col+j]=5;PI.push({x:(col+1)*T,top:(ROWS-4)*T,en:1})};
 stp(3);stp(L-6);
 const coin=(x,y)=>CO.push({x,y,t:rnd()*6,w:20,h:24,got:0}),sf=c=>{let r=F;while(r>3&&G[r-1][c]&&G[r-1][c]!=3)r--;return r},cs=c=>coin(c*T+20,sf(c)*T-34);
 const blk=(c,r,t)=>{if(c>=7&&c<L-8&&r>=3&&r<F)G[r][c]=t||1},col=(c,h)=>{for(let q=1;q<=h;q++)blk(c,F-q)},plat=(a,b,r)=>{for(let x=a;x<=b;x++)blk(x,r)};
 const bridge=(a,b)=>{col(a-2,1);col(a-1,2);plat(a,b,7);col(b+1,2);col(b+2,1);for(let x=a;x<=b;x++)coin(x*T+20,7*T-34)};
 // ---- 15 diseños de terreno distintos ----
 if(A==0){let c=8;while(c<L-16){const h=2+(rnd()*3|0),sw=2+(rnd()*2|0),pl=2+(rnd()*5|0);for(let i=1;i<=h;i++){for(let x=0;x<sw;x++)col(c+x,i);cs(c);c+=sw}for(let x=0;x<pl;x++){col(c+x,h);cs(c+x)}c+=pl;for(let i=h-1;i>=1;i--){for(let x=0;x<sw;x++)col(c+x,i);c+=sw}c+=3+(rnd()*3|0)}}
 else if(A==1){let c=8,i=0;while(c<L-12){const q=3+(rnd()*2|0),r=[7,6,5,6][i%4];plat(c,c+q-1,r);for(let x=c;x<c+q;x++)coin(x*T+20,r*T-34);c+=q+1+(rnd()*2|0);i++}}
 else if(A==2){let c=8;while(c<L-10){const h=1+(rnd()*2|0),q=1+(rnd()*2|0);for(let x=0;x<q;x++)col(c+x,h);for(let x=0;x<q;x++)cs(c+x);c+=q+2+(rnd()*3|0)}}
 else if(A==3){let c=10;while(c<L-14){const len=5+(rnd()*5|0);bridge(c,c+len-1);c+=len+5+(rnd()*3|0)}}
 else if(A==4){let c=9;while(c<L-10){const d=2+(rnd()*3|0),q=1+(rnd()*2|0);for(let x=0;x<q;x++)for(let r=3;r<3+d;r++)blk(c+x,r);if(rnd()<.5)col(c+q+1,1+(rnd()*2|0));coin(c*T+20,(3+d)*T+14);c+=q+2+(rnd()*3|0)}for(let c2=9;c2<L-9;c2+=2)if(sf(c2)==F&&!G[3][c2]&&rnd()<.5)cs(c2)}
 else if(A==5){const f=.35+rnd()*.25,ph=rnd()*6;let pr=0;for(let c=8;c<L-9;c++){let h=Math.round(1.6+1.6*Math.sin(c*f+ph));h=CL(h,pr-1,pr+1);pr=h;col(c,h)}for(let c=8;c<L-9;c+=2)cs(c)}
 else if(A==6){const cw=8+(rnd()*5|0),h=3+(rnd()*2|0);let a=14+(rnd()*6|0);for(let i=1;i<h;i++){const l=a-2*(h-i);col(l,i);col(l+1,i);const r=a+cw+2*(h-1-i);col(r,i);col(r+1,i)}for(let x=0;x<cw;x++){col(a+x,h);cs(a+x);if(x%2==0)coin((a+x)*T+20,(F-h)*T-100)}const a2=a+cw+12;if(a2<L-14){col(a2,2);col(a2+1,3);col(a2+2,2);cs(a2+1)}}
 else if(A==7){let c=8;while(c<L-14){const h=2+(rnd()*2|0);for(let i=1;i<=h;i++){col(c,i);col(c+1,i);cs(c);c+=2}c+=2+(rnd()*3|0)}}
 else if(A==8){for(let c=9;c<L-9;c++){if(c%4==0)blk(c,F-1,2);else if(c%4==2&&c>12){blk(c,F-1,2);blk(c,F-2,2)}if(c%2)coin(c*T+20,sf(c)*T-80)}}
 else if(A==9){for(let c=9;c<L-10;c+=3+(rnd()*3|0)){const d=1+(rnd()*3|0);for(let r=3;r<3+d;r++)blk(c,r);if(rnd()<.6)blk(c+1+(rnd()*2|0),F-1)}for(let c=9;c<L-10;c+=2)cs(c)}
 else if(A==10){let c=8,i=0;while(c<L-12){const q=2+(rnd()*2|0),rw=i%2?5:8;plat(c,c+q-1,rw);for(let x=c;x<c+q;x++)coin(x*T+20,rw*T-34);c+=q+1+(rnd()*2|0);i++}}
 else if(A==11){let c=9;while(c<L-14){const ww=1+(rnd()*2|0);for(let x=0;x<ww;x++){col(c+x,3);coin((c+x)*T+20,(F-3)*T-34)}c+=ww+5+(rnd()*3|0)}}
 else if(A==12){let c=8,h=0;while(c<L-10){const run=2+(rnd()*3|0);h=CL(h+(rnd()<.5?-1:1),0,3);for(let x=0;x<run;x++){col(c+x,h);if(h)cs(c+x)}c+=run}}
 else if(A==13){let c=8;while(c<L-10){const rw=7+(rnd()*2|0),q=1+(rnd()*2|0);plat(c,c+q-1,rw);for(let x=c;x<c+q;x++)coin(x*T+20,rw*T-34);if(rnd()<.5)col(c+q,1);c+=q+2+(rnd()*3|0)}}
 else{let c=9;while(c<L-12){col(c,2);col(c+3,2);plat(c,c+3,F-3);for(let x=c;x<=c+3;x++)coin(x*T+20,(F-3)*T-34);c+=7+(rnd()*3|0)}}
 // ---- modalidad ----
 const fl=[];for(let c=10;c<L-10;c++)if(sf(c)==F&&sf(c-1)==F&&sf(c+1)==F&&!G[7][c]&&!G[8][c]&&!G[9][c])fl.push(c);
 const pool=fl.length>=6?fl:Array.from({length:L-20},(_,i)=>i+10),sp=()=>pool[rnd()*pool.length|0];
 const mush=(c,v,f)=>{E.push({t:'m',v,x:c*T,y:sf(c)*T-30,w:30,h:30,vx:-([1,1.7,1.2,1.5,2.1][v]+(f||0)),vy:0,dead:0,dt:0,hpv:[2,2,3,4,5][v]});sk2(E[E.length-1])};
 const snail=c=>{if(w!=0&&w!=3){mush(c,0);return}E.push({t:'s',x:c*T,y:sf(c)*T-26,w:30,h:26,vx:-.8-w*.15,vy:0,st:0,dir:-1,cool:0})};
 const bat=c=>{const by=230+rnd()*70;E.push({t:'k',x:c*T,y:by,by,w:30,h:22,vx:-1.1-Math.min(.9,lv*.01),ph:rnd()*6,dead:0,dt:0,hpv:2,sp:FLY[w]})};
 const plant=()=>{for(let t=0;t<40;t++){const c=sp();if(sf(c)==F&&sf(c+1)==F&&!G[8][c]&&!G[8][c+1]&&!G[9][c]&&!G[9][c+1]&&c<L-12){for(let q=1;q<=2;q++)for(let j=0;j<2;j++)G[F-q][c+j]=5;E.push({t:'p',x:(c+1)*T-16,by:(F-2)*T,y:0,w:32,h:44,ph:rnd()*6,up:0});return}}};
 const box=(kk,i)=>{for(let t=0;t<40;t++){const c=sp();if(sf(c)>=9&&!G[7][c]&&!G[8][c]&&!BX[c+',7']){G[7][c]=3;BX[c+',7']={k:kk,i};return}}};
 const wpn=()=>box('w',rollWeapon(lv)),amo=()=>box('a',0),rv=()=>rnd()<.5?0:v0;
 const rep=(n,f)=>{for(let i=0;i<n;i++)f()};
 if(M==0){for(let i=0;i<pool.length;i+=2){cs(pool[i]);coin(pool[i]*T+20,sf(pool[i])*T-80)}rep(2,()=>mush(sp(),0));wpn();amo()}
 else if(M==1){rep(5+k,()=>mush(sp(),rv()));wpn();amo()}
 else if(M==2){rep(4+k,()=>bat(10+(rnd()*(L-24)|0)));mush(sp(),0);amo();amo()}
 else if(M==3){rep(4+k,()=>snail(sp()));wpn()}
 else if(M==4){rep(3,plant);rep(2,()=>mush(sp(),0));rep(6,()=>cs(sp()));wpn()}
 else if(M==5){wpn();wpn();amo();amo();rep(2,()=>mush(sp(),0))}
 else if(M==6){rep(3+(k>>1),()=>mush(sp(),v0||1));rep(5,()=>cs(sp()));wpn()}
 else if(M==7){rep(2,()=>mush(sp(),rv()));rep(2,()=>snail(sp()));rep(2,()=>bat(10+(rnd()*(L-24)|0)));plant();wpn();amo()}
 else if(M==8){rep(4+k,()=>mush(sp(),rv(),1));for(let c=10;c<L-10;c++)cs(c);wpn()}
 else{rep(2,()=>bat(10+(rnd()*(L-24)|0)));rep(2,()=>snail(sp()));for(let a=0;a<4;a++){const c0=12+a*((L-30)/3|0);for(let i=0;i<7;i++)coin((c0+i)*T+20,F*T-150-Math.sin(i/6*Math.PI)*70)}wpn();amo();amo()}
 LEN=L*T;FX=1e9;FY=0}
function enterCave(){SAVE={G,E,SPR,CO,DE,BU,PI,BL,IT,BX,DC,LEN,FX,FY,q:{x:P.pipe.x,top:P.pipe.top}};UG=1;buildCave();STR={};const q=PI[0],p=P.pipe;P.x=q.x-13;P.y=q.top-P.h+42;p.x=q.x;p.top=q.top;p.ph=1;p.t=0;cx=0;cavDone=1;sfx(988,.3,'triangle',.07,500)}
function exitCave(){const s=SAVE;({G,E,SPR,CO,DE,BU,PI,BL,IT,BX,DC,LEN,FX,FY}=s);UG=0;STR={};NEAR=null;const p=P.pipe;P.x=s.q.x-13;P.y=s.q.top-P.h+42;p.x=s.q.x;p.top=s.q.top;p.ph=1;p.t=0;cx=CL(P.x-300,0,Math.max(0,LEN-W));SAVE=null;sfx(988,.3,'triangle',.07,500)}
function calcStars(){const f=Math.min(1,coins/Math.max(1,ctot)),p=f*.6+Math.min(1,hp/MH())*.4;stars=p>=.8?3:p>=.5?2:1;if(stars>(STARS[lv]||0)){STARS[lv]=stars;try{localStorage.setItem('sbg_stars',JSON.stringify(STARS))}catch(e){}}}
function drawStars(){const t=frame-clearAt;for(let i=0;i<3;i++){const on=i<stars,u=on?CL((t-20-i*20)/12,0,1):1;if(u<=0)continue;const x=W/2+(i-1)*86,y=i==1?208:222;g.save();if(on)glow(x,y,60*u,'255,210,60',.45*u);g.globalAlpha=on?1:.3;icon('star',x,y,on?(u<1?u*3.2:2.7+Math.sin(t*.1+i)*.08):2.4);g.restore()}
 txt('Monedas: '+coins+'   Vidas: '+hp,W/2,262,16,'#ffe680','center','#1b2a5a',4)}
function mkRng(a){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
// ---- PLANIFICADOR DE NIVELES: cada nivel recibe una secuencia de tramos (su "firma") distinta de las demás ----
// 15 tipos de tramo; CHW = peso de cada tipo por mundo [bosque,invierno,infierno,alcantarilla,cielo,mar]
const CHW=[[1.4,1,.6,1,.4,1],[1.2,.8,.8,1.2,.6,1],[1,1.2,1.4,.5,1.4,.8],[1.2,1,1.2,.8,.5,1],[.6,.9,1.4,1.4,.5,.9],[1,.5,.4,1.6,.3,.8],[.8,1,1,.5,1.5,1],[.6,1.2,1.3,.4,1.4,1],[.9,.8,1.2,1.3,.8,.8],[.8,1,.8,1.4,.5,1],[1.2,1.2,.6,.5,.4,1.2],[.5,1,1.1,.4,1.3,.9],[.7,.6,.9,1.3,1,.8],[.6,.8,.8,.7,1.5,.9],[.3,.7,1,.3,1.2,.5]],CHH=[1,2,4,5,11,14];
function planLv(L,s){const w=Math.min(5,((L-1)/20)|0),li=(L-1)%20+1,rg=mkRng(L*7919+104729+s*65537),cnt=9+Math.min(18,(li*.7|0)+w*3)+(rg()*4|0);
 const wt=CHW.map((r,j)=>{let x=r[w];if(j==11&&L<5||j==14&&L<8)x=0;x*=CHH.includes(j)?.35+L/100*1.6*(.5+rg()):.6+rg()*1.1;return x*(.35+((L*(j+7+s*3)*2654435761>>>0)%100)/45)}),tot=wt.reduce((a,b)=>a+b,0),seq=[];let l1=-1,l2=-1;
 for(let i=0;i<cnt;i++){let k,t=0;do{let r=rg()*tot,j=0;while(j<wt.length-1&&(r-=wt[j])>0)j++;k=j;t++}while((k==l1||wt[k]==0||k==l2&&t<12)&&t<60);seq.push([k,rg()*10|0,rg()*10|0]);l2=l1;l1=k}
 return{seq,sig:seq.map(q=>q.join('.')).join('-')}}
// parecido entre dos niveles = fracción de posiciones con el mismo tipo de tramo
const planSim=(p,q)=>{if(!q.seq)return 0;const n=Math.min(p.seq.length,q.seq.length);let m=0;for(let i=0;i<n;i++)if(p.seq[i][0]==q.seq[i][0])m++;let o=1;for(let i=0;i<4;i++)if(p.seq[i][0]!=q.seq[i][0])o=0;return o?1:m/n};
let PLANS=null;
function allPlans(){if(PLANS)return PLANS;PLANS=[null];const used=new Set();for(let L=1;L<=120;L++){if(L%10==0){PLANS.push({boss:1,sig:'JEFE'+L/10});continue}
 let best=null,bs=9;for(let s=0;s<60;s++){const p=planLv(L,s);let m=used.has(p.sig)?9:0;if(m<9)for(let j=1;j<L;j++){const q=PLANS[j];if(q){const v=planSim(p,q);if(v>m)m=v}}if(m<bs){bs=m;best=p;best.s=s}if(m<.34)break}
 used.add(best.sig);PLANS.push(best)}return PLANS}
const LVSIG=L=>allPlans()[((L-1)%120)+1].sig;
let ENC=0;function build(){const _r=Math.random;Math.random=mkRng(lv*7919+104729);try{build0()}finally{Math.random=_r}}
function build0(){
 G=Array.from({length:ROWS},()=>new Uint8Array(480));E=[];SPR=[];CO=[];DE=[];BU=[];PA=[];coins=0;STR={};PI=[];BL=[];IT=[];DC=[];FT=[];BX={};NEAR=null;
 let BASE=2;const rnd=Math.random,top=h=>(ROWS-h)*T;let c=0;ENC=0;const LVR=lv/100,DF=Math.min(.95,(lv-1)/55+rnd()*.12+wd()*.04+(hasM(5)?.25:0));
 const gr=(a,b,h)=>{for(let x=a;x<b;x++)for(let r=ROWS-h;r<ROWS;r++)G[r][x]=1};
 const coin=(x,y)=>CO.push({x,y,t:rnd()*6,w:20,h:24,got:0});
 const row=(c0,n,y)=>{for(let i=0;i<n;i++)coin((c0+i)*T+20,y)};
 const arc=(c0,n,y,hh)=>{for(let i=0;i<n;i++)coin((c0+i)*T+20,y-Math.sin(i/(n-1)*Math.PI)*hh)};
 const mob=(col,h)=>{const w=Math.min(4,lv/12|0),s=rnd()<.4&&(wd()==0||wd()==3),v=w&&rnd()<.7?VM[w]:0,sp=[1,1.7,1.2,1.5,2.1][v]+Math.min(.5,(lv-1)*.008),one=cc=>{E.push(s?{t:'s',x:cc*T,y:top(h)-26,w:30,h:26,vx:-.8-w*.15-Math.min(.5,(lv-1)*.008),vy:0,st:0,dir:-1,cool:0}:{t:'m',v,x:cc*T,y:top(h)-30,w:30,h:30,vx:-sp,vy:0,dead:0,dt:0,hpv:[2,2,3,4,5][v]});sk2(E[E.length-1])};one(col);if(rnd()<DF)one(col+1)};
 const stump=(col,h)=>{const en=ENC<2&&rnd()<.35;if(en)ENC++;PI.push({x:(col+1)*T,top:(ROWS-h-2)*T,en});for(let k=1;k<=2;k++)for(let j=0;j<2;j++)G[ROWS-h-k][col+j]=5;if(!en)E.push({t:'p',x:(col+1)*T-16,by:(ROWS-h-2)*T,y:0,w:32,h:44,ph:rnd()*6,up:0})};
 const deco=(a,n,h)=>{for(let i=0;i<n;i++)if(rnd()<.45)DE.push({t:rnd()<.6?0:1,x:(a+i)*T+rnd()*30,y:top(h),s:.8+rnd()*.5})};
 gr(0,14,BASE);arc(5,3,top(BASE)-30,50);row(8,4,top(BASE)-34);deco(0,14,BASE);c=14;G[ROWS-BASE-3][12]=3;BX['12,'+(ROWS-BASE-3)]={k:'w',i:1};
 if(isB()){const n=lv/10;gr(c,c+60,BASE);row(18,6,top(BASE)-34);for(const a of[21+(rnd()*4|0),43+(rnd()*4|0)]){const aw=4+(rnd()*2|0);for(let x=a;x<a+aw;x++)G[ROWS-BASE-3][x]=1;row(a,aw,top(BASE)-3*T-34)}G[ROWS-BASE-3][18]=3;BX['18,'+(ROWS-BASE-3)]={k:'a',i:0};G[ROWS-BASE-3][40]=3;BX['40,'+(ROWS-BASE-3)]={k:'w',i:Math.min(4,1+(n>>1)%4)};G[ROWS-BASE-3][30]=3;BX['30,'+(ROWS-BASE-3)]={k:'h',i:0};gr(c+60,c+62,BASE+5);deco(c,60,BASE);const hp=18+n*7;E.push(mkBoss(n,top(BASE)));BOSSE=E[E.length-1];FX=1e9;FY=top(BASE);LEN=(c+62)*T;return}
 const mob2=(col,h)=>{if(lv>1)mob(col,h)},PLN=allPlans()[((lv-1)%120)+1];
 const CH=[
  // 0 llano con enemigos
  (a,b)=>{const n=6+a%5;gr(c,c+n,BASE);row(c+1,n-2,top(BASE)-34);mob(c+(n>>1),BASE);if(b>6&&n>8)mob2(c+2,BASE);deco(c,n,BASE);c+=n},
  // 1 ladrillos y cajas en alto
  (a,b)=>{const n=8+a%5,len=Math.min(n-4,3+a%4);gr(c,c+n,BASE);for(let i=0;i<len;i++)G[ROWS-BASE-3][c+2+i]=(i+b)%2?3:2;row(c+2,len,top(BASE)-3*T-26);mob2(c+1,BASE);mob(c+n-2,BASE);deco(c,n,BASE);c+=n},
  // 2 foso con arco de monedas
  (a,b)=>{const mx=wd()==0?4:5,n=2+a%(mx-1);arc(c-1,n+2,top(BASE)-30,60+(b%4)*12);c+=n;gr(c,c+3+b%2,BASE);c+=3+b%2},
  // 3 meseta con tubería (escalera arriba y abajo)
  (a,b)=>{const st=2+a%2;let h=BASE;for(let i=0;i<st;i++){h++;gr(c,c+2,h);c+=2}const pl=7+(a+b)%3;gr(c,c+pl,h);stump(c+3,h);row(c+1,2,top(h)-34);row(c+pl-3,2,top(h)-34);DE.push({t:0,x:(c+pl-1)*T,y:top(h),s:1});c+=pl;for(let i=0;i<st;i++){h--;gr(c,c+2,h);c+=2}},
  // 4 horda
  (a,b)=>{const n=9+a%4;gr(c,c+n,BASE);mob(c+3,BASE);if(a%3)mob(c+5,BASE);mob2(c+n-2,BASE);if(b>5&&lv>8)mob(c+7,BASE);row(c+2,n-4,top(BASE)-34);deco(c,n,BASE);c+=n},
  // 5 tuberías
  (a,b)=>{const n=10+a%3;gr(c,c+n,BASE);stump(c+3,BASE);if(lv>1)stump(c+n-3,BASE);arc(c+2,5,top(BASE)-90,50);deco(c,n,BASE);c+=n},
  // 6 puente de ladrillos sobre el vacío (alturas 1-3)
  (a,b)=>{const st=2+a%3,gp=1+b%2;let x=c,pv=0;for(let i=0;i<st;i++){const hh=Math.max(1,Math.min(3,pv+((a>>i&1)?1:-1)));x+=gp;G[ROWS-BASE-hh][x]=2;G[ROWS-BASE-hh][x+1]=2;row(x,2,top(BASE)-hh*T-30);x+=2;pv=hh}c=x+gp;gr(c,c+3,BASE);c+=3},
  // 7 piedras alternas sobre el vacío
  (a,b)=>{const n=3+a%4,gp=1+b%2;let x=c;for(let i=0;i<n;i++){x+=gp;const hh=1+((a>>i)&1),ww=2+((b>>i)&1);for(let q=0;q<ww;q++)G[ROWS-BASE-hh][x+q]=1;row(x,ww,top(BASE)-hh*T-34);x+=ww}c=x+gp;gr(c,c+3,BASE);c+=3},
  // 8 pilares
  (a,b)=>{const np=2+a%2,sp=3+b%2,n=np*sp+4;gr(c,c+n,BASE);for(let i=0;i<np;i++){const x=c+2+i*sp,ph=1+((a>>(i+1))&1)+(lv>30?(b>>i)&1:0);for(let q=1;q<=ph;q++)G[ROWS-BASE-q][x]=1;row(x,1,top(BASE)-ph*T-34);if(i)mob2(x-1,BASE)}mob2(c+1,BASE);deco(c,n,BASE);c+=n},
  // 9 vallas bajas
  (a,b)=>{const n=10+a%4,sp=3+b%2;gr(c,c+n,BASE);let i=0;for(let x=c+2;x<c+n-3;x+=sp,i++){G[ROWS-BASE-1][x]=1;G[ROWS-BASE-1][x+1]=1;row(x,2,top(BASE)-T-34);if(lv>1&&i&&(a>>i&1))mob(x+2,BASE)}deco(c,n,BASE);c+=n},
  // 10 colina suave con monedas
  (a,b)=>{const st=2;let h=BASE;for(let i=0;i<st;i++){h++;gr(c,c+3,h);row(c,2,top(h)-34);c+=3}const pl=3+b%3;gr(c,c+pl,h);mob2(c+1,h);arc(c,pl,top(h)-34,40);c+=pl;for(let i=0;i<st;i++){h--;gr(c,c+3,h);row(c+1,2,top(h)-34);c+=3}},
  // 11 isla entre dos fosos
  (a,b)=>{const p1=2+a%3,p2=2+b%3,isl=2+(a+b)%3;arc(c-1,p1+2,top(BASE)-30,70);c+=p1;gr(c,c+isl,BASE);row(c,isl,top(BASE)-34);c+=isl;arc(c-1,p2+2,top(BASE)-30,70);c+=p2;gr(c,c+3,BASE);c+=3},
  // 12 doble piso (plataforma de ladrillos alta, enemigos debajo)
  (a,b)=>{const n=11+a%3,pl=5+b%4,s0=c+2+(a%2);gr(c,c+n,BASE);for(let x=s0;x<s0+pl;x++)G[ROWS-BASE-3][x]=2;row(s0,pl,top(BASE)-3*T-34);mob2(s0+1,BASE);mob(c+n-2,BASE);deco(c,n,BASE);c+=n},
  // 13 pirámide de ladrillos
  (a,b)=>{const pk=2+a%2,ns=2*pk-1,n=ns*2+4+(b%2);gr(c,c+n,BASE);for(let i=0;i<ns;i++){const hh=i<pk?i+1:2*pk-1-i,x=c+2+i*2;for(let q=1;q<=hh;q++){G[ROWS-BASE-q][x]=2;G[ROWS-BASE-q][x+1]=2}row(x,2,top(BASE)-hh*T-34)}mob2(c+1,BASE);mob(c+n-2,BASE);deco(c,n,BASE);c+=n},
  // 14 abismo con plataforma central
  (a,b)=>{const g1=2+a%2,pw=2+b%2,g2=2+(a>>1)%2,hh=1+(a+b)%2;arc(c-1,g1+2,top(BASE)-30,70);c+=g1;for(let q=0;q<pw;q++)G[ROWS-BASE-hh][c+q]=1;row(c,pw,top(BASE)-hh*T-34);c+=pw;arc(c-1,g2+2,top(BASE)-30,70);c+=g2;gr(c,c+3,BASE);c+=3}];
 // relieve: cada nivel tiene un perfil de altura propio (llano, colinas, subida, valle, olas); sube de 1 en 1 y baja hasta 2
 const PRF=rnd()*5|0,PH=rnd()*6.28,AMP=lv<3?0:Math.min(wd()==2||wd()==4?3:2,1+(lv/30|0)+(wd()>=3?1:0)),shp=i=>{const u=i/PLN.seq.length;return PRF==0?0:PRF==1?Math.sin(i*.8+PH)*.5+.5:PRF==2?u:PRF==3?1-u:Math.abs(Math.sin(i*.5+PH))};
 for(let i=0;i<PLN.seq.length&&c<400;i++){const[k,a,b]=PLN.seq[i],c00=c,tb=2+Math.round(AMP*shp(i));if(i&&tb!=BASE){const nb=tb>BASE?BASE+1:Math.max(tb,BASE-2);gr(c,c+2,nb);BASE=nb;row(c,2,top(BASE)-34);c+=2}CH[k](a,b);itm(c00,c,i);if(rnd()<.5)gr(c,c+2,BASE),c+=2}
 if(wd()==0&&lv>1){const ns=1+(li()/5|0);for(let t=0,n=0;t<90&&n<ns;t++){const cc=18+(rnd()*Math.max(1,c-40)|0);let r=0;while(r<ROWS&&!G[r][cc])r++;if(r<8||r>=ROWS||!G[r][cc+1]||G[r-1][cc+1]||!G[r][cc-2]||!G[r][cc+3])continue;let ok=1;for(let q=1;q<=5;q++)if(G[r-q][cc]||G[r-q][cc+1])ok=0;if(!ok||SPR.some(s=>Math.abs(s.x-cc*T)<240))continue;SPR.push({x:cc*T+5,y:r*T-14,w:30,h:14,t:0});for(let q=0;q<3;q++)coin(cc*T+20,r*T-110-q*34);n++}}
 {const nb=Math.min(wd()==5?8:14,(lv>=6?((lv-4)/8|0)+1:0)+(hasM(6)?3:0));for(let i=0;i<nb;i++){const by=top(BASE)-(110+rnd()*90);E.push({t:'k',x:(24+rnd()*(c-30))*T,y:by,by,w:30,h:22,vx:-1.1-Math.min(.9,lv*.01),ph:rnd()*6,dead:0,dt:0,hpv:2,sp:FLY[wd()]})}}
 if(lv%2==0){const bc=14+(rnd()*Math.max(1,c-24)|0),rw=ROWS-BASE-3;if(!G[rw][bc]&&G[ROWS-BASE][bc]){G[rw][bc]=3;BX[bc+','+rw]={k:'h',i:0}}}gr(c,c+22,BASE);FX=(c+6)*T;FY=top(BASE);deco(c,22,BASE);LEN=(c+22)*T;
 // fijar enemigos en su sitio
}
function start(){PU.mag=PU.boot=0;UG=0;SAVE=null;cavDone=0;BOSSE=null;BP=[];BD=0;LB=240;WXT=180;build();if(hasM(1))for(const e of E)if(e.vx&&e.t!='B')e.vx*=1.35;ctot=CO.length;Object.assign(P,{pipe:0,x:80,y:300,vx:0,vy:0,g:0,f:1,inv:0,t:0,coy:0,buf:0,sx:80,sy:300});cx=0;if(useCP&&CPLV==lv&&CPX>0&&!isB()){P.x=P.sx=CPX;P.y=P.sy=CPY;P.inv=120;cx=CL(Math.max(0,P.x-300),0,Math.max(0,LEN-W))}else{CPX=0;CPN=0}CPLV=lv;useCP=0;combo=0;streak=0;stT=0;fcd=0;hs=0;sh=0;hf=0;setSt('play')}
const setSt=s=>{st=s;stAt=performance.now();document.body.classList.toggle('np',s!='play');if(s=='sel')selW=Math.min(5,((UNL-1)/20)|0);if(s!='play'){K.l=K.r=K.u=0;J.ax=J.up=0;inp.j=inp.f=inp.g=0}};
// ---------- física
