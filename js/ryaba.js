const dataURL = "https://api.myjson.com/bins/jcmhn";

function handleButton() {  
   $.getJSON(dataURL, function (rtext) {
   		handleData (rtext.text);	  
   });
 }

function handleData(data) {		
	const var1 = $("input[name=var1]").val();
	const var2 = $("input[name=var2]").val();
	const var3 = $("input[name=var3]").val();
	const var4 = $("input[name=var4]").val();
	const var5 = $("input[name=var5]").val();
	const var6 = $("input[name=var6]").val();
	const speach = $("input[name=speach]").val();
  	
	let FairyTale = "";
	data.forEach(
		function sumStr(currentValue) {
			let str = currentValue;
			str = str.replace(/{var1}/g, var1);
			str = str.replace(/{var2}/g, var2);
			str = str.replace(/{var3}/g, var3);
			str = str.replace(/{var4}/g, var4);
			str = str.replace(/{var5}/g, var5);
			str = str.replace(/{var6}/g, var6);
			str = str.replace(/{speach}/g, speach);
   			FairyTale = FairyTale + str + "<br>";
  		}
  	);  	  	
	$("#result").html(FairyTale);
}

function init() {	
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
