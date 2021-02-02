'use strict';

const Homey = require('homey');

class LidlSmartHome extends Homey.App {
  async onInit() {
    this.log('Lidl Smart Home has been initialized');
  }
}

module.exports = LidlSmartHome;