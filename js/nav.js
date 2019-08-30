console.log(window.location.href);
function GetUrlRelativePath(){
	var url = window.location.href;
	var urlArray = url.split("/");
	return urlArray[urlArray.length-1].split("?")[0];
}
function exit(){
	localStorage.removeItem('fr_token');
	window.location.href="login.html";
}
console.log(GetUrlRelativePath());
var header=
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
								<span class="hidden-xs manager-name">'+localStorage.getItem('fina_name')+'</span>\
							</a>\
							<ul class="dropdown-menu">\
								<!-- User image -->\
								<li class="user-header">\
									<img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">\
									<p class="manager-name">'+localStorage.getItem('fina_name')+'</p>\
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

var menuData = JSON.parse(localStorage.getItem("fr_menu"));
var Nav ='<aside class="main-sidebar"><section class="sidebar"><ul class="sidebar-menu" data-widget="tree"><li class="treeview"><a href="#"><i class="fa fa-link"></i><span>'+'报账列表'+'</span><span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a><ul class="treeview-menu"><li class="li"><a href="expense.html">'+"报账列表"+'</a></li></ul></li>';

//console.log(fina_signlocalStorage.getItem("fina_sign"))
if(localStorage.getItem("fina_sign")==1||localStorage.getItem("fina_sign")==2){
	Nav +='<li class="treeview"><a href="#"><i class="fa fa-link"></i><span>'+'报表'+'</span><span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a><ul class="treeview-menu"><li class="li"><a href="home.html">'+"报表"+'</a></li></ul></li>'
	
	Nav +='<li class="treeview"><a href="#"><i class="fa fa-link"></i><span>'+'审核列表'+'</span><span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a><ul class="treeview-menu"><li class="li"><a href="check.html">'+"审核列表"+'</a></li></ul></li>';

	Nav +='<li class="treeview"><a href="#"><i class="fa fa-link"></i><span>'+'出纳'+'</span><span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a><ul class="treeview-menu"><li class="li"><a href="teller.html">'+"出纳"+'</a></li></ul></li>'


	

	Nav +='<li class="treeview"><a href="#"><i class="fa fa-link"></i><span>'+'系统设置'+'</span><span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a><ul class="treeview-menu"><li class="li"><a href="user.html">'+"用户管理"+'</a></li><li class="li"><a href="project.html">'+"项目管理"+'</a></li></ul></li>'
}
Nav +='</ul></section></aside>'
//items.url==GetUrlRelativePath()?(active="active"):(active="");


$(".wrapper").prepend(Nav);
//$(".li.active").parents(".treeview").addClass("menu-open active")

if($("#dataTable").length>0){
	$.fn.dataTable.ext.errMode = 'none';
}
