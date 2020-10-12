$(document).ready(function() {
    // $("td").append(data[0].title)
});

function getMusiclibrary() {
    $.ajax({
        url: 'http://www.devcodecampmusiclibrary.com/api/music',
        dataType: 'json',
        type: 'get',
        success: function(data, textStatus, jqXHR) {
            $("td").append(" hello");
        },
        error: function(errorThrown) {
            console.log(errorThrown);
        }
    })
}

getMusiclibrary();