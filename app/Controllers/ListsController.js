import {
  ProxyState
} from "../AppState.js"
import {
  newListForm
} from "../Components/NewListForm.js"

function _drawNewListForm() {
  document.getElementById('modal-body-slot').innerHTML = newListForm()
}

export class ListsController {
  constructor() { }
  
  drawNewListForm() {
    _drawNewListForm()
  }
}