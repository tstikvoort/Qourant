var widgets = [
    {
        _id: 'E6WzX2BPZERhF6dQ6',
        type: 'photoGallery'
    },
    {
        _id: 'J3tQjxRi84uZ8TvhY',
        type: 'photoGallery'
    },
    {
        _id: 'qsGidow2YfJwggXnJ',
        type: 'knowYourCompany'
    },
    {
        _id: 'uvgDxQWeogSYdu68Z',
        type: 'knowYourCompany'
    },
    {
        type: 'calendar'
    },
    {
        type: 'funTask'
    },
    {
        type: 'skill_search'
    }, 
    {
         _id: 'Q6Nqqc0Hna20RnzYM',
        type: 'video'
       
    },
    {
        _id: 'SnFog1l7RmLZlONYY',
        type: 'video'
        
    },
    {
        _id: 'SeNaHAM64LmHYGvya',
        type: 'video'
    }
];
Meteor.subscribe("postComments");
Meteor.subscribe('knowYourCompany');
Meteor.subscribe('photoGalleries');
Template.qourant.helpers({
    leftWidgets: function() {
        var leftWidgets = [];
        widgets.forEach(function(widget,index){
            if(index % 2 == 1) leftWidgets.push(widget);
        });
        return leftWidgets;
    },
    rightWidgets: function() {
        var rightWidgets = [];
        widgets.forEach(function(widget,index){
            if(index % 2 == 0) rightWidgets.push(widget);
        });
        return rightWidgets;
    }
});