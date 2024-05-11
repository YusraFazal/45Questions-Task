var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making a array of countries and print its orginal order
var countriestovisit = ["india", "brazil", "algeria"];
console.log("orginal order:", countriestovisit);
//print the array in alphabetical order without modifying the actual array list
console.log("alphabetical order:", __spreadArray([], countriestovisit, true).sort());
// show that the array is still in its orginal order
console.log("still in orginal order:", countriestovisit);
//print the array in reverse order without modifying the actual array list
console.log("reverse order:", __spreadArray([], countriestovisit, true).reverse());
// show that the array is still in its orginal order
console.log("still in orginal order:", countriestovisit);
// we have changed the orginal array order now
console.log("orginal array reversed:", countriestovisit.reverse());
// print the array to show that its back to its orginal order
console.log("back to orginal order:", countriestovisit.reverse());
//print the array to show that its order has been changed in alphabetical order now
console.log("sorted in alphabetical order:", countriestovisit.sort());
// we have changed the orginal array order now i reverse order again
console.log("orginal array reversed again:", countriestovisit.reverse());
