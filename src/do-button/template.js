function getTemplate(){
return `
<style>
    /* 公共样式 */
    :host {
        display: inline-block;
        color: #F2FDFF;
        --normal-lighter: hsl(187, 75%, 57%);
        --normal: hsl(187, 75%, 47%);
        --normal-darker: hsl(187, 75%, 37%);
        --danger-lighter: hsl(3, 70%, 69%);
        --danger: hsl(3, 70%, 62%);
        --danger-darker: hsl(3, 70%, 51%);
        text-align: center;
        font-size: 14px;
    }

    button {
        display: block;
        box-sizing: border-box;
        font-size: inherit;
        border: 0;
        border: 1px solid transparent;
        padding: 0.75em 2em;
        border-radius: 4px;
        cursor: pointer;
        transition: 0.2s ease box-shadow
    }

    button:disabled {
        filter: saturate(0.2);
        cursor: not-allowed
    }

    button:focus {
        outline: none;
    }

    /* 无appearance的样式 */
    :host(:not([appearance])) button {
        color: var(--normal);
        background: #fff;
        border-color: currentColor;
        border-style: solid;
    }
    :host([type="danger"]:not([appearance])) button {
        color: var(--danger);
        border-color: currentColor;
        border-style: solid;
    }
    /* 包含appearance的样式 */
    :host([appearance="primary"]) button,
    :host([appearance="gradient"]) button {
        color: #fff;
    }

    :host([appearance="primary"]) button {
        color: #fff;
        background: var(--normal);
    }

    :host([appearance="gradient"]) button {
        color: #fff;
        background: linear-gradient(var(--normal-lighter), var(--normal-darker));
    }

    /* focus样式 */
    :host button:focus {
        box-shadow: 0 0 8px var(--normal-lighter);
    }
    :host([type="danger"]) button:focus {
        box-shadow: 0 0 8px var(--danger-lighter);
    }

    :host([type="danger"][appearance="primary"]) button {
        background: var(--danger);
    }
    :host([type="danger"][appearance="gradient"]) button {
        background: linear-gradient(var(--danger-lighter), var(--danger-darker));
    }

</style>
<button id="el">
    <slot></slot>
</button>
`
}

export default getTemplate