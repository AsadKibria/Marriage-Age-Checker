/**
 * Alert function
 */

 const setAlert = (smg, type = 'danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${smg} <button data-bs-dismiss="alert" class=" btn-close"></button> </p>`;
}


/**
 * Email check
 */

const emailCheck = (email) => {
    let pattern = /^[a-z0-9\._]{1,}@[a-z]{1,}\.[a-z]{1,4}$/;
    return pattern.test(email);
}

/**
 * BD Phone number check
 */

// const phoneCheck = (phone) => {
//     // let pattern = /^(01|8801|\+8801){9}$/;
//     let pattern = /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/;
//     return pattern.test(phone);

// }


/**
 * Age checker
 */

const ageCheck = (ag) => {
    let pattern = /^[0-9]{1,3}$/;
    return pattern.test(ag);
}