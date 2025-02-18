import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    this.$donatesContainerTitle = document.createElement('h2');
    this.$donatesContainerTitle.className = 'donates-container__title';
    this.$donatesContainerTitle.textContent = 'Список донатов';

    this.$listContainer = document.createElement('div');
    this.$listContainer.className = 'donates-container__donates';

    this.$rootElement.append(this.$donatesContainerTitle, this.$listContainer);
  }

  addItem(item) {
    // ...
    
  }
}
