/* ===== ตั้งค่าที่แก้เองได้ที่นี่ที่เดียว ===== */
var CFG={
 line:'https://line.me/R/ti/p/@vpackprinting', lineId:'@vpackprinting',
 tel1:'02-641-6835', tel2:'02-641-6836', telLink:'026416835', tel2Link:'026416836',
 saleMail:'sale@vpackaging.net', mail:'info@vpackaging.net',
 hours:'จันทร์-เสาร์ 08:00-17:00 น.',
 enName:'V-Pack Printing &amp; Packaging Co., Ltd.', enTax:'Tax ID : 0105546027079 Branch 00001',
 enAddr:'38 Soi Khwanpattana 2, Asoke-DinDaeng Rd.,<br>Din-Daeng, Bangkok, Thailand. 10400',
 addr:'38 ซอยขวัญพัฒนา 2 ถนนอโศก-ดินแดง แขวงดินแดง เขตดินแดง กรุงเทพมหานคร 10400',
 /* ลิงก์ Web App ของ Google Apps Script สำหรับฟอร์ม "ให้ทีมขายติดต่อกลับ"
    วิธีได้ลิงก์ ดูไฟล์ Code.gs  ถ้าเว้นว่างไว้ ฟอร์มจะเปิดอีเมลแทนเหมือนเดิม */
 b2bUrl:'',
 /* รหัส Google Analytics เช่น 'G-ABC123XYZ'  ถ้าเว้นว่างไว้ = ยังไม่ติดตั้ง */
 gaId:'',
 shapes:['สี่เหลี่ยม','วงกลม','วงรี','ไดคัทตามทรง','อื่นๆ'],
 materials:[
 ['สติกเกอร์กระดาษ',['กึ่งมันกึ่งด้าน (Semi-Gloss Paper)','ขาวเงา / อาร์ตมัน (Gloss Art Paper)','ขาวด้าน (Matte Paper)','กระดาษคราฟท์ (Kraft Paper)']],
 ['สติกเกอร์ PP',['PP ขาวเงา (PP White Gloss)','PP ขาวด้าน (PP White Matte)','PP ใส (Clear / Transparent PP)','PP มุก (Pearlescent PP)','PP SILVER']],
 ['สติกเกอร์ PE / PET / PVC และอื่นๆ',['PE ยืดหยุ่น (Polyethylene)','PE ขาวด้าน (PE White Matte)','PET ทนความร้อน (Polyester)','PET SILVER MAT (เงินด้าน)','PVC ใส (PVC Clear)','PVC ขาวเงา (Glossy White PVC)','Co-Ex ขาวด้าน']],
 ['สติกเกอร์ความร้อน (Thermal)',['Direct Thermal (DT)','Direct Thermal Synthetic (DTS) ฉีกไม่ขาด','Thermal Transfer (TT)']],
 ['สติกเกอร์วัสดุพิเศษ',['เปลือกไข่ (Destructible Vinyl)','วอยด์เงิน ทิ้งคราบเมื่อลอก (Silver VOID)','สุญญากาศ (Static Cling / Window Decal)']],
 ['การ์ดและกระดาษกล่อง',['การ์ดสี','กระดาษกล่องแป้งหลังเทา']],
 ['ไม่แน่ใจ',['ไม่แน่ใจ ให้แอดมินแนะนำ']]],
 qtys:['100','500','1000','5000','10000']
};
var S=[['label-roll.html','พิมพ์ฉลากม้วน (งานเหมา)'],['digital.html','พิมพ์ดิจิทัล'],['stamping.html','งานปั๊ม (รับงานนอก)']];
var P=[['index.html','หน้าแรก'],['about.html','เกี่ยวกับเรา'],['services.html','บริการ'],['machinery.html','เครื่องจักร'],['portfolio.html','ผลงาน'],['guide.html','คู่มือวัสดุ'],['quote.html','ขอราคา'],['contact.html','ติดต่อเรา']];

/* ===== Google Analytics + นับคลิกปุ่มโทร/Line (ทำงานเมื่อใส่ gaId ด้านบน) ===== */
if(CFG.gaId){var gs=document.createElement('script');gs.async=true;gs.src='https://www.googletagmanager.com/gtag/js?id='+CFG.gaId;document.head.appendChild(gs);
 window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',CFG.gaId)}
function track(n,p){if(window.gtag)gtag('event',n,p||{})}

/* หน้าปัจจุบัน (รองรับ URL แบบไม่มี .html ด้วย) */
var cur=location.pathname.split('/').pop()||'index.html';if(cur.indexOf('.')<0)cur+='.html';

/* ===== หัวเว็บ ===== */
var ci=0;function L(h,t,on){return '<a class="c'+(ci++%4)+(on?' on':'')+'" href="'+h+'"'+(on?' aria-current="page"':'')+'>'+t+'</a>'}
document.getElementById('hd').innerHTML='<header><div class="w hb"><a href="index.html"><img src="img/logo.png" alt="V-pack วี แพค" width="90" height="46"></a><button id="mb" type="button" aria-label="เปิดเมนู" aria-expanded="false" aria-controls="nv">☰</button><nav id="nv" aria-label="เมนูหลัก">'+P.map(function(p){return p[0]=='services.html'?'<div class="dd">'+L(p[0],p[1],p[0]==cur||S.some(function(s){return s[0]==cur}))+'<div class="sub">'+S.map(function(s){return L(s[0],s[1],s[0]==cur)}).join('')+'</div></div>':L(p[0],p[1],p[0]==cur)}).join('')+'</nav><a class="btn r" href="'+CFG.line+'" target="_blank" rel="noopener">ขอราคาผ่าน Line</a></div></header>';

/* ===== ท้ายเว็บ ===== */
document.getElementById('ft').innerHTML='<footer><div class="w grid"><div><h3>บริษัท วี แพค การพิมพ์และบรรจุภัณฑ์ จำกัด</h3><p>'+CFG.addr+'</p><p style="margin-top:12px"><b>'+CFG.enName+'</b><br>'+CFG.enTax+'<br>'+CFG.enAddr+'</p></div><div><h3>ติดต่อ</h3><p>โทร <a href="tel:'+CFG.telLink+'">'+CFG.tel1+'</a>, <a href="tel:'+CFG.tel2Link+'">'+CFG.tel2+'</a><br>อีเมล <a href="mailto:'+CFG.mail+'">'+CFG.mail+'</a><br>Line OA <a href="'+CFG.line+'" target="_blank" rel="noopener">'+CFG.lineId+'</a></p><p>เวลาทำการ '+CFG.hours+'</p></div><div><h3>เมนู</h3>'+P.concat(S).map(function(p){return '<a href="'+p[0]+'">'+p[1]+'</a><br>'}).join('')+'<a href="materials.html">วัสดุที่รองรับ</a><br><a href="egat-label.html">ฉลากประหยัดไฟเบอร์ 5</a><br><a href="csr.html">กิจกรรมเพื่อสังคม</a><br></div></div></footer><a class="btn r fl" href="'+CFG.line+'" target="_blank" rel="noopener" aria-label="ทัก Line '+CFG.lineId+'">ทัก Line</a>';

/* ===== เมนูมือถือ: เปิด/ปิด และปิดเมื่อแตะนอกเมนู ===== */
(function(){var mb=document.getElementById('mb'),nv=document.getElementById('nv');
 function set(o){nv.classList.toggle('o',o);mb.setAttribute('aria-expanded',o);mb.setAttribute('aria-label',o?'ปิดเมนู':'เปิดเมนู');mb.textContent=o?'✕':'☰'}
 mb.onclick=function(e){e.stopPropagation();set(!nv.classList.contains('o'))};
 document.addEventListener('click',function(e){if(nv.classList.contains('o')&&!nv.contains(e.target))set(false)});
 document.addEventListener('keydown',function(e){if(e.key=='Escape'&&nv.classList.contains('o')){set(false);mb.focus()}})})();

/* ===== นับคลิกปุ่มโทร / Line ===== */
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a');if(!a)return;var h=a.getAttribute('href')||'';
 if(h.indexOf('tel:')==0)track('click_tel',{page:cur});else if(h.indexOf('line.me')>-1)track('click_line',{page:cur})});

/* ===== สไลด์หน้าแรก: หยุดเมื่อเอาเมาส์ชี้หรือกด Tab เข้าไป ===== */
var s=document.querySelectorAll('.sl');if(s.length){var i=0,t=null,d=document.getElementById('dots'),hero=document.querySelector('.hero'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
 s.forEach(function(_,n){var b=document.createElement('button');b.type='button';b.setAttribute('aria-label','สไลด์ '+(n+1));b.onclick=function(){go(n);start()};d.appendChild(b)});
 function go(n){i=n;s.forEach(function(e,k){var on=k==n;e.classList.toggle('on',on);d.children[k].classList.toggle('on',on);if(on)d.children[k].setAttribute('aria-current','true');else d.children[k].removeAttribute('aria-current')})}
 function stop(){clearInterval(t);t=null}
 function start(){stop();if(!rm)t=setInterval(function(){go((i+1)%s.length)},6000)}
 go(0);start();
 hero.addEventListener('mouseenter',stop);hero.addEventListener('mouseleave',start);
 hero.addEventListener('focusin',stop);hero.addEventListener('focusout',start)}

/* ===== กรองผลงาน: แท็บที่ยังไม่มีรูปผลงานจะซ่อนเอง (ใส่รูปเมื่อไร แท็บจะโผล่เอง) ===== */
(function(){var tb=document.querySelectorAll('.tabs button');if(!tb.length)return;
 tb.forEach(function(b){var f=b.dataset.f;if(f!='all'&&!document.querySelector('[data-cat="'+f+'"] img')){b.hidden=true;document.querySelectorAll('[data-cat="'+f+'"]').forEach(function(c){c.remove()})}});
 tb.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.onclick=function(){
  tb.forEach(function(x){x.classList.remove('on');x.setAttribute('aria-pressed','false')});b.classList.add('on');b.setAttribute('aria-pressed','true');
  document.querySelectorAll('[data-cat]').forEach(function(c){c.style.display=(b.dataset.f=='all'||c.dataset.cat==b.dataset.f)?'':'none'})}})})();

/* ===== ฟอร์มจำลองสเปก -> คัดลอก -> เปิด Line ===== */
var f=document.getElementById('spec');if(f){
 var $=function(k){return document.getElementById(k)};
 function fillg(id,g){var h='<option value="">เลือกวัสดุ</option>';g.forEach(function(x){h+='<optgroup label="'+x[0]+'">'+x[1].map(function(m){return '<option>'+m+'</option>'}).join('')+'</optgroup>'});$(id).innerHTML=h}
 function fill(id,a){$(id).innerHTML=a.map(function(x){return '<option>'+x+'</option>'}).join('')}
 fill('shape',CFG.shapes);fillg('mat',CFG.materials);fill('ql',CFG.qtys);
 function txt(){var g=function(k){return $(k).value};
  return 'สอบถามราคาสติกเกอร์ | รูปทรง: '+g('shape')+' | วัสดุ: '+g('mat')+' | ขนาด: '+(g('w')||'-')+' x '+(g('h')||'-')+' มม. | จำนวน: '+(g('qty')?Number(g('qty')).toLocaleString('en-US'):'-')+' ชิ้น | หมายเหตุ: '+(g('note')||'-')}
 function show(){$('sum').textContent=txt()}
 f.oninput=show;show();
 function copy(t){if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(t).catch(function(){return legacy(t)});return legacy(t)}
 function legacy(t){return new Promise(function(ok,no){var a=document.createElement('textarea');a.value=t;a.setAttribute('readonly','');a.style.position='fixed';a.style.opacity='0';document.body.appendChild(a);a.select();try{document.execCommand('copy')?ok():no()}catch(e){no()}a.remove()})}
 function done(okk){$('cm').textContent=okk?'คัดลอกสเปกแล้ว กดวางในแชท Line ได้เลย':'คัดลอกอัตโนมัติไม่ได้ กรุณาคัดลอกข้อความสรุปด้านบนเอง'}
 $('send').onclick=function(){
  if(!$('w').value||!$('h').value||!$('qty').value||!$('mat').value){$('cm').textContent='กรุณาเลือกวัสดุ กรอกขนาด (กว้าง ยาว) และจำนวน';return}
  var p=copy(txt());                 /* คัดลอกก่อน ขณะหน้าเว็บยังโฟกัสอยู่ */
  var w=window.open(CFG.line,'_blank');  /* แล้วค่อยเปิด Line */
  p.then(function(){done(1)},function(){done(0)});
  track('quote_send_line');
  if(!w)location.href=CFG.line};
 $('again').onclick=function(){copy(txt()).then(function(){done(1)},function(){done(0)})};

 /* ===== ฟอร์มลูกค้าองค์กร: ส่งเข้า Google Sheets (ถ้าตั้ง b2bUrl) ไม่งั้นเปิดอีเมล ===== */
 var bf=$('b2b'),bm=$('bm');
 bf.onsubmit=function(e){e.preventDefault();var g=function(k){return $(k).value.trim()};
  if(bf.website&&bf.website.value)return;   /* กันบอทสแปม */
  var ph=g('bp').replace(/[\s-]/g,'');if(!/^0\d{8,9}$/.test(ph)){bm.textContent='กรุณากรอกเบอร์โทรให้ถูกต้อง เช่น 0812345678';$('bp').focus();return}
  var data={name:g('bn'),phone:ph,company:g('bc'),detail:g('bd'),page:location.href};
  var fallback='หากส่งไม่ได้ กรุณาโทร <a href="tel:'+CFG.telLink+'">'+CFG.tel1+'</a> หรือทัก Line <a href="'+CFG.line+'" target="_blank" rel="noopener">'+CFG.lineId+'</a>';
  if(CFG.b2bUrl){var btn=bf.querySelector('button[type=submit]');btn.disabled=true;bm.textContent='กำลังส่งข้อมูล...';
   fetch(CFG.b2bUrl,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(data)})
    .then(function(){bm.textContent='ส่งข้อมูลเรียบร้อย ทีมขายจะติดต่อกลับโดยเร็วที่สุด ขอบคุณที่สนใจ';bf.reset();track('b2b_submit')},
          function(){bm.innerHTML='ส่งไม่สำเร็จ '+fallback})
    .then(function(){btn.disabled=false});
  }else{
   var body='ชื่อ: '+data.name+'\nเบอร์โทร: '+ph+'\nบริษัท: '+data.company+'\nรายละเอียดงาน: '+data.detail;
   location.href='mailto:'+CFG.saleMail+'?subject='+encodeURIComponent('ขอให้ทีมขายติดต่อกลับ (B2B)')+'&body='+encodeURIComponent(body);
   bm.innerHTML='เปิดอีเมลของคุณแล้ว กดส่งเพื่อให้ทีมขายติดต่อกลับ<br>'+fallback;track('b2b_mailto')}}}

/* ===== กันตัดคำกลางคำ: คำที่เบราว์เซอร์ตัดผิดบ่อยจะไม่ถูกตัดกลางคำ ===== */
(function(){var W=/(สติกเกอร์|ไดคัท|ออนไลน์|ฟอยล์|ดิจิทัล)/,t=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),a=[],n;
 while(n=t.nextNode()){if(!/^(SCRIPT|STYLE|TEXTAREA|OPTION)$/.test(n.parentNode.tagName)&&W.test(n.nodeValue))a.push(n)}
 a.forEach(function(n){var f=document.createDocumentFragment();n.nodeValue.split(new RegExp(W.source,'g')).forEach(function(p,i){
  if(i%2){var s=document.createElement('span');s.className='nb';s.textContent=p;f.appendChild(s)}else f.appendChild(document.createTextNode(p))});
  n.parentNode.replaceChild(f,n)})})();

/* ===== คลิกภาพเพื่อดูภาพใหญ่ ===== */
(function(){var lb;function close(){if(lb){lb.remove();lb=null}}
 document.addEventListener('click',function(e){var t=e.target;
  if(lb){close();return}
  if(t.tagName=='IMG'&&t.classList.contains('pimg')){
   lb=document.createElement('div');lb.id='lb';lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');lb.setAttribute('aria-label','ดูภาพขยาย');
   var i=document.createElement('img');i.src=t.currentSrc||t.src;i.alt=t.alt;lb.appendChild(i);
   var b=document.createElement('button');b.type='button';b.textContent='✕';b.setAttribute('aria-label','ปิด');lb.appendChild(b);
   document.body.appendChild(lb);b.focus()}});
 document.addEventListener('keydown',function(e){if(e.key=='Escape')close()})})();

/* ===== โหลดภาพสไลด์ที่ซ่อนอยู่ล่วงหน้า ไม่ให้กระพริบตอนสไลด์เปลี่ยน ===== */
window.addEventListener('load',function(){document.querySelectorAll('.sl img').forEach(function(im){var p=new Image();p.src=im.getAttribute('src')})});
