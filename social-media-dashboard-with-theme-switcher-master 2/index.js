function changeTheme(){
    let elemts=document.getElementsByClassName("dark");
    let elemtsCard=document.getElementsByClassName("darkCard");
    let bottomCards=document.getElementsByClassName("darkBottomCard");
    let body=document.getElementsByClassName("body-dark");
    if(elemts.length==0)
    {
        elemts=document.getElementsByClassName("light");
        elemtsCard=document.getElementsByClassName("lightCard");
        bottomCards=document.getElementsByClassName("lightBottomCard");
        body=document.getElementsByClassName("body-light");
    }
    for(let i=0;i<elemts.length;i++)
    {
       if(elemts[i].classList.contains("dark")==true)
       {
            elemts[i].classList.add("light");
            elemts[i].classList.remove("dark");
            elemtsCard[i].classList.add("lightCard");
            elemtsCard[i].classList.remove("darkCard");
            bottomCards[i].classList.add("lightBottomCard");
            bottomCards[i].classList.remove("darkBottomCard");
            
       }
       else{
            elemts[i].classList.add("dark");
            elemts[i].classList.remove("light");
            elemtsCard[i].classList.add("darkCard");
            elemtsCard[i].classList.remove("lightCard");
            bottomCards[i].classList.add("darkBottomCard");
            bottomCards[i].classList.remove("lightBottomCard");
            
       }
    }
    if(body[0].classList.contains("body-dark")==true)
    {
        body[0].classList.add("body-light");
        body[0].classList.remove("body-dark");
    }
    else{
        body[0].classList.add("body-dark");
        body[0].classList.remove("body-light");
    }
}