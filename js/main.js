const $=s=>document.querySelector(s);
$("#profil").src=IMG["Foto profil"];
const FD={webgis:"Aplikasi peta web, story map, dan analisis berbasis WebGIS",remote:"Analisis citra satelit untuk membaca kondisi wilayah",peta:"Peta dasar dan eksplorasi alat pemetaan",konten:"Tutorial dan konten edukasi seputar GIS"};
const card=p=>`<article class="card"><button class="shot" data-i="${p[2]}" data-t="${p[0]}" aria-label="Perbesar gambar ${p[0]}"><img src="${IMG[p[2]]}" alt="Tampilan ${p[0]}" loading="lazy"></button><div class="body"><h3>${p[0]}</h3><p>${p[1]}</p><div class="tools">${p[3].map(t=>`<span>${t}</span>`).join("")}</div>${p[5]?`<a class="open" href="${p[5]}" target="_blank" rel="noopener">${p[6]}</a>`:""}</div></article>`;
const ICO='<svg class="ico" viewBox="0 0 44 36" aria-hidden="true"><path d="M2 6a4 4 0 0 1 4-4h10l4 5h18a4 4 0 0 1 4 4v19a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" fill="currentColor"/></svg>';
$("#folders").innerHTML=Object.entries(L).map(([k,v],i)=>{const items=P.filter(p=>p[4].split(" ")[0]===k);
 return `<details class="folder"${i===0?" open":""}><summary>${ICO}<div class="ft"><h3>${v}</h3><p>${FD[k]}</p></div><span class="n">${items.length} proyek</span><span class="chev" aria-hidden="true"></span></summary><div class="grid">${items.map(card).join("")}</div></details>`}).join("");
$("#certs").innerHTML=C.map(c=>`<article class="cert"><button data-i="${c[2]}" data-t="${c[0]}" aria-label="Perbesar ${c[0]}"><img src="${IMG[c[2]]}" alt="Sertifikat ${c[0]}" loading="lazy"></button><div><h3>${c[0]}</h3><p>${c[1]}</p><small>${c[3]}</small></div></article>`).join("");
const lb=$("#lb");
document.addEventListener("click",e=>{const b=e.target.closest("[data-i]");if(!b)return;$("#lbi").src=IMG[b.dataset.i];$("#lbi").alt=b.dataset.t;lb.showModal()});
$("#lbx").onclick=()=>lb.close();lb.onclick=e=>{if(e.target===lb)lb.close()};
// tema
const R=document.documentElement;
try{const t=localStorage.getItem("tema");if(t)R.dataset.theme=t}catch(e){}
$("#theme").onclick=()=>{const d=R.dataset.theme?R.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;
 R.dataset.theme=d?"light":"dark";try{localStorage.setItem("tema",R.dataset.theme)}catch(e){}};
// garis kontur
(function(){let s="",cx=900,cy=330;
 for(let i=1;i<=15;i++){let r=i*30,d="";
  for(let a=0;a<=64;a++){const t=a/64*Math.PI*2,w=1+.16*Math.sin(3*t+i*.35)+.09*Math.sin(5*t-i*.2);
   d+=(a?"L":"M")+(cx+Math.cos(t)*r*1.5*w).toFixed(1)+" "+(cy+Math.sin(t)*r*w).toFixed(1)}
  s+=`<path d="${d}Z" fill="none" stroke="${i%5==0?"var(--jade)":"var(--line)"}" stroke-width="${i%5==0?2:1.2}"/>`}
 $("#topo").innerHTML=s})();
