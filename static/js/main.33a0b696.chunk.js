(this.webpackJsonpRuufPayStake=this.webpackJsonpRuufPayStake||[]).push([[0],{242:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},243:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_homeToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"EmegercyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"HomeTokenStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_homeAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_rewardsAmount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserData","outputs":[{"internalType":"uint256","name":"homeTokens","type":"uint256"},{"internalType":"uint256","name":"pendingRewards","type":"uint256"},{"internalType":"uint256","name":"stakeDate","type":"uint256"},{"internalType":"uint256","name":"multiplier","type":"uint256"}],"stateMutability":"view","type":"function","constant":true}]')},249:function(e,t,a){e.exports=a(542)},255:function(e,t){},295:function(e,t){},297:function(e,t){},367:function(e,t){},369:function(e,t){},402:function(e,t){},407:function(e,t){},409:function(e,t){},416:function(e,t){},429:function(e,t){},452:function(e,t){},460:function(e,t){},462:function(e,t){},476:function(e,t){},542:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(45),c=a.n(s),o=a(14);function i(e){var t=e.provider,a=e.loadWeb3Modal,n=e.logoutOfWeb3Modal;return r.a.createElement("a",{href:"#",class:"btn-1 shadow1 style3 bgscheme",onClick:function(){t?n():a()}},t?"Disconnect Wallet":"Connect Wallet")}var l=a(2),u=a.n(l),d=a(24),m=a(550),p=a(240),f=a.n(p);var b,y,h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(),a=Object(o.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(!1),i=Object(o.a)(c,2),l=i[0],p=i[1],b=Object(n.useState)(0),y=Object(o.a)(b,2),h=y[0],v=y[1],w=Object(n.useState)(""),E=Object(o.a)(w,2),g=E[0],O=E[1],k=e.autoLoad,j=void 0===k||k,x=e.NETWORK,C=void 0===x?"mainnet":x,T=new f.a({network:C,cacheProvider:!0}),S=Object(n.useCallback)(Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.connect();case 3:return t=e.sent,e.next=6,F(t);case 6:return s(new m.a(t)),e.next=9,A();case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])}))),[T]),M=Object(n.useCallback)(Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.clearCachedProvider();case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)}))),[T]),A=Object(n.useCallback)(Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_chainId"});case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)})))),F=Object(n.useCallback)((function(e){e.on?(e.on("close",Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("METAMASK close");case 1:case"end":return e.stop()}}),e)})))),e.on("connect",function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("METAMASK connected:",t),v(t.chainId),window.location.reload();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.on("disconnect",function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("METAMASK disconnected:",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.on("accountsChanged",function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("METAMASK accountsChanged:",t),O(t[0]);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.on("chainChanged",function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("METAMASK chainChanged:",t),v(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.on("networkChanged",function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("METAMASK networkChanged:",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):console.log("Error. No provider")}),[]);return Object(n.useEffect)((function(){j&&!l&&T.cachedProvider&&(S(),p(!0))}),[j,l,S,p,T.cachedProvider]),[r,S,M,h,g]},v=a(247),w=a(242),E=a(243),g=a(20),O=0,k="0x1",j="0x3",x="0x2a",C="0x4",T="0x5",S="0x38",M="0x61",A="0x89",F="0x13881",_="0x64",D="0x539",H=(b={},Object(g.a)(b,O,"None"),Object(g.a)(b,k,"Ethereum"),Object(g.a)(b,j,"Ropsten"),Object(g.a)(b,x,"Kovan"),Object(g.a)(b,C,"Rinkeby"),Object(g.a)(b,T,"Goerli"),Object(g.a)(b,S,"Binance"),Object(g.a)(b,M,"Binance Testnet"),Object(g.a)(b,A,"Polygon (Matic)"),Object(g.a)(b,F,"Mumbai"),Object(g.a)(b,_,"xDai"),Object(g.a)(b,D,"Ganache"),b),B={homeCoin:w,stakeFarm:E,addresses:(y={},Object(g.a)(y,O,{homeCoin:"",stakeFarm:""}),Object(g.a)(y,k,{homeCoin:"0xAF585c15daB8C363087c572758AC75E82C467579",stakeFarm:"0x75a401D888A2b827BAEEC26dc3C60e064288A6C2"}),Object(g.a)(y,A,{homeCoin:"",stakeFarm:""}),Object(g.a)(y,_,{homeCoin:"",stakeFarm:""}),Object(g.a)(y,S,{homeCoin:"",stakeFarm:""}),Object(g.a)(y,C,{homeCoin:"0x3460fcA73f770932eA9FF80c2D3AfA2A6ab4a18e",stakeFarm:"0x425D8F1349fdce8D83714E09352105e2feDf1b7C"}),Object(g.a)(y,j,{homeCoin:"",stakeFarm:""}),Object(g.a)(y,T,{homeCoin:"",stakeFarm:""}),Object(g.a)(y,x,{homeCoin:"",stakeFarm:""}),Object(g.a)(y,M,{homeCoin:"",stakeFarm:""}),Object(g.a)(y,F,{homeCoin:"",stakeFarm:""}),Object(g.a)(y,D,{homeCoin:"0x92c91489D1b8799FC297d8aF837BC6be50fb8652",stakeFarm:"0xA3f316aE0825A203392FD466144057c4De5c05DB"}),y),chainsNetworkName:H},W=a(46),N=a(548),R=a(549),P=a(551),I=a(101),K=function(e){var t=e.userTokens,a=h(),s=Object(o.a)(a,5),c=s[3],i=(s[4],new I(window.ethereum)),l=Object(n.useState)(0),m=Object(o.a)(l,2),p=m[0],f=m[1],b=Object(n.useState)(0),y=Object(o.a)(b,2),v=y[0],w=y[1],E=Object(n.useState)(1),g=Object(o.a)(E,2),O=g[0],k=g[1],j=Object(n.useState)(0),x=Object(o.a)(j,2),C=(x[0],x[1]),T=Object(n.useState)(0),S=Object(o.a)(T,2),M=(S[0],S[1]),A=Object(n.useState)(!1),F=Object(o.a)(A,2),_=F[0],D=F[1],H=Object(n.useState)(!1),K=Object(o.a)(H,2),V=K[0],L=K[1],U=Object(n.useState)(!1),z=Object(o.a)(U,2),Y=z[0],J=z[1],G=Object(n.useState)(!1),Z=Object(o.a)(G,2),q=Z[0],X=Z[1],Q=Object(n.useState)(!1),$=Object(o.a)(Q,2),ee=$[0],te=$[1],ae=Object(n.useState)(!0),ne=Object(o.a)(ae,2),re=ne[0],se=ne[1],ce=Object(n.useState)(!1),oe=Object(o.a)(ce,2),ie=oe[0],le=oe[1],ue=Object(n.useState)(!1),de=Object(o.a)(ue,2),me=de[0],pe=de[1],fe=[6.4,8.063494719327188,9.230397249967416,10.159366732596476,10.94384605873086,11.629571794125695,12.24275956974329,12.8,13.312536467532185,13.788382016204057,14.23347257964362,14.652342304682646,15.048542001412848,15.424910490721473,15.78375727571501,16.126989438654377,16.456202180212706,16.772744922936937,17.077770551820446,17.3722727462074,17.657114728839172,17.933051716194477,18.200748671050018,18.46079449993483,18.71371352456234,18.95997483780717,19.2,19.43416942000424,19.662827684389423,19.8862880381047,20,20],be=function(e,t){return k(e),f(t),e<=0?(C(0),void M(0)):e>30?(C(20),void M(20*t/100)):(C(fe[e]),void M(t*fe[e]/100))};Object(n.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=B.addresses[c].homeCoin,a=B.addresses[c].stakeFarm,n=new i.eth.Contract(B.homeCoin,t),le(""===a),""===t||""===a){e.next=10;break}return e.next=7,n.methods.allowance(window.ethereum.selectedAddress,a).call({from:window.ethereum.selectedAddress});case 7:r=e.sent,w(r),ve();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[v,p,c]);var ye=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,D(!0),X(!0),t=B.addresses[c].homeCoin,a=B.addresses[c].stakeFarm,n=new i.eth.Contract(B.homeCoin,t),r=Math.pow(2,64)-1,e.next=9,n.methods.approve(a,i.utils.toWei(r.toString())).send({from:window.ethereum.selectedAddress});case 9:s=e.sent,w(r),console.log(s);case 12:return e.prev=12,D(!1),X(!1),ve(),e.finish(12);case 17:case"end":return e.stop()}}),e,null,[[0,,12,17]])})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,J(!1),L(!0),te(!0),t=B.addresses[c].stakeFarm,a=new i.eth.Contract(B.stakeFarm,t),e.next=8,a.methods.stake(window.ethereum.selectedAddress,i.utils.toWei(p.toString())).send({from:window.ethereum.selectedAddress});case 8:n=e.sent,console.log(n);case 10:return e.prev=10,L(!1),te(!1),window.location.reload(),e.finish(10);case 15:case"end":return e.stop()}}),e,null,[[0,,10,15]])})));return function(){return e.apply(this,arguments)}}(),ve=function(){if(""!==p){if(0===v)return!0;se(BigInt(v)<BigInt(i.utils.toWei(p.toString())))}else se(!1)};return r.a.createElement("div",null,t>0?r.a.createElement("div",{id:"section-subscribe1"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"title1 col-12"},r.a.createElement("h3",{class:"clscheme"},"Stake your Home Coins to earn more"),r.a.createElement("p",null),r.a.createElement("p",{class:"bolder"},"Enter the amount of Home Coins you want to stake.")),r.a.createElement("div",{class:"form col-12 ez-animate text-center","data-animation":"fadeInUp"},r.a.createElement("input",{type:"number",placeholder:"0",value:p,onChange:function(e){return t=e.target.value,be(O,t),void ve();var t}}),r.a.createElement("button",{type:"",class:"shadow1 bgscheme",onClick:function(){f(t)}},"MAX"),r.a.createElement("div",null,re?r.a.createElement("button",{disabled:q,onClick:function(){return ye()},class:"shadow1 style3 bgscheme mx-3 my-3 px-5"},_?r.a.createElement(N.a,{animation:"border",size:"sm",className:"mr-2"}):"","APPROVE"):r.a.createElement("button",{disabled:ee,onClick:function(){return ie?pe(!0):J(!0)},class:"shadow1 style3 bgscheme mt-5"},V?r.a.createElement(N.a,{animation:"border",size:"sm",className:"mr-2"}):"","STAKE")))))):"",r.a.createElement("div",null,r.a.createElement(R.a,{show:Y},r.a.createElement(R.a.Header,{closeButton:!0,onClick:function(){return J(!1)}},r.a.createElement(R.a.Title,null,"Stake Farm")),r.a.createElement(R.a.Body,null,r.a.createElement("p",null,"You are going to send ",r.a.createElement(W.a,{displayType:"text",value:p,thousandSeparator:!0,decimalSeparator:".",decimalScale:2})," tokens to the farm."),r.a.createElement("p",null,"Are you sure?")),r.a.createElement(R.a.Footer,null,r.a.createElement(P.a,{variant:"primary",onClick:function(){return he()}},"Yes"),r.a.createElement(P.a,{variant:"secondary",onClick:function(){return J(!1)}},"No"))),r.a.createElement(R.a,{show:me},r.a.createElement(R.a.Header,{closeButton:!0,onClick:function(){return pe(!1)}},r.a.createElement(R.a.Title,null,"Coming soon...")),r.a.createElement(R.a.Body,null,r.a.createElement("p",null,"Staking is almost finished with testing. Check back shortly.")),r.a.createElement(R.a.Footer,null,r.a.createElement(P.a,{variant:"primary",onClick:function(){return pe(!1)}},"Close")))))},V=a(101),L=function(){var e=h(),t=Object(o.a)(e,5),a=t[3],s=t[4],c=new V(window.ethereum),i=Object(n.useState)(0),l=Object(o.a)(i,2),m=l[0],p=l[1],f=Object(n.useState)(0),b=Object(o.a)(f,2),y=b[0],v=b[1],w=Object(n.useState)(0),E=Object(o.a)(w,2),g=E[0],O=E[1],k=Object(n.useState)(""),j=Object(o.a)(k,2),x=j[0],C=j[1],T=Object(n.useState)(1),S=Object(o.a)(T,2),M=(S[0],S[1],Object(n.useState)(0)),A=Object(o.a)(M,2),F=(A[0],A[1]),_=Object(n.useState)(!1),D=Object(o.a)(_,2),H=D[0],I=D[1],K=Object(n.useState)(!1),L=Object(o.a)(K,2),U=L[0],z=L[1],Y=Object(n.useState)(!0),J=Object(o.a)(Y,2),G=J[0],Z=J[1];Object(n.useLayoutEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=B.addresses[a].stakeFarm,n=new c.eth.Contract(B.stakeFarm,t),""===t){e.next=12;break}return e.next=5,n.methods.getUserData(window.ethereum.selectedAddress).call({from:window.ethereum.selectedAddress});case 5:r=e.sent,p(c.utils.fromWei(r.homeTokens.toString(),"ether")),v(c.utils.fromWei(r.pendingRewards.toString(),"ether")),O(new Date(1e3*r.stakeDate).toUTCString()),C(X(Date.now(),new Date(1e3*r.stakeDate))),F(r.multiplier),Z(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,s]);var q=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,z(!1),I(!0),Z(!0),t=B.addresses[a].stakeFarm,n=new c.eth.Contract(B.stakeFarm,t),e.next=8,n.methods.withdraw().send({from:window.ethereum.selectedAddress});case 8:r=e.sent,console.log(r);case 10:return e.prev=10,I(!1),Z(!1),window.location.reload(),e.finish(10);case 15:case"end":return e.stop()}}),e,null,[[0,,10,15]])})));return function(){return e.apply(this,arguments)}}(),X=function(e,t){var a=Math.abs(e-t)/1e3,n=Math.floor(a/86400);a-=86400*n;var r=Math.floor(a/3600)%24;a-=3600*r;var s=Math.floor(a/60)%60;a-=60*s;var c="";return n>0&&(c+="".concat(n,1===n?" day, ":" days, ")),c+="".concat(r,0===r||1===r?" hour, ":" hours, "),c+="".concat(s," minutes")};return r.a.createElement("div",null,m>0?r.a.createElement("div",{id:"section-subscribe1"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"title1 col-12"},r.a.createElement("h3",{class:"clscheme"},"Withdraw your tokens")),r.a.createElement("div",{class:"form col-12 ez-animate text-center","data-animation":"fadeInUp"},r.a.createElement("h3",null,"Home Coins staked: ",r.a.createElement(W.a,{displayType:"text",value:m,thousandSeparator:!0,decimalSeparator:".",decimalScale:2})),r.a.createElement("p",null),r.a.createElement("p",null,"Stake date: ",g),r.a.createElement("p",null),r.a.createElement("p",null),r.a.createElement("p",null,"Staked for ",x),r.a.createElement("p",null),r.a.createElement("p",null,r.a.createElement(W.a,{displayType:"text",value:y,thousandSeparator:!0,decimalSeparator:".",decimalScale:2})," tokens as intereset rate."),r.a.createElement("p",null),r.a.createElement("button",{disabled:G,onClick:function(){return z(!0)},class:"shadow1 style3 bgscheme mt-5"},H?r.a.createElement(N.a,{animation:"border",size:"sm",class:"mr-2"}):"","WITHDRAW"))))):"",r.a.createElement(R.a,{show:U},r.a.createElement(R.a.Header,{closeButton:!0,onClick:function(){return z(!1)}},r.a.createElement(R.a.Title,null,"Withdraw tokens")),r.a.createElement(R.a.Body,null,r.a.createElement("p",null,"You are going to withdraw ",r.a.createElement(W.a,{displayType:"text",value:Number(m)+Number(y),thousandSeparator:!0,decimalSeparator:".",decimalScale:2})," Home Coins"),r.a.createElement("p",null,"Are you sure?")),r.a.createElement(R.a.Footer,null,r.a.createElement(P.a,{variant:"primary",onClick:function(){return q()}},"Yes"),r.a.createElement(P.a,{variant:"secondary",onClick:function(){return z(!1)}},"No"))))},U=a(101),z=function(){var e,t=h(),a=Object(o.a)(t,5),s=a[3],c=a[4],i=new U(window.ethereum),l=Object(n.useState)(null),m=Object(o.a)(l,2),p=m[0],f=m[1],b=Object(n.useState)(null),y=Object(o.a)(b,2),v=y[0],w=y[1];Object(n.useLayoutEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n,r,s,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===(a=B.addresses[t].homeCoin)){e.next=7;break}return n=new i.eth.Contract(B.homeCoin,a),e.next=5,n.methods.balanceOf(window.ethereum.selectedAddress).call({from:window.ethereum.selectedAddress});case 5:r=e.sent,f(i.utils.fromWei(r,"ether"));case 7:if(""===(s=B.addresses[t].stakeFarm)){e.next=16;break}return c=new i.eth.Contract(B.stakeFarm,s),e.next=12,c.methods.getUserData(window.ethereum.selectedAddress).call({from:window.ethereum.selectedAddress});case 12:o=e.sent,w(i.utils.fromWei(o.homeTokens.toString(),"ether")),e.next=17;break;case 16:w(0);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(s)}),[s,c]);return r.a.createElement("div",null,r.a.createElement("div",{id:"section-testimonial1"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"title1"},(null===(e=window.ethereum)||void 0===e?void 0:e.selectedAddress)?r.a.createElement("div",null,p>0?r.a.createElement("h3",null,"You have ",r.a.createElement(W.a,{displayType:"text",value:p,thousandSeparator:!0,decimalSeparator:".",decimalScale:2})," Home Coins in your wallet"):r.a.createElement("div",null,null==p&&null==v||0==p&&0==v?r.a.createElement("div",{id:"section-nocoins"},r.a.createElement("h3",null,"You don't have any Home Coins in your wallet"),r.a.createElement("p",null),r.a.createElement("p",null,r.a.createElement("a",{href:"https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xAF585c15daB8C363087c572758AC75E82C467579&use=V2",rel:"noopener noreferrer",target:"_blank"},"Buy HOME on Uniswap")),r.a.createElement("p",null,"or"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://coinsbit.io/trade/HOME_USDT",rel:"noopener noreferrer",target:"_blank"},"Buy HOME on Coinsbit"))):"")):r.a.createElement("div",null,r.a.createElement("h3",null,"Earn up to 18.32% in staking rewards. Connect a wallet."))))),0===v?r.a.createElement("div",null,r.a.createElement(K,{userTokens:p}),r.a.createElement("p",null),r.a.createElement(L,null)):r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(K,{userTokens:p})))},Y=function(){var e=h(),t=Object(o.a)(e,5),a=t[0],s=t[1],c=t[2],l=t[3],u=(t[4],Object(n.useState)(!1)),d=Object(o.a)(u,2),m=d[0],p=d[1],f=function(){var e=+new Date("2021-09-30 17:00:00")-+new Date,t="";return e>0&&(t='<div id="timer"><h3>Earn up to 18.32% in staking rewards. Coming soon!</h3><div>'+Math.floor(e/864e5)+"<span>days</span></div><div>"+Math.floor(e/36e5%24)+"<span>hours</span></div><div>"+Math.floor(e/1e3/60%60)+"<span>minutes</span></div><div>"+Math.floor(e/1e3%60)+"<span>seconds</span></div></div>"),t},b=Object(n.useState)(f()),y=Object(o.a)(b,2),w=y[0],E=y[1];return Object(n.useEffect)((function(){setTimeout((function(){E(f())}),1e3)})),Object(n.useLayoutEffect)((function(){""!==B.addresses[l].stakeFarm?p(!0):p(!1)}),[l]),r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null,r.a.createElement("div",{id:"section-preloader"},r.a.createElement("div",{class:"loading-indicator"},r.a.createElement("img",{alt:"Loading",src:"/assets/images/branding/app-logo-purple-min.svg"})),r.a.createElement("p",null,"LOADING . . .")),r.a.createElement("nav",{class:"navbar-1 navbar navbar-expand-lg"},r.a.createElement("div",{class:"container navbar-container"},r.a.createElement("a",{class:"navbar-brand",href:"/"},r.a.createElement("img",{class:"app-logo",src:"/HomeLogo.png",width:"170px",height:"64px",alt:"RuufPay"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{class:"navbar-nav ml-auto"},r.a.createElement("li",{class:"nav-item"},r.a.createElement("p",{class:"nav-link scroll-down"})))),r.a.createElement("a",{href:"https://ruufpay.app/tutorial-staking.html",target:"_blank",rel:"noopener noreferrer",class:"btn-1 shadow1 style3 bgscheme"},"Tutorial"),w.length?"":r.a.createElement(i,{provider:a,loadWeb3Modal:s,logoutOfWeb3Modal:c}))),r.a.createElement("div",{id:"section-slider1"},r.a.createElement("div",{class:"waves-container"},r.a.createElement("svg",{class:"waves",xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none","shape-rendering":"auto"},r.a.createElement("defs",null,r.a.createElement("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})),r.a.createElement("g",{class:"parallax"},r.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"0",fill:"rgba(255,255,255,0.7"}),r.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"3",fill:"rgba(255,255,255,0.5)"}),r.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"5",fill:"rgba(255,255,255,0.3)"}),r.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"7",fill:"#fff"}))))),w.length?r.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:w}}):[0===l?r.a.createElement("div",{id:"section-blogdetail1"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"title1 mt-5"},r.a.createElement("h3",null,"Earn up to 18.32% in staking rewards. Connect a wallet.")))):[!1===m?r.a.createElement("div",{id:"section-blogdetail1"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"title1 mt-5"},r.a.createElement("h3",null,"Unsupported network. Be sure you are in Ethereum mainnet.")))):r.a.createElement(z,null)]],r.a.createElement("div",{id:"section-footer"},r.a.createElement("div",{class:"custom-shape-divider-top-1628808112"},r.a.createElement("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},r.a.createElement("path",{d:"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",opacity:".25",class:"shape-fill"}),r.a.createElement("path",{d:"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",opacity:".5",class:"shape-fill"}),r.a.createElement("path",{d:"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",class:"shape-fill"}))),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"footer-widget"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"left col-md-6"}),r.a.createElement("div",{class:"right col-md-6"},r.a.createElement("div",{class:"social-links"},r.a.createElement("a",{href:"https://twitter.com/ruufpay",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:"/assets/images/social/twitter-brands.svg",width:"22px",height:"22px"})),r.a.createElement("a",{href:"https://www.facebook.com/ruufpay/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:"/assets/images/social/facebook-brands.svg",width:"22px",height:"22px"})),r.a.createElement("a",{href:"https://www.instagram.com/ruufpay/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:"/assets/images/social/instagram-brands.svg",width:"22px",height:"22px"})),r.a.createElement("a",{href:"https://t.me/ruufpay_app",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:"/assets/images/social/telegram-brands.svg",width:"22px",height:"22px"})),r.a.createElement("a",{href:"https://discord.gg/3KqcXd6Agb",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:"/assets/images/social/discord-brands.svg",width:"22px",height:"22px"})),r.a.createElement("a",{href:"https://www.reddit.com/r/RuufPay/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:"/assets/images/social/reddit-brands.svg",width:"22px",height:"22px"})),r.a.createElement("a",{href:"https://medium.com/@content_18770",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:"/assets/images/social/medium-brands.svg",width:"22px",height:"22px"}))))))),r.a.createElement("div",{class:"footer-copyright container-fluid "},r.a.createElement("div",{class:"col-12"},r.a.createElement("p",null,"\xa9 2021 Copyrights RuufPay"))))))};c.a.render(r.a.createElement(Y,null),document.getElementById("root"))}},[[249,1,2]]]);
//# sourceMappingURL=main.33a0b696.chunk.js.map