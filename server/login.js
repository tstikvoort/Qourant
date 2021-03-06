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
    if(user.services.google.email.match(/tobias@wezz.nl$/)) {
        return true;
    }
    throw new Meteor.Error(403, "You must sign in using a @q42.nl account");
});
Accounts.onCreateUser(function(options, user) {
    options.profile.picture     =   user.services.google.picture;
    options.profile.given_name  =   user.services.google.given_name;
    options.profile.family_name =   user.services.google.family_name;
    options.profile.skills      =   [];
    user.profile = options.profile;
    return user;
});  