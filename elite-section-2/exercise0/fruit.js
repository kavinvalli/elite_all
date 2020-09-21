var fruits = ['kiwi', 'pear', 'kiwi', 'banana', 'melon', 'banana', 'melon', 'pineapple', 'apple', 'pineapple', 'cucumber', 'pineapple', 'cucumber', 'orange', 'grape', 'orange', 'grape', 'apple', 'grape', 'cherry', 'pear', 'cherry', 'pear', 'kiwi', 'banana', 'kiwi', 'apple', 'melon', 'banana', 'melon', 'pineapple', 'melon', 'pineapple', 'cucumber', 'orange', 'apple', 'orange', 'grape', 'orange', 'grape', 'cherry', 'pear', 'cherry', 'pear', 'apple', 'pear', 'kiwi', 'banana', 'kiwi', 'banana', 'melon', 'pineapple', 'melon', 'apple', 'cucumber', 'pineapple', 'cucumber', 'orange', 'cucumber', 'orange', 'grape', 'cherry', 'apple', 'cherry', 'pear', 'cherry', 'pear', 'kiwi', 'pear', 'kiwi', 'banana', 'apple', 'banana', 'melon', 'pineapple', 'melon', 'pineapple', 'cucumber', 'pineapple', 'cucumber', 'apple', 'grape', 'orange', 'grape', 'cherry', 'grape', 'cherry', 'pear', 'cherry', 'apple', 'kiwi', 'banana', 'kiwi', 'banana', 'melon', 'banana', 'melon', 'pineapple', 'apple', 'pineapple']

function fruitFormSubmit(e) {
    e.preventDefault();
    number = document.getElementById('fruit-number').value
    if (number < 10 || number > 10000) {
        alert("Please Enter a Number greater than or equal to 10 and lesser than or equal to 10000")
    } else {
        fruitCalculator(number)
    }
    return false;
}

function fruitCalculator(n) {
    if (n < 101) {
        sum = sumDigits(n)
        n -= sum
    } else {
        while (n > 101) {
            sum = sumDigits(n)
            n -= sum
        }
    }
    fruit = fruits[n - 1]
    fruitDiv = document.getElementById('fruit-div')
    fruitDiv.innerHTML = "The Fruit is: " + fruit
}

function sumDigits(n) {
    var sum = 0;
    while (n > 0) {
        const current = n % 10
        sum += current
        n = Math.floor(n / 10)
    }
    console.log(sum)
    return (sum)
}