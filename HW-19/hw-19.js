
function letterIndex(letter)
{
    return letter.charCodeAt() - 'a'.charCodeAt();
}

function isItAnagr(Word1, Word2){
    if(Word1.length!=Word2.length)
        return false;
    let ar=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let arW1=Array.from(Word1.toLowerCase());
    let arW2=Array.from(Word2.toLowerCase());
    for( i=0; i<arW1.length; i++){
        let index=letterIndex(arW1[i]);
        ar[index]++;
    }

    for (i=0; i< arW2.length; i++){
        let index=letterIndex(arW2[i]);
        if (ar[index] == 0)
            return false;
        ar[index]--;
    }

    return true;
}

console.log(isItAnagr("abccc", "cccba"));
console.log(isItAnagr("aadc", "aacb"));
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function isAnagram(word, anagram) {
    //TODO 
    //returns true if a given anagram is indeed an angram of a given word
    //anagram must have  same length as word
    //anagram must have all letters from word
    //hello anagram examples: elolh, olleh, ohell, lehol
    //exampls non-anagrams: eloll (no h), ollehh(different length),
    // olaeh ("a" doesn't exist in word), oleh(different length)
    let res = false;
    if (word.length === anagram.length) {
        const letters = Array.from(word);
    const lettersOccurrences = getStringsOccurrences(letters);
    const anagramLetters = Array.from(anagram);
   res = anagramLetters.every(letter => {
        let res = false;
        if (lettersOccurrences[letter]) {
            res = true;
            lettersOccurrences[letter]--;
            if(lettersOccurrences[letter] == 0) {
                delete lettersOccurrences[letter];
            }
        }
        return res;
    })
    }
    return res;

}
console.log(isAnagram("abccc", "cccba"));
console.log(isAnagram("aadc", "aacb"));

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function getStringsOccurrences(strings) {
    const res = {};
    strings.forEach(str => {
        if(!res[str]) {
            res[str] = 1;
        } else {
            res[str]++;
        }
    });
    return res;
}
function stringComp(entry1, entry2) {
    let res = entry2[1] - entry1[1];
    if (res == 0){
        res = entry1[0] < entry2[0] ? -1 : 1
    }
    return res;
}

function createEmployee(id, name, birthYear, salary, city, country) {
    return {id, name, birthYear, salary, address: {city, country}}
}
const employees = [
    createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Tel Aviv", "Israel"),
    createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Gorgia"),
    createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130, "Victor", 2003, 10000, "Arad", "Israel")]

    function getMostPopulatedCountry(employees) {
       
    
        //returns country with most amount of employees
        const countries = getCountriesSortedByOccurrences(employees);
        return countries[0];
    }
    function getMostPupulatedCountries(employees, counter) {
        //returns a given number (conter) of countries with most amount of employees
        const countries = getCountriesSortedByOccurrences(employees);
        return countries.slice(0, counter);
    
    }
    function getCountriesSortedByOccurrences(employees) {
        const countries = employees.map(e => e.address.country);
        const countriesOccurrences = getStringsOccurrences(countries);
        const arrayOccurrences = Object.entries(countriesOccurrences);
        arrayOccurrences.sort(stringComp);
        return arrayOccurrences.map(entry => entry[0]);
    
    }
    