"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[821],{4821:function(t,e,r){function n(){return n=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}r.d(e,{t7:function(){return y}});var o=r(7326),i=r(9611);function l(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,(0,i.Z)(t,e)}var s=Number.isNaN||function(t){return"number"===typeof t&&t!==t};function a(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(n=t[r],o=e[r],!(n===o||s(n)&&s(o)))return!1;var n,o;return!0}var c=function(t,e){var r;void 0===e&&(e=a);var n,o=[],i=!1;return function(){for(var l=[],s=0;s<arguments.length;s++)l[s]=arguments[s];return i&&r===this&&e(l,o)||(n=t.apply(this,l),i=!0,r=this,o=l),n}},u=r(2791),f="object"===typeof performance&&"function"===typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function d(t){cancelAnimationFrame(t.id)}function h(t,e){var r=f();var n={id:requestAnimationFrame((function o(){f()-r>=e?t.call(null):n.id=requestAnimationFrame(o)}))};return n}var p=-1;function m(t){if(void 0===t&&(t=!1),-1===p||t){var e=document.createElement("div"),r=e.style;r.width="50px",r.height="50px",r.overflow="scroll",document.body.appendChild(e),p=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return p}var v=null;function g(t){if(void 0===t&&(t=!1),null===v||t){var e=document.createElement("div"),r=e.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var n=document.createElement("div"),o=n.style;return o.width="100px",o.height="100px",e.appendChild(n),document.body.appendChild(e),e.scrollLeft>0?v="positive-descending":(e.scrollLeft=1,v=0===e.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(e),v}return v}var S=function(t,e){return t};function I(t){var e,r=t.getItemOffset,i=t.getEstimatedTotalSize,s=t.getItemSize,a=t.getOffsetForIndexAndAlignment,f=t.getStartIndexForOffset,p=t.getStopIndexForStartIndex,v=t.initInstanceProps,I=t.shouldResetStyleCacheOnItemSizeChange,y=t.validateProps;return e=function(t){function e(e){var n;return(n=t.call(this,e)||this)._instanceProps=v(n.props,(0,o.Z)(n)),n._outerRef=void 0,n._resetIsScrollingTimeoutId=null,n.state={instance:(0,o.Z)(n),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"===typeof n.props.initialScrollOffset?n.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},n._callOnItemsRendered=void 0,n._callOnItemsRendered=c((function(t,e,r,o){return n.props.onItemsRendered({overscanStartIndex:t,overscanStopIndex:e,visibleStartIndex:r,visibleStopIndex:o})})),n._callOnScroll=void 0,n._callOnScroll=c((function(t,e,r){return n.props.onScroll({scrollDirection:t,scrollOffset:e,scrollUpdateWasRequested:r})})),n._getItemStyle=void 0,n._getItemStyle=function(t){var e,o=n.props,i=o.direction,l=o.itemSize,a=o.layout,c=n._getItemStyleCache(I&&l,I&&a,I&&i);if(c.hasOwnProperty(t))e=c[t];else{var u=r(n.props,t,n._instanceProps),f=s(n.props,t,n._instanceProps),d="horizontal"===i||"horizontal"===a,h="rtl"===i,p=d?u:0;c[t]=e={position:"absolute",left:h?void 0:p,right:h?p:void 0,top:d?0:u,height:d?"100%":f,width:d?f:"100%"}}return e},n._getItemStyleCache=void 0,n._getItemStyleCache=c((function(t,e,r){return{}})),n._onScrollHorizontal=function(t){var e=t.currentTarget,r=e.clientWidth,o=e.scrollLeft,i=e.scrollWidth;n.setState((function(t){if(t.scrollOffset===o)return null;var e=n.props.direction,l=o;if("rtl"===e)switch(g()){case"negative":l=-o;break;case"positive-descending":l=i-r-o}return l=Math.max(0,Math.min(l,i-r)),{isScrolling:!0,scrollDirection:t.scrollOffset<o?"forward":"backward",scrollOffset:l,scrollUpdateWasRequested:!1}}),n._resetIsScrollingDebounced)},n._onScrollVertical=function(t){var e=t.currentTarget,r=e.clientHeight,o=e.scrollHeight,i=e.scrollTop;n.setState((function(t){if(t.scrollOffset===i)return null;var e=Math.max(0,Math.min(i,o-r));return{isScrolling:!0,scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!1}}),n._resetIsScrollingDebounced)},n._outerRefSetter=function(t){var e=n.props.outerRef;n._outerRef=t,"function"===typeof e?e(t):null!=e&&"object"===typeof e&&e.hasOwnProperty("current")&&(e.current=t)},n._resetIsScrollingDebounced=function(){null!==n._resetIsScrollingTimeoutId&&d(n._resetIsScrollingTimeoutId),n._resetIsScrollingTimeoutId=h(n._resetIsScrolling,150)},n._resetIsScrolling=function(){n._resetIsScrollingTimeoutId=null,n.setState({isScrolling:!1},(function(){n._getItemStyleCache(-1,null)}))},n}l(e,t),e.getDerivedStateFromProps=function(t,e){return _(t,e),y(t),null};var O=e.prototype;return O.scrollTo=function(t){t=Math.max(0,t),this.setState((function(e){return e.scrollOffset===t?null:{scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},O.scrollToItem=function(t,e){void 0===e&&(e="auto");var r=this.props,n=r.itemCount,o=r.layout,i=this.state.scrollOffset;t=Math.max(0,Math.min(t,n-1));var l=0;if(this._outerRef){var s=this._outerRef;l="vertical"===o?s.scrollWidth>s.clientWidth?m():0:s.scrollHeight>s.clientHeight?m():0}this.scrollTo(a(this.props,t,e,i,this._instanceProps,l))},O.componentDidMount=function(){var t=this.props,e=t.direction,r=t.initialScrollOffset,n=t.layout;if("number"===typeof r&&null!=this._outerRef){var o=this._outerRef;"horizontal"===e||"horizontal"===n?o.scrollLeft=r:o.scrollTop=r}this._callPropsCallbacks()},O.componentDidUpdate=function(){var t=this.props,e=t.direction,r=t.layout,n=this.state,o=n.scrollOffset;if(n.scrollUpdateWasRequested&&null!=this._outerRef){var i=this._outerRef;if("horizontal"===e||"horizontal"===r)if("rtl"===e)switch(g()){case"negative":i.scrollLeft=-o;break;case"positive-ascending":i.scrollLeft=o;break;default:var l=i.clientWidth,s=i.scrollWidth;i.scrollLeft=s-l-o}else i.scrollLeft=o;else i.scrollTop=o}this._callPropsCallbacks()},O.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&d(this._resetIsScrollingTimeoutId)},O.render=function(){var t=this.props,e=t.children,r=t.className,o=t.direction,l=t.height,s=t.innerRef,a=t.innerElementType,c=t.innerTagName,f=t.itemCount,d=t.itemData,h=t.itemKey,p=void 0===h?S:h,m=t.layout,v=t.outerElementType,g=t.outerTagName,I=t.style,_=t.useIsScrolling,y=t.width,O=this.state.isScrolling,b="horizontal"===o||"horizontal"===m,w=b?this._onScrollHorizontal:this._onScrollVertical,R=this._getRangeToRender(),x=R[0],C=R[1],z=[];if(f>0)for(var T=x;T<=C;T++)z.push((0,u.createElement)(e,{data:d,key:p(T,d),index:T,isScrolling:_?O:void 0,style:this._getItemStyle(T)}));var M=i(this.props,this._instanceProps);return(0,u.createElement)(v||g||"div",{className:r,onScroll:w,ref:this._outerRefSetter,style:n({position:"relative",height:l,width:y,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:o},I)},(0,u.createElement)(a||c||"div",{children:z,ref:s,style:{height:b?"100%":M,pointerEvents:O?"none":void 0,width:b?M:"100%"}}))},O._callPropsCallbacks=function(){if("function"===typeof this.props.onItemsRendered&&this.props.itemCount>0){var t=this._getRangeToRender(),e=t[0],r=t[1],n=t[2],o=t[3];this._callOnItemsRendered(e,r,n,o)}if("function"===typeof this.props.onScroll){var i=this.state,l=i.scrollDirection,s=i.scrollOffset,a=i.scrollUpdateWasRequested;this._callOnScroll(l,s,a)}},O._getRangeToRender=function(){var t=this.props,e=t.itemCount,r=t.overscanCount,n=this.state,o=n.isScrolling,i=n.scrollDirection,l=n.scrollOffset;if(0===e)return[0,0,0,0];var s=f(this.props,l,this._instanceProps),a=p(this.props,s,l,this._instanceProps),c=o&&"backward"!==i?1:Math.max(1,r),u=o&&"forward"!==i?1:Math.max(1,r);return[Math.max(0,s-c),Math.max(0,Math.min(e-1,a+u)),s,a]},e}(u.PureComponent),e.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},e}var _=function(t,e){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,e.instance},y=I({getItemOffset:function(t,e){return e*t.itemSize},getItemSize:function(t,e){return t.itemSize},getEstimatedTotalSize:function(t){var e=t.itemCount;return t.itemSize*e},getOffsetForIndexAndAlignment:function(t,e,r,n,o,i){var l=t.direction,s=t.height,a=t.itemCount,c=t.itemSize,u=t.layout,f=t.width,d="horizontal"===l||"horizontal"===u?f:s,h=Math.max(0,a*c-d),p=Math.min(h,e*c),m=Math.max(0,e*c-d+c+i);switch("smart"===r&&(r=n>=m-d&&n<=p+d?"auto":"center"),r){case"start":return p;case"end":return m;case"center":var v=Math.round(m+(p-m)/2);return v<Math.ceil(d/2)?0:v>h+Math.floor(d/2)?h:v;default:return n>=m&&n<=p?n:n<m?m:p}},getStartIndexForOffset:function(t,e){var r=t.itemCount,n=t.itemSize;return Math.max(0,Math.min(r-1,Math.floor(e/n)))},getStopIndexForStartIndex:function(t,e,r){var n=t.direction,o=t.height,i=t.itemCount,l=t.itemSize,s=t.layout,a=t.width,c=e*l,u="horizontal"===n||"horizontal"===s?a:o,f=Math.ceil((u+r-c)/l);return Math.max(0,Math.min(i-1,e+f-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}})}}]);
//# sourceMappingURL=821.51a03958.chunk.js.map