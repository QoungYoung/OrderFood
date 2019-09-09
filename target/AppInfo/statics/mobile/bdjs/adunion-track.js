(function () {
    //设置cookie
    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    function delKey(str, key) {
        return (str || '').replace(new RegExp('(?:^|&)' + key + '=[^&=?]*', 'ig'), '');
    }



    function log(msg){
        window.console && console.log(msg);
    }

    function setCookie(cname, cvalue, exdays, domain, path){
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var kv = cname + "=" + cvalue
        var expires = "expires=" + d.toUTCString();
        var path = "path=" + path;
        var domain = "domain=" + domain;
        document.cookie = [kv, expires, domain, path].join(";");
    }

    function getCookie(key) {
        var mReg = new RegExp('(?:[\\s;]|^)' + key + '=([^=;]*)','i')
        var mm = mReg.exec(document.cookie)
        return mm && mm[1]
    }

    function getHCV(){
        var hcv = document.cookie.match(/_hc.v=([^;]+)/);
        if(!hcv){
            return null;
        }
        return hcv[1];
    }

    function generateHCV(){
        return guid() + '.' + Math.round(+new Date()/ 1000);
    }

    function setHCV(){
        var segments = document.domain.split(".");
        while(segments.length > 2){
            segments.shift();
        }
        var domain = "." + segments.join(".");
        var hcv = generateHCV();
        log('hippo:setHCV', hcv);
        setCookie("_hc.v", hcv, 365, domain, "/");
    }
    //测试代码
    function setuuid(){
        var segments = document.domain.split(".");
        while(segments.length > 2){
            segments.shift();
        }
        var domain = "." + segments.join(".");
        var hcv = '123456';
        log('hippo:setHCV', hcv);
        setCookie("iuuid", hcv, 365, domain, "/");
    }

    function getIuuid(){
        var iuuid = document.cookie.match(/iuuid=([^;]+)/);
        if(!iuuid){
            return null;
        }
        return iuuid[1];
    }

    function getQueryStringByName(name){
        //针对部分不支持location.search改为location.href
        var href = window.location.href;
        var param = href.split("?");
        var str = "";
        param.forEach(function(item,key){
            if(key > 0){
                str += "&"+item;
            }
        })
        var result = str.match(new RegExp("[?&]" + name + "=([^&]+)", "i"));
        if (result == null || result.length < 1) {
            return "";
        }
        return result[1];
    };

    function parseQueryString(str){
        var result = {}
        if(!str) return result
        var arr = str.split('&')
        arr.forEach(function(item){
            var kv = item.split('=')
            result[kv[0]] = kv[1]
        })
        return result
    }

    function stringifyQueryString(obj){
        if(!obj) return ''
        var arr = []
        for(var i in obj){
            arr.push(i + '=' + obj[i])
        }
        return arr.join('&')
    }

    function parseUrlUtm(str){
        if(!str) return {}
        var arr = str.split(',')
        var result = {}
        arr.forEach(function(item){
            var m = item.split(':')
            result[m[0]] = m[1]
        })
        return result
    }

    function owlLogStr(log){
        if (typeof Owl === 'object' && typeof Owl.addError === 'function'){
            try{
                Owl.addError({
                    name: 'MidasError',
                    msg: log
                });
            }catch(e){}
        }
    }

    function catchNetError(e){
        if(typeof e === 'object' && e.type === 'error' && e.target){
            owlLogStr('request error of the reach point: ' + e.target.src)
        }
    }
    
    function tryRun(fn){
        try{
            fn();
        }catch(e){
            owlLogStr('js error: ' + JSON.stringify({
                name: e.name || 'no value',
                message: e.message || 'no value',
                stack: e.stack || 'no value'
            }))
        }
    }

    function getReach() {
        // 打reach点
        var _fb_ = getQueryStringByName('_fb_');
        
        if(_fb_){
            var openid = getQueryStringByName('openid')
            var urlUtm = getQueryStringByName('utm')
            var cookieUtm = getCookie('_lx_utm')
            var utm = ''
            var utmMap 
            if (urlUtm) {
                utmMap = parseUrlUtm(decodeURIComponent(decodeURIComponent(urlUtm)))
                utm = stringifyQueryString(utmMap)
            } else if (cookieUtm) {
                utmMap = parseQueryString(cookieUtm)
                utm = stringifyQueryString(utmMap)
            }
            if (!utmMap) utmMap = {}
            
            var utm_source = getQueryStringByName('utm_source') || utmMap['utm_source']
            var utm_medium = getQueryStringByName('utm_medium') || utmMap['utm_medium']
            var utm_campaign = getQueryStringByName('utm_campaign') || utmMap['utm_campaign']
            var utm_content = getQueryStringByName('utm_content') || utmMap['utm_content']
            var utm_term = getQueryStringByName('utm_term') || utmMap['utm_term']
            
            var host = window.location.host;
            var url = '';
            var logUrl = '';
            if(host.indexOf('http://h5.dianping.com/app/adu-track/dianping.com') > -1){
                if(/^ppe/.test(host)){
                    url = 'https://mlog.51ping.com/log';
                }else{
                    url = 'https://mlog.dianping.com/log';
                }
            }else if(host.indexOf('http://h5.dianping.com/app/adu-track/meituan.com') > -1){
                if(/^test/.test(host)){
                    url = 'https://mlog.test.meituan.com/log';
                }else{
                    url = 'https://mlog.meituan.com/log';
                }
            }else{
                url = 'https://mlog.51ping.com/log';
            }

            if(/(%253d|%253D)/.test(_fb_)){
                _fb_ = decodeURIComponent(_fb_);
            }

            if(/^(http|https)/.test(_fb_)){
                logUrl = decodeURIComponent(_fb_);
            }else{
                logUrl = url + '?' + decodeURIComponent(_fb_);
            }
            logUrl = delKey(logUrl, 'act')
            logUrl = logUrl + '&act=4';
            
            if (openid){
                logUrl = logUrl + '&openid=' + openid;
            }
            // utm参数
            if (utm_source) {
                logUrl = logUrl + '&utm_source=' + utm_source;
            }

            if (utm_medium) {
                logUrl = logUrl + '&utm_medium=' + utm_medium;
            }

            if (utm_campaign) {
                logUrl = logUrl + '&utm_campaign=' + utm_campaign;
            }

            if (utm_content) {
                logUrl = logUrl + '&utm_content=' + utm_content;
            }

            if (utm_term) {
                logUrl = logUrl + '&utm_term=' + utm_term;
            }
            
            if (utm){
                logUrl = logUrl + '&utm=' + encodeURIComponent(utm);
            }

            if(getIuuid()){
                logUrl += '&iuuid='+getIuuid();
            }

            var image = new Image(1, 1);
            image.onload = image.onerror = function () {
                image = null;
            };
            image.src = logUrl;
        }
    }
    tryRun(function(){
        if (!getHCV()) {
            setHCV();
        }
        getReach();
    })
})()