function override(newName: string): PropertyDecorator {
  return function(target: Object, name: PropertyKey): void {
    Object.defineProperty(target, name, {
      get() {
        return newName;
      }
    });
  }
}

export default class User {
  @override('Lucas')
  name: string = 'You should not see it';
}
