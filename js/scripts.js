$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    var userName = $("#name").val();
    var userWebdesign = $("input:radio[name=webdesign]:checked").val();
    var userLargercompany = $("input:radio[name=largercompany]:checked").val();
    var userMicrosoft = $("input:radio[name=microsoft]:checked").val();
    var userStartup = $("input:radio[name=startup]:checked").val();
    var userLesscode = $("input:radio[name=lesscode]:checked").val();

    $(".username2").append(userName);

    if(userWebdesign==="yes"){
      $("#form").hide();
      $("#css").show();
    }else if( ((userLargercompany==="no"&&userMicrosoft==="no") && (userStartup==="yes"||userLesscode==="yes")) ||
    ((userLargercompany==="no"||usermicrosoft==="no") && (userStartup==="yes"&&userLesscode==="yes")) ){
      $("#form").hide();
      $("#ruby").toggle();
    }else if( ((userLargercompany==="yes"||userMicrosoft==="yes") && (userStartup==="no"&&userLesscode==="no")) ||
    ((userLargercompany==="yes"&&userMicrosoft==="yes") && (userStartup==="no"||userLesscode==="no")) ){
      $("#form").hide();
      $("#csharp").toggle();
    }else if(userLargercompany==="no" && userMicrosoft==="no" && userStartup==="no" && userLesscode==="no"){
      $("#form").hide();
      $("#none").toggle();
    }else if((userLargercompany==="yes" && userMicrosoft==="yes" && userStartup==="yes" && userLesscode==="yes") ||
    ((userLargercompany==="yes"||userMicrosoft==="yes") && (userStartup==="yes"||userLesscode==="yes")) ){
      $("#form").hide();
      $("#rubyOrCsharp").toggle();
    } else {
      alert("Fill out all the fields!");
    }
  });
});











// $(document).ready(function(){
//
//   $("#rsvpinfo").submit(function(event){
//   var name=$("input#name").val();
//   var date=$("input#date").val();
//   var description=$("input#description").val();
//   var startdate=$("input#startdate").val();
//   var starttime=$("input#starttime").val();
//
//   $(".name").append(name);
//   $(".date").append(date);
//   $(".description").append(description);
//   $(".startdate").append(startdate);
//   $(".starttime").append(starttime);
//
//   $(".message").show();
//   $(".form").hide();
//
//
//   event.preventDefault();
//   });
// });
