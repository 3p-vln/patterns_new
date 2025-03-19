import { ProdResponse } from '../components/interfaces.ts';
import { getCatalogList } from '../composables/use-api.ts';
import { classManipulator, getElement, renderElement } from '../composables/use-call-dom.ts';

interface Cards {
  getCardInfo(): Promise<ProdResponse>;
}

class SaleCards implements Cards {
  public async getCardInfo(): Promise<ProdResponse> {
    try {
      const list = await getCatalogList(1, 10, 'Sale%');

      if ('errors' in list) {
        console.error(list);
        return { data: [], meta: { totalItems: 0, totalPages: 0 } };
      }

      console.log(list);
      return list;
    } catch (error) {
      console.error('An error occurred:', error);
      return { data: [], meta: { totalItems: 0, totalPages: 0 } };
    }
  }
}

class VitaminsCards implements Cards {
  public async getCardInfo(): Promise<ProdResponse> {
    try {
      const list = await getCatalogList(1, 10, 'Vitamins & Dietary Supplements');

      if ('errors' in list) {
        console.error(list);
        return { data: [], meta: { totalItems: 0, totalPages: 0 } };
      }

      console.log(list);
      return list;
    } catch (error) {
      console.error('An error occurred:', error);
      return { data: [], meta: { totalItems: 0, totalPages: 0 } };
    }
  }
}

class WeightCards implements Cards {
  public async getCardInfo(): Promise<ProdResponse> {
    try {
      const list = await getCatalogList(1, 10, 'Weight Loss');

      if ('errors' in list) {
        console.error(list);
        return { data: [], meta: { totalItems: 0, totalPages: 0 } };
      }

      console.log(list);
      return list;
    } catch (error) {
      console.error('An error occurred:', error);
      return { data: [], meta: { totalItems: 0, totalPages: 0 } };
    }
  }
}

class MineralsCards implements Cards {
  public async getCardInfo(): Promise<ProdResponse> {
    try {
      const list = await getCatalogList(1, 10, 'Minerals');

      if ('errors' in list) {
        console.error(list);
        return { data: [], meta: { totalItems: 0, totalPages: 0 } };
      }

      console.log(list);
      return list;
    } catch (error) {
      console.error('An error occurred:', error);
      return { data: [], meta: { totalItems: 0, totalPages: 0 } };
    }
  }
}

class AntioxidantsCards implements Cards {
  public async getCardInfo(): Promise<ProdResponse> {
    try {
      const list = await getCatalogList(1, 10, 'Antioxidants');

      if ('errors' in list) {
        console.error(list);
        return { data: [], meta: { totalItems: 0, totalPages: 0 } };
      }

      console.log(list);
      return list;
    } catch (error) {
      console.error('An error occurred:', error);
      return { data: [], meta: { totalItems: 0, totalPages: 0 } };
    }
  }
}

class ProbioticsCards implements Cards {
  public async getCardInfo(): Promise<ProdResponse> {
    try {
      const list = await getCatalogList(1, 10, 'Probiotics');

      if ('errors' in list) {
        console.error(list);
        return { data: [], meta: { totalItems: 0, totalPages: 0 } };
      }

      console.log(list);
      return list;
    } catch (error) {
      console.error('An error occurred:', error);
      return { data: [], meta: { totalItems: 0, totalPages: 0 } };
    }
  }
}

class PainCards implements Cards {
  public async getCardInfo(): Promise<ProdResponse> {
    try {
      const list = await getCatalogList(1, 10, 'Pain Relief');

      if ('errors' in list) {
        console.error(list);
        return { data: [], meta: { totalItems: 0, totalPages: 0 } };
      }

      console.log(list);
      return list;
    } catch (error) {
      console.error('An error occurred:', error);
      return { data: [], meta: { totalItems: 0, totalPages: 0 } };
    }
  }
}

class PrenatalCards implements Cards {
  public async getCardInfo(): Promise<ProdResponse> {
    try {
      const list = await getCatalogList(1, 10, 'Prenatal Vitamins');

      if ('errors' in list) {
        console.error(list);
        return { data: [], meta: { totalItems: 0, totalPages: 0 } };
      }

      console.log(list);
      return list;
    } catch (error) {
      console.error('An error occurred:', error);
      return { data: [], meta: { totalItems: 0, totalPages: 0 } };
    }
  }
}

abstract class CardsFactory {
  public abstract create(): Cards;

  public render(): Promise<ProdResponse> {
    const cardList = this.create();
    return cardList.getCardInfo();
  }
}

class SaleFactory extends CardsFactory {
  public create(): Cards {
    return new SaleCards();
  }
}

class VitaminsFactory extends CardsFactory {
  public create(): Cards {
    return new VitaminsCards();
  }
}

class WeightFactory extends CardsFactory {
  public create(): Cards {
    return new WeightCards();
  }
}

class MineralsFactory extends CardsFactory {
  public create(): Cards {
    return new MineralsCards();
  }
}

class AntioxidantsFactory extends CardsFactory {
  public create(): Cards {
    return new AntioxidantsCards();
  }
}

class ProbioticsFactory extends CardsFactory {
  public create(): Cards {
    return new ProbioticsCards();
  }
}

class PainFactory extends CardsFactory {
  public create(): Cards {
    return new PainCards();
  }
}

class PrenatalFactory extends CardsFactory {
  public create(): Cards {
    return new PrenatalCards();
  }
}

const filter = getElement('.render-btn');

if (filter) {
  filter.addEventListener('click', () => {
    const filterItem = getElement<HTMLSelectElement>('#filterSelect');

    if (!filterItem) return;

    const value = filterItem.value;
    let factory: CardsFactory | null = null;

    switch (value) {
      case 'sale':
        factory = new SaleFactory();
        break;
      case 'vitamins':
        factory = new VitaminsFactory();
        break;
      case 'antioxidants':
        factory = new AntioxidantsFactory();
        break;
      case 'weight':
        factory = new WeightFactory();
        break;
      case 'minerals':
        factory = new MineralsFactory();
        break;
      case 'probiotics':
        factory = new ProbioticsFactory();
        break;
      case 'pain':
        factory = new PainFactory();
        break;
      case 'prenatal':
        factory = new PrenatalFactory();
        break;
    }

    if (!factory) return;

    const items = factory.render();

    items.then((data) => {
      const cardsContainer = getElement('.catalog-list__content');

      if (!cardsContainer) return;

      cardsContainer.innerHTML = '';
      const cards: HTMLElement[] = [];

      data.data.forEach((item) => {
        console.log(item);
        const card = renderElement('div', ['prod-card', `${item.id}`]);
        const cardContainer = renderElement('div', 'prod-card__content');

        const cardImg = renderElement('div', 'prod-card__img');
        cardImg.innerHTML = `<picture><img src="${item.img}" alt="prod" /></picture>`;

        const cardDiscount = renderElement('div', 'prod-card__discount');
        cardDiscount.innerText = `-${item.discount}%`;

        const cardInfo = renderElement('div', ['prod-card__info', 'info']);
        const category = renderElement('p', 'info__category');

        if(item.type == 'Vitamins & Dietary Supplements'){
          classManipulator(category, 'add', 'info__category_purple')
        }
        if (item.type == 'Minerals'){
          classManipulator(category, 'add', 'info__category_green-mint')
        }
        if (item.type == 'Prenatal Vitamins'){
          classManipulator(category, 'add', 'info__category_purple')
        }
        if (item.type == 'Pain Relief'){
          classManipulator(category, 'add', 'info__category_blue')
        }
        if (item.type == 'Antioxidants'){
          classManipulator(category, 'add', 'info__category_orange')
        }
        if (item.type == 'Weight Loss'){
          classManipulator(category, 'add', 'info__category_dark-blue')
        }
        if (item.type == 'Probiotics' || item.type == 'Sale%'){
          classManipulator(category, 'add', 'info__category_red')
        }

        if(item.type)

        category.innerText = item.type;

        const name = renderElement('p', 'info__name');
        name.innerText = item.name;

        const price = renderElement('p', 'info__price');

        price.innerText = `$${item.price}`;

        cardInfo.appendChild(category);
        cardInfo.appendChild(name);
        cardInfo.appendChild(price);

        cardContainer.appendChild(cardImg);
        if (item.type === 'Sale%') {
          cardContainer.appendChild(cardDiscount);
        }
        cardContainer.appendChild(cardInfo);

        card.appendChild(cardContainer);
        cards.push(card);
      });

      cards.forEach((card) => {
        cardsContainer.appendChild(card);
      })
    });
  });
}
