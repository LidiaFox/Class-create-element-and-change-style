class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    
    createElement() {
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.style.height = this.height;
    div.style.width = this.width;
    div.style.background = this.bg;
    div.style.fontSize = this.fontSize;
    div.innerHTML = this.textAlign;


    }
}

const div = new Options('40px', '600px', 'blue', '18px', 'any text');

div.createElement();