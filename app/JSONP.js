function jsonp(url,callback,params){
    url+='?';
    if(params!==undefined && typeof(params)==="object"){
        for( key in params){
            url+=(key + '=' + params[key] + '&' )
        }
    }
    var fn = 'getData'+(new Date - 0);
    url+='callback='+ fn;
    var script = document.createElement('script');
    script.src=url;
    document.body.appendChild(script);
    window[fn]=function(data){
        callback(data);
        document.body.removeChild(script);
        delete window[fn];
    }
}