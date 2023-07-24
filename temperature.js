 calculateTemp = () => {
    const numberTemp = document.getElementById('tempo').value;
    const tempselected = document.getElementById('temp_dif');
    const valueTemp = temp_dif.options[tempselected.selectedIndex].value;

    const celTofah = (cel) => {
        let fahrenhiet = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenhiet;
    }
   
    const fahTocel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if(valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celTofah(numberTemp) +  "&#176; Fahrenhiet";
    }  
    else{
        document.getElementById("result").innerHTML = fahTocel(numberTemp) + "&#176; Celsius";
        }
}