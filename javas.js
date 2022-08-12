
var res = document.querySelector('#resultado')
var bt = document.querySelector('#bt')
bt.addEventListener('click', clicou)

function clicou(){
    var num = document.querySelector('#tabnum')
    var nnum = Number(num.value)
    res.innerHTML = `<p>${nnum} x 1 = <strong>${nnum}</strong> <br></p>`

    for(var mult = 2; mult <= 10; mult++){
        var multiplicacao = nnum * mult
        res.innerHTML += `<p>${nnum} x ${mult} = <strong>${multiplicacao}</strong> <br></p>`
    }

}