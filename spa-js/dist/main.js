(()=>{"use strict";var e="http://51.250.6.34:4000/contacts",t={Accept:"application/json","Content-Type":"application/json"},n=function(e){return e.ok?e.json():Promise.reject("Произошла ошибка ".concat(e.status,": ").concat(e.statusText))},a=function(e){var t=document.getElementById("spanNameForm");return e.match(/^[а-яА-Яa-zA-ZёË\- ]{1,20}/)?(t.textContent="",!0):(t.textContent="Input Error!",document.getElementById("name").value="",!1)},o=function(e){var t=document.getElementById("spanPhoneForm");return!!e.match(/^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{1,20}$/)||(t.textContent="Input Error! Example: +7 xxx xxx xx xx",document.getElementById("phone").value="",!1)},d=function(a){var o=document.getElementById("tbody"),d=document.createElement("tr"),c=document.createElement("th"),r=document.createElement("th"),m=document.createElement("th"),l=document.createElement("th"),s=document.createElement("button"),u=document.createElement("button"),i=document.createElement("input"),p=document.createElement("span"),h=document.createElement("input"),E=document.createElement("span");return c.classList.add("table__tbody-th"),r.classList.add("table__tbody-th"),m.classList.add("table__tbody-th"),l.classList.add("table__tbody-th"),s.classList.add("table__button"),u.classList.add("table__button"),i.classList.add("table__input"),p.classList.add("table__input-err"),h.classList.add("table__input"),E.classList.add("table__input-err"),d.id=a._id,c.textContent=a.name,r.textContent=a.phone,s.type="button",s.textContent="Edit",u.type="button",u.textContent="Delete",p.id="spanNameEdit",E.id="spanPhoneEdit",o.append(d),d.append(c,r,m,l),m.append(s),l.append(u),s.addEventListener("click",(function(o){if(o.preventDefault(),"Edit"===s.textContent)s.textContent="Save",s.type="submit",s.id="saveContact",c.textContent="",r.textContent="",i.type="text",i.name="editName",i.id="editName",i.placeholder=a.name,i.value=a.name,h.type="text",h.name="editPhone",h.id="editPhone",h.placeholder=a.phone,h.value=a.phone,c.append(i,p),r.append(h,E);else{var m=document.getElementById("editName").value,l=document.getElementById("editPhone").value,u=d.id;if(0==(f=m,b=document.getElementById("spanNameEdit"),f.match(/^[а-яА-Яa-zA-ZёË\- ]{1,20}/)?(b.textContent="",!0):(b.textContent="Input Error!",b.value="",!1)))return;if(0==(x=l,_=document.getElementById("spanPhoneEdit"),!!x.match(/^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{1,20}$/)||(_.textContent="Input Error! Example: +7 xxx xxx xx xx",document.getElementById("spanPhoneEdit").value="",!1)))return;(function(a){var o=a.id,d=a.name,c=a.phone;return fetch("".concat(e,"/").concat(o),{method:"PATCH",headers:t,body:JSON.stringify({name:d,phone:c})}).then((function(e){return n(e)}))})({id:u,name:m,phone:l}).then((function(e){s.textContent="Edit",c.textContent=e.name,r.textContent=e.phone,a=e})).catch((function(e){return console.log(e)}))}var x,_,f,b})),u.addEventListener("click",(function(a){var o;a.preventDefault(),(o=d.id,fetch("".concat(e,"/").concat(o),{method:"DELETE",headers:t}).then((function(e){return n(e)}))).then((function(e){console.log(e.message),d.remove()})).catch((function(e){return console.log(e)}))})),o};function c(e){throw new TypeError('"'+e+'" is read-only')}var r,m;r=function(){var e=document.createElement("header"),t=document.createElement("h1");return e.classList.add("header"),t.classList.add("header__h1"),t.textContent="Phonebook",e.append(t),e}(),m=function(){var r=function(){var r=function(){var a=document.createElement("table"),o=document.createElement("thead"),c=document.createElement("tbody"),r=document.createElement("tr"),m=document.createElement("th"),l=document.createElement("th"),s=document.createElement("th"),u=document.createElement("th");return a.classList.add("table"),o.classList.add("table__thead"),m.classList.add("table__thead-th"),l.classList.add("table__thead-th"),s.classList.add("table__thead-th"),c.classList.add("table__tbody"),m.textContent="Name",l.textContent="Phone",s.textContent="Action",u.textContent="Delete",c.id="tbody",a.append(o,c),o.append(r),r.append(m,l,s,u),fetch("".concat(e),{method:"GET",headers:t}).then((function(e){return n(e)})).then((function(e){e.map((function(e){return d(e)}))})).catch((function(e){return console.log(e)})),a}(),m=function(){var r=document.createElement("form"),m=document.createElement("h2"),l=document.createElement("label"),s=document.createElement("input"),u=document.createElement("span"),i=document.createElement("label"),p=document.createElement("input"),h=document.createElement("span"),E=document.createElement("div"),x=document.createElement("button");return r.classList.add("form"),m.classList.add("form__title"),l.classList.add("form__label"),s.classList.add("form__input"),u.classList.add("form__input-err"),i.classList.add("form__label"),p.classList.add("form__input"),h.classList.add("form__input-err"),E.classList.add("form__btn-wrapper"),x.classList.add("form__button"),m.textContent="Add contact",l.textContent="Name",l.htmlFor="name",s.type="text",s.name="name",s.id="name",s.placeholder="Name",u.id="spanNameForm",i.textContent="Phone",i.htmlFor="phone",p.type="text",p.name="phone",p.id="phone",p.placeholder="Phone",h.id="spanPhoneForm",x.type="submit",x.ariaLabel="Add",x.textContent="Add",r.append(m,l,i,E),l.append(s,u),i.append(p,h),E.append(x),x.addEventListener("click",(function(r){r.preventDefault(),document.getElementById("spanErrSubmit")&&document.getElementById("spanErrSubmit").remove();var m,l,s,u=document.getElementById("name").value,i=document.getElementById("phone").value;0!=a(u)&&0!=o(i)&&1==a(u)&&1==o(i)&&(m={name:u,phone:i},l=m.name,s=m.phone,fetch("".concat(e,"/create"),{method:"POST",headers:t,body:JSON.stringify({name:l,phone:s})}).then((function(e){return n(e)}))).then((function(e){d(e),c("nameVal"),u="",c("phoneVal"),i=""})).catch((function(e){console.log(e);var t=document.createElement("span");t.classList.add("form__submit-err"),t.id="spanErrSubmit",t.textContent="Что-то пошло не так. Попробуйте еще раз",E.append(t),setTimeout((function(){t.remove()}),2e3)}))})),r}(),l=document.createElement("section");return l.classList.add("section"),l.append(r,m),l}(),m=document.createElement("main");return m.classList.add("main"),m.append(r),m}(),document.body.append(r,m)})();