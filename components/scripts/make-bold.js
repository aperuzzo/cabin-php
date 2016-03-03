
//the function below was leveraged from http://www.gotoquiz.com/web-coding/programming/javascript/highlight-words-in-text-with-jquery/
// this function finds specific strings, wraps them in a div with a specified class
jQuery.fn.bold = function (str, className) {
    var regex = new RegExp(str, "gi");
    return this.each(function () {
        jQuery(this).contents().filter(function() {
            return this.nodeType == 3 && regex.test(this.nodeValue);
        }).replaceWith(function() {
            return (this.nodeValue || "").replace(regex, function(match) {
                return "<span class=\"" + className + "\">" + match + "</span>";
            });
        });
    });
};