let hs=0,sh=0,hf=0,kills=0,streak=0,stT=0,GORE=1,wp=0,WI=[1,0,0,0,0,0,0,0],AM=[999,0,0,0,0,0,0,0],fcd=0,flash=0,rec=0,BL=[],IT=[],DC=[],FT=[],VG,NEAR=null;
const rollWeapon=level=>1+(Math.random()*(level>=18?8:level>=12?7:level>=7?6:4)|0);
const BC=['#7a0a12','#9a1018','#5e060c','#b01a22'],DCC=['#7a0012','#a00018','#5a000d'];
const WP=[
{n:'PISTOLA',r:17,d:1,s:.02,v:11,p:1,l:55,a:0,k:2,m:15,g:[[-3,-3,14,5,'#3a3a42'],[-1,2,4,8,'#222',10],[9,-4,7,3,'#6a6a74']]},
{n:'MP5',r:5,d:1,s:.09,v:13,p:1,l:55,a:60,k:3,m:25,g:[[-12,-2,8,3,'#222'],[-4,-4,20,7,'#2b2b30'],[0,-6,12,2,'#555'],[16,-3,9,3,'#111'],[3,3,4,11,'#15151a',8],[-2,3,4,6,'#222']]},
{n:'AK-47',r:7,d:2,s:.05,v:15,p:1,l:70,a:40,k:4,m:35,pr:1,g:[[-15,-2,11,5,'#8b5a2b'],[-4,-4,22,6,'#33343a'],[14,-3,10,5,'#8b5a2b'],[24,-2,11,2,'#111'],[5,2,5,13,'#1a1a1a',-16],[8,10,5,3,'#1a1a1a'],[-1,2,3,6,'#222']]},
{n:'ESCOPETA',r:38,d:1,s:.2,v:12,p:7,l:24,a:12,k:9,m:31,g:[[-15,-2,10,5,'#6a4320'],[-5,-4,20,6,'#4a4a50'],[11,-3,19,4,'#2a2a2e'],[13,1,10,3,'#6a4320'],[28,-4,2,6,'#aaa']]},
{n:'MINIGUN',r:3,d:1,s:.12,v:14,p:1,l:60,a:150,k:3,m:37,g:[[-6,-6,20,12,'#555'],[14,-6,20,3,'#888'],[14,-1,20,3,'#777'],[14,4,20,3,'#888'],[34,-7,3,16,'#333'],[-8,6,12,9,'#6a5a20']]},
{n:'BAZUCA',r:48,d:4,s:.025,v:8,p:1,l:100,a:12,k:12,m:28,rad:94,kind:'rocket',g:[[-13,-5,23,10,'#4d563c'],[-5,-7,14,14,'#727b55'],[8,-3,13,6,'#a9ad91'],[18,-2,10,4,'#c7c8b0'],[-12,-7,4,3,'#c72d23'],[-12,4,4,3,'#c72d23']]},
{n:'LÁSER',r:4,d:2,s:.005,v:21,p:1,l:54,a:72,k:2,m:25,pr:5,kind:'laser',g:[[-12,-4,27,8,'#282b43'],[-7,-6,12,3,'#7b83a8'],[12,-3,12,5,'#4b506a'],[21,-2,7,4,'#78f4ff'],[-9,4,10,4,'#202337']]},
{n:'CRIOGÉNICA',r:9,d:1,s:.07,v:13,p:3,l:46,a:48,k:4,m:23,kind:'cryo',g:[[-13,-4,22,8,'#527d9a'],[-8,-7,13,3,'#c1f6ff'],[7,-3,14,5,'#9deeff'],[16,-2,8,3,'#e5ffff'],[-7,4,9,5,'#31536d']]}];
WP[0].g.push([-4,-5,2,2,'#777'],[12,-5,2,2,'#777'],[3,3,6,1.6,'#555']);
WP[1].g.push([-20,-1,8,2,'#555'],[10,4,3,6,'#222'],[4,-9,6,3,'#c22']);
WP[2].g.push([35,-3,3,4,'#444'],[14,-8,8,3,'#8b5a2b']);
WP[3].g.push([29,-6,2,3,'#ddd'],[-1,3,3,4,'#c22'],[3,3,3,4,'#c22'],[7,3,3,4,'#c22']);
WP[4].g.push([0,-12,10,3,'#333'],[-9,5,12,12,'#6a5a20',0,1],[32,-9,6,18,'#444',0,1]);
WP[5].g.push([16,-4,2,2,'#fff0a0'],[8,-8,7,2,'#8b916e']);WP[6].g.push([19,-1,4,2,'#bffcff'],[2,-8,9,2,'#9aa5dc']);WP[7].g.push([18,-2,6,2,'#fff'],[4,-9,7,2,'#b7f8ff']);
const TRC=[0,'255,215,70','0,255,208','255,50,70','170,230,255','255,30,40','255,115,35','80,235,255','155,245,255'];
const WCOL=['#fff0a0','#ffe04a','#00ffd0','#ff4a5c','#d8f6ff','#ff2a32','#ff7830','#45efff','#c5fcff'];
const CT={k:['#4e2462','#ff3030','#3a1a4a'],B:['#7a1020','#ff3a20','#2a0508','#ffd0a0'],m:['#b5542a','#f0c892','#7d3317'],s:['#e0482a','#d9e38c','#a52a10'],p:['#2f9a2f','#d6283a','#fff'],b:['#e0262c','#1e56c8','#f6bf8e','#5a3216']};
const NBC={};function nz(d,v,fc){if(!AC||!sndOn)return;const n=AC.sampleRate*d|0,k_=n+'_'+AC.sampleRate;let b=NBC[k_];if(!b){b=AC.createBuffer(1,n,AC.sampleRate);const a=b.getChannelData(0);for(let i=0;i<n;i++)a[i]=(Math.random()*2-1)*(1-i/n);NBC[k_]=b}const s=AC.createBufferSource(),f=AC.createBiquadFilter(),o=AC.createGain();s.buffer=b;f.type='lowpass';f.frequency.value=fc;o.gain.value=v;s.connect(f);f.connect(o);o.connect(AC.destination);s.start()}
const ft=(x,y,s,c)=>FT.push({x,y,s,c,l:55}),dc=(x,y,rx,ry)=>{DC.push({x,y,rx,ry,c:DCC[Math.random()*3|0],t:frame});if(DC.length>DCMAX)DC.shift()};
const GLC={};
function glow(x,y,r,rgb,a){let q=GLC[rgb];if(!q){q=GLC[rgb]=document.createElement('canvas');q.width=q.height=256;const c=q.getContext('2d'),h=c.createRadialGradient(128,128,0,128,128,128);h.addColorStop(0,'rgba('+rgb+',1)');h.addColorStop(1,'rgba('+rgb+',0)');c.fillStyle=h;c.fillRect(0,0,256,256)}
 const ga=g.globalAlpha;g.globalCompositeOperation='lighter';g.globalAlpha=Math.min(1,ga*a);g.drawImage(q,x-r,y-r,r*2,r*2);g.globalAlpha=ga;g.globalCompositeOperation='source-over'}
function cmp(a,f){let j=0;for(let i=0;i<a.length;i++){const x=a[i];if(f(x))a[j++]=x}a.length=j;return a}
let AR=[],SS=[];
function sps(x,y,vx,vy,n){if(GORE)AR.push({x,y,vx,vy,l:n,n})}
function ssp(n,x=P.x+13,y=P.y+14){if(!GORE)return;for(let i=0;i<n;i++){SS.push({x:x+R(-18,18),y:y+R(-12,15),r:R(2,7),dy:R(.3,1.2),l:R(160,260)});if(SS.length>100)SS.shift()}}
function pool(x,y,n){if(!GORE)return;const c=Math.floor(x/T);for(let r=Math.max(0,Math.floor(y/T));r<ROWS;r++)if(solid(c,r)){for(let i=0;i<n;i++)dc(x+R(-14,14),r*T-1,R(4,12),R(1.2,2.6));return}}
function bleed(x,y,n,vx=0){if(!GORE){pt(x,y,n>0?5:0,'s','#ffd400');return}
 const count=Math.min(90,TOUCH?Math.ceil(n*.6):n);for(let i=0;i<count;i++){const a=R(0,6.28),sp=R(.5,1)*R(2,8);PA.push({k:'b',x:x+R(-2,2),y:y+R(-2,2),vx:vx+Math.cos(a)*sp,vy:Math.sin(a)*sp-R(1,4),l:R(90,170),c:BC[Math.random()*4|0],s:R(1.4,4.4)})}
 if(n>12){PA.push({k:'m',x,y,vx:0,vy:-.3,l:18,s:R(24,42)});ssp(Math.min(7,2+(n/15|0)),x,y);for(let i=0;i<5;i++)sps(x,y,vx*.4+R(-4,4),R(-10,-3),R(18,35))}}
function dpg(p){if(p.k=='m'){const q=g.createRadialGradient(p.x,p.y,0,p.x,p.y,p.s*(2-p.l/14));q.addColorStop(0,'rgba(150,0,18,'+.4*p.l/14+')');q.addColorStop(1,'rgba(150,0,18,0)');g.fillStyle=q;g.fillRect(p.x-60,p.y-60,120,120);return}
 if(p.k=='b'){const sp=Math.hypot(p.vx,p.vy),k=Math.min(1.4,sp*.18);g.globalAlpha=Math.min(1,p.l/30);g.strokeStyle=p.c;g.lineCap='round';g.lineWidth=p.s;g.beginPath();g.moveTo(p.x,p.y);g.lineTo(p.x-p.vx*k,p.y-p.vy*k);g.stroke();g.globalAlpha=1;return}
 g.save();g.translate(p.x,p.y);g.rotate(p.r);
 if(p.k=='k')rr(-2,-1,4,2,.5,p.c);
 else if(p.e){ellipse(0,0,p.s*.9,p.s*.9,'#fff');ellipse(p.s*.3,0,p.s*.4,p.s*.4,'#111');g.strokeStyle='#a00018';g.lineWidth=1.2;g.beginPath();g.arc(0,0,p.s*.9,0,5);g.stroke()}
 else{const s=p.s,h=p.id||(p.id=Math.random()*9);g.fillStyle=p.c;g.beginPath();for(let i=0;i<6;i++){const a=i/6*6.283,r=s*(.65+.5*hsh(h,i));g.lineTo(Math.cos(a)*r*1.3,Math.sin(a)*r*.9)}g.closePath();g.fill();g.strokeStyle='rgba(0,0,0,.45)';g.lineWidth=.8;g.stroke();ellipse(s*.35,0,s*.5,s*.4,'#8a0014');if(h>6)ellipse(s*.8,0,s*.35,s*.25,'#eee3cf')}
 g.restore()}
function drawDC(){if(!GORE)return;for(const d of DC){if(d.x<cx-30||d.x>cx+W+30)continue;const gr=Math.min(1,(frame-(d.t||0))/45),rx=d.rx*(.55+.45*gr);ellipse(d.x,d.y,rx*1.18,d.ry*1.25,'rgba(40,0,6,.55)');ellipse(d.x,d.y,rx,d.ry,d.c);ellipse(d.x-rx*.25,d.y-d.ry*.3,rx*.35,d.ry*.3,'rgba(255,90,100,.28)')}}
function post(){if(P.pipe){g.fillStyle='rgba(0,0,0,'+(P.pipe.ph?1-P.pipe.t/26:P.pipe.t/26)+')';g.fillRect(0,0,W,H)}if(!VG){VG=g.createRadialGradient(W/2,H/2,H*.35,W/2,H/2,W*.62);VG.addColorStop(0,'rgba(0,0,0,0)');VG.addColorStop(1,'rgba(10,30,60,.2)')}
 g.fillStyle=VG;g.fillRect(0,0,W,H);g.fillStyle='rgba(255,170,90,.035)';g.fillRect(0,0,W,H);
 if(hf>0){g.fillStyle='rgba(160,0,16,'+hf/220+')';g.fillRect(0,0,W,H)}
 if(hp==1&&st=='play'){g.fillStyle='rgba(120,0,0,'+(.03+.02*Math.sin(frame*.15))+')';g.fillRect(0,0,W,H)}
 for(const s of (GORE?SS:[])){s.l--;if(s.l<=120)s.y+=s.dy*.35;const sx=s.x-cx,sy=s.y-OY;if(sx<-30||sx>W+30||sy>H+20)continue;g.globalAlpha=Math.min(.8,s.l/110);ellipse(sx,sy,s.r,s.r*.85,'#7a0010');ellipse(sx-s.r*.3,sy-s.r*.3,s.r*.28,s.r*.18,'rgba(255,140,150,.4)');rr(sx-2.5,sy,5,Math.min(70,(260-s.l)*.3),2.5,'#7a0010');g.globalAlpha=1}cmp(SS,s=>s.l>0)}
function gibs(x,y,t,n){if(!GORE)return;const c=CT[t]||CT.m;for(let i=0;i<n;i++)PA.push({k:'g',x:x+R(-4,4),y:y+R(-4,4),vx:R(-5,5),vy:R(-11,-2),l:R(360,700),c:c[i%c.length],s:R(3.5,8),r:R(0,6),vr:R(-.4,.4),e:i==0})}
function gibP(){pool(P.x+13,P.y+P.h,14);ssp(8);for(let i=0;i<5;i++)sps(P.x+13,P.y+20,R(-5,5),R(-11,-5),R(25,45));bleed(P.x+13,P.y+20,70,0);gibs(P.x+13,P.y+20,'b',12);sh=16;hs=6;nz(.4,.35,600)}
function splat(e){pool(e.x+15,e.y+e.h,8);bleed(e.x+15,e.y+8,30,0);gibs(e.x+15,e.y+10,e.t,6);nz(.15,.2,700);sh=Math.max(sh,4);hs=1}
function kill(e,vx){const x=e.x+e.w/2,y=e.y+e.h/2,pts=100*Math.min(++streak,10);stT=170;kills++;pool(x,y+e.h/2,9);sps(x,y,R(-3,3),-7,30);ssp(4);gc();score+=pts;bleed(x,y,48,vx*.35);gibs(x,y,e.t,11);nz(.22,.3,650);sfx(90,.15,'sine',.1,-40);hs=2;sh=Math.max(sh,7+Math.min(streak,6));vib(15);
 ft(x,y-18,'+'+pts,'#ffe14a');if(streak>1)ft(x,y-34,'x'+streak,'#ff3b4e');for(let i=0;i<3;i++)PA.push({k:'c',x,y,vx:R(-2,2),vy:R(-8,-4),l:30,s:1});
 
 if(e.t=='p')e.x=-99999;e.dead=3}
function hitE(e,b){if(e.t=='B'&&(e.shield||!e.act)){pt(b.x,b.y,3,'s','#9ad8ff');sfx(900,.04,'square',.03);return}if(e.hp==null)e.hp=e.hpv||{m:2,s:3,p:4}[e.t];e.hp-=b.d;e.hf=4;if(b.kind=='cryo'&&e.t!='B'){e.fz=48;if(e.fvx==null)e.fvx=e.vx;e.vx*=.35}bleed(b.x,b.y,7,b.vx*.25);sfx(180,.06,'square',.04);score+=10;if(e.hp<=0)kill(e,b.vx)}
function explode(b,skip){if(!b.rad)return;const rgb='255,125,45';glow(b.x,b.y,b.rad*.75,rgb,.85);pt(b.x,b.y,18,'s','#ffb14b');if(GORE){bleed(b.x,b.y,24,0);for(let i=0;i<5;i++)sps(b.x,b.y,R(-5,5),R(-9,-3),R(20,34))}for(const e of E){if(e.dead||e===skip)continue;const d=Math.hypot(e.x+e.w/2-b.x,e.y+e.h/2-b.y);if(d<b.rad)hitE(e,{...b,d:Math.max(1,b.d*(1-d/b.rad)*.75),rad:0,kind:''})}sh=Math.max(sh,7);nz(.18,.15,1200);sfx(75,.18,'sawtooth',.08,-40)}
function muz(){const w=WP[wp],a=P.aim||0,l=12+w.m;return[P.x+13+P.f*Math.cos(a)*l,P.y+P.h-19-Math.sin(a)*(l+2)]}
function shoot(){const w=WP[wp];fcd=SH.sk==5?Math.max(2,Math.round(w.r*.6)):w.r;if(wp&&SH.sk!=5)AM[wp]--;rec=1;flash=3;const[mx,my]=muz(),ab_=P.aim||0;
 for(let i=0;i<w.p;i++){const a=R(-w.s,w.s);BL.push({x:mx+R(-1,1)*Math.sin(ab_),y:my+R(-1,1)*Math.cos(ab_),vx:P.f*Math.cos(ab_+a)*w.v,vy:-Math.sin(ab_+a)*w.v,d:w.d*(SH.sk==5?2:1),l:w.l,pr:SH.sk==5?Math.max(w.pr||0,2):(w.pr||0),kind:w.kind||'',rad:w.rad||0,col:WCOL[wp]})}
 PA.push({k:'k',x:P.x+13,y:my-3,vx:-P.f*R(1,3),vy:R(-5,-2),l:60,c:'#e8b830',s:3,r:0,vr:R(-.5,.5)});
 if(SH.sk)pt(mx,my,3,'s',SH.sk==5?'#ff2a2a':SKC[SH.sk][0]);P.vx-=P.f*w.k*.08;sh=Math.max(sh,w.k*.6);nz(.07+w.k*.018,.08+w.k*.025,3200-w.k*250);sfx(w.kind=='rocket'?75:w.kind=='laser'?880:w.kind=='cryo'?460:120,w.kind=='rocket'?.18:.1,'sawtooth',.05,w.kind=='laser'?480:-70);vib(w.kind=='rocket'?12:4);if(wp&&AM[wp]<=0)wp=0}
function give(i){if(!WI[i]){WI[i]=1;AM[i]=WP[i].a}else AM[i]=Math.min(AM[i]+WP[i].a,WP[i].a*3);wp=i;ft(P.x+13,P.y-10,WP[i].n,'#9cff9c');sfx(880,.15,'square',.05,500)}
function ammoUp(){let b=wp;if(!b)for(let i=WP.length-1;i>0;i--)if(WI[i]){b=i;break}if(!b){give(1);return}AM[b]=Math.min(AM[b]+Math.ceil(WP[b].a*.5),WP[b].a*3);ft(P.x+13,P.y-10,'+MUNICIÓN','#ffe680');sfx(700,.12,'square',.05,300)}
function swp(){for(let i=1;i<=WP.length;i++){const n=(wp+i)%WP.length;if(WI[n]&&(!n||AM[n]>0)){wp=n;rec=0;sfx(700,.05,'square',.04);return}}}
function takeNear(){const it=NEAR;if(!it||it.g)return;it.g=1;NEAR=null;if(it.k=='w')give(it.i);else ammoUp();pt(it.x,it.y,8,'s','#9cff9c')}
function sel(n){if(WI[n]&&(!n||AM[n]>0))wp=n}
function itm(a,b,i){if(i%2)return;const k=i?(Math.random()<.4?-1:rollWeapon(lv)):2,it={k:k<0?'a':'w',i:k};let q=null;
 for(let r=0;r<ROWS&&!q;r++)for(let x=a;x<b;x++)if(G[r][x]==3&&!BX[x+','+r]){q=[x,r];break}
 for(let r=0;r<ROWS&&!q;r++)for(let x=a;x<b;x++)if(G[r][x]==2){q=[x,r];G[r][x]=3;break}
 if(!q)for(let d=0;d<b-a;d++){const x=a+((b-a)>>1)+(d%2?-1:1)*(d>>1),r=ROWS-5;if(x<a||x>=b)continue;if(G[ROWS-2][x]==1&&!G[ROWS-3][x]&&!G[ROWS-4][x]&&!G[r][x]&&!G[r-1][x]&&G[ROWS-2][x-1]==1&&G[ROWS-2][x+1]==1){G[r][x]=3;q=[x,r];break}}
 if(q)BX[q[0]+','+q[1]]=it}
function upG(){
 if(fcd>0)fcd--;{const tg_=(K.u||J.up)?((K.l||K.r||J.ax)?.785:1.5708):0;P.aim=(P.aim||0)+(tg_-(P.aim||0))*.4}if(rec>0)rec=Math.max(0,rec-.15);if(flash>0)flash--;
 if(inp.g&&fcd<=0)shoot();
 cmp(BL,b=>{b.x+=b.vx;b.y+=b.vy;if(--b.l<=0)return 0;
  if(solid(Math.floor(b.x/T),Math.floor(b.y/T))){if(b.rad)explode(b,null);else{pt(b.x,b.y,3,'s','#ffd86b');nz(.04,.05,3000)}return 0}
  b.h=b.h||[];
  for(const e of E){if(e.dead||b.h.includes(e)||(e.t=='p'&&e.up<.3))continue;
   if(b.x>e.x-2&&b.x<e.x+e.w+2&&b.y>e.y-2&&b.y<e.y+e.h+2){hitE(e,b);b.h.push(e);if(b.rad)explode(b,e);if(b.pr>0)b.pr--;else return 0}}
  return 1});
 NEAR=null;let nd=1e9;for(const it of IT){it.y+=(it.ty-it.y)*.14;if(it.k=='h'){if(Math.abs(it.x-P.x-13)<30&&Math.abs(it.y-P.y-22)<40){it.g=1;if(hp<MH()){hp++;ft(P.x+13,P.y-10,'+1 VIDA','#ff8a9a')}else{gc();gc();gc();ft(P.x+13,P.y-10,'+3 MONEDAS','#ffe680')}sfx(988,.2,'triangle',.07,500);setTimeout(()=>sfx(1318,.25,'triangle',.06,200),90);pt(P.x+13,P.y+14,12,'s','#ff6a7a');vib(20)}continue}if(it.k=='pu'){if(Math.abs(it.x-P.x-13)<26&&Math.abs(it.y-P.y-22)<36){getPU(it.i);it.g=1}continue}const dx=Math.abs(it.x-P.x-13),dy=Math.abs(it.y-P.y-22);if(dx<44&&dy<70&&dx+dy<nd){nd=dx+dy;NEAR=it}
  }
 cmp(IT,it=>!it.g)}
function pg(p){p.l--;if(p.y>ROWS*T+120){p.l=0;return}const bl=p.k=='b';p.vy=Math.min(p.vy+(bl?.28:.32),14);
 let nx=p.x+p.vx,c=Math.floor(nx/T),r=Math.floor(p.y/T);
 if(solid(c,r)){if(bl){dc(p.vx>0?c*T:(c+1)*T,p.y,R(1,2),R(2.5,5.5));p.l=0;return}p.vx*=-.5;nx=p.x}
 p.x=nx;let ny=p.y+p.vy;c=Math.floor(p.x/T);r=Math.floor(ny/T);
 if(solid(c,r)){if(bl){dc(p.x,p.vy>0?r*T:(r+1)*T,R(2,5.5),R(1,2));p.l=0;return}
  if(p.vy>2.5&&p.k=='g'&&GORE)dc(p.x,r*T,R(3,6),1.6);p.vy*=-.38;p.vx*=.72;ny=p.y;if(Math.abs(p.vy)<.9)p.vy=0}
 p.y=ny;if(!bl){p.r+=p.vr;p.vr*=.97;if(p.k=='g'&&Math.random()<.12&&Math.abs(p.vx)+Math.abs(p.vy)>1.5)PA.push({k:'b',x:p.x,y:p.y,vx:p.vx*.3,vy:0,l:100,c:BC[1],s:R(1.2,2.4)})}}

function gunShape(i,k){if(k==null)k=SH.sk;const t=performance.now()/16.6;WP[i].g.forEach(([x,y,w,h,c,a,o],n)=>{g.save();g.translate(x+w/2,y+h/2);g.rotate((a||0)*Math.PI/180);const col=k?SKC[k][n%2]:c;if(o){ellipse(0,0,w/2+1,h/2+1,'rgba(0,0,0,.65)');ellipse(0,0,w/2,h/2,col);ellipse(-w*.15,-h*.2,w*.22,h*.15,'rgba(255,255,255,.3)')}else{rr(-w/2-1,-h/2-1,w+2,h+2,2,'rgba(0,0,0,.65)');rr(-w/2,-h/2,w,h,1.5,col);g.fillStyle='rgba(255,255,255,.3)';g.fillRect(-w/2+1,-h/2+.5,Math.max(1,w-2),Math.max(1,h*.22));g.fillStyle='rgba(0,0,0,.28)';g.fillRect(-w/2+1,h*.24,Math.max(1,w-2),Math.max(1,h*.2))}g.restore()});skinFx(i,k,t)}
function skinFx(i,k,t){if(!k)return;let x0=1e9,x1=-1e9;for(const p of WP[i].g){x0=Math.min(x0,p[0]);x1=Math.max(x1,p[0]+p[2])}const w=x1-x0;
 if(k==5){const ta=performance.now()/16.6;glow(x0+w/2,0,w*.9,'255,20,30',.3+.12*Math.sin(ta*.25));g.save();g.globalCompositeOperation='lighter';for(let j=0;j<9;j++){const u=((ta*.035+j*.113)%1),fx=x0+w*(j/8)+Math.sin(ta*.1+j)*2;g.globalAlpha=(1-u)*.85;ellipse(fx,-3-u*16,2.6*(1-u)+.8,5.5*(1-u)+1.4,j%3?'#ff2a2a':'#ff8a1a')}g.restore();g.globalAlpha=1;ellipse(x0+w*.62,-2,1.6,1.1,'#ff1212')}
 else if(k==1)glow(x0+((t*.7)%(w+30))-15,-1,10,'255,245,170',.95);
 else if(k==2)glow(x0+w/2,0,w*.7,'0,255,208',.22+.14*Math.sin(t*.2));
 else if(k==3){for(let j=0;j<4;j++){const u=(t*.45+j*9)%22;g.globalAlpha=1-u/22;ellipse(x0+w*(.15+j*.23),6+u*.9,1.3,2+u*.1,'#c00018')}g.globalAlpha=1}
 else if(k==4){for(let j=0;j<4;j++){const a=Math.sin(t*.12+j*1.7);if(a>0){g.globalAlpha=a;const x=x0+w*(.1+j*.27),y=-5+(j%2)*8;rr(x-3,y-.7,6,1.4,.5,'#fff');rr(x-.7,y-3,1.4,6,.5,'#fff')}}g.globalAlpha=1}}
function gun(){g.save();g.translate(12-rec*3,-18);g.rotate(-rec*.05-(P.aim||0));gunShape(wp);g.restore()}

function drawIT(){for(const it of IT){if(Math.abs(it.x-cx-400)>480)continue;const y=it.y+Math.sin(frame*.08+it.t)*4,sl=it==NEAR;
 if(it.k=='w'){glow(it.x,y,sl?46:34,'120,255,140',sl?.8:.55);g.save();g.translate(it.x-14,y);g.scale(.9,.9);gunShape(it.i);g.restore();txt(WP[it.i].n,it.x,y-24,11,'#9cff9c','center','#062a10',3)}
 else if(it.k=='h'){glow(it.x,y,32,'255,80,100',.6);icon('heart',it.x,y,1.5,1)}else if(it.k=='pu'){puIcon(it.i,it.x,y,1.15)}else{glow(it.x,y,sl?40:28,'255,210,80',sl?.7:.45);rr(it.x-11,y-9,22,18,3,'#3b5a2a');rr(it.x-11,y-9,22,5,3,'#5f8a3a');for(let i=0;i<3;i++)rr(it.x-7+i*6,y-3,4,9,1,'#e8b830');txt('AMMO',it.x,y-20,10,'#ffe680','center','#2a1a00',3)}
 if(sl){g.strokeStyle='rgba(156,255,156,'+(.5+.4*Math.sin(frame*.2))+')';g.lineWidth=2.5;g.beginPath();g.arc(it.x,y,30,0,7);g.stroke();txt(TOUCH?'TOCA TOMAR':'V = TOMAR',it.x,y+36,12,'#fff','center','#062a10',4)}}}
function shadows(){const f=(x,y,w)=>{const c=Math.floor(x/T);for(let r=Math.max(0,Math.floor(y/T));r<ROWS;r++)if(solid(c,r)){const d=Math.max(0,1-(r*T-y)/160);if(d>0){g.globalAlpha=.3*d;ellipse(x,r*T-1,w*(.5+d*.5),w*.14,'#000');g.globalAlpha=1}return}};
 if(st!='over')f(P.x+13,P.y+P.h,22);for(const e of E)if(!e.dead&&e.t!='p'&&Math.abs(e.x-cx-400)<500)f(e.x+e.w/2,e.y+e.h,26)}
function drawBL(){if(flash>0&&st=='play'){const w=WP[wp],[mx,my]=muz();glow(mx,my,w.kind=='rocket'?105:w.kind=='laser'?44:80,TRC[SH.sk]||'255,190,70',.85);g.save();g.translate(mx,my);g.scale(P.f,1);g.rotate(-(P.aim||0));g.fillStyle='#fff3b0';g.beginPath();g.moveTo(0,0);g.lineTo(9,-7);g.lineTo(18+R(0,12),0);g.lineTo(9,7);g.fill();g.fillStyle='#ff9a20';g.beginPath();g.moveTo(0,0);g.lineTo(6,-3);g.lineTo(12+R(0,6),0);g.lineTo(6,3);g.fill();g.restore()}
 g.save();g.globalCompositeOperation='lighter';g.lineCap='round';for(const b of BL){const col=b.col||'#ffe080';g.strokeStyle=col;g.lineWidth=b.kind=='rocket'?7:b.kind=='laser'?5:3;g.beginPath();g.moveTo(b.x,b.y);g.lineTo(b.x-b.vx*(b.kind=='rocket'?2:1.6),b.y-b.vy*(b.kind=='rocket'?2:1.6));g.stroke();if(b.kind=='rocket'){glow(b.x,b.y,18,'255,100,30',.65);ellipse(b.x,b.y,5,3,'#fff0a0')}else if(b.kind=='cryo'){glow(b.x,b.y,12,'90,230,255',.7);ellipse(b.x,b.y,3,3,'#efffff')}else{g.strokeStyle='#fff';g.lineWidth=1.2;g.stroke()}}g.restore();
 for(const f of FT)txt(f.s,f.x,f.y,15,f.c,'center','#1b0008',4)}

function hud2(){const w=WP[wp];txt(w.n,20,92,17,'#fff','left','#1b2a5a',4);icon('bullet',27,114,.9);txt(wp?String(AM[wp]):'∞',42,114,20,wp&&AM[wp]<10?'#ff5a4a':'#ffe680','left','#1b2a5a',4);
 for(let i=0;i<WP.length;i++){const x=20+i*26;g.globalAlpha=WI[i]?1:.3;rr(x,128,22,22,5,i==wp?'#ffb300':'rgba(0,0,0,.5)');g.globalAlpha=1;txt(String(i+1),x+11,140,13,'#fff','center','#000',3)}
 icon('skull',28,166,.9);txt(String(kills),44,166,17,'#ff8a8a','left','#2a0008',4);if(streak>1&&stT>0)txt('x'+streak+' KILLS!',W/2,84,26+Math.min(streak,10),'#ff3b4e','center','#2a0008',6)}
function rays(tm){g.save();g.globalCompositeOperation='lighter';const w_=wd(),col=w_==3?'120,230,120':w_==2?'255,110,50':'255,240,190';for(let i=0;i<4;i++){const x=80+i*210+Math.sin(tm*.01+i)*30,q=g.createLinearGradient(x,0,x+120,300);q.addColorStop(0,'rgba('+col+',.13)');q.addColorStop(1,'rgba('+col+',0)');g.fillStyle=q;g.beginPath();g.moveTo(x,0);g.lineTo(x+50,0);g.lineTo(x+190,330);g.lineTo(x+70,330);g.fill()}g.restore();
 const f=g.createLinearGradient(0,300,0,H);f.addColorStop(0,'rgba(40,0,20,0)');f.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=f;g.fillRect(0,300,W,H-300)}
$('pn').onclick=()=>{tp(0);setSt('sel')};
$('pg').onclick=()=>{GORE=!GORE;if(!GORE){SS=[];DC=[];PA=PA.filter(p=>!['b','g','m'].includes(p.k))}$('pg').textContent='Gore: '+(GORE?'ON':'OFF')};
$('bw').addEventListener('pointerdown',e=>{e.stopPropagation();e.preventDefault();if(st=='play'){if(NEAR)takeNear();else swp()}});
if(!TOUCH){addEventListener('mousedown',e=>{if(st=='play'&&!paused&&e.button==0)inp.g=1});addEventListener('mouseup',()=>inp.g=0)}
// ---------- dibujo
// ---------- límites de efectos (menos en móvil)
const FXMAX=TOUCH?280:600,DCMAX=TOUCH?180:600;
function capFX(){let d=PA.length-FXMAX;if(d<=0)return;let j=0;for(let i=0;i<PA.length;i++){const p=PA[i],k=p.k;if(d>0&&(k=='b'||k=='m'||k=='d'||k=='s')){d--;continue}PA[j++]=p}PA.length=j;const hard=FXMAX*1.25|0;if(PA.length>hard)PA.splice(0,PA.length-hard)}
