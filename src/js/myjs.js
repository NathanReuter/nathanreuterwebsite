function setMyAge($) {
    var age = calculateBirthday(new Date('09/12/1992'));

    $('#myage').text(age);
}

function setReservedRights($) {
    $('#reserved-rights').text(new Date().getFullYear());
}

if ($) {
    $(window).load(function(){
        setMyAge($);
        setReservedRights($)
    });
}
