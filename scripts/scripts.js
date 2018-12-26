//костыль для того, чтобы содержимое помещалось в .content
let content = document.getElementsByClassName('content')[0];
var resize = function() {
    content.style.height =
        document.getElementsByClassName('main-page')[0].scrollHeight+"px";
}
resize();
let basicHeight = content.style.height;