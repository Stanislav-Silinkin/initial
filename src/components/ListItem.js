import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: props.id,
      date: props.date,
      amount: props.amount,
      onDelete: props.onDelete,
    };

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.textContent = `${this.state.date} - `;

    this.$donateItemB = document.createElement('b');
    this.$donateItemB.textContent = `$${this.state.amount}`;

    this.$deleteButton = document.createElement('button');
    this.$deleteButton.className = 'delete-button';
    this.$deleteButton.textContent = 'Удалить';

    this.$rootElement.append(this.$donateItemB, this.$deleteButton);

    this.$deleteButton.addEventListener('click', () => this.deleteElement());
  }

  deleteElement() {
    this.state.onDelete(this.state.id);
    this.$rootElement.remove();
  }
}