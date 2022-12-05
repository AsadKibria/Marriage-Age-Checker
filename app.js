

// ======= Get elements
const marryForm = document.getElementById('marry_form');
const msg = document.querySelector('.msg');
const msgLong = document.getElementById('msg_long');

marryForm.onsubmit = (e) => {

    e.preventDefault(e)

    let name = marryForm.querySelector('input[name="name"]')
    let age = marryForm.querySelector('input[name="age"]')
    let gender = marryForm.querySelectorAll('input[name="gender"]')
   
    let genderName = '';
    gender.forEach((item) => {
            if (item.checked){
                    genderName = item.value;
                }
            })


    //Form validation
    if (name.value == ''|| age.value == ''||genderName == '') {
        msg.innerHTML = setAlert(`All fields ate required`);
    } else if (ageCheck(age.value) == false) {
        msg.innerHTML = setAlert('Invalid your age', 'warning');
    } else {
        msg.innerHTML = setAlert('Data stable', 'success');
    }

    //Marriage functions
    let marriageAge = genderName == 'Male' ? 21 : 18;
    
    if (genderName == 'Male') {
        if (age.value >= marriageAge) {
            msgLong.innerHTML = setAlert(`Congratulations ${name.value}, Viya your age is perfect for marry`, `success`) 
        } else {
            msgLong.innerHTML = setAlert(`Sorry ${name.value} dear brother your age isn't perfect for marry. you have to wait ${marriageAge - age.value}`, `warning`) 
            
        }
    } else if (genderName == 'Female') {
        if (age.value >= marriageAge) {
            msgLong.innerHTML = setAlert(`Congratulations ${name.value}! Apu your age is perfect for marry`, `success`) 
        } else {
            msgLong.innerHTML = setAlert(`Sorry ${name.value}! dear sister your age isn't perfect for marry. you have to wait ${marriageAge - age.value}`, `warning`) 
            
        }
    }
}