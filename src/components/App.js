import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    };

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    this.$totalDonate = document.createElement('h1');
    this.$totalDonate.className = 'total-amount';
    this.$totalDonate.textContent = 'Итого: $';

    this.$total = document.createElement('span');
    this.$total.textContent = this.state.total;
    this.$totalDonate.append(this.$total);
    this.$rootElement.appendChild(this.$totalDonate);

    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);

    this.donateList = new List();
    this.$rootElement.appendChild(this.donateList.$rootElement);
  }

  onItemCreate(amount) {
    const newDonate = {
      id: Date.now(),
      amount: Number(amount),
      date: new Date().toLocaleString(),
    };

    const item = new ListItem({
      ...newDonate,
      onDelete: this.onItemDelete.bind(this),
    });

    this.state.donates.push(newDonate);
    this.donateList.addItem(item);

    this.state.total += newDonate.amount;
    this.$total.textContent = this.state.total;
  }

  onItemDelete(id) {
    this.state.donates = this.state.donates.filter(donate => donate.id !== id);
    this.state.total = this.state.donates.reduce((sum, donate) => sum + donate.amount, 0);
    this.$total.textContent = this.state.total;
  }
}
