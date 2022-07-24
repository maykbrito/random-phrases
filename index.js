class RandomPhrase extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {

    const {phrases, randomId} = await this.getPhrases()

    const blockquote = document.createElement('blockquote')

    const p = document.createElement('p')
    p.innerText = phrases[randomId].quote

    const cite = document.createElement('cite')
    cite.innerText = phrases[randomId].author

    blockquote.appendChild(p)
    blockquote.appendChild(cite)
  
    this.appendChild(blockquote)
  }

  async getPhrases() {
    const url = "./phrases.json"
    const phrases = await fetch(url).then(res => res.json())

    return {
      randomId: ~~(Math.random() * phrases.length),
      phrases
    }
  }
}

if (!customElements.get("random-phrase")) {
  customElements.define("random-phrase", RandomPhrase);
}

// Colorful BG
class ColorfulBg extends HTMLElement {
  connectedCallback() {
    const randomHue = ~~(Math.random() * 360);
    const hsl = `hsl(${randomHue}, 90%, 60%, 0.3)`
    const hsl2 = `hsl(${randomHue}, 40%, 60%, 1)`
    const body = document.querySelector("body")
    body.style.background = `linear-gradient(120deg, ${hsl}, ${hsl2})`
  }
}

if (!customElements.get("colorful-bg")) {
  customElements.define("colorful-bg", ColorfulBg);
}

