const P=[{"t": "Chicken Wrap — Big Sale 40%", "c": "Đồ ăn", "k": "food", "d": "Poster khuyến mãi bánh cuốn gà, nền cam đỏ có tia sáng, chữ trắng lớn và huy hiệu giảm giá.", "img": "images/chicken-wrap.webp", "f": "chicken-wrap"}, {"t": "Cafe Latte — New", "c": "Đồ uống", "k": "food", "d": "Poster món cà phê latte đặt trên bục đá, nền xanh dương với họa tiết ô vuông.", "img": "images/cafe-latte.webp", "f": "cafe-latte"}, {"t": "Cold Coffee — Order Now", "c": "Đồ uống", "k": "food", "d": "Poster cà phê đá với khung kem dọc giữa nền xanh lục và hạt cà phê mờ.", "img": "images/cold-coffee.webp", "f": "cold-coffee"}, {"t": "Fried Chicken — Pop Chicken", "c": "Đồ ăn", "k": "food", "d": "Poster gà rán giảm 40%, nền đỏ nóng với bụi gia vị bay quanh xô gà.", "img": "images/fried-chicken.webp", "f": "fried-chicken"}, {"t": "Red Velvet Dessert — 30%", "c": "Đồ ăn", "k": "food", "d": "Poster bánh cupcake red velvet, bố cục chia đôi nền kem và nền đỏ, kèm thẻ giảm giá.", "img": "images/red-velvet.webp", "f": "red-velvet"}, {"t": "Signature Coffee — Ice Milk Coffee", "c": "Đồ uống", "k": "food", "d": "Poster cà phê sữa đá với chữ nghiêng, hạt cà phê và mũi tên vẽ tay.", "img": "images/signature-coffee.webp", "f": "signature-coffee"}, {"t": "Fresh Sprite — 15.000 đồng", "c": "Đồ uống", "k": "food", "d": "Poster nước ngọt Sprite với chanh, bạc hà và chữ FRESH cỡ lớn phía sau lon.", "img": "images/sprite.webp", "f": "sprite"}, {"t": "THE OCD — Hello Beautiful", "c": "Thời trang", "k": "fashion", "d": "Poster áo thun boxy cotton, chữ BEAUTIFUL cỡ lớn phía sau người mẫu.", "img": "images/the-ocd.webp", "f": "the-ocd"}, {"t": "Polo Essentials — New Collection", "c": "Thời trang", "k": "fashion", "d": "Poster áo polo giảm 40%, chữ POLO khổng lồ trên nền gradient tím.", "img": "images/polo.webp", "f": "polo"}, {"t": "Nike Air Force — Sale 40%", "c": "Giày", "k": "fashion", "d": "Poster giày Nike Air Force với chữ NIKE cắt chéo và thông tin giảm giá.", "img": "images/nike-air-force.webp", "f": "nike-air-force"}, {"t": "Nike Air Jordan — Big Sale", "c": "Giày", "k": "fashion", "d": "Poster Air Jordan trên nền đỏ nhám, chữ NIKE lớn phía sau đôi giày.", "img": "images/air-jordan.webp", "f": "air-jordan"}, {"t": "AirPod — New Arrival", "c": "Công nghệ", "k": "other", "d": "Poster tai nghe không dây phong cách tối giản, tông đen xám.", "img": "images/airpod.webp", "f": "airpod"}, {"t": "Welcome to 2026", "c": "Poster năm mới", "k": "other", "d": "Poster chúc mừng năm mới với số 2026 phát sáng gradient xanh trên nền mờ.", "img": "images/welcome-2026.webp", "f": "welcome-2026"}, {"t": "Coming Soon — 09 June", "c": "Poster sự kiện", "k": "other", "d": "Poster teaser sự kiện thể thao, bàn tay tung bóng tennis trên nền trời mây.", "img": "images/coming-soon.webp", "f": "coming-soon"}];
const CAP=["Giòn, nóng, cuốn đầy vị. Chicken Wrap giảm 40% hôm nay, đặt ngay kẻo hết nhé!", "Một ly latte êm, thơm và đủ tỉnh táo cho cả ngày dài. Cafe Latte vừa ra mắt!", "Ly cà phê đá mát lạnh cho buổi chiều oi bức. Order ngay nhé!", "Vàng giòn từng miếng, cay nhẹ đúng vị. Fried Chicken giảm 40%, rủ hội bạn cùng ăn!", "Ngọt vừa, mềm mịn, đủ làm đẹp cả buổi chiều. Red Velvet giảm 30% hôm nay.", "Cà phê sữa đá đậm vị, ly signature dành cho người yêu cà phê. Order ngay!", "Sảng khoái từng ngụm với chanh và bạc hà. Sprite chỉ 15.000 đồng.", "Hello, Beautiful. Áo thun boxy cotton, form rộng thoải mái, đủ size M – L – XL.", "Tối giản nhưng không nhàm chán. Polo Essentials bộ sưu tập mới, giảm 40%.", "Một đôi sneaker đáng sở hữu. Nike Air Force giảm 40% trong thời gian có hạn.", "Biểu tượng sneaker trở lại cùng ưu đãi lớn. Air Jordan Big Sale, đừng bỏ lỡ.", "Âm thanh gọn gàng, thiết kế tối giản. AirPods hàng mới về.", "Chào năm mới 2026! Chúc mọi người một năm thật nhiều sức khỏe và dự định thành hình.", "Sắp có tin mới. Hẹn bạn ngày 09/06, đừng bỏ lỡ nhé!"];
const S=["Viết nội dung","SEO cơ bản","Tối ưu tiêu đề","Meta description","Từ khóa","Cập nhật website","Công cụ AI","Kiểm tra UI/UX","Làm việc nhóm","Giải quyết vấn đề","Tiếp thu phản hồi","Thiết kế poster","Thiết kế quảng cáo","Tiếng Anh cơ bản"];
const $=s=>document.querySelector(s),grad=g=>`background:linear-gradient(135deg,${g[0]},${g[1]})`;
const GRP={food:{n:"Đồ ăn & đồ uống",f:"food-posters",d:"Poster khuyến mãi và giới thiệu món mới: gà rán, bánh cuốn, cà phê, nước ngọt, bánh ngọt."},fashion:{n:"Thời trang & giày",f:"fashion-posters",d:"Poster giới thiệu áo thun, polo và sneaker, tập trung vào chữ lớn và bố cục sản phẩm."},other:{n:"Công nghệ & sự kiện",f:"event-posters",d:"Poster tai nghe, chúc mừng năm mới và teaser sự kiện."}};
const idxs=k=>P.map((p,i)=>p.k===k?i:-1).filter(i=>i>=0);
$('#pc').textContent=P.length;
$('#projects').innerHTML=Object.keys(GRP).map(k=>{const ids=idxs(k),g=GRP[k];return `<article class="win col" data-i="${ids[0]}"><div class="tb"><span class="px">${g.f}</span><button class="dot" aria-label="Minimize" tabindex="-1">_</button><button class="dot" aria-label="Close" tabindex="-1">×</button></div><div class="body"><div class="fan" aria-hidden="true">${ids.slice(0,3).map(i=>`<img src="${P[i].img}" alt="" loading="lazy" width="180" height="225">`).join('')}</div><h3>${g.n}</h3><span class="cnt">${ids.length} poster</span><p>${g.d}</p><button class="btn" data-i="${ids[0]}">VIEW COLLECTION</button></div></article>`}).join('');
const G=[["Nội dung &amp; SEO","skill1.exe",["Viết nội dung","SEO cơ bản","Tối ưu tiêu đề","Meta description","Từ khóa","Cập nhật website"]],["Thiết kế &amp; công cụ","skill2.exe",["Thiết kế poster","Thiết kế quảng cáo","Công cụ AI","Kiểm tra UI/UX"]],["Kỹ năng mềm","skill3.exe",["Làm việc nhóm","Giải quyết vấn đề","Tiếp thu phản hồi","Tiếng Anh cơ bản"]]];
$('#skillgrid').innerHTML=G.map(([h,f,l],k)=>`<div class="win"><div class="tb"><span class="px">${f}</span><button class="dot" aria-label="Close" tabindex="-1">×</button></div><div class="body"><h3 style="margin:0 0 12px;font-size:1.2rem">${h}</h3>${l.map((s,j)=>`<span class="tag${(j+k)%2?' g':''}">${s}</span>`).join('')}</div></div>`).join('');
// clouds
(function(){const sky=$('#sky');let last=0,t;
function build(){const H=Math.max(document.documentElement.scrollHeight,innerHeight);if(Math.abs(H-last)<120&&sky.children.length)return;last=H;sky.style.height=H+'px';
const n=Math.ceil(H/380);let s='';for(let i=0;i<n;i++){const w=170+((i*97)%190),hh=Math.round(w*.28),top=Math.round(i*380+((i*173)%240)),d=80+((i*29)%90);
s+=`<div class="cloud" data-f="${(.03+(i%4)*.03).toFixed(2)}" style="top:${top}px;width:${w}px;height:${hh}px;animation-duration:${d}s;animation-delay:-${(i*23)%d}s"></div>`}
sky.innerHTML=s;move()}
function move(){const y=scrollY;for(const c of sky.children)c.style.marginTop=(y*c.dataset.f)+'px'}
build();addEventListener('scroll',move,{passive:true});addEventListener('load',build);
addEventListener('resize',()=>{clearTimeout(t);t=setTimeout(build,200)});
if(window.ResizeObserver)new ResizeObserver(()=>{clearTimeout(t);t=setTimeout(build,200)}).observe(document.body)})();
// modal
const mod=$('#mod');let last,cur=0,mode='p';
function open(i){const p=P[i],ids=idxs(p.k);mode='p';cur=i;if(!mod.classList.contains('show'))last=document.activeElement;$('#mt').textContent=p.t+'.exe';
$('#mb').innerHTML=`<img class="big" src="${p.img}" alt="Poster ${p.t}"><h4>${p.t}</h4><div class="meta">${GRP[p.k].n} · ${p.c} · ${ids.indexOf(i)+1}/${ids.length}</div><p>${p.d}</p><h4>Caption mẫu</h4><p style="border-left:4px solid var(--orange);padding-left:12px">${CAP[i]}</p><div class="strip">${ids.map(x=>`<button class="th${x===i?' on':''}" data-j="${x}" aria-label="Xem ${P[x].t}"><img src="${P[x].img}" alt="" width="56" height="70"></button>`).join('')}</div><p class="meta">Sản phẩm tự học và thực hành thiết kế.</p><p style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn" id="mp">&lt; PREV</button><button class="btn" id="mn">NEXT &gt;</button><button class="btn pri" id="mc">CLOSE WINDOW</button></p>`;
$('#mp').onclick=()=>step(-1);$('#mn').onclick=()=>step(1);$('#mb').querySelectorAll('[data-j]').forEach(b=>b.onclick=()=>open(+b.dataset.j));
mod.classList.add('show');$('#mx').focus();$('#mc').onclick=close}
function step(d){const ids=idxs(P[cur].k);open(ids[(ids.indexOf(cur)+d+ids.length)%ids.length])}
function close(){mod.classList.add('out');setTimeout(()=>{mod.classList.remove('show','out');last&&last.focus()},200)}
$('#projects').addEventListener('click',e=>{const b=e.target.closest('[data-i]');if(b)open(+b.dataset.i)});
$('#mx').onclick=close;mod.addEventListener('click',e=>{if(e.target===mod)close()});
addEventListener('keydown',e=>{if(!mod.classList.contains('show'))return;if(e.key==='Escape')close();if(mode==='p'){if(e.key==='ArrowRight')step(1);if(e.key==='ArrowLeft')step(-1)}if(e.key==='Tab'){const f=[...mod.querySelectorAll('button')];const a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}});
// dragging (desktop, fine pointer only)
if(matchMedia('(hover:hover) and (pointer:fine) and (min-width:961px)').matches){
document.querySelectorAll('.draggable .tb, .skill').forEach(h=>{const el=h.classList.contains('skill')?h:h.parentElement;let sx,sy,ox=0,oy=0,on=0;
h.addEventListener('pointerdown',e=>{if(e.target.closest('.dot'))return;on=1;sx=e.clientX-ox;sy=e.clientY-oy;h.setPointerCapture(e.pointerId);el.style.zIndex=20});
h.addEventListener('pointermove',e=>{if(!on)return;ox=e.clientX-sx;oy=e.clientY-sy;el.style.translate=ox+'px '+oy+'px'});
h.addEventListener('pointerup',()=>on=0)});
// cursor
document.body.classList.add('fx');const c=$('#cur');
addEventListener('pointermove',e=>{c.style.transform=`translate(${e.clientX}px,${e.clientY}px)`})}
// window buttons: close just hides decorative windows gently
document.querySelectorAll('.win:not(.mod .win) .dot').forEach(b=>b.addEventListener('click',()=>{if(b.getAttribute('aria-label')==='Close'){const w=b.closest('.win');const bd=w.querySelector('.body');bd.hidden=!bd.hidden}}));
// form
$('#form').addEventListener('submit',e=>{e.preventDefault();const m=$('#msg');
if(!$('#n').value||!/\S+@\S+\.\S+/.test($('#e').value)||!$('#m').value){m.textContent='Hãy nhập họ tên, email hợp lệ và lời nhắn.';return}
const body=encodeURIComponent($('#m').value+'\n\n'+$('#n').value+' ('+$('#e').value+')');
location.href='mailto:buiduchuy10a8@gmail.com?subject='+encodeURIComponent($('#t').value)+'&body='+body;
m.textContent='Đang mở ứng dụng email của bạn để gửi.'});
$('#yr').textContent=new Date().getFullYear();
const tick=()=>$('#clock').textContent=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});tick();setInterval(tick,30000);
// nav highlight
const links=[...document.querySelectorAll('.task a[href^="#"]')];
new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting)links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+en.target.id))}),{rootMargin:'-40% 0px -55% 0px'}).observe&&document.querySelectorAll('section[id]').forEach(s=>new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting)links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+s.id))}),{rootMargin:'-40% 0px -55% 0px'}).observe(s));
$('#collage').addEventListener('click',e=>{const b=e.target.closest('[data-i]');if(b)open(+b.dataset.i)});
(function(){
const sc=[{i:1,t:"Cafe Latte mới: êm, thơm, đủ tỉnh táo",d:"Ly latte vừa ra mắt, thử ngay hôm nay."},{i:8,t:"Polo Essentials: tối giản, giảm 40%",d:"Bộ sưu tập polo mới, form đẹp, giá tốt."},{i:0,t:"Chicken Wrap giảm 40% hôm nay",d:"Giòn, nóng, cuốn đầy vị. Đặt ngay nhé!"}];
$('#collage').innerHTML=`<div class="win cre"><div class="tb"><span class="px">new-post.exe</span><button class="dot" aria-label="Close" tabindex="-1">×</button></div><div class="body"><div class="ed" aria-hidden="true"><div class="ln"><b>Tiêu đề</b><span id="t1"></span></div><div class="ln"><b>Mô tả</b><span id="t2"></span></div><ul class="ck"><li id="c1"><span class="cb"></span>Tiêu đề chuẩn SEO</li><li id="c2"><span class="cb"></span>Meta description</li><li id="c3"><span class="cb"></span>Từ khóa chính</li></ul></div><button class="pv" id="pv" data-i="1" aria-label="Xem poster"><img id="pvimg" alt="Poster đang được thiết kế" width="180" height="225"></button><div class="prog" aria-hidden="true"><i id="pb"></i></div><div class="st" id="pst" aria-hidden="true"></div></div></div>`;
const el=id=>document.getElementById(id),sl=ms=>new Promise(r=>setTimeout(r,ms)),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
async function ty(e,s){e.textContent='';for(const ch of s){e.textContent+=ch;await sl(26)}}
function img(s){const m=el('pvimg');m.src=P[s.i].img;el('pv').dataset.i=s.i;m.classList.remove('rv');void m.offsetWidth;m.classList.add('rv')}
function done(s){el('t1').textContent=s.t;el('t2').textContent=s.d;['c1','c2','c3'].forEach(x=>el(x).classList.add('on'));img(s);el('pb').style.width='100%';el('pst').textContent='✔ Đã đăng'}
if(rm){done(sc[0]);return}
(async()=>{let k=0;for(;;){const s=sc[k++%sc.length],pb=el('pb'),st=el('pst');
['c1','c2','c3'].forEach(x=>el(x).classList.remove('on'));el('t1').textContent='';el('t2').textContent='';el('pvimg').style.opacity=0;pb.style.transition='none';pb.style.width='0';void pb.offsetWidth;
st.textContent='Đang viết nội dung...';await ty(el('t1'),s.t);await ty(el('t2'),s.d);
st.textContent='Đang kiểm tra SEO...';for(const x of ['c1','c2','c3']){el(x).classList.add('on');await sl(380)}
st.textContent='Đang thiết kế poster...';el('pvimg').style.opacity=1;img(s);await sl(900);
st.textContent='Đang đăng bài...';pb.style.transition='width 1.6s steps(12)';pb.style.width='100%';await sl(1700);
st.textContent='✔ Đã đăng';await sl(2200)}})();
})();
(function(){const r=document.documentElement,b=$('#theme'),M=['auto','light','night'],N='#0B1030,#1B2A5E,#3A2E6E';
const K=[[0,N,'#6b78b8',.28,1],[5,N,'#6b78b8',.28,1],[6.2,'#3B4A8C,#D9829B,#FFC48A','#FFD9C2',.7,.25],[8,'#6FA8DC,#8DBDE8,#B9D7F1','#F8F8F4',.9,0],[16.5,'#6FA8DC,#8DBDE8,#B9D7F1','#F8F8F4',.9,0],[18,'#4A5BA8,#E5778B,#FFB26B','#FFD1B8',.75,.2],[19.5,'#1B2A5E,#3A2E6E,#6B3F7E','#9a86c4',.4,.8],[21,N,'#6b78b8',.28,1],[24,N,'#6b78b8',.28,1]];
const hx=s=>[1,3,5].map(i=>parseInt(s.slice(i,i+2),16)),mx=(a,c,t)=>a.map((v,i)=>Math.round(v+(c[i]-v)*t)),cs=a=>'rgb('+a.join(',')+')';
let mode='auto';try{const m=localStorage.getItem('th');if(M.includes(m))mode=m}catch(e){}
const hour=()=>{if(mode==='light')return 12;if(mode==='night')return 0;const d=new Date();return d.getHours()+d.getMinutes()/60};
function at(h){let i=0;while(i<K.length-2&&h>=K[i+1][0])i++;const a=K[i],c=K[i+1],t=Math.min(1,Math.max(0,(h-a[0])/(c[0]-a[0]))),A=a[1].split(','),C=c[1].split(',');
return{sk:A.map((x,n)=>cs(mx(hx(x),hx(C[n]),t))),cl:cs(mx(hx(a[2]),hx(c[2]),t)),co:a[3]+(c[3]-a[3])*t,st:a[4]+(c[4]-a[4])*t}}
const phase=h=>h>=5&&h<8?'Bình minh':h>=8&&h<16.5?'Ban ngày':h>=16.5&&h<19?'Hoàng hôn':'Ban đêm';
const orb=document.createElement('div');orb.setAttribute('aria-hidden','true');document.body.prepend(orb);
function place(h){const sun=h>=6&&h<18,p=((sun?h:(h<6?h+24:h))-(sun?6:18))/12,k=sun?'sun':'moon';
if(orb.dataset.k!==k){orb.style.transition='none';orb.className='orb '+k;orb.dataset.k=k}
orb.style.left='calc('+(p*100)+'% - 40px)';orb.style.top=(68-Math.sin(Math.PI*p)*58)+'vh';void orb.offsetWidth;orb.style.transition=''}
function upd(){const h=hour(),s=at(h),st=r.style;st.setProperty('--sk1',s.sk[0]);st.setProperty('--sk2',s.sk[1]);st.setProperty('--sk3',s.sk[2]);st.setProperty('--cloud',s.cl);st.setProperty('--co',s.co.toFixed(2));st.setProperty('--stars',s.st.toFixed(2));
r.dataset.theme=(h>=19||h<6)?'night':'light';place(h);
b.textContent='Nền: '+(mode==='auto'?'Tự động · '+phase(h):mode==='light'?'Ban ngày':'Ban đêm');b.setAttribute('aria-label','Đổi nền trang. Hiện tại: '+b.textContent)}
b.onclick=()=>{mode=M[(M.indexOf(mode)+1)%3];try{localStorage.setItem('th',mode)}catch(e){}upd()};
upd();setInterval(upd,30000);const fade=()=>{orb.style.opacity=Math.max(0,1-scrollY/(innerHeight*.7)).toFixed(2)};fade();addEventListener('scroll',fade,{passive:true})})();
// boot
setTimeout(()=>{$('#boot').classList.add('gone')},matchMedia('(prefers-reduced-motion:reduce)').matches?100:1600);
