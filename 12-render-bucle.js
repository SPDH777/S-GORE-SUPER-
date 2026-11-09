function hud(){{const bb=$('bw'),m=NEAR?1:0;if(bb.dataset.m!=m){bb.dataset.m=m;bb.classList.toggle('take',!!m);bb.innerHTML=m?IC.take:IC.swap}}ellipse(28,26,13,13,'#ffcf24');ellipse(28,26,8,8,'#e8a000');ellipse(28,26,5,5,'#ffe680');txt('x'+coins,50,27,24,'#fff','left');
 for(let i=0;i<MH();i++)icon('heart',34+i*30,62,1.15,i<hp);
 txt((UG?CVN:WN[wd()])+' '+(wd()+1)+'-'+li(),W/2,26,22);txt(String(score).padStart(6,'0'),W/2,54,20,'#ffe680');if(!TOUCH)txt('P: pausa',W-70,24,14,'#fff','center','#1b2a5a',3);hud2()}
function titleFX(tm){
 g.save();g.globalCompositeOperation='screen';
 let q=g.createRadialGradient(W/2,150,8,W/2,150,310);q.addColorStop(0,'rgba(255,150,70,.18)');q.addColorStop(.48,'rgba(110,100,255,.08)');q.addColorStop(1,'rgba(20,30,80,0)');g.fillStyle=q;g.fillRect(80,0,W-160,330);
 g.globalAlpha=.14;g.strokeStyle='#b8d9ff';g.lineWidth=1;for(let i=0;i<3;i++){g.beginPath();g.ellipse(W/2,152,180+i*55,48+i*18,0,Math.PI,Math.PI*2);g.stroke()}
 g.globalAlpha=.72;for(let i=0;i<22;i++){const x=(i*137+Math.sin(tm*.018+i*4)*17)%W,y=(i*67+tm*(.25+i%3*.08))%320,r=1+(i%3)*.45;g.fillStyle=i%4?'rgba(255,220,150,.55)':'rgba(150,210,255,.65)';g.beginPath();g.arc(x,y,r,0,Math.PI*2);g.fill()}g.restore()}
function cinemaFX(tm){
 g.save();g.globalCompositeOperation='screen';
 const lx=(tm*2.2)%(W+260)-130,q=g.createLinearGradient(lx-110,0,lx+110,0);q.addColorStop(0,'rgba(120,180,255,0)');q.addColorStop(.5,'rgba(150,190,255,.035)');q.addColorStop(1,'rgba(120,180,255,0)');g.fillStyle=q;g.fillRect(0,0,W,H);
 for(let i=0;i<24;i++){const x=(i*173+Math.sin(tm*.025+i*2)*12)%W,y=(i*97+tm*(.32+i%4*.13))%H;g.globalAlpha=.16+(i%3)*.06;g.fillStyle=i%5?'#d7edff':'#ffd98c';g.beginPath();g.arc(x,y,1+(i%2)*.45,0,Math.PI*2);g.fill()}
 g.globalAlpha=1;const v=g.createRadialGradient(W/2,H/2,H*.38,W/2,H/2,H*.78);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(2,5,18,.30)');g.fillStyle=v;g.fillRect(0,0,W,H);
 g.globalCompositeOperation='source-over';g.strokeStyle='rgba(220,235,255,.13)';g.lineWidth=1;const m=15,l=30;for(const x of[12,W-12])for(const y of[12,H-12]){const sx=x< W/2?1:-1,sy=y<H/2?1:-1;g.beginPath();g.moveTo(x+sx*l,y);g.lineTo(x,y);g.lineTo(x,y+sy*l);g.stroke()}g.restore()}
function render(){
 const tm=performance.now()/16.6;g.setTransform(DP,0,0,DP,0,0);if(st=='shop'){drawShop();return}if(st=='sel'){drawSel();return}
 if(st=='title'){bg(tm*.6,tm);titleFX(tm);g.fillStyle='#4aa52a';g.fillRect(0,360,W,H);g.fillStyle='#86d93c';g.fillRect(0,360,W,7);g.fillStyle='#c7653a';g.fillRect(0,376,W,H);
  pine(90,362,1.3,TH[0].t,TH[0].t2);pine(720,362,1.1,TH[0].t,TH[0].t2);g.save();g.translate(W/2,350+Math.min(0,-Math.abs(Math.sin(tm*.07))*44));g.scale(2.4,2.4);g.restore();
  drawBino(W/2,358-Math.abs(Math.sin(tm*.07))*46,1,tm*.05,1);
  drawLogo(tm);
  if(Math.floor(tm/30)%2==0)txt(TOUCH?'TOCA PARA JUGAR':'PRESIONA ENTER',W/2,250,26,'#fff','center','#1b2a5a',6);
  if(best)txt('Récord: '+best,W/2,288,18,'#ffe680','center','#1b2a5a',4);shopBtn();
  for(const[bx,lb]of[[W/2-180,'CRÉDITOS'],[W/2+4,'TÉRMINOS']]){btn(bx,368,176,34,'#33427a','#171f3f','rgba(255,208,74,.8)');txt(lb,bx+88,385,14,'#fff','center','rgba(0,0,0,0)',0)}txt('© S_PDH',W-14,H-14,12,'rgba(255,255,255,.75)','right','#1b2a5a',3);
  if(!TOUCH)txt('Flechas/WASD mover (↑ apuntar arriba) · Z/Espacio saltar · C disparar · Q arma',W/2,H-20,14,'#fff','center','#1b2a5a',3);return}
 bgFast(cx,tm);
 g.save();g.translate(-Math.floor(cx)+(sh>0?R(-sh,sh)*.5:0),-OY+(sh>0?R(-sh,sh)*.5:0));
 const c0=Math.floor(cx/T)-1,c1=c0+W/T+3;
 {const wq=g.createLinearGradient(0,ROWS*T-16,0,ROWS*T+44);wq.addColorStop(0,cur().w);wq.addColorStop(1,'rgba(0,10,40,.9)');g.fillStyle=wq;g.fillRect(cx,ROWS*T-16,W+10,60)}g.fillStyle='rgba(255,255,255,.5)';for(let i=0;i<24;i++){const x=Math.floor(cx/40)*40+i*40+Math.sin(frame*.06+i)*6;g.fillRect(x,ROWS*T-16+Math.sin(frame*.08+i)*2,16,3)}
 for(const d of DE){if(d.x<cx-60||d.x>cx+W+60)continue;if(WT()){seaDeco(d);continue}if(d.t==0)pine(d.x,d.y,d.s*.9,cur().t,cur().t2);else{ellipse(d.x,d.y-6,16*d.s,10*d.s,'#3fae2c');ellipse(d.x+12,d.y-5,11*d.s,8*d.s,'#58c93a');ellipse(d.x-9,d.y-4,9*d.s,7*d.s,'#2f9a22')}}
 for(const e of E)if(e.t=='p'&&Math.abs(e.x-cx-400)<500){drawPlant(e);if(e.hf>0){e.hf--;g.globalAlpha=.5;ellipse(e.x+16,e.y+20,16,24,'#fff');g.globalAlpha=1}}
 for(let i=Math.max(0,Math.floor(c0/SB));i<=Math.min(23,Math.floor(c1/SB));i++)g.drawImage(strip(i),i*SB*T,0,SB*T,ROWS*T);for(let r=0;r<ROWS;r++)for(let c=Math.max(0,c0);c<=c1;c++){const t=G[r][c];if(!t)continue;if(t==3||t==4){let oy=0;for(const b of BU)if(b.c==c&&b.r==r)oy=-Math.sin(b.t/8*Math.PI)*8;tile(c,r,t,c*T,r*T+oy)}else if(t==1)tile(c,r,1,c*T,r*T,1)}
 for(const b of BU)b.t++;cmp(BU,b=>b.t<8);
 if(UG)for(let c=c0;c<=c1;c++){const h=hsh(c,3);if(h>.4){g.fillStyle='#625a74';g.beginPath();g.moveTo(c*T+6,3*T);g.lineTo(c*T+20,3*T+14+h*26);g.lineTo(c*T+34,3*T);g.fill()}}
 drawDC();drawCP();drawSPR();drawIT();for(const k of CO){if(k.got||Math.abs(k.x-cx-400)>450)continue;const w=Math.abs(Math.cos(frame*.1+k.t))*9+2,y=k.y+Math.sin(frame*.07+k.t)*2;ellipse(k.x,y,w+2,12,'#d18a00');ellipse(k.x,y,w,10,'#ffcf24');ellipse(k.x,y,Math.max(1,w-4),6,'#ffe680')}
 shadows();if(!UG&&!isB()){drawCastle();drawFlag()}
 for(const e of E){if(e.t=='p'||Math.abs(e.x-cx-400)>650)continue;if(e.t=='B')drawBoss(e);else if(e.t=='k')drawFly(e);else if(e.t=='s')drawSnail(e);else if(e.sp)drawCrit(e);else drawMush(e);if(e.fz>0&&st=='play'){g.globalAlpha=.48;ellipse(e.x+e.w/2,e.y+e.h/2,e.w*.64,e.h*.62,'#8beeff');g.globalAlpha=1}if(e.hf>0){e.hf--;g.globalAlpha=.55;ellipse(e.x+e.w/2,e.y+e.h/2,e.w*.6,e.h*.6,'#fff');g.globalAlpha=1}}
 for(const b of BP){if(b.dl>0){if(Math.floor(b.dl/4)%2){g.fillStyle='rgba(255,60,40,.8)';g.beginPath();const wy=b.wy||FY;g.moveTo(b.x-12,wy-4);g.lineTo(b.x+12,wy-4);g.lineTo(b.x,wy-26);g.fill()}continue}
  drawBP(b)}
 if(!(P.inv>0&&Math.floor(P.inv/4)%2)&&!(st=='over')){if(P.pipe){g.save();g.beginPath();g.rect(P.x-60,-200,140,P.pipe.top+200);g.clip()}if(PU.mag>0)for(let k=0;k<2;k++){const t=((frame+k*30)%60)/60;g.strokeStyle='rgba(255,90,90,'+(.5*(1-t))+')';g.lineWidth=3;g.beginPath();g.arc(P.x+13,P.y+20,170*(1-t),0,7);g.stroke()}drawBino(P.x+P.w/2,P.y+P.h,P.f,P.t,!P.g,0,1);if(P.pipe)g.restore()}
 for(const p of PA){if(p.k=='b'||p.k=='g'||p.k=='k'||p.k=='m'){dpg(p);continue}if(p.k=='c'){ellipse(p.x,p.y,Math.abs(Math.cos(p.l*.4))*9+2,11,'#ffcf24');g.globalAlpha=1}else if(p.k=='s'){g.globalAlpha=Math.min(1,p.l/20);g.fillStyle=p.c;g.save();g.translate(p.x,p.y);g.rotate(p.l*.2);g.fillRect(-p.s/2,-p.s/2,p.s,p.s);g.restore();g.globalAlpha=1}else{g.globalAlpha=Math.min(1,p.l/20);ellipse(p.x,p.y,p.s,p.s,p.c);g.globalAlpha=1}}
 drawBL();wBub();pipeUI();g.restore();waterFX(tm);post();cinemaFX(tm);drk();windFX();hud();puHud();bossHud();
 if(st=='clear'){g.fillStyle='rgba(0,0,0,.35)';g.fillRect(0,0,W,H);txt('¡NIVEL COMPLETADO!',W/2,112,48,'#ffe14a','center','#b3260e',10);txt(li()==20?(lv==120?'¡JUEGO COMPLETADO!':'¡MUNDO '+(wd()+1)+' COMPLETADO!'):'',W/2,160,24);drawStars();if(Math.floor(tm/30)%2==0)txt(TOUCH?'Toca para seguir':'Enter para seguir',W/2,292,22,'#fff','center','#1b2a5a',5)}
 if(st=='over'){g.fillStyle='rgba(0,0,0,.55)';g.fillRect(0,0,W,H);txt('¡GAME OVER!',W/2,170,56,'#ff5a4a','center','#3a0a0a',10);txt('Puntos: '+score+'   Récord: '+best,W/2,230,22);if(Math.floor(tm/30)%2==0)txt(TOUCH?'Toca para reintentar':'Enter para reintentar',W/2,285,22,'#fff','center','#1b2a5a',5)}
 if(st=='over'||st=='clear')shopBtn()}
function upAll(){if(hs>0){hs--;return}frame++;sh*=.86;if(sh<.3)sh=0;if(hf>0)hf--;if(stT>0&&--stT==0)streak=0;for(const f of FT){f.y-=.5;f.l--}for(const a of AR){a.l--;const k=a.l/a.n;for(let i=0;i<2;i++)PA.push({k:'b',x:a.x,y:a.y,vx:a.vx*k+R(-.7,.7),vy:a.vy*k+R(-.9,.5),l:R(60,110),c:BC[Math.random()*4|0],s:R(1.4,3)})}cmp(AR,a=>a.l>0);cmp(FT,f=>f.l>0);if(st=='play'){upP();upG();upE();cpChk();wxStep();
  puMag();for(const k of CO)if(!k.got&&Math.abs(k.x-P.x-13)<26&&Math.abs(k.y-P.y-20)<34){k.got=1;gc();score+=50;sfx(1318,.12,'square',.05,400);pt(k.x,k.y,3,'s','#ffe14a')}
  cx=CL(Math.max(cx,P.x-300),0,Math.max(0,LEN-W))}
 else if(st=='clear'){P.vx=ap(P.vx,0,.2);P.vy=Math.min(P.vy+.58,14);mv(P);P.t+=.1;if(frame-clearAt==70)sfx(988,.4,'triangle',.07,300);for(let i=0;i<stars;i++)if(frame-clearAt==25+i*20)sfx(660+i*220,.25,'triangle',.08,300)}
 for(const p of PA){if(p.k=='b'||p.k=='g'||p.k=='k'){pg(p);continue}p.x+=p.vx;p.y+=p.vy;p.vy+=p.k=='c'?.5:.25;p.l--}cmp(PA,p=>p.l>0);capFX()}
let last=performance.now(),acc=0,lr=0,ft_=0,fn_=0,wu_=0;
(function loop(now){requestAnimationFrame(loop);const dt=now-last;acc+=Math.min(50,dt);last=now;padPoll();perfTick(dt);let n=0;if(!paused){while(acc>=16.667){upAll();acc-=16.667;n++}}else acc=0;
 if(n||(paused&&now-lr>100)){lr=now;render();fpsDraw()}})(last);
// ---------- rendimiento: F3 muestra FPS; si van lentos (<~40 FPS sostenidos) baja la resolución de 2 a 1,5 y a 1
let SHOWFPS=0,pfS=0,pfN=0,fpsV=60;
addEventListener('keydown',e=>{if(e.code=='F3'){SHOWFPS=!SHOWFPS;e.preventDefault()}});
function setDP(v){if(v==DP)return;DP=v;cv.width=W*DP;cv.height=H*DP;STR={}}
function perfTick(dt){if(dt>100||paused||st!='play')return;pfS+=dt;pfN++;if(pfN>=90){const a=pfS/pfN;fpsV=1000/a;if(a>25&&DP>1)setDP(DP>1.5?1.5:1);pfS=pfN=0}}
function fpsDraw(){if(!SHOWFPS)return;g.setTransform(DP,0,0,DP,0,0);txt(Math.round(fpsV)+' FPS · x'+DP,W-60,H-16,13,'#9fff9f','center','#000',3)}
