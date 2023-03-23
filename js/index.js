function Countbmi() {
    // Get the value of the input field with id="numb"
    var height = document.getElementById("height").value/100;
    var weight = document.getElementById("weight").value;
    // Count the BMI using the formula BMI = weight / (height * height)
    var bmi = weight / (height * height);
    // Display the result in the element with id="result"
    document.getElementById("result").innerHTML = bmi.toFixed(1);
    // Display a different suggestion based on the BMI result
    if (bmi < 18.5) {
        document.getElementById("type-bmi").innerHTML = "Kekurangan Berat Badan";
        document.getElementById("explain-bmi").innerHTML = "Anda memiliki berat badan yang kurang";
        document.getElementById("suggestion-bmi").innerHTML = "Hasil BMI kurang dari 18.5 <br>Anda berada dalam kategori kekurangan berat badan.<br> Pada kategori ini Anda disarankan untuk menambah jumlah asupan harian seperti kalori dan protein guna menaikkan berat badan ke batas normal.";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById("type-bmi").innerHTML = "Ideal";
        document.getElementById("explain-bmi").innerHTML = "Anda memiliki berat badan yang ideal";
        document.getElementById("suggestion-bmi").innerHTML = "Hasil BMI diantara 18.5-24.9<br> Anda berada dalam kategori berat badan normal.<br>Pertahankan pola makan Anda dan tetap rutin berolahraga untuk menjaga tubuh agar selalu ideal.";

    }
    else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById("type-bmi").innerHTML = "Kelebihan Berat Badan";
        document.getElementById("explain-bmi").innerHTML = "Anda memiliki berat badan berlebih";
        document.getElementById("suggestion-bmi").innerHTML = "Hasil BMI diantara 25.0-29.9<br>Anda berada dalam kategori berat badan berlebih<br>Turunkan berat badan Anda ke batas normal dengan cara mengatur asupan kalori harian Anda dan mulai rutin berolahraga.";

    }
    else if (bmi >= 30) {
        document.getElementById("type-bmi").innerHTML = "Obesitas";
        document.getElementById("explain-bmi").innerHTML = "Anda memiliki berat badan yang sangat berlebih";
        document.getElementById("suggestion-bmi").innerHTML = "Hasil BMI lebih dari 30.0<br>Anda berada dalam kategori Obesitas<br>Anda sangat disarankan untuk mulai menurunkan berat badan hingga ke batas normal untuk menghindari resiko Obesitas<br>Cara terbaik untuk menurunkan berat badan adalah dengan mengatur asupan kalori harian dan rutin berolahraga.";

    }}
    



