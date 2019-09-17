import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HerokuDemo2SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [HerokuDemo2SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [HerokuDemo2SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HerokuDemo2SharedModule {
  static forRoot() {
    return {
      ngModule: HerokuDemo2SharedModule
    };
  }
}
