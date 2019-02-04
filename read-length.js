function calculate(){
    const string = getP(document);
    browser.storage.sync.get(["wpm", "min-length"]).then(function(result){
        const wpm = result.wpm || 250; 
        const minLength = result.minLength || 3; 
        const minuteNum = (string.split(" ").length/wpm).toFixed(1);
        console.log(`${minuteNum} min at ${wpm} wpm and minimim of ${minLength}`);
        if(minuteNum > minLength){
            document.title += ` [${minuteNum}  min]`;
        }
    }, error => console.log(error));
}

function getP(e){
    const elements = Array.prototype.slice.call(e.getElementsByTagName("p"));
    return elements.reduce((acc, element) => acc + element.innerText + " ");
}

window.addEventListener('load', function () {
    calculate();
}, false);

