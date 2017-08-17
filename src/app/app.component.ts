import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  
  <h2>{{hero.name}} details!</h2>
  <div>
    <label>ID :</label>{{hero.id}}
  </div>
  <div>
    <label>NAME :</label>{{hero.name}}
  </div>
  <div>
    <input [(ngModel)]="hero.name">
  <div>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})
export class AppComponent  { 
  
  title = 'Tamil Heros';
  hero:Hero = {
    id: 1,
    name: 'AGALA'
  };
  heroes = HEROES;

}

export class Hero {
  id :number;
  name:string;
}


const HEROES: Hero[] = [
  { id: 11, name: 'SANIYA' },
  { id: 12, name: 'SAINA' },
  { id: 13, name: 'SINDHU' },
  { id: 14, name: 'SETU' },
  { id: 15, name: 'AMALA' },
  { id: 16, name: 'ARUN' },
  { id: 17, name: 'SUNDAR' },
  { id: 18, name: 'RAJA' },
  { id: 19, name: 'VINOTH' },
  { id: 20, name: 'VIJAY' }
];



