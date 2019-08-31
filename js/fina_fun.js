function order_type(type){//1收入 2支出
	var str="";
	if(type==1){
		str="收入";
	}else if(type==2){
		str="支出";
	}
	return str;
}
function user_type(type){
	var str="";
	if(type==1){
		str="管理员";
	}else if(type==2){
		str="出纳";
	}else if(type==3){
		str="报账人";
	}
	return str;
}
