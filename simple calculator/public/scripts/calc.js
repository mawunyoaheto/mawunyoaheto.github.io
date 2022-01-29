// $(document).ready(() => {
//     let base_url = 'http://localhost:5300/';
//     $('#loader').hide();
//     $("form").on('submit', (e) => {
//         var data = $("#transInfo :input").serializeArray();
//         console.log(data);
//         e.preventDefault();

//         // alert('submitted');
//         let operation = $("#operation").find(":selected").val();
//         let url = base_url + operation;
//         console.log(url);
//         transact(url, data);
//     });
// });

// function transact(url, info) {
//     $.post(url, info).done((data) => {
//         console.log('JQUERY RESPONSE', data);
//          window.location = data.redirect;
//     }).fail(() => {
//         alert('request failed');
//     });
// }
