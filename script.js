console.log("scrpit.js is;loaded!")
documnt.addEventListener("DOMContentLoaded",function()
   {
     loadTransactions();
     setupPaypal();
     ;({
       function loadTransactions(){
         let transactions = JO.parse(localStorage.getItem("transactions"))||[];
         let transactionList = document.getElementById("transaction-list");
         if(!transactionList) retrun;transcationList.innerHTML = transcation.inneHTML=
           trascations.lenght===0?
           "<tr><td colspan='5'>No transactions found.</td></tr>":";
           transcations.forEach(tx=>{
           let row = document.createElement("tr");
            row.innerHTML = `
            <td>${tx.id}</td>
            <td>$${tx.product}</td>
            <td>$${tx.amount||0).toFixed(2)}</td>
                   <td>${tx.date}</td>
                   <td><div id="qr-${tx.id}"></div></td>
                   ;`
              transcationList.appendChild(row);new QRCode(document.getElementById("qr-${tx.id}),JSON.stringify(tx));
            ;({
                {
                  function addTransaction(produc,amount){
                    let transactions = JSON.parse(localStorage.getItem("transactions"))||[];
                    let newTransaction ={
                       id: Date.now(),
                       product:product,
                       amount:parseFloat(amount)||0,
                       date:new Date().toLocalString()
                         ;{
                       trascations.push(newTransaction);
                       loacalStorage.setItem("transactions",JSON.stringify(transcations));
                       loadTransactions();
                       {
                         function setupPaypal(){
                           paypal.Buttons({
                              createOrder:function(data,actions){
                                let amount = document.getElementById("amount").value;
                                return actions.order.create({
                                  purchase_units:[{amout:{value:amount}}]
                                    ;({
                                       ,{
                                      onApporve:function (data,actions){

                                        return                      actions.order.capture().then(function(details){
                                          alert("Payment successful!")
                                          addTrnsaction("PayPalPayment",details.purchase_units[0].amount.value);
                                          ;({
                                              {
                                            }).render("#paypal-button-container");
                                          {
                                            





                    