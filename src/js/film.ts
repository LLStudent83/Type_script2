import IContent from './interfaceContent';

export default class Movie implements IContent {
  constructor(
   readonly id: number,
   readonly year: number,
   readonly country: string,
   readonly tagline: string,
   readonly genre: string,
   readonly time: string,
   readonly prise: number,
  ) {}

}
