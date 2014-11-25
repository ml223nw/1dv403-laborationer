"use strict";

var makePerson = function(persArr)
{

    var ageResult = 0;
    var names;
    var sortedNames;
    var name = [];
    var age = [];
    var maxAge;
    var minAge;
    var averageAge;
    var i;
    var result;
    
    
    for (i = 0; i < persArr.length; i += 1)
    {
        name[i] = persArr[i].name;
        age[i] = persArr[i].age;
    }
    
    for (i = 0; i < age.length; i += 1)
    {
        ageResult += age[i];
    }
    
    averageAge = ageResult / age.length;
    maxAge = Math.max.apply(Math, age);
    minAge = Math.min.apply(Math, age);
    
    name.sort(function(a, b) 
    {
        return a.localeCompare(b);
    });
    
    names = name.join(", "); 
    sortedNames = names.toString(); 
          
    result =
        {
            maxAge : maxAge,
            minAge : minAge,
            names : sortedNames,
            averageAge : Math.round(averageAge),
        };
        
        return result;
};
