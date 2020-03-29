var insideParts  = false;
var insideBuild = false;
var categoryClicked = false;
var partCategories = ["Mouse","2","3","4","5","6"];
var buildCategories = ["Physcic","2","3","4","5","6"];
var mainCategory;
var itemListstartCounter = 0;
var subCategoryCounter = 0;
function onMouseOver(id){
    if(id==1){
        document.getElementById("parts").style.width = "80%";
        document.getElementById("build").style.width = "20%";
        insideParts = true;
    }
    else if(id==2){
        document.getElementById("parts").style.width = "20%";
        document.getElementById("build").style.width = "80%";
        insideBuild = true;
    }
   
    SetWidthHeightPos(id,subCategoryCounter);
    createScrollButton(id);
    showHide(id);
}   

function onMouseOut(id){
    if(id==1){
        insideParts = false; 
    }
    else if(id==2){
        insideBuild = false; 
    }
    document.getElementById("parts").style.width = "50%";
    document.getElementById("build").style.width = "50%";
    //removeDiv("scroll");
}

function SetWidthHeightPos(id,startIndex){
    for(var i=0;i<2;i+=1){
        var subCategoryLeftDiv = document.createElement('div');
        if(i==0){
            subCategoryLeftDiv.id = "left";
            subCategoryLeftDiv.style.width = "40%";
            subCategoryLeftDiv.style.height = "90%";
            subCategoryLeftDiv.style.left = "8%";
            subCategoryLeftDiv.style.top = "5%";
            subCategoryLeftDiv.style.position = "absolute";
            subCategoryLeftDiv.addEventListener("click", cardClicked);
        }
        else{
            subCategoryLeftDiv.setAttribute("id","right");
            subCategoryLeftDiv.style.width = "40%";
            subCategoryLeftDiv.style.height = "90%";
            subCategoryLeftDiv.style.right = "8%";
            subCategoryLeftDiv.style.top = "5%";
            subCategoryLeftDiv.style.position = "absolute";
            subCategoryLeftDiv.addEventListener("click", cardClicked);
        }        
        
        if(id==1){
            subCategoryLeftDiv.classList.add("card_parts");
            subCategoryLeftDiv.innerHTML = partCategories[startIndex]; 
           document.getElementById('parts').appendChild(subCategoryLeftDiv);
        }
        else{
            subCategoryLeftDiv.classList.add("card_build"); 
            subCategoryLeftDiv.innerHTML = buildCategories[startIndex];          
            document.getElementById('build').appendChild(subCategoryLeftDiv);
        }
        startIndex+=1;
    }
}

function showHide(id){
    if(id==1){
        if(insideParts ==true){
           //showDiv("card_parts");
           removeDiv("card_build");
        }
    }
    else if(id==2){
        if(insideBuild ==true){
            removeDiv("card_parts");
           // showDiv("card_build");
        }
    }
    else if(id==0){
        if(insideParts==false && insideBuild==false){
            removeDiv("card_parts");
            removeDiv("card_build");
            if(categoryClicked==false){
                removeDiv("scroll");
            }
           
        }  
    }
}

function hideDiv(divName){
    var div_parts = document.getElementsByClassName(divName);
    for (var i = 0; i < div_parts.length; i = i + 1) {
        $(div_parts[i]).fadeOut("slow");
    }
}

function showDiv(divName){
    var divs_build = document.getElementsByClassName(divName);
    for (var i = 0; i < divs_build.length; i = i + 1) {
        $(divs_build[i]).fadeIn("slow");
        //attachClickEvent();
    } 
}

function removeDiv(divName){
    var div_parts = document.getElementsByClassName(divName);
    while(div_parts.length > 0){
        div_parts[0].parentNode.removeChild(div_parts[0]);
    }
}

function cardClicked(){
   hideDiv("parts_container");
   hideDiv("build_container");
   
   if(insideBuild == true){
       insideBuild = false;
       createSubCategories(1);
   }
   else if(insideParts == true){
       insideParts = false;
       createSubCategories(2);
   }
   categoryClicked = true;
  }

  function createSubCategories(id){
    var initialPos = 10;
    var categories;
    var divs_build;
    if(id==1){
        categories = partCategories;
        divs_build = document.getElementsByClassName("card_parts");
        mainCategory = "Build";
    }
    else if(id == 2){
        categories = buildCategories;
        divs_build = document.getElementsByClassName("card_build");
        mainCategory = "Parts";
    }
    for (var i = 0; i < divs_build.length; i = i + 1) {
        var subCategoryDiv = document.createElement('div');
        subCategoryDiv.innerHTML =  categories[i];
        subCategoryDiv.style.position = "absolute";
        subCategoryDiv.style.borderStyle = "solid";
        subCategoryDiv.style.borderColor = "black";
        subCategoryDiv.style.width = "5%";
        subCategoryDiv.style.height = "7%";
        subCategoryDiv.style.left = "2%";
        subCategoryDiv.style.top = initialPos + (i*10) + "%";
        subCategoryDiv.classList.add("subCategory"); 
        document.getElementsByTagName('body')[0].appendChild(subCategoryDiv);
    } 
    var subCategoryDiv = document.createElement('div');
    subCategoryDiv.innerHTML =  mainCategory;
    subCategoryDiv.id = mainCategory;
    subCategoryDiv.style.position = "absolute";
    subCategoryDiv.style.borderStyle = "solid";
    subCategoryDiv.style.borderColor = "black";
    subCategoryDiv.style.width = "5%";
    subCategoryDiv.style.height = "7%";
    subCategoryDiv.style.left = "2%";
    subCategoryDiv.style.top = "80%"; 
    subCategoryDiv.classList.add("subCategory");
    subCategoryDiv.addEventListener("click",MainCategoryClicked);
    document.getElementsByTagName('body')[0].appendChild(subCategoryDiv);

    createItemList(itemListstartCounter);
    createScrollButton(0);
  }

  function MainCategoryClicked(e){
    removeDiv("subCategory");
    removeDiv("singleItem")
    if(mainCategory == "Parts"){
        createSubCategories(1); 
    }
    else if(mainCategory == "Build"){
        createSubCategories(2); 
    }
    
  }

  var items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  function createItemList(startIndex){
    var startLeft = 2;
    var startTop = 2;
    var height = 42;
    var width = 45;

    for(var i =0 ;i<4; i +=1){
        var itemDiv  = document.createElement('div');
        itemDiv.innerHTML = items[startIndex];
        itemDiv.style.position = "absolute";
        itemDiv.style.borderColor = "black";
        itemDiv.style.borderStyle = "solid";
        itemDiv.style.height = height+"%";
        itemDiv.style.width = width+"%";
        if(i==0){
            itemDiv.style.left = "2%";
            itemDiv.style.top = "2%";
        }
        else if(i==1){
            itemDiv.style.left = "52%";
            itemDiv.style.top = "2%";
        }
        else if(i==2){
            itemDiv.style.left = "2%";
            itemDiv.style.top = "55%";
        }
        else{
            itemDiv.style.left = "52%";
            itemDiv.style.top = "55%";
        }
        itemDiv.classList.add("items")
        itemDiv.addEventListener("click",itemClicked);
        document.getElementById('content_container').appendChild(itemDiv);
        startIndex+=1;
    }
  }

  function itemClicked(){
    removeDiv("items");
    removeDiv("scroll");
    var imageItemDiv = document.createElement('div');
    imageItemDiv.innerHTML = event.srcElement.innerHTML;
    imageItemDiv.style.height = "80%";
    imageItemDiv.style.width = "48%";
    imageItemDiv.style.position = "absolute";
    imageItemDiv.style.left = "2%";
    imageItemDiv.style.top = "5%";
    imageItemDiv.style.borderColor = "black";
    imageItemDiv.style.borderStyle = "solid";
    imageItemDiv.classList.add("singleItem");

    var infoItemDiv  = document.createElement('div');
    infoItemDiv.style.height = "50%";
    infoItemDiv.style.width = "46%";
    infoItemDiv.style.left = "52%";
    infoItemDiv.style.top = "5%";
    infoItemDiv.style.position = "absolute";
    infoItemDiv.style.borderColor = "black";
    infoItemDiv.style.borderStyle = "solid";
    infoItemDiv.classList.add("singleItem");

    var infoSub1ItemDiv = document.createElement('div');
    infoSub1ItemDiv.style.height = "40%";
    infoSub1ItemDiv.style.width = "22%";
    infoSub1ItemDiv.style.left = "52%";
    infoSub1ItemDiv.style.top = "58%";
    infoSub1ItemDiv.style.position = "absolute";
    infoSub1ItemDiv.style.borderColor = "black";
    infoSub1ItemDiv.style.borderStyle = "solid";
    infoSub1ItemDiv.classList.add("singleItem");

    var infoSub2ItemDiv = document.createElement('div');
    infoSub2ItemDiv.style.height = "40%";
    infoSub2ItemDiv.style.width = "22%";
    infoSub2ItemDiv.style.left = "76%";
    infoSub2ItemDiv.style.top = "58%";
    infoSub2ItemDiv.style.position = "absolute";
    infoSub2ItemDiv.style.borderColor = "black";
    infoSub2ItemDiv.style.borderStyle = "solid";
    infoSub2ItemDiv.classList.add("singleItem");

    document.getElementById('content_container').appendChild(imageItemDiv);
    document.getElementById('content_container').appendChild(infoItemDiv);
    document.getElementById('content_container').appendChild(infoSub1ItemDiv);
    document.getElementById('content_container').appendChild(infoSub2ItemDiv);
  }

  function createScrollButton(id){
    var leftScrollButton  = document.createElement('div');
    leftScrollButton.style.height = "7%";
    leftScrollButton.style.width = "5%";
    leftScrollButton.style.left = "1%";
    leftScrollButton.style.top = "46%";
    leftScrollButton.style.position = "absolute";
    leftScrollButton.style.borderColor = "black";
    leftScrollButton.style.borderStyle = "solid";
    leftScrollButton.title = "left";
    leftScrollButton.classList.add("scroll");
    leftScrollButton.addEventListener("click",scrollButtonClicked);
   

    var rightScrollButton  = document.createElement('div');
    rightScrollButton.style.height = "7%";
    rightScrollButton.style.width = "5%";
    rightScrollButton.style.right = "1%";
    rightScrollButton.style.top = "46%";
    rightScrollButton.style.position = "absolute";
    rightScrollButton.style.borderColor = "black";
    rightScrollButton.style.borderStyle = "solid";
    rightScrollButton.title = "right";
    rightScrollButton.classList.add("scroll");
    rightScrollButton.addEventListener("click",scrollButtonClicked);

    if(id==0){
        document.getElementById('content_container').appendChild(leftScrollButton);
        document.getElementById('content_container').appendChild(rightScrollButton);
    }
    else{
        if(id==1){
            document.getElementById('parts').appendChild(leftScrollButton);
            document.getElementById('parts').appendChild(rightScrollButton);
        }
        else{
            document.getElementById('build').appendChild(leftScrollButton);
            document.getElementById('build').appendChild(rightScrollButton);
        }
        
    }
   
  }

  function scrollButtonClicked(){
    if(event.srcElement.title == "left"){
        if(categoryClicked==true){
            if(itemListstartCounter>=4){
                itemListstartCounter-=4;
                removeDiv("items");
                createItemList(itemListstartCounter);
            }
        }
        else{
            if(subCategoryCounter>=2){
                subCategoryCounter-=2;
                if(insideBuild ==true){
                    removeDiv("card_build");
                    SetWidthHeightPos(2,subCategoryCounter);
                }
                else{
                    removeDiv("card_parts");
                    SetWidthHeightPos(1,subCategoryCounter);
                }
            }
        }
      
    }
    else{
        if(categoryClicked==true){
            if(itemListstartCounter < items.length - 4){
                itemListstartCounter+=4;
                removeDiv("items");
                createItemList(itemListstartCounter);
            }
        }
        else{
            if(subCategoryCounter<partCategories.length-2){
                subCategoryCounter+=2;
                if(insideBuild ==true){
                    removeDiv("card_build");
                    SetWidthHeightPos(2,subCategoryCounter);
                }
                else{
                    removeDiv("card_parts");
                    SetWidthHeightPos(1,subCategoryCounter);
                }
            }
        }
    }
  }
  function reloadHomePage(){
    window.location.reload();
  }