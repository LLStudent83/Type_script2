import IContent from './interfaceContent'

export default interface Ibasket {
    items: Array<IContent>
    add(purchase: IContent): void;
    getitems(): Array<IContent>;
}