var previousOpenId = "";

$(function(){
    $('.hostel-large-view .hostel-info').hide();
});

$('.hostel-large-view button').click(function(e){
    id = $(this).data("target");
    console.log(previousOpenId);
    $('.hostel-info').not(id).slideUp();
    console.log($(id).height());
    if($(id).height()>0 && id!=previousOpenId){
        previousOpenId = id;
        $(id).slideDown();
    }        
    else{
        previousOpenId = "";
        $(id).slideUp();
    }
        
    
    console.log(previousOpenId);
});