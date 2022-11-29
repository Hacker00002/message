const allForm = document.querySelector('form')
const allInput = document.querySelector('#input')
const allBtn = document.querySelector('#button')
const allText = document.querySelector('div')
const allBtn2 = document.querySelector('#btn')

let arr = []

allForm.addEventListener('submit', function(e){
    e.preventDefault()
    let value = allInput.value
   
    if(value == ""){
        alert("Enter the value")
       
    }else{
        allText.textContent = ""
        arr.push(value)
        createItem()
        allInput.value = ""
    }
})

function createItem(){
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const h2 = document.createElement("h2")
        h2.textContent += element
        allText.appendChild(h2)
        h2.style.backgroundColor = 'rgba(255, 255, 255, 0.57)'
        h2.style.color = 'black'
        h2.style.marginBottom = '10px'
        h2.style.marginTop = '10px'
        h2.style.padding = '5px 20px'
        h2.style.borderRadius = '5px'
    }
}

allBtn2.addEventListener('click', function(){
    arr = []
    
    allText.textContent = ''
})