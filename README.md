## About

Component is a tiny, no-dependency library designed for top-down applications.

 It's essential a factory, that provides two things on it's factories:

  - Decorators through `addDecorator`
  - Dependency Injection through addStatics

Works great with React. Because React apps use gradual controller-view -> view trees
DI is typically very simple and more akin to global variables. Decorators are helpful
for medium to large scale apps. They can help you have default mixins, and automate
other tasks you'd normally do all over the place.

## Usage

```js
var c1 = Component();

c1.addDecorator(spec => {
  spec.decorated = true;
  return spec;
});

c1.addStatics('hello', 'world');

assert(c1.hello === 'world');
assert(c1() === { decorated: true })
```

Tests coming.

### License

The MIT License (MIT)

Copyright (c) 2015 Nate Wienert

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.