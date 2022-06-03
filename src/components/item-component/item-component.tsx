import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'item-component',
  styleUrl: 'item-component.css',
  shadow: true,
})
export class ItemComponent {
  @Prop() author: string;

  @Prop() title: string;

  @Prop() ups: number;

  @Prop() image: URL;

  render() {
    return (
      <Host>
        <div>{this.author}</div>
      </Host>
    );
  }
}
