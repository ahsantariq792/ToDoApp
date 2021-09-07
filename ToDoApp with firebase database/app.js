//Loading getting data from database
firebase.database().ref('todos').on('child_added', function (data) {
    var getInput = document.getElementById('main')

    //creating li in html
    var list = document.createElement('li')
    var displayList = document.createTextNode(data.val().value)
    list.appendChild(displayList)
    var getList = document.getElementById('list')
    getList.appendChild(list)

    //delete button for specific item
    var dltbtn = document.createElement('button')
    var dltBtnText = document.createTextNode('Delete')
    dltbtn.appendChild(dltBtnText)
    list.appendChild(dltbtn)
    dltbtn.setAttribute('onclick', 'del(this)')
    dltbtn.setAttribute('id', data.val().key)

    //edit button
    var editBtn = document.createElement('button')
    var editBtnText = document.createTextNode('Edit')
    editBtn.appendChild(editBtnText)
    list.appendChild(editBtn)
    editBtn.setAttribute('onclick', 'edit(this)')
    editBtn.setAttribute('id', data.val().key)

    //empty value after adding item through input
    getInput.value = " "
})


//adding new items
function add() {
    var getInput = document.getElementById('main')

    //sending data to database
    var a = firebase.database().ref('todos')

    //getting key 
    var key = a.push().key
    var obj = {
        value: getInput.value,
        key: key
    }

    //pushing data and key to database
    a.child(key).set(obj)

    //empty value after adding item through input
    getInput.value = " "

}

//delete all
function DeleteAll() {
    var list = document.getElementById('list')
    list.innerHTML = " "
}


//delete respective specific item
function del(e) {
    firebase.database().ref('todos').child(e.id).remove()
    e.parentNode.remove()
}


//updating item
function edit(e) {
    var pr = prompt('Update Item', e.parentNode.firstChild.nodeValue)

    var obj = {
        key: e.id,
        value: pr
    }
    firebase.database().ref('todos').child(e.id).set(obj)
    console.log(e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = pr
}






