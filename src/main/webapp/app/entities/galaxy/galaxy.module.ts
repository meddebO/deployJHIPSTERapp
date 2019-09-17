import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { HerokuDemo2SharedModule } from 'app/shared';
import {
  GalaxyComponent,
  GalaxyDetailComponent,
  GalaxyUpdateComponent,
  GalaxyDeletePopupComponent,
  GalaxyDeleteDialogComponent,
  galaxyRoute,
  galaxyPopupRoute
} from './';

const ENTITY_STATES = [...galaxyRoute, ...galaxyPopupRoute];

@NgModule({
  imports: [HerokuDemo2SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [GalaxyComponent, GalaxyDetailComponent, GalaxyUpdateComponent, GalaxyDeleteDialogComponent, GalaxyDeletePopupComponent],
  entryComponents: [GalaxyComponent, GalaxyUpdateComponent, GalaxyDeleteDialogComponent, GalaxyDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HerokuDemo2GalaxyModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
