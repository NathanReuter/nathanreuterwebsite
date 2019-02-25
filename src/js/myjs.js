function calculateBirthday(birthday) {
    var ageDifMs = Date.now() - birthday.getTime(),
        ageDate = new Date(ageDifMs);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


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
