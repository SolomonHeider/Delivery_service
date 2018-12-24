//костыль для того, чтобы содержимое помещалось в .content
let content = document.getElementsByClassName('content')[0];
var resize = function() {
 content.style.height =
     document.getElementsByClassName('main-page')[0].scrollHeight+"px";
}
var accordion=document.getElementsByClassName('accordion');
accordion[0].onclick = function (event)
{
    var target = event.target;
    var openedItem=accordion[0].querySelector('.open');
    if (target.tagName === 'DIV')
    {
        if (openedItem)
        {
            openedItem.classList.remove('open');
			content.style.height = basicHeight;
        }
        if (openedItem !== target.closest('li'))
        {
            target.closest('li').classList.add('open');
			resize();
        }
    }
    else
    {
        return;
    }
}
resize();
let basicHeight = content.style.height;