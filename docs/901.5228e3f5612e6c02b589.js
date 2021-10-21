"use strict";(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[901],{8901:(I,g,a)=>{a.r(g),a.d(g,{LandingPageModule:()=>F});var l=a(8583),d=a(2241),u=a(3904),p=a(4655),n=a(7716),_=a(3844),r=a(5618),f=a(1436);function h(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"img",2,3),n.NdJ("click",function(){return n.CHM(t),n.MAs(1).toggle()})("mouseenter",function(){return n.CHM(t),n.MAs(1).show()})("mouseleave",function(){return n.CHM(t),n.MAs(1).hide()})("focus",function(){return n.CHM(t),n.MAs(1).show()})("unfocus",function(){return n.CHM(t),n.MAs(1).hide()}),n.qZA()}if(2&e){const t=o.$implicit;n.s9C("src",t.path,n.LSH),n.s9C("alt",t.desc),n.s9C("matTooltip",t.desc)}}let C=(()=>{class e{constructor(){this.stack=[{path:"./assets/logos/angular.svg",desc:"Angular"},{path:"./assets/logos/typescript.svg",desc:"Typescript"},{path:"./assets/logos/html5.svg",desc:"HTML"},{path:"./assets/logos/css3.svg",desc:"CSS"}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-tech-stack"]],decls:2,vars:1,consts:[["fxLayout","row wrap","fxLayoutAlign","center center"],["tabindex","0",3,"src","alt","matTooltip","click","mouseenter","mouseleave","focus","unfocus",4,"ngFor","ngForOf"],["tabindex","0",3,"src","alt","matTooltip","click","mouseenter","mouseleave","focus","unfocus"],["tooltip","matTooltip"]],template:function(t,i){1&t&&(n.TgZ(0,"span",0),n.YNc(1,h,2,3,"img",1),n.qZA()),2&t&&(n.xp6(1),n.Q6J("ngForOf",i.stack))},directives:[r.xw,r.Wh,l.sg,f.gM],styles:["img[_ngcontent-%COMP%]{height:96px;width:96px;margin:2px}"]}),e})();var m=a(7238),v=a(8002),x=a(1289),k=a(1841);let y=(()=>{class e{constructor(t){this.http=t}getCurrentSeasonAnime(){const t=new Date,c=["winter","spring","summer","fall"][(s=t,Math.floor(s.getMonth()/12*4)%4)];var s;return this.http.get(`https://api.jikan.moe/v3/season/${t.getFullYear()}/${c}`).pipe((0,v.U)(s=>s.anime.slice(0,6)),(0,x.g)(1500))}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(k.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function A(e,o){1&e&&n.GkF(0)}function T(e,o){if(1&e&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&e){const t=n.oxw().$implicit;n.xp6(1),n.hij("Score ",t.score,"")}}function M(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"div",5),n.NdJ("click",function(){const s=n.CHM(t).$implicit;return n.oxw(2).onAnimeClick(s.url)})("keyup.enter",function(){const s=n.CHM(t).$implicit;return n.oxw(2).onAnimeClick(s.url)}),n._UZ(1,"img",6),n.TgZ(2,"div"),n.TgZ(3,"div",7),n._uU(4),n.qZA(),n.YNc(5,T,2,1,"div",8),n.qZA(),n.qZA()}if(2&e){const t=o.$implicit;n.Q6J("@fade","active"),n.xp6(1),n.s9C("src",t.image_url,n.LSH),n.s9C("alt",t.title+" front image"),n.xp6(3),n.Oqu(t.title),n.xp6(1),n.Q6J("ngIf",t.score)}}function S(e,o){if(1&e&&(n.YNc(0,M,6,5,"div",4),n.ALo(1,"async")),2&e){const t=n.oxw();n.Q6J("ngForOf",n.lcZ(1,1,t.animes))}}function O(e,o){1&e&&n._UZ(0,"div",13)}function Z(e,o){if(1&e&&(n.TgZ(0,"div",10),n._UZ(1,"div",11),n.TgZ(2,"div"),n.YNc(3,O,1,0,"div",12),n.qZA(),n.qZA()),2&e){const t=n.oxw(2);n.xp6(3),n.Q6J("ngForOf",t.generateArray(5))}}function P(e,o){if(1&e&&n.YNc(0,Z,4,1,"div",9),2&e){const t=n.oxw();n.Q6J("ngForOf",t.generateArray(6))}}let L=(()=>{class e{constructor(t){this.animeService=t,this.loading=!0,this.generateArray=i=>[...Array(i).keys()]}ngOnInit(){this.animes=this.animeService.getCurrentSeasonAnime().toPromise().finally(()=>this.loading=!1)}onAnimeClick(t){window.open(t,"_blank")}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(y))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-seasonal-anime"]],decls:6,vars:3,consts:[["fxLayout","row wrap","fxLayout.lt-md","column","fxLayoutAlign","center center",1,"container"],[4,"ngIf","ngIfThen","ngIfElse"],["resolvedPromise",""],["skeletonLoading",""],["class","anime-block","tabindex","0",3,"click","keyup.enter",4,"ngFor","ngForOf"],["tabindex","0",1,"anime-block",3,"click","keyup.enter"],[1,"img",3,"src","alt"],[2,"margin-bottom","1rem"],[4,"ngIf"],["class","anime-block",4,"ngFor","ngForOf"],[1,"anime-block"],[1,"skeleton","img"],["class","skeleton skeleton-text",4,"ngFor","ngForOf"],[1,"skeleton","skeleton-text"]],template:function(t,i){if(1&t&&(n.TgZ(0,"div",0),n.YNc(1,A,1,0,"ng-container",1),n.YNc(2,S,2,3,"ng-template",null,2,n.W1O),n.YNc(4,P,1,1,"ng-template",null,3,n.W1O),n.qZA()),2&t){const c=n.MAs(3),s=n.MAs(5);n.xp6(1),n.Q6J("ngIf",i.loading)("ngIfThen",s)("ngIfElse",c)}},directives:[r.xw,r.Wh,l.O5,l.sg],pipes:[l.Ov],styles:['[_nghost-%COMP%], .container[_ngcontent-%COMP%]{width:100%}.anime-block[_ngcontent-%COMP%]{display:block;width:calc(100% / 2);margin:.2rem 0;box-shadow:0 5px 5px #324b784d}.anime-block[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{width:112px;height:162px;float:left}.anime-block[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.img){margin-left:112px;padding:.5rem}.anime-block[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.img)   div[_ngcontent-%COMP%]{margin-bottom:.5rem;color:#223352;font-family:"Courgette",cursive;font-size:2rem;line-height:1}.anime-block[_ngcontent-%COMP%]:hover, .anime-block[_ngcontent-%COMP%]:focus{background-image:linear-gradient(to bottom right,rgba(77,114,184,.2),rgba(0,0,0,.1));cursor:pointer}.skeleton-text[_ngcontent-%COMP%]{height:1rem;border-radius:.25rem}.skeleton-text[_ngcontent-%COMP%]:last-of-type{width:80%}.skeleton[_ngcontent-%COMP%]{animation:skeleton-loading 1s linear infinite alternate}@keyframes skeleton-loading{0%{background-color:#2d436b1a}to{background-color:#2d436b4d}}@media only screen and (max-width: 959px){.anime-block[_ngcontent-%COMP%]{width:calc(94%)}}'],data:{animation:[(0,m.X$)("fade",[(0,m.eR)("void => active",[(0,m.oB)({opacity:0}),(0,m.jt)(500,(0,m.oB)({opacity:1}))])])]}}),e})();const w=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-landing-page"]],decls:10,vars:0,consts:[["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","0.5rem",1,"container"]],template:function(t,i){1&t&&(n.TgZ(0,"app-layout-basic"),n.TgZ(1,"div",0),n.TgZ(2,"span"),n._uU(3,"Hey, I'm probably coding with"),n.qZA(),n._UZ(4,"app-tech-stack"),n.TgZ(5,"span"),n._uU(6,"or watching some of these gems"),n.qZA(),n._UZ(7,"app-seasonal-anime"),n.TgZ(8,"span"),n._uU(9,"right now, but you can always hit me up for a drink! ;)"),n.qZA(),n.qZA(),n.qZA())},directives:[_.k,r.xw,r.Wh,r.SQ,C,L],styles:[".container[_ngcontent-%COMP%]{max-width:980px;margin:1rem auto}.container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.5rem;padding:0 8px;text-align:center}app-layout-basic[_ngcontent-%COMP%]{height:100%;display:block}"]}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[p.Bz.forChild(w)],p.Bz]}),e})(),F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({providers:[],imports:[[l.ez,b,u.m,d.q]]}),e})()}}]);