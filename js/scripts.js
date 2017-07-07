$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    var userwebdesign = $("input:radio[name=webdesign]:checked").val();
    var userlargercompany = $("input:radio[name=largercompany]:checked").val();
    var usermicrosoft = $("input:radio[name=microsoft]:checked").val();
    var userstartup = $("input:radio[name=startup]:checked").val();
    var userlesscode = $("input:radio[name=lesscode]:checked").val();

    if(userwebdesign==="yes"){
      $("#form").hide();
      $("#css").show();
    }else if(userlargercompany==="yes" && usermicrosoft==="yes" && userstartup==="yes" && userlesscode==="yes"){
      $("#form").hide();
      $("#rubyOrCsharp").toggle();
    }else if( (userlargercompany==="no"&&usermicrosoft==="no") && (userstartup==="yes"||userlesscode==="yes") ){
      $("#form").hide();
      $("#ruby").toggle();
    }else if( (userlargercompany==="yes"||usermicrosoft==="yes") && (userstartup==="no"&&userlesscode==="no") ){
      $("#form").hide();
      $("#csharp").toggle();
    }else if( (userlargercompany==="no"||usermicrosoft==="no") && (userstartup==="yes"&&userlesscode==="yes") ){
      $("#form").hide();
      $("#ruby").toggle();
    }else if( (userlargercompany==="yes"&&usermicrosoft==="yes") && (userstartup==="no"||userlesscode==="no") ){
      $("#form").hide();
      $("#csharp").toggle();
    }else if(userlargercompany==="no" && usermicrosoft==="no" && userstartup==="no" && userlesscode==="no"){
      $("#form").hide();
      $("#none").toggle();
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
