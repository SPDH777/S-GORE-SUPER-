const solid=(c,r)=>c<0?1:(r<0||r>=ROWS||c>=480)?0:G[r][c];
function mv(o){o.x+=o.vx;let c0=Math.floor(o.x/T),c1=Math.floor((o.x+o.w-.01)/T),r0=Math.floor(o.y/T),r1=Math.floor((o.y+o.h-.01)/T),hx=0,gnd=0,head=null;
 for(let r=r0;r<=r1;r++){if(o.vx>0&&solid(c1,r)){o.x=c1*T-o.w;hx=1;break}if(o.vx<0&&solid(c0,r)){o.x=(c0+1)*T;hx=-1;break}}
 o.y+=o.vy;c0=Math.floor(o.x/T);c1=Math.floor((o.x+o.w-.01)/T);r0=Math.floor(o.y/T);r1=Math.floor((o.y+o.h-.01)/T);
 if(o.vy>0){for(let c=c0;c<=c1;c++)if(solid(c,r1)){o.y=r1*T-o.h;o.vy=0;gnd=1;break}}
 else if(o.vy<0){const cc=Math.floor((o.x+o.w/2)/T);let c=solid(cc,r0)?cc:solid(c0,r0)?c0:solid(c1,r0)?c1:-9;if(c>=0){o.y=(r0+1)*T;o.vy=0;head={c,r:r0}}}
 return{hx,gnd,head}}
const pt=(x,y,n,k,c)=>{for(let i=0;i<n;i++)PA.push({k,x,y,vx:R(-3,3),vy:R(-6,-1),l:R(25,45),c,s:R(3,7)})};
let HX=null;
function hurt(pit){if(P.pipe||P.inv>0&&!pit)return;hp--;sfx(200,.4,'sawtooth',.08,-120);vib(80);combo=0;hf=22;ssp(3);sh=Math.max(sh,9);bleed(P.x+13,P.y+14,pit?0:26,-P.f*2);
 if(hp<=0){gibP();setSt('over');sv();try{if(score>best){best=score;localStorage.setItem('sbg_best',best)}}catch(e){}return}
 if(pit){P.x=P.sx;P.y=P.sy;P.vx=P.vy=0;P.inv=120}else{P.inv=SH.ch==5?200:110;P.vy=-7;HX=null}}
function pipeStep(){const p=P.pipe;p.t++;P.t+=.04;if(!p.ph){P.y+=1.6;if(p.t>=26&&UG){exitCave();return}if(p.t>=26&&!cavDone){enterCave();return}if(p.t>=26){const q=PI.find(o=>o.x>p.x+200)||p;P.x=q.x-13;P.y=q.top-P.h+42;p.x=q.x;p.top=q.top;p.ph=1;p.t=0;cx=CL(Math.max(cx,P.x-300),0,Math.max(0,LEN-W));for(let i=0;i<5;i++){gc();score+=50}sfx(988,.3,'triangle',.07,500)}}
 else{P.y-=1.6;if(p.t>=26){P.y=p.top-P.h;P.sx=P.x;P.sy=P.y;P.inv=60;P.pipe=0}}}
function pipeUI(){const be=$('bd');let on=0;if(!P.pipe&&P.g)for(const q of PI)if(q.en&&Math.abs(P.x+13-q.x)<22&&Math.abs(P.y+P.h-q.top)<4){on=1;const y=q.top-74+Math.sin(frame*.15)*4;g.save();g.shadowColor='rgba(0,0,0,.45)';g.shadowBlur=8;rr(q.x-21,y-17,42,34,11,'rgba(12,16,34,.88)');g.restore();g.beginPath();g.moveTo(q.x-6,y+17);g.lineTo(q.x,y+24);g.lineTo(q.x+6,y+17);g.fillStyle='rgba(12,16,34,.88)';g.fill();g.lineCap='round';g.lineJoin='round';g.lineWidth=3.4;for(let k=0;k<2;k++){g.strokeStyle='rgba(255,255,255,'+(k?.5:1)+')';g.beginPath();g.moveTo(q.x-8,y-9+k*9);g.lineTo(q.x,y-1+k*9);g.lineTo(q.x+8,y-9+k*9);g.stroke()}}
 if(be)be.style.visibility=on?'visible':'hidden'}
function upP(){for(const k in PU)if(PU[k]>0)PU[k]--;puFx();if(P.pipe){pipeStep();return}
 const ax=(K.r-K.l)||J.ax,mx=(PU.boot>0?5.3:3.7)*(SH.ch==5?1.12:1);
 if(ax){P.vx=ap(P.vx,ax*mx,(P.g?(hasM(3)?.1:.45):.3)*(Math.sign(ax)!=Math.sign(P.vx)&&P.vx?2:1));P.f=ax>0?1:-1}else P.vx=ap(P.vx,0,P.g?(hasM(3)?.04:.4):.08);
 P.coy=P.g?7:P.coy-1;const jpr=inp.j&&!P.jp;if(jpr)P.buf=8;P.jp=inp.j;P.buf--;
 if(P.buf>0&&P.coy>0){P.vy=(-13.6-Math.abs(P.vx)*.22)*(hasM(0)?.82:1)*(WT()?.6:1);P.coy=0;P.buf=0;P.g=0;sfx(380,.22,'square',.06,420);pt(P.x+13,P.y+P.h,4,'d','#fff')}
 if(!WT()&&!inp.j&&P.vy<-4)P.vy*=.62;
 if(WT()&&!P.g){const up=inp.j||K.u||J.up,dn=K.d||J.dn||inp.d;if(jpr&&P.coy<=0)P.vy=Math.min(P.vy,-4.4);P.vy+=.16;if(up)P.vy-=.52;if(dn)P.vy+=.55;P.vy*=.93;P.vy=CL(P.vy,-4.6,5);P.vx*=.985;if(P.y<OY){P.y=OY;if(P.vy<0)P.vy=0}}else P.vy=Math.min(P.vy+(Math.abs(P.vy)<1.8&&inp.j?.34:.58)*(hasM(0)?.62:1)*(P.vy>0?1.12:1),14);const pvy=P.vy,wg=P.g,r=mv(P);P.g=r.gnd;if(r.gnd&&!wg&&pvy>4){P.land=Math.min(10,pvy*.8);for(let i=0;i<Math.min(8,pvy);i++)PA.push({k:'d',x:P.x+13,y:P.y+P.h,vx:R(-2,2),vy:R(-1.5,0),l:22,c:'rgba(230,215,190,.8)',s:R(2,4.5)});if(pvy>8)sfx(90,.12,'sine',.08,-40)}if(P.g&&Math.abs(P.vx)>3.6&&frame%5==0)PA.push({k:'d',x:P.x+13-P.f*8,y:P.y+P.h-2,vx:-P.f*R(.3,1),vy:R(-1,0),l:18,c:'rgba(230,215,190,.7)',s:R(1.5,3)});
 if(r.head){const{c,r:rr}=r.head,t=G[rr][c];if(t==2||t==3){if(t==2){G[rr][c]=0;for(const d of[-1,0,1])delete STR[(((c/SB)|0)+d)+'_'+lv];pt(c*T+20,rr*T+20,10,'s','#b4b9be');pt(c*T+20,rr*T+20,6,'s','#6f757b');sfx(110,.18,'sawtooth',.07,-60);nz(.12,.15,900);score+=20;vib(12);sh=Math.max(sh,3)}else{BU.push({c,r:rr,t:0});sfx(160,.1,'square',.07)}
   if(t==3){G[rr][c]=4;const bx=BX[c+','+rr];if(bx){pt(c*T+20,rr*T,12,'s','#9cff9c');sfx(1175,.25,'square',.06,500);vib(20);IT.push({x:c*T+20,y:rr*T,ty:rr*T-40,k:bx.k,i:bx.i,t:Math.random()*6})}else if(hp<MH()&&Math.random()<.15){IT.push({x:c*T+20,y:rr*T,ty:rr*T-40,k:'h',i:0,t:Math.random()*6});pt(c*T+20,rr*T,12,'s','#ff6a7a');sfx(1175,.25,'square',.06,500)}else if(Math.random()<.3){IT.push({x:c*T+20,y:rr*T,ty:rr*T-42,k:'pu',i:Math.random()*2|0,t:Math.random()*6});pt(c*T+20,rr*T,12,'s','#ffe14a');sfx(1175,.25,'square',.06,500)}else{gc();score+=100;PA.push({k:'c',x:c*T+20,y:rr*T-8,vx:0,vy:-9,l:34,s:1});sfx(1175,.25,'square',.06,500)}}
   for(const e of E)if(!e.dead&&e.t!='p'&&e.x+e.w>c*T&&e.x<(c+1)*T&&Math.abs(e.y+e.h-rr*T)<6){e.dead=1;e.vy=-8;score+=100}}}
 windPush();sprStep();
 if(P.x<0){P.x=0;P.vx=0}if(P.x<cx){P.x=cx;if(P.vx<0)P.vx=0}
 if(P.g&&solid(Math.floor((P.x-6)/T),Math.floor((P.y+P.h+2)/T))&&solid(Math.floor((P.x+P.w+6)/T),Math.floor((P.y+P.h+2)/T))){P.sx=P.x;P.sy=P.y}
 springHead();P.land=(P.land||0)*.82;if(P.g)combo=0;P.t+=Math.abs(P.vx)*.09+.02;if(P.inv>0)P.inv--;
 if(P.g&&(K.d||J.dn||inp.d)){const q=PI.find(o=>o.en&&Math.abs(P.x+13-o.x)<22&&Math.abs(P.y+P.h-o.top)<4);if(q){P.pipe={ph:0,t:0,x:q.x,top:q.top};P.vx=P.vy=0;sfx(200,.3,'sine',.07,-80)}}
 if(P.y>ROWS*T+20)hurt(1);
 if(P.x+P.w>FX+270&&st=='play'){setSt('clear');clearAt=frame;calcStars();sv();if(lv>=UNL&&lv<120){UNL=lv+1;try{localStorage.setItem('sbg_unl',UNL)}catch(e){}}score+=500+hp*200;sfx(784,.5,'triangle',.08,500);try{if(score>best){best=score;localStorage.setItem('sbg_best',best)}}catch(e){}}
}
function upE(){
 for(const e of E){
  if(e.t=='p'){if(Math.abs(e.x-cx-400)>700)continue;e.ph+=.035;const near=Math.abs(P.x+13-e.x-16)<70;e.up=near?Math.max(0,e.up-.06):.5+.5*Math.sin(e.ph);e.y=e.by-e.up*44+6;
   if(ov(P,{x:e.x+4,y:e.y,w:e.w-8,h:e.h-8})&&e.up>.25)hurt();continue}
  if(e.t=='B'&&!e.dead){bossStep(e);continue}
  if(e.t=='k'&&!e.dead&&Math.abs(e.x-cx-400)<650){e.ph+=.07;if(e.cd==null){e.cd=200+Math.random()*260|0;e.x0=e.x}
   e.x=e.x0+Math.sin(e.ph*.45)*70;e.y=e.by+Math.sin(e.ph)*(e.sp=='jelly'?38:26);
   if(--e.cd<=0){e.cd=320+Math.random()*320|0;if(Math.abs(e.x+15-P.x-13)<380&&!P.pipe){const dx=P.x+13-e.x-15,dy=P.y+18-e.y-11,d=Math.hypot(dx,dy)||1;BP.push({x:e.x+15,y:e.y+11,vx:dx/d*2.1,vy:dy/d*2.1,k:'o',l:300,c:FLC[e.sp]||'#ff7a20',dl:0,n:0});sfx(500,.08,'sine',.04,-200)}}
   if(ov(P,{x:e.x+3,y:e.y,w:24,h:20})){if(P.vy>0&&(P.y+P.h)-P.vy<=e.y+14){combo++;score+=150;P.vy=(inp.j?-11.5:-8)-Math.min(2.5,combo*.35);splat(e);e.dead=1;e.vy=-6;sfx(520,.15,'square',.07,-250)}else if(P.inv<=0)hurt()}continue}
  if(e.dead){e.vy+=.5;e.y+=e.vy;e.x+=e.vx*.3;if(e.dead==2){e.dt++;e.y=e.by0}continue}
  if(Math.abs(e.x-cx-400)>650)continue;
  if(e.cool>0)e.cool--;if(e.fz>0){e.fz--;e.vx*=.82;if(e.fz<=0&&e.fvx!=null){e.vx=e.fvx;delete e.fvx}continue}
  if(e.t=='s'&&e.st==1)e.vx=0;if(e.t=='s'&&e.st==2)e.vx=e.dir*7;
  if(e.hop){if(e.hc==null)e.hc=30+Math.random()*60|0;if(e.g_&&--e.hc<=0){e.vy=-9.5;e.hc=70+Math.random()*70|0;e.g_=0}}
  e.vy=Math.min(e.vy+.5,12);const r=mv(e);e.g_=r.gnd;
  if(r.hx){e.vx=-e.vx;if(e.st==2)e.dir=-e.dir;else if(e.vx)e.dir=Math.sign(e.vx)}
  if(r.gnd&&e.st!=2&&e.st!=1){const fc=Math.floor((e.x+(e.vx>0?e.w+6:-6))/T),fr=Math.floor((e.y+e.h+2)/T);if(!solid(fc,fr)){e.vx=-e.vx;e.dir=Math.sign(e.vx)}}
  if(e.y>ROWS*T+50)e.dead=3,e.vy=0;
  if(e.t=='s'&&e.st==2)for(const o of E)if(o!=e&&!o.dead&&o.t!='p'&&ov(e,o)){o.dead=1;o.vy=-8;o.vx=e.dir*3;score+=200;pt(o.x+15,o.y,6,'s','#ffd400');sfx(300,.2,'square',.06,200)}
  if(ov(P,e)){
   if(e.t=='s'&&e.st==1){e.st=2;e.dir=P.x+13<e.x+15?1:-1;e.cool=14;sfx(260,.12,'square',.07,300);continue}
   if((P.y+P.h)-P.vy<=e.y+16&&P.vy>0){combo++;score+=100*combo;if(Math.random()<.08)IT.push({x:e.x+15,y:e.y,ty:e.y-34,k:'pu',i:Math.random()*2|0,t:Math.random()*6});P.vy=inp.j?-11.5:-8;sfx(520+combo*80,.18,'square',.07,-250);pt(e.x+15,e.y+4,8,'s','#ffd400');vib(10);splat(e);
    if(e.t=='m'){e.dead=2;e.by0=e.y+e.h-9;e.dt=0}else if(e.st==0||e.st==2){e.st=1;e.vx=0;e.y+=8;e.h=18}}
   else if(!(e.st==2&&e.cool>0)&&P.inv<=0)hurt()}
 }
 if(BOSSE&&BOSSE.dead){if(!BD)BP=[];if(++BD==90)FX=P.x-269}
 for(const b of BP){if(b.dl>0){b.dl--;continue}b.x+=b.vx;b.y+=b.vy;b.vy+=b.k=='w'||b.k=='o'?0:b.k=='r'?.45:.12;b.l--;if(b.k!='w'&&solid(Math.floor(b.x/T),Math.floor(b.y/T))){b.l=0;if(b.k=='r'){pt(b.x,b.y,8,'d','#aaa');sh=Math.max(sh,6)}}
  const rd=b.k=='r'?26:b.k=='w'?16:12;if(Math.abs(b.x-P.x-13)<rd+10&&Math.abs(b.y-P.y-20)<(b.k=='w'?20:rd+16)&&P.inv<=0){if(b.k!='r')b.l=0;HX=b.x;hurt()}}cmp(BP,b=>b.l>0);
 cmp(E,e=>!(e.dead&&(e.y>700||e.dt>25||e.dead==3)));
}
// ---------- checkpoints (cada ~1/3 del nivel, mín. 100 casillas; se usan al reintentar tras Game Over)
let CPX=0,CPY=0,CPN=0,CPLV=0,useCP=0;const cpStep=()=>Math.max(100,(LEN/T/3)|0);
function cpChk(){if(UG||isB()||P.pipe)return;const thr=(CPN+1)*cpStep()*T;if(P.sx>thr&&LEN-P.sx>60*T){CPN++;CPX=P.sx;CPY=P.sy;CPLV=lv;ft(P.x,P.y-30,'¡Checkpoint!','#7dff9a');sfx(660,.15,'triangle',.06,300);setTimeout(()=>sfx(990,.2,'triangle',.06,300),120);pt(CPX+13,CPY+P.h-10,8,'s','#7dff9a')}}
function drawCP(){if(UG||!CPX||CPLV!=lv)return;if(CPX<cx-40||CPX>cx+W+40)return;const x=CPX+P.w/2,y=CPY+P.h;g.fillStyle='#e8e8f0';g.fillRect(x-1.5,y-48,3,48);g.fillStyle='#36d66a';g.beginPath();g.moveTo(x+1.5,y-48);g.lineTo(x+24,y-40+Math.sin(frame*.15)*2);g.lineTo(x+1.5,y-31);g.fill();ellipse(x,y-49,3.5,3.5,'#ffe680')}
// ---------- mecánicas de mundo: bosque=muelles, invierno=carámbanos, infierno=meteoros, alcantarilla=ácido, cielo=viento, mar=corrientes
let SPR=[],WXT=180;const WM=['TRAMPOLINES','CARÁMBANOS','METEOROS','GOTEO ÁCIDO','VIENTO','CORRIENTES'];
const wmName=()=>isB()?'':(wd()==0?(lv>1?WM[0]:''):wd()<4?(lv>=4?WM[wd()]:''):WM[wd()]);
function windF(){if(UG||isB()||st!='play')return 0;const w=wd(),s=.5+li()/28;
 if(w==4)return CL(s*Math.sin(frame*.011+lv*1.7)*1.35,-1.5,1.5);
 if(w==5)return(((P.x/(16*T)|0)+lv)%2?.55:-.55)*(.7+li()/40);
 if(hasM(4))return CL(s*.8*Math.sin(frame*.013+lv*2.3)*1.3,-1.3,1.3);return 0}
function windPush(){const f=windF();if(!f||P.pipe)return;const dx=f*(P.g?.35:1),nx=P.x+dx,c=Math.floor((dx>0?nx+P.w-.01:nx)/T),r0=Math.floor(P.y/T),r1=Math.floor((P.y+P.h-.01)/T);for(let r=r0;r<=r1;r++)if(solid(c,r))return;P.x=nx}
function sprStep(){if(UG||P.vy<0||P.pipe)return;for(const s of SPR){if(P.x+P.w>s.x&&P.x<s.x+s.w&&P.y+P.h>s.y&&P.y+P.h<s.y+s.h+P.vy+6){P.vy=(inp.j||K.u)?-17.2:-14;P.g=0;P.coy=0;s.t=12;sfx(520,.18,'square',.06,700);pt(s.x+15,s.y,5,'s','#ff8a8a');break}}}
function wxStep(){if(UG||isB()||P.pipe||lv<4)return;const w=wd();if(w<1||w>3)return;if(--WXT>0)return;WXT=Math.max(120,[0,300,240,280][w]-li()*5+(Math.random()*60|0));const n=[0,3,5,8][w],cnt=1+(li()>12&&Math.random()<.5?1:0);
 for(let k=0;k<cnt;k++){const x=CL(P.x+13+R(-40,300),cx+40,Math.min(cx+W-40,FX+200));let gy=-1;for(let r=0;r<ROWS;r++)if(solid(Math.floor(x/T),r)){gy=r*T;break}if(gy<0||x>FX)continue;BP.push({x,y:-10,vx:0,vy:0,k:'r',l:240,c:'#ff7a20',dl:55+k*12,n,wy:gy})}}
function drawSPR(){if(UG)return;for(const s of SPR){if(s.x<cx-40||s.x>cx+W+40)continue;const sq=s.t>0?(s.t--,.55):1,x=s.x+15,y=s.y+14;ellipse(x,y-2,17,5,'#4a2e16');g.fillStyle='#efe0b8';g.fillRect(x-6,y-14*sq,12,14*sq);ellipse(x,y-14*sq,19,9*sq+3,'#e8383c');ellipse(x-7,y-14*sq-1,3,2.4,'#fff');ellipse(x+6,y-14*sq-2,2.6,2,'#fff')}}
function windFX(){const f=windF();if(Math.abs(f)<.15)return;g.save();g.strokeStyle=WT()?'rgba(190,240,255,.8)':'rgba(255,255,255,.85)';g.lineWidth=1.5;g.globalAlpha=Math.min(.7,Math.abs(f)*.45);for(let i=0;i<16;i++){const sp=1+i%3*.5,x=(((i*131+frame*f*6*sp)%(W+120))+W+120)%(W+120)-60,y=(i*53+(i%5)*17)%H,l=18+i%4*10;g.beginPath();g.moveTo(x,y);g.lineTo(x-Math.sign(f)*l,y+Math.sin(frame*.05+i)*3);g.stroke()}g.restore()}
