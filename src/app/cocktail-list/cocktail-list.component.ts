import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      img: 'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2020-08/articles-images-corps-texte-8.png?itok=tDVVevZ-',
      description: `
      Il est sans conteste le cocktail préféré des français et probablement l’un des plus faciles à réaliser. Le Mojito, traditionnellement composé de 4 à 6 cl de rhum blanc, d’eau gazeuse, de 3 cuillères à café de sucre de canne, d’1/2 citron vert, de glaçons et de feuilles de menthe, peut aussi se dévergonder avec du jus de fraise par exemple ! Il se mariera à la perfection avec un délicieux guacamole au piment doux.
      `,
    },
    {
      name: 'Bellini',
      img: 'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2019-11/bellini_1.jpg?itok=IGogglim',
      description: `Le Bellini, en plus d’être un incontournable, extrêmement facile à réaliser puisqu’il s’agit d’un simple mélange de 10cl de Prosecco et de 5cl de purée de pêche blanche. Voilà qui devrait vous laisser le temps de préparer à vos invités une belle planche de charcuterie !`,
    },
    {
      name: 'Aquavit Fresh',
      img: 'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2019-11/aquavit-fresh.jpg?itok=C17K5mqQ',
      description:
        'Venu tout droit de Norvège l’Aquavit est l’alcool le plus trendy du moment. On l’aime tout particulièrement sous forme de cocktail « Fresh » et pour le réaliser, voici la marche à suivre : mélangez 4cl d’Aquavit, 1cl de Grand Marnier, du jus d’orange et quelques feuilles de menthe. Servez-le accompagné de petits canapés de saumon de Norvège et baies roses et vous voilà avec un combo d’apéro parfait !',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
