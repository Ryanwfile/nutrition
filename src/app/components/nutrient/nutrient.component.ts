import { Component, Input } from '@angular/core';
import { Nutrient } from '../../models';

@Component({
  selector: 'app-nutrient',
  templateUrl: './nutrient.component.html',
  styleUrls: ['./nutrient.component.scss'],
  standalone: true,
  imports: [],
})

export class NutrientComponent {
 @Input() nutrientData: Nutrient;

 ngOnInit(){
  // console.log(this.nutrientData);
 }
}
