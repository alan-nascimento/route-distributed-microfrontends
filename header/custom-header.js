class CustomHeader extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.innerHTML = `
      <style>
        :host() {
          display: block;
        }
      
        :host([angular]) .angular,
        :host([react]) .react,
        :host([vue]) .vue,
        a:hover {
          background: #fff;
          color: #f46524;
        }
      
        header {
          text-align: center;
          background: #f46524;
          margin: 0;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      
        a {
          -webkit-font-smoothing: antialiased;
          font-family: arial;
          font-weight: normal;
          line-height: 20px;
          display: block;
          width: fit-content;
          padding: 20px;
          text-decoration: none;
          color: #fff;
        }
      </style>
      
      <header>
        <a href="/angular" class="angular">Angular</a>
        <a href="/react" class="react">React</a>
        <a href="/vue" class="vue">Vue</a>
      </header>  
    `
  }
}

customElements.define('custom-header', CustomHeader);
