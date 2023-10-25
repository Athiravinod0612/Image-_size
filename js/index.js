widthPx = () =>
{
    if(document.getElementById("boxWidthPer").value =="")
    { 
    
         document.getElementById("img").style.width = document.getElementById("boxWidthPx").value + "px";
    }
    else
    alert('only can take px or %');
}

widthPer = () =>
{  
    if(document.getElementById("boxWidthPx").value =="")
    { 
    document.getElementById("img").style.width = document.getElementById("boxWidthPer").value + "%";
    }
    else
    alert('only can take px or % ');

}
heightPx =() =>
{
    if(document.getElementById("boxHeightPer").value =="")
    { 
    document.getElementById("img").style.height = document.getElementById("boxHeightPx").value + "px"; 
    }
    
    else
    alert('only can take px or % ');
}
heightPer = () =>
{

    if(document.getElementById("boxHeightPx").value =="")
    { 
    document.getElementById("img").style.height = document.getElementById("boxHeightPer").value + "%"; 
    }
    
    else
    alert('only can take px or % ');}


linkUrl = () =>
{ 
    if (checkBox.checked == 1)
    {
    let link =  document.getElementById("url").value;
    window. open(link);
    } else {
    let link =  document.getElementById("url").value;
    window.open(link, target="_self");
   }
}



