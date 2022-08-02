import { SignUp } from "../models.js";
window.onload = () => { };

////////////REGISTER
document.querySelector('#btnSubmit').onclick = function () {
    let signup = new SignUp();
    //Lấy giá trị password confirm
    let passC = document.querySelector('#password-confirm').value;
    //Lấy giá trị gender
    var arrgender = document.getElementsByName('gender');
    for (var i = 0; i < arrgender.length; i++) {
        if (arrgender[i].checked == true) {
            signup.gender = arrgender[i].value;
        }
    }
    var arrInput = document.querySelectorAll('#email,#password,#name,#phone');

    for (let input of arrInput) {
        let { id, value } = input;
        signup[id] = value;
    }
    console.log(signup);

    //Validation
    var valid = true;

    //Kiểm tra rỗng
    valid &= kiemTraRong(signup.email, '#error_email', 'email ') & kiemTraRong(signup.password, '#error_password', 'password ') & kiemTraRong(passC, '#error_password-confirm', 'password confirm ') & kiemTraRong(signup.name, '#error_name', 'name ') & kiemTraRong(signup.phone, '#error_phone', 'phone ') & kiemTraRong(signup.gender, '#error_gender', 'gender ');
    //Kiểm tra pass
    valid &= kiemTraPass(signup.password, passC, '#error_password-confirm', 'password confirm ');
    //Kiểm tra email
    valid &= kiemTraEmail(signup.email, '#error_email', 'email');
    //Kiểm tra tất cả phải là ký tự (name)
    valid &= kiemTraTatCaKyTu(signup.name, '#error_name', 'name');
    //Kiểm tra tất cả phải là số (phone)
    valid &= kiemTraTatCaSo(signup.phone, '#error_phone', 'phone');
    //Kiểm tra biến cờ
    if (!!!valid) {
        return;
    }
    // if (signup.password != passC) {
    //     alert('Password và Password Confirm phải giống nhau')
    // }
    //Call API
    var promise = axios({
        url: '/Users/signup',
        method: 'POST',
        baseURL: 'https://shop.cyberlearn.vn/api',
        responseType: 'json',
        data: signup,
        contentType: 'application/json',

    });
    promise.then(function (result) {
        console.log(result)
        if (result.statusText == "Created") {
            alert("Đăng ký tài khoản thành công");
            return
        }
    });
    promise.catch(function (error) {
        console.log(error);
        if (error.message == "Request failed with status code 400") {
            alert('Email đã được sử dụng!');
            return
        }
    })









}


