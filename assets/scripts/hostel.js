var previousOpenId = "";

$(function(){
    $('.hostel-large-view .hostel-info').hide();
});

$('.hostel-large-view button').click(function(e){
    id = $(this).data("target");
    // console.log(previousOpenId);
    if(previousOpenId!=="" && previousOpenId!==id)
    {
        $(previousOpenId).animate({
            height: 'hide'
        });
    }
    // console.log($(id).height());
    if($(id).height()>0 && id!=previousOpenId)
        previousOpenId = id;
    else
        previousOpenId = "";
    $(id).animate({
        height: 'toggle'
    });
    // console.log(previousOpenId);
});