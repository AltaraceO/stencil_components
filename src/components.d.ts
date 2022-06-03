/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BackgroundComponent {
    }
    interface ItemComponent {
        "author": string;
        "image": URL;
        "title": string;
        "ups": number;
    }
}
declare global {
    interface HTMLBackgroundComponentElement extends Components.BackgroundComponent, HTMLStencilElement {
    }
    var HTMLBackgroundComponentElement: {
        prototype: HTMLBackgroundComponentElement;
        new (): HTMLBackgroundComponentElement;
    };
    interface HTMLItemComponentElement extends Components.ItemComponent, HTMLStencilElement {
    }
    var HTMLItemComponentElement: {
        prototype: HTMLItemComponentElement;
        new (): HTMLItemComponentElement;
    };
    interface HTMLElementTagNameMap {
        "background-component": HTMLBackgroundComponentElement;
        "item-component": HTMLItemComponentElement;
    }
}
declare namespace LocalJSX {
    interface BackgroundComponent {
    }
    interface ItemComponent {
        "author"?: string;
        "image"?: URL;
        "title"?: string;
        "ups"?: number;
    }
    interface IntrinsicElements {
        "background-component": BackgroundComponent;
        "item-component": ItemComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "background-component": LocalJSX.BackgroundComponent & JSXBase.HTMLAttributes<HTMLBackgroundComponentElement>;
            "item-component": LocalJSX.ItemComponent & JSXBase.HTMLAttributes<HTMLItemComponentElement>;
        }
    }
}
