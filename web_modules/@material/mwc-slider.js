import{_ as t,a as e,b as r}from"../common/tslib.es6-416e320f.js";import{a as i,e as n,j as a,h as s}from"../common/lit-html-9957b87e.js";import{LitElement as o,query as d,property as c,eventOptions as l,css as u,customElement as m}from"../lit-element.js";import{classMap as h}from"../lit-html/directives/class-map.js";
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function p(t){return void 0===t&&(t=window),!!function(t){void 0===t&&(t=window);var e=!1;try{var r={get passive(){return e=!0,!1}},i=function(){};t.document.addEventListener("test",i,r),t.document.removeEventListener("test",i,r)}catch(t){e=!1}return e}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/(t)&&{passive:!0}}const _=()=>{},f={get passive(){return!1}};document.addEventListener("x",_,f),document.removeEventListener("x",_);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class y extends o{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/class b extends y{createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(t){this.formElement&&this.formElement.setAttribute("aria-label",t)}firstUpdated(){super.firstUpdated(),this.mdcRoot.addEventListener("change",t=>{this.dispatchEvent(new Event("change",t))})}}const g=t=>(e,r)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const t=e.constructor._observers;e.constructor._observers=new Map,t.forEach((t,r)=>e.constructor._observers.set(r,t))}}else{e.constructor._observers=new Map;const t=e.updated;e.updated=function(e){t.call(this,e),e.forEach((t,e)=>{const r=this.constructor._observers.get(e);void 0!==r&&r.call(this,this[e],t)})}}e.constructor._observers.set(r,t)}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */;var v={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},k={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function C(t){return Boolean(t.document)&&"function"==typeof t.document.createElement}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var x=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),T={ACTIVE:"mdc-slider--active",DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",FOCUS:"mdc-slider--focus",HAS_TRACK_MARKER:"mdc-slider--display-markers",IN_TRANSIT:"mdc-slider--in-transit",IS_DISCRETE:"mdc-slider--discrete"},A={ARIA_DISABLED:"aria-disabled",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",CHANGE_EVENT:"MDCSlider:change",INPUT_EVENT:"MDCSlider:input",PIN_VALUE_MARKER_SELECTOR:".mdc-slider__pin-value-marker",STEP_DATA_ATTR:"data-step",THUMB_CONTAINER_SELECTOR:".mdc-slider__thumb-container",TRACK_MARKER_CONTAINER_SELECTOR:".mdc-slider__track-marker-container",TRACK_SELECTOR:".mdc-slider__track"},w={PAGE_FACTOR:4},E=["mousedown","pointerdown","touchstart"],I=["mouseup","pointerup","touchend"],S={mousedown:"mousemove",pointerdown:"pointermove",touchstart:"touchmove"},R="ArrowDown",H="ArrowLeft",F="ArrowRight",M="ArrowUp",L="End",D="Home",V="PageDown",O="PageUp",P=function(r){function i(t){var n=r.call(this,e({},i.defaultAdapter,t))||this;return n.savedTabIndex_=NaN,n.active_=!1,n.inTransit_=!1,n.isDiscrete_=!1,n.hasTrackMarker_=!1,n.handlingThumbTargetEvt_=!1,n.min_=0,n.max_=100,n.step_=0,n.value_=0,n.disabled_=!1,n.preventFocusState_=!1,n.thumbContainerPointerHandler_=function(){return n.handlingThumbTargetEvt_=!0},n.interactionStartHandler_=function(t){return n.handleDown_(t)},n.keydownHandler_=function(t){return n.handleKeydown_(t)},n.focusHandler_=function(){return n.handleFocus_()},n.blurHandler_=function(){return n.handleBlur_()},n.resizeHandler_=function(){return n.layout()},n}return t(i,r),Object.defineProperty(i,"cssClasses",{get:function(){return T},enumerable:!0,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return A},enumerable:!0,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return w},enumerable:!0,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},getAttribute:function(){return null},setAttribute:function(){},removeAttribute:function(){},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabIndex:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerThumbContainerInteractionHandler:function(){},deregisterThumbContainerInteractionHandler:function(){},registerBodyInteractionHandler:function(){},deregisterBodyInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},notifyInput:function(){},notifyChange:function(){},setThumbContainerStyleProperty:function(){},setTrackStyleProperty:function(){},setMarkerValue:function(){},setTrackMarkers:function(){},isRTL:function(){return!1}}},enumerable:!0,configurable:!0}),i.prototype.init=function(){var t=this;this.isDiscrete_=this.adapter_.hasClass(T.IS_DISCRETE),this.hasTrackMarker_=this.adapter_.hasClass(T.HAS_TRACK_MARKER),E.forEach((function(e){t.adapter_.registerInteractionHandler(e,t.interactionStartHandler_),t.adapter_.registerThumbContainerInteractionHandler(e,t.thumbContainerPointerHandler_)})),this.adapter_.registerInteractionHandler("keydown",this.keydownHandler_),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_),this.adapter_.registerResizeHandler(this.resizeHandler_),this.layout(),this.isDiscrete_&&0===this.getStep()&&(this.step_=1)},i.prototype.destroy=function(){var t=this;E.forEach((function(e){t.adapter_.deregisterInteractionHandler(e,t.interactionStartHandler_),t.adapter_.deregisterThumbContainerInteractionHandler(e,t.thumbContainerPointerHandler_)})),this.adapter_.deregisterInteractionHandler("keydown",this.keydownHandler_),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.deregisterResizeHandler(this.resizeHandler_)},i.prototype.setupTrackMarker=function(){this.isDiscrete_&&this.hasTrackMarker_&&0!==this.getStep()&&this.adapter_.setTrackMarkers(this.getStep(),this.getMax(),this.getMin())},i.prototype.layout=function(){this.rect_=this.adapter_.computeBoundingRect(),this.updateUIForCurrentValue_()},i.prototype.getValue=function(){return this.value_},i.prototype.setValue=function(t){this.setValue_(t,!1)},i.prototype.getMax=function(){return this.max_},i.prototype.setMax=function(t){if(t<this.min_)throw new Error("Cannot set max to be less than the slider's minimum value");this.max_=t,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(A.ARIA_VALUEMAX,String(this.max_)),this.setupTrackMarker()},i.prototype.getMin=function(){return this.min_},i.prototype.setMin=function(t){if(t>this.max_)throw new Error("Cannot set min to be greater than the slider's maximum value");this.min_=t,this.setValue_(this.value_,!1,!0),this.adapter_.setAttribute(A.ARIA_VALUEMIN,String(this.min_)),this.setupTrackMarker()},i.prototype.getStep=function(){return this.step_},i.prototype.setStep=function(t){if(t<0)throw new Error("Step cannot be set to a negative number");this.isDiscrete_&&("number"!=typeof t||t<1)&&(t=1),this.step_=t,this.setValue_(this.value_,!1,!0),this.setupTrackMarker()},i.prototype.isDisabled=function(){return this.disabled_},i.prototype.setDisabled=function(t){this.disabled_=t,this.toggleClass_(T.DISABLED,this.disabled_),this.disabled_?(this.savedTabIndex_=this.adapter_.getTabIndex(),this.adapter_.setAttribute(A.ARIA_DISABLED,"true"),this.adapter_.removeAttribute("tabindex")):(this.adapter_.removeAttribute(A.ARIA_DISABLED),isNaN(this.savedTabIndex_)||this.adapter_.setAttribute("tabindex",String(this.savedTabIndex_)))},i.prototype.handleDown_=function(t){var e=this;if(!this.disabled_){this.preventFocusState_=!0,this.setInTransit_(!this.handlingThumbTargetEvt_),this.handlingThumbTargetEvt_=!1,this.setActive_(!0);var r=function(t){e.handleMove_(t)},i=S[t.type],n=function(){e.handleUp_(),e.adapter_.deregisterBodyInteractionHandler(i,r),I.forEach((function(t){return e.adapter_.deregisterBodyInteractionHandler(t,n)}))};this.adapter_.registerBodyInteractionHandler(i,r),I.forEach((function(t){return e.adapter_.registerBodyInteractionHandler(t,n)})),this.setValueFromEvt_(t)}},i.prototype.handleMove_=function(t){t.preventDefault(),this.setValueFromEvt_(t)},i.prototype.handleUp_=function(){this.setActive_(!1),this.adapter_.notifyChange()},i.prototype.getClientX_=function(t){return t.targetTouches&&t.targetTouches.length>0?t.targetTouches[0].clientX:t.clientX},i.prototype.setValueFromEvt_=function(t){var e=this.getClientX_(t),r=this.computeValueFromClientX_(e);this.setValue_(r,!0)},i.prototype.computeValueFromClientX_=function(t){var e=this.max_,r=this.min_,i=(t-this.rect_.left)/this.rect_.width;return this.adapter_.isRTL()&&(i=1-i),r+i*(e-r)},i.prototype.handleKeydown_=function(t){var e=this.getKeyId_(t),r=this.getValueForKeyId_(e);isNaN(r)||(t.preventDefault(),this.adapter_.addClass(T.FOCUS),this.setValue_(r,!0),this.adapter_.notifyChange())},i.prototype.getKeyId_=function(t){return t.key===H||37===t.keyCode?H:t.key===F||39===t.keyCode?F:t.key===M||38===t.keyCode?M:t.key===R||40===t.keyCode?R:t.key===D||36===t.keyCode?D:t.key===L||35===t.keyCode?L:t.key===O||33===t.keyCode?O:t.key===V||34===t.keyCode?V:""},i.prototype.getValueForKeyId_=function(t){var e=this.max_,r=this.min_,i=this.step_||(e-r)/100;switch(this.adapter_.isRTL()&&(t===H||t===F)&&(i=-i),t){case H:case R:return this.value_-i;case F:case M:return this.value_+i;case D:return this.min_;case L:return this.max_;case O:return this.value_+i*w.PAGE_FACTOR;case V:return this.value_-i*w.PAGE_FACTOR;default:return NaN}},i.prototype.handleFocus_=function(){this.preventFocusState_||this.adapter_.addClass(T.FOCUS)},i.prototype.handleBlur_=function(){this.preventFocusState_=!1,this.adapter_.removeClass(T.FOCUS)},i.prototype.setValue_=function(t,e,r){if(void 0===r&&(r=!1),t!==this.value_||r){var i=this.min_,n=this.max_,a=t===i||t===n;this.step_&&!a&&(t=this.quantize_(t)),t<i?t=i:t>n&&(t=n),t=t||0,this.value_=t,this.adapter_.setAttribute(A.ARIA_VALUENOW,String(this.value_)),this.updateUIForCurrentValue_(),e&&(this.adapter_.notifyInput(),this.isDiscrete_&&this.adapter_.setMarkerValue(t))}},i.prototype.quantize_=function(t){return Math.round(t/this.step_)*this.step_},i.prototype.updateUIForCurrentValue_=function(){var t=this,e=this.max_,r=this.min_,i=(this.value_-r)/(e-r),n=i*this.rect_.width;this.adapter_.isRTL()&&(n=this.rect_.width-n);var a=function(t,e){if(C(t)&&e in v){var r=t.document.createElement("div"),i=v[e],n=i.standard,a=i.prefixed;return n in r.style?n:a}return e}(window,"transform"),s=function(t,e){if(C(t)&&e in k){var r=t.document.createElement("div"),i=k[e],n=i.standard,a=i.prefixed;return i.cssProperty in r.style?n:a}return e}(window,"transitionend");if(this.inTransit_){var o=function(){t.setInTransit_(!1),t.adapter_.deregisterThumbContainerInteractionHandler(s,o)};this.adapter_.registerThumbContainerInteractionHandler(s,o)}requestAnimationFrame((function(){t.adapter_.setThumbContainerStyleProperty(a,"translateX("+n+"px) translateX(-50%)"),t.adapter_.setTrackStyleProperty(a,"scaleX("+i+")")}))},i.prototype.setActive_=function(t){this.active_=t,this.toggleClass_(T.ACTIVE,this.active_)},i.prototype.setInTransit_=function(t){this.inTransit_=t,this.toggleClass_(T.IN_TRANSIT,this.inTransit_)},i.prototype.toggleClass_=function(t,e){e?this.adapter_.addClass(t):this.adapter_.removeClass(t)},i}(x);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const N=new WeakMap,U=i(t=>e=>{if(!(e instanceof n)||e instanceof a||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:r}=e,{style:i}=r.element;N.has(e)||(i.cssText=r.strings.join(" "));const s=N.get(e);for(const e in s)e in t||(-1===e.indexOf("-")?i[e]=null:i.removeProperty(e));for(const e in t)-1===e.indexOf("-")?i[e]=t[e]:i.setProperty(e,t[e]);N.set(e,t)});class B extends b{constructor(){super(...arguments),this.mdcFoundationClass=P,this.value=0,this.min=0,this.max=100,this.step=0,this.disabled=!1,this.pin=!1,this.markers=!1,this.pinMarkerText="",this.trackMarkerContainerStyles={},this.thumbContainerStyles={},this.trackStyles={},this.isFoundationDestroyed=!1}render(){const t=0!==this.step,e={"mdc-slider--discrete":t,"mdc-slider--display-markers":this.markers&&t};let r="";t&&this.markers&&(r=s`
        <div
            class="mdc-slider__track-marker-container"
            style="${U(this.trackMarkerContainerStyles)}">
        </div>`);let i="";return this.pin&&(i=s`
      <div class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker">${this.pinMarkerText}</span>
      </div>`),s`
      <div class="mdc-slider ${h(e)}"
           tabindex="0" role="slider"
           aria-valuemin="${this.min}" aria-valuemax="${this.max}"
           aria-valuenow="${this.value}"
           aria-disabled="${this.disabled.toString()}"
           data-step="${this.step}"
           @mousedown=${this.layout}
           @touchstart=${this.layout}>
        <div class="mdc-slider__track-container">
          <div
              class="mdc-slider__track"
              style="${U(this.trackStyles)}">
          </div>
          ${r}
        </div>
        <div
            class="mdc-slider__thumb-container"
            style="${U(this.thumbContainerStyles)}">
          <!-- TODO: use cache() directive -->
          ${i}
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875"></circle>
          </svg>
        <div class="mdc-slider__focus-ring"></div>
      </div>
    </div>`}connectedCallback(){super.connectedCallback(),this.mdcRoot&&this.isFoundationDestroyed&&(this.isFoundationDestroyed=!1,this.mdcFoundation.init())}disconnectedCallback(){super.disconnectedCallback(),this.isFoundationDestroyed=!0,this.mdcFoundation.destroy()}createAdapter(){return Object.assign(Object.assign({},(t=this.mdcRoot,{addClass:e=>{t.classList.add(e)},removeClass:e=>{t.classList.remove(e)},hasClass:e=>t.classList.contains(e)})),{getAttribute:t=>this.mdcRoot.getAttribute(t),setAttribute:(t,e)=>this.mdcRoot.setAttribute(t,e),removeAttribute:t=>this.mdcRoot.removeAttribute(t),computeBoundingRect:()=>{const t=this.mdcRoot.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left+window.pageXOffset,right:t.right,top:t.top,width:t.width}},getTabIndex:()=>this.mdcRoot.tabIndex,registerInteractionHandler:(t,e)=>{const r="touchstart"===t?p():void 0;this.mdcRoot.addEventListener(t,e,r)},deregisterInteractionHandler:(t,e)=>this.mdcRoot.removeEventListener(t,e),registerThumbContainerInteractionHandler:(t,e)=>{const r="touchstart"===t?p():void 0;this.thumbContainer.addEventListener(t,e,r)},deregisterThumbContainerInteractionHandler:(t,e)=>this.thumbContainer.removeEventListener(t,e),registerBodyInteractionHandler:(t,e)=>document.body.addEventListener(t,e),deregisterBodyInteractionHandler:(t,e)=>document.body.removeEventListener(t,e),registerResizeHandler:t=>window.addEventListener("resize",t,p()),deregisterResizeHandler:t=>window.removeEventListener("resize",t),notifyInput:()=>{const t=this.mdcFoundation.getValue();t!==this.value&&(this.value=t,this.dispatchEvent(new CustomEvent("input",{detail:this,composed:!0,bubbles:!0,cancelable:!0})))},notifyChange:()=>{this.dispatchEvent(new CustomEvent("change",{detail:this,composed:!0,bubbles:!0,cancelable:!0}))},setThumbContainerStyleProperty:(t,e)=>{this.thumbContainerStyles[t]=e,this.requestUpdate()},setTrackStyleProperty:(t,e)=>{this.trackStyles[t]=e,this.requestUpdate()},setMarkerValue:t=>this.pinMarkerText=t.toLocaleString(),setTrackMarkers:(t,e,r)=>{const i=t.toLocaleString(),n=`linear-gradient(to right, currentColor 2px, transparent 0) ${`0 center / calc((100% - 2px) / ${`((${e.toLocaleString()} - ${r.toLocaleString()}) / ${i})`}) 100% repeat-x`}`;this.trackMarkerContainerStyles.background=n,this.requestUpdate()},isRTL:()=>"rtl"===getComputedStyle(this.mdcRoot).direction});var t}resetFoundation(){this.mdcFoundation&&(this.mdcFoundation.destroy(),this.mdcFoundation.init())}layout(){this.mdcFoundation.layout()}}r([d(".mdc-slider")],B.prototype,"mdcRoot",void 0),r([d(".mdc-slider")],B.prototype,"formElement",void 0),r([d(".mdc-slider__thumb-container")],B.prototype,"thumbContainer",void 0),r([d(".mdc-slider__pin-value-marker")],B.prototype,"pinMarker",void 0),r([c({type:Number}),g((function(t){this.mdcFoundation.setValue(t)}))],B.prototype,"value",void 0),r([c({type:Number}),g((function(t){this.mdcFoundation.setMin(t)}))],B.prototype,"min",void 0),r([c({type:Number}),g((function(t){this.mdcFoundation.setMax(t)}))],B.prototype,"max",void 0),r([c({type:Number}),g((function(t,e){0!==e!==(0!==t)&&this.resetFoundation(),this.mdcFoundation.setStep(t)}))],B.prototype,"step",void 0),r([c({type:Boolean,reflect:!0}),g((function(t){this.mdcFoundation.setDisabled(t)}))],B.prototype,"disabled",void 0),r([c({type:Boolean,reflect:!0})],B.prototype,"pin",void 0),r([c({type:Boolean,reflect:!0}),g((function(){this.mdcFoundation.setupTrackMarker()}))],B.prototype,"markers",void 0),r([c({type:String})],B.prototype,"pinMarkerText",void 0),r([c({type:Object})],B.prototype,"trackMarkerContainerStyles",void 0),r([c({type:Object})],B.prototype,"thumbContainerStyles",void 0),r([c({type:Object})],B.prototype,"trackStyles",void 0),r([l({capture:!0,passive:!0})],B.prototype,"layout",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const j=u`@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(0.85)}100%{transform:scale(0.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);opacity:.26}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#018786;fill:var(--mdc-theme-secondary, #018786);stroke:#018786;stroke:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container::after{background-color:#9a9a9a;opacity:.26}.mdc-slider--disabled .mdc-slider__track-marker-container{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component, white)}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track-container::after{position:absolute;top:0;left:0;display:block;width:100%;height:100%;content:""}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker:first-child::after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(0.571);stroke-width:3.5;transition:transform 100ms ease-out,fill 100ms ease-out,stroke 100ms ease-out}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0;transition:transform 266.67ms ease-out,opacity 266.67ms ease-out,background-color 266.67ms ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0, 0);border-radius:50% 50% 50% 0%;z-index:1;transition:transform 100ms ease-out}.mdc-slider__pin-value-marker{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1, 1, 1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize 266.67ms linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55, 1.55, 1.55);opacity:.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px, -20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}:host{display:inline-block;min-width:120px;outline:none}`;let z=class extends B{};z.styles=j,z=r([m("mwc-slider")],z);export{z as Slider};
//# sourceMappingURL=mwc-slider.js.map
