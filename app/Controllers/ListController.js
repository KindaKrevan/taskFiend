import {
  ProxyState
} from "../AppState.js"
import {
  newListForm
} from "../Components/NewListForm.js"

function _drawListItems() {
  let template = ''
  ProxyState
}

function _drawCreateListForm() {
  document.getElementById('modal-body-slot').innerHTML = newListForm();
}

export class ListController {
  constructor() {}
}