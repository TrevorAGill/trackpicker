$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    var userName = $("#name").val();
    var userWebdesign = $("input:radio[name=webdesign]:checked").val();
    var userLargercompany = $("input:radio[name=largercompany]:checked").val();
    var userMicrosoft = $("input:radio[name=microsoft]:checked").val();
    var userStartup = $("input:radio[name=startup]:checked").val();
    var userLesscode = $("input:radio[name=lesscode]:checked").val();


    if(userWebdesign==="yes" && userName!=="" && userLargercompany!=="" && userMicrosoft!=="" && userStartup!=="" && userLesscode!=="") {
      $("#form").hide();
      $(".results-header").show();
      $("#css").show();
      var languageresult = "CSS/Design";
    } else if( (((userLargercompany==="no"&&userMicrosoft==="no") && (userStartup==="yes"||userLesscode==="yes")) || ((userLargercompany==="no"||userMicrosoft==="no") && (userStartup==="yes"&&userLesscode==="yes"))) && userName!=="") {
      $("#form").hide();
      $(".results-header").show();
      $("#ruby").show();
      var languageresult = "Ruby/Rails";
    } else if( (((userLargercompany==="yes"||userMicrosoft==="yes") && (userStartup==="no"&&userLesscode==="no")) || ((userLargercompany==="yes"&&userMicrosoft==="yes") && (userStartup==="no"||userLesscode==="no"))) && userName!=="") {
      $("#form").hide();
      $(".results-header").show();
      $("#csharp").show();
      var languageresult = "C#/.NET";
    } else if(userLargercompany==="no" && userMicrosoft==="no" && userStartup==="no" && userLesscode==="no" && userName!=="") {
      $("#form").hide();
      $(".results-header").show();
      $("#none").show();
      var languageresult = "astronomy";
    } else if( ((userLargercompany==="yes" && userMicrosoft==="yes" && userStartup==="yes" && userLesscode==="yes") || ((userLargercompany==="yes"||userMicrosoft==="yes") && (userStartup==="yes"||userLesscode==="yes"))) && userName!=="") {
      $("#form").hide();
      $(".results-header").show();
      $("#rubyOrCsharp").show();
      var languageresult = "Ruby/Rails or C#/.NET";
    } else {
      alert("Fill out all the fields!");
    }

    $(".username2").append(userName);
    $(".languageresult").append(languageresult);
  });

  $(".csharpimg").click(function(){
    $("#csharpinfo").fadeIn();
    $("#csharpinfo2").fadeIn();
  });
  $("#cssimg").click(function(){
    $("#cssinfo").fadeIn();
  });
  $(".rubyimg").click(function(){
    $("#rubyinfo").fadeIn();
    $("#rubyinfo2").fadeIn();
  });
});
