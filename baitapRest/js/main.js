document.addEventListener("contextmenu", function(e) {
    e.preventDefault()
}, !1),
document.onkeydown = function(e) {
    return 123 != (e = e || window.event).keyCode && (!e.ctrlKey || !e.shiftKey || 73 != e.keyCode) && void 0
}
,
tinhDTB = ((...e)=>{
    let n = 0;
    return e.map(e=>{
        n += parseFloat(e)
    }
    ),
    (n / e.length).toFixed(2)
}
),
document.getElementById("btnKhoi1").onclick = (()=>{
    let e = document.getElementById("inpToan").value
      , n = document.getElementById("inpLy").value
      , t = document.getElementById("inpHoa").value;
    document.getElementById("tbKhoi1").innerHTML = tinhDTB(e, n, t)
}
),
document.getElementById("btnKhoi2").onclick = (()=>{
    let e = document.getElementById("inpVan").value
      , n = document.getElementById("inpSu").value
      , t = document.getElementById("inpDia").value
      , d = document.getElementById("inpEnglish").value;
    document.getElementById("tbKhoi2").innerHTML = tinhDTB(e, n, t, d)
}
);
