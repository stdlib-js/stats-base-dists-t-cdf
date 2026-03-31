"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=n(function(R,c){
var f=require('@stdlib/math-base-special-betainc/dist'),s=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-pow/dist');function b(r,e){var t,a,u;return s(r)||s(e)||e<=0?NaN:r===0?.5:(t=d(r,2),e>2*t?(u=t/(e+t),a=f(u,.5,e/2,!0,!0)/2):(u=e/(e+t),a=f(u,e/2,.5,!0,!1)/2),r>0?1-a:a)}c.exports=b
});var l=n(function(g,N){
var v=require('@stdlib/utils-constant-function/dist'),q=require('@stdlib/math-base-special-betainc/dist'),p=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/math-base-special-pow/dist');function z(r){if(p(r)||r<=0)return v(NaN);return e;function e(t){var a,u,i;return p(t)?NaN:t===0?.5:(a=w(t,2),r>2*a?(i=a/(r+a),u=q(i,.5,r/2,!0,!0)/2):(i=r/(r+a),u=q(i,r/2,.5,!0,!1)/2),t>0?1-u:u)}}N.exports=z
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=o(),F=l();m(y,"factory",F);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
