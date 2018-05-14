exports.test = function (req, res) {

  var js2xmlparser = require("js2xmlparser");
   var k = req.body.key;
   var obj = {
     'nombre': 'pedrito',
     'edad': '30',
     'color': 'negro',
     'pais': 'chile',
     'ciudad': 'valparaiso'
   }
   obj['keySalida'] = k;

   var xml = js2xmlparser.parse("test", obj);

   console.log(xml);

   res.status(200).send(xml);
}
    