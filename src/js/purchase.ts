import IContent from'./interfaceContent'
import Movie from './film'
import Ibasket from './interfaceBasket'

export default class Cart implements Ibasket {
    items: IContent[]=[];

    add(item:IContent): void {
        this.items.push(item);
    }

    getitems():IContent[] {
        return[...this.items];
    }

    getShoppingCartValue(): void {
        let summ: number = 0;
        for(let item of this.items) {
            summ += item.prise;
        }
        console.log(`сумма покупок Джона ${summ}`);
    }

    getShoppingCartValueDiscount(valueDisc: number): void {
        let summ: number = 0;
        for(let item of this.items) {
            summ += item.prise;
        }
        const summWithDisc: number = summ - (summ/100*valueDisc);
        console.log(`сумма покупок Джона со скидкой ${summWithDisc}`);
    }


    deletePurchase(id: number): void {
        for(let item of this.items) {
            if(item.id === id) {
                this.items.splice(this.items.indexOf(item), 1);
            }
        }

    }
}

    const buyJon: any = new Cart ();
    const avengers: IContent = new Movie (13, 2005, 'USA', 'Avengers', 'action', '137 мин./2-17', 100 );
    const bond: IContent = new Movie (14, 2012, 'Ingland', '007', 'action', '120 мин./2', 150 );
    buyJon.add(avengers),
    buyJon.add(bond),
    console.log(buyJon);
    const allBuyJon: IContent[] = buyJon.getitems()
    console.log(allBuyJon);
    buyJon.getShoppingCartValue();
    buyJon.getShoppingCartValueDiscount(50);
    buyJon.deletePurchase(13);
    console.log('содержимое карзины после удаления элемента', buyJon);