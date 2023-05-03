let flag_pageone = 1;
let flag_pagetwo = 0;
let flag_pagethree = 0;
let flag_pagefour = 0;

let successful_input1 = 0;

let arcade_flag = 0;
let advanced_flag = 0;
let pro_flag = 0;
let checkbox_flag = 1;

let firstaddon_flag = 2;
let secondaddon_flag = 2;
let thirdaddon_flag = 2;

let namee = document.querySelector(".name-input");
let email = document.querySelector(".email-input");
let phone = document.querySelector(".phone-input");

let arcade = document.querySelector(".arcade");
let advanced = document.querySelector(".advanced");
let pro = document.querySelector(".pro");
let monthly_payment_p = document.getElementsByClassName("monthly-payment-p")
let checkbox = document.querySelector(".the-checkbox");
let monthly_checkbox = document.querySelector(".monthly-checkbox");
let yearly_checkbox = document.querySelector(".yearly-checkbox");   //querySelector only selects the first element with that class name
let yearly_p = document.getElementsByClassName("yearly-p-info");    // getElementsByClassName makes yearly_p into a string, where it stores all elements with yearly-p-info class name 

let firstaddonv = document.querySelector(".firstaddon");
let secondaddonv = document.querySelector(".secondaddon");
let thirdaddonv = document.querySelector(".thirdaddon");
let addon_price = document.getElementsByClassName("addon-price");

let plan_selected = document.querySelector(".planselected");
let plan_price = document.querySelector(".planprice");
let hr = document.querySelector(".hr");
let onlineservice = document.querySelector(".onlineservice");
let onlineservice_price = document.querySelector(".onlineservice-price");
let largerstorage= document.querySelector(".largerstorage");
let largerstorage_price= document.querySelector(".largerstorage-price");
let cprofile = document.querySelector(".cprofile");
let cprofile_price= document.querySelector(".cprofile-price");
let total_price= document.querySelector(".total-price");
let total_p = document.querySelector(".total-p");

let total = 0;


// check which page is selected
function check(){
    if(flag_pageone==1){
        document.querySelector(".pageone").style.display = "block";
        document.querySelector(".pagetwo").style.display = "none";
        document.querySelector(".pagethree").style.display = "none";
        document.querySelector(".pagefour").style.display = "none";
    }
    if(flag_pagetwo==1){
        document.querySelector(".pageone").style.display = "none";
        document.querySelector(".pagetwo").style.display = "block";
        document.querySelector(".pagethree").style.display = "none";
        document.querySelector(".pagefour").style.display = "none";
    }
    if(flag_pagethree==1){
        document.querySelector(".pageone").style.display = "none";
        document.querySelector(".pagetwo").style.display = "none";
        document.querySelector(".pagethree").style.display = "block";
        document.querySelector(".pagefour").style.display = "none";
    }
    if(flag_pagefour==1){
        document.querySelector(".pageone").style.display = "none";
        document.querySelector(".pagetwo").style.display = "none";
        document.querySelector(".pagethree").style.display = "none";
        document.querySelector(".pagefour").style.display = "block";
    }
}


// resets empty input error
function reset_name_error(){
    document.querySelector(".name-error").style.display="none";
    document.querySelector(".name-input").style.border="1px solid hsl(243, 100%, 62%)";
    document.querySelector(".email-input").style.border="1px solid hsl(229, 24%, 87%)";
    document.querySelector(".phone-input").style.border="1px solid hsl(229, 24%, 87%)";
}
function reset_email_error(){
    document.querySelector(".email-error").style.display="none";
    document.querySelector(".email-input").style.border="1px solid hsl(243, 100%, 62%)";
    document.querySelector(".name-input").style.border="1px solid hsl(229, 24%, 87%)";
    document.querySelector(".phone-input").style.border="1px solid hsl(229, 24%, 87%)";
    
}
function reset_phone_error(){
    document.querySelector(".phone-error").style.display="none";
    document.querySelector(".phone-input").style.border="1px solid hsl(243, 100%, 62%)";
    document.querySelector(".name-input").style.border="1px solid hsl(229, 24%, 87%)";
    document.querySelector(".email-input").style.border="1px solid hsl(229, 24%, 87%)";

    
}
// what happens when page one is clicked
function clickone(){

    flag_pageone = 1;
    flag_pagetwo = 0;
    flag_pagethree = 0;
    flag_pagefour = 0;
    check();
}
// check if email valid function (thank you stackoverflow)
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
//   function isPhone(phone) {
//     var regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
//     return regex.test(phone);
//   }

// what happens when page two is clicked
function clicktwo(){
    
    if(namee.value==""){
        document.querySelector(".name-error").style.display="block";
        document.querySelector(".name-input").style.border="1px solid hsl(354, 84%, 57%)";
    }
    if(email.value == ""){
        document.querySelector(".email-error").style.display="block";
        document.querySelector(".email-input").style.border="1px solid hsl(354, 84%, 57%)";
    }
    else if(!isEmail(email.value)) {
        document.querySelector(".email-error").innerHTML="Please enter a valid email";
        document.querySelector(".email-error").style.display="block";
        document.querySelector(".email-input").style.border="1px solid hsl(354, 84%, 57%)";
    }
    if(phone.value==""){
        document.querySelector(".phone-error").style.display="block";
        document.querySelector(".phone-input").style.border="1px solid hsl(354, 84%, 57%)";
    }

    if(namee.value!=="" && phone.value!=="" && email.value!=="" && isEmail(email.value)) {
    flag_pageone = 0;
    flag_pagetwo = 1;
    flag_pagethree = 0;
    flag_pagefour = 0;
    check();
    successful_input1 = 1;
    }
    else{
        successful_input1 = 0;
    }
}
// arcade is selected by default
function arcade_default(){
    arcade_flag = 1;
    advanced_flag = 0;
    pro_flag = 0; 
    
    arcade.style.backgroundColor = "#f8f8ff";
    arcade.style.border = "1px solid hsl(243, 100%, 62%)";
    advanced.style.backgroundColor = "#fefffe";
    advanced.style.border = "1px solid hsl(229, 24%, 87%)";
    pro.style.backgroundColor = "#fefffe";
    pro.style.border = "1px solid hsl(229, 24%, 87%)";

    if (checkbox_flag){
        total = total + 9;
        plan_selected.innerHTML="Arcade (Monthly)";
        plan_price.innerHTML="$9/mo";
    }
    else if(checkbox_flag==0){
        total = total + 90;
        plan_selected.innerHTML="Arcade (Yearly)";
        plan_price.innerHTML="$90/yr";
    }
}
arcade_default();
// selected plan
function arcadef(){
    // if user has previously selected a plan substract previous amount from equation
    ifSelected();

    arcade_default();
}
function advancedf(){
    ifSelected();
    arcade_flag = 0;
    advanced_flag = 1;
    pro_flag = 0; 

    arcade.style.backgroundColor = "#fefffe";
    arcade.style.border = "1px solid hsl(229, 24%, 87%)";
    advanced.style.backgroundColor = "#f8f8ff";
    advanced.style.border = "1px solid hsl(243, 100%, 62%)";
    pro.style.backgroundColor = "#fefffe";
    pro.style.border = "1px solid hsl(229, 24%, 87%)";

    if(checkbox_flag){
        total = total + 12;
        plan_selected.innerHTML="Advanced (Monthly)";
        plan_price.innerHTML="$12/mo";
    }
    else if(checkbox_flag==0){
        total = total + 120;
        plan_selected.innerHTML="Advanced (Yearly)";
        plan_price.innerHTML="$120/yr";
    }
}
function prof(){
    ifSelected();
    arcade_flag = 0;
    advanced_flag = 0;
    pro_flag = 1; 

    arcade.style.backgroundColor = "#fefffe";
    arcade.style.border = "1px solid hsl(229, 24%, 87%)";
    advanced.style.backgroundColor = "#fefffe";
    advanced.style.border = "1px solid hsl(229, 24%, 87%)";
    pro.style.backgroundColor = "#f8f8ff";
    pro.style.border = "1px solid hsl(243, 100%, 62%)";

    if(checkbox_flag){
        total = total + 15;
        plan_selected.innerHTML="Pro (Monthly)";
        plan_price.innerHTML="$15/mo";
    }
    else if(checkbox_flag==0){
        total = total + 150;
        plan_selected.innerHTML="Pro (Yearly)";
        plan_price.innerHTML="$150/yr";
    }
}
// check if a plan was already selected and if yes then substract previous plan amount from total
function ifSelected(){
    // if advanced is selected and it's monthly then take 12 from total and give it arcade's price
    if(advanced_flag && checkbox_flag){
        total = total - 12;
    }
    else if(advanced_flag && checkbox_flag==0){
        total = total - 120;
    }
    if(pro_flag && checkbox_flag){
        total = total - 15;
    }
    else if(pro_flag && checkbox_flag==0){
        total = total - 150;
    }
    if(arcade_flag && checkbox_flag){
        total = total - 9;
    }
    else if(arcade_flag && checkbox_flag==0){
        total = total - 90;
    }
}
// monthly or yearly checkbox gets clicked
function checkboxf(){

    // yearly gets shown/selected
    if(checkbox_flag){
        yearly_checkbox.style.color= "hsl(213, 96%, 18%)";
        monthly_checkbox.style.color= "hsl(231, 11%, 63%)";
        total_p.innerHTML ="Total (per year)";
        for (var i=0;i<yearly_p.length;i+=1){
            yearly_p[i].style.display = 'block';
                if(i==0){
                    monthly_payment_p[i].innerHTML="$90/yr";
                    addon_price[i].innerHTML="+$10/yr";
                }
                else if(i==1){
                    monthly_payment_p[i].innerHTML="$120/yr";
                    addon_price[i].innerHTML="+$20/yr";
                }
                else if(i==2){
                    monthly_payment_p[i].innerHTML="$150/yr";
                    addon_price[i].innerHTML="+$20/yr";
                }
            
          }
          if(firstaddon_flag==0){
            total = total - 1;
            total = total + 10;
            onlineservice_price.innerHTML="+$10/yr";
          }
          if(secondaddon_flag==0){
            total = total + 20;
            total = total - 2;
            largerstorage_price.innerHTML="+$20/yr";
          }
          if(thirdaddon_flag==0){
            total = total + 20;
            total = total - 2;
            cprofile_price.innerHTML="+$20/yr";
          }
          if(arcade_flag){
            total = total - 9;
            total = total + 90;
            plan_selected.innerHTML="Arcade (Yearly)";
            plan_price.innerHTML="$90/yr";
          }
          else if(advanced_flag){
            total = total - 12;
            total = total + 120;
            plan_selected.innerHTML="Advanced (Yearly)";
            plan_price.innerHTML="$120/yr";
          }
          else if(pro_flag){
            total = total - 15;
            total = total + 150;
            plan_selected.innerHTML="Pro (Yearly)";
            plan_price.innerHTML="$150/yr";
          }
        checkbox_flag = 0;
    }

    // monthly gets shown/selected
    else if(checkbox_flag==0){
        yearly_checkbox.style.color= "hsl(231, 11%, 63%)";
        monthly_checkbox.style.color= "hsl(213, 96%, 18%)";
        total_p.innerHTML ="Total (per month)";
        for (var i=0;i<yearly_p.length;i+=1){
            yearly_p[i].style.display = 'none';
                if(i==0){
                    monthly_payment_p[i].innerHTML="$9/mo";
                    addon_price[i].innerHTML="+$1/mo";
                }
                else if(i==1){
                    monthly_payment_p[i].innerHTML="$12/mo";
                    addon_price[i].innerHTML="+$2/mo";
                }
                else if(i==2){
                    monthly_payment_p[i].innerHTML="$15/mo";
                    addon_price[i].innerHTML="+$2/mo";
                }
          }
          if(firstaddon_flag==0){
            total = total - 10;
            total = total + 1;
            onlineservice_price.innerHTML="+$1/mo";
          }
          if(secondaddon_flag==0){
            total = total - 20;
            total = total + 2;
            largerstorage_price.innerHTML="+$2/mo";
          }
          if(thirdaddon_flag==0){
            total = total - 20;
            total = total + 2;
            cprofile_price.innerHTML="+$2/mo";
          }
          if(arcade_flag){
            total = total + 9;
            total = total - 90;
            plan_selected.innerHTML="Arcade (Monthly)";
            plan_price.innerHTML="$9/mo";
          }
          else if(advanced_flag){
            total = total + 12;
            total = total - 120;
            plan_selected.innerHTML="Advanced (Monthly)";
            plan_price.innerHTML="$12/mo";
          }
          else if(pro_flag){
            total = total + 15;
            total = total - 150;
            plan_selected.innerHTML="Pro (Monthly)";
            plan_price.innerHTML="$15/mo";
          }
        checkbox_flag = 1;
    }
}


function clickthree(){
    if(arcade_flag || advanced_flag || pro_flag){
        if(successful_input1){
            flag_pageone = 0;
            flag_pagetwo = 0;
            flag_pagethree = 1;
            flag_pagefour = 0;
            check();
        }
    }
}

// first add-on gets clicked (online service)
function firstaddon(){
    // deselected
    if(firstaddon_flag==0){
        firstaddon_flag = 1;
        firstaddonv.style.backgroundColor="#fefffe";

        if(checkbox_flag){
            onlineservice.style.display="none";
            onlineservice_price.style.display="none";
            total = total - 1;
        }
        else if(checkbox_flag==0){
            onlineservice.style.display="none";
            onlineservice_price.style.display="none";
            total = total - 10;
        }
    }
    //selected
    else if(firstaddon_flag){
        firstaddon_flag = 0;
        firstaddonv.style.backgroundColor="#f8f8ff";


        if(checkbox_flag){
            onlineservice.style.display="block";
            onlineservice_price.style.display="block";
            onlineservice_price.innerHTML="+$1/mo";
            total = total + 1;
        }
        else if(checkbox_flag==0){
            onlineservice.style.display="block";
            onlineservice_price.style.display="block";
            onlineservice_price.innerHTML="+$10/yr";
            total = total + 10;
        }
    }
}
// larger storage
function secondaddon(){
    if(secondaddon_flag==0){
        secondaddon_flag = 1;
        secondaddonv.style.backgroundColor="#fefffe";

        if(checkbox_flag){
            largerstorage.style.display="none";
            largerstorage_price.style.display="none";
            total = total - 2;
        }
        else if(checkbox_flag==0){
            largerstorage.style.display="none";
            largerstorage_price.style.display="none";
            total = total - 20;
        }
    }
    else if(secondaddon_flag){
        secondaddon_flag = 0;
        secondaddonv.style.backgroundColor="#f8f8ff";

        if(checkbox_flag){
            largerstorage.style.display="block";
            largerstorage_price.style.display="block";
            largerstorage_price.innerHTML="+$2/mo";
            total = total + 2;
        }
        else if(checkbox_flag==0){
            largerstorage.style.display="block";
            largerstorage_price.style.display="block";
            largerstorage_price.innerHTML="+$20/yr";
            total = total + 20;
        }
    }
}
// customazible profile
function thirdaddon(){
    if(thirdaddon_flag==0){
        thirdaddon_flag = 1;
        thirdaddonv.style.backgroundColor="#fefffe";
        

        if(checkbox_flag){
            cprofile.style.display="none";
            cprofile_price.style.display="none";
            console.log("i substracted $2 monthly for third add on");
            total = total - 2;
        }
        else if(checkbox_flag==0){
            cprofile.style.display="none";
            cprofile_price.style.display="none";
            console.log("i substracted $20 yeraly for third add on");
            total = total - 20;
        }
    }
    else if(thirdaddon_flag){
        thirdaddon_flag = 0;
        thirdaddonv.style.backgroundColor="#f8f8ff";
       
        if(checkbox_flag){
            cprofile.style.display="block";
            cprofile_price.style.display="block";
            cprofile_price.innerHTML="+$2/mo";
            total = total + 2;
        }
        else if(checkbox_flag==0){
            cprofile.style.display="block";
            cprofile_price.style.display="block";
            cprofile_price.innerHTML="+$20/yr";
            total = total + 20;
        }
    }
}


function clickfour(){
    if(successful_input1){
        if(firstaddon_flag==0 || secondaddon_flag==0 || thirdaddon_flag==0){
            hr.style.display="block";
        }
        else if(firstaddon_flag && secondaddon_flag && thirdaddon_flag){
            hr.style.display="none";
        }
        if(checkbox_flag){
            total_price.innerHTML="$+"+total+"/mo";
        }
        else if(checkbox_flag==0){
            total_price.innerHTML="$"+total+"/yr";
        }
        flag_pageone = 0;
        flag_pagetwo = 0;
        flag_pagethree = 0;
        flag_pagefour = 1;
        check();
    }
}

