import { SignUp } from "../models.js";
window.onload = () => {

};
////////////REGISTER
document.querySelector('#btnSubmit').onclick = function () {
    let signup = new SignUp();
    //Lấy giá trị gender
    var arrgender = document.getElementsByName('gender');
    for (var i = 0; i < arrgender.length; i++) {
        if (arrgender[i].checked == true) {
            signup.gender = Boolean(arrgender[i].value);// Có thể ko cần là boolean
        }
    }

    var arrInput = document.querySelectorAll('#email,#password,#name,#phone');

    for (let input of arrInput) {
        let { id, value } = input;
        signup[id] = value;
    }
    console.log(signup);



    /// VẪN CÒN BỊ LỖI API
    var promise = axios({
        url: '/Users/signup',
        Method: 'POST',
        baseURL: 'https://shop.cyberlearn.vn/api',
        ResponseType: JSON,
        Data: signup,
        contentType: 'application/json',

    });
    promise.then(function (result) {
        console.log(result.data.content)
    });
    promise.catch(function (error) {
        console.log(error);
    })
}


