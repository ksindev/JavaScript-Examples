module.exports = class ElectronicDevice {
    
    constructor(deviceModel, price) {
        this.deviceModel = deviceModel;
        this.price = price;
    }

    getDeviceInfo() {
        return `model name : ${this.deviceModel}
        price : ${this.price}`;
    }
}