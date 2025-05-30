$(document).ready(function(){
	$("#form1").submit(function(){ 
		event.preventDefault();
		$.post("/signup2", $("#form1").serialize(), function(res)
			{ 
				js=res;
				if(js.err==1)
				$("#err").html("<div class=\"alert alert-danger\">This username exists</div>");
				else
				$("#err").html("<div class=\"alert alert-success\">Your data saved!</div>");
			}
		
		
		);
	
		
	
	});
	
	$("#form3").submit(function(){
		event.preventDefault();
		$.post("/updateadmin", $("#form3").serialize(), function(res)
			{
				js=res;
				if(js.err==1)
				$("#err").html("<div class=\"alert alert-danger\">This username exists</div>");
				else
				$("#err").html("<div class=\"alert alert-success\">Your data saved!</div>");
			}
		
		
		);
	
		
	
	});
	
	
	$("#form4").submit(function(){
		event.preventDefault();
		$.post("/updateadmin2", $("#form4").serialize(), function(res)
			{
				js=res;
				if(js.err==1)
				$("#err1").html("<div class=\"alert alert-danger\">This username exists</div>");

				else
				$("#err1").html("<div class=\"alert alert-success\">Your data saved!</div>");
			}
		
		
		);
	
		
	
	});
	
	
	
	
	
	
	/// Categories
	
		$("#formcat").submit(function(){
		event.preventDefault();
		$.post("/newcat", $("#formcat").serialize(), function(res)

			{
				js=res;
				if(js.err==1)
				$("#err").html("<div class=\"alert alert-danger\">This Category exists</div>");				
				else
				$("#err").html("<div class=\"alert alert-success\">Your data saved!</div>");
			}
		
		
		);
	
		
	
	});
	
	$("#formcat2").submit(function(){
		event.preventDefault();
		$.post("/updatecat", $("#formcat2").serialize(), function(res)
			{
				js=res;
				if(js.err==1)
				{
				$("#err1").html("<div class=\"alert alert-danger\">This category exists</div>");
				}
				else
				{
				$("#err1").html("<div class=\"alert alert-success\">Your action done!</div>");
				}
			}
		
		
		);
	
		
	
	});
	
	
	
	/// Materials
	
		$("#formmat").submit(function(){
		event.preventDefault();
		$.post("/newmat", $("#formmat").serialize(), function(res)
			{
				js=res;
				if(js.err==1)
				{
				$("#err").html("<div class=\"alert alert-danger\">This Material exists</div>");
				}
				else
				{
				$("#err").html("<div class=\"alert alert-success\">Your data saved!</div>");
				}
			}
		
		
		);
	
		
	
	});
	
	$("#formmat2").submit(function(){
		event.preventDefault();
		$.post("/updatemat", $("#formmat2").serialize(), function(res)
			{
				js=res;
				if(js.err==1)
				{
				$("#err1").html("<div class=\"alert alert-danger\">This Material exists</div>");
				}
				else
				{
				$("#err1").html("<div class=\"alert alert-success\">Your action done!</div>");
				}
			}
		
		
		);
	
		
	
	});
	
	
	
	
	/// products
	
	$("#formprd").submit(function(){
		event.preventDefault();
		$.post("/newprd", $("#formprd").serialize(), function(res)
			{
				js=res;
				if(js.err==1)
				{
				$("#err").html("<div class=\"alert alert-danger\">This Products exists</div>");
				}
				else
				{
				$("#err").html("<div class=\"alert alert-success\">Your data saved!</div>");
				}
			}
		
		
		);
	
		
	
	});
	
	$("#formprd2").submit(function(){
		event.preventDefault();
		$.post("/updateprd", $("#formprd2").serialize(), function(res)
			{
				js=res;
				if(js.err==1)
				{
				$("#err1").html("<div class=\"alert alert-danger\">This Material exists</div>");
				}
				else
				{
				$("#err1").html("<div class=\"alert alert-success\">Your action done!</div>");
				}
			}
		
		
		);
	
		
	
	});
	
	
	$("#formprdmat").submit(function(){
		event.preventDefault();
		$.post("/newprdmat", $("#formprdmat").serialize(), function(res)
			{
				js=res;
				getPrdMat();
			}
		
		
		);
	
		
	
	});
	
	
	$("#formaddsale").submit(function(){
		event.preventDefault();
		$.post("/newsale", $("#formaddsale").serialize(), function(res)
			{
				js=res;
				if(js.err==1)
				{
				$("#err").html("<div class=\"alert alert-danger\">Data not saved !!</div>");
				}
				else
				{
				$("#err").html("<div class=\"alert alert-success\">Your action done!</div>");
				}
			}

		
		
		);
	
		
	
	});
	
	
	$("#formaddorder").submit(function(){
		event.preventDefault();
		$.post("/neworder", $("#formaddorder").serialize(), function(res)
			{
				js=res;
				if(js.err==1)
				{
				$("#err").html("<div class=\"alert alert-danger\">Data not saved !!</div>");
				}
				else
				{
				$("#err").html("<div class=\"alert alert-success\">Your action done!</div>");
				}
			}
		
		
		);
	
		
	
	});
	



});
