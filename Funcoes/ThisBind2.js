function Pessoa() {
    this.idade = 0;

    const self = this;
    setInterval(function() {
        self.idade++;
        console.log(self.idade);
    }, 1000)
}

new Pessoa; // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...