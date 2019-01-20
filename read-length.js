function calculate(){
    var articles = document.getElementsByTagName("article");
    var d = [];
    if(articles.length == 0){
        d = Array.prototype.slice.call(document.getElementsByTagName("body"));
    } else {
        d = Array.prototype.slice.call(articles);
    }
    var string = "";
    var j = 0;
    while(j < d.length){
        string += getP(d[j]);
        j++;
    }
    // If we didn't get anything from the articles, let's try the document
    if(string.length == 0){
        string += getP(document);
    }
    console.log((browser.storage.sync.get("wpm")));
    browser.storage.sync.get("wpm").then(function(result){
        var wpm = result.wpm || 250; 
        var minuteNum = (string.split(" ").length/wpm).toFixed(1);
        console.log(minuteNum + " at " + wpm + " wpm");
        if(minuteNum > 2){
            var minutes = " ["+ minuteNum + " min]";
            document.title += minutes;
        }
    });
}

function getP(e){
    var elements = e.getElementsByTagName("p");
    var i = 0;
    var string = "";
    while(i < elements.length){
        string += elements.item(i).innerText + " ";
        i++;
    }
    return string
}

window.addEventListener('load', function () {
    calculate();
}, false);

