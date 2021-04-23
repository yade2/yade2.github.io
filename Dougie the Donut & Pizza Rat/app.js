function getData() {
    let limit = document.getElementById("comNum").value;
    let borough = event.target.innerHTML.toUpperCase();


fetch("https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=" + borough + "&$limit=" + limit)
    .then((data) => data.json())
    .then((formattedData) => displayData(formattedData))
}



function displayData(data) {
   removeData();
   console.log(data)


/*Using a for loop will help to retrieve information
needed based on class/id/onclick*/
for(let i in data) {

    let done1 = document.getElementById("done");
    let node = document.createElement("p");
    let nodeA = document.createElement("p");
    let oneValue = data[i].descriptor;
    let resolution = data[i].resolution_description;

    let btn = document.createElement("button");
    btn.innerHTML = "response";
    btn.style.left = "800px";
    let clickIt = document.createAttribute("onclick");
    clickIt.value = "show()";
    btn.setAttributeNode(clickIt);
   
    
    node.innerHTML = oneValue;
    nodeA.innerHTML = resolution;
    done1.append(node);
    done1.append(btn);
    done1.append(nodeA);

    nodeA.hidden = true;

    }

}

function removeData() {
    let limit = document.getElementById("comNum").value;

    let done1 = document.getElementById("done");
    let thisDiv = done1.childNodes
        console.log(thisDiv)
    if(done1.hasChildNodes()) {
        
        for(let i = 0; i < limit; i++) {
            for(let y = 0; y < thisDiv.length; y++) {
                thisDiv[y].remove();
            }
        }
    }
}

function show() {
    x = event.target.nextSibling
    if(x.hidden == true) {
        x.hidden = false
    }else x.hidden = true
        console.log(x);
}

