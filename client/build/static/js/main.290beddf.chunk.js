(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,a,t){e.exports=t(121)},107:function(e,a,t){},121:function(e,a,t){"use strict";t.r(a);var n,r,o,l,c,i=t(0),s=t.n(i),u=t(37),m=t.n(u),d=(t(106),t(107),t(129)),b=t(94),g=t(47),p=t(14),v=t(95),k=t(28),E=t(20),h=t.n(E),f=t(30),w=t(16),O=t(130),j=t(124),S=t(125),y=t(132),I=t(86),x=t(126),C=t(127),B=t(137),$=t(82),T=t(83),F=t(73),L=t.n(F),_=new(function(){function e(){Object($.a)(this,e)}return Object(T.a)(e,[{key:"getProfile",value:function(){return L()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return L()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),N=function(e){var a=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!a)return!1;var t=null===a||void 0===a?void 0:a.filter((function(a){return a!==e}));return localStorage.setItem("saved_books",JSON.stringify(t)),!0},q=t(42),D=t(31),P=Object(D.a)(n||(n=Object(q.a)(["\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            token\n            user {\n                _id\n                username\n            }\n        }\n    }\n"]))),G=Object(D.a)(r||(r=Object(q.a)(["\n    mutation addUser($username: String!, $email: String!, $password: String!){\n        addUser(username: $username, email: $email, password: $password){\n            token\n            user{\n                _id\n                username\n            }\n        }\n    }\n"]))),U=Object(D.a)(o||(o=Object(q.a)(["\n    mutation saveBook($authors: [String], $description: String, $title: String, $bookId: String, $image: String, $link: String){\n        saveBook(authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image, link: $link){\n            _id\n            username\n            savedBooks{\n                authors\n                description\n                title\n                bookId\n                image\n                link\n            }\n        }\n    }\n"]))),V=Object(D.a)(l||(l=Object(q.a)(["\n    mutation removeBook($bookId:String!){\n        removeBook(bookId: $bookId){\n            username\n            savedBooks{\n                authors\n                description\n                title\n                bookId\n                image\n                link\n            }\n        }\n    }\n"]))),Y=function(){var e=Object(i.useState)([]),a=Object(w.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(""),o=Object(w.a)(r,2),l=o[0],c=o[1],u=Object(i.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),m=Object(w.a)(u,2),d=m[0],b=m[1];Object(i.useEffect)((function(){return function(){var e;(e=d).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var g=function(){var e=Object(f.a)(h.a.mark((function e(a){var t,r,o,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),l){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(l));case 6:if((t=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,t.json();case 11:r=e.sent,o=r.items,i=o.map((function(e){var a;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(a=e.volumeInfo.imageLinks)||void 0===a?void 0:a.thumbnail)||""}})),n(i),c(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}(),p=Object(O.a)(U),E=Object(w.a)(p,1)[0],$=function(){var e=Object(f.a)(h.a.mark((function e(a){var n,r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.find((function(e){return e.bookId===a})),_.loggedIn()?_.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,console.log("bookToSave:",n),e.next=8,E({variables:{bookData:Object(k.a)({},n)}});case 8:r=e.sent,o=r.data,console.log("data:",o),b([].concat(Object(v.a)(d),[n.bookId])),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(j.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(S.a,null,s.a.createElement("h1",null,"Search for Books!"),s.a.createElement(y.a,{onSubmit:g},s.a.createElement(y.a.Row,null,s.a.createElement(I.a,{xs:12,md:8},s.a.createElement(y.a.Control,{name:"searchInput",value:l,onChange:function(e){return c(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})),s.a.createElement(I.a,{xs:12,md:4},s.a.createElement(x.a,{type:"submit",variant:"success",size:"lg"},"Submit Search")))))),s.a.createElement(S.a,null,s.a.createElement("h2",null,t.length?"Viewing ".concat(t.length," results:"):"Search for a book to begin"),s.a.createElement(C.a,null,t.map((function(e){return s.a.createElement(B.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(B.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(B.a.Body,null,s.a.createElement(B.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(B.a.Text,null,e.description),_.loggedIn()&&s.a.createElement(x.a,{disabled:null===d||void 0===d?void 0:d.some((function(a){return a===e.bookId})),className:"btn-block btn-info",onClick:function(){return $(e.bookId)}},(null===d||void 0===d?void 0:d.some((function(a){return a===e.bookId})))?"This book has already been saved!":"Save this Book!")))})))))},J=t(135),K=Object(D.a)(c||(c=Object(q.a)(["\n{\n    me{\n        _id\n        username\n        email\n        bookCount\n        savedBooks{\n            bookId\n            authors\n            description\n            title\n            image\n            link\n        }\n    }\n}\n"]))),z=function(){var e,a,t=Object(J.a)(K),n=t.loading,r=t.data,o=(null===r||void 0===r?void 0:r.me)||[],l=Object(O.a)(V),c=Object(w.a)(l,1)[0],i=function(){var e=Object(f.a)(h.a.mark((function e(a){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=_.loggedIn()?_.getToken():null,console.log(a),t){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,c({variables:{bookId:a}});case 7:N(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(a){return e.apply(this,arguments)}}();return n?s.a.createElement("h2",null,"LOADING..."):s.a.createElement(s.a.Fragment,null,s.a.createElement(j.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(S.a,null,s.a.createElement("h1",null,"Viewing saved books!"))),s.a.createElement(S.a,null,s.a.createElement("h2",null,(null===(e=o.savedBooks)||void 0===e?void 0:e.length)?"Viewing ".concat(o.savedBooks.length," saved ").concat(1===o.savedBooks.length?"book":"books",":"):"You have no saved books!"),s.a.createElement(C.a,null,null===(a=o.savedBooks)||void 0===a?void 0:a.map((function(e){return s.a.createElement(B.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(B.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(B.a.Body,null,s.a.createElement(B.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(B.a.Text,null,e.description),s.a.createElement(x.a,{className:"btn-block btn-danger",onClick:function(){return i(e.bookId)}},"Delete this Book!")))})))))},A=t(134),M=t(133),H=t(131),R=t(136),W=t(44),Q=t(128),X=function(){var e=Object(i.useState)({username:"",email:"",password:""}),a=Object(w.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(w.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(w.a)(l,2),u=c[0],m=c[1],d=Object(O.a)(G),b=Object(w.a)(d,1)[0],g=function(e){var a=e.target,r=a.name,o=a.value;n(Object(k.a)(Object(k.a)({},t),{},Object(W.a)({},r,o)))},p=function(){var e=Object(f.a)(h.a.mark((function e(a){var r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,b({variables:Object(k.a)({},t)});case 6:r=e.sent,o=r.data,console.log(o),_.login(o.addUser.token),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0),m(!0);case 16:n({username:"",email:"",password:""});case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(y.a,{noValidate:!0,validated:o,onSubmit:p},s.a.createElement(Q.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your signup!"),s.a.createElement(y.a.Group,null,s.a.createElement(y.a.Label,{htmlFor:"username"},"Username"),s.a.createElement(y.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:g,value:t.username,required:!0}),s.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Username is required!")),s.a.createElement(y.a.Group,null,s.a.createElement(y.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(y.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:g,value:t.email,required:!0}),s.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(y.a.Group,null,s.a.createElement(y.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(y.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:g,value:t.password,required:!0}),s.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(x.a,{disabled:!(t.username&&t.email&&t.password),type:"submit",variant:"success"},"Submit")))},Z=function(){var e=Object(i.useState)({email:"",password:""}),a=Object(w.a)(e,2),t=a[0],n=a[1],r=Object(O.a)(P),o=Object(w.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(w.a)(l,1)[0],u=Object(i.useState)(!1),m=Object(w.a)(u,2),d=m[0],b=m[1],g=function(e){var a=e.target,r=a.name,o=a.value;n(Object(k.a)(Object(k.a)({},t),{},Object(W.a)({},r,o)))},p=function(){var e=Object(f.a)(h.a.mark((function e(a){var r,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,o({variables:Object(k.a)({},t)});case 6:r=e.sent,l=r.data,console.log(l),_.login(l.login.token),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0),b(!0);case 16:n({username:"",email:"",password:""});case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(y.a,{noValidate:!0,validated:c,onSubmit:p},s.a.createElement(Q.a,{dismissible:!0,onClose:function(){return b(!1)},show:d,variant:"danger"},"Something went wrong with your login credentials!"),s.a.createElement(y.a.Group,null,s.a.createElement(y.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(y.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:g,value:t.email,required:!0}),s.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(y.a.Group,null,s.a.createElement(y.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(y.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:g,value:t.password,required:!0}),s.a.createElement(y.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(x.a,{disabled:!(t.email&&t.password),type:"submit",variant:"success"},"Submit")))},ee=function(){var e=Object(i.useState)(!1),a=Object(w.a)(e,2),t=a[0],n=a[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(A.a,{bg:"dark",variant:"dark",expand:"lg"},s.a.createElement(S.a,{fluid:!0},s.a.createElement(A.a.Brand,{as:g.b,to:"/"},"Google Books Search"),s.a.createElement(A.a.Toggle,{"aria-controls":"navbar"}),s.a.createElement(A.a.Collapse,{id:"navbar"},s.a.createElement(M.a,{className:"ml-auto"},s.a.createElement(M.a.Link,{as:g.b,to:"/"},"Search For Books"),_.loggedIn()?s.a.createElement(s.a.Fragment,null,s.a.createElement(M.a.Link,{as:g.b,to:"/saved"},"See Your Books"),s.a.createElement(M.a.Link,{onClick:_.logout},"Logout")):s.a.createElement(M.a.Link,{onClick:function(){return n(!0)}},"Login/Sign Up"))))),s.a.createElement(H.a,{size:"lg",show:t,onHide:function(){return n(!1)},"aria-labelledby":"signup-modal"},s.a.createElement(R.a.Container,{defaultActiveKey:"login"},s.a.createElement(H.a.Header,{closeButton:!0},s.a.createElement(H.a.Title,{id:"signup-modal"},s.a.createElement(M.a,{variant:"pills"},s.a.createElement(M.a.Item,null,s.a.createElement(M.a.Link,{eventKey:"login"},"Login")),s.a.createElement(M.a.Item,null,s.a.createElement(M.a.Link,{eventKey:"signup"},"Sign Up"))))),s.a.createElement(H.a.Body,null,s.a.createElement(R.a.Content,null,s.a.createElement(R.a.Pane,{eventKey:"login"},s.a.createElement(Z,{handleModalClose:function(){return n(!1)}})),s.a.createElement(R.a.Pane,{eventKey:"signup"},s.a.createElement(X,{handleModalClose:function(){return n(!1)}})))))))},ae=new b.a({request:function(e){var a=localStorage.getItem("id_token");e.setContext({headers:{authorization:a?"Bearer ".concat(a):""}})},uri:"/graphql"});var te=function(){return s.a.createElement(d.a,{client:ae},s.a.createElement(g.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(ee,null),s.a.createElement(p.c,null,s.a.createElement(p.a,{exact:!0,path:"/",component:Y}),s.a.createElement(p.a,{exact:!0,path:"/saved",component:z}),s.a.createElement(p.a,{render:function(){return s.a.createElement("h1",{className:"display-2"},"Wrong page!")}})))))};m.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(te,null)),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.290beddf.chunk.js.map