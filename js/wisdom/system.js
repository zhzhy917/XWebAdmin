jQuery(function(){
	
	//显示隐藏菜单
	var showText='显示';
	var hideText='隐藏';
	// initialise the visibility check
	var is_visible = false;
	// append show/hide links to the element directly preceding the element with a class of "toggle"
	$('.toggle').prev().append(' <a href="#" class="toggleLink">'+hideText+'</a>');
	// hide all of the elements with a class of 'toggle'
	$('.toggle').show();
	// capture clicks on the toggle links
	$('a.toggleLink').click(function() {
		// switch visibility
		is_visible = !is_visible;
		// change the link text depending on whether the element is shown or hidden
		if ($(this).text()==showText) {
			$(this).text(hideText);
			$(this).parent().next('.toggle').slideDown('slow');
		}
		else {
			$(this).text(showText);
			$(this).parent().next('.toggle').slideUp('slow');
		}
		// return false so any link destination is not followed
		return false;
	});
	//end//显示隐藏菜单
	
	//When page loads...
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content
	
	//On Click Event
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});
	
	try{
		$('.wisdomForm').wisdomForm();
	}catch(error){}
	
	
	//搜索框的显示和隐藏
	$('article.module > header > a.headerCloseButton').hover(function(){
		$(this).addClass('ui-state-hover');
	},function(){
		$(this).removeClass('ui-state-hover');
	});
	/*
	$('article.module > header > a.headerCloseButton').toggle(function(){
			$(this).parent('header').next().transition({
				height: '0',
				margin:'0',
				overflow:'hidden',
				opacity: 0
			});
		},function(){
			$(this).parent('header').next().transition({
				height: 'auto',
				margin:'10px 20px',
				opacity: 1
			});
	});
	*/
	
	//日期控件
	try{
		$('input.DatePicker').DatePicker({
			date: $(this).val(),
			current: $(this).val(),
			starts: 1,
			position: 'r',
			onBeforeShow: function(){
				//$(this).DatePickerSetDate($(this).val(), true);
			},
			onChange: function(formated, dates,element){
				$(element).val(formated);
				//$(element).DatePickerHide();
			}	
		});
	}catch(error){}
	
	try{
	//退出按钮对话框
	$('#modelLogoutDialog').modal({
		backdrop:true,
		keyboard:true,
		show:false
	});
	}catch(error){}
	
	//控制列高
	$('.column').equalHeight();
});