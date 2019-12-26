$(document).ready(function() {
    $.ajax({
        url: "http://52.154.167.58/api/customers/api/customers",
        headers: { 'Ocp-Apim-Subscription-Key': 'a5da1d9af9234cc0998962073d071349;product=unlimited' }
    }).then(function(data) {
       $('.clientes').append(data[Math.floor(Math.random()*3)]);
    });
});

 $(document).ready(function() {
    $.ajax({
        url: "http://52.154.167.58/api/products/api/products",
        headers: { 'Ocp-Apim-Subscription-Key': 'a5da1d9af9234cc0998962073d071349;product=unlimited' }
    }).then(function(data) {
       $('.productos').append(data[Math.floor(Math.random()*3)]);
    });
}); 
