function myAjax(url,fnSucc,fnFaild){
				//1.new a ajax
				var oAjax = new XMLHttpRequest();
				//2.connect
				oAjax.open('GET',url+'?'+new Date().getTime(),true);
				//3.send request
				oAjax.send();
				//4.receive respond
				oAjax.onreadystatechange = function(){
					if(oAjax.readyState==4){ //ready
						//status
						if(oAjax.status==200){
							fnSucc(oAjax.responseText);
						}else{
							if(fnFaild){
								fnFail(oAjax.status);
							}
						}
					}
				};
				
			};