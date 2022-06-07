import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptor/header.interceptor';
import { httpInterceptor } from './interceptor'; //it  will automactically refer  to index.ts file
import { AuthGuard } from './guard/auth.guard';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    UppercasePipe,
    HighlightDirective
  ],
  imports: [CommonModule],
  providers: [httpInterceptor, AuthGuard],
})
export class SharedModule {}
