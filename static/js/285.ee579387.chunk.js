"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[285],{285:function(e,r,t){t.r(r);t(2791);var n=t(9434),a=t(4508),u=t(184);r.default=function(){var e=(0,n.I0)();return(0,u.jsxs)("form",{onSubmit:function(r){r.preventDefault();var t={name:r.currentTarget.elements.userName.value,email:r.currentTarget.elements.userEmail.value,password:r.currentTarget.elements.userPassword.value};e((0,a.yY)(t))},children:[(0,u.jsxs)("label",{children:[(0,u.jsx)("p",{children:"Name:"}),(0,u.jsx)("input",{type:"text",placeholder:"Full name",required:!0,name:"userName"})]}),(0,u.jsxs)("label",{children:[(0,u.jsx)("p",{children:"Email:"}),(0,u.jsx)("input",{type:"email",placeholder:"Email adress",required:!0,name:"userEmail"})]}),(0,u.jsxs)("label",{children:[(0,u.jsx)("p",{children:"Password:"}),(0,u.jsx)("input",{type:"password",placeholder:"Password",required:!0,name:"userPassword"})]}),(0,u.jsx)("br",{}),(0,u.jsx)("button",{type:"submit",children:"Sign Up"})]})}},4508:function(e,r,t){t.d(r,{Fv:function(){return p},yY:function(){return l}});var n=t(5861),a=t(7757),u=t.n(a),s=t(5294),c=t(6382),o=s.Z.create({baseURL:"https://connections-api.herokuapp.com/"}),i=function(e){o.defaults.headers.common.Authorization="Bearer ".concat(e)},p=(0,c.hg)("auth/login",function(){var e=(0,n.Z)(u().mark((function e(r,t){var n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.post("/users/login",r);case 3:return n=e.sent,a=n.data,i(a.token),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",t.rejectWithValue(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r,t){return e.apply(this,arguments)}}()),l=(0,c.hg)("auth/register",function(){var e=(0,n.Z)(u().mark((function e(r,t){var n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.post("/users/signup",r);case 3:return n=e.sent,a=n.data,i(a.token),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",t.rejectWithValue(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r,t){return e.apply(this,arguments)}}());(0,c.hg)("auth/logOut",function(){var e=(0,n.Z)(u().mark((function e(r,t){var n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.post("/users/logout");case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",t.rejectWithValue(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r,t){return e.apply(this,arguments)}}()),(0,c.hg)("auth/refresh",function(){var e=(0,n.Z)(u().mark((function e(r,t){var n,a,s,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.getState(),a=n.auth.token,i(a),e.next=6,o.get("/users/current");case 6:return s=e.sent,c=s.data,e.abrupt("return",c);case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",t.rejectWithValue(e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(r,t){return e.apply(this,arguments)}}(),{condition:function(e,r){return!!r.getState().auth.token}})}}]);
//# sourceMappingURL=285.ee579387.chunk.js.map