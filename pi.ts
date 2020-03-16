class pizza {  
    price: number;  
    topping: string;  
    base: string;  
    bprice: number;  
    total(){
        if(this.base="thick"){
      var TotalPrice = 200+this.price;
      console.log("total price is of:"+this.base +"base and topping"+" "+ this.topping+"="+ TotalPrice);
        }
     }
     totalp(){ if(this.base="thin"){
            var tprice = 150+this.price;
            console.log("total price of:"+this.base+"base and topping"+" "+this.topping+"="+ tprice);
        }
    }
    showDetail() {
         console.log(`topping: ${this.topping}  price: ${this.price} `) ;   
 }
}  
class vegPizza extends pizza{
    show(){
        console.log("veg menu");
    }
     pbase(base: string){
 return this.base;
     }
    constructor(price: number, name: string) {  
        super();
        this.topping = name;  
        this.price = price;
}  
}
class nonvegPizza extends vegPizza{
    super(price: number, name: string){
        this.topping = name;  
        this.price = price;
    }
  
}
let piz = new vegPizza(20, 'greenpepper');  
let p = new vegPizza(50, 'extra cheese');  
let a = new vegPizza(40, 'olives');  
let b = new vegPizza(30, 'onion');  
let c = new vegPizza(40, 'jalpeno');  
let d = new vegPizza(50, 'mushroom');  
piz.showDetail();  
piz.pbase("thick");
piz.pbase("thin"); 
piz.total();
piz.totalp();
p.showDetail(); 
p.pbase("thick");
p.pbase("thin");
p.total();
p.totalp();
a.showDetail();  
a.pbase("thick");
a.pbase("thin");
a.total();
a.totalp();
b.showDetail();  
b.pbase("thick");
b.pbase("thin"); 
b.total();
b.totalp();
c.showDetail();  
c.pbase("thick");
c.pbase("thin"); 
c.total();
c.totalp();
d.showDetail();  
d.pbase("thick");
d.total();
d.pbase("thin"); 
d.totalp();
let e= new nonvegPizza(50, 'Salami');  
let f = new nonvegPizza(50, 'Pepperoni');  
let g = new nonvegPizza(40, 'Bacon');  
let h = new nonvegPizza(80, 'Chicken breasts');  
let i = new nonvegPizza(90, 'Ham');  
let j = new nonvegPizza(50, 'Sausages');  
e.showDetail();  
e.pbase("thick");
e.pbase("thin"); 
e.total();
e.totalp();
f.showDetail();  
f.pbase("thick");
f.pbase("thin"); 
f.total();
f.totalp();
g.showDetail();  
g.pbase("thick");
g.pbase("thin"); 
g.total();
g.totalp();
h.showDetail();
h.pbase("thick");
h.pbase("thin"); 
h.total();
h.totalp();
i.showDetail();
i.pbase("thick");
i.pbase("thin"); 
i.total();
i.totalp();
j.showDetail();
j.pbase("thick");
j.pbase("thin"); 
j.total();
j.totalp();

