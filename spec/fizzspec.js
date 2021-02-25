describe("fizzbuzz function", function(){
    beforeEach(function(){
        drink = new whatcanidrink();
    });

describe("divider",function(){
    it("should return FizzBuzz", function(){
        var result = fizzbuzz(15);
        expect(result).toBe("FizzBuzz");
    })

    it("should return Fizz", function(){
        var result = fizzbuzz(6);
        expect(result).toBe("Fizz");
    })


    it("should return Buzz", function(){
        var result = fizzbuzz(10);
        expect(result).toBe("Buzz");
    })


    it("should return 11", function(){
        var result = fizzbuzz(11);
        expect(result).toBe(11);
    })


})

})