class ScoreBoard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get styles() {
		return /* css */ `
      :host {
        --inactive-color: #011b1a;
        --active-color: #19cbb6;
      }

      .content {
        font-family: var(--heading-font);
        color: var(--title-color);
        display: flex;
        background-color: var(--first-bg);
        padding: var(--s-padding) var(--x-padding);
      }

      .elements-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--s-gap);
      }

      .elements-container h2 {
        margin: 0;
      }

      .elements {
        color: var(--active-color);
        text-shadow: 0 0 10px var(--inactive-color);
      }

      .elements::before {
        content: '888';
        color: var(--inactive-color);
        position: absolute;
        z-index: var(-z-back);
      }

      .titles {
        display: flex; 
        justify-content: space-between;
      }

      .title {
        font-family: var(--body-font);
        content: 'Elements';
      }

      span {
        display: block;
        padding: 0 var(--n-padding);
      }
    `;
	}

	connectedCallback() {
		this.render();
	}

	setElements(number) {
		const paddingNumber = String(number).padStart(3, '0');
		this.shadowRoot.querySelector('.current').textContent = paddingNumber;
	}

	incElements(size = 1) {
		const number =
			Number(this.shadowRoot.querySelector('.current').textContent) + size;

		this.setElements(number);
	}

	setTotal(number) {
		const paddingNumber = String(number).padStart(3, '0');
		this.shadowRoot.querySelector('.total').textContent = paddingNumber;
	}

	render() {
		this.shadowRoot.innerHTML = /* html */ `
      <style>${ScoreBoard.styles}</style>
      <section class='content'>
        <div class='inner-content'>
          <div class='titles'>
            <div class='title'>Elements</div>
            <div class='title'>Total</div>
          </div>

          <div class='elements-container'>
            <h2 class='title1 current element'>00</h2>
            <span>/</span>
            <h2 class='title1 total'>00</h2>
          </div>
        </div>
      </section>
    `;
	}
}

customElements.define('score-board', ScoreBoard);

/* ruby on reals, qbasic, linkQ, asp */
