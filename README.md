# NgRouterLoading

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## How to use
### Step 1
Import NgRouterLoadingModule to AppModule

```javascript
{
  imports: [
    ...
    NgRouterLoadingModule
    ...
  ]
}
```

or 
```javascript
{
  imports: [
    ...
    NgRouterLoadingModule.forRoot(options)
    ...
  ]
}
```
### Step 2
Add directive ```ng-router-loading``` for root html tag (```router-outlet``` or ```ng-container```) in ```AppComponent```  

```html
<router-outlet ng-router-outlet></router-outlet>
```

