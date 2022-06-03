import { Component, h, State, Prop } from '@stencil/core';

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
  @Prop() urls: any;
  @State() theList: Post[];

  async componentWillRender() {
    console.log('will render', this.urls);

    let reddit = await fetch(this.urls, {
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
  }
  render() {
    return (
      <div class="main-window">
        The List
        {this.theList.map((el: Post) => {
          console.log();
          //the UPS had to be changed to string because the numbers were jumping around when moved in with props
          return <item-component postTitle={el.text} image={el.image.toString()} ups={el.upvotes.toString()} author={el.author}></item-component>;
        })}
      </div>
    );
  }
}
