# Cobrowse Service Library for Angular

A service library for integrate cobrowse.io in your angular project.
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.

## Getting Started

The following steps must be done to activate Cobrowse in your angular project

### Installing

Run the following command to install the library

```
npm i --save  @nilsthomann/ng-cobrowse
```

### Setup

After the installation you have to provide your license key in app.module.ts

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

### Enterprise Instance

If you have your own enterprise instance, you have to provide your API URL in app.module.ts

``` typescript
    providers: [
        ...
        {provide: COBROWSE_IO_API_URL,  useValue: '[YOUR_API_URL]'} // as example 'https://cobrowse.example.com'
    ],
```

## Authors

* **Nils Thomann** - *Initial work* - [Nils Thomann](https://github.com/nilsthomann)

See also the list of [contributors](https://github.com/nilsthomann/ng-cobrowse/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License

## Acknowledgments

* Thanks to PurpleBooth for the [Readme Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) 

