function add() {
    var getInput = document.getElementById('main')
    // var a = document.getElementById('addbtn').disabled = false

    if (getInput.value !== " ") {

        // var a = document.getElementById('addbtn').disabled = false
        var getInput = document.getElementById('main')
        var list = document.createElement('li')
        var displayList = document.createTextNode(getInput.value)
        list.appendChild(displayList)

        var getList = document.getElementById('list')
        getList.appendChild(list)

        var dltbtn = document.createElement('button')
        var dltBtnText = document.createTextNode('Delete')
        dltbtn.appendChild(dltBtnText)
        list.appendChild(dltbtn)
        dltbtn.setAttribute('onclick', 'del(this)')

        var editBtn = document.createElement('button')
        var editBtnText = document.createTextNode('Edit')
        editBtn.appendChild(editBtnText)
        list.appendChild(editBtn)
        editBtn.setAttribute('onclick', 'edit(this)')
        getInput.value = " "

    }
    else if (getInput.value == " "){
        console.log("eempty")
        alert("Enter Something")
        // var a = document.getElementById('addbtn').disabled = true
        getInput.value != " "

    }
    
}

function DeleteAll() {
    var list = document.getElementById('list')
    list.innerHTML = " "
}

function del(e) {
    e.parentNode.remove()
}


function edit(e) {
    var pr = prompt('Update Item', e.parentNode.firstChild.nodeValue)
    console.log(e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = pr
}
