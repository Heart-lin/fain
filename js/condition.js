$(function() {
	$.ajax({
		type: 'post',
		url: url + "project/lst.html",
		success: function(res) {
			var data1 = eval('(' + res.msg + ')');
			$("[name=p_id]").append("<option>请选择</option>")
			$.each(data1.data, function(index, item) {
				$("[name=p_id]").append("<option value=" + item.id + ">" + item.pro_name + "</option>")
			})
		}
	})

	$.ajax({
		type: 'post',
		url: url + "currency/lst.html ",
		success: function(res) {
			var data1 = eval('(' + res.msg + ')');
			$("[name=currency_id]").append("<option value=''>请选择</option>")
			$.each(data1.data, function(index, item) {
				$("[name=currency_id]").append("<option value=" + item.id + ">" + item.currency_name + "</option>")
			})
		}
	})

	function p_id(_this, value) {
		_this.parents(".modal").find("[name=t_id]").prop("disabled", "disabled")
		$.ajax({
			type: "post",
			url: url + "type/type_pid.html",
			data: {
				id: _this.val(),
			},
			success: function(res) {
				_this.parents(".parents").find("[name=t_id]").empty()
				if(res.msg) {
					console.log(_this.parents(".parents").find("[name=t_id]"))
					_this.parents(".parents").find("[name=t_id]").append("<option value=''>请选择</option>")
					$.each(eval("(" + res.msg + ")"), function(index, item) {
						_this.parents(".parents").find("[name=t_id]").append("<option value=" + item.id + ">" + item.type_name + "</option>")
					})
					// 编辑
					if(value) {
						_this.parents(".parents").find("[name=t_id]").val(value);
					}
				} else {
					_this.parents(".parents").find("[name=t_id]").append("<option>项目类型为空</option>")
				}

				_this.parents(".parents").find("[name=t_id]").prop("disabled", false)
			}
		})
	}

	$("[name=p_id]").change(function() {
		var _this = $(this)
		p_id(_this)
	})
	
	$('#startTime').datepicker({
		autoclose: true,
		format: "YYYY-MM-DD"
	})
	$('#endTime').datepicker({
		autoclose: true,
		format: "YYYY-MM-DD"
	})

	$("#search").click(function() {
		table.ajax.reload();
	})
})