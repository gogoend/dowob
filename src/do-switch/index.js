import template from './template.js'

class DoSwitch extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({
            mode: 'open'
        })
        this.render()
    }

    get value () {
        return this.switchFlag.checked
    }
    set value (val) {
        this.switchFlag.checked = val;
    }
    render(){
        this.shadowRoot.innerHTML = template()
        this.el = this.shadowRoot.getElementById('el')
        this.switchFlag = this.shadowRoot.getElementById('switch-flag')
    }
}
if (!customElements.get('do-switch')) {
    customElements.define('do-switch', DoSwitch)
}
export default DoSwitch