import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: '',
    }

    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    this.$label = document.createElement('label');
    this.$label.className = 'donate-form__input-label';
    this.$label.textContent = 'Введите сумму в $';

    this.$input = document.createElement('input');
    this.$input.className = 'donate-form__donate-input';
    this.$input.name = 'amount';
    this.$input.type = 'number';

    this.$button = document.createElement('button');
    this.$button.className = 'donate-form__submit-button';
    this.$button.type = 'submit';
    this.$button.textContent = 'Задонатить';

    this.$rootElement.append(this.$label, this.$input, this.$button);

    this.$input.addEventListener("input", this.handleInput.bind(this));
    this.$rootElement.addEventListener("submit", this.handleSubmit.bind(this));
  }

  get isValid() {
    const amount = Number(this.state.amount);
    return !isNaN(amount) && amount >= 1 && amount <= 100;
  }

  handleInput(event) {
    this.state.amount = event.target.value;
    if (!this.isValid) {
      this.$button.disabled = true;
    } else {
      this.$button.disabled = false;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid) {
      this.props.onSubmit(Number(this.state.amount));
      this.state.amount = '';
      this.$input.value = '';
    }
  }
}
