var h=Object.defineProperty,v=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var f=(n,a,s)=>a in n?h(n,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[a]=s,g=(n,a)=>{for(var s in a||(a={}))x.call(a,s)&&f(n,s,a[s]);if(u)for(var s of u(a))S.call(a,s)&&f(n,s,a[s]);return n},A=(n,a)=>v(n,F(a));import{j as y,R as V,a as K}from"./vendor.5d8efa79.js";const P=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function s(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(l){if(l.ep)return;l.ep=!0;const i=s(l);fetch(l.href,i)}};P();var B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAA0aSURBVHic7VppcFVVtl57r31uGJRBQNGkZZBJu3mAD0eMEFCBBkFAeEAL7WyLoKC2+lTK+0pbcGibNiIgIKLQIhIIAiINJMw40OJEMUWJoogyBgGBe/f3vR8JbaCAe04Aq169fFWpSvZew7dW9nTW3iLlKEc5ylGOcpTj/yvMr+3w2nU8Ly2RbOSIaiaJKgHEKLnX0GyzFhsntaz8/a/J57QnoN1aNjIWnaxnBwVbKnmWgnLED4/4e7eCy1SQF/MyY0RW9cLTye+0JKBNPh3SpZc1HKCerUoF+oMFP3bgegvuduQuCxEFqylQPQAbWvBiJc/V4nY6cIkhR1ZecVZOPG5wqrmelgS0LuAdBnxFwUMK7lLwHCVXmINB11ktzfYT6d69dHd152WaerYtGQ1VlLTOc50Sj8U7nzP9VHK1p9LYYfhApjngNgdbF/u1sZJTFLwy0IOf9vzXz22Pp3f3op2ZzssnJcHPjiWCRjHgIkuOU7KeheQ8lbt1zvCpW84/VVxPyQhoXcAsUl6yIvcsamgWHUum2yc/3+K8vKhgJQsO37K/0hOLskxSRCSeT7dNdw+13jymYNJRHnq+XbVsMYaH9eMzf2wQEKMVbKfkDgvc/EDPjNkny/2UJODqAo4Qyq1KuTa/kfngeHI9PzrQOEb/DwUvVnBlmkn2VQiRlMkOppVC1toE+7zQofqnx9InaZ7L2XKLo7ykYAULeWBQn4y/nQz3U7MGkKZNoaQtqmcOpBId9C7T9lb7aZhCBitYVLwDSDUHjK26/8Dg+PXn7U9lI/vNb1qKmFwF0x3lqTtvOn9oWamXOQGZBextjOxZcoF5tyz6dy0t6qDgNIVY9dJ/xDXVpkXRHzVxc7pVLFKwgYM8ePPNdf9aFh5lSkDrjbyeIrkismxJQ9O6LDZERAYt2r1ePWVEu+qNy6I/YcKmumJkiYIZhnJDv9vqvxPVRuRdoO1XrEOR10XkkKXcF1W/NNRT9CR29ltuqVeons8oaAL4CTnjvqoT1UbkBCS9jBGRapYMJCFbo+qXhkJE/cmdbVTYoWQdOcskkmOj6kdKQOYG9hCR9obco6AGBv8V1WFpqIeoMLXgcTB15JozFLzGgWsd+K6C1856cd2NUWyETkBPUo2RJy3pY/TdFfQB0Dc67V+gQnEoewKQFutYvB1yuoW9T8FDTjA8P57vwtoInYCtBdLNkhcq+Nr8xsFCJfMseWnn1QcaloV8fNaWSgpWtkCFeD5DEy4N5+UGBUWTyO16T4MCJccq5AJUrdUzrI3QCVBwgIKMJewwERElJykoMTGRR8HDc3Y29Rp8pGC6Qs4Pin5Y9HzOlkgL2NSpa2IW7KQe33QZ2PhfIiICk60g1cuAsHZCJaDNRmYo2UbBZXObmi9FRKwLZii4X320afDI3O0DAuM/tOBFDjLekuMVbEWRT/769reh/3NuZ1pbBatakVxTcmTuOLjJegXzFWy1/NnPLwhjJ1QCXBLdFDQOeP1w2ztNzE/Wc6aSjfp9sK9lKhtD3is669F526c7cqQDD1qi99AuZ9/+eNfat1uit0KMg0zNfnPzuOde31o5JSefvEFBceSM0u0KTlbSBN7fECa2UAmwZFsFJWByXun2GDFJSRGy34n0H56/86oKklhtPbup5/uS8M2fuL72W4f7H+qR/pZJmuYWfF/B26rYg6vGTSxscTx7uS+vz7Reeii5j3QrS/c5n8wrqT+0CxVbGCEFL1fKdzObVtp8RAdMZQXFgffevmzPiruWFvW/OZ8VDnf3nEp96J87hlqPfAUzFHzanFErM97t3MKjfQzpc27hjtoZmSp4WsFGSq58ffymwST/fVqdMWr9pbkj181znktUWFPBymnJRN7i5z6td1jmiv9uUajAlxbSqrTu8ZBSoN1a1qiYTGx34PTcZmk9RIorPumVfx6uwP0K7lVwtYKZSjEK7rDgaw7MtZQnHdBGwS1OTL/472vmpfInIvLqq4VtVfCGA89T4dzAy3MGGKzg9QoaJfMtOMyB/RW8ScE9FnJPq0eaThIR+fjJj3McpHua2ozGjzf/7kS+Uo6ASj5RX0Ex4GYRkd4f7zsvvfK+PAUeUHCNAS8Zd1WV1kr7W+uRraBz4AMKLi0JfrbziWZhgxcRufXWunlBItFMidnq2dEAeQp2UfB9hb+m470Xtm0/+KL57e7/bT9H/EFJOuKNVX/5dPKq4auqOm++UVJw8FCDVL5SjoCunx34vXqZY8mhFrI8AN5U8BwHvJH4af/db7Svva+0/IPztlZWBn2tMFvBH57qWLNu6cJGFJA0uaM3FlrwbPXmxs73NppzLLmVw1bXDWAmKdhKwUIlP1SwlwV6NHrq0hOW0FKOAE2aSgqK8+wSAPOVrKbgn169skr/o4MXEXm+fe19z3SoMdZ5LlDw/PjsHWX60hMRyXllQ2MLnq+e844XvEjxvP+q4YbWDhJXMkPBXgpK4HlmKh+pEyD+cEX3EgW3KHzrCVeeOSaVngFzikkke6SSPR6ChLlRQVEjKWsFvXr18k2faPE/TtBKPQsUDLXCp5QJiJ+UFAsuCuCbT7ii6nFLXkcYDg7OVDChYPcw8seCEt2UPFQh+XPo2l/j+CUfKjhGQbGUPSl5prQIu6t4q8Pq8VdW3RmWSLzDb3YqJF/Ji5+burVeao0j8U72unpKXmwheVlDWuyOoquUDCXFeZ+Sb8oExNzBDcVTQCJ/9DgiR0GJ0UeeBg7sUXLSy4mqq0SGguIMNqaSTZmA11pU363gVvW8KCoRGpuroLdA9ASQPRRMBnpgZlRdBVsqWFTz2VYp7xnDHYUhy5VSf8iC3fWjEPlz99o/qucSBS8b+eZ3vwmrt/CF9ekKXubAxVffe/G2KD6/f2RlXQXrKLjMSOrtN1QCAmChgiIG10UhIyJiwRwlTYVDyVAfJyIiYpLdFTTWS+RrME2yXckCGOrgFaoQEfPJdyiabWF6iMjoSISI6Up50ZI9J0/+epIU/dJXVUSkdIOIVC0S8WBPBcGkHvGlF8qf5x8VpHgfSjd0WfyB+TvfU/A6FV40rH3NdVFITZi46RP1bHaMq/BjXY+XtOHrWLVEw5Z3tUyE9bPt/qWNAm/WKbj8zOzMzDA6oUtRzmOUFWmvxEARGRhWb8KETb3V8z8UXK+Uz34JWOSI3/+dBBElf6eQC2VHMDk/nt83K56VDOMrSJo/K2mUeCksv/AXI6R5fO72TxRoYoxtGu9Ua0MqlfHjv2oWGFmu4F4SLW+6o+G3YVytGr6qqvFuvgUvUXLaDhT1SZWEPQNXNDHGf65kYcUftjYxb/fyYXxFuhmKz9nW2XrMUnDWYzfU7nIi2TH/WF+z4oHgIwUzAuCaXnc2XBzF15r4mrO8ObBAKS3Uc5oTzleImKQP1PAMBxEFxEHEeohCuih5pRLd00a2Cb12RL4a+0vu1ukKdlNytYJp6lnBFh+VKzsyVnxqlDMt4IrP47i/z+0Ny3SDu/bpD2rYA/q+BRuccL34ZSq9l/by1R2j+IhcjnZGB1omWinYQsGdltysYFLJXUrZ5yCHLCAK1lPyAuXxr8tTocmjl+4seHxVoGCRAg+piDiPvRaSUCkeAQrTXMlHFdwRE7kzcjxRFR7uWmvL33K++4MF37Pgfkn4bgP61910tNyU8RuvUy/zLKSPiKyI6kdEpGDoqubqWcdSptQZfvkrR/fvHri4nor5u4JQ4GYzOmvzseycCGV6IjOkR/oCCxmoYEbMmgUTJ25OP1rmnM3f5in4owN6RrmpOYKcR9fiYqzPPbpv1+D8ujEx8xQ814EPutFZZXotUuY3QoP6ZIx2xUOvPphc8dprBf9Zuj8rnpVUz7cVPOdAjdqhKrRHw3npqpSDFfaZuaXbi+5bella0r2vYEPr5Skd3abMr0RO6pHUnTfVGWbJPymYHiTNsiljv7zlCONGpigp6tE7qu1Nj6ysq8LmSuTVyL58j4gIheanQUvuDjzzFajliCHBmNZlfh0icgpeid36x3pjnJeOShYp8Or0URsWTB+54UIRkc4DGi1XcLNCuufHN1VIZas0HE3XklJcrkjxPr930LLFSnlZwf1KdtZRWSNOlv8peSbX94768yG2mYIzFGwXAz6d++K6sQv/vr6per6lYBWttK9TFJsO7KogbFK+3n3f0jeN8V8omangrJhICzeqzdzUVlLjlD+UnJ29tr1SnlGUnP3BrxWs4yA5VzzSNNTd/ZaHVl7oPD9TUEtsGEf5wpKPp428OnJ94EQ4LS9FSZqFL3zRyYkZpJ7tlIcDkW/U43NLrlORbeqx30GSCtRUspaC9RW8RMGzSwKHgnlKjq5YM3OG+b/yVLY0Pnx2TW1Bspv1bKPgVQqel+KL8HuFrFRyQexQcnall1tH3tuj4Fd/Lv/l8FVVD+0zDZSo7rxUU8IEwiKB2Vnx0P6C6iOyIhVAy1GOcpSjHOUoRznKiv8FcSl4nY88IhYAAAAASUVORK5CYII=";const e=y.exports.jsx,r=y.exports.jsxs;function U(n){const{positions:a}=n;return r("ul",{className:"menu p-4 shadow-md text-gray-600 bg-base-100",style:{height:"fit-content"},children:[e("li",{className:"menu-title",children:e("span",{children:"Players per position"})}),a.map(({id:s,position:t,numOfPlayers:l})=>r("li",{className:"flex flex-row justify-between items-center",children:[e("span",{children:t}),e("div",{className:"badge w-7 badge-primary items-center",children:l})]},s))]})}function C(n){const{players:a,category:s,top:t}=n,l=3,i=a.sort((o,c)=>c[s]-o[s]).slice(0,t||l).map(o=>A(g({},o),{average:(o[s]/o.appearances).toFixed(2)||0}));return r("ul",{className:"menu p-4 shadow-md text-base-content bg-base-100",children:[e("li",{className:"menu-title",children:e("span",{children:"Leader board"})}),e("li",{className:"w-full capitalize text-primary px-4",children:s}),r("li",{className:"grid grid-cols-4 text-sm text-gray-900",children:[e("span",{children:"Player"}),e("span",{children:"Appear."}),e("span",{children:"Goals"}),e("span",{children:"Average"})]}),i.map(({fullName:o,appearances:c,average:N},p,b)=>r("li",{className:"grid grid-cols-4 text-sm border-b-2 text-gray-600",children:[e("span",{children:o}),e("span",{className:"flex justify-end",children:c}),e("span",{className:"flex justify-end",children:b[p][s]}),e("span",{className:"flex justify-end",children:N})]},p))]})}var R="data:image/png;base64,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";function w(n){const{player:{fullName:a,number:s,position:t,country:l,appearances:i,goals:o,assists:c}}=n;return r("div",{className:"card shadow-md compact side bg-base-100 rounded-none",children:[r("div",{className:"flex-row items-center space-x-4 card-body",children:[e("div",{children:e("div",{className:"avatar",children:e("div",{className:"rounded-full w-14 h-14 shadow",children:e("img",{src:R,alt:`player-image-${s}`})})})}),r("div",{children:[e("p",{className:"text-base-content",children:s}),e("h2",{className:"card-title",children:a}),e("p",{className:"text-base-content",children:t})]})]}),r("div",{className:"card-body text-gray-600",children:[r("p",{className:"flex",children:[e("span",{className:"flex-1",children:"Nationality"}),e("span",{className:"flex-1 text-right font-bold",children:l})]}),r("p",{className:"flex",children:[e("span",{className:"flex-1",children:"Appearances"}),e("span",{className:"flex-1 text-right font-bold",children:i})]}),r("p",{className:"flex",children:[e("span",{className:"flex-1",children:"Goals"}),e("span",{className:"flex-1 text-right font-bold",children:o})]}),r("p",{className:"flex",children:[e("span",{className:"flex-1",children:"Assists"}),e("span",{className:"flex-1 text-right font-bold",children:c})]})]})]})}function m(n){const{title:a,value:s}=n;return r("div",{className:"stat",children:[e("div",{className:"stat-title",children:a}),e("div",{className:"stat-value text-primary",children:s})]})}var M=[{id:1,position:"Goalkeeper",numOfPlayers:4},{id:2,position:"Defender",numOfPlayers:8},{id:3,position:"Midfielder",numOfPlayers:15},{id:4,position:"Forward",numOfPlayers:5}],d=[{fullName:"Kenneth Levy",country:"Brazil",position:"Goalkeeper",goals:2,assists:1,appearances:28,number:1},{fullName:"Audra Armstrong",country:"France",position:"Goalkeeper",goals:3,assists:5,appearances:35,number:42},{fullName:"Indira Horton",country:"Pakistan",position:"Goalkeeper",goals:3,assists:2,appearances:34,number:45},{fullName:"Zephania Bentley",country:"United Kingdom",position:"Goalkeeper",goals:2,assists:3,appearances:3,number:85},{fullName:"Chava Cooke",country:"Peru",position:"Defender",goals:1,assists:5,appearances:25,number:79},{fullName:"Maxine Wilkinson",country:"United States",position:"Defender",goals:1,assists:5,appearances:34,number:77},{fullName:"Selma Spencer",country:"United States",position:"Defender",goals:1,assists:3,appearances:30,number:10},{fullName:"Valentine Adams",country:"Germany",position:"Defender",goals:2,assists:2,appearances:7,number:37},{fullName:"Nehru Greer",country:"Austria",position:"Defender",goals:1,assists:2,appearances:17,number:33},{fullName:"Chaim Lyons",country:"Russian Federation",position:"Defender",goals:3,assists:2,appearances:15,number:18},{fullName:"Raphael Holmes",country:"Spain",position:"Defender",goals:1,assists:4,appearances:8,number:46},{fullName:"Winifred Carpenter",country:"Canada",position:"Defender",goals:2,assists:4,appearances:32,number:30},{fullName:"Tatyana Owen",country:"Pakistan",position:"Midfielder",goals:1,assists:1,appearances:28,number:52},{fullName:"Katell George",country:"Germany",position:"Midfielder",goals:0,assists:5,appearances:7,number:86},{fullName:"Victor Pitts",country:"South Korea",position:"Midfielder",goals:0,assists:3,appearances:7,number:39},{fullName:"Palmer Humphrey",country:"Pakistan",position:"Midfielder",goals:2,assists:2,appearances:3,number:49},{fullName:"Judah Strickland",country:"United States",position:"Midfielder",goals:3,assists:1,appearances:25,number:1},{fullName:"Lillian Mcclure",country:"Pakistan",position:"Midfielder",goals:1,assists:5,appearances:27,number:89},{fullName:"Hunter Wall",country:"Nigeria",position:"Midfielder",goals:1,assists:5,appearances:8,number:19},{fullName:"Roth Ware",country:"Pakistan",position:"Midfielder",goals:0,assists:2,appearances:15,number:32},{fullName:"Elvis Armstrong",country:"Chile",position:"Midfielder",goals:2,assists:0,appearances:9,number:55},{fullName:"Shelby Dillon",country:"Poland",position:"Midfielder",goals:1,assists:1,appearances:7,number:90},{fullName:"Hunter Mendoza",country:"Chile",position:"Midfielder",goals:0,assists:1,appearances:3,number:86},{fullName:"Genevieve Salinas",country:"Canada",position:"Midfielder",goals:1,assists:4,appearances:38,number:84},{fullName:"Abraham Sanders",country:"Germany",position:"Midfielder",goals:1,assists:5,appearances:28,number:53},{fullName:"Abra Roth",country:"India",position:"Midfielder",goals:3,assists:0,appearances:32,number:47},{fullName:"Lunea Campos",country:"Mexico",position:"Midfielder",goals:0,assists:3,appearances:28,number:88},{fullName:"Xantha Saunders",country:"India",position:"Forward",goals:0,assists:3,appearances:8,number:59},{fullName:"Jorden Williamson",country:"Chile",position:"Forward",goals:1,assists:0,appearances:20,number:17},{fullName:"Danielle Pace",country:"Belgium",position:"Forward",goals:2,assists:1,appearances:9,number:41},{fullName:"Farrah Sawyer",country:"Costa Rica",position:"Forward",goals:2,assists:0,appearances:38,number:48},{fullName:"Bevis Cobb",country:"United Kingdom",position:"Forward",goals:1,assists:2,appearances:17,number:54}];function D(){return r("div",{className:"container p-5 bg-indigo-100",children:[r("div",{className:"navbar mb-2 bg-base-100 text-gray-700 mb-4",children:[e("div",{className:"flex-none lg:flex",children:e("img",{src:B,alt:"football-team-logo"})}),e("div",{className:"flex-1 px-2 mx-2 lg:flex",children:e("span",{className:"text-2xl font-medium",children:"Football Squad"})})]}),r("div",{className:"grid lg:grid-cols-6 xl:grid-cols-6 md:grid-cols-1 sm:grid-cols-1 gap-4",children:[e("div",{className:"md:col-span-2 sm:col-span-1",children:r("div",{className:"grid xl:grid-rows-2 lg:grid-rows-2 md:grid-rows-2 sm:grid-rows-1 gap-4",children:[e(C,{players:d,category:"goals",top:5}),e(U,{positions:M})]})}),r("div",{className:"md:col-span-4 sm:col-span-1",children:[r("div",{className:"shadow-md mb-4 rounded-none grid grid-rows-1 md:flex-none md:flex-nowrap sm:flex sm:flex-wrap",children:[e(m,{title:"Total of players",value:d.length}),e(m,{title:"Total of goals",value:d.reduce((n,a)=>a.goals+n,0)}),e(m,{title:"Total of assists",value:d.reduce((n,a)=>a.assists+n,0)})]}),e("div",{className:"grid md:grid-cols-3 sm:grid-cols-1 gap-4",children:d.map((n,a)=>e(w,{player:n},a))})]})]})]})}V.render(e(K.StrictMode,{children:e(D,{})}),document.getElementById("root"));