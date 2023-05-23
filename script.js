let result = "";
let resultList = JSON.parse(localStorage.getItem("resultList"));

if (resultList == null) {
    resultList = [];
}

function calculate(){
    let first_im = parseFloat(document.getElementById("first").value);
    let second_im = parseFloat(document.getElementById("second").value);


    let select = document.querySelector("#operator").value;

    let operator = select;

    switch (operator) {
        case "+": result = first_im + second_im;
            
            break;
        case "-": result = first_im - second_im;
        
            break;
        case "*": result = first_im * second_im;
        
            break;
        case "/": result = first_im / second_im;
        
            break;
    
        default:
            break;
    };
    console.log(result);
    document.getElementById("resultInput").value = result;

    resultList.unshift({
        "result":result
    });

    if (resultList.length > 5) {
        resultList.pop();
    }

    localStorage.setItem("resultList",JSON.stringify(resultList));

    makeList();
    console.log(i);
}

if (resultList.length == 6) {
    resultList.shift();
}

console.log(resultList);

function makeList(){

    while (list.childNodes.length > 0) {
        list.removeChild(list.firstChild);
    }

    for (const one of resultList){
        let p = document.createElement("p");
    
        p.innerText = one.result;
    
        let list = document.getElementById("list");
        list.append(p);
    }
}
 makeList();

 if (i > 5) {
    localStorage.clear();
}






