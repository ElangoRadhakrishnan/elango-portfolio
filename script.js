document.getElementById("year").innerText = new Date().getFullYear();

function sendMsg(event){
  event.preventDefault();
  document.getElementById("status").innerText =
    "✅ Message saved! (To enable real email, connect EmailJS/Formspree)";
  event.target.reset();
  return false;
}

/* Reveal animation */
const reveals = document.querySelectorAll(".reveal");
function onScroll(){
  reveals.forEach((el)=>{
    const top = el.getBoundingClientRect().top;
    const win = window.innerHeight;
    if(top < win - 90) el.classList.add("active");
  });
}
window.addEventListener("scroll", onScroll);
onScroll();
