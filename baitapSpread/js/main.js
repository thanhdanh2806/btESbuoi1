document.addEventListener("contextmenu", function(e) {
    e.preventDefault()
}, !1),
document.onkeydown = function(e) {
    return 123 != (e = e || window.event).keyCode && (!e || 73 != e) && void 0
}
;
const heading = document.querySelector(".heading");
jump = (e=>{
    return [...e].map(e=>`<span>${e}</span>`).join("")
}
),
heading.innerHTML = jump(heading.innerText);
