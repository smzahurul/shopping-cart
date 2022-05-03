function handelProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if (isIncrease === true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease === false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewCount * 1219;
    }
    if (product == 'case') {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = "$" + productTotal;
    totalCalculate()
}

function totalCalculate() {
    const phoneInput = document.getElementById("phone-count");
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);
    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById("total-price").innerText = "$" + totalPrice;

}

// Phone increase section:

// Same Work onclick Use:

// document.getElementById('phone-increase').addEventListener('click', function() {
//     ProductChange(true);
// });

// Phone decrease section:
// document.getElementById("phone-decrease").addEventListener('click', function() {
//     ProductChange(false);
// });



// Phone increase and decrease function section:
// function handelPhoneChange(isIncrease) {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     // const phoneNewCount = phoneCount - 1;
//     let phoneNewCount = phoneCount;
//     if (isIncrease === true) {
//         phoneNewCount = phoneCount + 1;
//     }
//     if (isIncrease === false && phoneCount > 0) {
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-total').innerText = "$" + phoneTotal;
// }

// Phone Case increase section:
// document.getElementById('case-increase').addEventListener('click', function() {
//     handleProductChange(true);
// })

// document.getElementById('case-decrease').addEventListener('click', function() {
//     handleProductChange(false);
// })

// Phone Case increase and decrease function section:
// function handleProductChange(isIncrease) {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     // const caseNewCount = caseCount + 1;
//     let caseNewCount = caseCount;
//     if (isIncrease === true) {
//         caseNewCount = caseCount + 1;
//     }
//     if (isIncrease == false && caseCount > 0) {
//         caseNewCount = caseCount - 1;
//     }

//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = "$" + caseTotal;
// }



// Same work this Code:==========================
// document.getElementById('case-increase').addEventListener('click', function() {
//         const caseInput = document.getElementById('case-count');
//         const caseCount = parseInt(caseInput.value);
//         const caseNewCount = caseCount + 1;
//         caseInput.value = caseNewCount;
//         const caseTotal = caseNewCount * 59;
//         document.getElementById('case-total').innerText = "$" + caseTotal;
//     });

// Phone Case decrease section:
// document.getElementById('case-decrease').addEventListener('click', function() {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = "$" + caseTotal;
// });