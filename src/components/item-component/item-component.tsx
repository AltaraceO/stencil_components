import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'item-component',
  styleUrl: 'item-component.css',
  shadow: true,
})
export class ItemComponent {
  @Prop() author: string;

  @Prop() postTitle: string;

  @Prop() ups: string;

  @Prop() image: string;

  render() {
    return (
      <div class="card">
        <img src={this.image} alt="preview" />
        <div class="subtitle">
          <div>
            <span>Post By:</span>
            <div class="author">{this.author}</div>
          </div>
          <div>
            <span>UpVotes:</span>
            <div class="ups">{this.ups}</div>
          </div>
        </div>
        <div class="title">
          <h3>{this.postTitle}</h3>
        </div>
      </div>
    );
  }
}
