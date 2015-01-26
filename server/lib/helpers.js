module.exports = function(i18n) {
        return {
	        t: function(i18n_key) {
	                var result = i18n.t(i18n_key);
	                // return new exphbs.SafeString(result);
	                return (i18n != undefined ? i18n.t(i18n_key) : i18n_key);
	            },
	        foo: function(){
	            return "foo!";
	        }
    	}
}