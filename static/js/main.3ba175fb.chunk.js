(this.webpackJsonpsightreading=this.webpackJsonpsightreading||[]).push([[0],{108:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(15),i=o.n(a),s=(o(54),o(36)),l=o(37),c=o(45),d=o(44),p=(o(55),{notesDisplayed:[],notesDisplayedString:"",correctNote:"placeholder",pianoClickedKey:"",indexd:0,opacity:0,rightorWrong:"placeholder",isSharp:!1,isFlat:!1,isTreble:!1,afterNote:"2"}),h=o(3),y=["c","d","e","f","g","a","b"],b=["cd","de","fg","ga","ab"];function g(){p.opacity=1,p.rightorWrong="Correct."}function f(){p.opacity=1,p.rightorWrong="Wrong."}function u(e,t,o){var n=!1,r=!1;p.correctNote=e[t],"^"===e[t].substring(0,1)&&(n=!0),"_"===e[t].substring(1,2)&&(r=!0),!0===n?function(e,t){var o=e.toUpperCase(),n=t.toUpperCase();p.correctNote="".concat(o," Sharp"),"C"===o&&"CD"===n||"D"===o&&"DE"===n||"E"===o&&"F"===n||"F"===o&&"FG"===n||"G"===o&&"GA"===n||"A"===o&&"AB"===n||"B"===o&&"C"===n?g():f()}(e[t].substring(1,2),o):!0===r&&function(e,t){var o=e.toUpperCase(),n=e.toUpperCase();p.correctNote="".concat(o," Sharp"),"C"===o&&"B"===n||"D"===o&&"CD"===n||"E"===o&&"DE"===n||"F"===o&&"E"===n||"G"===o&&"FG"===n||"A"===o&&"GA"===n||"B"===o&&"AB"===n?g():f()}(e[t].substring(1,2)),o.toUpperCase()===e[t].toUpperCase()?g():f(),t++}function j(e){p.pianoClickedKey="",p.pianoClickedKey=e,u(p.notesDisplayed,p.indexd,p.pianoClickedKey),p.indexd++,p.opacity=1}var x={blackkeys:{width:"25px",height:"100px",borderStyle:"solid",borderColor:"white",borderRadius:"5px",borderWidth:"2px",backgroundColor:"black"},whitekeys:{width:"50px",height:"200px",borderStyle:"solid",borderColor:"black",borderRadius:"5px",borderWidth:"2px",backgroundColor:"white"}},D=function(e){return Object(h.jsxs)("div",{style:{display:"flex",position:"absolute"},children:[y.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("div",{style:x.whitekeys,onClick:function(){return j(e)}})},e)})),b.map((function(e,t){return Object(h.jsxs)("div",{style:{position:"absolute",left:"".concat((o=t+1,o>2?54*(o+1)-15:54*o-15),"px")},children:[Object(h.jsx)("div",{style:x.blackkeys,onClick:function(){return j(e)}}),e.at]},e);var o}))]})},C=o(128),S=o(127),O=o(126),v=o(38),k=["a","b","c","d","e","f","g","A","B","C","D","E","F","G"],m=["^a","^b","^c","^d","^e","^f","^g","^A","^B","^C","^D","^E","^F","^G"],M=["_a","_b","_c","_d","_e","_f","_g","_A","_B","_C","_D","_E","_F","_G"];function N(e){if(p.opacity=0,p.notesDisplayed=[],p.notesDisplayedString="!mark!",p.isTreble?(p.afterNote=",,2",p.notesDisplayedString="V: V3 clef=bass\n[V: V3]!mark!"):p.afterNote="2",!1===p.isFlat&&!1===p.isSharp)for(var t=0;t<e;t++){var o=Math.floor(Math.random()*k.length);p.notesDisplayed.push(k[o]),p.notesDisplayedString+=k[o],p.notesDisplayedString+=p.afterNote}else if(!0===p.isFlat&&!1===p.isSharp)for(t=0;t<e;t++){var n=Math.floor(2*Math.random()),r=(o=Math.floor(Math.random()*k.length),Math.floor(Math.random()*M.length));0===n?(p.notesDisplayed.push(k[o]),p.notesDisplayedString+=k[o],p.notesDisplayedString+=p.afterNote):(p.notesDisplayed.push(M[r]),p.notesDisplayedString+=M[r],p.notesDisplayedString+=p.afterNote)}else if(!1===p.isFlat&&!0===p.isSharp)for(t=0;t<e;t++){n=Math.floor(2*Math.random()),o=Math.floor(Math.random()*k.length);var a=Math.floor(Math.random()*m.length);0===n?(p.notesDisplayed.push(k[o]),p.notesDisplayedString+=k[o],p.notesDisplayedString+=p.afterNote):(p.notesDisplayed.push(m[a]),p.notesDisplayedString+=m[a],p.notesDisplayedString+=p.afterNote)}else for(t=0;t<e;t++){n=Math.floor(3*Math.random()),o=Math.floor(Math.random()*k.length),a=Math.floor(Math.random()*m.length),r=Math.floor(Math.random()*M.length);0===n?(p.notesDisplayed.push(k[o]),p.notesDisplayedString+=k[o],p.notesDisplayedString+=p.afterNote):1===n?(p.notesDisplayed.push(m[a]),p.notesDisplayedString+=m[a],p.notesDisplayedString+=p.afterNote):(p.notesDisplayed.push(M[r]),p.notesDisplayedString+=M[r],p.notesDisplayedString+=p.afterNote)}p.indexd=0,console.log(p.notesDisplayedString)}N(10);var w=function(e){Object(c.a)(o,e);var t=Object(d.a)(o);function o(e){var n;return Object(s.a)(this,o),(n=t.call(this,e)).state={opacity:p.opacity,rightorWrong:p.rightorWrong,notestoDisplay:p.notesDisplayedString},n}return Object(l.a)(o,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{style:{color:"white"},children:[Object(h.jsx)("p",{unselectable:"on",className:"answerDisplay",style:{display:"flex",justifyContent:"center"},children:"SIGHT READING PRACTICE"}),Object(h.jsx)("div",{style:{display:"flex",backgroundColor:"white",justifyContent:"center"},children:Object(h.jsx)(v.Notation,{notation:this.state.notestoDisplay,engraverParams:{scale:window.innerWidth/500}})}),Object(h.jsx)("p",{unselectable:"on",className:"answerDisplay",style:{display:"flex",opacity:p.opacity,justifyContent:"center"},children:this.state.rightorWrong}),Object(h.jsx)("p",{unselectable:"on",className:"answerDisplay",style:{display:"flex",opacity:p.opacity,justifyContent:"center"},children:p.correctNote.toUpperCase()}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center"},onClick:function(){return e.setState({opacity:p.opacity,rightorWrong:p.rightorWrong})},children:Object(h.jsx)(D,{})}),Object(h.jsxs)("div",{style:{paddingTop:"200px",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(C.a,{control:Object(h.jsx)(S.a,{color:"primary",inputProps:{"aria-label":"secondary checkbox"},style:{color:"white"},onChange:function(){return p.isSharp=!p.isSharp}}),label:"Include Sharps"}),Object(h.jsx)(C.a,{control:Object(h.jsx)(S.a,{color:"primary",inputProps:{"aria-label":"secondary checkbox"},style:{color:"white"},onChange:function(){return p.isFlat=!p.isFlat}}),label:"Include Flats"}),Object(h.jsx)(C.a,{control:Object(h.jsx)(S.a,{color:"primary",inputProps:{"aria-label":"secondary checkbox"},style:{color:"white"},onChange:function(){return p.isTreble=!p.isTreble}}),label:"Treble"})]}),Object(h.jsx)("div",{children:Object(h.jsx)(O.a,{variant:"contained",onClick:function(){N(10),e.setState({notestoDisplay:p.notesDisplayedString})},children:"New Notes"})})]})]})}}]),o}(r.a.Component);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))},54:function(e,t,o){},55:function(e,t,o){}},[[108,1,2]]]);
//# sourceMappingURL=main.3ba175fb.chunk.js.map