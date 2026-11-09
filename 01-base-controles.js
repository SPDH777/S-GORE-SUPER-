// =====================  SUPER BINO GO  (plataformas 2D estilo cartoon)  =====================
let DP=2;const W=800,H=450,T=40,ROWS=12,OY=30,$=id=>document.getElementById(id);
const sv_=d=>'<svg viewBox="0 0 24 24">'+d+'</svg>',IC={j:sv_('<path fill="#fff" stroke="none" d="M12 3.2l8.2 8.4-2.3 2.2L12 7.9l-5.9 5.9-2.3-2.2z"/><path fill="#fff" fill-opacity=".55" stroke="none" d="M12 10.6l8.2 8.4-2.3 2.2L12 15.3l-5.9 5.9-2.3-2.2z"/>'),f:sv_('<path fill="#fff" stroke="none" d="M13.6 2L5.2 13.4h5.4L9.6 22l9.2-12.2h-5.6z"/>'),g:sv_('<g transform=\"rotate(45 12 12)\"><path fill=\"#f3c24b\" stroke=\"none\" d=\"M8.6 12.6h6.8v8.3a1.1 1.1 0 0 1-1.1 1.1H9.7a1.1 1.1 0 0 1-1.1-1.1z\"/><path fill=\"#fff\" fill-opacity=\".38\" stroke=\"none\" d=\"M9.4 12.6h1.7V22H9.4z\"/><path fill=\"#d9792b\" stroke=\"none\" d=\"M8.6 12.6C8.6 8.2 10.2 4.8 12 2c1.8 2.8 3.4 6.2 3.4 10.6z\"/><path fill=\"#fff\" fill-opacity=\".3\" stroke=\"none\" d=\"M10 11.6C10 8.6 10.7 6.4 11.5 4.6 10.6 6.8 10 9 10 11.6z\"/><rect x=\"8.6\" y=\"12.2\" width=\"6.8\" height=\"1.2\" fill=\"#6e3410\" stroke=\"none\"/><rect x=\"8.6\" y=\"19.2\" width=\"6.8\" height=\".9\" fill=\"#a8791a\" stroke=\"none\"/></g>'),d:sv_('<path fill="#fff" stroke="none" d="M12 20.8l-8.2-8.4 2.3-2.2 5.9 5.9 5.9-5.9 2.3 2.2z"/><path fill="#fff" fill-opacity=".55" stroke="none" d="M12 13.4L3.8 5l2.3-2.2 5.9 5.9 5.9-5.9L20.2 5z"/>'),p:sv_('<rect x="6.6" y="5" width="3.8" height="14" rx="1.3" fill="#fff" stroke="none"/><rect x="13.6" y="5" width="3.8" height="14" rx="1.3" fill="#fff" stroke="none"/>'),swap:sv_('<path d="M4 10a8 8 0 0 1 14-4M20 14a8 8 0 0 1-14 4"/><path d="M18 2v4h-4M6 22v-4h4"/>'),take:sv_('<path d="M12 4v10M7 10l5 5 5-5M5 20h14"/>')};
const TOUCH='ontouchstart' in window||navigator.maxTouchPoints>0;
let paused=0,vibOn=1,sndOn=1,st='title',stAt=0,frame=0,AC;
const cv=$('c');let g=cv.getContext('2d',{alpha:false});cv.width=W*DP;cv.height=H*DP;
function rs(){const s=Math.min(innerWidth/W,innerHeight/H);cv.style.width=W*s+'px';cv.style.height=H*s+'px'}addEventListener('resize',rs);rs();
addEventListener('contextmenu',e=>e.preventDefault());
for(const k of['j','g','d','p'])$('b'+k).innerHTML=IC[k];$('bw').innerHTML=IC.swap;
if(!TOUCH)document.querySelectorAll('.b,#joy,#jz').forEach(e=>e.style.display='none');
const R=(a,b)=>a+Math.random()*(b-a),ov=(a,b)=>a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y,CL=(v,a,b)=>Math.max(a,Math.min(b,v)),ap=(a,b,d)=>a<b?Math.min(a+d,b):Math.max(a-d,b);
const vib=ms=>{if(vibOn)try{navigator.vibrate&&navigator.vibrate(ms)}catch(e){}};
function sfx(f,d,t='square',v=.05,sl=0,isM=0){if(!AC||(!sndOn&&!isM))return;const o=AC.createOscillator(),n=AC.createGain(),T0=AC.currentTime;o.type=t;o.frequency.value=f;o.frequency.exponentialRampToValueAtTime(Math.max(30,f+sl),T0+d);n.gain.value=v;n.gain.exponentialRampToValueAtTime(.001,T0+d);o.connect(n);n.connect(AC.destination);o.start();o.stop(T0+d)}
const MEL=[523,659,784,659,587,698,880,698,523,659,784,1046,988,784,659,587],BAS=[131,131,174,174,131,131,196,196];let mi=0;
// música distinta por mundo (tono, timbre y ritmo); jefes más rápidos y cuevas una octava más grave. Interruptor propio (musOn).
let musOn=1;const mus=(f,d,t,v)=>{if(AC&&musOn)sfx(f,d,t,v,0,1)};
const MW=[{sh:0,t:'triangle',ms:190},{sh:3,t:'sine',ms:215},{sh:-4,t:'sawtooth',ms:150},{sh:-7,t:'square',ms:235},{sh:5,t:'triangle',ms:170},{sh:2,t:'sine',ms:205}];
function musLoop(){let ms=190;try{const w=MW[wd()],b=isB();ms=b?130:w.ms+(UG?30:0);if(st=='play'&&!paused){const rat=Math.pow(2,((b?-5:w.sh)-(UG?12:0))/12),i=(mi+(lv*5)%16)%16,n=((mi>>4)&1)?MEL[15-i]:MEL[i];mus(n*rat,.16,b?'sawtooth':w.t,b?.03:.035);if(mi%2==0)mus(BAS[(mi>>1)%8]*rat,.3,'sine',.05);mi++}}catch(e){}setTimeout(musLoop,ms)}musLoop();
// ---------- entrada
const inp={j:0,f:0,g:0,d:0},K={l:0,r:0,d:0,u:0},J={ax:0,dn:0,up:0};
const km={ArrowLeft:['K','l'],KeyA:['K','l'],ArrowRight:['K','r'],KeyD:['K','r'],ArrowDown:['K','d'],KeyS:['K','d'],ArrowUp:['K','u'],KeyW:['K','u'],KeyZ:['i','j'],Space:['i','j'],KeyC:['i','g'],KeyK:['i','g']};
const tg=n=>n=='K'?K:inp;
addEventListener('keydown',e=>{if(ovOpen){if(e.code=='Escape'||e.code=='Enter')closeOv();return}if(st=='sel'){if(e.code=='Escape')setSt('title');return}if(st=='shop'){if(e.code=='Escape'||e.code=='Enter')closeShop();return}if(e.code=='KeyT'&&st!='play'){openShop();return}const m=km[e.code];if(m){tg(m[0])[m[1]]=1;e.preventDefault()}if((e.code=='Enter'||e.code=='Space')&&st!='play')tryStart();if(st=='play'&&!paused){if(e.code=='KeyQ'||e.code=='KeyE')swp();if(e.code=='KeyV'||e.code=='KeyF')takeNear();const d=+e.key;if(d>=1&&d<=WP.length)sel(d-1)}if(e.code=='KeyP'||e.code=='Escape')if(st=='play')tp(!paused)});
addEventListener('keyup',e=>{const m=km[e.code];if(m)tg(m[0])[m[1]]=0});
[['bj','j'],['bg','g'],['bd','d']].forEach(([id,k])=>{const e=$(id);e.addEventListener('pointerdown',v=>{inp[k]=1;e.classList.add('on');try{e.setPointerCapture(v.pointerId)}catch(_){}vib(6);v.preventDefault();v.stopPropagation()});
 const up=()=>{inp[k]=0;e.classList.remove('on')};['pointerup','pointercancel','lostpointercapture'].forEach(t=>e.addEventListener(t,up))});
const jz=$('jz'),joy=$('joy'),kn=$('knob');let jid=null,jx0=0,jy0=0;const JR=58;
function jm(v){J.dn=(v.clientY-jy0>38)?1:0;J.up=(v.clientY-jy0<-38)?1:0;let dx=v.clientX-jx0;const m=Math.abs(dx);if(m>JR){jx0+=dx-Math.sign(dx)*JR;dx=Math.sign(dx)*JR;joy.style.left=jx0-65+'px'}kn.style.left=36+dx+'px';const n=dx/JR,a=Math.abs(n);J.ax=a<.12?0:Math.sign(n)*Math.min(1,(a-.12)/.4)}
jz.addEventListener('pointerdown',v=>{if(jid!==null)return;jid=v.pointerId;try{jz.setPointerCapture(jid)}catch(_){}jx0=v.clientX;jy0=v.clientY;joy.style.left=jx0-65+'px';joy.style.top=v.clientY-65+'px';joy.style.bottom='auto';joy.style.opacity=1;jm(v)});
jz.addEventListener('pointermove',v=>{if(v.pointerId==jid)jm(v)});
const je=v=>{if(v.pointerId==jid){jid=null;J.ax=0;J.dn=0;J.up=0;kn.style.left='36px';joy.style.left='26px';joy.style.top='';joy.style.bottom='26px';joy.style.opacity=.8}};
['pointerup','pointercancel','lostpointercapture'].forEach(t=>jz.addEventListener(t,je));
function fsl(){const d=document.documentElement;try{(d.requestFullscreen||d.webkitRequestFullscreen).call(d);screen.orientation.lock('landscape').catch(()=>{})}catch(e){}}
function tryStart(){if(st=='shop'||st=='sel')return;if(!AC)try{AC=new(window.AudioContext||window.webkitAudioContext)()}catch(e){}if(st!='play'&&!paused&&performance.now()-stAt>500){if(st=='title'){fsl();setSt('sel');return}else if(st=='over'){useCP=1;hp=MH();score=Math.max(0,score-300);wp=0;WI=[1,0,0,0,0,0,0,0];AM=[999,0,0,0,0,0,0,0]}else if(st=='clear'){lv=lv>=120?1:lv+1;hp=Math.min(MH(),hp+1)}start()}}
document.addEventListener('pointerdown',e=>{if(ovOpen)return;if(st=='title'&&!paused){const r=cv.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*W,y=(e.clientY-r.top)/r.height*H;if(y>364&&y<406){if(x>W/2-180&&x<W/2-4){openOv('cr');return}if(x>W/2+4&&x<W/2+180){openOv('tm');return}}}if(st=='sel'){selClick(e);return}if(st=='shop'){shopClick(e);return}if(st!='play'&&!paused){const r=cv.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*W,y=(e.clientY-r.top)/r.height*H;if((st=='title'||st=='over'||st=='clear')&&x>W/2-95&&x<W/2+95&&y>314&&y<362){openShop();return}if((st=='over'||st=='clear')&&x>W/2-95&&x<W/2+95&&y>368&&y<410){setSt('sel');return}}tryStart()});

let ovOpen=0;const OVC={cr:['S_PDH · SM GORE SUPER','CRÉDITOS',`<div class="cr"><div class="rol">IDEA · DISEÑO · PROGRAMACIÓN</div><p class="nom hw">Samuel PDH</p><div class="rol">UNA PRODUCCIÓN DE</div><div class="marca">S_PDH</div><div class="sep"></div><div class="nota hw">Hola, soy Samuel. Este juego lo fui armando poco a poco, probándolo una y otra vez en móvil y PC hasta que se sintió bien en las manos. Hay noches enteras metidas en cada túnel y cada enemigo. Si llegaste hasta aquí, gracias de verdad: que lo juegues es lo que le da sentido a todo esto.<div class="firma hw">— Samuel · S_PDH</div></div><div class="sep"></div><div class="rol">ARTE Y SONIDO</div><p class="tec">Todo el arte está dibujado en código y los efectos de sonido se generan dentro del propio juego. No hay imágenes ni audios externos.</p><div class="rol">GRACIAS A</div><p class="tec">Todas las personas que lo prueban, lo comparten y me dicen qué hay que mejorar. Esto sigue creciendo gracias a ustedes.</p><div class="rol">CONTACTO</div><p class="tec"><a href="mailto:desarrolloswebspdh@gmail.com">desarrolloswebspdh@gmail.com</a></p><p class="tec" style="margin-top:16px;opacity:.7">© S_PDH · Todos los derechos reservados</p></div>`],tm:['SM GORE SUPER','TÉRMINOS Y CONDICIONES',`<p>Esto es lo básico para que sepas con claridad cómo funciona <b>SM GORE SUPER</b>. Lo escribí en palabras sencillas a propósito: al jugarlo aceptas lo que sigue. Si algo no te convence, lo más honesto es no usar el juego.</p>
<h3><span>1</span>Contenido para público maduro</h3><p>El juego tiene sangre, vísceras y violencia de estilo caricatura. Es pura ficción, pero no es para todo el mundo. Si eres menor de edad, juégalo solo con permiso de tu madre, padre o tutor.</p>
<h3><span>2</span>Cuida tu salud</h3><p>Hay luces, destellos y efectos de pantalla intensos. Si eres sensible a ese tipo de estímulos, juega con precaución o evítalo. Haz pausas de vez en cuando, tus manos y tus ojos lo agradecen.</p>
<h3><span>3</span>Cómo puedes usarlo</h3><p>Puedes jugar gratis para uso personal. No está permitido vender el juego, copiarlo, subirlo a otros sitios, modificarlo para republicarlo ni presentarlo como propio sin mi permiso por escrito.</p>
<h3><span>4</span>De quién es qué</h3><p>El nombre SM GORE SUPER, la marca S_PDH, el código, los personajes, el arte y los sonidos son obra de Samuel PDH y pertenecen a S_PDH. Jugar no te transfiere ningún derecho sobre ellos.</p>
<h3><span>5</span>Tu progreso y tus datos</h3><p>El juego guarda tu récord, tus estrellas y los niveles desbloqueados únicamente en tu propio dispositivo, dentro del almacenamiento del navegador. No pide cuenta ni correo, y no envía tu información a ningún servidor. Si borras los datos del navegador, ese progreso se pierde.</p>
<h3><span>6</span>Sin garantías</h3><p>El juego se ofrece tal como está. Puede tener errores y, aunque trabajo para corregirlos, no puedo prometer que funcione perfecto en todos los dispositivos ni sin interrupciones. Lo usas bajo tu propia responsabilidad.</p>
<h3><span>7</span>Cambios</h3><p>El juego va a seguir evolucionando y estos términos también pueden cambiar. Si sigues jugando después de un cambio, entiendo que lo aceptas.</p>
<h3><span>8</span>Contacto</h3><p>¿Dudas, errores, ideas o algo que quieras reportar? Escríbeme a <a href="mailto:desarrolloswebspdh@gmail.com">desarrolloswebspdh@gmail.com</a>. Leo todo.</p>
<p style="margin-top:14px;text-align:center;opacity:.7">— Samuel PDH · S_PDH</p>`]};
const hbB=[0,1].map(i=>{const b=document.createElement('button');b.className='hb';b.setAttribute('aria-label',i?'Términos':'Créditos');document.body.appendChild(b);const go=e=>{e.preventDefault();e.stopPropagation();if(st=='title'&&!ovOpen&&!paused)openOv(i?'tm':'cr')};b.addEventListener('pointerdown',go);b.addEventListener('touchstart',go,{passive:false});b.addEventListener('click',go);return b});
function hbPos(){const r=cv.getBoundingClientRect(),k=r.width/W,on=st=='title'&&!ovOpen&&!paused;hbB.forEach((b,i)=>{b.style.display=on?'block':'none';b.style.left=r.left+(i?W/2+2:W/2-186)*k+'px';b.style.top=r.top+354*k+'px';b.style.width=184*k+'px';b.style.height=60*k+'px'})}
setInterval(()=>{if(st!='play')hbPos()},80);addEventListener('resize',hbPos);
function openOv(k){hbB.forEach(b=>b.style.display='none');const o=OVC[k];$('ovs').textContent=o[0];$('ovt').textContent=o[1];$('ovb').innerHTML=o[2];$('ovb').scrollTop=0;$('ov').classList.add('on');ovOpen=1;K.l=K.r=K.u=0}
function closeOv(){$('ov').classList.remove('on');ovOpen=0;stAt=performance.now()}
$('ovc').onclick=closeOv;
let ds=null;$('ov').addEventListener('pointerdown',e=>{const b=e.target.closest('.scr');ds=b?{b,y:e.clientY,t:b.scrollTop}:null});addEventListener('pointermove',e=>{if(ds)ds.b.scrollTop=ds.t-(e.clientY-ds.y)});addEventListener('pointerup',()=>ds=null);addEventListener('pointercancel',()=>ds=null);
const pmn=$('pm');function tp(v){paused=v?1:0;pmn.style.display=v?'flex':'none';if(v){K.l=K.r=K.u=0;J.ax=J.up=0;inp.j=inp.f=inp.g=0}}
$('bp').addEventListener('pointerdown',e=>{e.stopPropagation();e.preventDefault();if(st=='play')tp(1)});$('pr').onclick=()=>tp(0);
$('ps').onclick=()=>{sndOn=!sndOn;$('ps').textContent='Efectos: '+(sndOn?'ON':'OFF')};
$('pmu').onclick=()=>{musOn=!musOn;$('pmu').textContent='Música: '+(musOn?'ON':'OFF')};
$('pv').onclick=()=>{vibOn=!vibOn;$('pv').textContent='Vibración: '+(vibOn?'ON':'OFF')};
// ---------- nivel
// ---------- pausa automática al salir de la pestaña/app
function autoPause(){if(st=='play'&&!paused)tp(1)}
document.addEventListener('visibilitychange',()=>{if(document.hidden){autoPause();if(AC&&AC.state=='running')AC.suspend().catch(()=>{})}else if(AC&&AC.state=='suspended')AC.resume().catch(()=>{})});
window.addEventListener('blur',autoPause);window.addEventListener('pagehide',autoPause);
// ---------- mando (Gamepad API): stick/cruceta mover, A saltar, X/RT/RB disparar, Y/LB cambiar arma, B recoger, Start pausa; A también inicia en menús
let GPA=0;const PP=[];
function padPoll(){if(!navigator.getGamepads)return;let gp=null;for(const p of navigator.getGamepads())if(p&&p.connected){gp=p;break}
 if(!gp){if(GPA){GPA=0;J.ax=J.up=J.dn=0;inp.j=inp.g=0}return}
 const b=i=>!!(gp.buttons[i]&&gp.buttons[i].pressed),ax=Math.abs(gp.axes[0])>.3?gp.axes[0]:0,ay=gp.axes[1]||0,dx=(b(15)?1:0)-(b(14)?1:0),up=b(12)||ay<-.6,dn=b(13)||ay>.6,jm=b(0),fr=b(2)||b(7)||b(5);
 const act=ax||dx||up||dn||jm||fr;
 if(act||GPA){GPA=act?1:0;J.ax=ax||dx;J.up=up?1:0;J.dn=dn?1:0;inp.j=jm?1:0;inp.g=fr?1:0}
 const ed=i=>{const n=b(i),o=PP[i];PP[i]=n;return n&&!o};
 if(ed(0)&&st!='play')tryStart();
 if(ed(9)&&st=='play')tp(!paused);
 if(ed(3)||ed(4)){if(st=='play'&&!paused)swp()}
 if(ed(1)){if(st=='play'&&!paused)takeNear()}}
