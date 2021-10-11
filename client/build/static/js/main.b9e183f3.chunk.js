(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,a,t){e.exports=t(121)},107:function(e,a,t){},121:function(e,a,t){"use strict";t.r(a);var n,r,o,l,c,i=t(0),s=t.n(i),u=t(36),m=t.n(u),d=(t(106),t(107),t(129)),b=t(94),g=t(47),p=t(14),v=t(95),k=t(20),E=t.n(k),h=t(29),f=t(16),w=t(124),O=t(125),j=t(132),S=t(86),y=t(126),I=t(127),x=t(137),C=t(82),B=t(83),$=t(73),F=t.n($),T=new(function(){function e(){Object(C.a)(this,e)}return Object(B.a)(e,[{key:"getProfile",value:function(){return F()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return F()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),L=function(e){var a=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!a)return!1;var t=null===a||void 0===a?void 0:a.filter((function(a){return a!==e}));return localStorage.setItem("saved_books",JSON.stringify(t)),!0},_=t(42),N=t(30),q=Object(N.a)(n||(n=Object(_.a)(["\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            token\n            user {\n                _id\n                username\n            }\n        }\n    }\n"]))),P=Object(N.a)(r||(r=Object(_.a)(["\n    mutation addUser($username: String!, $email: String!, $password: String!){\n        addUser(username: $username, email: $email, password: $password){\n            token\n            user{\n                _id\n                username\n            }\n        }\n    }\n"]))),D=Object(N.a)(o||(o=Object(_.a)(["\n    mutation saveBook($authors: [String], $description: String, $title: String, $bookId: String, $image: String, $link: String){\n        saveBook(authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image, link: $link){\n            _id\n            username\n            savedBooks{\n                authors\n                description\n                title\n                bookId\n                image\n                link\n            }\n        }\n    }\n"]))),G=Object(N.a)(l||(l=Object(_.a)(["\n    mutation removeBook($bookId:String!){\n        removeBook(bookId: $bookId){\n            username\n            savedBooks{\n                authors\n                description\n                title\n                bookId\n                image\n                link\n            }\n        }\n    }\n"]))),U=t(130),V=function(){var e=Object(i.useState)([]),a=Object(f.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(""),o=Object(f.a)(r,2),l=o[0],c=o[1],u=Object(i.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),m=Object(f.a)(u,2),d=m[0],b=m[1],g=Object(U.a)(D),p=Object(f.a)(g,2),k=p[0],C=p[1].error;Object(i.useEffect)((function(){return function(){var e;(e=d).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var B=function(){var e=Object(h.a)(E.a.mark((function e(a){var t,r,o,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),l){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(l));case 6:if((t=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,t.json();case 11:r=e.sent,o=r.items,i=o.map((function(e){var a;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(a=e.volumeInfo.imageLinks)||void 0===a?void 0:a.thumbnail)||""}})),n(i),c(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}(),$=function(){var e=Object(h.a)(E.a.mark((function e(a){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.find((function(e){return e.bookId===a})),T.loggedIn()?T.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,k({variables:{input:n}});case 7:if(r=e.sent,r.data,!C){e.next=11;break}throw new Error("something went wrong!");case 11:b([].concat(Object(v.a)(d),[n.bookId])),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(O.a,null,s.a.createElement("h1",null,"Search for Books!"),s.a.createElement(j.a,{onSubmit:B},s.a.createElement(j.a.Row,null,s.a.createElement(S.a,{xs:12,md:8},s.a.createElement(j.a.Control,{name:"searchInput",value:l,onChange:function(e){return c(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})),s.a.createElement(S.a,{xs:12,md:4},s.a.createElement(y.a,{type:"submit",variant:"success",size:"lg"},"Submit Search")))))),s.a.createElement(O.a,null,s.a.createElement("h2",null,t.length?"Viewing ".concat(t.length," results:"):"Search for a book to begin"),s.a.createElement(I.a,null,t.map((function(e){return s.a.createElement(x.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(x.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(x.a.Body,null,s.a.createElement(x.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(x.a.Text,null,e.description),T.loggedIn()&&s.a.createElement(y.a,{disabled:null===d||void 0===d?void 0:d.some((function(a){return a===e.bookId})),className:"btn-block btn-info",onClick:function(){return $(e.bookId)}},(null===d||void 0===d?void 0:d.some((function(a){return a===e.bookId})))?"This book has already been saved!":"Save this Book!")))})))))},Y=Object(N.a)(c||(c=Object(_.a)(["\n{\n    me{\n        _id\n        username\n        email\n        bookCount\n        savedBooks{\n            bookId\n            authors\n            description\n            title\n            image\n            link\n        }\n    }\n}\n"]))),J=t(135),K=function(){var e=Object(J.a)(Y),a=e.loading,t=e.data,n=Object(U.a)(G),r=Object(f.a)(n,2),o=r[0],l=r[1].error,c=(null===t||void 0===t?void 0:t.me)||[],i=function(){var e=Object(h.a)(E.a.mark((function e(a){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T.loggedIn()?T.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,o({variables:{bookId:a}});case 6:if(t=e.sent,t.data,!l){e.next=10;break}throw new Error("Something went wrong!");case 10:L(a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(a){return e.apply(this,arguments)}}();return a?s.a.createElement("h2",null,"LOADING..."):s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(O.a,null,s.a.createElement("h1",null,"Viewing saved books!"))),s.a.createElement(O.a,null,s.a.createElement("h2",null,c.savedBooks.length?"Viewing ".concat(c.savedBooks.length," saved ").concat(1===c.savedBooks.length?"book":"books",":"):"You have no saved books!"),s.a.createElement(I.a,null,c.savedBooks.map((function(e){return s.a.createElement(x.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(x.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(x.a.Body,null,s.a.createElement(x.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(x.a.Text,null,e.description),s.a.createElement(y.a,{className:"btn-block btn-danger",onClick:function(){return i(e.bookId)}},"Delete this Book!")))})))))},z=t(134),A=t(133),M=t(131),H=t(136),R=t(45),W=t(39),Q=t(128),X=function(){var e=Object(i.useState)({username:"",email:"",password:""}),a=Object(f.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(f.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(f.a)(l,2),u=c[0],m=c[1],d=Object(U.a)(P),b=Object(f.a)(d,1)[0],g=function(e){var a=e.target,r=a.name,o=a.value;n(Object(W.a)(Object(W.a)({},t),{},Object(R.a)({},r,o)))},p=function(){var e=Object(h.a)(E.a.mark((function e(a){var r,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,b({variables:Object(W.a)({},t)});case 6:r=e.sent,o=r.data,console.log(o),T.login(o.addUser.token),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0),m(!0);case 16:n({username:"",email:"",password:""});case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(j.a,{noValidate:!0,validated:o,onSubmit:p},s.a.createElement(Q.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your signup!"),s.a.createElement(j.a.Group,null,s.a.createElement(j.a.Label,{htmlFor:"username"},"Username"),s.a.createElement(j.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:g,value:t.username,required:!0}),s.a.createElement(j.a.Control.Feedback,{type:"invalid"},"Username is required!")),s.a.createElement(j.a.Group,null,s.a.createElement(j.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(j.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:g,value:t.email,required:!0}),s.a.createElement(j.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(j.a.Group,null,s.a.createElement(j.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(j.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:g,value:t.password,required:!0}),s.a.createElement(j.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(y.a,{disabled:!(t.username&&t.email&&t.password),type:"submit",variant:"success"},"Submit")))},Z=function(){var e=Object(i.useState)({email:"",password:""}),a=Object(f.a)(e,2),t=a[0],n=a[1],r=Object(U.a)(q),o=Object(f.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(f.a)(l,1)[0],u=Object(i.useState)(!1),m=Object(f.a)(u,2),d=m[0],b=m[1],g=function(e){var a=e.target,r=a.name,o=a.value;n(Object(W.a)(Object(W.a)({},t),{},Object(R.a)({},r,o)))},p=function(){var e=Object(h.a)(E.a.mark((function e(a){var r,l;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,o({variables:Object(W.a)({},t)});case 6:r=e.sent,l=r.data,console.log(l),T.login(l.login.token),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0),b(!0);case 16:n({username:"",email:"",password:""});case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(j.a,{noValidate:!0,validated:c,onSubmit:p},s.a.createElement(Q.a,{dismissible:!0,onClose:function(){return b(!1)},show:d,variant:"danger"},"Something went wrong with your login credentials!"),s.a.createElement(j.a.Group,null,s.a.createElement(j.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(j.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:g,value:t.email,required:!0}),s.a.createElement(j.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(j.a.Group,null,s.a.createElement(j.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(j.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:g,value:t.password,required:!0}),s.a.createElement(j.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(y.a,{disabled:!(t.email&&t.password),type:"submit",variant:"success"},"Submit")))},ee=function(){var e=Object(i.useState)(!1),a=Object(f.a)(e,2),t=a[0],n=a[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(z.a,{bg:"dark",variant:"dark",expand:"lg"},s.a.createElement(O.a,{fluid:!0},s.a.createElement(z.a.Brand,{as:g.b,to:"/"},"Google Books Search"),s.a.createElement(z.a.Toggle,{"aria-controls":"navbar"}),s.a.createElement(z.a.Collapse,{id:"navbar"},s.a.createElement(A.a,{className:"ml-auto"},s.a.createElement(A.a.Link,{as:g.b,to:"/"},"Search For Books"),T.loggedIn()?s.a.createElement(s.a.Fragment,null,s.a.createElement(A.a.Link,{as:g.b,to:"/saved"},"See Your Books"),s.a.createElement(A.a.Link,{onClick:T.logout},"Logout")):s.a.createElement(A.a.Link,{onClick:function(){return n(!0)}},"Login/Sign Up"))))),s.a.createElement(M.a,{size:"lg",show:t,onHide:function(){return n(!1)},"aria-labelledby":"signup-modal"},s.a.createElement(H.a.Container,{defaultActiveKey:"login"},s.a.createElement(M.a.Header,{closeButton:!0},s.a.createElement(M.a.Title,{id:"signup-modal"},s.a.createElement(A.a,{variant:"pills"},s.a.createElement(A.a.Item,null,s.a.createElement(A.a.Link,{eventKey:"login"},"Login")),s.a.createElement(A.a.Item,null,s.a.createElement(A.a.Link,{eventKey:"signup"},"Sign Up"))))),s.a.createElement(M.a.Body,null,s.a.createElement(H.a.Content,null,s.a.createElement(H.a.Pane,{eventKey:"login"},s.a.createElement(Z,{handleModalClose:function(){return n(!1)}})),s.a.createElement(H.a.Pane,{eventKey:"signup"},s.a.createElement(X,{handleModalClose:function(){return n(!1)}})))))))},ae=new b.a({request:function(e){var a=localStorage.getItem("id_token");e.setContext({headers:{authorization:a?"Bearer ".concat(a):""}})},uri:"/graphql"});var te=function(){return s.a.createElement(d.a,{client:ae},s.a.createElement(g.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(ee,null),s.a.createElement(p.c,null,s.a.createElement(p.a,{exact:!0,path:"/",component:V}),s.a.createElement(p.a,{exact:!0,path:"/saved",component:K}),s.a.createElement(p.a,{render:function(){return s.a.createElement("h1",{className:"display-2"},"Wrong page!")}})))))};m.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(te,null)),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.b9e183f3.chunk.js.map