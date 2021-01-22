// first function

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "pleace input correct value";
    }

    var output = kilometer * 1000;
    var result = output;
    return result;
}
    //check for positive value
    var meter = kilometerToMeter(20);
    //console.log(meter);
    //check for negative value.
    var meter = kilometerToMeter(-20);
    //console.log(meter);

                  //second function

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalAmount = watchPrice + phonePrice + laptopPrice;
    return totalAmount;
}

var totalCost = budgetCalculator(6, 8, 3);
//console.log(totalCost);

//Theird function

function hotelCost(days) {
    var totalDayCost = 0;
    if (days < 0) {
        return "pleace input correct value";
    }
    else if (days <= 10) {
        totalDayCost = days * 100;
    }
    else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var remaining = days - 10;
        var afterTenDays = remaining * 80;
        totalDayCost = firstTenDays + afterTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var afterTenDays = 10 * 80;
        var remaining = days - 20;
        var afterTwentyDays = remaining * 50;
        totalDayCost = firstTenDays + afterTenDays + afterTwentyDays;
    }
    return totalDayCost;
}
     //var result = hotelCost(30);
     //console.log(result);

            //Fourth Function

    function megaFriend(biggerName) {
        var bigName = '';
        for (var i = 0; i < biggerName.length; i++) {
            if (bigName.length < biggerName[i].length) {
                bigName = biggerName[i];
            }
        }
        return bigName;
    }
    
    var getMegaFriend = megaFriend([ 'Kalu','Abraham','Likon', 'Rahakal Gupta', 'Chandan Das'   ]);
    
    //console.log(getMegaFriend);
    
    