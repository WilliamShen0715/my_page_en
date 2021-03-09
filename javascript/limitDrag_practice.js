function limitDrag(id){
	Drag.call(this,id);  //繼承屬性
};

for(var i in Drag.prototype){
	limitDrag.prototype[i] = Drag.prototype[i];
}

limitDrag.prototype.fnMove= function(ev){
	var oEvent = ev||event;
	var l = oEvent.clientX - this.disX;
	var t = oEvent.clientY - this.disY;
	if(l<0) l=0;
	else if(l>document.documentElement.clientWidth-this.oDiv.disX){
		l=document.documentElement.clientWidth-this.oDiv.disX;
	}

	this.oDiv.style.left = l+'px';
	this.oDiv.style.top = t+'px';
};