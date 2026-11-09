const PL=[['#3fa04a','#1d5a2a','#ffd24a'],['#7a8090','#2e323c','#ff4a3a'],['#6ab8e8','#1c4a7a','#aaf0ff'],['#bfe6ff','#4a8ac0','#5ad0ff'],['#b02020','#3a0808','#ffd030'],['#3a2a2a','#120808','#ff7a20'],['#7a6a60','#2a2220','#9aff3a'],['#5ad84a','#1a5a1a','#d8ff3a'],['#f4f0ff','#c8b8e8','#ffd24a'],['#ffffff','#bfe0ff','#3a8aff'],['#c466e8','#4a1470','#ffd0ff'],['#9cc0da','#34546f','#ff6a6a']],rgb_=h=>[1,3,5].map(i=>parseInt(h.substr(i,2),16)).join(',');
function ob(x,y,rx,ry,c){ellipse(x,y,rx+2,ry+2,'#0a0404');ellipse(x,y,rx,ry,c)}
const bpoly=(pts,c,lw)=>{g.beginPath();pts.forEach((q,i)=>i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1]));g.closePath();g.fillStyle=c;g.fill();g.lineWidth=lw||2;g.strokeStyle='#0a0404';g.stroke()},
tube=(w,c,fn)=>{g.lineCap='round';g.lineJoin='round';g.strokeStyle='#0a0404';g.lineWidth=w+4;g.beginPath();fn();g.stroke();g.strokeStyle=c;g.lineWidth=w;g.beginPath();fn();g.stroke()};
// ===== KIT DE DIBUJO DE JEFES (volumen, brillo, borde) =====
const OL='#0d0507';
function vE(x,y,rx,ry,c0,c1,rot,lw){const r=Math.max(rx,ry);g.beginPath();g.ellipse(x,y,rx,ry,rot||0,0,7);const q=g.createRadialGradient(x-r*.3,y-r*.42,r*.05,x,y,r*1.2);q.addColorStop(0,c0);q.addColorStop(1,c1);g.fillStyle=q;g.fill();g.lineWidth=lw||2.4;g.strokeStyle=OL;g.lineJoin='round';g.stroke()}
function vP(fn,x,y,r,c0,c1,lw){g.beginPath();fn();const q=g.createRadialGradient(x-r*.3,y-r*.42,r*.05,x,y,r*1.25);q.addColorStop(0,c0);q.addColorStop(1,c1);g.fillStyle=q;g.fill();g.lineWidth=lw||2.4;g.strokeStyle=OL;g.lineJoin='round';g.stroke()}
function tb(w,c0,c1,fn){g.lineCap='round';g.lineJoin='round';g.strokeStyle=OL;g.lineWidth=w+4.5;g.beginPath();fn();g.stroke();g.strokeStyle=c1;g.lineWidth=w;g.beginPath();fn();g.stroke();g.save();g.translate(-w*.1,-w*.16);g.strokeStyle=c0;g.lineWidth=w*.66;g.beginPath();fn();g.stroke();g.translate(-w*.14,-w*.14);g.strokeStyle='rgba(255,255,255,.26)';g.lineWidth=w*.2;g.beginPath();fn();g.stroke();g.restore()}
function clE(x,y,rx,ry,rot,fn){g.save();g.beginPath();g.ellipse(x,y,rx,ry,rot||0,0,7);g.clip();fn();g.restore()}
function scl(x,y,rx,ry,col,sz){clE(x,y,rx,ry,0,()=>{g.strokeStyle=col;g.lineWidth=1;let k=0;for(let j=-ry;j<ry;j+=sz*.7,k++){for(let i=-rx;i<rx+sz;i+=sz){g.beginPath();g.arc(x+i+(k%2?sz/2:0),y+j,sz*.55,.15,Math.PI-.15);g.stroke()}}})}
function eyeB(x,y,r,ic,sl,rot){g.save();g.translate(x,y);g.rotate(rot||0);vE(0,0,r*1.15,r,'#ffffff','#bfc3cf',0,1.6);clE(0,0,r*1.15,r,0,()=>{const q=g.createRadialGradient(r*.1,0,r*.1,r*.1,0,r*.95);q.addColorStop(0,ic[0]);q.addColorStop(1,ic[1]);g.fillStyle=q;g.beginPath();g.ellipse(r*.14,0,r*.74,r*.86,0,0,7);g.fill();g.fillStyle='#050203';g.beginPath();if(sl)g.ellipse(r*.16,0,r*.15,r*.72,0,0,7);else g.arc(r*.16,0,r*.38,0,7);g.fill()});ellipse(-r*.22,-r*.34,r*.22,r*.16,'rgba(255,255,255,.95)');g.restore()}
function brow(x,y,l,a,w){g.save();g.translate(x,y);g.rotate(a);g.strokeStyle=OL;g.lineWidth=w||4;g.lineCap='round';g.beginPath();g.moveTo(-l/2,0);g.lineTo(l/2,0);g.stroke();g.restore()}
function fang(x,y,w,h,d){bpoly([[x-w/2,y],[x+w/2,y],[x,y+h*(d||1)]],'#fff6e2',1.2)}
function spk(x,y,w,h,a,c0,c1){g.save();g.translate(x,y);g.rotate(a||0);g.beginPath();g.moveTo(-w/2,0);g.quadraticCurveTo(-w*.3,-h*.6,0,-h);g.quadraticCurveTo(w*.3,-h*.6,w/2,0);g.closePath();const q=g.createLinearGradient(-w/2,0,w/2,0);q.addColorStop(0,c0);q.addColorStop(1,c1);g.fillStyle=q;g.fill();g.lineWidth=1.8;g.strokeStyle=OL;g.stroke();g.restore()}
function lg(a,b,w0,w1,c,d){tl(a,b,w0,w1,c,d)}
function claws(x,y,n,l,sp,a,c){for(let i=0;i<n;i++){const aa=a+(i-(n-1)/2)*sp;bpoly([[x+Math.cos(aa)*2-1.4,y+Math.sin(aa)*2],[x+Math.cos(aa)*l,y+Math.sin(aa)*l],[x+Math.cos(aa)*2+1.4,y+Math.sin(aa)*2]],c||'#f4ecd8',1.2)}}

// ---------- 1 SERPIENTE ----------
function bSnake(e,c0,c1,ac,ar,t,s){const sw=Math.sin(t*.07),op=e.st==3||e.shw,hx=40+sw*5,hy=-68+sw*2;
 tb(13,c0,c1,()=>{g.moveTo(-48,-8);g.bezierCurveTo(-84,-2,-84,-32,-62,-26+sw*3)});
 vE(-62,-26+sw*3,4,4,ac,'#a07800',0,1.6);
 const coil=(x,y,rx,ry,pat)=>{vE(x,y,rx,ry,c0,c1);scl(x,y,rx,ry,'rgba(0,0,0,.28)',6.5);clE(x,y,rx,ry,0,()=>{for(let i=-Math.floor(rx/10);i<=Math.floor(rx/10);i++){const px=x+i*10,py=y-ry*.15;bpoly([[px-5,py],[px,py-ry*.55],[px+5,py],[px,py+ry*.55]],pat,1.2)}g.fillStyle='rgba(255,240,170,.5)';g.fillRect(x-rx,y+ry*.45,rx*2,ry)});};
 coil(-2,-11,60,12,c1);coil(2,-25,48,12,c1);coil(-2,-38,34,10,c1);
 tb(21,c0,c1,()=>{g.moveTo(-8,-42);g.bezierCurveTo(-34,-60,8,-88,hx-10,hy+2)});
 clE(0,0,1,1,0,()=>{});
 // capucha
 vE(hx-12,hy+2,12,22,c1,c0,.1);vE(hx-13,hy+2,6,9,ac,'#b88a10',0,1.2);
 // mandibula
 g.save();g.translate(hx+6,hy+8);g.rotate(op?.5:.1);vE(10,2,19,5.5,c1,'#1a3a1a');if(op){ellipse(10,-1,16,3,'#5a0c14')}g.restore();
 vE(hx,hy,19,13,c0,c1,.15);vE(hx+15,hy+3,12,8,c0,c1,.2);vE(hx+22,hy+1,2.2,1.8,'#12201a','#000',0,1);
 g.save();g.translate(hx,hy);clE(0,0,19,13,.15,()=>scl(0,0,19,13,'rgba(0,0,0,.25)',5));g.restore();
 eyeB(hx+5,hy-4,4.6,[ac,'#c07000'],1);brow(hx+5,hy-10,12,.35,3.4);
 fang(hx+16,hy+7,4,9,1);fang(hx+22,hy+6,3.4,7,1);
 if(op){fang(hx+14,hy+16,3,7,-1);g.fillStyle='#8aff3a';g.beginPath();g.ellipse(hx+18,hy+19+(t%14)*.8,1.8,3,0,0,7);g.fill()}
 const tl_=14+Math.abs(Math.sin(t*.3))*7;g.strokeStyle='#c01830';g.lineWidth=2.4;g.lineCap='round';g.beginPath();g.moveTo(hx+25,hy+4);g.lineTo(hx+25+tl_,hy+4);g.moveTo(hx+25+tl_,hy+4);g.lineTo(hx+30+tl_,hy+1);g.moveTo(hx+25+tl_,hy+4);g.lineTo(hx+30+tl_,hy+7);g.stroke()}

// ---------- 2 LOBO ----------
function bWolf(e,c0,c1,ac,ar,t,s){const run=e.st==2,ph=t*(run?.5:.16),op=e.st==3||e.shw,bob=run?Math.abs(Math.sin(ph))*3:Math.sin(t*.1);
 g.save();g.translate(0,-bob);
 const leg=(hx,hy,off,dk,front)=>{const a=Math.sin(ph+off),b=Math.cos(ph+off),fx=hx+a*(run?17:8),fy=-3-Math.max(0,b)*(run?12:5),k=ik(hx,hy,fx,fy,18,18,front?-1:1);lg([hx,hy],[k[0],k[1]],front?13:15,10,c0,dk);lg([k[0],k[1]],[k[2],k[3]],9,7,c1,dk);ellipse(k[2]+3,k[3]-1,8,4.5,c1);claws(k[2]+8,k[3]-1,3,6,.35,0,'#e8e0cc')};
 tb(12,c0,c1,()=>{g.moveTo(-50,-46);g.bezierCurveTo(-72,-48,-80-Math.sin(t*.12)*3,-62,-78,-78)});
 leg(-30,-34,Math.PI,.4,0);leg(26,-34,0,.4,1);
 vE(-32,-38,25,21,c0,c1);vE(-6,-40,42,20,c0,c1);vE(24,-42,22,22,c0,c1);
 clE(-6,-40,44,22,0,()=>{g.fillStyle='rgba(235,240,250,.45)';g.beginPath();g.ellipse(-6,-24,48,10,0,0,7);g.fill();g.strokeStyle='rgba(0,0,0,.22)';g.lineWidth=1.3;for(let i=0;i<34;i++){const x=-44+i*3,y=-52+Math.sin(i*1.9)*6;g.beginPath();g.moveTo(x,y);g.quadraticCurveTo(x+3,y+7,x-1,y+13);g.stroke()}});
 for(let i=0;i<9;i++){const x=-44+i*9.5,y=-59-Math.sin(i/8*Math.PI)*3+(i>6?4:0);spk(x,y,9,13+Math.sin(i*2)*3,-.2,'#6a7280','#252a34')}
 leg(-22,-30,Math.PI+1.6,0,0);leg(34,-30,1.6,0,1);
 // cabeza
 g.save();g.translate(54,-54);g.rotate(op?-.1:.05);
 bpoly([[-8,-8],[-6,-26],[4,-10]],c1,1.8);bpoly([[-6,-10],[-5,-20],[1,-11]],'#d89090',1);
 bpoly([[2,-9],[8,-27],[13,-8]],c0,1.8);bpoly([[5,-10],[8,-20],[11,-9]],'#d89090',1);
 g.save();g.translate(6,8);g.rotate(op?.55:.12);vE(11,2,15,5,c1,'#1a1a22');if(op)ellipse(11,-1,12,2.6,'#6a0a14');for(let i=0;i<3;i++)fang(6+i*7,-3,3.2,6,-1);g.restore();
 vE(0,0,16,13,c0,c1);vE(18,4,16,8,c0,c1,.1);vE(33,2,4.2,3.4,'#1a1a1a','#000',0,1);
 if(op)for(let i=0;i<3;i++)fang(14+i*6,8,3.4,8,1);
 g.strokeStyle='rgba(0,0,0,.4)';g.lineWidth=1.2;for(let i=0;i<3;i++){g.beginPath();g.moveTo(24+i*2,-2+i*1.5);g.lineTo(30+i*2,-5+i*1.5);g.stroke()}
 glow(6,-5,14,'255,40,20',.8);eyeB(6,-5,3.6,['#ffd0a0','#d01008'],1);brow(7,-10.5,11,.38,3.4);g.restore();
 clE(18,-46,3,3,0,()=>{});
 g.restore()}

// ---------- 3 DRAGON DE HIELO ----------
function bDragon(e,c0,c1,ac,ar,t,s){const f=Math.sin(t*.25),op=e.st==1||e.shw;
 const wing=(k,dk)=>{const S=[-8+k*8,-60],Wr=[-36+k*8,-98+f*14-k*4],T1=[-90+k*10,-92+f*30],T2=[-84+k*10,-60+f*20],T3=[-56+k*8,-38+f*10];
  g.beginPath();g.moveTo(S[0],S[1]);g.lineTo(Wr[0],Wr[1]);g.lineTo(T1[0],T1[1]);g.quadraticCurveTo((T1[0]+T2[0])/2+8,(T1[1]+T2[1])/2-14,T2[0],T2[1]);g.quadraticCurveTo((T2[0]+T3[0])/2+6,(T2[1]+T3[1])/2-10,T3[0],T3[1]);g.quadraticCurveTo(-30+k*8,-42,-8+k*8,-46);g.closePath();
  const q=g.createLinearGradient(Wr[0],Wr[1],T3[0],T3[1]);q.addColorStop(0,k?c1:c0);q.addColorStop(1,'rgba(30,70,130,.8)');g.fillStyle=q;g.globalAlpha=dk?.9:.96;g.fill();g.globalAlpha=1;g.lineWidth=2.2;g.strokeStyle=OL;g.stroke();
  g.strokeStyle='rgba(255,255,255,.35)';g.lineWidth=1.2;for(const T of[T1,T2,T3]){g.beginPath();g.moveTo(S[0],S[1]+4);g.quadraticCurveTo((S[0]+T[0])/2,(S[1]+T[1])/2-4,T[0],T[1]);g.stroke()}
  for(const T of[T1,T2,T3]){tb(3.2,'#e8f6ff','#6a9ac0',()=>{g.moveTo(Wr[0],Wr[1]);g.lineTo(T[0],T[1])});claws(T[0],T[1],1,6,0,Math.atan2(T[1]-Wr[1],T[0]-Wr[0]),'#f0fbff')}
  tb(5,'#e8f6ff','#6a9ac0',()=>{g.moveTo(S[0],S[1]);g.lineTo(Wr[0],Wr[1])})};
 wing(1,1);
 tb(15,c0,c1,()=>{g.moveTo(-30,-34);g.bezierCurveTo(-60,-30,-84,-8-f*4,-92,-24)});
 bpoly([[-86,-30],[-104,-34],[-96,-18],[-92,-12],[-88,-20]],'#9ad4f4',1.8);
 // patas
 const fl=Math.sin(t*.25+1);lg([-14,-26],[-20,-10],13,9,c1);lg([-20,-10],[-18,-1],9,8,c1);ellipse(-12,-1,9,4,c1);claws(-5,-2,3,6,.35,0,'#f0fbff');
 vE(-4,-42,36,19,c0,c1);clE(-4,-42,36,19,0,()=>{for(let i=0;i<8;i++){const x=-32+i*9;g.fillStyle=i%2?'#dff2ff':'#c9e8fb';g.beginPath();g.ellipse(x,-29,5.5,7,0,0,7);g.fill();g.strokeStyle='rgba(30,70,120,.5)';g.lineWidth=1;g.stroke()}});scl(-4,-52,34,9,'rgba(20,50,100,.3)',6);
 for(let i=0;i<7;i++)spk(-28+i*10,-58-Math.sin(i/6*Math.PI)*2,8,13,-.1,'#e8f8ff','#6ab0e0');
 lg([14,-30],[20,-12],13,9,c0);lg([20,-12],[22,-1],9,8,c0);ellipse(28,-1,9,4,c0);claws(35,-2,3,6,.35,0,'#f0fbff');
 tb(17,c0,c1,()=>{g.moveTo(14,-48);g.bezierCurveTo(30,-50,32,-78,50,-70)});
 // cabeza
 g.save();g.translate(54,-70);g.rotate(op?-.12:.05);
 tb(6,'#f2fbff','#8ab8d8',()=>{g.moveTo(-4,-8);g.quadraticCurveTo(-22,-20,-30,-6)});tb(5,'#f2fbff','#8ab8d8',()=>{g.moveTo(2,-9);g.quadraticCurveTo(-12,-24,-18,-14)});
 g.save();g.translate(4,8);g.rotate(op?.6:.1);vE(12,2,18,5.5,c1,'#14305a');if(op){ellipse(12,-1,14,3,'#ff9a4a');glow(26,-2,24,'150,220,255',.9)}for(let i=0;i<3;i++)fang(8+i*7,-3,3,6,-1);g.restore();
 vE(0,0,17,13,c0,c1);vE(19,3,16,8,c0,c1,.1);vE(32,0,2.4,2,'#0a2040','#000',0,1);
 for(let i=0;i<3;i++)fang(14+i*7,9,3,7,1);
 glow(6,-4,14,'120,230,255',.9);eyeB(6,-4,3.8,['#e8ffff','#10a0e0'],1);brow(8,-10,11,.3,3.4);g.restore();
 wing(0,0)}

// ---------- 4 HOMBRE DE HIELO ----------
function bIce(e,c0,c1,ac,ar,t,s){const st=e.vx?Math.sin(t*.18):0,ar_=Math.sin(t*.1)*2;
 glow(0,-4,44,'180,230,255',.25);
 // piernas
 for(const q of[-1,1]){const k=q*st*6;bpoly([[q*17-10+k,-40],[q*17+10+k,-40],[q*17+12+k,-8],[q*17+16+k,0],[q*17-14+k,0],[q*17-10+k,-8]],'#5aa8e0',2.2);bpoly([[q*17-10+k,-40],[q*17+k,-40],[q*17+2+k,-6],[q*17-10+k,-8]],'#9ad8ff',0);g.strokeStyle='rgba(255,255,255,.5)';g.lineWidth=1.2;g.beginPath();g.moveTo(q*17-6+k,-36);g.lineTo(q*17-5+k,-12);g.stroke()}
 // brazos (detras)
 const arm=(q,sw)=>{const sx=q*26,sy=-70,hx=q*40+sw*2,hy=-38+ar_;bpoly([[sx-9,sy],[sx+9,sy],[hx+8,hy],[hx-8,hy]],'#6ab6ec',2.2);bpoly([[sx-9,sy],[sx,sy],[hx,hy],[hx-8,hy]],'#a8e2ff',0);bpoly([[hx-11,hy],[hx+11,hy],[hx+9,hy+16],[hx,hy+22],[hx-9,hy+16]],'#4a98d4',2.2);for(let i=-1;i<=1;i++)spk(hx+i*7,hy+18,6,12,Math.PI,'#d8f4ff','#6ab0e0')};
 arm(-1,-ar_);
 // torso
 bpoly([[-24,-86],[24,-86],[32,-62],[20,-30],[-20,-30],[-32,-62]],'#4a98d4',2.6);
 bpoly([[-24,-86],[0,-86],[0,-30],[-20,-30],[-32,-62]],'#8ad0f8',0);bpoly([[0,-86],[24,-86],[32,-62],[20,-30],[0,-30]],'#2f78b4',0);
 g.strokeStyle='rgba(255,255,255,.55)';g.lineWidth=1.3;g.beginPath();g.moveTo(-14,-80);g.lineTo(-6,-52);g.lineTo(-16,-36);g.moveTo(14,-78);g.lineTo(8,-56);g.lineTo(18,-40);g.moveTo(-26,-62);g.lineTo(-6,-52);g.lineTo(26,-60);g.stroke();
 glow(0,-58,26,ar,.75);bpoly([[0,-72],[9,-58],[0,-44],[-9,-58]],'#e8ffff',1.8);bpoly([[0,-66],[4,-58],[0,-50],[-4,-58]],'#7ae0ff',0);
 arm(1,ar_);
 for(const q of[-1,1])bpoly([[q*22,-84],[q*46,-96],[q*38,-76],[q*40,-66],[q*24,-70]],'#bfe8ff',2.2),bpoly([[q*22,-84],[q*36,-92],[q*30,-74]],'#f0fcff',0);
 // cabeza
 bpoly([[-15,-88],[15,-88],[17,-104],[0,-112],[-17,-104]],'#8acaf0',2.4);bpoly([[-15,-88],[0,-88],[0,-112],[-17,-104]],'#c8eeff',0);
 for(let i=-2;i<=2;i++)bpoly([[i*7-4,-106+Math.abs(i)*3],[i*7,-124+Math.abs(i)*5-(i==0?4:0)],[i*7+4,-106+Math.abs(i)*3]],'#e8f8ff',1.8);
 for(const q of[-1,1]){glow(q*7,-98,12,'80,220,255',.9);bpoly([[q*3,-99],[q*12,-103],[q*10,-95]],'#d8ffff',1.2)}
 g.fillStyle='#0b2a4a';g.beginPath();g.moveTo(-8,-92);for(let i=0;i<5;i++){g.lineTo(-8+i*4+2,-89);g.lineTo(-8+i*4+4,-92)}g.closePath();g.fill();
 g.fillStyle='rgba(255,255,255,.85)';for(let i=0;i<6;i++){const a=t*.05+i*1.05;g.fillRect(Math.cos(a)*34,-60+Math.sin(a*1.3)*40,2,2)}}

// ---------- 5 DEMONIO ----------
function bDemon(e,c0,c1,ac,ar,t,s){const f=Math.sin(t*.22),op=e.st==1||e.shw;
 const wing=(q)=>{const Sx=q*12,Sy=-70,Wx=q*(46+f*4),Wy=-112+f*10,T1=[q*(92),-100+f*26],T2=[q*(86),-66+f*16],T3=[q*(56),-44+f*8];
  g.beginPath();g.moveTo(Sx,Sy);g.lineTo(Wx,Wy);g.lineTo(T1[0],T1[1]);g.quadraticCurveTo((T1[0]+T2[0])/2-q*8,(T1[1]+T2[1])/2-12,T2[0],T2[1]);g.quadraticCurveTo((T2[0]+T3[0])/2-q*6,(T2[1]+T3[1])/2-8,T3[0],T3[1]);g.quadraticCurveTo(q*24,-52,Sx,-58);g.closePath();
  const gq=g.createLinearGradient(Sx,Sy,T2[0],T2[1]);gq.addColorStop(0,'#8a1420');gq.addColorStop(1,'#3a0610');g.fillStyle=gq;g.fill();g.lineWidth=2.4;g.strokeStyle=OL;g.stroke();
  g.strokeStyle='rgba(255,120,80,.35)';g.lineWidth=1.3;for(const T of[T1,T2,T3]){g.beginPath();g.moveTo(Sx,Sy+3);g.quadraticCurveTo((Sx+T[0])/2,(Sy+T[1])/2-3,T[0],T[1]);g.stroke()}
  for(const T of[T1,T2,T3])tb(3.4,'#c0b090','#5a4a38',()=>{g.moveTo(Wx,Wy);g.lineTo(T[0],T[1])});tb(5.5,'#c0b090','#5a4a38',()=>{g.moveTo(Sx,Sy);g.lineTo(Wx,Wy)})};
 wing(-1);wing(1);
 tb(5,c0,c1,()=>{g.moveTo(-6,-36);g.bezierCurveTo(-30,-26,-34,-6+f*4,-18,-4)});bpoly([[-18,-10],[-26,2],[-10,-2]],ac,1.6);
 // piernas
 for(const q of[-1,1]){lg([q*8,-38],[q*14,-20],13,9,c0);lg([q*14,-20],[q*10,-6],9,6,c1);bpoly([[q*10-5,-6],[q*10+5,-6],[q*10+3,2],[q*10-3,2]],'#2a1010',1.6)}
 // torso
 vP(()=>{g.moveTo(-18,-90);g.bezierCurveTo(-26,-70,-20,-44,-10,-34);g.lineTo(10,-34);g.bezierCurveTo(20,-44,26,-70,18,-90);g.closePath()},0,-62,30,c0,c1);
 g.strokeStyle='rgba(60,0,0,.5)';g.lineWidth=1.4;g.beginPath();g.moveTo(0,-84);g.lineTo(0,-38);for(let i=0;i<3;i++){g.moveTo(-10,-64+i*10);g.quadraticCurveTo(0,-61+i*10,10,-64+i*10)}g.stroke();
 g.beginPath();g.ellipse(-9,-78,9,7,0,0,7);g.ellipse(9,-78,9,7,0,0,7);g.strokeStyle='rgba(60,0,0,.55)';g.stroke();ellipse(-12,-81,3,2,'rgba(255,200,160,.4)');ellipse(6,-81,3,2,'rgba(255,200,160,.4)');
 // brazos
 const hand=(q,hy)=>{const sx=q*18,sy=-82,ex=q*34,ey=-64+hy*.4,hx=q*38,hh=-50+hy;const k=ik(sx,sy,hx,hh,18,17,q);lg([sx,sy],[k[0],k[1]],12,10,c0);lg([k[0],k[1]],[k[2],k[3]],10,8,c1);ellipse(hx,hh,7,7,c0);claws(hx+q*4,hh,3,8,.5,q>0?0:Math.PI,'#f5ecd0');if(op&&q>0){glow(hx+10,hh,34,'255,130,30',.9);ellipse(hx+10,hh,10,10,'#ff8a20');ellipse(hx+10,hh,5,5,'#ffe880')}};
 hand(-1,f*3);hand(1,op?-8:f*3);
 // cabeza
 for(const q of[-1,1])tb(6,'#f6efd8','#9a8a64',()=>{g.moveTo(q*9,-96);g.bezierCurveTo(q*20,-100,q*30,-106,q*26,-124)});
 vE(0,-98,14,14,c0,c1);
 for(const q of[-1,1]){bpoly([[q*12,-100],[q*24,-96],[q*13,-92]],c1,1.6)}
 glow(0,-100,22,'255,200,40',.45);for(const q of[-1,1]){g.save();g.translate(q*6,-100);g.rotate(q*.32);vE(0,0,4.6,2.8,'#fff8a0','#ffb020',0,1.2);ellipse(0,0,1.2,2.4,'#400');g.restore();brow(q*6,-106,10,-q*.4,3.6)}
 g.fillStyle='#2a0608';g.beginPath();g.ellipse(0,-90,8,op?5.5:3.4,0,0,7);g.fill();g.lineWidth=1.6;g.strokeStyle=OL;g.stroke();for(const q of[-1,1])fang(q*4,-93,2.6,5,1);fang(-3,-87,2.2,4,-1);fang(3,-87,2.2,4,-1);
 ellipse(-2,-96,1,1.4,OL);ellipse(2,-96,1,1.4,OL);
 g.save();g.globalCompositeOperation='lighter';for(let i=0;i<5;i++){const a=t*.1+i*1.3;glow(Math.cos(a)*30,-50+Math.sin(a*1.4)*30,10,'255,110,40',.18)}g.restore()}

// ---------- 6 CERBERO ----------
function cHead(x,y,sc,rot,op,c0,c1,t){g.save();g.translate(x,y);g.rotate(rot);g.scale(sc,sc);
 bpoly([[-8,-8],[-6,-26],[4,-10]],c1,1.8);
 g.save();g.translate(6,6);g.rotate(op*.5);vE(10,2,15,5,c1,'#1a0808');if(op>.2)ellipse(10,-1,12,2.6,'#ff5a10');for(let i=0;i<3;i++)fang(5+i*6,-3,3,6,-1);g.restore();
 vE(0,0,15,12,c0,c1);vE(17,3,14,7.5,c0,c1,.1);vE(30,1,3.6,3,'#222','#000',0,1);
 for(let i=0;i<3;i++)fang(12+i*6,8,3,6.5,1);
 glow(5,-4,12,'255,120,20',.9);eyeB(5,-4,3.4,['#fff0a0','#ff5a10'],1);brow(6,-9.5,10,.4,3.2);
 g.strokeStyle='rgba(255,120,30,.7)';g.lineWidth=1.3;g.beginPath();g.moveTo(-6,-2);g.lineTo(-2,2);g.lineTo(-7,5);g.stroke();g.restore()}
function bCerb(e,c0,c1,ac,ar,t,s){const fl=Math.sin(t*.3),op=(e.st==3||e.shw)?1:.15+.1*Math.sin(t*.2),run=e.vx?t*.2:0;
 const leg=(hx,off,dk,fr)=>{const a=Math.sin(run+off),b=Math.cos(run+off),fx=hx+a*8,fy=-3-Math.max(0,b)*5,k=ik(hx,-32,fx,fy,18,18,fr?-1:1);lg([hx,-32],[k[0],k[1]],15,11,c0,dk);lg([k[0],k[1]],[k[2],k[3]],10,8,c1,dk);ellipse(k[2]+3,k[3]-1,9,5,c1);claws(k[2]+9,k[3]-1,3,6,.35,0,'#e8d8c0')};
 tb(11,c0,c1,()=>{g.moveTo(-50,-46);g.bezierCurveTo(-72,-50,-84,-64,-76,-84)});for(let i=0;i<3;i++)glow(-76+i*2,-84-i*5,14,'255,120,30',.5+.2*fl);
 leg(-32,Math.PI,.45,0);leg(30,0,.45,1);
 vE(-34,-42,26,24,c0,c1);vE(-8,-44,44,25,c0,c1);vE(24,-46,24,26,c0,c1);
 clE(-8,-44,48,28,0,()=>{g.strokeStyle='rgba(255,110,20,'+(.55+.2*fl)+')';g.lineWidth=2;for(let i=0;i<6;i++){g.beginPath();g.moveTo(-40+i*14,-62);g.lineTo(-34+i*14,-52);g.lineTo(-42+i*14,-44);g.lineTo(-36+i*14,-34);g.stroke()}g.strokeStyle='rgba(0,0,0,.3)';g.lineWidth=1.2;for(let i=0;i<30;i++){const x=-50+i*3.4;g.beginPath();g.moveTo(x,-66+Math.sin(i)*4);g.quadraticCurveTo(x+3,-58,x,-50);g.stroke()}});
 for(let i=0;i<10;i++){const x=-48+i*9.6,y=-66+(i>7?5:0);spk(x,y,10,15+Math.sin(i*2)*3,-.15,'#ffb030','#a02808');glow(x,y-12,12,'255,140,30',.35+.15*fl)}
 leg(-20,Math.PI+1.6,0,0);leg(40,1.6,0,1);
 cHead(60,-76,1.15,-.5,op,c0,c1,t);cHead(66,-50,1.25,.05,op,c0,c1,t);cHead(48,-92,1.0,-.9,op,c0,c1,t);
 tb(5,'#ffb030','#a02808',()=>{});
 }

// ---------- 7 RATA MUTANTE ----------
function bRat(e,c0,c1,ac,ar,t,s){const run=e.st==2,ph=t*(run?.5:.18),bob=run?Math.abs(Math.sin(ph))*2.5:Math.sin(t*.12)*.8;
 g.save();g.translate(0,-bob);
 const leg=(hx,off,dk)=>{const a=Math.sin(ph+off),b=Math.cos(ph+off),fx=hx+a*10,fy=-2-Math.max(0,b)*6,k=ik(hx,-24,fx,fy,13,13,1);lg([hx,-24],[k[0],k[1]],11,8,c0,dk);lg([k[0],k[1]],[k[2],k[3]],7,5,'#d89a9a',dk);ellipse(k[2]+2,k[3]-1,6,3.4,'#d89a9a');claws(k[2]+6,k[3]-1,3,5,.4,0,'#ece4cc')};
 // cola
 g.lineCap='round';tb(6,'#f0a8a8','#a85a64',()=>{g.moveTo(-46,-30);g.bezierCurveTo(-76,-26,-84,-52,-100,-40+Math.sin(t*.12)*5)});
 g.strokeStyle='rgba(120,40,50,.55)';g.lineWidth=1;for(let i=0;i<9;i++){const u=i/9,x=-52-u*44,y=-30-Math.sin(u*3)*14;g.beginPath();g.moveTo(x,y-3);g.lineTo(x-1,y+3);g.stroke()}
 leg(-26,Math.PI,.4);leg(24,0,.4);
 vP(()=>{g.moveTo(-46,-22);g.bezierCurveTo(-52,-52,-24,-62,4,-58);g.bezierCurveTo(30,-56,40,-40,38,-22);g.bezierCurveTo(10,-16,-26,-14,-46,-22)},-4,-40,40,c0,c1);
 clE(-4,-38,44,22,0,()=>{g.fillStyle='#e8aab0';g.beginPath();g.ellipse(-30,-34,12,9,0,0,7);g.fill();g.strokeStyle='rgba(30,16,10,.4)';g.lineWidth=1.2;for(let i=0;i<40;i++){const x=-46+i*2.4,y=-56+Math.sin(i*2.3)*5;g.beginPath();g.moveTo(x,y);g.lineTo(x-2,y+9+Math.sin(i)*3);g.stroke()}g.fillStyle='rgba(235,225,200,.25)';g.beginPath();g.ellipse(0,-20,44,8,0,0,7);g.fill()});
 for(const[px,py,r]of[[-14,-48,4.5],[6,-52,3.5],[-30,-42,3.2],[18,-44,4]]){glow(px,py,r*3.2,'130,255,50',.55+.2*Math.sin(t*.2+px));vE(px,py,r,r*.9,'#d8ff80','#4ab020',0,1.2)}
 leg(-14,Math.PI+1.6,0);leg(36,1.6,0);
 // cabeza
 g.save();g.translate(44,-36);
 vE(-8,-18,11,13,'#f0a8b0','#a85a64',.2);vE(-8,-18,6.5,8,'#ffd0d8','#d88a96',.2,1);
 g.save();g.translate(0,4);g.rotate(e.st==3||e.shw?.4:.1);vE(10,3,12,4.5,c1,'#2a1a16');g.restore();
 vP(()=>{g.moveTo(-14,-4);g.bezierCurveTo(-12,-16,4,-18,16,-8);g.lineTo(34,2);g.bezierCurveTo(30,8,10,10,-6,8);g.bezierCurveTo(-12,6,-14,2,-14,-4)},8,-4,24,c0,c1);
 vE(34,1,4,3.2,'#f09098','#b04a58',0,1.4);glow(9,-6,12,'140,255,60',.7);eyeB(9,-6,3.6,['#e8ff90','#58b010'],0);brow(10,-11,10,.4,3.2);
 bpoly([[18,6],[25,6],[24,15],[18,14]],'#fff2b8',1.4);bpoly([[24,5],[30,4],[30,13],[25,14]],'#fff2b8',1.4);
 g.strokeStyle='rgba(235,230,220,.8)';g.lineWidth=1.1;for(const q of[-1,1]){g.beginPath();g.moveTo(30,0);g.lineTo(52,-6+q*7);g.stroke();g.beginPath();g.moveTo(30,2);g.lineTo(50,4+q*8);g.stroke()}
 g.restore();g.restore()}

// ---------- 8 MONSTRUO DE ACIDO ----------
function bAcid(e,c0,c1,ac,ar,t,s){const w=Math.sin(t*.1);
 ellipse(0,-2,52,8,'rgba(60,160,20,.55)');glow(0,-40,66,'120,255,60',.32);
 const pts=[];for(let i=0;i<=24;i++){const a=Math.PI+i/24*Math.PI,r=1+.05*Math.sin(t*.12+i*1.1);pts.push([Math.cos(a)*(44+Math.sin(t*.1)*2)*r,-6+Math.sin(a)*(70+w*3)*r*.95])}
 vP(()=>{g.moveTo(-46,-4);for(const p of pts)g.lineTo(p[0],p[1]);g.lineTo(46,-4);g.quadraticCurveTo(0,4,-46,-4)},-8,-56,58,'#b8ff70','#1c7a14',2.6);
 clE(0,-36,44,38,0,()=>{const q=g.createRadialGradient(0,-30,4,0,-30,44);q.addColorStop(0,'rgba(190,255,100,.75)');q.addColorStop(1,'rgba(30,110,20,0)');g.fillStyle=q;g.fillRect(-50,-90,100,100);
  for(let i=0;i<9;i++){const x=Math.sin(i*2.4)*30,y=-12-((t*.5+i*13)%60);g.strokeStyle='rgba(255,255,255,.55)';g.lineWidth=1;g.fillStyle='rgba(220,255,160,.25)';g.beginPath();g.arc(x,y,2.5+(i%3)*1.6,0,7);g.fill();g.stroke()}
  g.fillStyle='rgba(40,120,20,.35)';g.beginPath();g.ellipse(6,-16,30,14,0,0,7);g.fill()});
 // esqueleto en el interior
 g.save();g.globalAlpha=.35;g.fillStyle='#eaffd0';g.beginPath();g.ellipse(-22,-22,3,5,.4,0,7);g.ellipse(26,-26,2.6,4,-.3,0,7);g.fill();g.restore();
 ellipse(-16,-74,14,5,'rgba(255,255,255,.55)',-.5);ellipse(26,-40,3.5,9,'rgba(255,255,255,.3)',.2);
 for(const q of[-1,1]){const ex=q*15,ey=-52;vE(ex,ey,10,11,'#ffffff','#d8e8b0',0,2);glow(ex,ey,14,'200,255,60',.5);clE(ex,ey,10,11,0,()=>{ellipse(ex+q*-1+1,ey+1,6.4,7.2,'#9aff20');ellipse(ex+1,ey+1,2.8,5.6,'#112');ellipse(ex-2.4,ey-3,2,2,'#fff')});brow(ex,ey-13,16,q*.4,4)}
 g.beginPath();g.moveTo(-22,-30);g.quadraticCurveTo(0,-20+w*2,22,-30);g.quadraticCurveTo(0,-8+(e.st==3||e.shw?8:0),-22,-30);g.fillStyle='#10300c';g.fill();g.lineWidth=2.2;g.strokeStyle=OL;g.stroke();
 for(let i=-3;i<=3;i++){fang(i*6,-28+Math.abs(i)*.6,4,6,1)}for(let i=-2;i<=2;i++)fang(i*7,-18,3.6,5,-1);
 g.strokeStyle='#7aff30';g.lineWidth=3.4;g.lineCap='round';for(const[x,l]of[[-28,12],[-10,20],[16,14],[32,9]]){const ll=l+Math.abs(Math.sin(t*.07+x))*8;g.beginPath();g.moveTo(x,-4);g.lineTo(x,-4+ll*.4);g.stroke();ellipse(x,-4+ll*.4+2,2.4,3.2,'#9aff50')}}

// ---------- 9 ANGEL ARQUERO ----------
function bAngel(e,c0,c1,ac,ar,t,s){const f=Math.sin(t*.2),op=e.shw;
 const wing=(k,dk)=>{const ang=-.5+f*.22;for(let row=0;row<2;row++)for(let i=0;i<9;i++){g.save();g.translate(-6,-66);g.rotate(-Math.PI*.64-i*(.2+row*.02)+f*.08+(k?.1:0));const L=(row?44:68)-i*(row?1.5:4.2),wd=row?8:10;g.beginPath();g.moveTo(0,0);g.quadraticCurveTo(L*.5,-wd,L,0);g.quadraticCurveTo(L*.5,wd,0,0);const q=g.createLinearGradient(0,0,L,0);q.addColorStop(0,dk?'#c8c0e4':'#ffffff');q.addColorStop(1,dk?'#9a90cc':'#d8d0f4');g.fillStyle=q;g.fill();g.lineWidth=1.6;g.strokeStyle='#3a2a58';g.stroke();g.strokeStyle='rgba(120,100,170,.5)';g.lineWidth=1;g.beginPath();g.moveTo(3,0);g.lineTo(L-3,0);g.stroke();g.restore()}};
 g.save();g.translate(-8,-8);wing(1,1);g.restore();
 glow(0,-60,52,'255,240,200',.28);
 // capa y falda
 bpoly([[-12,-44],[12,-44],[22,-16],[0,-8],[-22,-16]],'#f4eefc',2.2);bpoly([[-12,-44],[0,-44],[0,-8],[-22,-16]],'#cbbfe8',0);g.strokeStyle='#d8a828';g.lineWidth=2.2;g.beginPath();g.moveTo(-22,-16);g.quadraticCurveTo(0,-4,22,-16);g.stroke();
 for(const q of[-1,1]){lg([q*6,-12],[q*8,2],9,7,'#e8c868');bpoly([[q*8-5,2],[q*8+7,2],[q*8+9,-4],[q*8-3,-5]],'#f8e090',1.6)}
 // torso armadura
 vP(()=>{g.moveTo(-15,-76);g.lineTo(15,-76);g.lineTo(13,-42);g.lineTo(-13,-42);g.closePath()},0,-60,24,'#fff3b8','#c8941c');
 g.strokeStyle='#8a5a0a';g.lineWidth=1.4;g.beginPath();g.moveTo(0,-76);g.lineTo(0,-44);g.moveTo(-13,-62);g.lineTo(13,-62);g.stroke();bpoly([[0,-72],[4,-64],[0,-56],[-4,-64]],'#ff5a6a',1.2);
 g.fillStyle='#e0b030';g.fillRect(-14,-46,28,4);
 // brazos
 g.save();g.translate(8,-70);const draw=op?.5:0;
 lg([0,0],[20,-4+f],9,7.5,'#f6e6c8');ellipse(22,-4+f,5,5,'#f6e6c8');g.restore();
 // arco
 g.save();g.translate(34,-72);tb(4.6,'#fff2b0','#b8840e',()=>{g.moveTo(0,-30);g.quadraticCurveTo(16,0,0,30)});g.strokeStyle='#fff';g.lineWidth=1.3;g.beginPath();g.moveTo(0,-30);g.lineTo(op?-18:-2,0);g.lineTo(0,30);g.stroke();
 if(op){tb(2.6,'#ffe9a0','#a87a10',()=>{g.moveTo(-18,0);g.lineTo(38,0)});bpoly([[38,-4],[48,0],[38,4]],'#fff6d0',1.2);glow(40,0,18,'255,230,140',.7)}g.restore();
 g.save();g.translate(-8,-70);lg([0,0],[-6,10],9,7,'#f6e6c8');g.restore();
 // cabeza
 vE(0,-86,12.5,13,'#ffe6cc','#e0b08a');
 bpoly([[-14,-88],[-10,-100],[0,-104],[12,-98],[14,-86],[8,-92],[-6,-94]],'#f2c44a',1.8);
 for(let i=0;i<3;i++){g.strokeStyle='rgba(120,70,0,.4)';g.lineWidth=1;g.beginPath();g.moveTo(-8+i*7,-100);g.lineTo(-10+i*7,-91);g.stroke()}
 for(const q of[-1,1]){ellipse(q*5+3,-86,3,3.4,'#fff');ellipse(q*5+4,-86,1.7,2.4,'#2a62d0');ellipse(q*5+4,-86,.8,1.4,'#001');g.strokeStyle='#5a3a10';g.lineWidth=1.6;g.beginPath();g.moveTo(q*5-1,-91);g.lineTo(q*5+7,-90+(q>0?1:-1)*0);g.stroke()}
 g.strokeStyle='#a0503a';g.lineWidth=1.4;g.beginPath();g.moveTo(0,-79);g.quadraticCurveTo(4,-77,7,-79);g.stroke();
 g.strokeStyle='#0a0404';g.lineWidth=6;g.beginPath();g.ellipse(0,-106,15,4.6,0,0,7);g.stroke();g.strokeStyle='#ffe06a';g.lineWidth=3;g.stroke();glow(0,-106,24,'255,220,100',.55);
 g.save();g.translate(8,-8);wing(0,0);g.restore()}

// ---------- 11 PULPO GIGANTE ----------
function bOcto(e,c0,c1,ac,ar,t,s){const sw=Math.sin(t*.06),op=e.st==1||e.shw;
 const tent=(i,front)=>{const q=(i-3.5),bx=q*9,by=-46;let pr=[bx,by];for(let k=1;k<=14;k++){const u=k/14,wav=Math.sin(t*.07+i*.9-u*4.5)*(6+u*10)*(op?1.5:1),x=bx+q*(4+u*11)+wav*u,y=by+u*(44+Math.abs(q)*1.2)-Math.sin(u*Math.PI)*6+(u>.82?-Math.sin((u-.82)*Math.PI*5.5)*10:0);const w0=22*(1-(k-1)/14*.9)+2.5,w1=22*(1-k/14*.9)+2.5;lg(pr,[x,y],w0,w1,i%2?c0:c1,i%2?0:.18);if(k%2==0&&k<13)ellipse(x-q*.4,y+1,Math.max(1.6,w1*.28),Math.max(1.2,w1*.2),'#ffd6f4');pr=[x,y]}};
 for(let i=0;i<8;i+=2)tent(i,0);
 for(let i=1;i<8;i+=2)tent(i,1);
 // manto
 vP(()=>{g.moveTo(-34,-52);g.bezierCurveTo(-52,-90,-30,-112,0,-112+sw*2);g.bezierCurveTo(30,-112,52,-90,34,-52);g.bezierCurveTo(16,-42,-16,-42,-34,-52)},0,-80,52,'#e48cff','#4a1470');
 clE(0,-78,44,36,0,()=>{for(let i=0;i<26;i++){const a=hsh(i,3),b=hsh(i,8);ellipse(-40+a*80,-110+b*66,2.5+a*4,2+b*3.4,'rgba(60,10,100,.35)')}g.fillStyle='rgba(255,255,255,.12)';g.beginPath();g.ellipse(-12,-98,16,8,-.5,0,7);g.fill();g.strokeStyle='rgba(255,170,240,.35)';g.lineWidth=1.3;for(let i=-3;i<=3;i++){g.beginPath();g.moveTo(i*7,-112);g.quadraticCurveTo(i*10,-84,i*6,-52);g.stroke()}});
 ellipse(-22,-96,12,5,'rgba(255,255,255,.5)',-.6);
 // ojos
 for(const q of[-1,1]){const ex=q*19,ey=-66;vE(ex,ey,11.5,10.5,'#fff7d8','#d8b060',0,2.2);clE(ex,ey,11.5,10.5,0,()=>{const r=g.createRadialGradient(ex,ey,2,ex,ey,11);r.addColorStop(0,'#ffcf30');r.addColorStop(1,'#c86010');g.fillStyle=r;g.beginPath();g.arc(ex,ey,8.6,0,7);g.fill()});g.fillStyle='#0a0408';g.beginPath();g.roundRect?g.roundRect(ex-7,ey-2.4,14,4.8,2):g.rect(ex-7,ey-2.4,14,4.8);g.fill();ellipse(ex-3,ey-4,2.2,1.6,'rgba(255,255,255,.9)');brow(ex,ey-13,22,q*.3,5)}
 // pico
 bpoly([[-5,-50],[5,-50],[0,-42]],'#2a1a1a',1.6);
 if(op){glow(0,-46,26,'80,20,120',.9)}}

// ---------- 12 TIBURON ----------
function bShark(e,c0,c1,ac,ar,t,s){const sw=Math.sin(t*.2)*7,op=e.st==3||e.shw||e.st==1;
 g.save();g.translate(0,-2);g.rotate(Math.sin(t*.09)*.02);
 // cola
 const tailp=()=>{g.moveTo(-58,-38);g.bezierCurveTo(-72+sw*.3,-40,-82,-60+sw*.4,-98+sw,-78+sw*.8);g.bezierCurveTo(-90+sw,-58,-88+sw,-44,-82+sw,-38);g.bezierCurveTo(-88+sw,-32,-92+sw,-14,-92+sw,-4);g.bezierCurveTo(-76,-16,-66,-30,-58,-34);g.closePath()};
 vP(tailp,-82,-40,40,'#7fa6c4','#2a4866');
 // aleta pectoral lejana
 bpoly([[18,-22],[-8,-2],[-2,-14],[8,-20]],'#4a6a88',2);
 // cuerpo
 const body=()=>{g.moveTo(78,-36);g.bezierCurveTo(66,-62,30,-72,-4,-66);g.bezierCurveTo(-34,-62,-52,-48,-62,-38);g.lineTo(-62,-34);g.bezierCurveTo(-50,-26,-34,-16,-2,-10);g.bezierCurveTo(34,-6,62,-16,78,-30);g.closePath()};
 vP(body,10,-44,76,'#9cc0da','#34546f',2.8);
 g.save();g.beginPath();body();g.clip();let q=g.createLinearGradient(0,-70,0,-8);q.addColorStop(0,'rgba(20,40,70,.55)');q.addColorStop(.5,'rgba(20,40,70,0)');q.addColorStop(.62,'rgba(255,255,255,0)');q.addColorStop(.78,'rgba(245,250,255,.92)');q.addColorStop(1,'rgba(255,255,255,1)');g.fillStyle=q;g.fillRect(-80,-76,170,72);
 g.strokeStyle='rgba(20,50,80,.35)';g.lineWidth=1.3;for(const[x,y,l]of[[-10,-54,16],[8,-58,11],[-28,-50,13]]){g.beginPath();g.moveTo(x,y);g.lineTo(x+l,y+3);g.stroke()}
 g.fillStyle='rgba(255,255,255,.2)';g.beginPath();g.ellipse(20,-60,34,5,-.1,0,7);g.fill();g.restore();
 // branquias
 g.strokeStyle='rgba(10,30,50,.7)';g.lineWidth=2;g.lineCap='round';for(let i=0;i<4;i++){g.beginPath();g.moveTo(32-i*5,-52+i*.6);g.quadraticCurveTo(28-i*5,-40,32-i*5,-27);g.stroke()}
 // aleta dorsal
 vP(()=>{g.moveTo(14,-68);g.bezierCurveTo(4,-86,-8,-100,-18,-102+sw*.2);g.bezierCurveTo(-18,-86,-24,-72,-30,-64);g.closePath()},-8,-80,30,'#8ab0cc','#2a4866');
 // aleta pectoral cercana
 vP(()=>{g.moveTo(26,-24);g.bezierCurveTo(14,-8,-2,6,-16,6);g.bezierCurveTo(-6,-6,0,-16,6,-22);g.closePath()},10,-10,22,'#8ab0cc','#2a4866');
 // boca
 g.save();g.translate(52,-30);g.rotate(op?.55:.06);vP(()=>{g.moveTo(26,0);g.bezierCurveTo(10,10,-20,10,-34,-2);g.lineTo(-34,-6);g.lineTo(26,-3);g.closePath()},0,2,30,'#f2f8ff','#aab8c8',2.2);
 if(op){g.fillStyle='#8a1a2a';g.beginPath();g.moveTo(24,-3);g.lineTo(-30,-5);g.lineTo(-20,4);g.closePath();g.fill()}
 for(let i=0;i<9;i++)fang(20-i*6.4,-2,4.2,7,-1);g.restore();
 // mordida superior: dientes
 for(let i=0;i<8;i++)fang(70-i*6.4,-31+(i*.5),4.4,8,1);
 g.strokeStyle='#0d0507';g.lineWidth=2.2;g.beginPath();g.moveTo(78,-32);g.quadraticCurveTo(54,-28,24,-30);g.stroke();
 // ojo
 vE(52,-44,6,6,'#2a4060','#02060c',0,1.8);ellipse(50,-46,2.4,2.4,'rgba(255,255,255,.95)');glow(52,-44,10,'255,60,60',op?.7:.0);
 brow(53,-51,13,.32,3.4);
 vE(72,-38,2,1.6,'#14202c','#000',0,1);
 g.restore()}

function bLight(e,c0,c1,ac,ar,t,s){const dx=e.dir>0?2:2,bl=(t%150<7)?1.4:6;
 glow(0,-48,62,'190,225,255',.10+.05*s);
 for(let i=0;i<8;i++){const a=t*.02+i*.785,r=30+Math.sin(t*.07+i)*8;ellipse(Math.cos(a)*r,-48+Math.sin(a)*r*.8,1.6,1.6,'rgba(220,240,255,.8)')}
 for(const q of[-1,1]){glow(q*17,-50,34,'40,120,255',1);ellipse(q*17,-50,14.5,bl+3.5,'#1a4aa8');ellipse(q*17,-50,12.5,bl+1.5,'#e6f4ff');ellipse(q*17+dx,-50,7,Math.min(bl+1,7),'#1f6aff');ellipse(q*17+dx,-50,3,Math.min(bl,3),'#fff')}}
const BDF=[bSnake,bWolf,bDragon,bIce,bDemon,bCerb,bRat,bAcid,bAngel,bLight,bOcto,bShark];
function drawBP(b){const n=b.n||0,col=b.c||'#ff7a20',rg=rgb_(col.length==7?col:'#ff7a20');
 if(b.k=='r'){if(n==3||n==4){bpoly([[b.x-10,b.y-20],[b.x+10,b.y-20],[b.x,b.y+26]],'#bfe6ff',2);ellipse(b.x-3,b.y-8,2.5,8,'rgba(255,255,255,.7)')}
  else if(n==5||n==6){glow(b.x,b.y,38,'255,110,30',.8);ellipse(b.x,b.y,15,15,'#ff6a20');ellipse(b.x,b.y,8,8,'#ffe060')}
  else if(n==8){glow(b.x,b.y,34,'120,255,60',.6);ob(b.x,b.y,16,18,'#6aff3a');ellipse(b.x-4,b.y-6,4,5,'rgba(255,255,255,.5)')}
  else{ob(b.x,b.y,20,20,'#7a6a5a');ellipse(b.x-6,b.y-6,6,4,'rgba(255,255,255,.25)')}}
 else if(b.k=='w'){glow(b.x,b.y,34,rg,.8);ellipse(b.x,b.y,10,16,col)}
 else if(n==11){glow(b.x,b.y,30,'150,60,220',.7);ob(b.x,b.y,10,10,'#3a1060');ellipse(b.x-3,b.y-3,3,3,'rgba(255,255,255,.4)')}
 else if(n==12){glow(b.x,b.y,28,'160,230,255',.6);ellipse(b.x,b.y,9,9,'rgba(120,200,255,.35)');g.strokeStyle='#e8fcff';g.lineWidth=2.4;g.beginPath();g.arc(b.x,b.y,9,0,7);g.stroke();ellipse(b.x-3,b.y-3,2.4,2.4,'rgba(255,255,255,.85)')}
 else if(n==9){g.save();g.translate(b.x,b.y);g.rotate(Math.atan2(b.vy,b.vx));glow(0,0,26,'255,230,140',.6);g.strokeStyle='#0a0404';g.lineWidth=5;g.beginPath();g.moveTo(-20,0);g.lineTo(14,0);g.stroke();g.strokeStyle='#ffe9a0';g.lineWidth=3;g.stroke();bpoly([[14,-6],[27,0],[14,6]],'#fff6c0',1.5);bpoly([[-20,0],[-27,-6],[-14,0],[-27,6]],'#ffd24a',1);g.restore()}
 else if(n==3||n==4){g.save();g.translate(b.x,b.y);g.rotate(Math.atan2(b.vy,b.vx));glow(0,0,22,'170,230,255',.6);bpoly([[-12,0],[0,-5],[14,0],[0,5]],'#cfeeff',1.5);g.restore()}
 else if(n==8||n==7){glow(b.x,b.y,26,rg,.7);ob(b.x,b.y,8,9,col);ellipse(b.x-2,b.y-3,2.4,3,'rgba(255,255,255,.55)')}
 else{glow(b.x,b.y,26,rg,.7);ellipse(b.x,b.y,8,8,col);ellipse(b.x,b.y,4,4,'#fff6c0')}}
function drawBoss(e){const k=e.k,n=e.n,[c0,c1,ac]=PL[n-1],t=e.ph,s=Math.sin(t*.08),ar=rgb_(ac);
 g.save();g.translate(e.x+e.w/2,e.y+e.h);g.scale(e.dir<0?-1:1,1);g.lineJoin='round';g.lineCap='round';g.strokeStyle='#0a0404';g.lineWidth=2.5;
 if(k==3)g.globalAlpha=n==10?Math.max(0,e.al==null?1:e.al):.25+.75*(e.al==null?1:e.al);
 BDF[n-1](e,c0,c1,ac,ar,t,s);
 if(e.hp<e.mhp*.5){glow(0,-e.h/2,e.w*.95+Math.sin(t*.3)*8,'255,60,30',.35);if(t%4==0)pt(e.x+e.w/2+R(-e.w/2,e.w/2),e.y+R(0,e.h),1,'s','#ff6a30')}
 if(e.shw)glow(0,-e.h/2,e.w*.8,ar,.3+.25*Math.sin(t*.6));
 g.restore();if(e.shw&&n!=10&&t%10<6)txt('!',e.x+e.w/2,e.y-16,30,'#ffd24a','center','#3a0508',6)}
function drk(){if(st!='play'||!hasM(2)||isB())return;const px=P.x-Math.floor(cx)+13,py=P.y-OY+20,q=g.createRadialGradient(px,py,60,px,py,230);q.addColorStop(0,'rgba(0,0,12,0)');q.addColorStop(1,'rgba(0,0,12,.94)');g.fillStyle=q;g.fillRect(0,0,W,H)}
function bossHud(){if(st!='play')return;if(LB>0&&!(li()==1||li()==11))LB=0;if(LB>0){LB--;const a=Math.min(1,LB/40,(240-LB)/20),ms=MN.filter((_,i)=>hasM(i)).concat(wmName()?[wmName()]:[]).join(' · ');g.save();g.globalAlpha=a;if(isB())txt('¡JEFE! '+BN[lv/10-1],W/2,140,36,'#ff5a4a','center','#2a0508',8),txt(BPW[lv/10-1],W/2,176,16,'#ffe680','center','#1b2a5a',4);else txt('NIVEL '+lv,W/2,140,34,'#fff','center','#1b2a5a',7);if(ms)txt(ms,W/2,isB()?204:178,16,'#ffe680','center','#1b2a5a',4);g.restore()}
 const b=BOSSE;if(b&&!b.dead&&b.act){const w=420,x=W/2-w/2,y=H-32,r=Math.max(0,b.hp/b.mhp),p2=b.hp<b.mhp*.5;if(p2&&!b.fu){b.fu=1;b.fur=110;sh=Math.max(sh,12)}
  b.lag=b.lag==null?r:b.lag+(r-b.lag)*.08;rr(x-4,y-3,w+8,24,10,'rgba(8,6,16,.88)');rr(x,y,w,16,7,'rgba(255,255,255,.1)');rr(x,y,Math.max(2,w*b.lag),16,7,'#ffd24a');
  const bg2=g.createLinearGradient(0,y,0,y+16);bg2.addColorStop(0,p2?'#ff7a4a':'#ff5a5a');bg2.addColorStop(1,p2?'#c4200c':'#a8141c');rr(x,y,Math.max(2,w*r),16,7,bg2);rr(x+3,y+2,Math.max(0,w*r-6),3,2,'rgba(255,255,255,.3)');g.fillStyle='rgba(255,255,255,.7)';g.fillRect(x+w/2-1,y,2,16);
  txt(BN[b.n-1]+(p2?'  ·  FURIA':''),W/2,y-13,14,p2?'#ff8a6a':'#fff','center','#000',3);
  if(b.fur>0){b.fur--;g.save();g.globalAlpha=Math.min(1,b.fur/20);txt('¡FURIA!',W/2,140,40,'#ff4a2a','center','#2a0508',8);g.restore()}}}
