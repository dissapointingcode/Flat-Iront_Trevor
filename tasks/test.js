//functions are called very similiar to variables or attributes to an object.
//when listing attributes ex:
var ThisIsAnObject = {
	firstAttribute: "a primitive value (of which string is one in java script)",
	secondAttribute: 1247, //an int value can also be used
	MethodAttributeDisplay: function() { //function() is a key word funcgtion to make a function
	    return this.firstAttribute + "and heres the second thing" + this.secondAttribute;
    }
};