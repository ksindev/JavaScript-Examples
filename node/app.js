function greet(message) {
    console.log(">>"+message)
}

/*
function reverse(name) {
    return name.split('').reverse().join('');
}
*/
reverse = (name) => name.split('').reverse().join('');

//greet("Hello World");

function Phone(model) {
    this.model = model;
}

Phone.prototype.getModel = function() {
    return `${this.model}`;
}

function SmartPhone(model, os) {
    Phone.call(this, model);
    //private property of the class
    var os = os || 'Symbiosys';

    // This method is public and through this we can get 
    // the value of the private property os
    this.getOs = function() {
        return os;
    }
}

SmartPhone.prototype = Object.create(Phone.prototype);

var phone1 = new SmartPhone('Moto X Play', 'Android 7');

console.log(phone1.getOs());

console.log(reverse('Hindi'));