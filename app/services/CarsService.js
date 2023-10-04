
class CarsService {
  constructor(data) {
    console.log('cars service')
    this.type = data.type

  }

}

export const carsService = new CarsService();