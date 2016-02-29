/// <reference path="node_modules/angular2/ts/typings/node/node.d.ts"/> 
/// <reference path="node_modules/angular2/typings/browser.d.ts"/> 

/* we need to tell the TypeScript compiler where to find some typing files. The
 reference statements specify the path to some typing files (ending in .d.ts) */

// defines the modules we want to use to write our code
// "angular2/platform/browser" & "angular2/core" tell where the dependencies are
// { bootstrap } is ES6 destructuring 
import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";
import { NgFor } from "angular2/common";

// Components are the new version of directives from Angular 1
// They "teach" the browse new tags that have new functionality

// Component Annotation - meta data
@Component({
    // selector defines the tag: <hello-world></hello-world>
    selector: 'hello-world',
    // ` backticks allows for multiline strings in ES6
    // {{}} - interpolation
    // *ngFor directive replaces ng-repeat https://github.com/angular/angular/blob/master/modules/angular2/src/common/directives/ng_for.ts
    // #name is a reference 
    template: `
        <ul>
            <li *ngFor="#name of names">Hello {{ name }}</li>
        </ul>
    `
})
class HelloWorld {
    // property of type "string"
    // Array<string> can also be used
    names: string[];
    
    constructor() {
        this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
    }    
}

// starts the application
// HelloWorld is the "main" component of the application
bootstrap(HelloWorld);

/*
To run our application, we need to do two things:
1. we need to tell our HTML document to import our app file
<script>
    System.config({
        packages: {
            app: {
                format: 'register',
                defaultExtension: 'js'
            }
        }
    });
    System.import('app.js')
        .then(null, console.error.bind(console));
</script>

2. we need to use our <hello-world> component
    <hello-world></hello-world>
*/



    
    
