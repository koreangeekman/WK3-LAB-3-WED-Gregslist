import { AppState } from "../AppState.js";
import { House } from "../models/House.js";

class HomesService {
  constructor() {
    console.log('homes service')
  }

  addHouse(data) {
    AppState.houses.push(new House(data));
  }

  removeHouse(id) {
    AppState.houses.splice(AppState.houses.findIndex(house => house.id == id), 1)
  }
}

export const homesService = new HomesService();