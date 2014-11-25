function Message(message, date) {
    
    this.getText = function() {
        return message;
    }
    
    this.setText = function(_text) {
        message = _text;
    }
    
    this.getDate = function() {
        return date;
    }
    
    this.setDate = function(_date) {
        date = _date
    }
    
    Messsage.prototype.toString = function() {
        return this.getText()+" ("+this.getDate()+")";
    }
    
    Messsage.prototype.getHTMLText = function() {
    
    }
        
    Messsage.prototype.getDateText = function() {
    
    };
    
}
