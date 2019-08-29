console.log('hello')

customElements.define('my-tree', class extends HTMLElement{
    constructor() {
        super();
        // shadowRoot.innerHTML = `<h1>Hello!</h1>`
        let shadowRoot = this.attachShadow({mode:'open'})
    }
    connectedCallback() {
        console.info(this.parentElement)
        const parentChildrenArr = this.parentElement.children;



        this.hostTree = this.parentElement;
        // this.shadowRoot.innerHTML = `${this.parentElement}`
        console.log(1234, this.shadowRoot);
        // this.shadowRoot.innerHTML = '<h2>hey shadow</h2>';
        // this.shadowRoot.innerHTML = l;
        // this.shadowRoot.appendChild(this.hostTree)
    }\
})

class TreeLeaf extends HTMLElement {
    constructor(node) {
        super();
        let shadowRoot = this.attachShadow({mode:'open'});
        shadowRoot.innerHTML = node
    }
}

customElements.define('my-leaf', TreeLeaf)