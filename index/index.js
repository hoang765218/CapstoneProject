//CAll API INDEX PAGES
import { Shoe } from "../models.js";
window.onload = () => {
    GetProduct()

};

const GetProduct = () => { // Lấy sản phẩm
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
        responseType: JSON,
    });
    promise.then(function (result) {
        renderProductList(result.data.content);
    });
    promise.catch(function (error) {
        console.log(error)
    });
}
function renderProductList(arrShoe) {//Truyền vào một mảng các object shoe
    let html = '';
    for (let index = 0; index < arrShoe.length; index++) {

        let shoe = arrShoe[index];
        let div = `<div class="col-wrap col">
                        <div class="card item-1">
                                <img src="${shoe.image}" alt="..." />
                            <div class="card-body">
                                 <h2 class="product-name">${shoe.name}</h2>
                                    <p class="product-desc">${shoe.shortDescription}</p>
                                <div class="buy-price-wrap ">
                                    <button class="btn-buy col">Buy now</button>
                                    <p class="product-price col">${shoe.price}$</p>
                                </div>

                            </div>
                        </div>
                    </div>`;
        html += div;
    }
    document.querySelector('#productList').innerHTML = html;
}







