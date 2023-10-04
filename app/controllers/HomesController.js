import { AppState } from "../AppState.js";
import { homesService } from "../services/HomesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

function _drawHomes() {
  let contentHTML = '';
  AppState.houses.forEach(house => contentHTML += house.houseCard)
  setHTML('houseCards', contentHTML);
}

export class HomesController {
  constructor() {
    console.log('Homes Controller Loaded')
    AppState.on(AppState.houses, _drawHomes())
    // _drawHomes();
  }

  addHouse(event) { // form submission
    event.preventDefault();
    homesService.addHouse(getFormData(event.target));
    _drawHomes();
  }

  removeHouse(id) {
    homesService.removeHouse(id);
    _drawHomes();
  }
}