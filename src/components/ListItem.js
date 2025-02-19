import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      amount: props.amount,
    };

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.textContent = `${this.state.date} - `;

    this.$donateItemB = document.createElement('b');
    this.$donateItemB.textContent = `$${this.state.amount}`;

    this.$rootElement.append(this.$donateItemB);
  }
}
