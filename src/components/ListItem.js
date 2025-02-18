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
    this.$rootElement.textContent = this.id;

    // this.state.date еще не использовал
    this.$donateItemB = document.createElement('b');
    this.$donateItemB.textContent = this.amount;


    this.$rootElement.append(this.$donateItemB);
  }
}
