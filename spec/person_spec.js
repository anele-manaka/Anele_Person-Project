const Person = require ('../src/person.js');

let anele = new Person("Anele",19,"female","poetry, yoga, music and hiking.");

describe ("person", function(){
    it("should input the person name", function(){
        expect(anele.name).toBe("Anele");
    })

    it("should input the person age", function(){
        expect(anele.age).toBe(19);
    })

    it("should input the person gender", function(){
        expect(anele.gender).toBe("female")
    })

    it("should input the person interests", function(){
        expect(anele.interests).toBe("poetry, yoga, music and hiking.")
    })
    }
)

describe ("hello", function(){
    it("should add greeting to the person", function(){
        expect(anele.hello()).toBe("Hello, my name is Anele, a 19 year old female. My interests include poetry, yoga, music and hiking.")
        })
    })
