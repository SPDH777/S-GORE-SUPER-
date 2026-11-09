function drawMush(e){const pl=PM[e.v||0],ph=frame*.2+e.x*.1,sn=Math.sin(ph),ol='#2a1208';
g.save();g.translate(e.x+15,e.y+e.h);if(e.dead==1)g.scale(1,-1);else if(e.dead==2)g.scale(1.3,.28);g.lineJoin='round';g.lineCap='round';
for(const s of[-1,1]){const k=Math.sin(ph+(s>0?Math.PI:0)),l=Math.max(0,k)*4;g.save();g.translate(s*8.5+k*2.5,-4.5-l);g.rotate(k*.12*s);g.fillStyle='#1c0f08';g.strokeStyle='#000';g.lineWidth=1.3;g.beginPath();g.ellipse(0,0,9,5.5,0,0,7);g.fill();g.stroke();g.fillStyle='rgba(255,255,255,.18)';g.beginPath();g.ellipse(-2.5,-2.5,4,1.4,0,0,7);g.fill();g.restore()}
g.translate(0,-Math.abs(sn)*1.1);
let q=g.createLinearGradient(-9,0,9,0);q.addColorStop(0,'#e8c590');q.addColorStop(.5,'#f8e2bc');q.addColorStop(1,'#d2a96e');g.fillStyle=q;g.strokeStyle=ol;g.lineWidth=2;g.beginPath();g.moveTo(-9,-6);g.lineTo(-8.5,-17);g.lineTo(8.5,-17);g.lineTo(9,-6);g.quadraticCurveTo(0,-3.5,-9,-6);g.closePath();g.fill();g.stroke();
q=g.createLinearGradient(0,-39,0,-13);q.addColorStop(0,pl[0]);q.addColorStop(1,pl[1]);g.fillStyle=q;g.strokeStyle=ol;g.lineWidth=2.4;g.beginPath();g.moveTo(-19,-15);g.bezierCurveTo(-21,-30,-12,-39,0,-39);g.bezierCurveTo(12,-39,21,-30,19,-15);g.quadraticCurveTo(0,-10,-19,-15);g.closePath();g.fill();g.stroke();
g.fillStyle='rgba(0,0,0,.18)';g.beginPath();g.moveTo(-18.5,-17);g.quadraticCurveTo(0,-12,18.5,-17);g.quadraticCurveTo(0,-9.5,-18.5,-17);g.fill();
g.fillStyle='rgba(255,255,255,.22)';g.beginPath();g.ellipse(-9,-33,6,2.4,-.6,0,7);g.fill();
const lk=CL((P.x-e.x-15)/50,-1,1)*1.3;for(const s of[-1,1]){g.fillStyle='#fff';g.strokeStyle='#1a0a05';g.lineWidth=1.3;g.beginPath();g.ellipse(s*6.6,-24,5,6.6,0,0,7);g.fill();g.stroke();ellipse(s*4.6+lk,-23,2.3,3.4,'#111')}
g.strokeStyle='#1a0a05';g.lineWidth=4.6;g.beginPath();g.moveTo(-16,-35.5);g.lineTo(-1.5,-27);g.moveTo(16,-35.5);g.lineTo(1.5,-27);g.stroke();
g.fillStyle='#fff';g.strokeStyle=ol;g.lineWidth=1.1;for(const s of[-1,1]){g.beginPath();g.moveTo(s*12-2.6,-13.6);g.lineTo(s*12+2.6,-13.6);g.lineTo(s*12,-8.6);g.closePath();g.fill();g.stroke()}
const v=e.v;if(v==1){ellipse(-10,-38,3,5,'#fff');ellipse(10,-38,3,5,'#fff')}if(v==2)rr(-15,-42,30,7,3,'#c8e8f8');if(v==3){g.fillStyle='#ff4a3a';for(let i=-1;i<2;i++){g.beginPath();g.moveTo(i*9-4,-37);g.lineTo(i*9,-47);g.lineTo(i*9+4,-37);g.fill()}}if(v==4){g.fillStyle='#ffe14a';g.strokeStyle=ol;g.lineWidth=1.5;g.beginPath();g.moveTo(-9,-38);g.lineTo(-9,-46);g.lineTo(-4,-41);g.lineTo(0,-48);g.lineTo(4,-41);g.lineTo(9,-46);g.lineTo(9,-38);g.closePath();g.fill();g.stroke()}g.restore()}
function drawSnail(e){g.save();g.translate(e.x+15,e.y+e.h);g.scale(e.dir<0?-1:1,1);const s=e.st,u=Math.sin(frame*.15+e.x*.05),ol='#2a1406';g.lineJoin='round';g.lineCap='round';
 if(s==0){const q=g.createLinearGradient(0,-13,0,0);q.addColorStop(0,'#d6ea55');q.addColorStop(1,'#82b126');g.fillStyle=q;g.strokeStyle=ol;g.lineWidth=1.6;g.beginPath();g.moveTo(-18,0);g.quadraticCurveTo(-16,-7,-7,-8);g.quadraticCurveTo(5,-9,13+u,-13);g.quadraticCurveTo(22,-14,23,-6);g.quadraticCurveTo(23,-1,18,0);g.closePath();g.fill();g.stroke();
  g.fillStyle='rgba(255,255,255,.3)';g.beginPath();g.ellipse(14,-9,6,2,-.2,0,7);g.fill();
  for(const[a,b]of[[17,21],[12,12]]){const ex=b+u*1.5;g.strokeStyle=ol;g.lineWidth=4.4;g.beginPath();g.moveTo(a,-12);g.quadraticCurveTo(a+(b-a)*.4,-18,ex,-22);g.stroke();g.strokeStyle='#a4cd35';g.lineWidth=2.6;g.stroke();ellipse(ex,-24,4.6,5,ol);ellipse(ex,-24,3.6,4,'#fff');ellipse(ex+1.4,-23.5,1.8,2.2,'#111');ellipse(ex+.8,-24.8,.7,.7,'#fff')}}
 const rad=s?10:12,cy=s?-10:-17,cxx=s?0:-4;ellipse(cxx,cy,rad+2,rad+2,ol);const q2=g.createRadialGradient(cxx-4,cy-5,1,cxx,cy,rad+2);q2.addColorStop(0,'#ff9a4a');q2.addColorStop(.6,'#e0431e');q2.addColorStop(1,'#98200e');g.fillStyle=q2;g.beginPath();g.arc(cxx,cy,rad,0,7);g.fill();
 g.strokeStyle='#6e1608';g.lineWidth=2;g.beginPath();for(let a=0;a<13;a+=.25)g.lineTo(cxx+Math.cos(a)*a*.78,cy+Math.sin(a)*a*.78);g.stroke();
 g.strokeStyle='rgba(255,190,120,.55)';g.lineWidth=1;g.beginPath();for(let a=.6;a<12;a+=.25)g.lineTo(cxx+Math.cos(a)*a*.78+.7,cy+Math.sin(a)*a*.78-.7);g.stroke();ellipse(cxx-5,cy-6,3.4,1.8,'rgba(255,255,255,.55)',-.6);
 if(s==2){g.strokeStyle='rgba(255,255,255,.7)';g.lineWidth=1.5;g.beginPath();g.arc(cxx,cy,rad+5,frame*.5,frame*.5+1.5);g.stroke()}g.restore()}
function drawPlant(e){const x=e.x+16,sw=Math.sin(frame*.07+e.ph)*2.5,o=.15+Math.abs(Math.sin(frame*.1+e.ph*2))*.85,ju=1+o*7,ol='#2a0a10';
g.save();g.translate(x,e.y+24);g.lineJoin='round';g.lineCap='round';
g.strokeStyle=ol;g.lineWidth=9;g.beginPath();g.moveTo(0,46);g.quadraticCurveTo(sw*.3,28,sw,8);g.stroke();g.strokeStyle='#3cb043';g.lineWidth=5.5;g.stroke();g.strokeStyle='rgba(255,255,255,.3)';g.lineWidth=1.5;g.beginPath();g.moveTo(-1.5,44);g.quadraticCurveTo(sw*.3-1.5,28,sw-1.5,10);g.stroke();
for(const k of[-1,1]){g.fillStyle='#38b043';g.strokeStyle='#15501c';g.lineWidth=1.6;g.beginPath();g.moveTo(k*2,32);g.quadraticCurveTo(k*11,20,k*23,32);g.quadraticCurveTo(k*11,36,k*2,32);g.fill();g.stroke();g.strokeStyle='rgba(255,255,255,.35)';g.lineWidth=1;g.beginPath();g.moveTo(k*4,32);g.lineTo(k*17,29.5);g.stroke()}
g.translate(sw,0);g.rotate(sw*.025);
const uy=-3-ju,ly=-3+ju;
g.fillStyle='#3a0a14';g.beginPath();g.ellipse(0,-3,16,ju+2,0,0,7);g.fill();
const half=(cy,rx,ry,up,sp)=>{let q=g.createRadialGradient(-6,cy+(up?-ry*.6:ry*.5),2,0,cy,ry+8);q.addColorStop(0,'#ff6a6a');q.addColorStop(.5,'#e0232e');q.addColorStop(1,'#8f1020');g.fillStyle=q;g.strokeStyle=ol;g.lineWidth=2;g.beginPath();g.ellipse(0,cy,rx,ry,0,up?Math.PI:0,up?2*Math.PI:Math.PI);g.closePath();g.fill();g.stroke();
 for(const[a,b,r]of sp){g.fillStyle='#fff';g.strokeStyle='rgba(120,20,30,.5)';g.lineWidth=1;g.beginPath();g.ellipse(a,cy+b,r,r*.95,0,0,7);g.fill();g.stroke()}
 g.strokeStyle='#ffe4dc';g.lineWidth=2.2;g.beginPath();g.moveTo(-rx+1.5,cy);g.lineTo(rx-1.5,cy);g.stroke()};
half(ly,17,12,0,[[-7,6,3],[8,5,2.4]]);half(uy,18,16,1,[[-9,-9,4.2],[8,-8,3.4],[0,-13,2.8]]);
g.fillStyle='#fff';g.strokeStyle=ol;g.lineWidth=1;for(const a of[-10,-3.5,3.5,10]){g.beginPath();g.moveTo(a-2.6,uy);g.lineTo(a+2.6,uy);g.lineTo(a,uy+6);g.closePath();g.fill();g.stroke();g.beginPath();g.moveTo(a-2.6,ly);g.lineTo(a+2.6,ly);g.lineTo(a,ly-5.5);g.closePath();g.fill();g.stroke()}
g.restore()}
function drawCastle(){const X=FX+300,Y=FY,sc=['#c4bfb6','#c8d4e0','#7a5a52','#8a9a80','#f4f0e0','#e8dcc0'][wd()],ol='#2a2420';
 const stone=(x,y,w,h)=>{g.fillStyle=sc;g.fillRect(x,y,w,h);const q=g.createLinearGradient(x,0,x+w,0);q.addColorStop(0,'rgba(255,255,255,.2)');q.addColorStop(1,'rgba(0,0,0,.32)');g.fillStyle=q;g.fillRect(x,y,w,h);g.fillStyle='rgba(0,0,0,.17)';for(let r=0,yy=y+10;yy<y+h;yy+=12,r++){g.fillRect(x,yy,w,1);for(let xx=x+(r%2)*10+10;xx<x+w;xx+=20)g.fillRect(xx,yy-12,1,12)}g.strokeStyle=ol;g.lineWidth=2;g.strokeRect(x,y,w,h)};
 const cren=(x,y,w)=>{for(let i=2;i<w-8;i+=16){g.fillStyle=sc;g.fillRect(x+i,y-11,10,11);g.strokeStyle=ol;g.lineWidth=2;g.strokeRect(x+i,y-11,10,11)}};
 const roof=(x,y,w,h)=>{const q=g.createLinearGradient(x,0,x+w,0);q.addColorStop(0,'#e0405a');q.addColorStop(1,'#8a1426');g.fillStyle=q;g.beginPath();g.moveTo(x-6,y);g.lineTo(x+w/2,y-h);g.lineTo(x+w+6,y);g.closePath();g.fill();g.strokeStyle=ol;g.lineWidth=2;g.stroke();const fy=y-h,fw=Math.sin(frame*.15+x)*3;g.strokeStyle='#ddd';g.beginPath();g.moveTo(x+w/2,fy);g.lineTo(x+w/2,fy-24);g.stroke();g.fillStyle='#ffd24a';g.beginPath();g.moveTo(x+w/2,fy-24);g.lineTo(x+w/2+16+fw,fy-19);g.lineTo(x+w/2,fy-14);g.fill()};
 const win=(x,y)=>{g.fillStyle=ol;g.beginPath();g.moveTo(x-7,y+13);g.lineTo(x-7,y-3);g.arc(x,y-3,7,Math.PI,0);g.lineTo(x+7,y+13);g.fill();g.fillStyle='#ffd878';g.beginPath();g.moveTo(x-5,y+12);g.lineTo(x-5,y-3);g.arc(x,y-3,5,Math.PI,0);g.lineTo(x+5,y+12);g.fill();g.fillStyle=ol;g.fillRect(x-.7,y-8,1.4,20)};
 stone(X-85,Y-130,170,130);cren(X-85,Y-130,170);stone(X-145,Y-190,56,190);stone(X+89,Y-190,56,190);roof(X-145,Y-190,56,64);roof(X+89,Y-190,56,64);stone(X-32,Y-215,64,90);roof(X-32,Y-215,64,70);
 win(X-117,Y-150);win(X+117,Y-150);win(X,Y-180);win(X-60,Y-90);win(X+60,Y-90);win(X-117,Y-90);win(X+117,Y-90);
 g.fillStyle=ol;g.beginPath();g.moveTo(X-30,Y);g.lineTo(X-30,Y-48);g.arc(X,Y-48,30,Math.PI,0);g.lineTo(X+30,Y);g.fill();const dq=g.createLinearGradient(X-26,0,X+26,0);dq.addColorStop(0,'#6a3c1c');dq.addColorStop(.5,'#8a5428');dq.addColorStop(1,'#5a3216');g.fillStyle=dq;g.beginPath();g.moveTo(X-26,Y);g.lineTo(X-26,Y-48);g.arc(X,Y-48,26,Math.PI,0);g.lineTo(X+26,Y);g.fill();g.fillStyle='rgba(0,0,0,.35)';for(let i=-18;i<=18;i+=12)g.fillRect(X+i,Y-72,1.5,72);g.fillStyle='#3a3a42';g.fillRect(X-26,Y-34,52,4);g.fillRect(X-26,Y-14,52,4);
 for(const tx of[X-46,X+46]){rr(tx-2,Y-46,4,18,1,'#5a3a1a');const fl=Math.sin(frame*.4+tx)*1.5;glow(tx,Y-54,42,'255,170,60',.55);ellipse(tx,Y-52,4,6+fl,'#ff9a20');ellipse(tx,Y-51,2,3.5,'#ffe070')}}
function drawFlag(){const x=FX,y0=FY-230;let q=g.createLinearGradient(x-3,0,x+3,0);q.addColorStop(0,'#9aa0a8');q.addColorStop(.4,'#f0f2f4');q.addColorStop(1,'#7c828a');g.fillStyle=q;g.fillRect(x-2.5,y0,5,230);
 q=g.createRadialGradient(x-1.5,y0-4,1,x,y0-2,6);q.addColorStop(0,'#fff3a0');q.addColorStop(1,'#b8860b');g.fillStyle=q;g.beginPath();g.arc(x,y0-2,6,0,7);g.fill();rr(x-9,FY-8,18,8,2,'#6b6f76');
 const N=14,Wd=62,Ht=40,tp=y0+8;let pt0=null;for(let i=0;i<=N;i++){const u=i/N,ph=frame*.12-u*4.5,dy=Math.sin(ph)*u*7,px=x+3+u*Wd*(1-u*.06),a=[px,tp+dy+u*3],b=[px,tp+dy+u*3+Ht*(1-u*.12)];
  if(pt0){const l=.5+.5*Math.cos(ph);g.fillStyle='rgb('+(150+80*l|0)+','+(14+22*l|0)+','+(22+20*l|0)+')';g.beginPath();g.moveTo(pt0[0][0]-.5,pt0[0][1]);g.lineTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.lineTo(pt0[1][0]-.5,pt0[1][1]);g.fill()}if(i==6)ellipse(px,(a[1]+b[1])/2,7,7,'rgba(255,255,255,.9)');pt0=[a,b]}
 }


