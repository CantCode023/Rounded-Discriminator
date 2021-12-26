const disc = document.getElementById("disc")
const round = document.getElementById("round")

round.onclick = function() {
    var a = disc.value.toString()
    if ("#" in a) {
        a = a.split("#")[1]
    }

    fetch("/round?disc=" + a)
        .then(function(x) {
            const b = x.text()
            .then(function(y) {
                disc.value = y
            })
        })
}