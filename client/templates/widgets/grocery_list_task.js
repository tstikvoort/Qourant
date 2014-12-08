Template.grocery_list_task.events({
  "click .toggle-checked": function () {
    // Set the checked property to the opposite of its current value
    if ( _.isEmpty( Tasks070.find({ _id: this._id }).fetch()  ) == false ){
        Tasks070.update(this._id, {$set: {checked: ! this.checked}});
    }
    else if ( _.isEmpty( Tasks020.find({ _id: this._id }).fetch()  ) == false ){
        Tasks020.update(this._id, {$set: {checked: ! this.checked}});
    }
    else if ( _.isEmpty( TasksSF.find({ _id: this._id }).fetch()  ) == false ){
        TasksSF.update(this._id, {$set: {checked: ! this.checked}});
    };
  },
  "click .delete": function () {
    if( _.isEmpty( Tasks020.find({ _id: this._id }).fetch() ) == false  ) {
        Tasks020.remove(this._id);
    }
    else if( _.isEmpty( Tasks070.find({ _id: this._id }).fetch() ) == false  ) {
        Tasks070.remove(this._id);
    }
    else if( _.isEmpty( TasksSF.find({ _id: this._id }).fetch() ) == false  ) {
        TasksSF.remove(this._id);
    };
  }
});