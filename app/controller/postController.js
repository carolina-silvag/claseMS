exports.test = function (req, res) {
    var obj = {
        'nombre': 'Pedrito',
        'edad': '30',
        'pais': 'Chile',
        'ciudad': 'Valparaiso',
        'color': 'Verde'
    }
    res.status(200).send(obj);
}
