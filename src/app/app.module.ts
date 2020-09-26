import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { RandomTextComponentComponent } from './random-text-component/random-text-component.component';
import { ButtonAndRandomTextContainerComponent } from './button-and-random-text-container/button-and-random-text-container.component';
import { CounterComponent } from './counter/counter.component';
import { AsyncCounterComponent } from './async-counter/async-counter.component';
import { SizesComponent } from './sizes/sizes.component';
import { SizeComponent } from './size/size.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { RandomImageComponent } from './random-image/random-image.component';
import { ChangeDimensionsDirective } from './change-dimensions.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    MainSectionComponent,
    CardComponent,
    ButtonComponent,
    RandomTextComponentComponent,
    ButtonAndRandomTextContainerComponent,
    CounterComponent,
    AsyncCounterComponent,
    SizesComponent,
    SizeComponent,
    IndicatorComponent,
    RandomImageComponent,
    ChangeDimensionsDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
