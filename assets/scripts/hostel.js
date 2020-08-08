
$(function(){
    $('.hostel-large-view .hostel-info').hide();
});

$('.hostel-large-view button').click(function(e){
    id = $(this).data("target");
    id = '.hostel-large-view '+id;
    $('.hostel-large-view .hostel-info').not(id).hide();
    // console.log($(id));
    $(id).toggle()
});