window.onload=function(){
	/**
	 * 帮助选项列表
	 */
	var help = document.getElementById('help');
	var help_option = document.getElementById('help_option');
	var Li = help_option.getElementsByTagName('li');
	var helpName = help.className;
	var left = help.offsetLeft;
	help.style.left = left+'px';
	help.onmouseover = over;
	help.onmouseout = out;
	help_option.onmouseover = over;
	help_option.onmouseout = out;
	
	function over(){
		helpName = helpName + ' active';
		help_option.style.left = left + 'px';
		
	}
	
	function out(){
		helpName = helpName;
		help_option.style.left = -10000+'px';
	}
	
	for (var i = 0; i < Li.length; i++) {
			Li[i].onmouseover = function(){
				this.style.background = '#f4f8fc';
			}
			Li[i].onmouseout = function(){
				this.style.background = 'none';
			}
		}
	
	
	/**
	 * 搜索选项列表
	 */
	var s_bar = document.getElementById('s_bar');
	var s_item = document.getElementById('s_item');
	var ul = s_item.getElementsByTagName('ul')[0];
	var span = s_item.getElementsByTagName('span')[0];
	var li = ul.getElementsByTagName('li');
	var BarClass = s_bar.className;
	var ItemClass = s_item.className;
	
	s_bar.onmouseover = function(){
		s_bar.className = s_bar.className + ' active';
		
	}
	s_bar.onmouseout = function(){
		s_bar.className = BarClass;
	}
	s_item.onmouseover = function(){
		s_item.className = s_item.className + ' change_bj';
		ul.style.display = 'block';
	}
	s_item.onmouseout = function(){
		s_item.className = ItemClass;
		ul.style.display = 'none';
	}
	
	for(var i = 0; i < li.length; i++){
		li[i].onmouseover = function(){
			this.className = 'chenge';
		}
		li[i].onmouseout = function(){
			this.className = '';
		}
		li[i].onclick = function(){
			span.innerHTML = this.innerHTML;
			s_item.className = ItemClass;
			s_bar.className = BarClass;
			ul.style.display = 'none';
			
		}
	}
	
	
	
	
	
	
	
	
	
}





