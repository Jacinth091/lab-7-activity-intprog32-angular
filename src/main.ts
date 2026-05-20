import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Polyfill process.env for browser environment
(window as any).process = { env: {} };

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
