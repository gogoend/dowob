import template from './template.js'
class DoButton extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({
            mode: 'open'
        })
        this.render()
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
        if(val===null||val===false){
            this.removeAttribute('disabled')
        }else{
            this.setAttribute('disabled','true')
        }
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
                if(newValue!==null){
                    this.el.setAttribute('disabled', 'true');
                }else{
                    this.el.removeAttribute('disabled');
                }
            }
        }
    }
    connectedCallback(){
    }

    render(){
        this.shadowRoot.innerHTML = template()
        this.el = this.shadowRoot.getElementById('el')
    }
}
if (!customElements.get('do-button')) {
    customElements.define('do-button', DoButton)
}
export default DoButton