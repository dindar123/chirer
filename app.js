(function () {
  process.title = 'chernika';


  var model = require('./api/model');
  var api = require('./api/api');

  model.init();
  api.init();
})();
