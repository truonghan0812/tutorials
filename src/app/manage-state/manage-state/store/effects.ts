import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { INIT_STORE_ITEMS, AddNewStoreItems } from ".";
import { switchMap, delay, map, catchError, tap } from "rxjs/operators";
import { pipe, of } from "rxjs";
import { FruitState } from "./states";
import { LoadingService } from "src/app/loading.service";

@Injectable()
export class FruitEffects {

    constructor(private actions$: Actions, public loadingSubj: LoadingService) {}

    loadMovies$ = createEffect(()=> this.actions$.pipe(
            ofType(INIT_STORE_ITEMS),
            tap(()=> setTimeout(() => this.loadingSubj.isLoading$.next(true))),
            delay(2000),
            switchMap(() => of({items: [{type:'🍎'},{type:'🍎'},{type:'🍎'},{type:'🍎'},{type:'🍎'}]})
                .pipe(
                    tap(()=> this.loadingSubj.isLoading$.next(false)),
                    map( states => new AddNewStoreItems(states as FruitState)),
                    catchError(() => of({type: 'load error',paypload: null}))
                )
            )
        )
    )
}