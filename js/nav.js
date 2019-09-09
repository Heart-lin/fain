console.log(window.location.href);

function GetUrlRelativePath() {
	var url = window.location.href;
	var urlArray = url.split("/");
	return urlArray[urlArray.length - 1].split("?")[0];
}

function exit() {
	localStorage.removeItem('fr_token');
	window.location.href = "login.html";
}

//头部生成
var header =
	'<header class="main-header">\
    	<a href="index2.html" class="logo">\
      		<span class="logo-mini"><b></b>财务系统</span>\
      		<span class="logo-lg"><b></b>财务系统</span>\
    	</a>\
    	<nav class="navbar navbar-static-top">\
      	<!-- Sidebar toggle button-->\
      		<a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">\
        		<span class="sr-only">Toggle navigation</span>\
      		</a>\
      		<div class="navbar-custom-menu">\
       	 		<ul class="nav navbar-nav">\
          			<li class="dropdown user user-menu">\
						<a href=" " class="dropdown-toggle" data-toggle="dropdown">\
							<img src="dist/img/user2-160x160.jpg" class="user-image" alt="User Image">\
							<span class="hidden-xs manager-name">' + localStorage.getItem('fina_name') + '</span>\
						</a>\
						<ul class="dropdown-menu">\
							<!-- User image -->\
							<li class="user-header">\
								<img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">\
								<p class="manager-name">' + localStorage.getItem('fina_name') + '</p>\
							</li>\
							<!-- Menu Footer-->\
							<li class="user-footer">\
								<div class="pull-right">\
									<a href="#" class="btn btn-default btn-flat" onclick="exit()">退出登录</a>\
								</div>\
							</li>\
						</ul>\
					</li>\
        		</ul>\
      		</div>\
    	</nav>\
  	</header>'
$(".wrapper").prepend(header);


var menu={};
if(localStorage.getItem("fina_sign")==1){
	menu = {
		"财务流程": [{
			"name": "报账明细",
			"pageId": 5,
			"url": "finance_details.html"
		},
		{
			"name": "待审核收入",
			"pageId": 6,
			"url": "finance_in.html"
		}, 
		{
			"name": "待审核支出",
			"pageId": 7,
			"url": "finance_expense.html"
		}],
	}
}else if(localStorage.getItem("fina_sign")==2){
	menu = {
		"收支明细": [{
			"name": "收支明细",
			"pageId": 2,
			"url": "inAndOut_details.html"
		},
		{
			"name": "收入列表",
			"pageId": 3,
			"url": "inAndOut_in.html"
		},
		{
			"name": "支出列表",
			"pageId": 4,
			"url": "inAndOut_expense.html"
		}],
		"财务流程": [
		{
			"name": "报账明细",
			"pageId": 5,
			"url": "finance_details.html"
		},
		{
			"name": "待审核收入",
			"pageId": 6,
			"url": "finance_in.html"
		}, 
		{
			"name": "待审核支出",
			"pageId": 7,
			"url": "finance_expense.html"
		}],
	}
}else if(localStorage.getItem("fina_sign")==3){
	menu = {
		"数据统计": [{
			"name": "数据统计",
			"pageId": 1,
			"url": "home.html"
		}],
		"收支明细": [{
			"name": "收支明细",
			"pageId": 2,
			"url": "inAndOut_details.html"
		},
		{
			"name": "收入列表",
			"pageId": 3,
			"url": "inAndOut_in.html"
		},
		{
			"name": "支出列表",
			"pageId": 4,
			"url": "inAndOut_expense.html"
		}],
		"财务流程": [
		{
			"name": "报账明细",
			"pageId": 5,
			"url": "finance_details.html"
		},
		{
			"name": "待审核收入",
			"pageId": 6,
			"url": "finance_in.html"
		}, 
		{
			"name": "待审核支出",
			"pageId": 7,
			"url": "finance_expense.html"
		}, 
		{
			"name": "出纳",
			"pageId": 8,
			"url": "finance_inout.html"
		}],
		"系统设置": [{
			"name": "账户管理",
			"pageId": 9,
			"url": "system_user.html"
		}, 
		{
			"name": "权限管理",
			"pageId": 10,
			"url": "system_power.html"
		}, 
		{
			"name": "币种管理",
			"pageId": 11,
			"url": "system_coin.html"
		},
		{
			"name": "项目管理",
			"pageId": 12,
			"url": "system_project.html"
		}]
	}
}




//nav的遍历
var Nav ='<aside class="main-sidebar"><section class="sidebar"><ul class="sidebar-menu" data-widget="tree">';
$.each(menu, function(index , item) {
	Nav+='<li class="treeview"><a href="#"><i class="fa fa-link"></i><span>'+index+'</span><span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a><ul class="treeview-menu">'
	$.each(item,function(index,items){
		var active = "";
		items.url==GetUrlRelativePath()?(active="active"):(active="");
		Nav+='<li class="'+ active +' li"><a href="'+items.url+'" pageId="'+items.pageId+'">'+items.name+'</a></li>'
	})
	Nav+='</ul></li>'
});

Nav += '</ul></section></aside>';
$(".wrapper").prepend(Nav);
$(".li.active").parents(".treeview").addClass("menu-open active")

if($("#dataTable").length > 0) {
	$.fn.dataTable.ext.errMode = 'none';
}
$("body").on('click', '.logout', function() {
	$.ajax({
		type: "post",
		url: url + "login/logout.html",
		success: function(res) {
			if(res.code == 1) {
				window.location.href = "login.html";
			} else {
				alert(res.msg);
			}
		}
	})
	login / logout.html
})