export function newListForm() {
  return `
  <form onsubmit="app.ListController.createNewList()">
    <div class="form-group">
      <input type="text" name="listName" class="form-control" placeholder="Name your list.." minlength="3"
        maxlength="15" />
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
        Close
      </button>
      <button class="btn btn-success">Create List</button>
    </div>
  /form>
    `;
}