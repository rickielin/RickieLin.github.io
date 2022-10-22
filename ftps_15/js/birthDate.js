    var i = 0; var oddFlag = 0;
	var mouth = ["m1","m3","m5","m7","m8","m10","m12"];
	for(i = 2020; i > 1900; i--){
		$("#selectYear").append("<option value='y"+i+"'>"+i+"</option>");
	}
	for (i = 1; i < 13; i++) {
		$("#selectMouth").append("<option value='m"+i+"'>"+i+"</option>");
	}
	for (i = 1; i < 29; i++) {
		$("#selectDay").append("<option value='d"+i+"'>"+i+"</option>");
	}
	$("#selectMouth").blur(function(){
		$("#selectDay").empty();
		for (i = 1; i < 29; i++) {
			$("#selectDay").append("<option value='d"+i+"'>"+i+"</option>");
		}
		var selectMouth = $('#selectMouth').val();
		var selectYear = $('#selectYear').val();
		for(i = 0; i < 7; i++){
			if(mouth[i] == selectMouth){
				oddFlag = 1;
					break;
			}
		}
		if (oddFlag != 1) {
			if (selectMouth != "m2") {
				$("#selectDay").append("<option value='d"+29+"'>"+29+"</option>");
				$("#selectDay").append("<option value='d"+30+"'>"+30+"</option>");
			}else{
				var year = parseInt(selectYear.substring(1));
				if((year%400==0)||(year%4==0&&year%100!=0)){
				    $("#selectDay").append("<option value='d"+29+"'>"+29+"</option>");
				}
			}
		}else{
				$("#selectDay").append("<option value='d"+29+"'>"+29+"</option>");
				$("#selectDay").append("<option value='d"+30+"'>"+30+"</option>");
				$("#selectDay").append("<option value='d"+31+"'>"+31+"</option>");
		}
		oddFlag = 0;
	});