!function(){function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var n=r[e];delete r[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},t.parcelRequired7c6=i),i.register("iE7OH",(function(n,t){var o,r;e(n.exports,"register",(function(){return o}),(function(e){return o=e})),e(n.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};o=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},r=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i.register("aNJCr",(function(n,t){var o;e(n.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var r={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var n=r[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),r[e]=n),n}})),i("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.9dbd1363.js","89oQK":"x-close-white.0f097d54.png","45QcB":"amazon-white.4edac75c.png","5IXyf":"symbol-defs.203f32eb.svg","J0Sl7":"Icon_Close_24.17596f54.png","f8jNK":"amazon.eda3082b.png","8BYsz":"save-the-children.e387eaa5.png","5m9Gl":"project-hope.5879854c.png","l9ucD":"united24.7e58352b.png","cBJ96":"international-medical-corps.bcacdce8.png","eMrcY":"medecins-sans-fronteres.3125e7a3.png","2gtgM":"razom.fd446c8a.png","fEJf3":"action-against-hunger.53afbe8b.png","avUVv":"world-vision.a349eac9.png","7855s":"sergiy-prytula.ad8be370.png"}'));var a=document.querySelector(".burger-menu"),c=document.querySelector(".modal-overlay");document.querySelector(".close-icon");a.addEventListener("click",(function(){c.classList.toggle("show")}));var l=document.querySelector(".shoplist-btn");l.addEventListener("click",(function(e){window.location.href="./shopping-list.html",l.classList.add("current")})),document.querySelector(".home-btn").addEventListener("click",(function(e){window.location.href="./index.html"}));var s;s=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("89oQK");var u;u=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("45QcB");var g;g=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("5IXyf");var d;d=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("J0Sl7");var p;p=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("f8jNK");var m={theme:document.querySelector("#toggler-1"),body:document.querySelector("body"),logo:document.querySelector("#logo"),closeBtn:document.querySelector(".closeBtn"),amazonIcon:document.querySelector(".imgIcon")},h=!1;function f(){h=!0,document.body.classList.add("dark-theme"),m.theme.setAttribute("checked","true"),m.closeBtn.style.backgroundImage="url(".concat(n(s),")"),m.logo.innerHTML="<use href=".concat(n(g),"#logo-white ></use>"),m.amazonIcon.src="".concat(n(u))}!function(){try{var e=localStorage.getItem("isDarkTheme");if(null===e)return;"true"===e&&f()}catch(e){console.log("error for dark theme switcher",e)}}(),m.theme.addEventListener("change",(function(e){e.preventDefault(),localStorage.removeItem("isDarkTheme"),!0===m.theme.checked?f():(h=!1,document.body.classList.remove("dark-theme"),m.logo.innerHTML="<use href=".concat(n(g),"#logo-black ></use>"),m.closeBtn.style.backgroundImage="url(".concat(n(d),")"),m.amazonIcon.src="".concat(n(p)));localStorage.setItem("isDarkTheme","".concat(h))}));var v;v=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("8BYsz");var b;b=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("5m9Gl");var S;S=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("l9ucD");var _;_=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("cBJ96");var k;k=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("eMrcY");var H;H=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("2gtgM");var y;y=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("fEJf3");var E;E=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("avUVv");var w;w=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("7855s");var R,F=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"".concat(n(v))},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"".concat(n(b))},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"".concat(n(S))},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"".concat(n(_))},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"".concat(n(k))},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"".concat(n(H))},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"".concat(n(y))},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"".concat(n(E))},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"".concat(n(w))}],L=document.querySelector(".support_Ukraine_ol"),O=document.querySelector(".support_Ukraine_bnt"),T=0;R=F.map((function(e){var n=e.title,t=e.url,o=e.img;return"<li class='support_Ukraine_list_ol'><a href=\"".concat(t,'" target="_blank"><span class=\'support_Ukraine_num \'>01</span><img\n            src="').concat(o,'"\n            alt="').concat(n,'"\n            class="support__img"\n          /></a></li>')})).join(" "),L.innerHTML=R,O.addEventListener("click",(function(){((T+=52)>280&&screen.availWidth<=375||T>180&&screen.availWidth>375)&&(T=0);L.style.bottom=T+"px"})),document.querySelectorAll(".support_Ukraine_num ").forEach((function(e,n){var t=n+1;e.textContent="0"+t}));var j=Object.values(JSON.parse(localStorage.getItem("BOOKSTORE_SHOP_LIST"))),B=document.querySelector(".shoping-list-ul2");!function(e){var n=e.map((function(e){var n=e.id,t=e.title,o=e.author,r=e.description,i=e.book_image,a=e.buy_links;return'<li class="shoping-list-book" id="'.concat(n,'">\n              <div class="shopping-list-conteiner">\n                <img src="').concat(i,'" alt="').concat(t,'" class="test-img-css"/>\n                <div class="shopping-list-information">\n                  <h2 class="shoping-list-title-book">').concat(t,'</h2>\n                  <p class="shoping-list-book-wrap">Hardcover fiction</p>\n                  <p class="shoping-list-book-description">').concat(r,'</p>\n                  <h3 class="shoping-list-book-autor">').concat(o,'</h3>\n                  <div class="shopping-list-link-shop">\n                    <ul class="shoping-list-ul">\n                      <li class="shopping-list-link">\n                        <a href="').concat(a[0].url,'"target="_blank"\n                          ><img\n                            src="./images/icons-img/amazon.png"\n                            alt="amazon"\n                            class="shopping-list-buy-link"\n                        /></a>\n                      </li>\n                      <li class="shopping-list-link">\n                        <a href="').concat(a[3].url,'"target="_blank"\n                          ><img\n                            src="./images/icons-img/book.png"\n                            alt="book"\n                            class="shopping-list-buy-link"\n                        /></a>\n                      </li>\n                      <li class="shopping-list-link">\n                        <a href="').concat(a[4].url,'"target="_blank"\n                          ><img\n                            src="./images/icons-img/books.png"\n                            alt=""\n                            class="shopping-list-buy-link"\n                        /></a>\n                      </li>\n                    </ul>\n                  </div>\n                  <button class="shopping-list-delete-book-bnt" type="button">\n                    <svg class="shopping-list-icon">\n                      <use\n                        href="./images/img-symbols/symbol-defs.svg#icon-basket"\n                      ></use>\n                    </svg>\n                  </button>\n                </div>\n              </div>\n            </li>')})).join(" ");B.innerHTML=n}(j),document.querySelector(".shopping-list-delete-book-bnt").addEventListener("click",(function(){}))}();
//# sourceMappingURL=shopping-list.9dbd1363.js.map
