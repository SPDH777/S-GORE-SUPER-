const PU={mag:0,boot:0},PUM={mag:1,boot:1},PK=['mag','boot'],PUN=['IMÁN','BOTAS'],PUD=['Atrae las monedas','Corres más rápido'],PUB=[720,720],UPP=[[100,200,350,500,800],[100,200,350,500,800]];
let BX={},SH={w:0,oc:[1,0,0,0,0],os:[1,0,0,0,0],ch:0,sk:0},SHP='title',tab=0,smsg='',smt=0;
try{const z=JSON.parse(localStorage.getItem('sbg_shop'));if(z&&z.oc&&z.os)SH=z}catch(e){}SH.up=SH.up&&SH.up.length==3?[SH.up[1],SH.up[2]]:(SH.up&&SH.up.length==2?SH.up:[0,0]);SH.hx=Math.min(2,SH.hx|0);
let _sv='';const sv=()=>{try{const j=JSON.stringify(SH);if(j!==_sv){_sv=j;localStorage.setItem('sbg_shop',j)}}catch(e){}},gc=()=>{coins++;SH.w++};setInterval(sv,6000);addEventListener('pagehide',sv);document.addEventListener('visibilitychange',()=>{if(document.hidden)sv()});
const MH=()=>3+Math.min(2,SH.hx|0),LVP=[150,300];
const PR=[[0,100,200,200,400,10000],[0,150,300,300,600,10000]],SKN=['NORMAL','ORO','NEÓN','SANGRE','HIELO','VIP'],SKC=[0,['#ffd24a','#b8860b'],['#00ffd0','#007a66'],['#ff3a4a','#7a0010'],['#c8f0ff','#4a9ccf'],['#08080c','#1c1c26']];
const CHR=[{n:'BINO',cap:'#e0262c',sh:'#e0262c',ov:'#1e56c8',L:'B',eb:'#fff'},{n:'VERDE',cap:'#2fa84f',sh:'#2fa84f',ov:'#2a3fb0',L:'V',eb:'#fff'},{n:'FUEGO',cap:'#f4f4f4',sh:'#f4f4f4',ov:'#e0262c',L:'B',eb:'#e0262c',el:'#fff'},{n:'BRUTO',cap:'#ffd400',sh:'#ffd400',ov:'#7a2fb5',L:'R',eb:'#fff',el:'#7a2fb5'},{n:'DORADO',cap:'#ffc61a',sh:'#fff0a0',ov:'#b8860b',L:'B',eb:'#fff',el:'#b8860b'},{n:'VIP',cap:'#050507',sh:'#050507',ov:'#07070b',L:'V',eb:'#ff1a1a',el:'#000'}];
const openShop=()=>{SHP=st;tab=0;setSt('shop')},closeShop=()=>{sv();setSt(SHP)};
function shopClick(e){const r=cv.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*W,y=(e.clientY-r.top)/r.height*H;
 if(y>385&&x>300&&x<500){closeShop();return}if(y>64&&y<104){tab=Math.max(0,Math.min(2,Math.floor((x-20)/258)));return}
 if(tab==2){if(y>118&&y<370){const i=Math.floor((x-25)/258);if(i<0||i>2||x-25-i*258>240)return;const L=i<2?SH.up[i]:(SH.hx|0);smt=70;if(L>=(i<2?5:2)){smsg='Nivel máximo';return}const p=i<2?UPP[i][L]:LVP[L];if(SH.w>=p){SH.w-=p;if(i<2)SH.up[i]++;else SH.hx=L+1;smsg=i<2?'¡Mejorado!':'¡Vida extra comprada!';sfx(988,.2,'square',.06,400);sv()}else smsg='Te faltan '+(p-SH.w)+' monedas'}return}
 if(y>118&&y<370){const i=Math.floor((x-22)/127);if(i<0||i>5||x-22-i*127>120)return;const o=tab?SH.os:SH.oc,p=PR[tab][i];smt=70;
  if(!o[i]){if(SH.w>=p){SH.w-=p;o[i]=1;smsg='¡Comprado!';sfx(988,.2,'square',.06,400)}else{smsg='Te faltan '+(p-SH.w)+' monedas';return}}else smsg='Equipado';
  if(tab)SH.sk=i;else SH.ch=i;sv()}}
function shopBtn(){btn(W/2-108,314,216,44,'#33427a','#171f3f','rgba(255,208,74,.8)');icon('cart',W/2-80,337,.95);txt('TIENDA',W/2-52,337,15,'#fff','left','rgba(0,0,0,0)',0);rr(W/2+36,325,64,24,12,'rgba(0,0,0,.42)');icon('coin',W/2+50,337,.62);txt(String(SH.w),W/2+64,337,14,'#ffe680','left','rgba(0,0,0,0)',0);if(st!='title'){btn(W/2-108,364,216,44,'#33427a','#171f3f','rgba(150,200,255,.75)');icon('map',W/2-80,386,.8);txt('NIVELES',W/2-52,386,15,'#fff','left','rgba(0,0,0,0)',0)}}

// ---------- PODERES (estrella, imán, botas)
const puDur=i=>Math.round(PUB[i]*(1+.4*SH.up[i]));
function getPU(i){const k=PK[i];PU[k]=PUM[k]=puDur(i);score+=50;sfx(880,.12,'square',.07,500);setTimeout(()=>sfx(1320,.2,'square',.06,300),90);pt(P.x+13,P.y+20,14,'s',['#ff5a5a','#5ad8ff'][i]);vib(15)}
function puFx(){if(st!='play')return;if(PU.boot>0&&Math.abs(P.vx)>3.5&&frame%2==0)pt(P.x+13-P.f*10,P.y+P.h-4,1,'d','#7ad8ff')}
function puMag(){if(PU.mag>0)for(const k of CO)if(!k.got){const dx=P.x+13-k.x,dy=P.y+20-k.y,d=Math.hypot(dx,dy);if(d<170&&d>1){const v=Math.min(10,4+(170-d)*.04);k.x+=dx/d*v;k.y+=dy/d*v}}}
function puIcon(i,x,y,sc){g.save();g.translate(x,y);g.scale(sc,sc);g.lineJoin='round';g.lineCap='round';glow(0,0,30,['255,70,70','80,220,255'][i],.6);
 if(i==0){const U=(w,c)=>{g.strokeStyle=c;g.lineWidth=w;g.beginPath();g.moveTo(-8,-9);g.lineTo(-8,0);g.arc(0,0,8,Math.PI,0,true);g.lineTo(8,-9);g.stroke()};g.translate(0,3);U(13,'#1b1030');U(8,'#e0262c');g.strokeStyle='#1b1030';g.lineWidth=11;g.beginPath();g.moveTo(-8,-9);g.lineTo(-8,-5);g.moveTo(8,-9);g.lineTo(8,-5);g.stroke();g.strokeStyle='#e8eef5';g.lineWidth=7;g.stroke();g.strokeStyle='rgba(255,255,255,.4)';g.lineWidth=1.5;g.beginPath();g.arc(0,0,9,Math.PI*1.05,Math.PI*1.4);g.stroke()}
 else{g.beginPath();g.moveTo(-9,-11);g.lineTo(-1,-11);g.lineTo(0,-3);g.quadraticCurveTo(10,-3,11,4);g.lineTo(11,8);g.lineTo(-9,8);g.closePath();g.fillStyle='#38b6ff';g.fill();g.strokeStyle='#0a3a6a';g.lineWidth=2;g.stroke();g.fillStyle='#fff';g.fillRect(-9,5,20,3.5);g.beginPath();g.moveTo(-9,-8);g.lineTo(-17,-12);g.lineTo(-15,-5);g.lineTo(-9,-3);g.fillStyle='#fff';g.fill();g.stroke()}
 g.restore()}
function puHud(){let n=0;for(const k of PK)if(PU[k]>0)n++;if(!n||st=='shop')return;let j=0;PK.forEach((k,i)=>{if(PU[k]<=0)return;const x=W/2-n*26+26+j*52;j++;if(PU[k]<90&&frame%10<5)return;puIcon(i,x,80,.62);rr(x-18,98,36,6,3,'rgba(0,0,0,.55)');rr(x-17,99,Math.max(2,34*PU[k]/PUM[k]),4,2,['#ff5a5a','#38b6ff'][i])})}
function drawUp(){for(let i=0;i<3;i++){const x=25+i*258,L=i<2?SH.up[i]:(SH.hx|0),max=L>=(i<2?5:2),p=max?0:(i<2?UPP[i][L]:LVP[L]),can=!max&&SH.w>=p;rr(x,118,240,250,14,'#2a2150');g.strokeStyle='#4a3f80';g.lineWidth=3;g.strokeRect(x,118,240,250);rr(x+8,126,224,100,10,'#1a1438');
 if(i<2)puIcon(i,x+120,176,2.2);else{glow(x+120,176,60,'255,80,100',.35);icon('heart',x+120,176,3.6,1)}
 txt(i<2?PUN[i]:'VIDAS',x+120,242,19,'#fff','center','#14102a',4);txt(i<2?PUD[i]:'+1 corazón al empezar cada nivel',x+120,262,12,'#cfc6ff','center','#14102a',3);
 {const nb=i<2?5:2;for(let k=0;k<nb;k++)rr(x+122-nb*12+k*24,274,20,10,3,k<L?'#ffb300':'#3a2f66')}
 txt(i<2?'Dura '+(puDur(i)/60).toFixed(1)+'s'+(max?'':'  →  '+(PUB[i]*(1+.4*(L+1))/60).toFixed(1)+'s'):'Vidas: '+(3+L)+(max?'':'  →  '+(4+L)),x+120,300,13,'#9cff9c','center','#062a10',3);
 rr(x+20,316,200,38,10,max?'#555a66':can?'#2aa84a':'#6a2a3a');if(max)txt('NIVEL MÁXIMO',x+120,335,15,'#fff','center','#14102a',3);else{icon('coin',x+62,335,.7);txt('MEJORAR  '+p,x+130,335,15,'#fff','center','#14102a',3)}}}
function drawShop(){const tm=performance.now()/16.6;g.fillStyle='#14102a';g.fillRect(0,0,W,H);g.fillStyle='#241a4a';g.fillRect(0,0,W,56);
 icon('cart',48,28,1.4);txt('TIENDA',170,28,30,'#ffe14a','center','#4a1a00',7);icon('coin',W-170,28,1.3);txt(String(SH.w),W-148,28,28,'#ffe680','left','#3a2a00',6);
 ['ROPA','ARMAS','PODERES'].forEach((z,i)=>{const ta=tab==i,tx=20+i*258,tg=g.createLinearGradient(0,66,0,102);tg.addColorStop(0,ta?'#ffd25a':'#3b3170');tg.addColorStop(1,ta?'#f0a000':'#2a2252');rr(tx,66,250,36,10,tg);g.strokeStyle=ta?'rgba(255,255,255,.55)':'rgba(255,255,255,.14)';g.lineWidth=1.5;g.beginPath();g.roundRect?g.roundRect(tx+.75,66.75,248.5,34.5,9.5):g.rect(tx,66,250,36);g.stroke();tabIcon(i,55+i*258,84,ta?'#4a2a00':'#fff');txt(z,150+i*258,85,18,tab==i?'#4a2a00':'#fff','center',tab==i?'#ffe9a0':'#14102a',3)});
 const o=tab?SH.os:SH.oc,sl=tab?SH.sk:SH.ch;
 if(tab==2)drawUp();else for(let i=0;i<6;i++){const x=22+i*127,on=sl==i;rr(x,118,120,250,14,on?'#3d5a2a':'#2a2150');g.strokeStyle=on?'#9cff9c':i==5?'#ffd700':'#4a3f80';g.lineWidth=3;g.strokeRect(x,118,120,250);
  g.save();g.beginPath();g.rect(x+5,123,110,148);g.clip();const gd=g.createLinearGradient(0,123,0,271);gd.addColorStop(0,i==5?'#14040a':'#4fa9ee');gd.addColorStop(1,i==5?'#3a0a12':'#d6f2ff');g.fillStyle=gd;g.fillRect(x+5,123,110,148);
  if(tab){g.translate(x+60,200);g.scale(2.1,2.1);g.translate(-12,0);gunShape(2,i)}else{g.translate(x+60,262);g.scale(2.3,2.3);drawBino(0,0,1,tm*.05,0,0,0,i)}g.restore();
  txt(tab?SKN[i]:CHR[i].n,x+60,290,16,'#fff','center','#14102a',4);rr(x+8,310,104,36,10,on?'#2e8a3e':o[i]?'#ffb300':SH.w>=PR[tab][i]?'#2aa84a':'#6a2a3a');
  const bu=!on&&!o[i];if(bu)icon('coin',x+27,328,.7);txt(on?'EQUIPADO':o[i]?'EQUIPAR':String(PR[tab][i]),x+(bu?70:60),328,15,'#fff','center','#14102a',3);if(i==5)txt(tab?'x2 daño · balas ∞':'+Veloz · +escudo',x+60,358,11,'#ffe680','center','#14102a',3)}
 if(smt>0){smt--;txt(smsg,W/2,376,16,'#ffe680','center','#14102a',4)}btn(300,392,200,40,'#f0504a','#b01820');txt('VOLVER',400,412,20,'#fff','center','#4a0008',4)}
// ---------- SELECTOR DE NIVELES
let selW=0;const WN=['BOSQUE','INVIERNO','INFIERNO','ALCANTARILLA','CIELO','MAR'],WE=['w0','w2','w4','p3','p4','w0'];
function playLv(n){lv=n;score=0;hp=MH();kills=0;wp=0;WI=[1,0,0,0,0,0,0,0];AM=[999,0,0,0,0,0,0,0];start()}
function drawSel(){const th=TH[selW],gd=g.createLinearGradient(0,0,0,H);gd.addColorStop(0,th.a);gd.addColorStop(1,th.b);g.fillStyle=gd;g.fillRect(0,0,W,H);g.fillStyle=th.gr;g.fillRect(0,402,W,50);g.fillStyle=th.d;g.fillRect(0,418,W,34);
 txt('ELIGE TU NIVEL',W/2,30,32,'#ffe14a','center','#4a1a00',7);btn(14,12,96,34,'#f0504a','#b01820');txt('‹ INICIO',62,29,16,'#fff','center','#4a0008',3);
for(let i=0;i<6;i++){const x=12+i*128,y=62,lk=i*20+1>UNL,on=i==selW,dn=Math.max(0,Math.min(20,UNL-1-i*20)),tt=TH[i];
  g.save();if(on){g.shadowColor='rgba(255,190,40,.7)';g.shadowBlur=16}
  const cg=g.createLinearGradient(0,y,0,y+92);cg.addColorStop(0,lk?'#2b2d3d':'#2a3563');cg.addColorStop(1,lk?'#1c1e2b':'#171d3d');rr(x,y,120,92,14,cg);g.restore();
  g.strokeStyle=on?'#ffc83a':'rgba(255,255,255,.16)';g.lineWidth=on?3:1.5;g.beginPath();g.roundRect?g.roundRect(x+1.5,y+1.5,117,89,12.5):g.rect(x,y,120,92);g.stroke();
  const bg_=g.createLinearGradient(0,y+4,0,y+36);bg_.addColorStop(0,lk?'#555a6e':tt.a);bg_.addColorStop(1,lk?'#3a3e50':tt.b);g.beginPath();g.arc(x+60,y+20,16,0,7);g.fillStyle=bg_;g.fill();g.strokeStyle='rgba(255,255,255,.55)';g.lineWidth=1.5;g.stroke();
  if(i==5&&!lk){g.strokeStyle='#fff';g.lineWidth=2.4;g.lineCap='round';for(let k=0;k<3;k++){g.beginPath();g.moveTo(x+46,y+14+k*6);g.bezierCurveTo(x+52,y+9+k*6,x+56,y+19+k*6,x+60,y+14+k*6);g.bezierCurveTo(x+64,y+9+k*6,x+68,y+19+k*6,x+74,y+14+k*6);g.stroke()}}else icon(lk?'lock':WE[i],x+60,y+20,.72);
  g.textAlign='center';g.textBaseline='middle';g.fillStyle=on?'#ffd25a':'#9aa6cc';g.font='700 10px "Segoe UI","SF Pro Display",Arial,sans-serif';try{g.letterSpacing='1.5px'}catch(e){}g.fillText('MUNDO '+(i+1),x+60,y+46);
  g.fillStyle=lk?'#7c8196':'#fff';g.font='800 13px "Segoe UI","SF Pro Display",Arial,sans-serif';try{g.letterSpacing='.6px'}catch(e){}g.fillText(WN[i],x+60,y+62);try{g.letterSpacing='0px'}catch(e){}
  if(lk){g.fillStyle='#7c8196';g.font='600 10px "Segoe UI",Arial,sans-serif';g.fillText('Bloqueado',x+60,y+80)}
  else{rr(x+14,y+75,92,7,3.5,'rgba(255,255,255,.14)');if(dn>0)rr(x+14,y+75,Math.max(7,92*dn/20),7,3.5,dn>=20?'#ffc83a':'#6fdc6a');g.fillStyle='#dfe5fb';g.font='700 10px "Segoe UI",Arial,sans-serif';g.textAlign='right';g.fillText(dn+'/20',x+106,y+79);g.textAlign='center'}}
 for(let n=0;n<20;n++){const x=25+(n%10)*76,y=170+(n/10|0)*92,num=selW*20+n+1,lk=num>UNL,cur=num==UNL;rr(x,y,68,80,12,lk?'#3a3a4a':cur?'#2aa84a':'#2a6aa8');
  if(lk)icon('lock',x+34,y+36,1.3);else txt(String(n+1),x+34,y+34,30,'#fff','center','#14102a',5);if(num<UNL)for(let k=0;k<3;k++){g.globalAlpha=k<(STARS[num]||1)?1:.25;icon('star',x+14+k*20,y+62,.55)}g.globalAlpha=1;if(cur)icon('play',x+34,y+62,.7)}
 if(smt>0)smt--;txt(smt>0?smsg:'Gana el nivel 20 de un mundo para abrir el siguiente',W/2,372,16,'#fff','center','#14102a',4)}
function selClick(e){const r=cv.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*W,y=(e.clientY-r.top)/r.height*H;
 if(x<115&&y<50){setSt('title');return}
 if(y>62&&y<154){const i=Math.floor((x-12)/128);if(i>=0&&i<6){if(i*20+1>UNL){smsg='Termina el mundo '+i+' para abrir este';smt=90}else selW=i}return}
 if(y>170&&y<342&&(y<250||y>262)){const c=Math.floor((x-25)/76);if(c<0||c>9||x-25-c*76>68)return;const n=selW*20+(y>262?10:0)+c+1;if(n>UNL){smsg='Bloqueado: gana el nivel anterior';smt=90;return}playLv(n)}}
// ---------- GORE + ARMAS
