# Cobrowse Service Library for Angular

A service library for integrate cobrowse.io in your angular project.
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.

## Getting Started

After installing it you need to provide your licensekey in app.module.ts 

``` typescript
    providers: [
        ...
        {provide: COBROWSE_IO_LICENSE_KEY,  useValue: '[YOUR_LICENSE_KEY]'}
    ],
```

inject the cobrowseService in your controller and start a session

``` typescript
constructor(
        ...
        private cobrowseService: CobrowseService,
    ) {
        ...
         cobrowseService.start();
     }
```

### Installing

In your Angular project run

```
npm i --save  @nilsthomann/ng-cobrowse
```

## Authors

* **Nils Thomann** - *Initial work* - [Nils Thomann](https://github.com/nilsthomann)

See also the list of [contributors](https://github.com/nilsthomann/ng-cobrowse/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License

## Acknowledgments

* Thanks to PurpleBooth for the [Readme Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) 

