function limb(a,b,w,c,dk){g.lineCap='round';g.lineJoin='round';g.strokeStyle='rgba(0,0,0,.45)';g.lineWidth=w+1.8;g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.stroke();g.strokeStyle=c;g.lineWidth=w;g.stroke();if(dk){g.strokeStyle='rgba(0,0,0,'+dk+')';g.stroke()}g.strokeStyle='rgba(255,255,255,.2)';g.lineWidth=w*.28;g.beginPath();g.moveTo(a[0]-w*.18,a[1]-w*.18);g.lineTo(b[0]-w*.18,b[1]-w*.18);g.stroke()}
function ik(x0,y0,x1,y1,l1,l2,s){let dx=x1-x0,dy=y1-y0,d=Math.max(.01,Math.min(Math.hypot(dx,dy),l1+l2-.01));const a=Math.atan2(dy,dx),k=Math.acos(CL((l1*l1+d*d-l2*l2)/(2*l1*d),-1,1)),n=a+s*k;return[x0+Math.cos(n)*l1,y0+Math.sin(n)*l1,x0+Math.cos(a)*d,y0+Math.sin(a)*d]}
function tl(a,b,w0,w1,c,d){const dx=b[0]-a[0],dy=b[1]-a[1],L=Math.hypot(dx,dy)||1,nx=-dy/L,ny=dx/L,an=Math.atan2(ny,nx);
 g.beginPath();g.moveTo(a[0]+nx*w0/2,a[1]+ny*w0/2);g.lineTo(b[0]+nx*w1/2,b[1]+ny*w1/2);g.arc(b[0],b[1],w1/2,an,an+Math.PI,true);g.lineTo(a[0]-nx*w0/2,a[1]-ny*w0/2);g.arc(a[0],a[1],w0/2,an+Math.PI,an,true);g.closePath();
 g.fillStyle=c;g.fill();if(d){g.fillStyle='rgba(0,0,0,'+d+')';g.fill()}g.lineWidth=.9;g.strokeStyle='rgba(20,10,10,.5)';g.stroke();
 g.strokeStyle='rgba(0,0,0,.16)';g.lineWidth=w1*.35;g.lineCap='round';g.beginPath();g.moveTo(a[0]-nx*w0*.26,a[1]-ny*w0*.26);g.lineTo(b[0]-nx*w1*.26,b[1]-ny*w1*.26);g.stroke()}
function springHead(){const tx=-P.vx*.55,ty=-P.vy*.3;P.ax=((P.ax||0)+(tx-(P.hdx||0))*.16)*.8;P.hdx=(P.hdx||0)+P.ax;P.ay=((P.ay||0)+(ty-(P.hdy||0))*.16)*.8;P.hdy=(P.hdy||0)+P.ay}
function drawBino(x,y,f,t,air,sq,arm,ci){
 const V5=(ci==null?SH.ch:ci)==5,C=CHR[ci==null?SH.ch:ci],cap=C.cap,sh=C.sh,ov=C.ov,eb=C.eb,el=C.el||C.cap,sk=V5?'#0a0a10':'#f7c39a',skd=V5?'#000':'#d99466',OL=V5?'#000':'#2a1408';
 const ab=arm?Math.min(1.5,Math.abs(P.vx)/3.7):ci!=null?.7:.25,ph=t*2,ld=arm?(P.land||0):0,vy=arm?P.vy:0,hurtF=arm&&hf>0;
 const br=Math.sin(frame*.06)*.9*(1-Math.min(1,ab)),bob=air?0:-Math.abs(Math.cos(ph))*2.6*ab+ld*.4+br*.4,lean=air?-.05+CL(vy*.012,-.14,.16):ab*.2;
 g.save();g.translate(x,y);g.scale(f*(1+ld*.025),1-ld*.035);g.lineJoin='round';g.lineCap='round';
 if(V5){const ta=performance.now()/16.6;glow(0,-20,42,'255,10,30',.3+.08*Math.sin(ta*.2));g.save();g.globalCompositeOperation='lighter';for(let j=0;j<12;j++){const u=((ta*.03+j*.083)%1),bx=Math.sin(j*2.7+ta*.05)*11*(1-u*.5),by=-2-u*44;g.globalAlpha=(1-u)*.7;ellipse(bx,by,4.5*(1-u)+1.2,9*(1-u)+2,j%3?'#ff1a2a':'#ff7a1a')}g.restore();g.globalAlpha=1}
 const hx=-1,hy=-16+bob,sx=hx+Math.sin(lean)*13,sy=hy-Math.cos(lean)*13;
 const shoe=(px,py,a)=>{g.save();g.translate(px,py);g.rotate(a);const q=g.createLinearGradient(0,-7,0,3);q.addColorStop(0,V5?'#1a1a22':'#9a5a2a');q.addColorStop(1,V5?'#000':'#3a1c08');g.fillStyle=q;g.strokeStyle=OL;g.lineWidth=1.2;g.beginPath();g.moveTo(-5,0);g.quadraticCurveTo(-6.5,-6,-1,-7);g.lineTo(3,-7);g.quadraticCurveTo(10,-6.5,10.5,-1.5);g.quadraticCurveTo(10.5,2.6,7,3);g.lineTo(-3.5,3);g.quadraticCurveTo(-6,3,-5,0);g.closePath();g.fill();g.stroke();g.strokeStyle='#1a0c04';g.lineWidth=1.5;g.beginPath();g.moveTo(-4.5,1.7);g.lineTo(8,1.7);g.stroke();ellipse(6,-3.6,2.6,1.1,'rgba(255,255,255,.3)');g.strokeStyle='rgba(255,255,255,.55)';g.lineWidth=.8;g.beginPath();g.moveTo(.5,-6);g.lineTo(2.6,-4.4);g.moveTo(3,-6.4);g.lineTo(5,-4.8);g.stroke();g.restore()};
 const leg=(off,dk)=>{let fx,fy;if(air){const l0=off==0;fx=hx+(l0?8:-6);fy=hy+(vy<0?(l0?9:14):(l0?15:17))}else{const wk=CL(ab*2.2,0,1),sf=hx+(off==0?5:-3);fx=sf+(hx+Math.sin(ph+off)*10*(.4+ab*.7)-sf)*wk;fy=-4.5-Math.max(0,Math.cos(ph+off))*8*ab*wk}
  const k=ik(hx,hy,fx,fy,8.5,8.5,-1);tl([hx,hy],[k[0],k[1]],10,8,ov,dk);tl([k[0],k[1]],[k[2],k[3]],8,6.5,ov,dk);shoe(k[2],k[3]+1.5,air?.3:-Math.max(0,Math.cos(ph+off))*.35*ab*CL(ab*2.2,0,1))};
 const armf=front=>{let ex,ey;if(arm){ex=(front?14:9)-rec*3;ey=(front?-19:-16)+bob}else if(air){ex=front?sx+10:sx-8;ey=front?sy-10:sy-5}else{const o=Math.sin(ph+(front?0:Math.PI))*9*CL(ab*1.1,0,1);ex=sx+o;ey=sy+11+br-Math.abs(o)*.2}
  const k=ik(sx,sy+2,ex,ey,7.5,7,1);tl([sx,sy+2],[k[0],k[1]],7.5,6,sh,front?0:.25);tl([k[0],k[1]],[k[2],k[3]],6,5.5,sh,front?0:.2);
  const gl=g.createRadialGradient(k[2]-1,k[3]-1,.5,k[2],k[3],5);gl.addColorStop(0,'#fff');gl.addColorStop(1,'#c4c9d2');g.fillStyle=gl;g.strokeStyle=OL;g.lineWidth=1;g.beginPath();g.arc(k[2],k[3],4.2,0,7);g.fill();g.stroke()};
 leg(Math.PI,.3);armf(0);
 const mx=hx+(sx-hx)*.5,my=hy+(sy-hy)*.5;
 g.beginPath();g.moveTo(sx-8,sy+1);g.quadraticCurveTo(sx-12,my+1,hx-9.5,hy+2);g.quadraticCurveTo(hx,hy+8,hx+9.5,hy+2);g.quadraticCurveTo(sx+13,my+2,sx+8,sy+1);g.closePath();g.fillStyle=ov;g.fill();
 let q=g.createLinearGradient(hx-10,0,hx+12,0);q.addColorStop(0,'rgba(255,255,255,.18)');q.addColorStop(1,'rgba(0,0,0,.3)');g.fillStyle=q;g.fill();g.strokeStyle=OL;g.lineWidth=1.2;g.stroke();
 g.beginPath();g.ellipse(sx,sy+1.5,9,5,lean,Math.PI,0);g.closePath();g.fillStyle=sh;g.fill();g.stroke();
 for(const d of[-4.5,4]){tl([sx+d,sy+1],[mx+d,my+1],3.4,3.8,ov,0);ellipse(mx+d,my+1.5,1.9,1.9,'#f0c64a')}
 ellipse(mx+3,my+5,6,4,'rgba(255,255,255,.1)');
 const cx0=sx+Math.sin(lean)*3+1+(arm?CL((P.hdx||0)*f*.3,-3,3):0),cy0=sy-9+(arm?CL((P.hdy||0)*.25,-2,2):0);
 ellipse(cx0-6.5,cy0-1,4,5.5,'#4a2a10');ellipse(cx0-6,cy0+1.5,2.4,3.2,skd);
 q=g.createRadialGradient(cx0-2,cy0-3,1,cx0,cy0,10);q.addColorStop(0,'#ffe0c0');q.addColorStop(1,sk);g.fillStyle=q;g.strokeStyle=OL;g.lineWidth=1.2;g.beginPath();g.ellipse(cx0,cy0,8.6,8.8,0,0,7);g.fill();g.stroke();
 ellipse(cx0+4.5,cy0+3.5,3.2,2,'rgba(255,120,110,.3)');
 ellipse(cx0+8.6,cy0+2.2,3.9,3.5,'#f2a07a');g.stroke();ellipse(cx0+9.4,cy0+1,1.3,.9,'rgba(255,255,255,.55)');
 const lk=arm?CL(P.vx*.12,-.8,.8):0;
 if(frame%210<6||hurtF){g.strokeStyle=OL;g.lineWidth=1.3;g.beginPath();g.moveTo(cx0+2,cy0-1.2);g.lineTo(cx0+6,cy0-hurtF*0-.6);g.stroke()}else{ellipse(cx0+4,cy0-1.4,2.5,3.2,'#fff');g.strokeStyle=OL;g.lineWidth=.8;g.stroke();ellipse(cx0+4.8+lk,cy0-1.2,1.5,2.1,'#2a62c8');ellipse(cx0+5+lk,cy0-1.3,.7,1.2,'#0a0a14');ellipse(cx0+4.3,cy0-2.4,.6,.6,'#fff')}
 g.strokeStyle='#3a1c0a';g.lineWidth=1.6;g.beginPath();g.moveTo(cx0+1.5,cy0-4.8+(hurtF?-1.6:0));g.lineTo(cx0+6.5,cy0-4.2);g.stroke();
 ellipse(cx0+5.6,cy0+5.8,5.2,2.7,'#3a1c0a');ellipse(cx0+9.4,cy0+5.2,2.8,2,'#3a1c0a');
 if(hurtF||(air&&vy<0))ellipse(cx0+4.8,cy0+8.4,2,hurtF?2.4:1.6,'#5a1010');else{g.strokeStyle='#8a3a2a';g.lineWidth=1.1;g.beginPath();g.moveTo(cx0+2.6,cy0+8);g.quadraticCurveTo(cx0+5,cy0+9.3,cx0+7,cy0+8);g.stroke()}
 q=g.createLinearGradient(cx0,cy0-11,cx0,cy0-1);q.addColorStop(0,cap);q.addColorStop(1,'rgba(0,0,0,.4)');g.beginPath();g.arc(cx0,cy0-2,9.8,Math.PI,0);g.closePath();g.fillStyle=cap;g.fill();g.fillStyle=q;g.fill();g.strokeStyle=OL;g.lineWidth=1.2;g.stroke();
 g.save();g.translate(cx0+8.6,cy0-3.4);g.rotate(.1);ellipse(0,0,7.2,2.6,cap);g.stroke();ellipse(0,.9,6.4,1.4,'rgba(0,0,0,.3)');g.restore();
 ellipse(cx0+1,cy0-8.4,3.3,3.3,eb);g.fillStyle=el;g.font='900 5.5px system-ui';g.textAlign='center';g.textBaseline='middle';g.fillText(C.L,cx0+1,cy0-8.3);
 if(V5&&!(frame%210<6||hurtF)){glow(cx0+4.3,cy0-1.4,12,'255,10,10',.9);ellipse(cx0+4.3,cy0-1.4,3.1,3.8,'#ff1212');ellipse(cx0+4.9,cy0-1.4,1,2.6,'#ffc0c0')}
 leg(0,0);armf(1);if(arm)gun();g.restore()}

