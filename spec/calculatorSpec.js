describe('Calculator', function(){
    var calculator;
    beforeEach(function(){
        calculator=new Calculator();
    });
    afterEach(function(){
        calculator= null;
        //calculator.reset();
    });
    describe('Add', function(){
        it('should be able to evaluate two numbers',function(){
            var actRes=calculator.add(1,2);
            var expRes=3;
            expect(actRes).toBe(expRes);
            expect(calculator.add(5,2)).toBe(7);
        });
        it('should  be evaluate to add three numbers',function(){
            var res=calculator.add(5,2);
            var actRes=calculator.add(1);
            var expRes=8;
            expect(actRes).toBe(expRes);
        });
        it('should not be able to evaluate two letters',function(){
            expect(function(){calculator.add('l','j');}).toThrow('Error: Invalid number'); // if fn throws exception e
        });

    });
    describe('Subtract', function(){
        it('should be able to evaluate two numbers',function(){
            var actRes=calculator.subtract(2,1);
            var expRes=1;
            expect(actRes).toBe(expRes);
        });
        it('should  be able to evaluate three numbers',function(){
            calculator.subtract(5,2);
            var actRes=calculator.subtract(1);
            var expRes=2;
            expect(actRes).toBe(expRes);
        });
        it('should not be able to evaluate two letters',function(){
            expect(function(){calculator.subtract('l','j');}).toThrow('Error: Invalid number'); // if fn throws exception e
        });
        it('should not be able to subtract a bigger number from a small number',function(){
            expect(function(){calculator.subtract(1,2);}).toThrow('Error: The first number should be bigger than the second');
        });

    });
    describe('Multiple', function(){
        it('should be able to evaluate two numbers',function(){
            var actRes=calculator.multiple(2,1);
            var expRes=2;
            expect(actRes).toBe(expRes);
        });
        it('should  be able to evaluate three numbers',function(){
            calculator.multiple(5,2);
            var actRes=calculator.multiple(1);
            var expRes=10;
            expect(actRes).toBe(expRes);
        });
        it('should not be able to evaluate two letters',function(){
            expect(function(){calculator.multiple('l','j');}).toThrow('Error: Invalid number'); // if fn throws exception e
        });

    });
    describe('Divide', function(){
        it('should be able to divide two numbers',function(){
            var actRes=calculator.divide(2,1);
            var expRes=2;
            expect(actRes).toBe(expRes);
        });
        it('should  be able to evaluate three numbers',function(){
            calculator.divide(50,2);
            var actRes=calculator.divide(5);
            var expRes=5;
            expect(actRes).toBe(expRes);
        });
        it('should not be able to evaluate two letters',function(){
            expect(function(){calculator.divide('l','j');}).toThrow('Error: Invalid number'); // if fn throws exception e
        });
        it('should not be able to divide by zero ',function(){
            expect(function(){calculator.divide(5,0);}).toThrow('Error: Cannot divide by zero'); // if fn throws exception e
        });
    });

    it('should  not be able to add two numbers and then to the result subtract a bigger number',function(){
        expect(function(){calculator.add(5,2);calculator.subtract(8);}).toThrow('Error: The number should be smaller than the result');
    });
    it('should  be able to add two numbers then the result divide by zero',function(){
        expect(function(){calculator.add(5,2);calculator.divide(0);}).toThrow('Error: Cannot divide by zero');
    });

});
