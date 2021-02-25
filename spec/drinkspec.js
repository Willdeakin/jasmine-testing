describe("whaticandrink function", function(){
    beforeEach(function(){
        drink = new whatcanidrink();
    });

describe("age filter", function(){
   
        it("should return drink coke when called as whatCanIDrink(17)", function() {
            var result = whatcanidrink(17);
            expect(result).toBe("Drink Coke");
        });
        
        it("should return drink beer when called as whatCanIDrink(18)", function() {
            var result = whatcanidrink(18);
            expect(result).toBe("Drink Beer");
        });
        
        it("should return drink beer when called as whatCanIDrink(20)", function() {
            var result = whatcanidrink(20);
            expect(result).toBe("Drink Beer");
        }); 
        
        it("should return drink whisky when called as whatCanIDrink(30)", function() {
            var result = whatcanidrink(30);
            expect(result).toBe("Drink Whisky");
        });
        
        it("should be unable to return a drink when called as whatCanIDrink(140)", function() {
            var result = whatcanidrink(140);
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        
        it("should contain Drink when called as whatCanIDrink(17)", function() {
            var result = whatcanidrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    })
})





