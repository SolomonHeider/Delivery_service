var accordion=document.getElementsByClassName('accordion');
for(var i=0;i<accordion.length;i++){
	accordion[i].onclick = function (event)
	{
		var target = event.target;
		var openedItem=document.querySelector('.open');
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
}
