"use strict";

var messageApp = {
    
    messages: [],
    
    init:function() 
    {
        
    var sendButton = document.getElementById("sendButton");
    var textArea = document.getElementById("input");
    
    sendButton.onclick = function(e) {
        messageApp.createMessage(textArea);
        e.preventDefault();
    };
        
        textArea.onkeypress = function(e){
        if(e.keyCode == 13 && !e.shiftKey){
            messageApp.createMessage(textArea);
            e.preventDefault();
            }
            
        };

    },
    
    createMessage: function() {
        
        var message = document.getElementById("input").value;
        var mess;
        
        
        if (message === "") {
            alert ("Du skrev inget!");
        }
        
        else if (message !== "") {
            
            mess = new Message(message, new Date());
            messageApp.messages.push(mess);
            messageApp.renderMessages(messageApp.messages[messageApp.messages.length]);
            
        }
        
    },
    
    renderMessages: function() {

    document.getElementById("messages").innerHTML = "";
    var textArea = document.getElementById("textArea");

    for (var i = 0; i < messageApp.messages.length; ++i){
            messageApp.renderMessage(i);
            textArea = document.getElementById("input").value;
        }
            messageApp.countMessages(i);
    },
    
    
    countMessages: function(count) {
        var counter;
        var counterText;
        
        counter = count-1;
        counter++;
        
        counterText;
        counterText = document.getElementById("counter").innerHTML = "Messages: " + counter;
        
    },
    
    renderMessage: function(messageID) {

        var messId;
        var messDiv;
        var messDelete;
        var messDeleteA;
        var messTime;
        var messTimeA;
        var text;
        var date;
        var icon;
        
        messId = document.getElementById("messages");
        
        messDiv = document.createElement("div");
        messDiv.className = "message";
        
        text = document.createElement("p");
        text.className = "messagetext";
        text.innerHTML = messageApp.messages[messageID].getHTMLText();
        
        date = document.createElement("footer");
        date.className = "datetext";
        date.innerHTML = messageApp.messages[messageID].getDateText();
        
        icon = document.createElement("div");
        icon.className = "icons";
        
        messDelete = document.createElement("img");
        messDelete.className = "messagedelete";
        messDelete.setAttribute("src", "icons/IconDelete.png");
        messDelete.setAttribute("alt", "Delete button");
        
        messDeleteA = document.createElement("a");
        messDeleteA.setAttribute("href", "#");
        
        messDelete.setAttribute("width", "17");
        messDelete.setAttribute("height", "17");
        
        messTime = document.createElement("img");
        messTime.className = "messagetime";
        messTime.setAttribute("src", "icons/IconTime.png");
        messTime.setAttribute("alt", "Time button");
        
        messTimeA = document.createElement("a");
        messTimeA.setAttribute("href", "#");
        
        messTime.setAttribute("width", "17");
        messTime.setAttribute("height", "17");
        
        icon.appendChild(messDeleteA);
        icon.appendChild(messTimeA);
        
        messId.appendChild(messDiv);
        messId.appendChild(text);
        messId.appendChild(date);
        messId.appendChild(icon);
        
        messDeleteA.appendChild(messDelete);
        messTimeA.appendChild(messTime);
        
        
        
        messDeleteA.onclick = function() {
            messageApp.messDeleteNow(messageID);
        };
        
        messTimeA.onclick = function() {
            messageApp.messTimeNow(messageID);
        };
    },
    
    messDeleteNow: function(messageID) {
        var windowConfirm = confirm("Delete this message?");
        
        if (windowConfirm === true) {
            messageApp.messages.splice(messageID, 1);
            messageApp.renderMessages();
        }
        
    },
    
    
    messTimeNow: function(messageID) {
        var months;
        var monthGet;
        var month;
        var print;
        
        months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
        monthGet = messageApp.messages[messageID].getDate().getMonth();
        month = months[monthGet];
        print = messageApp.messages[messageID].getDate();
        alert("Inlägget skapades den " + print.getDate() + " " + month + " " + print.getFullYear() + " klockan " + messageApp.messages[messageID].getDateText());
        },
        
    };

        



window.onload = messageApp.init;