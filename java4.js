
function logar(){
	var usuario = document.getElementById('user').value;
	var senha = document.getElementById('password').value;
	if(usuario=="admin"&& senha=="admin"){
		alert('sucesso');
		location.href ="http://localhost:3000/";
	}else{
		alert('user ou password incorretos!!');
	}
}
function criarconta(){
	
	location.href ="https://mail.google.com/mail/u/0/#inbox";
}

	
	$(document).ready(function() {
		var url = window.location.href;
		if(url.indexOf("/login")!==-1 ){
			$('#nav').css('display','none');
			$("#divParaAparecer").hide();
			$('#informacoes_adicionais').css('display','none');
			
		}else{
			console.log(" nao contem contem");
		}
	});

	
	