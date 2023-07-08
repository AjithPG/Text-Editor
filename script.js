let optionButton = document.querySelectorAll('.option-button');
let advanceOptionButton = document.querySelectorAll('.adv-option-button');
let fontName = document.getElementById('fontName');
let fontSize =  document.getElementById('fontSize');
let linkButton = document.getElementById('createlink');

let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];

fontList.map((value)=>{
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontName.append(option);

})

for(i=1;i<7;i++){
    let option = document.createElement("option");
    option.value=i;
    option.innerHTML=i;
    fontSize.append(option);
}


linkButton.addEventListener('click',()=>{
    let userLink = prompt('Enter a URL');
    if(/http/i.test(userLink)){
        modifyText(linkButton.id,false,userLink);
    } else {
        userLink = 'http://' + userLink;
        modifyText(linkButton.id,false,userLink);

    }
})

const modifyText = (command,defaultUi,value)=>{
   document.execCommand(command,defaultUi,value);
}

optionButton.forEach((button)=>{
    button.addEventListener("click",()=>{
        modifyText(button.id,false,null)
    })
})


advanceOptionButton.forEach((button)=>{
    button.addEventListener("change",()=>{
        modifyText(button.id,false,button.value)
    })
})

optionButton.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('active')){
            button.classList.remove('active');
        } else{
            button.classList.add('active');
        }
        
    })
})