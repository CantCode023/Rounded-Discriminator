const disc = document.getElementById("disc")
const round = document.getElementById("round")

round.onclick = function() {
    const a = disc.value.toString()

    fetch("/round?disc=" + a)
        .then(function(x) {
            const b = x.text()
            .then(function(y) {
                disc.value = y
            })
        })
}