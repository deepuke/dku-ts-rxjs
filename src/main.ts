/** Creation operators */

/**
 * of operator
 */
// import { of, map, } from 'rxjs';
// of(1, 2, 3)
//   .pipe(map((x) => x * 2))
//   .subscribe((x) => console.log(x));

/**
 * interval operator
 */
// import { interval } from 'rxjs';
// const observable = interval(1000 /* number of milliseconds */);
// observable.subscribe((x) => console.log(x));

/**
 * defer operator
 */
// import { defer, fromEvent, interval } from 'rxjs';
// const clicksOrInterval = defer(() => {
//   return Math.random() > 0.5 ? fromEvent(document, 'click') : interval(1000);
// });
// clicksOrInterval.subscribe((x) => console.log(x));
