import { bootstrap } from 'angular2/platform/browser'; 
import { Component } from 'angular2/core';

@Component({
  selector: 'reddit',
  template: `
    <form class="ui large form segment">
        <h3 class="ui header">Add a Link</h3>
        <div class="field">
            <label for="title">Title:</label>
            <!--bind this <input> to the variable newtitle--> 
            <!--newtitle is a resolve HTMLInputElement object which makes it available for expressions in this view-->
            <input name="title" #newtitle>
        </div>
        <div class="field">
            <label for="link">Link:</label>
            <!--bind this <input> to the variable newLink--> 
            <!--newlink is a resolve HTMLInputElement object which makes it available for expressions in this view-->
            <input name="link" #newlink>
        </div>

        <!--addArticle is a function defined in RedditApp-->
        <!--newtitle comes from #newtitle-->
        <!--newlink comes from #newlink-->
        <!--"ui positive right floated button" comes from Semantic UI-->
        <button (click)="addArticle(newtitle, newlink)" class="ui positive right floated button">
            Submit link
        </button>
    </form> 
`
})
class RedditApp {
    constructor() {}
     
    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    }
}

bootstrap(RedditApp);