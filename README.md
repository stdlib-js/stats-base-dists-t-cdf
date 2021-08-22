<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Student's t][t-distribution] distribution [cumulative distribution function][cdf] (CDF).

<section class="intro">

The [cumulative distribution function][cdf] (CDF) for a [t distribution][t-distribution] random variable is

<!-- <equation class="equation" label="eq:t_cdf" align="center" raw="F(x;\nu) = 1 - \frac{1}{2} \frac{\operatorname{Beta}(\tfrac{\nu}{\nu + x^2};\,\tfrac{\nu}{2},\tfrac{1}{2})}{\operatorname{Beta}(\tfrac{\nu}{2}, \tfrac{1}{2})}" alt="Cumulative distribution function (CDF) for a Student's t distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;\nu) = 1 - \frac{1}{2} \frac{\operatorname{Beta}(\tfrac{\nu}{\nu + x^2};\,\tfrac{\nu}{2},\tfrac{1}{2})}{\operatorname{Beta}(\tfrac{\nu}{2}, \tfrac{1}{2})}" data-equation="eq:t_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/t/cdf/docs/img/equation_t_cdf.svg" alt="Cumulative distribution function (CDF) for a Student's t distribution.">
    <br>
</div>

<!-- </equation> -->

where `v > 0` is the degrees of freedom. In the definition, `Beta( x; a, b )` denotes the lower incomplete beta function and `Beta( a, b )` the [beta function][beta-function].

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-t-cdf
```

</section>

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats-base-dists-t-cdf' );
```

#### cdf( x, v )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [Student's t][t-distribution] distribution with degrees of freedom `v`.

```javascript
var y = cdf( 2.0, 0.1 );
// returns ~0.611

y = cdf( 1.0, 2.0 );
// returns ~0.789

y = cdf( -1.0, 4.0 );
// returns ~0.187
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 1.0 );
// returns NaN

y = cdf( 0.0, NaN );
// returns NaN
```

If provided `v <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0 );
// returns NaN

y = cdf( 2.0, 0.0 );
// returns NaN
```

#### cdf.factory( v )

Returns a `function` for evaluating the [cdf][cdf] of a [Student's t][t-distribution] distribution with degrees of freedom `v`.

```javascript
var mycdf = cdf.factory( 0.5 );
var y = mycdf( 3.0 );
// returns ~0.816

y = mycdf( 1.0 );
// returns ~0.699
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var cdf = require( '@stdlib/stats-base-dists-t-cdf' );

var v;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = (randu() * 6.0) - 3.0;
    v = randu() * 10.0;
    y = cdf( x, v );
    console.log( 'x: %d, v: %d, F(x;v): %d', x.toFixed( 4 ), v.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-t-cdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-t-cdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-t-cdf/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-t-cdf/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-t-cdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-t-cdf?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-t-cdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-t-cdf/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-t-cdf/main/LICENSE

[beta-function]: https://en.wikipedia.org/wiki/Beta_function

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[t-distribution]: https://en.wikipedia.org/wiki/Student%27s_t-distribution

</section>

<!-- /.links -->
