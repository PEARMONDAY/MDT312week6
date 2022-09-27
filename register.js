window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
	form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
     var pass = document.getElementById("password")
     var repass = document.getElementById("confirm_password")
     if(pass.value == repass.value)
     {
        alert("SUCCESS");
     }
     else
     {
        alert("ERROR");
         return false;
     }

}