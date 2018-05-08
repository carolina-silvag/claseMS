exports.test = function (req, res) {
    var obj = {
        'nombre': 'juan',
        'edad': '20',
        'pais': 'Chile',
        'ciudad': 'Arica',
        'color': 'rojo'
    }
    
    res.status(200).send(obj);
}
