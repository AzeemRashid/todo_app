


var list=document.getElementById('list')

//make the function of the add item

function additem(){
    var input=document.getElementById('input')
    var li=document.createElement('li')
    var litext=document.createTextNode(input.value)
    li.appendChild(litext)

    // create the edit BUTTON
    var btn=document.createElement('button')
    
    var btntext=document.createTextNode('Edit')
    
 btn.setAttribute("class",'abc')
 btn.setAttribute("onclick",'edititem(this)')
 btn.appendChild(btntext)
 li.appendChild(btn)

 // create the del-item BUTTON
 var btn=document.createElement('button')
 var btntext=document.createTextNode('Delete')
    
 btn.setAttribute("class",'abc')
 btn.setAttribute("onclick",'deleteitem(this)')
 btn.appendChild(btntext)
 li.appendChild(btn)

    list.appendChild(li)
    input.value=""
}




// create the delete item function
function deleteitem(e){
    console.log(e)

e.parentNode.remove()
}





// create edit item function

function edititem(b){
    console.log(b.parentNode.firstChild)
    var val=prompt("edit the text",b.parentNode.firstChild.nodeValue)
    b.parentNode.firstChild.nodeValue=val
   
}

















function deleteAll(){
    list.innerHTML=""
}