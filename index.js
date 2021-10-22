
    let currentDisplay=''
    const dashboard = document.getElementById('dashboard') 
    const boardWrapper = document.getElementById('board-wrapper')
 
    boardWrapper.addEventListener('click',(e)=>{       
        if(e.target.innerText ==='AC'){
            // clear dashboard
            dashboard.innerHTML = 0
            currentDisplay=''
        }else if(e.target.innerText ==='='){
            // show result
            if(currentDisplay){
                result=eval(currentDisplay)
                dashboard.innerHTML=result
                currentDisplay = dashboard.innerHTML
            }           
        }else{
            const currentInput = e.target
            const last = currentDisplay.slice(-1)

            if( currentInput.innerText==='.'&& (currentDisplay.indexOf('.')>0)){
                // can not have 2 point
                dashboard.innerHTML=currentDisplay
            } else if(((!Boolean(Number(last))))&&currentInput.getAttribute('operation')&&(last!=='0')){
                //console.log(last)
                // if input 2 operator , the last one will replace the previous
                currentDisplay = currentDisplay.replace(/.$/,currentInput.innerText)
                dashboard.innerHTML=currentDisplay   
            } else if(currentDisplay?.slice(0,1)==='0'&& currentInput.innerText==='0'){
                // can not star with 2 zeros
                currentDisplay='0'
            }else{
                dashboard.innerHTML=currentDisplay += e.target.innerText
            }


        }                
        
    })


    
