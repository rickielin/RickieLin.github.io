			
      function blurEventPsw() {
			    $("#mySpanPsw").html("");
        	    var isNumber = false, isStr = false, isOther = false;
        		var ipt = document.getElementById("psw");
        		var s = ipt.value;
       			 for(var i = 0; i < parseInt(ipt.value.length); i++){
         			 if (s.charAt(i) >='0' && s.charAt(i)<='9') {
          			  isNumber = true;
         				 }else if ((s.charAt(i)>='a' && s.charAt(i)<='z') || (s.charAt(i)>='A' && s.charAt(i)<='Z')) {
          				  isStr = true;
        					  }else{
        			    isOther = true;
         				 }
       				}
       			if(s.length==0){
       				$("#mySpanPsw").html("<br><span style='color:red'>请输入！</span>");
       			}else if (parseInt(ipt.value.length)<8) {
              $("#mySpanPsw").html("<br><span style='color:red'>密码长度必须大于8位！</span>");
            }else if(!(isOther&&isStr&&isNumber)){
          			$("#mySpanPsw").html("<br><span style='color:red'>请输入字符、数字和其他字符组成的密码！</span>");
            }
          }
        		

       		function blurEventRepsw() {
       			$("#mySpanRepsw").html("");
       			var password = $("#psw").val();
       			var repassword = $("#repsw").val();
       			if (password != repassword) {
       				$("#mySpanRepsw").html("<br><span style='color:red'>两次输入密码不一致！</span>");
       			}
       		} 
       		$("#res").click(function(){
       			$("#mySpanPsw").html("");
       			$("#mySpanRepsw").html("");
       		});
