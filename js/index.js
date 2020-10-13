$(document).ready(function() {

    getMusicLibrary();

});

function getMusicLibrary() {
    // let $data = $('#music-library');
    let musicInfo = "";
    $.ajax({
        url: 'http://www.devcodecampmusiclibrary.com/api/music',
        dataType: 'json',
        type: 'get',
        success: function(data, textStatus, jqXHR) {
            $.each(data, function(i, list) {
                musicInfo += '<tr>';
                musicInfo += '<td>' + list.title + '</td>';
                musicInfo += '<td>' + list.album + '</td>';
                musicInfo += '<td> ' + list.artist + '</td>';
                musicInfo += '<td>' + list.genre + ' </td>';
                musicInfo += '<td>' + list.releaseDate + '</td>';
                musicInfo += '</tr>';
            });
            $('#music-library').append(musicInfo);
        },
        error: function(errorThrown) {
            console.log(errorThrown);
        }
    });
}