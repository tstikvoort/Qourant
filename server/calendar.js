var accessToken = GoogleOAuthJWT.authenticate({
  email: '430023463627-otqg8tpek0c0dnk09kchj3mjv3p11nav@developer.gserviceaccount.com',
  key: Assets.getText('key.pem'),
  scopes: [
    'https://www.googleapis.com/auth/calendar.readonly'
  ]
});
HTTPJWT.setJWTOptions({
  email: '430023463627-otqg8tpek0c0dnk09kchj3mjv3p11nav@developer.gserviceaccount.com',
  key: Assets.getText('key.pem'),
  scopes: [
    'https://www.googleapis.com/auth/calendar.readonly'
  ]
});
var url = 'https://www.googleapis.com/calendar/v3/calendars/nj4eaego2fbiev706daett2r34@group.calendar.google.com/events';
var result = HTTPJWT.get(url);
var data = result.data.items;
if(data) {
    data.forEach(function(item) {
        item._id = item.id;
        if(!calendar.findOne(item._id)) {
            calendar.insert(item);
        }
    });
}