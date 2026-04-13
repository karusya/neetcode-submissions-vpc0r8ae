
const Vehicles = Object.freeze({
    CAR: "Car",
    BIKE: "Bike",
    TRUCK: "Truck"
});

class Vehicle {
    constructor() {
    this.type = "";
    }
    getType() {
        throw new Error('getType method must be overridden');
    }
}
class UnknownVehicle extends Vehicle {
  constructor() {
    super();
    this.type = null;
  }
  getType() {
    return null;
  }
}


class Car extends Vehicle {
constructor() {
    super();
    this.type = Vehicles.CAR;
  }
  getType() {
    return this.type;
  }
}

class Bike extends Vehicle {
constructor() {
    super();
    this.type = Vehicles.BIKE;
  }
  getType() {
    return this.type;
  }
}

class Truck extends Vehicle {
constructor() {
    super();
    this.type = Vehicles.TRUCK;
  }
  getType() {
    return this.type;
  }
}

class VehicleFactory {
    createVehicle() {
        throw new Error('createVehicle method must be overridden');
    }
}

class CarFactory extends VehicleFactory {
    createVehicle() {
        return new Car();
  }
}

class BikeFactory extends VehicleFactory {
createVehicle() {
    return new Bike();
  }
}

class TruckFactory extends VehicleFactory {
 createVehicle() {
    return new Truck();
  }
}
