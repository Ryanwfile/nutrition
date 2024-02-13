import { Component } from '@angular/core';
import { FoodComponent } from './components/food/food.component';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import { HeaderComponent } from './components/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from '@angular/forms';

// import { Form } from '@angular/forms';

//import forms

@Component({
  standalone: true,
  imports: [FoodComponent, MatButtonModule, MatIconModule, MatDividerModule, FormsModule, MatSlideToggleModule, MatSlideToggle ],
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
  isDarkTheme = false;

  toggleTheme(){
    return !this.isDarkTheme;
  }

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
