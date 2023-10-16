function getValues() {

    let phrase = document.getElementById('userInput').value;

    if (phrase.length == 0) {
        Swal.fire ({
            icon: 'error',
            backdrop: false,
            title: 'Oops!',
            text: 'Please enter a string to reverse'
    });
    } else {
        let palindrome = checkForPalindrome(phrase);
        displayResults(palindrome);
    }

}

function checkForPalindrome(phrase) { 
    let space = phrase ;
    let noSpace = space.replaceAll('\\s','') ;
    
    

    return space;

}

function displayResults (palindrome) {
    document.getElementById('palindrome').textContent = `Your Phrase is a palindrome: ${palindrome}`;
    document.getElementById('alert').classList.remove('invisible');

}