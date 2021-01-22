/** Link: https://github.com/foysalmia/third-assignment */



/** kilometer to meter convert */
function kilometerToMeter(value) {
    if (value >= 0) {
        var km = value * 1000;
    }
    else (value < 0); {
        console.log("Distance never be negative.");
    }
    return km;
}


/** Budget Calculator */
function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var totalCost = watchPrice + mobilePrice + laptopPrice;
    return totalCost
}


/** Hotel Cost */
function hotelCost(days) {
    if (days <= 10) {
        var noDiscount = days * 100;
        return noDiscount;
    }
    else if (days >= 21) {
        var firstDiscount = days * 50;
        return firstDiscount;
    }
    else (11 <= days <= 20); {
        var secondDiscount = days * 80;
        return secondDiscount;
    }
}


/** Mega Friend */
function megaFriend(names) {
    var largestName = names[0];
    for (var i = 0; i < names.length; i++) {
        var bigName = names[i];
        if (bigName.length > largestName.length) {
            largestName = bigName;
        }
    }
    return largestName;
}