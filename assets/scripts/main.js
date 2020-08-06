

$('.body-boxes').click(function(e){
    console.log('Clicked', e.target);
    var id = e.target.textContent;
    id = id.toLowerCase();
    $('.body-boxes').css("background-color","blue");
    $('#'+id).css("background-color","darkblue");
    id = '#' + id + 'info';
    console.log(id);
    $('.box-info').hide();
    $(id).show();

});