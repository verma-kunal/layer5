(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[3254],{26775:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var i=t(67294),o=t(69730),r=t(22626),a=t(17460).default.div.withConfig({displayName:"TocPaginationstyle__TocPaginationWrapper",componentId:"zco2fp-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]),l=function(){var n,e,t=(0,i.useState)(0),l=t[0],c=t[1];return(0,i.useEffect)((function(){var n=window.location.pathname,e=o.k.findIndex((function(e){return e.link===n}));c(e)}),[]),i.createElement(a,null,l>0?i.createElement(r.Z,{secondary:!0,url:null===(n=o.k[l-1])||void 0===n?void 0:n.link},"← Previous"):null,l<o.k.length-1?i.createElement(r.Z,{primary:!0,url:null===(e=o.k[l+1])||void 0===e?void 0:e.link},"Next →"):null)}},69730:function(n,e,t){"use strict";t.d(e,{k:function(){return i}});var i=[{id:0,link:"/community/handbook/contributor-journey",text:"About"},{id:1,link:"/community/handbook/community",text:"Community"},{id:2,link:"/community/handbook/community-roles",text:"Community Roles"},{id:3,link:"/community/handbook/contribution",text:"Contribution"},{id:4,link:"/community/handbook/repository-overview",text:"Repository Overview"},{id:5,link:"/community/handbook/projects",text:"Projects"},{id:6,link:"/community/handbook/mentorship-programs",text:"Mentorship Programs"},{id:7,link:"/community/handbook/learn-layer5",text:"Learning"},{id:8,link:"/community/handbook/connect-with-us",text:"Connect with us"},{id:9,link:"/community/handbook/code-of-conduct",text:"Code of Conduct"},{id:10,link:"/community/handbook/faq",text:"FAQs"}]},52455:function(n,e,t){"use strict";t.d(e,{Z:function(){return m}});var i=t(67294),o=t(11521),r=t(25444),a=t(61424),l=t(17460).default.div.withConfig({displayName:"tocstyle__TOCWrapper",componentId:"y1xb32-0"})(["\n\n  position: sticky;\n  top: 10rem;\n  left: 0rem;\n  margin-left: 3rem;\n  margin-top: 3rem;\n  width:15rem;\n  padding-bottom: 2rem;\n\n  .go-back {\n    margin-left: 1rem;\n    display:flex;\n    justify-content:space-between;\n    align-items:center;   \n    a {\n      display: inline-flex;\n      svg {\n        align-self: center;\n        font-size: 1.5rem;\n        color: rgb(177, 182, 184);\n        width: 100%;\n        max-width: 1.5rem;\n      }\n      h4 {\n        font-weight: 500;\n        text-transform: capitalize;\n        font-size: 1.25rem;\n        white-space: nowrap;\n      }\n      &:hover {\n        svg,\n        h4 {\n          color: #3c494f;\n        }\n      }\n    }\n    margin-bottom: 1rem;\n  }\n\n  .toc-sub-heading {\n    color:#000000;\n    margin-top: 1rem;\n    font-weight: 300;\n    font-size: 1.15rem;\n  }\n  \n  .toc-sub-inline{\n    display: inline-block;\n  }\n\n  .active{\n    font-weight:500;\n    color: ",";\n  }\n\n  ul{\n    display:flex;\n    flex-direction:column;\n    white-space: nowrap;\n  }\n\n  .toc-ul{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n  }\n\n  .toc-toggle-btn{\n    display:none;\n  }\n \n   .toc-ul-open{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n    height:auto !important;\n    opacity:1 !important;\n    margin-bottom: 2rem;\n    transition:all .4s !important;\n   }\n\n  .toc-menu-icon{\n    width: 1.5rem; \n    height: 1.5rem; \n    cursor: pointer;\n    fill: ",";\n  }\n\n  .toc-sub-heading:hover {\n    color: ",";\n  }\n\n  @media only screen and (max-width: 750px){\n   position: initial;\n   margin-right: 3rem;\n   width: auto;\n   .toc-toggle-btn{\n    display:inline-block;\n   }\n   .go-back{\n      margin-left:0;\n   }\n\n   .toc-ul{\n    opacity:0;\n    height:0;\n    transition:none;\n    visibility:hidden;\n   }\n\n   .toc-ul-open{\n    visibility:visible;\n   }\n  }\n"],(function(n){return n.theme.secondaryColor}),(function(n){return n.theme.menuColor}),(function(n){return n.theme.secondaryColor})),c=t(69730),m=function(){var n=(0,i.useState)(!1),e=n[0],t=n[1];return i.createElement(l,null,i.createElement("div",{className:"go-back"},i.createElement(r.Link,{to:"/community/handbook"},i.createElement(o.PSe,null),i.createElement("h4",null,"Table of Content")),i.createElement("div",{className:"toc-toggle-btn"},e?i.createElement(a.QAE,{className:"toc-menu-icon",onClick:function(){t(!e)}}):i.createElement(a.Ejh,{className:"toc-menu-icon",onClick:function(){t(!e)}}))),i.createElement("div",{className:"toc-list"},i.createElement("ul",{className:"toc-ul "+(e?"toc-ul-open":"")},c.k.map((function(n){return i.createElement("li",{key:n.id},i.createElement(r.Link,{to:n.link,key:n.id,className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},n.text))})))))}},52069:function(n,e,t){"use strict";var i=t(67294),o=t(25444),r=t(17460).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-42m33g-0"})(["\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);e.Z=function(n){var e=n.contents,t=(0,i.useState)(null),a=t[0],l=t[1];return(0,i.useEffect)((function(){var n=window.location.pathname;l(n)}),[]),i.createElement(r,null,i.createElement("div",{className:"intra-page"},i.createElement("ul",null,e.map((function(n){return i.createElement("li",{key:n.id,className:"list"},i.createElement(o.Link,{to:""+a+n.link,key:n.id,activeClassName:"active"},n.text))})))))}},62708:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return E}});var i=t(67294),o=t(17460),r=t(98460),a=t(36179),l=t(57067),c=t(21101),m=t(25444),s=t(21852),u=t(52455),d=t(52069),h=t(61814),p=t(26775),g=[{id:0,link:"#About Layer5",text:"About Layer5"},{id:1,link:"#Goals",text:"Goals"},{id:2,link:"#Newcomer’s Path",text:"Newcomer’s Path"},{id:3,link:"#Working on your issue",text:"Working on your issue"},{id:4,link:"#While your issue is under review",text:"While your issue is under review"}],y=function(){var n=(0,i.useState)(!1),e=n[0],t=n[1];return i.createElement(c.U,null,i.createElement("div",{className:"page-header-section"},i.createElement("h1",null,"About")),i.createElement(u.Z,null),i.createElement("div",{className:"page-section"},i.createElement(l.W2,null,i.createElement("div",{className:"content"},i.createElement("a",{id:"About Layer5"},i.createElement("h2",null,"About Layer5")),i.createElement("p",null,"Layer5 is a community and open-source-centered service mesh company, representing the largest collection of service meshes and their maintainers in the world. Layer5 is the creator and maintainer of",i.createElement(m.Link,{to:"../blog/announcements/a-standard-interface-for-service-meshes"}," ","service mesh standards"," "),"and also the maker of ",i.createElement("a",{href:"https://meshery.io"},"Meshery "),", the",i.createElement(m.Link,{to:"/service-mesh-management/meshery"}," ","Service Mesh Management Plane"," "),".",i.createElement("br",null),"Layer5 is not just a company, we are also:"),i.createElement("h4",null,"Community First"),i.createElement("p",null,"Layer5 represents the community. We build projects to provide learning environments, deployment, and operational best practices, performance benchmarks, create documentation, share networking opportunities, and more. Our shared commitment to the open-source spirit pushes Layer5 projects forward. New members are always welcome."),i.createElement("h4",null,"Open Source First"),i.createElement("p",null,"All Layer5 projects are open-source. Anyone can download, use, work on, and share it with others. It's built on principles like collaboration, globalism, and innovation. Layer5 projects are distributed under the terms of"," ",i.createElement("a",{href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache v2"),"."),i.createElement("a",{id:"Goals"}," ",i.createElement("h2",null,"Goals")," "),i.createElement("ul",null,i.createElement("li",null,i.createElement("span",null,"To build a large collection of service meshes.")),i.createElement("li",null,i.createElement("span",null,"To build products that are accessible and easy to use.")),i.createElement("li",null,i.createElement("span",null,"To build a welcoming community for open-source contributions."))),i.createElement("a",{id:"Newcomer’s Path"}," ",i.createElement("h2",null,"Newcomer’s Path")," "),i.createElement("p",null,"Thank you for your interest in contributing to Layer5 open source initiatives!"),i.createElement(l.X2,{className:"newcomers-journey"},i.createElement(l.JX,{className:"heading",sm:12,lg:6,onMouseOver:function(){return t(!0)},onMouseOut:function(){return t(!1)}},i.createElement("h2",null,"Contributor's Journey"),i.createElement("div",{className:"heading-start"},i.createElement("h5",null,"Start Here"),i.createElement("img",{className:"heading-start__arrow",src:h.Z}))),i.createElement(l.JX,{sm:12,lg:6},i.createElement(s.Z,{handleMouseHover:e}))),i.createElement("p",null,"In combination with the Layer5 Community Guide and Contributing Guide, the following set of instructions are to encourage and support first-time (or near first-time) open-source contributors."),i.createElement("a",{id:"How to contribute?"}," ",i.createElement("h3",null,"How to contribute?")," "),i.createElement("p",null,"The following steps outline the process by which you can openly engage, learn, and participate in the broad set of open source projects at Layer5."),i.createElement("ol",null,i.createElement("li",null,i.createElement("span",null,"Browse the list of"," ",i.createElement("a",{href:"https://github.com/layer5io"},"Layer5")," org issues bearing the"," ",i.createElement("a",{href:"https://github.com/search?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22good+first+issue%22+no%3Aassignee"},"“good first issue”"),","," ",i.createElement("a",{href:"https://github.com/search?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22first+timers+only%22+no%3Aassignee"},"“first-timers-only”")," ","or the"," ",i.createElement("a",{href:"https://github.com/search?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22help+wanted%22+no%3A%22assignee%22"},"“help wanted”")," ","label.")),i.createElement("li",null,i.createElement("span",null,"Alternatively, find an area of interest by checking out the Layer5 Repository Overview section of this handbook.")),i.createElement("li",null,i.createElement("span",null,"After identifying the issue you wish to work on, check if it has been assigned by taking a look at the assignee section on the issue, otherwise signal your interest by commenting on the issue so that it can be assigned to you."))),i.createElement("a",{id:"Working on your issue"}," ",i.createElement("h3",null,"Working on your issue")," "),i.createElement("p",null,"Once an issue has been assigned to you, it’s time to get started!"),i.createElement("ol",null,i.createElement("li",null,i.createElement("span",null,"Be sure to"," ",i.createElement("a",{href:"https://github.com/layer5io/meshery/blob/master/CONTRIBUTING.md#signing-off-on-commits-developer-certificate-of-origin"},"sign off on your commits"))),i.createElement("li",null,i.createElement("span",null,"Contributions of all sizes are welcome.")),i.createElement("li",null,i.createElement("span",null,"If you need some additional help, please join the Layer5 Slack workspace and find your way to the #newcomers channel. Feel free to ask questions."))),i.createElement("a",{id:"While your issue is under review"}," ",i.createElement("h3",null,"While your issue is under review")," "),i.createElement("ol",null,i.createElement("li",null,i.createElement("span",null,"Please double-check that you have signed off on all of your git commits.")),i.createElement("li",null,i.createElement("span",null,"Be patient. There are a large number of contributors and only a small number of maintainers/reviewers. All contributors are equally important to us, and we'll be sure to get to you as soon as possible. In the meanwhile, you are welcome to join our Slack workspace and take a look at all our projects."," ")))),i.createElement(p.Z,null)),i.createElement(d.Z,{contents:g})))},f=t(45027),b=t(34967),w=t(97956),k=t(38155),E=function(){return i.createElement(o.ThemeProvider,{theme:k.Z},i.createElement(r.Z,null,i.createElement(w.Z,null),i.createElement(a.Z,{title:"Community Handbook",description:"The purpose of the handbook is to provide an overview of the Layer5 community"}),i.createElement(f.Z,null),i.createElement(y,null),i.createElement(b.Z,null)))}},21101:function(n,e,t){"use strict";t.d(e,{U:function(){return i}});var i=t(17460).default.div.withConfig({displayName:"Handbookstyle__HandbookWrapper",componentId:"l1w5w5-0"})(["\n\n    .highlight{\n      font-weight: 600;\n    }\n\n    .content{\n      width:100%;\n      padding-bottom: 2rem;\n      ul > li {\n        color: ",";\n      }\n      ol > li {\n        color: ",";\n      }\n      ul > li > span {\n        color: ",";\n      }\n      ol > li > span {\n        color: ",";\n      }\n    }\n\n    h2 h3{\n      margin: 0.5rem 0;\n      color: ",";\n    }\n\n    .page-section{\n      h2{\n        padding-top: 7rem;\n        margin-top: -7rem;\n      }\n      h3{\n        padding-top: 7rem;\n        margin-top: -7rem;\n      }\n      margin-top: -36rem;\n      margin-left: 20rem;\n      display: flex;\n    }\n\n    .sidebar {\n        margin: 0;\n        padding: 0;\n        width: 250px;\n        background-color:",";\n        position: absolute;\n        height: 150rem;\n        overflow: auto;\n    }\n\n    .sidebar a {\n        display: block;\n        color: black;\n        padding: 16px;\n        text-decoration: none;\n    }\n\n    .sidebar a.active {\n        background-color: ",";\n        color: white;\n    }\n\n    .sidebar a:hover:not(.active) {\n        background-color:",";\n        color: white;\n    }\n\n    .page-header-section {\n      height: 10rem;\n      text-align: center;\n      background: rgb(71,126,150);\n      background: linear-gradient(250deg, rgba(71,126,150,1) 0%, rgba(0,179,159,1) 35%, rgba(60,73,79,1) 100%);\n      h1 {\n          line-height: 10rem;\n          color: white;\n      }\n    }\n\n    .community-home-subtitle {\n      text-align: center;\n      padding-top: 3rem;\n      padding-bottom: 1.5rem;\n    }\n\n    #sign-off{\n      padding-bottom: 4rem;\n    }\n\n    table {\n      border-collapse: collapse;\n      width: 98%;\n      margin: 1rem 0 2rem 0;\n      .github-icon{\n        height: 1.7rem;\n        width:auto;\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n      }\n      .site-icon{\n        height: 1.6rem;\n        width:auto;\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n      }\n      .inline {\n        display: inline;\n        vertical-align: bottom;\n      }\n    }\n\n    td, th {\n      border: 0.05rem solid ",";\n      text-align: left;\n      padding: 0.5rem;\n    }\n\n    .linkscol{\n      text-align: center;\n      width:8%;\n    }\n\n    tbody:nth-child(even) {\n      background-color: ",';\n    }\n\n    .codes{\n      width:75%\n      margin-top:-2rem;\n    }\n\n    .community-home-container{\n      padding: 1rem 0;\n      padding-bottom: 4rem;\n      display: flex;\n      flex-wrap : wrap;\n      align-items : center;\n      justify-content: center;\n    }\n\n    p{\n      margin-top: 10px;\n    }\n\n    input[type=checkbox] + label {\n      display: block;\n      margin: 0.2em;\n      cursor: pointer;\n      padding: 0.2em;\n    }\n\n    input[type=checkbox] {\n      display: none;\n    }\n\n    input[type=checkbox] + label:before {\n      content: url(\'data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 4 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>\');;\n      border: 0.1em solid #000;\n      border-radius: 0.2em;\n      display: inline-block;\n      width: 1.3em;\n      height: 1.3em;\n      padding-left: 0.2em;\n      padding-bottom: 0.3em;\n      margin-right: 0.5em;\n      margin-bottom: 0.15em;\n      vertical-align: bottom;\n      color: transparent;\n    }\n\n    input[type=checkbox] + label:active:before {\n      transform: scale(0);\n    }\n\n    input[type=checkbox]:checked + label:before {\n      background-color: ',";\n      border-color: ",";\n      color: #fff;\n    }\n\n    input[type=checkbox]:disabled + label:before {\n      transform: scale(1);\n      border-color: #aaa;\n    }\n\n    input[type=checkbox]:checked:disabled + label:before {\n      transform: scale(1);\n      background-color: ",";\n      border-color: ",';\n    }\n\n    .project-org-list{\n      a{\n      margin-right .3rem;\n      }\n      img{\n        height: auto;\n        width: 1.6rem;\n        vertical-align: middle;\n      }\n    }\n\n    .project-description-icon{\n      width: 3%;\n      transform : translate(0,25%);\n      margin: 0 0.3%;\n    }\n\n    .project-title-icon{\n      margin-left:"10%";\n      width: 4%;\n      align: left;\n      transform : translate(0,28%);\n    }\n\n    @media only screen and (max-width: 750px){\n      .page-section{\n        margin-top: -2rem;\n        margin-left: 0;\n        padding: 1rem 2.5rem;\n      }\n      .codes{\n      width:100%\n      margin-top:-2rem;\n      }\n    }\n\n    @media only screen and (max-width: 475px){\n      .page-header-section h1{\n        padding: 0 1rem;\n        line-height: 3rem;\n        padding-top: 4rem;\n      }\n      .page-section{\n        margin-top: -2rem;\n        margin-left: 0rem;\n      }\n      table{\n        margin-left: -1.5rem;\n      }\n      .frontendTable{\n        margin-left: -2.8rem;\n      }\n    }\n\n    @media only screen and (max-width: 1024px){\n      .project-title-icon{\n        width:5.5%;\n        transform : translate(0,23%);\n      }\n      .project-description-icon{\n        width:4%;\n      }\n    }\n\n    @media only screen and (max-width: 768px){\n      .project-title-icon{\n        width:8.5%;\n      }\n      .project-description-icon{\n        width:7%;\n      }\n    }\n\n    @media only screen and (max-width: 425px){\n      .project-title-icon{\n        width:11%;\n        transform: translate(0,25%)\n      }\n      .project-description-icon{\n        width:8%;\n      }\n    }\n\n    @media only screen and (max-width: 375px){\n      .project-title-icon{\n        width:13%;\n        transform : translate(0,20%)\n      }\n      .project-description-icon{\n        width:10%;\n      }\n    }\n\n    .channels-list {\n      padding-left: 40px;\n    }\n\n    .channels-img {\n      width: 40px;\n      height: 30px;\n    }\n\n    .channels-para {\n      display: flex;\n      align-items: flex-end;\n    }\n\n    .newcomers-journey{\n      text-align: center;\n      display: flex;\n      align-items: center;\n      margin: 2.5rem 5rem 3rem 0rem;\n      @media only screen and (max-width: 992px){\n        width: 100%;\n      }\n      h2{\n        margin-bottom: 2rem;\n      }\n    }\n\n    .heading{\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n\n    .heading-start{\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: center;\n      align-self: flex-end;\n      margin-right: 2rem;\n      margin-top: -2rem;\n      h5{\n      font-size: 1.125rem;\n      font-weight: 400;\n      margin-right: 1rem;\n      }\n      img{\n      height: 3rem;\n      width: 4rem;\n      transition: .5s;\n      }\n      img:hover{\n      padding-left: 1rem;\n      transition: .5s;\n      }\n    }\n\n  .intra-page{\n    position: sticky;\n    top: 10rem;\n    right:0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    align-items:left;\n    justify-content:space-around;\n    display: flex;\n    flex-direction: column;\n    overflow:hidden;\n    .active{\n      font-weight:5000;\n      color: ',";\n    }\n    ul{\n      list-style: none;\n      top: 3rem;\n    }\n    li{\n      padding-bottom:0.5rem;\n      padding-top:0.5rem;\n    }\n    @media only screen and (max-width: 900px){\n      width: 0;\n      opacity:0;\n    height:0;\n      transition:none;\n      visibility:hidden;\n    }\n  }\n\n  .learn{\n    width: 10rem;\n  }\n\n"],(function(n){return n.theme.menuColor}),(function(n){return n.theme.menuColor}),(function(n){return n.theme.black}),(function(n){return n.theme.black}),(function(n){return n.theme.tertiaryColor}),(function(n){return n.theme.secondaryLightColor}),(function(n){return n.theme.primaryLightColorTwo}),(function(n){return n.theme.secondaryLightColor}),(function(n){return n.theme.primaryLightColor}),(function(n){return n.theme.secondaryLightColorTwo}),(function(n){return n.theme.primaryLightColorTwo}),(function(n){return n.theme.primaryLightColorTwo}),(function(n){return n.theme.secondaryLightColor}),(function(n){return n.theme.secondaryLightColor}),(function(n){return n.theme.secondaryColor}))},61814:function(n,e){"use strict";e.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iQ2FwYV8xIiB3aWR0aD0iNDkzLjM1NiIgaGVpZ2h0PSI0OTMuMzU2IiB4PSIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTMuMzU2IDQ5My4zNTYiIHk9IjAiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ5My4zNTYgNDkzLjM1NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZmlsbD0iIzAwZDNhOSIgZD0iTTQ5MC40OTgsMjM5LjI3OGwtMTA5LjYzMi05OS45MjljLTMuMDQ2LTIuNDc0LTYuMzc2LTIuOTUtOS45OTMtMS40MjdjLTMuNjEzLDEuNTI1LTUuNDI3LDQuMjgzLTUuNDI3LDguMjgydjYzLjk1NEg5LjEzNiBjLTIuNjY2LDAtNC44NTYsMC44NTUtNi41NjcsMi41NjhDMC44NTksMjE0LjQzOCwwLDIxNi42MjgsMCwyMTkuMjkydjU0LjgxNmMwLDIuNjYzLDAuODU1LDQuODUzLDIuNTY4LDYuNTYzIGMxLjcxNSwxLjcxMiwzLjkwNSwyLjU2Nyw2LjU2NywyLjU2N2gzNTYuMzEzdjYzLjk1M2MwLDMuODEyLDEuODE3LDYuNTcsNS40MjgsOC4yNzhjMy42MiwxLjUyOSw2Ljk1LDAuOTUxLDkuOTk2LTEuNzA4IGwxMDkuNjMyLTEwMS4wNzdjMS45MDMtMS45MDIsMi44NTItNC4xODIsMi44NTItNi44NDlDNDkzLjM1NiwyNDMuMzY3LDQ5Mi40MDEsMjQxLjE4MSw0OTAuNDk4LDIzOS4yNzh6Ii8+PC9nPjwvc3ZnPg=="}}]);
//# sourceMappingURL=component---src-pages-community-handbook-contributor-journey-js-a452f246d161efafb31b.js.map