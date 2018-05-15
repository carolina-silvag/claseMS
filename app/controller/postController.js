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

exports.validateRut = function (req, res) {
  var rut = req.body.rut;
  var response = checkRut(rut);
  res.status(200).send(response);
}

function checkRut(rut) {
    // Despejar Puntos
    var valor = rut.replace(/\./g, '');
    // Despejar Guión
    valor = valor.replace('-', '');
    
    // Aislar Cuerpo y Dígito Verificador
    cuerpo = valor.slice(0,-1);
    dv = valor.slice(-1).toUpperCase();
    // Formatear RUN
    rut = cuerpo + '-'+ dv
    
    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if(cuerpo.length < 7) {
      return {
        valid : false,
        message : 'RUT Incompleto',
      }
    }

    // Si el cuerpo contiene caracteres que no son numeros
    if (/\D/.test(cuerpo)) {
      return {
        valid : false,
        message : 'RUT invalido cuerpo'
      }
    }

    // Si el digito verificador no es valido
    if ('1234567890K'.indexOf(dv) == -1) {
      return {
        valid : false,
        message : 'RUT invalido dv'
      }
    }
    
    // Calcular Dígito Verificador
    suma = 0;
    multiplo = 2;
    
    // Para cada dígito del Cuerpo
    for(i=1; i <= cuerpo.length; i++) {
    
        // Obtener su Producto con el Múltiplo Correspondiente
        index = multiplo * valor.charAt(cuerpo.length - i);
        
        // Sumar al Contador General
        suma = suma + index;
        
        // Consolidar Múltiplo dentro del rango [2,7]
        multiplo = multiplo < 7 ? multiplo + 1 : 2;
    }

    // Calcular Dígito Verificador en base al Módulo 11
    dvEsperado = 11 - (suma % 11);
    
    // Casos Especiales (0 y K)
    dv = (dv == 'K') ? 10 : dv;
    dv = (dv == 0) ? 11 : dv;
    
    // Validar que el Cuerpo coincide con su Dígito Verificador
    if(dvEsperado != dv) { 
      return {
        valid : false,
        message : 'RUT invalido'
      }
    }

    return {
      valid : true,
      message : 'Rut valido'
    }
}