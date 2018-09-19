var viewModel = function(){
var self = this;

self.text = ko.observable("");
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
    self.text(newText);
    
    }
};



var vm = {};

$(function () {
    vm = new viewModel();
    ko.applyBindings(vm, document.getElementById("mainPage"));
});
