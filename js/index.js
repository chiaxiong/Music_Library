$(document).ready(function() {
    let $data = $('.title');
    $.ajax({
        url: 'http://www.devcodecampmusiclibrary.com/api/music',
        dataType: 'json',
        type: 'get',
        success: function(data, textStatus, jqXHR) {
            $.each(data, function(i, list) {
                $data.append('<td>Title: ' + list.title + ' </td>')
            });
        },
        error: function(errorThrown) {
            console.log(errorThrown);
        }
    });
});

$(document).ready(function() {
    let $data = $('.album');
    $.ajax({
        url: 'http://www.devcodecampmusiclibrary.com/api/music',
        dataType: 'json',
        type: 'get',
        success: function(data, textStatus, jqXHR) {
            $.each(data, function(i, list) {
                $data.append('<td>Album: ' + list.album + ' </td>')
            });
        },
        error: function(errorThrown) {
            console.log(errorThrown);
        }
    });
});

$(document).ready(function() {
    let $data = $('.artist');
    $.ajax({
        url: 'http://www.devcodecampmusiclibrary.com/api/music',
        dataType: 'json',
        type: 'get',
        success: function(data, textStatus, jqXHR) {
            $.each(data, function(i, list) {
                $data.append('<td>Artist: ' + list.artist + ' </td>')
            });
        },
        error: function(errorThrown) {
            console.log(errorThrown);
        }
    });
});

$(document).ready(function() {
    let $data = $('.genre');
    $.ajax({
        url: 'http://www.devcodecampmusiclibrary.com/api/music',
        dataType: 'json',
        type: 'get',
        success: function(data, textStatus, jqXHR) {
            $.each(data, function(i, list) {
                $data.append('<td>Genre: ' + list.genre + ' </td>')
            });
        },
        error: function(errorThrown) {
            console.log(errorThrown);
        }
    });
});

$(document).ready(function() {
    let $data = $('.release');
    $.ajax({
        url: 'http://www.devcodecampmusiclibrary.com/api/music',
        dataType: 'json',
        type: 'get',
        success: function(data, textStatus, jqXHR) {
            $.each(data, function(i, list) {
                $data.append('<td>Release Date: ' + list.releaseDate + ' </td>');
            });
        },
        error: function(errorThrown) {
            console.log(errorThrown);
        }
    });
});


// $(document).ready(function() {

//     getMusicLibrary();

// });

// function getMusicLibrary() {
//     let $data = $('#music-library');
//     $.ajax({
//         url: 'http://www.devcodecampmusiclibrary.com/api/music',
//         dataType: 'json',
//         type: 'get',
//         success: function(data, textStatus, jqXHR) {
//             $.each(data, function(i, list) {
//                 $data.append('<tr><td>Title: ' + list.title + ' </tr></td>');
//                 $data.append('<tr><td>Album: ' + list.album + ' </tr></td>');
//                 $data.append('<tr><td>Artist: ' + list.artist + ' </tr></td>');
//                 $data.append('<tr><td>Genre: ' + list.genre + ' </tr></td>');
//                 $data.append('<tr><td>Release Date: ' + list.release + ' </tr></td>');
//             });

//         },
//         error: function(errorThrown) {
//             console.log(errorThrown);
//         }
//     });
// }