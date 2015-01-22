Template.grocery_list_task.events({
    "click .toggle-checked": function () {
        if ( _.isEmpty( groceries070.find({ _id: this._id }).fetch()  ) == false ){
            groceries070.update(this._id, {$set: {checked: ! this.checked}});
        }
        else if ( _.isEmpty( groceries020.find({ _id: this._id }).fetch()  ) == false ){
            groceries020.update(this._id, {$set: {checked: ! this.checked}});
        }
        else if ( _.isEmpty( groceriesQSA.find({ _id: this._id }).fetch()  ) == false ){
            groceriesQSA.update(this._id, {$set: {checked: ! this.checked}});
        }
    },
    "click .delete": function () {
        if( _.isEmpty( groceries020.find({ _id: this._id }).fetch() ) == false  ) {
            groceries020.remove(this._id);
        }
        else if( _.isEmpty( groceries070.find({ _id: this._id }).fetch() ) == false  ) {
            groceries070.remove(this._id);
        }
        else if( _.isEmpty( groceriesQSA.find({ _id: this._id }).fetch() ) == false  ) {
            groceriesQSA.remove(this._id);
        }
    }
});