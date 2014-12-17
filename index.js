function Component() {
  var decorators = [];
  var factory = function(spec) {
    decorators.forEach(decorator => {
      spec = decorator(spec);
    });
    return spec;
  };

  factory.addDecorator = function(decorator) {
    decorators.push(decorator);
  };

  factory.addStatics = function(name, statics) {
    if (!statics)
      this._addStatics(name);
    else {
      var obj = {};
      obj[name] = statics;
      this._addStatics(obj);
    }
  };

  factory._addStatics = function(obj) {
    if (Object.prototype.toString.call(obj) !== '[object Object]')
      throw new Error('Must provide an object to statics');

    Object.keys(obj).forEach(key => {
      if (key === 'addStatics' || key === '_addStatics' || key === 'addDecorator')
        throw new Error('Cannot overwrite addStatics or addDecorator keys');

      this[key] = obj[key];
    });
  };

  return factory;
}

module.exports = Component;