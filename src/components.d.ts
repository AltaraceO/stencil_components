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
}
declare global {
    interface HTMLBackgroundComponentElement extends Components.BackgroundComponent, HTMLStencilElement {
    }
    var HTMLBackgroundComponentElement: {
        prototype: HTMLBackgroundComponentElement;
        new (): HTMLBackgroundComponentElement;
    };
    interface HTMLElementTagNameMap {
        "background-component": HTMLBackgroundComponentElement;
    }
}
declare namespace LocalJSX {
    interface BackgroundComponent {
    }
    interface IntrinsicElements {
        "background-component": BackgroundComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "background-component": LocalJSX.BackgroundComponent & JSXBase.HTMLAttributes<HTMLBackgroundComponentElement>;
        }
    }
}
