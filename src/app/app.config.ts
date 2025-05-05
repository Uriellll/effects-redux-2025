import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { appReducers } from './store/app.reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { EffectsArray } from './store/effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
     provideHttpClient(withFetch()),
     provideStore(appReducers),
     provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
     provideEffects(EffectsArray),]
};
