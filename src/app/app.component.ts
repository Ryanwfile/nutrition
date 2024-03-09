import { Component } from '@angular/core';
import { FoodComponent } from './components/food/food.component';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { ButtonOverviewExample } from './components/button-overview-example/button-overview-example.component';
import {MatCardModule} from '@angular/material/card';
import {ThemePalette} from '@angular/material/core';
import { CommonModule } from '@angular/common';
// import { Form } from '@angular/forms';
//https://levelup.gitconnected.com/how-to-apply-material-theme-colors-for-your-angular-component-eda2aeb057be
//import forms

@Component({
  standalone: true,
  imports: [ 
    CommonModule,
    FoodComponent, 
    MatButtonModule, 
    MatIconModule, 
    MatDividerModule, 
    FormsModule, 
    MatSlideToggleModule, 
    MatSlideToggle, 
    ButtonOverviewExample, 
    MatCardModule ],
  selector: 'app-root',  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //strings need better validation
  title = 'nutrition-app';
  calorieAmount = 0;
  exerciseAmount = 0;
  gender = '';
  currentCalories = 0;
  currentExcercise = 0;
  dailyGoalAmount = 0;
  dailyGoalsComplete = false;
  age = 0;


  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  isDarkTheme: boolean;

  color: ThemePalette = 'accent';
  checked = false;
  // disabled = false;

  toggleTheme(){
    return !this.isDarkTheme;
  }

  // ngOnInit(){
  //   this.isDarkTheme = false;
  // }



  // changeThemeColor(){
  //   const body = document.getElementsByTagName('body')[0];
  //   if (body.classList.contains('dark-theme')){
  //     body.classList.remove('dark-theme');
  //   } else {
  //     body.classList.add('dark-theme');
  //   }
  //   return true
  // }
}
