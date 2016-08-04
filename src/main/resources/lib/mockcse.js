var lib = {
    http: require('/lib/xp/http-client'),
    gu: require('gss-util'),
    io: require('/lib/xp/io')
}

function required(params, name) {
    var value = params[name];
    if (value === undefined) {
        throw "Parameter '" + name + "' is required";
    }

    return value;
}

function isSet(v) {
    return v !== null && typeof v !== 'undefined';
};


exports.search = function(p){

    var mockResponse = getMockResponse();
    return mockResponse;

}

function getMockResponse(){
    var response = {
        "status": 200,
        "message": "OK",
        body: readMockFile(),
        "contentType": "application/json; charset=UTF-8",
        "headers": {
            "Alt-Svc": "quic=\":443\"; ma=2592000; v=\"36,35,34,33,32,31,30,29,28,27,26,25\"",
            "Alternate-Protocol": "443:quic",
            "Cache-Control": "private, max-age=0, must-revalidate, no-transform",
            "Content-Length": "13409",
            "Content-Type": "application/json; charset=UTF-8",
            "Date": "Wed, 03 Aug 2016 11:02:37 GMT",
            "ETag": "\"ZK6WcJ2_cdL-1Kol5cpaPQsD0mI/tmfw9giRaJTiIOspX2ysHPkfymo\"",
            "Expires": "Wed, 03 Aug 2016 11:02:37 GMT",
            "Server": "GSE",
            "Vary": "X-Origin",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "SAMEORIGIN",
            "X-XSS-Protection": "1; mode=block"
        }
    }

    return response;
}

function readMockFile(){
    var resource = lib.io.getResource('/mockresponses/mock-success.json');
    var stream = resource.getStream();
    var text = lib.io.readText(stream);
    return text;

}
