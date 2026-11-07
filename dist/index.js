"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var o=n(function(R,c){
var f=require('@stdlib/math-base-special-betainc/dist'),s=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-pow/dist');function b(e,r){var t,a,u;return s(e)||s(r)||r<=0?NaN:e===0?.5:(t=d(e,2),r>2*t?(u=t/(r+t),a=f(u,.5,r/2,!0,!0)/2):(u=r/(r+t),a=f(u,r/2,.5,!0,!1)/2),e>0?1-a:a)}c.exports=b
});var l=n(function(g,N){
var v=require('@stdlib/utils-constant-function/dist'),q=require('@stdlib/math-base-special-betainc/dist'),p=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/math-base-special-pow/dist');function z(e){if(p(e)||e<=0)return v(NaN);return r;function r(t){var a,u,i;return p(t)?NaN:t===0?.5:(a=w(t,2),e>2*a?(i=a/(e+a),u=q(i,.5,e/2,!0,!0)/2):(i=e/(e+a),u=q(i,e/2,.5,!0,!1)/2),t>0?1-u:u)}}N.exports=z
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=o(),F=l();m(y,"factory",F);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
