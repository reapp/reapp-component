## reapp-component

Component is a tiny, no-dependency library designed for top-down applications.

 It's essential a factory, that provides two things on it's factories:

  - Decorators through `addDecorator`
  - Dependency Injection through `addStatics`

So essentially Dependency Injection and Decorations.

In reapp it's optional, but we found it helpful when creating large apps, for
times when you want to add a mixin to every class, or have commonly used ones.
As well as for injecting stuff like stores, etc.

Because React apps use gradual controller-view -> view trees
DI is typically very simple and more akin to global variables. Decorators are helpful
for medium to large scale apps. They can help you have default mixins, and automate
other tasks you'd normally do all over the place.

### Usage

```js
var c1 = Component();

c1.addDecorator(spec => {
  spec.decorated = true;
  return spec;
});

c1.addStatics('hello', 'world');

assert(c1.hello === 'world');
assert(c1({}) === { decorated: true })
```