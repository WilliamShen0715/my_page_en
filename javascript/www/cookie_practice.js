function setCookie(name,value,days){
			var oDate = new Date();
			oDate.setDate(oDate.getDate()+days);
			document.cookie = name+'='+value+';expires='+oDate;
		}
		function getCookie(name){
			var arr = document.cookie.split('; ');
			for(var i=0;i<arr.length;i++){
				var arr_ = arr[i].split('=');
				if(arr_[0]==name) return arr_[1];
			}
			return '';
		}
		function removeCookie(name){
			setCookie(name,0,-1);
		}