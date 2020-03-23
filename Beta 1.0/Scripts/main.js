var insideParts  = false;
var insideBuild = false;
var partCategories = ["Mouse","2","3","4","5","6"];
var buildCategories = ["Physcic","2","3","4","5","6"];
var mainCategory;
function onMouseOver(id){
    if(id==1){
        document.getElementById("parts").style.width = "79.5%";
        document.getElementById("build").style.width = "19.5%";
        insideParts = true;
    }
    else if(id==2){
        document.getElementById("parts").style.width = "19.5%";
        document.getElementById("build").style.width = "79.5%";
        insideBuild = true;
    }
    showHide(id);
    SetWidthHeightPos(id);
}   

function onMouseOut(id){
    if(id==1){
        insideParts = false; 
    }
    else if(id==2){
        insideBuild = false; 
    }
    document.getElementById("parts").style.width = "49.5%";
    document.getElementById("build").style.width = "49.5%";
}

function SetWidthHeightPos(id){
    if(id==1){
        document.getElementById("parts_card_1").style.width = "20%";
        document.getElementById("parts_card_1").style.height = "20%";
        document.getElementById("parts_card_1").style.left = "7%";
        document.getElementById("parts_card_1").style.top = "5%";
        document.getElementById("parts_card_1").style.position = "absolute";
        document.getElementById("parts_card_1").addEventListener("click", cardClicked);

        document.getElementById("parts_card_2").style.width = "20%";
        document.getElementById("parts_card_2").style.height = "20%";
        document.getElementById("parts_card_2").style.left = "35%";
        document.getElementById("parts_card_2").style.top = "5%";
        document.getElementById("parts_card_2").style.position = "absolute";
        document.getElementById("parts_card_2").addEventListener("click", cardClicked);

        document.getElementById("parts_card_3").style.width = "20%";
        document.getElementById("parts_card_3").style.height = "20%";
        document.getElementById("parts_card_3").style.left = "62%";
        document.getElementById("parts_card_3").style.top = "5%";
        document.getElementById("parts_card_3").style.position = "absolute";
        document.getElementById("parts_card_3").addEventListener("click", cardClicked);

        document.getElementById("parts_card_4").style.width = "20%";
        document.getElementById("parts_card_4").style.height = "20%";
        document.getElementById("parts_card_4").style.left = "7%";
        document.getElementById("parts_card_4").style.top = "45%";
        document.getElementById("parts_card_4").style.position = "absolute";
        document.getElementById("parts_card_4").addEventListener("click", cardClicked);

        document.getElementById("parts_card_5").style.width = "20%";
        document.getElementById("parts_card_5").style.height = "20%";
        document.getElementById("parts_card_5").style.left = "35%";
        document.getElementById("parts_card_5").style.top = "45%";
        document.getElementById("parts_card_5").style.position = "absolute";
        document.getElementById("parts_card_5").addEventListener("click", cardClicked);

        document.getElementById("parts_card_6").style.width = "20%";
        document.getElementById("parts_card_6").style.height = "20%";
        document.getElementById("parts_card_6").style.left = "62%";
        document.getElementById("parts_card_6").style.top = "45%";
        document.getElementById("parts_card_6").style.position = "absolute";
        document.getElementById("parts_card_6").addEventListener("click", cardClicked);
    }
    else{
        document.getElementById("build_card_1").style.width = "20%";
        document.getElementById("build_card_1").style.height = "20%";
        document.getElementById("build_card_1").style.left = "7%";
        document.getElementById("build_card_1").style.top = "5%";
        document.getElementById("build_card_1").style.position = "absolute";
        document.getElementById("build_card_1").addEventListener("click", cardClicked);

        document.getElementById("build_card_2").style.width = "20%";
        document.getElementById("build_card_2").style.height = "20%";
        document.getElementById("build_card_2").style.left = "35%";
        document.getElementById("build_card_2").style.top = "5%";
        document.getElementById("build_card_2").style.position = "absolute";
        document.getElementById("build_card_2").addEventListener("click", cardClicked);

        document.getElementById("build_card_3").style.width = "20%";
        document.getElementById("build_card_3").style.height = "20%";
        document.getElementById("build_card_3").style.left = "62%";
        document.getElementById("build_card_3").style.top = "5%";
        document.getElementById("build_card_3").style.position = "absolute";
        document.getElementById("build_card_3").addEventListener("click", cardClicked);

        document.getElementById("build_card_4").style.width = "20%";
        document.getElementById("build_card_4").style.height = "20%";
        document.getElementById("build_card_4").style.left = "7%";
        document.getElementById("build_card_4").style.top = "45%";
        document.getElementById("build_card_4").style.position = "absolute";
        document.getElementById("build_card_4").addEventListener("click", cardClicked);

        document.getElementById("build_card_5").style.width = "20%";
        document.getElementById("build_card_5").style.height = "20%";
        document.getElementById("build_card_5").style.left = "35%";
        document.getElementById("build_card_5").style.top = "45%";
        document.getElementById("build_card_5").style.position = "absolute";
        document.getElementById("build_card_5").addEventListener("click", cardClicked);

        document.getElementById("build_card_6").style.width = "20%";
        document.getElementById("build_card_6").style.height = "20%";
        document.getElementById("build_card_6").style.left = "62%";
        document.getElementById("build_card_6").style.top = "45%";
        document.getElementById("build_card_6").style.position = "absolute";
        document.getElementById("build_card_6").addEventListener("click", cardClicked);
    }
}

function showHide(id){
    if(id==1){
        if(insideParts ==true){
           showDiv("card_parts");
           hideDiv("card_build");
        }
    }
    else if(id==2){
        if(insideBuild ==true){
            hideDiv("card_parts");
            showDiv("card_build");
        }
    }
    else if(id==0){
        if(insideParts==false && insideBuild==false){
            hideDiv("card_parts");
            hideDiv("card_build");
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

function cardClicked(e){
  
    //get the element that is clicked
    var ele = e.target;
    
    //get the element id of the element that is clicked
    var eleId = ele.id;
    
    //add the class using the increment operator
    ele.className += " clicked";
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
  }

  function MainCategoryClicked(e){
    if(mainCategory == "Parts"){
        removeDiv("subCategory");
        createSubCategories(1); 
    }
    else if(mainCategory == "Build"){
        removeDiv("subCategory");
        createSubCategories(2); 
    }
  }
//window.onload = attachClickEvent;