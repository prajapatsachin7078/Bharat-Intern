const convert = () =>{
    const deg = document.getElementById('degree').value;
    if(deg== null || deg == ''){
        alert("Enter temperature");
        return;
    } 
    const type = document.getElementById('selection').value;
    const result1 = document.getElementById('output1');
    const result2 = document.getElementById('output2');

    if(type == 'Fahrenhiet'){
        const cel = Number(deg-32) / 1.8;
        result1.value = `${cel.toFixed(3)} C`;
        // alert(cel+ ' C');
        const kel = (deg-32)/1.8 +273.15;
        result2.value = `${kel.toFixed(3)} k`;


    }else if(type == 'Celsius'){
        const kel = Number(deg) + 273.15;
        // alert(kel +' k');
        result1.value = `${kel.toFixed(3)} K`;

        const fah = deg*1.8 +32;
        // alert(fah +' F');
        result2.value = `${fah.toFixed(3)} F`
    }else if(type == 'Kelvin'){
        const cel = deg-273.15;
        // alert(cel +' C');
        result1.value = `${cel.toFixed(3)} C`;

        const fah = ((deg-273.15) *1.8) +32;
        // alert(fah + ' F');
        result2.value = `${fah.toFixed(3)} F`;
    }else{
        alert("Enter type Scele")
    }
}

// clear function 
const clear = ()=>{
    document.getElementById('degree').innerText = " ";
}