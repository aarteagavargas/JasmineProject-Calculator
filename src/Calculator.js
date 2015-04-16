//calculator
var Calculator= function(){
    var _result=0;
    this.add=function(var1, var2){
        if(var2==undefined && !isNaN(var1)){
            _result=_result+var1;
            return _result;
        }
        if(isNaN(var1) || isNaN(var2)){
            throw('Error: Invalid number');
        };
        _result=var1+var2;
        return _result;
    };
    this.subtract=function(var1, var2){
        if(var2==undefined && !isNaN(var1)){
            if(_result < var1){
                throw('Error: The number should be smaller than the result');
            };
            _result=_result-var1;
            return _result;
        }
        if(isNaN(var1) || isNaN(var2)){
            throw('Error: Invalid number');
        };
        if(var1 < var2){
            throw('Error: The first number should be bigger than the second');
        };
        _result=var1-var2;
        return _result;
    };
    this.multiple=function(var1, var2){
        if(var2==undefined && !isNaN(var1)){
            _result=_result*var1;
            return _result;
        }
        if(isNaN(var1) || isNaN(var2)){
            throw('Error: Invalid number');
        };
        _result=var1*var2;
        return _result;
    };
    this.divide=function(var1, var2){
        if(var2==undefined && !isNaN(var1)){
            if(var1==0){
                throw('Error: Cannot divide by zero');
            };
            _result=_result/var1;
            return _result;
        }
        if(isNaN(var1) || isNaN(var2)){
            throw('Error: Invalid number');
        };
        if(var2==0){
            throw('Error: Cannot divide by zero');
        };
        _result=var1/var2;
        return _result;
    };
};