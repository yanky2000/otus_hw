customElements.define(
	"my-tree",
	class extends HTMLElement {
		constructor() {
			super();
			const shadowRoot = this.attachShadow({ mode: "open" });
		}
		connectedCallback() {
			const tree = JSON.parse(this.getAttribute("data"));
			const nodeId = `<div>id:${tree.id}</div>`;
			let leafs = "";
			if (tree.items && tree.items.length) {
				tree.items.map(
					leaf => (leafs += `<my-leaf data=${JSON.stringify(leaf)}></my-leaf>`)
				);
			}
			this.shadowRoot.innerHTML = "".concat(nodeId, leafs);
		}
	}
);

class Leaf extends HTMLElement {
	constructor() {
		super();
		const shadowRoot = this.attachShadow({ mode: "open" });
	}
	connectedCallback() {
		const subtree = this.getAttribute("data");
		this.shadowRoot.innerHTML = `<my-tree data=${subtree}></my-tree>`;
	}
}

customElements.define("my-leaf", Leaf);
