function e(e,o,t,n){Object.defineProperty(e,o,{get:t,set:n,enumerable:!0,configurable:!0})}function o(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var o=r[e];delete r[e];var t={id:e,exports:{}};return n[e]=t,o.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,o){r[e]=o},t.parcelRequired7c6=a),a.register("kyEFX",(function(o,t){var n,r;e(o.exports,"register",(function(){return n}),(function(e){return n=e})),e(o.exports,"resolve",(function(){return r}),(function(e){return r=e}));var a={};n=function(e){for(var o=Object.keys(e),t=0;t<o.length;t++)a[o[t]]=e[o[t]]},r=function(e){var o=a[e];if(null==o)throw new Error("Could not resolve bundle with id "+e);return o}})),a("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.3e098586.js","jGUoc":"save-the-children.e387eaa5.png","emdKm":"project-hope.5879854c.png","3mLpk":"united24.7e58352b.png","3iOe6":"international-medical-corps.bcacdce8.png","cIP61":"medecins-sans-fronteres.3125e7a3.png","gfiQd":"razom.fd446c8a.png","chpGK":"action-against-hunger.53afbe8b.png","cHUFN":"world-vision.a349eac9.png","ai4TY":"sergiy-prytula.ad8be370.png"}'));const s=document.querySelector(".burger-menu"),i=document.querySelector(".modal-overlay");document.querySelector(".close-icon");s.addEventListener("click",(function(){i.classList.toggle("show")}));const l=document.querySelector(".shoplist-btn");l.addEventListener("click",(e=>{window.location.href="./shopping-list.html",l.classList.add("current")}));document.querySelector(".home-btn").addEventListener("click",(e=>{window.location.href="./index.html"}));var p;p=new URL(a("kyEFX").resolve("jGUoc"),import.meta.url).toString();var d;d=new URL(a("kyEFX").resolve("emdKm"),import.meta.url).toString();var u;u=new URL(a("kyEFX").resolve("3mLpk"),import.meta.url).toString();var h;h=new URL(a("kyEFX").resolve("3iOe6"),import.meta.url).toString();var c;c=new URL(a("kyEFX").resolve("cIP61"),import.meta.url).toString();var F;F=new URL(a("kyEFX").resolve("gfiQd"),import.meta.url).toString();var w;w=new URL(a("kyEFX").resolve("chpGK"),import.meta.url).toString();var B;B=new URL(a("kyEFX").resolve("cHUFN"),import.meta.url).toString();var m;m=new URL(a("kyEFX").resolve("ai4TY"),import.meta.url).toString();const g=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:`${o(p)}`},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:`${o(d)}`},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:`${o(u)}`},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:`${o(h)}`},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:`${o(c)}`},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:`${o(F)}`},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:`${o(w)}`},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:`${o(B)}`},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:`${o(m)}`}],E=document.querySelector(".support_Ukraine_ol"),k=document.querySelector(".support_Ukraine_bnt");let b=0;!function(e){const o=e.map((({title:e,url:o,img:t})=>`<li class='support_Ukraine_list_ol'><a href="${o}" target="_blank"><span class='support_Ukraine_num '>01</span><img\n            src="${t}"\n            alt="${e}"\n            class="support__img"\n          /></a></li>`)).join(" ");E.innerHTML=o}(g),k.addEventListener("click",(function(){b+=52,(b>280&&screen.availWidth<=375||b>180&&screen.availWidth>375)&&(b=0);E.style.bottom=b+"px"}));document.querySelectorAll(".support_Ukraine_num ").forEach(((e,o)=>{const t=o+1;e.textContent="0"+t}));const f=document.querySelector(".shoping-list-ul2"),S=document.querySelector(".shopping-list-delete-book-bnt");!function(e){const o=e.map((({id:e,title:o,author:t,description:n,book_image:r,buy_links:a})=>`<li class="shoping-list-book" id="${e}">\n              <div class="shopping-list-conteiner">\n                <img src="${r}" alt="${o}" class="test-img-css"/>\n                <div class="shopping-list-information">\n                  <h2 class="shoping-list-title-book">${o}</h2>\n                  <p class="shoping-list-book-wrap">Hardcover fiction</p>\n                  <p class="shoping-list-book-description">${n}</p>\n                  <h3 class="shoping-list-book-autor">${t}</h3>\n                  <div class="shopping-list-link-shop">\n                    <ul class="shoping-list-ul">\n                      <li class="shopping-list-link">\n                        <a href="${a[0].url}"target="_blank"\n                          ><img\n                            src="./images/icons-img/amazon.png"\n                            alt="amazon"\n                            class="shopping-list-buy-link"\n                        /></a>\n                      </li>\n                      <li class="shopping-list-link">\n                        <a href="${a[3].url}"target="_blank"\n                          ><img\n                            src="./images/icons-img/book.png"\n                            alt="book"\n                            class="shopping-list-buy-link"\n                        /></a>\n                      </li>\n                      <li class="shopping-list-link">\n                        <a href="${a[4].url}"target="_blank"\n                          ><img\n                            src="./images/icons-img/books.png"\n                            alt=""\n                            class="shopping-list-buy-link"\n                        /></a>\n                      </li>\n                    </ul>\n                  </div>\n                  <button class="shopping-list-delete-book-bnt" type="button">\n                    <svg class="shopping-list-icon">\n                      <use\n                        href="./images/img-symbols/symbol-defs.svg#icon-basket"\n                      ></use>\n                    </svg>\n                  </button>\n                </div>\n              </div>\n            </li>`)).join(" ");f.innerHTML=o}([{id:"643282b1e85766588626a0ba",title:"THE LOVE STORIES OF THE BIBLE SPEAK",author:"Shannon Bream",description:"David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short  drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when  David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.",book_image:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",buy_links:[{name:"Amazon",url:"https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9780063226050?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063226050"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252FShannon%252BBream%252F9780063226050&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252BShannon%252BBream"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063226050&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063226050%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK%2BShannon%2BBream%26aff%3DNYT"}]},{id:"643282b1e85766588626a0ba",title:"THE LOVE STORIES OF THE BIBLE SPEAK",author:"Shannon Bream",description:"David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short  drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when  David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.",book_image:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",buy_links:[{name:"Amazon",url:"https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9780063226050?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063226050"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252FShannon%252BBream%252F9780063226050&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252BShannon%252BBream"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063226050&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063226050%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK%2BShannon%2BBream%26aff%3DNYT"}]},{id:"643282b1e85766588626a0ba",title:"THE LOVE STORIES OF THE BIBLE SPEAK",author:"Shannon Bream",description:"David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short  drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when  David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.",book_image:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",buy_links:[{name:"Amazon",url:"https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9780063226050?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063226050"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252FShannon%252BBream%252F9780063226050&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252BShannon%252BBream"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063226050&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063226050%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK%2BShannon%2BBream%26aff%3DNYT"}]},{id:"643282b1e85766588626a0ba",title:"THE LOVE STORIES OF THE BIBLE SPEAK",author:"Shannon Bream",description:"David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short  drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when  David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.",book_image:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",buy_links:[{name:"Amazon",url:"https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9780063226050?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063226050"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252FShannon%252BBream%252F9780063226050&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252BShannon%252BBream"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063226050&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063226050%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK%2BShannon%2BBream%26aff%3DNYT"}]}]),S.addEventListener("click",(function(){}));
//# sourceMappingURL=shopping-list.3e098586.js.map
