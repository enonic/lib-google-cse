var lib = {
    http: require('/lib/xp/http-client'),
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

    var url = "https://www.googleapis.com/customsearch/v1"
    var sp = {
        key:    required(p, 'googleApiKey'),
        cx:     required(p, 'gssSearchEngineId'),
        q:      required(p, 'query')
    }

    if(isSet(p['alt']))         sp.alt          = p['alt'];
    if(isSet(p['callback']))    sp.callback     = p['callback'];
    if(isSet(p['fields']))      sp.fields       = p['fields'];
    if(isSet(p['prittyPrint'])) sp.prittyPrint  = p['prittyPrint'];
    if(isSet(p['quotaUser']))   sp.quotaUser    = p['quotaUser'];
    if(isSet(p['userIp']))      sp.userIp       = p['userIp'];

    var method = isSet(p['method']) ? p['method'] : "get";

    var r = lib.http.request({
        url: url,
        params: sp,
        method: method
    });

    return r;
}
