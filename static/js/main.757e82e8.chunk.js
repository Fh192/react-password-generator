(this["webpackJsonpreact-password-generator"]=this["webpackJsonpreact-password-generator"]||[]).push([[0],{12:function(s,e,t){s.exports={checkbox:"Checkbox_checkbox__2fEq7"}},17:function(s,e,t){},22:function(s,e,t){},24:function(s,e,t){"use strict";t.r(e);var a=t(0),n=t.n(a),r=t(6),c=t.n(r),A=(t(17),t(7)),o=function(s){for(var e=s.length,t=s.hasLowercase,a=s.hasNumbers,n=s.hasSymbols,r=[s.hasUppercase&&"ABCDEFGHIJKLMNOPQRSTUVWXYZ",t&&"abcdefghijklmnopqrstuvwxyz",a&&"0123456789",n&&"!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"].filter((function(s){return"boolean"!==typeof s})).join(""),c="",A=0;A<e;A++){var o=Math.round(Math.random()*(r.length-0)+0);c+=r.charAt(o)}return c},i=function(s){var e=0,t=s.length,a={digits:/[0-9]/.test(s)?10:0,lower:/[a-z]/.test(s)?26:0,upper:/[A-Z]/.test(s)?26:0,nonWords:/\W/.test(s)?33:0};for(var n in a)e+=a[n];var r=Math.log2(Math.pow(e,t));return r>=80?100:r>=60?75:r>=40?50:r>=25?25:0},d=function(s){navigator.clipboard.writeText(s)},l=t(2),h=l.c,j=(t(22),t(8)),g=t(4),u=t.n(g),b=t.p+"static/media/generate.bff03502.svg",w=t(5),p=Object(w.b)({name:"password",initialState:{password:"",passwordStrength:0,savedPasswords:[]},reducers:{setPassword:function(s,e){s.password=e.payload},setPasswordStrength:function(s,e){s.passwordStrength=e.payload},setSavedPasswords:function(s,e){var t=s.savedPasswords.includes(e.payload);console.log(t),t?s.savedPasswords=s.savedPasswords.filter((function(s){return s!==e.payload})):s.savedPasswords.unshift(e.payload)}}}),E=p.actions,m=E.setPassword,v=E.setPasswordStrength,f=E.setSavedPasswords,x=p.reducer,O=t(1),P=function(){var s=Object(l.b)(),e=Object(a.useState)(!1),t=Object(A.a)(e,2),n=t[0],r=t[1],c=h((function(s){return s.settings})),g=h((function(s){return s.password})),w=g.password,p=g.passwordStrength,E=h((function(s){return s.password.savedPasswords.includes(w)}));return Object(O.jsxs)("div",{className:u.a.generatedPassword,children:[Object(O.jsx)("input",{className:u.a.input,type:"text",value:w,contentEditable:"false",disabled:!0}),Object(O.jsxs)("div",{className:u.a.icons,children:[Object(O.jsx)("button",{onClick:function(){s(f(w))},children:Object(O.jsx)("img",{src:E?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB2CAMAAADfhxyTAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAj1QTFRFAAAA/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/scE/8wB/sEH/84B/sYF/sEH/scE/88A/sEH/sIH/88A/scE/8oD/88A/sIH/sMG/8oD/8wC/88A/sMG/sEH/sUF/8wB/80B/88A/sUF/84B/84A/88A/8oD/84A/8wC/8wC/sgE/84B/8oD/84A/sQG/8wC/sYE/80B/80B/sYE/84A/8gD/8oC/88A/88A/88A/sQG/88A/88A/8oC/8wB/88A/sYE/8wC/84B/sgE/88A/80B/8kD/scE/8kD/80B/80B/80B/8kD/8gD/8wC/8wB/8sC/8gD/8gD/sYE/sUF/88A/8wC/8sC/sEH/sUF/sUF/8gD/8kD/8wC/8wB/84A/88A/sEH/sEH/84A/sIH/sEH/sEH/sEH/sEH/84A/sQG/sEH/sEH/sQF/sEH/sEH/88A/sEH/8wB/sMG/84A/80B/sEH/88A/sEH/88A/sYE/scE/8sC/8wC/80B/84B/84A/88A/sQG/84A/sYE/scE/8sC/8oD/8sC/84B/80B/88A/sQG/88A/sQG/sQG/sQG/sQF/sQF/8wC/8gD/80B/88A/8kD/8gD/8sC/84B/8oD/80B/sMG/8sC/8gD/84A/8gD/sYF/84A/sUF/8sC/sgD/8gD/8wC/80B/84A/8wC/8kD/8kD/88A/8kD/sQF/8kD/8gD/scE/84A/80B/8wB/84A/84A2owM1gAAAL90Uk5TAF+v7/9AEM+ggCBw31C///L+8vLh9+f//vX69/b//vn8sP/9//D/kP70/2D//vP7//X9+f/+/+P6/er07T9Pf/4wn/Ppj/76+f5v/P/+/Nvh5ub////18/X7/cD2/eT7+Pnt6OrK8Pvr3Pz5+PzR+vD38/718dD0/frY9vD0+vPb2dDN9+Xf8vr98uXj+t7m9NTy8ff9+Pz/9Pbp9/v8/+Tq/v327vj38ej58/349/vv/f7a4PD98fru8ODb/MmxyKJNAAAGnklEQVR4nMWa+WPTZBjHy5p1a7d1xIN34CKsDetkmyArFdRSNhVF54Fj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":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB2CAMAAADfhxyTAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAGBQTFRFAAAA/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A/88A8dpniAAAACB0Uk5TAF+v7/9AEM+ggCBw31C/b0+fsJBgfzA/j8DwDy/QH+DHkQvVAAAE2klEQVR4nMVa24KqMAxEuSjqsogii7f9/788rpg2TVtoA+2ZJ0XLlCHThJQkYWO1TrN0nfNPwEaxyQasi/9GnWWb2NzbTKKMS71D1FkaV3V82Vm2j0ldpAr3ISb3PlPxFZH7QLireNRfGcUuGncFlN/wYRuLWhisEuJHs5kwWJ2IC49kM2Gwg/o5BoTBvl9fjnFtptxjdO8jIAe24/uriPkYNmtUsjqizTSRI9rsJA02IJ7NdFPFs9kZG2yAsFnostFwd0UENGGpicEGRLJZY6IRNjuFpLasYlFsphlsQAuHz+GobXYqMvPxJWEw2IAINrPe10twmxkNNiC4zYTBLtpPq8A2Gy0TAttMGGxl+DGszcbzVVibCYO1xp9D2azr6rYVz2DmOypstmnbrtOj0Z/wWFXq467JYAMq8r9DVf20bd11jnxF162MhAi2S1rZh6RVdbROo2vbdUUnboa9DqcPxiPTkJNoR65Sg8lgn9N4nCUdMgLqVjlgxELF9GiEd9gcp/+HMPbY9eN1phNKEC5Ix2vw0/QZEHakW2VD3/dluc+nFutdvi/Lvne7i6dkJM76vinLcz7JaJ7F5DT6hBxI5xCaUeT5uSybvte4r+LzKg/ej35N4xtxi4Ig29xCU79wl/d4K9PTS+97cOoOhddLZXQb0np69CzgNf+vrCwe6IB9xVwCePF5vINZIf8JSI1X0Objo6JBB23peTZu2OqoOYMXt0Dh/sTUSkGJG+KbZwDqe2qjTrDVQnitRtRXrfLJr4h8aa9hbz0MRdcFkS/sNd1bFMG8hr21teQohXwxr9m8RRHAa3ZvUeCqZxGvYW9dJ54TF/bauLcovrDX5ob7lLcoFvTatLcolgr3m4u3NHJc1R254e7qLYoFvHZ39haFktc44e7jLYozDnd/8ruXtyhwuHu/TXFD1C7e0shRuPteeI2oWQ84yGuuPROAbAO4ekuDCHdf2TqGtwgg2lPfgaIFwd+hhev232eFvg//tRs4g7mTOAZYTnsutWgc+4YaSmBc7i/+CUSHk9vchCKG86IWLC7cDVpIZ5yadf0Zy91AAd04BQSsLsx2uui8cfZfujmDk6ScNXXg5u1hwFP5mjUaSgfexhGEKt0EdAPUiay3GWdaVKRRzuDznMFoUeQ0DB0SyW1ssZ2TTiBYrInk+bd+HK0PbTPSiUjBlh7E7bN6pLa5QePUO/mjRGIuemq5M3MwKz8jVmFlMXrkqe4prY3Cw6/+6QQSieGB7KbtCBmFh/n512xwWj2R1KaNMIPw7HRiTSRP2xaeJrxIJ75lsqVEvY3sQ1Hh2cWqOZGsyM7OQ/1KhOemE1OJeidy95ck/x0RHjTyXF0MJSqV+/NkW16Vo1h4ZrGqJxIq9wkiaNeoP0jhmekESlRIJAa5JazC84pVCJOhRLXILaEJP/RJWMWqmkiscqMBZFv18B7ISid4ZRmVGw0hfquezGJVlqiTckvsVeGzl/Dw0adYFYnEQW4JXXhOOgFGwmyRW4IKD+M9itVLZsKvi3JU+A/cuY3vIZRu6YgK78ttuO7ePVSp8H7cCRXu1y8NasL7ZJNSHeootwQV3sdjBZ64h9wSivAPr6Gym+opt4QU/uE5+d2wvFy95ZYA4Rltzd2+LM/z3jQpzq9T2C/6H/V0WWNnFt6LAAAAAElFTkSuQmCC",alt:""})}),Object(O.jsx)("button",{onClick:function(){return d(w)},children:Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAACtCAYAAACwYJ31AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABHhJREFUeNrs3N9RGlscwHHCUADpgFQQrECtIFhBQgVeH3xWn31QK4BUEFKBWMH1VhBuB5Zwz7mezJCMIln+/Xb5fGbOMEk0kN1vzp4Fd1stAADeLfuFg+F5Lz+k8SmNXhmsxzSNWRrfJ6PrSeMiSvH008NNGkf29VY8pXGXxm0K6qn2EaWALtPDhf26E3lmOkkhPdYyohRPNz18M/uEMEwhjSO/wPYrv38voDBG6T/1l1pFlF5wXv/07btQbsraNH5E6YXm2ecv+yycbjm5qcVMZBEd11HUw1r7t1N566DYPkefiT7bR7WYjXqRIzIL1SSkyBE5I6uH0DMR9fAx2gvqrPj90zQe7NfKqpwNd5sW0cNkdH2phWrSIrkRb6k4nCEiRISIQESIqPaeRMSqqvzo64OIWDWIRxExb/yHh7THiJcUiWiHUhCz9HD2B+unoTURL4U0LnEsmpFybMdRLx8SUZyQPqRx1Xr+UPtnONMS2EHk6886dmGYkPJMdOkUn70kIkSEiBAR1PDsrNyxJN9sq9d6/qH1rt24FvkjmFka0/ImaPMiKvcJOC0BsX5Hc9t6mh6+LntLm04N4nGvpN0Ela+2zVdFn731Rmc7eED5gsofAtppTPdv3UiiHTyge2uencvbf+GNttpBA+oJKJzRazfaijoTjQQU0rdaRFSmTWugmHrljsLhZ6JT+yq009ARlWOuW9wEX2in/TSIPBM5jNXDYeSIDu2fWuhHjsgZmYjYl3XR/C+a8DPW+VPnY/u18slMPmVf6WZbZiJWJiJEhIgQEYgIESEiRAQiQkSICBGBiBARIkJEICJEhIgQEYgIESEiRAQiQkSICBGBiBARIkJEICJEhIgQEYgIESEiRAQiQkSICBGBiBARIkJEICJEhIgQEYgIESEiRAQiQkSICBGBiBARIkJEICJEhIgQEYgIESEi9kJnxe+/GAzPL974mkkaV5PR9aPNbSaqapDG3ym2LzZ38yN62vBzjYTU/IimW3i+mxRS12ZvbkTft/B8OSCzUYMjmmzhkJYd2uwNjSidPeWA7rY0G9Hgs7PbNGY2C5UjKrPRyYYPa94vavhM1CpvCg43+JxfbfaGR1RCyovsgw3MSLfeud6TiOZmpA9pjNd4GLuyyZtn4WdnZY00HAzP887Pn5ENKpxd/X/Wl/6uS5t7DyOai2lW1kk5qH567KXRX+Jbp3kGKjGyzxG9cJjLY2LzsXBNBCJCRIgIEYGIEBEiQkQgIkSEiBARiAgRISJEBCJi6zoN+Df0B8Pze7uysp6Inq8+OdKCw9lPrgqph2nkiP6xf2phFjkilyHVwy83RHsX7dWlRfKPdSz22NySYzK6fh/9FN/1+rHdRV9Y5ytsx63t3ISUamuh2/ARFWfO1EIavnRfhZARlev9T+yzcAG9eIQI+7FHecHHZqQwAY1f+8PQn52VkA6skXYmHxEOFgUU8hR/wal/vsHWactHHNuK5+6teGoX0VxMvRLSx9ZyN9pi+XD+zbO++2oC9fOfAAMArhT9gmQVatYAAAAASUVORK5CYII=",alt:"copy"})}),Object(O.jsx)("button",{className:n?u.a.animate:"",onClick:function(){r(!0);var e=o(Object(j.a)({},c)),t=i(e);s(m(e)),s(v(t))},onAnimationEnd:function(){return r(!1)},children:Object(O.jsx)("img",{src:b,alt:"generate"})})]}),Object(O.jsx)("div",{className:u.a.strengthWrap,children:Object(O.jsx)("div",{className:"".concat(u.a.strength," ").concat(u.a["strength".concat(p)])})})]})},S=Object(w.b)({name:"settings",initialState:{length:15,hasUppercase:!0,hasLowercase:!0,hasNumbers:!0,hasSymbols:!0},reducers:{setLength:function(s,e){s.length=e.payload},setPasswordParam:function(s,e){var t=e.payload,a=t.has;s[t.type]=a}}}),k=S.actions,N=k.setLength,G=k.setPasswordParam,B=S.reducer,C=t(12),R=t.n(C),D=function(s){var e=s.checked,t=s.label,a=s.paramType,n=Object(l.b)();return Object(O.jsxs)("div",{className:R.a.checkbox,children:[Object(O.jsx)("input",{type:"checkbox",id:t,checked:e,onChange:function(s){var e=s.currentTarget.checked;n(G({type:a,has:e}))}}),Object(O.jsx)("label",{htmlFor:t,children:t})]})},F=t(3),I=t.n(F),y=function(){var s=Object(l.b)(),e=h((function(s){return s.settings})),t=e.length,n=e.hasLowercase,r=e.hasNumbers,c=e.hasSymbols,A=e.hasUppercase,d=function(e){var t=e.currentTarget.value;!/[a-z]/gi.test(t)&&+t<=50&&s(N(+t))};return Object(a.useEffect)((function(){var t=o(Object(j.a)({},e)),a=i(t);s(m(t)),s(v(a))}),[s,e]),Object(O.jsxs)("div",{className:I.a.passwordSettings,children:[Object(O.jsx)("div",{className:I.a.title,children:Object(O.jsx)("h2",{children:"Customize your password"})}),Object(O.jsxs)("form",{className:I.a.form,children:[Object(O.jsxs)("div",{className:I.a.length,children:[Object(O.jsx)("div",{className:I.a.lengthTitle,children:Object(O.jsx)("label",{htmlFor:"passLen",children:"Password Length"})}),Object(O.jsxs)("div",{className:I.a.lengthInputs,children:[Object(O.jsx)("input",{type:"text",id:"passLen",value:t,onChange:d,onBlur:function(e){+e.currentTarget.value<=0&&s(N(1))}}),Object(O.jsx)("input",{className:I.a.range,type:"range",min:"1",max:"50",step:"1",value:t,onChange:d})]})]}),Object(O.jsxs)("div",{className:I.a.checkboxWrap,children:[Object(O.jsx)(D,{label:"Uppercase",checked:A,paramType:"hasUppercase"}),Object(O.jsx)(D,{label:"Lowercase",checked:n,paramType:"hasLowercase"}),Object(O.jsx)(D,{label:"Numbers",checked:r,paramType:"hasNumbers"}),Object(O.jsx)(D,{label:"Symbols",checked:c,paramType:"hasSymbols"})]})]})]})},H=function(){var s=h((function(s){return s.password})).password,e=Object(a.useState)(!1),t=Object(A.a)(e,2),n=t[0],r=t[1];return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"subtitle",children:Object(O.jsx)("h2",{children:"PASSWORD GENERATOR TOOL"})}),Object(O.jsx)("div",{className:"title",children:Object(O.jsx)("h1",{children:"Generate a secure password"})}),Object(O.jsxs)("div",{className:"main",children:[Object(O.jsx)(P,{}),Object(O.jsx)(y,{})]}),Object(O.jsx)("div",{className:"copy ".concat(n?"copyScale":""),onClick:function(){r(!0),d(s)},onAnimationEnd:function(){return r(!1)},children:Object(O.jsx)("button",{children:"Copy password"})})]})})},T={password:x,settings:B},J=Object(w.a)({reducer:T,devTools:!1});c.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(l.a,{store:J,children:Object(O.jsx)(H,{})})}),document.getElementById("root"))},3:function(s,e,t){s.exports={passwordSettings:"PasswordSettings_passwordSettings__1xDj2",title:"PasswordSettings_title__2tELK",form:"PasswordSettings_form__3KwNg",length:"PasswordSettings_length__H3-eO",lengthTitle:"PasswordSettings_lengthTitle__lh7Cg",lengthInputs:"PasswordSettings_lengthInputs__3TXPi",range:"PasswordSettings_range__1Sc4u",checkboxWrap:"PasswordSettings_checkboxWrap__3M0tz"}},4:function(s,e,t){s.exports={generatedPassword:"GeneratedPassword_generatedPassword__3F6Ns",input:"GeneratedPassword_input__neqI-",icons:"GeneratedPassword_icons__1w4Tw",strengthWrap:"GeneratedPassword_strengthWrap__20vh3",strength:"GeneratedPassword_strength__3wjES",strength25:"GeneratedPassword_strength25__1JS-f",strength50:"GeneratedPassword_strength50__2quSJ",strength75:"GeneratedPassword_strength75__2WlVP",strength100:"GeneratedPassword_strength100__1Emeo",animate:"GeneratedPassword_animate__1WEVe",spinBtn:"GeneratedPassword_spinBtn__U4vJL"}}},[[24,1,2]]]);
//# sourceMappingURL=main.757e82e8.chunk.js.map