Accounts.validateNewUser(function (user) {
    if(user.services.google.email.match(/q42\.nl$/)) {
        return true;
    }
    // test accounts
    if(user.services.google.email.match(/tstikvoort@gmail.com$/)) {
        return true;
    }
    if(user.services.google.email.match(/meijerb90@gmail.com$/)) {
        return true;
    }
    if(user.services.google.email.match(/rosajuliagroot@gmail.com$/)) {
        return true;
    }
    if(user.services.google.email.match(/dimitri.glimworm@gmail.com$/)) {
        return true;
    }
    throw new Meteor.Error(403, "You must sign in using a @q42.nl account");
});