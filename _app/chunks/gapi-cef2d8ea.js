import{a1 as i}from"./vendor-b4390f7c.js";const o="AIzaSyBB2fk24uJrAXx_Q7DVPD0XdzUZ6xaFbRI",r="1003739652458-kgklao4co5lrtffceqeq8ng2m7m1pde6.apps.googleusercontent.com";async function u(){return new Promise(a=>{const t=document.createElement("script");t.src="https://apis.google.com/js/api.js",t.onload=async()=>{gapi.load("client:auth2",async()=>{await gapi.client.init({apiKey:o,clientId:r,scope:"https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.readonly",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]}),t.onload=void 0,a()})},document.head.appendChild(t)})}let n=null;async function e(){return n||(n=u().then(()=>{s=i(gapi.auth2.getAuthInstance().currentUser.get(),a=>{gapi.auth2.getAuthInstance().currentUser.listen(a)})})),n}let s;async function l(){return await e(),s}async function d(){return await e(),await gapi.auth2.getAuthInstance().signIn(),await l()}async function h(){await e(),gapi.auth2.getAuthInstance().signOut()}async function w(){return await e(),new Promise((a,t)=>{gapi.client.calendar.calendarList.list().execute((c,g)=>{a(c)})})}export{h as a,w as g,d as s,l as u};
