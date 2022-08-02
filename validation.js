function kiemTraRong(value, selectorError, name) {
    if (value === '') {
        document.querySelector(selectorError).innerHTML = name + 'không được bỏ trống !'
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;
}
function kiemTraPass(pass, passC, selectorError, name) {
    if (pass != passC) {
        document.querySelector(selectorError).innerHTML = name + 'không trùng khớp với password !'
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;
}
function kiemTraTatCaKyTu(value, selectorError, name) {
    var regexLetter = /^[A-Z a-z]+$/;
    if (regexLetter.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' tất cả phải là ký tự !';
    return false;
}
function kiemTraTatCaSo(value, selectorError, name) {
    var regexAllNumber = /^[0-9]+$/;
    if (regexAllNumber.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' tất cả phải là số !'
    return false;
}
function kiemTraEmail(value, selectorError, name) {
    var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regexEmail.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' không đúng định dạng <br/> Ví dụ : email@gmail.com !';
    return false;
}