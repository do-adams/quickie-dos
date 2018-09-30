import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [ 'name', 'output' ];

  greet() {
		console.log('Button clicked!');
    this.outputTarget.textContent = `Hello, ${this.nameTarget.value}!`;
  }
}