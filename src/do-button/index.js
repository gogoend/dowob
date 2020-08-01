class DoButton extends HTMLElement{
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
if (!customElements.get('do-button')) {
    customElements.define('do-button', DoButton)
}
export default DoButton