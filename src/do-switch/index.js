class DoSwitch extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({
            mode: 'open'
        })
        this.render()
    }
    render(){
        this.shadowRoot.innerHTML = '111'
    }
}
if (!customElements.get('do-switch')) {
    customElements.define('do-switch', DoSwitch)
}
export default DoSwitch