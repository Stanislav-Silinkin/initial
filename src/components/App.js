import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    }
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

    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
  }

  onItemCreate(amount) {
    const newDonate = { amount: Number(amount), date: new Date() };
    const item = new ListItem(newDonate);
    this.state.donates.push(item);



    // Обновляем общую сумму
    // this.state.total += newDonate.amount;
    // this.$total.textContent = this.state.total;

    // Добавляем новый ListItem в список
    // this.donateList.$rootElement.appendChild(item.$rootElement);
  }
}

// Далее шаг 18