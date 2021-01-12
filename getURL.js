xmlhttp = new XMLHttpRequest()
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4) {
        var response = xmlhttp.responseText;
        console.log($("source", response)[0]["src"]);
        xmlhttp.open("GET", "iclass:");
        xmlhttp.send()
    }
};
xmlhttp.open("GET", "https://learn.inha.ac.kr/mod/vod/viewer.php?id=168732", false);
xmlhttp.send()