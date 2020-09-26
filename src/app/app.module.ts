import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { ForbiddenWordsHighlightDirective } from './forbidden-words-highlight.directive';
import { ForbiddenWordsComponent } from './forbidden-words/forbidden-words.component';
import { ForbiddenWordsHighlight2Directive } from './forbidden-words-highlight-2.directive';
import { NoDataDirective } from './no-data.directive';
import { NoDataAvailableComponent } from './no-data-available/no-data-available.component';
import { CanBeVisibleDirective } from './can-be-visible.directive';
import { ModuloPipe } from './modulo.pipe';
import { ModuloExamplesComponent } from './modulo-examples/modulo-examples.component';
import { CeilPipe } from './ceil.pipe';
import { CeilExamplesComponent } from './ceil-examples/ceil-examples.component';
import { FloorPipe } from './floor.pipe';
import { FloorExamplesComponent } from './floor-examples/floor-examples.component';
import { DotToCommaPipe } from './dot-to-comma.pipe';
import { DotToCommaExamplesComponent } from './dot-to-comma-examples/dot-to-comma-examples.component';
import { HyphenToSpacePipe } from './hyphen-to-space.pipe';
import { HyphenToSpaceExamplesComponent } from './hyphen-to-space-examples/hyphen-to-space-examples.component';
import { AppendWordPipe } from './append-word.pipe';
import { AppendExamplesComponent } from './append-examples/append-examples.component';
import { DecimalToBinaryPipe } from './decimal-to-binary.pipe';
import { DecimalToBinaryExamplesComponent } from './decimal-to-binary-examples/decimal-to-binary-examples.component';
import { ObjectKeysPipe } from './object-keys.pipe';
import { ObjectKeysExamplesComponent } from './object-keys-examples/object-keys-examples.component';
import { AthleteDetailsComponent } from './athlete-details/athlete-details.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { RandomValueComponentExampleComponent } from './random-value-component-example/random-value-component-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { ProgressComponent } from './progress/progress.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Route, RouterModule } from '@angular/router';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { FavouriteCourseComponent } from './favourite-course/favourite-course.component';
import { CourseComponent } from './course/course.component';
import { CourseGuardService } from './course-guard.service';
import { ProgressGuardService } from './progress-guard.service';
import { DeactivateGuardService } from './deactivate-guard.service';
import { DashboardResolverService } from './dashboard-resolver.service';

const routes: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canDeactivate: [ DeactivateGuardService ],
    resolve: { paragraphs: DashboardResolverService }
  },
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [ CourseGuardService ],
    canDeactivate: [ DeactivateGuardService ],
    children: [
      { path: 'my-courses', component: MyCoursesComponent },
      { path: 'favourite', component: FavouriteCourseComponent },
      { path: ':courseName', component: CourseComponent }
    ]
  },
  { path: 'progress', component: ProgressComponent, canActivate: [ ProgressGuardService ], canDeactivate: [ DeactivateGuardService ], },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
]

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
    ChangeDimensionsDirective,
    ForbiddenWordsHighlightDirective,
    ForbiddenWordsComponent,
    ForbiddenWordsHighlight2Directive,
    NoDataDirective,
    NoDataAvailableComponent,
    CanBeVisibleDirective,
    ModuloPipe,
    ModuloExamplesComponent,
    CeilPipe,
    CeilExamplesComponent,
    FloorPipe,
    FloorExamplesComponent,
    DotToCommaPipe,
    DotToCommaExamplesComponent,
    HyphenToSpacePipe,
    HyphenToSpaceExamplesComponent,
    AppendWordPipe,
    AppendExamplesComponent,
    DecimalToBinaryPipe,
    DecimalToBinaryExamplesComponent,
    ObjectKeysPipe,
    ObjectKeysExamplesComponent,
    AthleteDetailsComponent,
    Child1Component,
    Child2Component,
    RandomValueComponentExampleComponent,
    DashboardComponent,
    CoursesComponent,
    ProgressComponent,
    NotFoundComponent,
    MyCoursesComponent,
    FavouriteCourseComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    HyphenToSpacePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
