var viewModel = function(){
var self = this;

self.text = ko.observable("");
self.exampleText = ko.observable("");
self.exampleText('&lt;html&gt; &lt;head&gt; &lt;script src="script.js"&gt;&lt;/script&gt; &lt;/head&gt; &lt;body&gt; &lt;h1&gt;Header&lt;/h1&gt; &lt;/body&gt; &lt;/html&gt;');
self.convert = function(){
    var text = quill.container.innerText;
    var newText = "";
    for(var x = 0; x < text.length; x++){
        if(text.charAt(x) == "<"){
            newText = newText + "&lt;"
        }
        else if(text.charAt(x) == ">"){
            newText = newText + "&gt;"
        }
        else if(text.charAt(x) == "&"){
            newText = newText + "&amp;"
        }
        else{
            newText = newText + text.charAt(x);
        }
    }
    debugger;
    display.insertText(0, newText);
    
    }
};
var vm = {};

$(function () {
    vm = new viewModel();
    ko.applyBindings(vm, document.getElementById("mainPage"));
});
