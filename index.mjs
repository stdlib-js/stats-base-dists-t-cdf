// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-betainc@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.0.7-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function i(t,r){var i,m;return e(t)||e(r)||r<=0?NaN:0===t?.5:(m=r>2*(i=n(t,2))?s(i/(r+i),.5,r/2,!0,!0)/2:s(r/(r+i),r/2,.5,!0,!1)/2,t>0?1-m:m)}function m(t){return e(t)||t<=0?r(NaN):function(r){var i,m;if(e(r))return NaN;if(0===r)return.5;i=n(r,2),m=t>2*i?s(i/(t+i),.5,t/2,!0,!0)/2:s(t/(t+i),t/2,.5,!0,!1)/2;return r>0?1-m:m}}t(i,"factory",m);export{i as default,m as factory};
//# sourceMappingURL=index.mjs.map