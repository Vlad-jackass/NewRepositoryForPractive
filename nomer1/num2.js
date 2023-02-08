let array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            let one = arr[i].toLowerCase().split("").sort().join("");
            let two = arr[j].toLowerCase().split("").sort().join("");
            if (one == two) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}
aclean(array)
console.log(array)