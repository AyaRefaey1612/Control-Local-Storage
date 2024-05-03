let inputKey=document.querySelector(".key");
let inputValue=document.querySelector(".value");
let check=document.querySelector(".check" );
let add=document.querySelector(".add");
let deleted=document.querySelector(".delete");
let show=document.querySelector(".show");
let results=document.querySelector(".result span");
let replace=document.querySelector(".replace");
let yes=document.querySelector(".yes");
let no=document.querySelector(".no");
let allButtons=document.querySelectorAll(".buttons span");


 function checked(){
  if(localStorage.getItem(inputKey.value)){
    if(localStorage[inputKey.value] === inputValue.value){
      results.innerHTML=`Found Local Storage Item Called Key:${inputKey.value}, Value:${inputValue.value}`
    }else{
      results.innerHTML=`Found Local Storage Item Called ${inputKey.value} But With Another Value <span class="special">'the value is ${localStorage[inputKey.value]}' </span> `
    }
    
  }else{
    results.innerHTML=`No Local Storage Item With The Name ${inputKey.value}`
    inputKey.value='';
    inputValue.value='';
  }
}
 function Add(){
    if(localStorage.getItem(inputKey.value)){
      if(localStorage[inputKey.value]===inputValue.value){
        results.innerHTML=`Found Local Storage Item Key Called ${inputKey.value} and Item Value Called ${inputValue.value}`
      }else{
        results.innerHTML=`Found Local Storage Item Key Called ${inputKey.value} With Another Value  <span class="span">If You Want To Replace Enter Replase</span>`;
        replace.style.display="block";
      }
      }else{
        localStorage.setItem(inputKey.value, inputValue.value);
        results.innerHTML=`Local Storage Item Key: ${inputKey.value}, Value: ${inputValue.value} Added`
      }
    }


function deleteItem(){
    if(localStorage.getItem(inputKey.value)){
      if(localStorage[inputKey.value] === inputValue.value){
          localStorage.removeItem(inputKey.value); 
          inputKey.value="";
          inputValue.value="";   
        results.innerHTML=`Local Storage Item ${inputKey.value} => ${inputValue.value} Removed`
      }else{
        results.innerHTML=`Found Local Storage Item Key Called ${inputKey.value} With Another Value <span class="span" >If You Want To Removed Anyway Enter Yes Or dont Enter No </span>`;
        yes.style.display="block";
        no.style.display="block";

      }
      }else{
        results.innerHTML=`No Local Storage Item With The Name ${inputKey.value}`
      }
}


function showItems(){
    if(localStorage.length){   
        results.innerHTML="";
    for(let [key, value] of Object.entries(localStorage)){
     
        value.length?results.innerHTML+=`<span> Key: ${key} , Value:${value}</span>`:results.innerHTML+=`<span>Key: ${key}</span>`
    }
  
  }else{
        results.innerHTML=`No Items To Show`;
  }
}


replace.onclick=function(){
  localStorage.setItem(inputKey.value , inputValue.value);
  replace.innerHTML="Done";
  setTimeout(() => {
    results.innerHTML="The operation was completed successfully";
    replace.style.display="none";
  }, 3000);

}

yes.onclick=function(){
  localStorage.removeItem(inputKey.value);
    yes.style.display='none';
    no.style.display='none';
    results.innerHTML="The operation was completed successfully";
    inputKey.value="";
    inputValue.value="";
}

no.onclick=function(){
  yes.style.display='none';
  no.style.display='none';
  results.innerHTML="Results Here";
}

function checkEmpyInputs(){
  if(inputKey.value === '' || inputValue.value === ''){
    results.innerHTML='the inputs cant be empty';
  }else{
  allButtons.forEach(element => {
    if(element.target.classList=".check"){
      check();
    }
    
  });
  }
}


allButtons.forEach(element => {
  element.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("check")){
      if(inputKey.value === "" || inputValue.value==="" ){
        results.innerHTML='the inputs cant be empty';
      }else{
        results.innerHTML='Results Here';
        yes.style.display='none';
        no.style.display='none';
        replace.style.display='none';
         checked();
       
      }
    }
    if(e.target.classList.contains("add")){
      if(inputKey.value === "" || inputValue.value==="" ){
        results.innerHTML='the inputs cant be empty';
      }else{
        results.innerHTML='Results Here';
        yes.style.display='none';
        no.style.display='none';
        replace.style.display='none';
         Add();
       
      }
    }
    
    if(e.target.classList.contains("delete")){
      if(inputKey.value === "" || inputValue.value==="" ){
        results.innerHTML='the inputs cant be empty';
      }else{  
        results.innerHTML='Results Here';
        yes.style.display='none';
        no.style.display='none';
        replace.style.display='none';
         deleteItem();
       
      }
    }
    
    if(e.target.classList.contains("show")){
      results.innerHTML='Results Here';
      yes.style.display='none';
      no.style.display='none';
      replace.style.display='none';
      inputKey.value="";
      inputValue.value="";
         showItems();
    }
    
  })
    
  });
  
  document.querySelector(".delete-all").onclick=function(){
      localStorage.clear();
      results.innerHTML='Results Here';
  }
