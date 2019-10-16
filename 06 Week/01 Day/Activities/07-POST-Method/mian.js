$(document).ready(() => {
    $("#test").on('submit', function() {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: 'http:/localhost:9000',
            data: 'hello world',
            success: function () {
                console.log('jobs done')
            },
            dataType: 'text'
          });
    })
})