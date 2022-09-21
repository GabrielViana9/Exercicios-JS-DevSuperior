const p1 = {
    name: "Computador",
    price: 3000.0,
    quantity: 2
}

const Product = function(name, price, quantity) {
    this.name = name, // Palavra this é muito utilizada no JS, pois ela referencia o atributo do objeto
    this.price = price;
    this.quantity = quantity; // Se bota o quantity sem o this é como se falasse do atributo na function(quantity)


    // Se o obj tem um membro interno com mesmo nome no prototypo ele da prioridade ao interno

    /* this.label = function() { 
        return `Dados: ${this.name}, ${this.price.toFixed(2)}`; 
    } */
}

Product.prototype.total = function() { // Acessando prototype e adicionando total
    return this.price * this.quantity;
}

Product.prototype.add = function(amount) {
    this.quantity = this.quantity + amount; // Ou pode resumir usando: this.quantity += amount;
}

Product.prototype.remove = function(amount) {
    if (this.quantity >= amount) {
        this.quantity = this.quantity - amount; // Ou pode resumir usando: this.quantity -= amount;
    }
}

Product.prototype.label = function() {
    return `Dados: ${this.name}, ${this.price.toFixed(2)}`;
}

const p2 = new Product("Monitor", 800.0, 10);

const p3 = new Product("Mouse", 50.0, 4);