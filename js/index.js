//-------- code version 1 -------- 
$(document).ready(function() {
    let $data = $('.title');
    $.ajax({
        url: 'http://www.devcodecampmusiclibrary.com/api/music',
        dataType: 'json',
        type: 'get',
        success: function(data, textStatus, jqXHR) {
            $.each(data, function(i, list) {
                $data.append('<td>' + list.title + '</td>')
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

//-------- code version 2 -------- 
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

//-------- code version 3 -------- 
// $(document).ready(function() {

//     $.ajax({
//         url: 'http://www.devcodecampmusiclibrary.com/api/music',
//         dataType: 'json',
//         type: 'get',
//         success: function(data, textStatus, jqXHR) {
//             $.each(data, function(i, list) {
//                 $('.title').append('<td>' + list.title + '</td>')
//             });
//         },
//         error: function(errorThrown) {
//             console.log(errorThrown);
//         }
//     });
// });

// $(document).ready(function() {

//     $.ajax({
//         url: 'http://www.devcodecampmusiclibrary.com/api/music',
//         dataType: 'json',
//         type: 'get',
//         success: function(data, textStatus, jqXHR) {
//             $.each(data, function(i, list) {
//                 $('.album').append('<td>' + list.album + '</td>')
//             });
//         },
//         error: function(errorThrown) {
//             console.log(errorThrown);
//         }
//     });
// });

// $(document).ready(function() {

//     $.ajax({
//         url: 'http://www.devcodecampmusiclibrary.com/api/music',
//         dataType: 'json',
//         type: 'get',
//         success: function(data, textStatus, jqXHR) {
//             $.each(data, function(i, list) {
//                 $('.artist').append('<td>' + list.artist + '</td>');
//                 $('.artist').css('border-right-color', 'pink');
//             });
//         },
//         error: function(errorThrown) {
//             console.log(errorThrown);
//         }
//     });
// });

// $(document).ready(function() {

//     $.ajax({
//         url: 'http://www.devcodecampmusiclibrary.com/api/music',
//         dataType: 'json',
//         type: 'get',
//         success: function(data, textStatus, jqXHR) {
//             $.each(data, function(i, list) {
//                 $('.genre').append('<td>' + list.genre + '</td>')
//             });
//         },
//         error: function(errorThrown) {
//             console.log(errorThrown);
//         }
//     });
// });

// $(document).ready(function() {

//     $.ajax({
//         url: 'http://www.devcodecampmusiclibrary.com/api/music',
//         dataType: 'json',
//         type: 'get',
//         success: function(data, textStatus, jqXHR) {
//             $.each(data, function(i, list) {
//                 $('.release').append('<td>' + list.releaseDate + '</td>');
//             });
//         },
//         error: function(errorThrown) {
//             console.log(errorThrown);
//         }
//     });
// });


//-------- code version 4 -------- 
// $(function() {
//     $('td').append(getTitle());
//     $('td').append(getAlbum());
// });

// function getTitle() {
//     $.ajax({
//         url: 'http://www.devcodecampmusiclibrary.com/api/music',
//         dataType: 'json',
//         type: 'get',
//         success: function(data, textStatus, jqXHR) {
//             $.each(data, function(i, list) {
//                 $('.title').append('<td>' + list.title + '</td>')
//             });
//         },
//         error: function(errorThrown) {
//             console.log(errorThrown);
//         }
//     });
// };

// function getAlbum() {
//     $.ajax({
//         url: 'http://www.devcodecampmusiclibrary.com/api/music',
//         dataType: 'json',
//         type: 'get',
//         success: function(data, textStatus, jqXHR) {
//             $.each(data, function(i, list) {
//                 $('.album').append('<td>' + list.album + '</td>');
//                 $('.album').css('color', 'pink');
//             });
//         },
//         error: function(errorThrown) {
//             console.log(errorThrown);
//         }
//     });
// };