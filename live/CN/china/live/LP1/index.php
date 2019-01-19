<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <title></title>
    <script src="javascript/zepto.min.js"></script>
    <script src="javascript/base64.min.js"></script>
</head>
<body>
<script>
    function b64DecodeUnicode(str) {
        return decodeURIComponent(atob(str).split('').map(function(c) { return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }
    $.ajax({
        type: 'GET',
        url: "source.php", cache: false, data:{
            v:getQueryString("v")
        },
        success: function(data) {
            var doc = document.open('text/html', 'replace'); var dat = b64DecodeUnicode(data); doc.write(dat);
            doc.close();
        },
        error: function() {
        }
    });
    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'); var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }
</script>
</body>
</html>