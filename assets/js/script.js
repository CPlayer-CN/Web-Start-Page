var $ = mdui.JQ;
// 护眼模式
function time_range(beginTime, endTime) {
	var strb = beginTime.split(":");
	if (strb.length != 2) {
		return false
	}
	var stre = endTime.split(":");
	if (stre.length != 2) {
		return false
	}
	var b = new Date();
	var e = new Date();
	var n = new Date();
	b.setHours(strb[0]);
	b.setMinutes(strb[1]);
	e.setHours(stre[0]);
	e.setMinutes(stre[1]);
	if (n.getTime() - b.getTime() > 0 && n.getTime() - e.getTime() < 0) {
		return true
	} else {
		return false
	}
}
var inrange = false;
if (time_range("00:00", "07:30") || time_range("20:00", "23:59")) {
	inrange = true
}
if (inrange) {
	$(document).ready(function(){
		$('html body').addClass('mdui-theme-layout-dark');
		$('#sites .url').css('color','#fff');
		console.log('护眼模式启动')
	})
}