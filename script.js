document.addEventListener('DOMContentLoaded',()=>{
 const earnBtn=document.getElementById('earnBtn');
 const popup=document.getElementById('popup');
 const closeBtn=document.getElementById('closePopup');
 earnBtn.addEventListener('click',()=>popup.setAttribute('aria-hidden','false'));
 closeBtn.addEventListener('click',()=>popup.setAttribute('aria-hidden','true'));
});