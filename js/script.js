//custom js/jquery

//front end input data when submit button is clicked and then display the result
$(document).ready(function() {
	
	//front-end display the result on and off	
	$(".btn").click(function(event) {

    $("#result").show();

    $(".container").hide();

    $("#back").click(function() {
    	$("#result").hide();
    	$(".container").show();
    });
    event.preventDefault();
    
    //back-end logic creates var and takes input from form 
		var name = $("input#name").val();
		var favoriteFood = $("#food").val();
		var favoriteMusic = $("input#music").val();
		var favoriteColor = $("input#color").val();
		var birthday = $("input#date").val();
		var favoriteTeam = $("select#selectboxes").val();
		var girlType= $("input:radio[name=girl]:checked").val();

		$("#input1").text(name);
		$("#input2").text(favoriteFood);
		$("#input3").text(favoriteMusic);
		$("#input4").text(favoriteColor);
		$("#input5").text(birthday);
		$("#input6").text(favoriteTeam);
		$("#input7").text(girlType);


    
	});
});