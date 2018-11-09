let ElectronicDevice = require("./ElectronicDevice");

class Phone extends ElectronicDevice {
    
    constructor(model, price, sim) {
        super(model, price);
        this.sim = sim;
    }

    getPhoneDetails() {
        return `${super.getDeviceInfo()}
            sim : ${this.sim}`;
            
    }
}

const myPhone = new Phone('Nokia 1110', 'Rs 999', 'Vodafone');

console.log(myPhone.getPhoneDetails());