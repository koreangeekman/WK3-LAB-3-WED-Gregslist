
class HomesService {
  constructor(data) {
    console.log('homes service')
    this.type = data.type

  }

}

export const homesService = new HomesService();