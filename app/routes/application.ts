import Route from '@ember/routing/route';
import User from 'ember-typescript/models/user';

export default class ApplicationRoute extends Route {
  model() {
    return new User();
  }
}
