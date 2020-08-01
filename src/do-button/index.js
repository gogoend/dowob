import template from './template.js'
class DoButton extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({
            mode: 'open'
        })
    }
    static get observedAttributes() {
        return ['type','appearance','disabled']
    }
    get type(){
        return this.getAttribute('type')
    }
    set type(val){
        this.setAttribute('type',val)
    }
    get appearance(){
        return this.getAttribute('appearance')
    }
    set appearance(val){
        val? this.setAttribute('appearance',val):this.removeAttribute('appearance')
    }
    set disabled(val){
        val? this.el.setAttribute('disabled',''):this.el.removeAttribute('disabled')
        // this.setAttribute('disabled',val)
    }
    get disabled(){
        return this.getAttribute('disabled')!==null
    }
    attributeChangedCallback (name, oldValue, newValue) {
        if(!this.el){
            return
        }
        switch(name){
            case 'type':{
                break
            }
            case 'appearance':{
                break
            }
            case 'disabled':{
                if(newValue){
                    this.el.setAttribute('disabled','')
                }else{
                    this.el.removeAttribute('disabled')
                }
            }
        }
    }
    connectedCallback(){
        this.render()
        this.el = this.shadowRoot.getElementById('el')
    }

    render(){
        this.shadowRoot.innerHTML = template()
    }
}
if (!customElements.get('do-button')) {
    customElements.define('do-button', DoButton)
}
export default DoButton