// **LC101 Unit3 slide.js to be used with pyramidslide.html

function slideFunction(value){
    document.getElementById("slider").innerHTML;
    document.getElementById("value").innerHTML = value;

}

function printPyramid() {
    var height = document.getElementById("height").value;
    var count = 0
    var spaces = height - 1
    var hashes = 2
    var str    = ""
    var pyram = ""

    // this grabs the height from html document
    var select = document.getElementById("symbol");
    var symb = select.options[select.selectedIndex].text;
    // element.onchange = handlerFunction;
    while (count<height){
        for(var number = spaces;  number>= 0;number--){
//        for(var number= 0;number <= spaces; number++)
            str = str + " ";
        }
        for (var number = 0; number<hashes; number++){
            str =str + symb;
        }
        pyram = pyram+"<br>"+str;
//       console.log(str)

        spaces = spaces - 1;
        hashes = hashes + 1;
        str = "";
        count++;

    }
    document.getElementById("buildPyramid").innerHTML= pyram ;
    }
