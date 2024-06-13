let count  = 0
function incr(){
    count += 1
    document.getElementById("count").textContent = count
}

function decr(){
    count -= 1
    document.getElementById("count").textContent = count
}

function rst(){
    count = 0
    document.getElementById("count").textContent = count
}