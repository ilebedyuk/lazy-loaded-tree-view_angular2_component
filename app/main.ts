import {bootstrap} from "@angular/platform-browser-dynamic";
import {HTTP_PROVIDERS} from "@angular/http";
import {CountryDemo} from "./country-demo.component";
import "rxjs/Rx";

bootstrap(CountryDemo, [HTTP_PROVIDERS]);