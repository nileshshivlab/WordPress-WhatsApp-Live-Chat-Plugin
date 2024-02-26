/*
    WhatsApp Chat
    Version: 1.2.0
    Release date: Tue Sep 08 2020

    https://elfsight.com

    Copyright (c) 2020 Elfsight, LLC. ALL RIGHTS RESERVED
*/

!function(wp,$){"use strict";let IconBlock=function(t){return wp.element.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"dashicon"},[wp.element.createElement("path",{d:"M9.511.012c5.853-.277 10.666 4.44 10.484 10.224-.17 5.397-4.708 9.684-10.15 9.601-1.543-.023-3-.393-4.297-1.034l-5.05 1.186a.388.388 0 0 1-.471-.453l1.061-5.112A9.811 9.811 0 0 1 0 9.95C-.016 4.662 4.186.263 9.511.012zm6.026 15.4a7.749 7.749 0 0 0 2.293-5.493 7.685 7.685 0 0 0-2.293-5.492A7.811 7.811 0 0 0 10 2.152a7.877 7.877 0 0 0-5.537 2.275A7.685 7.685 0 0 0 2.17 9.92a7.63 7.63 0 0 0 .851 3.526l.346.673-.651 3.138 3.096-.728.703.348c1.088.537 2.26.81 3.485.81a7.811 7.811 0 0 0 5.537-2.275zm-.684-3.342c.464.132.668.67.41 1.074-.38.593-.98 1.317-1.732 1.498-1.326.318-3.362.007-5.905-2.347-2.201-2.037-2.783-3.734-2.646-5.08.078-.764.72-1.453 1.26-1.907a.725.725 0 0 1 1.128.256l.815 1.829c.107.24.073.52-.089.727l-.413.53a.695.695 0 0 0-.056.777c.492.85 2.42 2.55 3.336 2.918a.71.71 0 0 0 .767-.161l.474-.479a.726.726 0 0 1 .714-.186l1.937.551z",id:"a"})])};if(void 0===wp.components||void 0===wp.blocks||void 0===wp.element||void 0===wp.i18n)return!1;const{Component:Component}=window.React,{__:__}=wp.i18n,el=wp.element.createElement,registerBlockType=wp.blocks.registerBlockType,ServerSideRender=wp.components.ServerSideRender,restApiUrl=window.wpApiSettings.root+"/elfsight-whatsapp-chat/admin",restApiNonce=window.wpApiSettings.nonce;let initTimeout;function initWidget(){clearTimeout(initTimeout),initTimeout=setTimeout(function(){const widgets=document.querySelectorAll("[data-elfsight-whatsapp-chat-options]");Array.prototype.slice.call(widgets).forEach(function(widget){const options=widget.getAttribute("data-elfsight-whatsapp-chat-options"),data=JSON.parse(decodeURIComponent(options));eval("eappsWhatsappChat(widget, data)"),widget.removeAttribute("data-elfsight-whatsapp-chat-options"),widget.removeAttribute("data-elfsight-whatsapp-chat-version"),widget.closest(".elfsight-block-widget-container").classList.add("elfsight-block-widget-initialized")})},1500)}async function getWidgets(){const t=await $.ajax({type:"GET",url:restApiUrl+"/widgets/list/",beforeSend:function(t){t.setRequestHeader("X-WP-Nonce",restApiNonce)}});return t.status?[t.data,t.data.reduce(function(t,e){return t[e.id]=e,t},{})]:[]}function getWidgetId(t){let e;return t.some(function(t){return"1"===t.active&&(e=parseInt(t.id),!0)}),e}class Widget extends Component{componentDidMount(){initWidget()}componentDidUpdate(){initWidget()}render(){const{id:t}=this.props;return t?el("div",{className:"elfsight-block-widget-container"},el(ServerSideRender,{block:"elfsight-whatsapp-chat/block",attributes:{id:t}}),el("div",{className:"elfsight-block-widget-placeholder"},el(IconBlock,{}),el("span",{},"WhatsApp Chat"))):null}}class Button extends Component{render(){const{href:t,className:e,text:i}=this.props,s=document.location.origin+document.location.pathname.replace("post.php","admin.php")+"?page=elfsight-whatsapp-chat#";return el("a",{href:s+t,target:"_blank",className:e},i)}}class WidgetSelect extends Component{constructor(){super(),this.state={widgets:[]}}setWidget(t){t.preventDefault();const{setAttributes:e}=this.props,i=t.target.querySelector("option:checked");e({id:parseInt(i.value)})}componentDidMount(){const{id:t,setAttributes:e}=this.props;getWidgets().then(i=>{const[s,o]=i;this.setState({widgets:s});const n=!(!o[t]||"1"!==o[t].active);e(!n&&o?{id:getWidgetId(s),exist:!0}:{id:t,exist:n})})}render(){const{widgets:t}=this.state,{id:e}=this.props;return t.length>0?el("div",{className:"components-base-control"},el("div",{className:"components-base-control__field"},el("select",{className:"components-select-control__input",id:"elfsight-whatsapp-chat-block-control-id",value:e,onChange:this.setWidget.bind(this)},t.map(({id:t,name:e})=>el("option",{value:t},e))))):null}}registerBlockType("elfsight-whatsapp-chat/block",{title:"WhatsApp Chat",description:"Stay always in touch with users through a popular chat on your website",icon:{src:IconBlock},category:"widgets",keywords:["WhatsApp Chat","Elfsight"],supports:{html:!1},attributes:{id:{type:"number"},exist:{type:"bool",default:!1}},edit:function(t){const{attributes:{id:e,exist:i},setAttributes:s}=t;return getWidgets().then(t=>{const[o,n]=t;s(!i&&o?{id:getWidgetId(o),exist:!0}:{id:e,exist:i})}),el(wp.element.Fragment,{},el(wp.editor.InspectorControls,{},el(wp.components.PanelBody,{className:"elfsight-block-panel",title:"Select widget"},el(WidgetSelect,{id:e,setAttributes:function(e){t.setAttributes(e)}}),i?el("div",{className:"elfsight-block-panel-group"},el(Button,{href:"/edit-widget/"+e,className:"components-button is-button is-default is-large elfsight-block-panel-button",text:__("Edit Widget")}),el(Button,{href:"/add-widget/",className:"elfsight-block-panel-link",text:__("Create new widget")})):el("div",{className:"elfsight-block-panel-group"},el("span",{},__("No widgets yet")),el(Button,{href:"/add-widget/",className:"components-button is-button is-default is-primary is-large elfsight-block-panel-button",text:__("Create Widget")})))),i?el(Widget,{id:e,exist:i}):null,i?null:el("div",{className:"elfsight-block-form"},el("div",{className:"elfsight-block-form-header"},el(IconBlock,{}),el("span",{},"WhatsApp Chat")),el("div",{className:"elfsight-block-form-text"},__("Stay always in touch with users through a popular chat on your website"),el("br"),el("strong",{},__("Let's create your first widget!"))),el(Button,{href:"/add-widget/",className:"components-button is-button is-default is-primary is-large elfsight-block-form-button",text:__("Create Widget")})))},save:function(){return null}})}(wp,jQuery);