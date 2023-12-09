function getValues() {

    let phrase = document.getElementById('userInput').value;

    if (phrase.length <= 1) {
        Swal.fire({
            icon: 'error',
            backdrop: false,
            title: 'Oops!',
            text: 'Please enter a minimum of two character'
        });
    } else {
        let palindrome = checkForPalindrome(phrase);
        displayResults(palindrome, phrase);
    }

}

function checkForPalindrome(phrase) {
    let noPun = phrase.replace(/[^a-zA-Z0-9]/g, "");    
    let noCap = noPun.toLowerCase();

    let checked = '';
    for (let i = noCap.length - 1; i >= 0; i--) {
        let reverse = noCap[i];
        checked += reverse;
    } if (checked == '') {
        return '';
    } else if (checked == noCap) {
        return checked;
    } else {
        return 'noPali';
    }
}

function displayResults(palindrome, phrase) {
    if (palindrome == '') {
        document.getElementById('results').innerHTML = `We currently unable to display any punctuation.${palindrome}.`;
        document.getElementById('alert').classList.remove('invisible');
        document.getElementById('alert').classList.add('alert-warning');
        document.getElementById('alert').classList.remove('alert-danger')
        document.getElementById('alert').classList.remove('alert-success');

    } else if (palindrome == 'noPali') {
        document.getElementById('results').innerHTML = `${phrase}is not a palindrome.`;
        document.getElementById('alert').classList.remove('invisible');
        document.getElementById('alert').classList.add('alert-danger');
        document.getElementById('alert').classList.remove('alert-warning')
        document.getElementById('alert').classList.remove('alert-success');

    } else {
        document.getElementById('results').innerHTML = `Your palindrome is:${palindrome}.`;
        document.getElementById('alert').classList.remove('invisible');
        document.getElementById('alert').classList.add('alert-success');
        document.getElementById('alert').classList.remove('alert-danger')
        document.getElementById('alert').classList.remove('alert-warning');
    }
}

/*function checkForPalindrome(input) {
    let checked = '';
  

    for (let l = 0, r = input.length - 1; l < input .length, r >= 0; l++, r--) {
        let left = input[l];
        let Right = input[r];

        if (left !== Right) {
            return false
        } else {
            checked += Right;
        }
    }
    return checked; 
    
} */