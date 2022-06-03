import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'background-component',
  styleUrl: 'background-component.css',
  shadow: true,
})
export class BackgroundComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
