"use strict";

var Application = {
    
    messages: [],
    
    init:function(e) 
    {
    
    var sendButton = document.getElementById("sendbutton");
        
        sendButton.onclick = function() {
            
    var text = document.getElementById("input").value;
    var message = new Message (text, new Date());
    
    alert(message);
            

            Application.messages.push(message);
        };
    
    }
    
};

window.onload = Application.init;