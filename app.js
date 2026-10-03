const cover=document.getElementById('cover');
const opened=document.getElementById('opened');
const envelope=document.getElementById('envelope');
const extra=document.getElementById('extra');
const surprise=document.getElementById('surprise');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let pending=false;
envelope.addEventListener('click',()=>{
  if(pending)return;
  pending=true;envelope.classList.add('open');
  setTimeout(()=>{cover.hidden=true;opened.hidden=false;window.scrollTo({top:0,behavior:'instant'});document.getElementById('letterTitle').focus({preventScroll:true});pending=false},reduced.matches?0:850);
});
surprise.addEventListener('click',()=>{
  extra.hidden=!extra.hidden;surprise.setAttribute('aria-expanded',String(!extra.hidden));
  if(!extra.hidden)extra.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'nearest'});
});
document.getElementById('again').addEventListener('click',()=>{
  opened.hidden=true;cover.hidden=false;extra.hidden=true;surprise.setAttribute('aria-expanded','false');envelope.classList.remove('open');window.scrollTo({top:0,behavior:'instant'});envelope.focus({preventScroll:true});
});
