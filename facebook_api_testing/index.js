const FB = require('fb');

FB.options({version: 'v11.0'});
FB.setAccessToken('EAANZABqYBZBUMBAGiB3H8aUPgGMk9ZCflOC8Oc5xaT1hUFe2vRfSyIgQ1gqSJyOtj48NzdCfrRNLIelmWIDmINn3MZCktunkNSSixTEXt0vmb2CZCUB4HZCoY2t6urzuUi3p28L996Rt9zz3ACe1srnCoAukeGQjDvCvQaPdB4ajZBKKghizDCZAD2nrTFI3jcO1ggXzHfC8eXmlGcgoQnZC3F9kT8G1haVkvVoAZAZAp3txWRFpka0Fstx');
 

FB.api('/me/posts', function (res) {
    if(!res || res.error) {
     console.log(!res ? 'error occurred' : res.error);
     return;
    }
    console.log(res);
    console.log(res.name);
  });