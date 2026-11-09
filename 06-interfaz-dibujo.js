const ellipse=(x,y,rx,ry,c,rot=0)=>{g.fillStyle=c;g.beginPath();g.ellipse(x,y,rx,ry,rot,0,7);g.fill()};
const rr=(x,y,w,h,r,c)=>{g.fillStyle=c;g.beginPath();g.roundRect?g.roundRect(x,y,w,h,r):g.rect(x,y,w,h);g.fill()};
function tabIcon(i,x,y,c){g.save();g.translate(x,y);g.fillStyle=c;g.strokeStyle=c;g.lineJoin='round';g.lineCap='round';g.lineWidth=2.2;g.beginPath();
 if(i==0){g.moveTo(-5,-9);g.lineTo(-11,-5);g.lineTo(-8,-1);g.lineTo(-5,-3);g.lineTo(-5,9);g.lineTo(5,9);g.lineTo(5,-3);g.lineTo(8,-1);g.lineTo(11,-5);g.lineTo(5,-9);g.quadraticCurveTo(0,-5,-5,-9);g.closePath();g.stroke();g.globalAlpha=.28;g.fill()}
 else if(i==1){[[-12,-7],[12,-7],[12,-1],[4,-1],[4,1],[1,1],[-1,11],[-7,11],[-6,1],[-12,1]].forEach((q,k)=>k?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1]));g.closePath();g.lineWidth=1.8;g.fill();g.stroke()}
 else{[[3,-11],[-7,2],[-1,2],[-3,11],[7,-3],[1,-3]].forEach((q,k)=>k?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1]));g.closePath();g.lineWidth=1.6;g.fill();g.stroke()}
 g.restore()}
function txt0(s,x,y,sz,col='#fff',al='center',ol='#1b2a5a',lw){g.font=`800 ${sz}px "Segoe UI","SF Pro Display","Helvetica Neue",Arial,sans-serif`;g.textAlign=al;g.textBaseline='middle';g.lineJoin='round';try{g.letterSpacing=sz>=20?'1.2px':'.6px'}catch(e){}g.lineWidth=Math.min(lw||sz/5,sz*.11+1);g.strokeStyle=ol;g.save();g.shadowColor='rgba(0,0,0,.45)';g.shadowBlur=sz*.14;g.shadowOffsetY=sz*.06;g.strokeText(s,x,y);g.restore();g.fillStyle=col;g.fillText(s,x,y);try{g.letterSpacing='0px'}catch(e){}}
const TXC=new Map();
function txt(s,x,y,sz,col='#fff',al='center',ol='#1b2a5a',lw){s=String(s);const m=g.getTransform(),sc=Math.round(Math.hypot(m.a,m.b)*100)/100;
 if(!(sc>0)||!isFinite(sc)){txt0(s,x,y,sz,col,al,ol,lw);return}
 const key=s+'\u0001'+sz+'|'+col+'|'+al+'|'+ol+'|'+lw+'|'+sc;let c=TXC.get(key);
 if(!c){if(TXC.size>400)TXC.clear();const g0=g,cvs=document.createElement('canvas'),pad=Math.ceil(sz*.5+Math.min(lw||sz/5,sz*.11+1)+6);
  g.font=`800 ${sz}px "Segoe UI","SF Pro Display","Helvetica Neue",Arial,sans-serif`;try{g.letterSpacing=sz>=20?'1.2px':'.6px'}catch(e){}const w=g.measureText(s).width;try{g.letterSpacing='0px'}catch(e){}
  const cw=Math.ceil(w)+pad*2,ch=Math.ceil(sz*1.3)+pad*2;cvs.width=Math.ceil(cw*sc);cvs.height=Math.ceil(ch*sc);
  const x0=al=='left'?pad:al=='right'?cw-pad:cw/2,y0=ch/2;g=cvs.getContext('2d');g.setTransform(sc,0,0,sc,0,0);
  try{txt0(s,x0,y0,sz,col,al,ol,lw)}finally{g=g0}c={cv:cvs,x0,y0,w:cw,h:ch};TXC.set(key,c)}
 let dx=x-c.x0,dy=y-c.y0;if(!m.b&&!m.c){dx=(Math.round(m.a*dx+m.e)-m.e)/m.a;dy=(Math.round(m.d*dy+m.f)-m.f)/m.d}
 g.textAlign=al;g.textBaseline='middle';g.drawImage(c.cv,dx,dy,c.w,c.h)}
function btn(x,y,w,h,c1,c2,bc){const q=g.createLinearGradient(0,y,0,y+h),rrp=(a,b,c,d)=>{g.beginPath();g.roundRect?g.roundRect(a,b,c,d,d/2):g.rect(a,b,c,d)};q.addColorStop(0,c1);q.addColorStop(1,c2);g.save();g.shadowColor='rgba(0,0,0,.45)';g.shadowBlur=10;g.shadowOffsetY=4;rrp(x,y,w,h);g.fillStyle=q;g.fill();g.restore();rrp(x+.75,y+.75,w-1.5,h-1.5);g.strokeStyle=bc||'rgba(255,255,255,.5)';g.lineWidth=1.5;g.stroke();rrp(x+5,y+3,w-10,h*.42);g.fillStyle='rgba(255,255,255,.2)';g.fill()}
function drawLogo(tm){const cx_=W/2,by=Math.sin(tm*.04)*2;g.save();g.translate(0,by);
 g.font='600 19px "Segoe UI","SF Pro Display",Arial,sans-serif';g.textAlign='center';g.textBaseline='middle';try{g.letterSpacing='2px'}catch(e){}
 g.fillStyle='rgba(255,255,255,.95)';g.shadowColor='rgba(0,0,0,.5)';g.shadowBlur=8;g.fillText('S_PDH presenta',cx_+1,52);g.shadowBlur=0;
 {const tw=g.measureText('S_PDH presenta').width,a0=cx_-tw/2-64,a1=cx_-tw/2-14,b0=cx_+tw/2+14,b1=cx_+tw/2+64;let lg=g.createLinearGradient(a0,0,a1,0);lg.addColorStop(0,'rgba(255,255,255,0)');lg.addColorStop(1,'rgba(255,255,255,.65)');g.fillStyle=lg;g.fillRect(a0,51.5,a1-a0,1.5);lg=g.createLinearGradient(b0,0,b1,0);lg.addColorStop(0,'rgba(255,255,255,.65)');lg.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=lg;g.fillRect(b0,51.5,b1-b0,1.5)}
 g.font='900 94px "Segoe UI","Arial Black",Impact,sans-serif';try{g.letterSpacing='4px'}catch(e){}g.lineJoin='round';
 const q=g.createLinearGradient(0,84,0,170);q.addColorStop(0,'#fff3b8');q.addColorStop(.42,'#ffb52e');q.addColorStop(.58,'#ff5a1a');q.addColorStop(1,'#a81806');
 g.shadowColor='rgba(0,0,0,.55)';g.shadowBlur=18;g.shadowOffsetY=8;g.lineWidth=15;g.strokeStyle='#2a0806';g.strokeText('SM GORE',cx_+2,128);g.shadowBlur=0;g.shadowOffsetY=0;
 g.lineWidth=7;g.strokeStyle='#7a1408';g.strokeText('SM GORE',cx_+2,128);g.fillStyle=q;g.fillText('SM GORE',cx_+2,128);
 g.lineWidth=1.5;g.strokeStyle='rgba(255,255,255,.45)';g.strokeText('SM GORE',cx_+2,125);
 try{g.letterSpacing='0px'}catch(e){}g.restore();
 btn(cx_-92,178+by,184,28,'#c4182a','#6e0a14','rgba(255,170,170,.55)');g.font='800 13px "Segoe UI",Arial,sans-serif';g.textAlign='center';g.textBaseline='middle';try{g.letterSpacing='4px'}catch(e){}g.fillStyle='#fff';g.fillText('SUPER',cx_+2,193+by);try{g.letterSpacing='0px'}catch(e){}}
function icon(n,x,y,s,f){g.save();g.translate(x,y);g.scale(s||1,s||1);g.lineJoin='round';g.lineCap='round';const O='#1b1030',ol=w=>{g.strokeStyle=O;g.lineWidth=w||2.2;g.stroke()},poly=(pts,c,w)=>{g.beginPath();pts.forEach((q,i)=>i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1]));g.closePath();g.fillStyle=c;g.fill();ol(w)};
 if(n=='coin'){const q=g.createLinearGradient(-9,-9,9,9);q.addColorStop(0,'#fff0a0');q.addColorStop(.5,'#ffc61a');q.addColorStop(1,'#c47f00');ellipse(0,0,10.5,10.5,'#7a4a00');ellipse(0,0,9.2,9.2,q);g.beginPath();g.arc(0,0,6.3,0,7);g.strokeStyle='rgba(120,70,0,.55)';g.lineWidth=1.2;g.stroke();rr(-1.2,-4,2.4,8,1.2,'rgba(140,80,0,.75)');ellipse(-3.6,-4,2.4,1.2,'rgba(255,255,255,.65)',-.7)}
 else if(n=='heart'){g.beginPath();g.moveTo(0,10);g.bezierCurveTo(-16,-1,-9,-13,0,-5);g.bezierCurveTo(9,-13,16,-1,0,10);g.fillStyle=f?'#ff3b4e':'#4a4a5a';g.fill();ol(2.4);if(f)ellipse(-6,-5,2.5,1.6,'rgba(255,255,255,.75)',-.6)}
 else if(n=='skull'){ellipse(0,-2,10,9.5,O);rr(-5.5,4,11,8,3,O);ellipse(0,-2,8.2,7.7,'#f0ece0');rr(-4.2,4.5,8.4,6,2,'#f0ece0');ellipse(-3.6,-2,2.6,3.2,O);ellipse(3.6,-2,2.6,3.2,O);poly([[0,1.5],[-1.5,4],[1.5,4]],O,1);g.fillStyle=O;[-2,0,2].forEach(a=>g.fillRect(a-.4,6.5,.9,4))}
 else if(n=='star'){const q=[];for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?5:12;q.push([Math.cos(a)*r,Math.sin(a)*r])}poly(q,'#ffd24a',2)}
 else if(n=='lock'){g.beginPath();g.arc(0,-3,6,Math.PI,0);g.strokeStyle=O;g.lineWidth=5.5;g.stroke();g.strokeStyle='#d8dde2';g.lineWidth=2.8;g.stroke();rr(-8.5,-3,17,14,3,O);rr(-7,-1.8,14,11.6,2.2,'#e0b030');ellipse(0,3,2.2,2.2,O);rr(-.9,3,1.8,4.5,.8,O)}
 else if(n=='cart'){for(let i=0;i<4;i++){const a=-10+i*5,b=-13+i*6.5;poly([[a,-12],[a+5,-12],[b+6.5,-3],[b,-3]],i%2?'#fff8e0':'#ffc61a',1.2)}rr(-10.8,-3.6,21.6,15.6,1.6,O);rr(-9.4,-2.6,18.8,13.6,1,'#fff3d0');rr(-3.4,3,6.8,9,1.2,O);rr(-2.2,4,4.4,8,.8,'#d98a1a');rr(4.2,1,4.4,5.2,.8,O);rr(5,1.8,2.8,3.6,.5,'#8fd0ff')}
 else if(n=='shirt'){poly([[-6,-10],[-2,-7],[2,-7],[6,-10],[13,-5],[9,0],[6,-2],[6,10],[-6,10],[-6,-2],[-9,0],[-13,-5]],'#4aa8d8',2);ellipse(0,-8,3,2,O)}
 else if(n=='gun'){rr(-12,-5,24,9,2,O);rr(-11,-4,22,7,1.5,'#9aa0aa');rr(-3,2,8,11,2,O);rr(-2,3,6,9,1.5,'#6a4320');rr(9,-4,3,5,1,'#d8dce4')}
 else if(n=='map'){for(const[a,b,c_]of[[-12,-12,'#ffffff'],[1,-12,'#bfe0ff'],[-12,1,'#bfe0ff'],[1,1,'#ffffff']]){rr(a-.8,b-.8,12.6,12.6,3.4,O);rr(a,b,11,11,2.8,c_)}}
 else if(n=='play')poly([[-5,-8],[8,0],[-5,8]],'#fff',2);
 else if(n=='bullet'){rr(-4.5,-4,9,15,2,O);rr(-3,-3,6,12,1.5,'#e8b830');g.beginPath();g.moveTo(-4,-3);g.quadraticCurveTo(0,-14,4,-3);g.fillStyle='#d96a2a';g.fill();ol(1.6)}
 else if(n=='p3'){rr(-14,-5,28,11,3,O);rr(-12.5,-3.5,25,8,2,'#7a8a78');rr(-14,-8,8,17,2,O);rr(-12.5,-6.5,5,14,1.5,'#9aaa96');ellipse(8,9,3,4,'#7ad040')}
 else if(n=='p4'){ellipse(-6,3,10,7,O);ellipse(7,5,11,7,O);ellipse(0,-3,10,9,O);ellipse(-6,3,8.6,5.8,'#fff');ellipse(7,5,9.6,5.8,'#fff');ellipse(0,-3,8.6,7.6,'#fff');ellipse(10,-8,4,4,'#ffd24a')}
 else if(n=='w0'){ellipse(-5,9,13,9,O);ellipse(7,11,14,8,O);ellipse(-5,9,11.5,7.5,'#4aa52a');ellipse(7,11,12.5,6.5,'#6cc83a');poly([[0,-14],[-7,-1],[7,-1]],'#2f9a5a',1.8);poly([[0,-8],[-9,5],[9,5]],'#3fae6a',1.8);rr(-1.5,5,3,5,1,'#6b4423')}
 else if(n=='w1'){ellipse(0,12,14,4.5,'#d9a050');rr(-5,-13,10,25,5,O);rr(-13,-5,9,7,3.5,O);rr(-13,-9,6,10,3,O);rr(4,-1,9,7,3.5,O);rr(7,-6,6,10,3,O);rr(-3.5,-12,7,23,3.5,'#3fa04a');rr(-12,-4,8,5,2.5,'#3fa04a');rr(-12,-8,4,8,2,'#3fa04a');rr(4,0,8,5,2.5,'#3fa04a');rr(8,-5,4,8,2,'#3fa04a')}
 else if(n=='w2'){for(const[c,w]of[[O,5],['#fff',2.4]]){g.strokeStyle=c;g.lineWidth=w;for(let a=0;a<3;a++){const t=a*Math.PI/3,cx_=Math.cos(t)*13,cy_=Math.sin(t)*13;g.beginPath();g.moveTo(-cx_,-cy_);g.lineTo(cx_,cy_);g.stroke()}}ellipse(0,0,3,3,'#bfe6ff')}
 else if(n=='w3'){g.save();g.beginPath();g.rect(-30,-30,60,60);g.arc(6,-3,9.5,0,7);g.clip('evenodd');ellipse(0,0,13,13,O);ellipse(0,0,11,11,'#fff2b0');g.restore();ellipse(10,-9,1.8,1.8,'#fff');ellipse(-12,10,1.2,1.2,'#fff')}
 else if(n=='w4'){poly([[-14,11],[-5,-6],[5,-6],[14,11]],'#7a4034',2);poly([[-5,-6],[-7,-1],[-3,-3],[0,0],[3,-3],[7,-1],[5,-6]],'#ff7a2a',1.4);ellipse(-2,-11,3,3.5,'#ff9a3a');ellipse(5,-14,2,2.5,'#ffcf24')}
 g.restore()}
