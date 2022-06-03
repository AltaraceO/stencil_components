import { Component, Host, h, State } from '@stencil/core';

interface Post {
  author: string;
  text: string;
  image: URL;
  upvotes: number;
}

@Component({
  tag: 'background-component',
  styleUrl: 'background-component.css',
  shadow: true,
})
export class BackgroundComponent {
  @State() theList: Post[];

  async componentWillRender() {
    let reddit = await fetch('https://www.reddit.com/r/Images.json?raw_json=1', {
      method: 'GET',
    });
    let data = await reddit.json();

    let newObjs = data.data.children.map((el: any = {}) => {
      return {
        author: el.data.author,
        text: el.data.title,
        image: el.data.thumbnail,
        upvotes: el.data.ups,
      };
    });
    this.theList = [...newObjs];
    console.log('thelist', this.theList);
  }
  render() {
    return (
      <Host>
        Hi Hi
        {this.theList.map((el: Post) => {
          console.log();
          //the UPS had to be changed to string because the numbers were jumping around when moved in with props
          return <item-component postTitle={el.text} image={el.image.toString()} ups={el.upvotes.toString()} author={el.author}></item-component>;
        })}
      </Host>
    );
  }
}
