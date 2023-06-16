

function calculateTip(event) {
     event.preventDefault();
    let bill = document.getElementById('bill').value;
    let tip = document.getElementById('tip-btn').value;
    let numPeople = document.getElementById('people').value;

    if(bill == '' | tip == 0){
        alert("Preencha os valores")
        return;
    }

    if(numPeople == "" | tip <= 1){
        numPeople = 1;
        document.getElementById('each').style.display = "none"
    } else {
        document.getElementById('each').style.display = "block"
    }

    let total = (bill * tip) / numPeople;
    total = total.toFixed(2);



}