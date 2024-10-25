// www/SunmiPrinter.js
const exec = require('cordova/exec');

let SunmiPrinter = {
    initPrinter: function(success, error) {
        exec(success, error, 'SunmiPrinter', 'initPrinter', []);
    },
    printText: function(text, success, error) {
        exec(success, error, 'SunmiPrinter', 'printText', [text]);
    },
    getPrinterStatus: function(success, error) {
        exec(success, error, 'SunmiPrinter', 'getPrinterStatus', []);
    },
    // Add other methods as needed
};

module.exports = SunmiPrinter;