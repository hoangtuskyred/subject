$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    // Add film
    $('#btnAddFilm').click(function () {
        var data = {
            name: $('#inputName').val(),
            categories: $('#inputCategories').val(),
            poster: $('#inputPoster').val(),
            thumbnail: $('#inputThumbnail').val(),
            year: $('#inputYear').val(),
            duration: $('#inputDuration').val(),
            description: $('#inputDescription').val()
        };

        $.ajax({
            url: '/films',
            method: 'POST',
            data: data
        }).done(function (res) {
            location.href = '/admin/films?message=Add film success!';
        }).fail(function (err) {
            console.log(err);
            toastr.error(err.responseJSON.message);
        })
    });

    // Edit film modal
    $('.btnEdit').click(function () {
        $('#inputEditCategories option:selected').removeAttr('selected');
        var modal = $('#editFilmModal');
        var id = $(this).attr('data-id');
        modal.find('#btnEditFilm').attr('data-id', id);

        toastr.warning('Loading data...');

        $.ajax({
            url: '/films/' + id,
            method: 'GET'
        }).done(function (res) {
            modal.find('.modal-title').text(res.name);
            modal.find('#inputEditName').val(res.name);
            modal.find('#inputEditPoster').val(res.poster);
            modal.find('#inputEditThumbnail').val(res.thumbnail);
            modal.find('#inputEditYear').val(res.year);
            modal.find('#inputEditDuration').val(res.duration);
            modal.find('#inputEditDescription').text(res.description);

            $.each(res.categories, function(key, value) {
                $('#inputEditCategories').find('option').each(function() {
                    if ($(this).val() == value.id) {
                        $(this).attr('selected', 'selected');
                        return false;
                    }
                });
            });

            $('.selectpicker').selectpicker('refresh');

            modal.modal('show');
            toastr.remove();
            toastr.success('Load data success! Start editing...', res.name);
        }).fail(function (err) {
            console.log(err);
            toastr.error(err.responseJSON.message);
        })
    });

    // Edit film
    $('#btnEditFilm').click(function () {
        toastr.warning('Save change...');
        var id = $(this).attr('data-id');
        var data = {
            name: $('#inputEditName').val(),
            categories: $('#inputEditCategories').val(),
            poster: $('#inputEditPoster').val(),
            thumbnail: $('#inputEditThumbnail').val(),
            year: $('#inputEditYear').val(),
            duration: $('#inputEditDuration').val(),
            description: $('#inputEditDescription').val()
        };

        $.ajax({
            url: '/films/' + id + '/edit',
            method: 'PUT',
            data: data
        }).done(function (res) {
            location.href = '/admin/films?message=Saved change!';
        }).fail(function (err) {
            console.log(err);
            toastr.error(err.responseJSON.message);
        })
    });

    // Delete film
    $('.btnDelete').click(function () {
        var c = confirm('Do you want to delete this film?');
        if (c) {
            var id = $(this).attr('data-id');
            toastr.warning('Deleting this film...');
            $.ajax({
                url: '/films/' + id,
                method: 'DELETE'
            }).done(function (res) {
                location.href = '/admin/films?message=Deleted film!';
            }).fail(function (err) {
                console.log(err);
                toastr.error(err.responseJSON.message);
            })
        }
    });

    // Add episode modal
    $('.btnAddEpisode').click(function () {
        var modal = $('#addEpisodeModal');
        var idFilm = $(this).attr('data-id');
        modal.find('#btnSaveEpisode').attr('data-id', idFilm);
        toastr.warning('Loading data...');

        $.ajax({
            url: '/films/' + idFilm + '/episodes',
            method: 'GET'
        }).done(function (res) {
            modal.find('.modal-title').text(res.name);
            modal.find('#listEpisode').text('There have been ' + res.episodes.length + ' episodes');
            modal.find('#inputEpisodeName').val(res.episodes.length + 1);
            modal.modal('show');
            toastr.remove();
            toastr.success('Load data success! Start editing...', res.name);
        }).fail(function (err) {
            console.log(err);
            toastr.error(err.responseJSON.message);
        });
    });

    // Add episode
    $('#btnSaveEpisode').click(function () {
        toastr.warning('Save change...');
        var idFilm = $(this).attr('data-id');
        var data = {
            name: $('#inputEpisodeName').val(),
            url: $('#inputEpisodeUrl').val()
        };

        $.ajax({
            url: '/films/' + idFilm + '/episodes',
            method: 'POST',
            data: data
        }).done(function (res) {
            $('#addEpisodeModal').modal('hide');
            toastr.remove();
            toastr.success('Add success!');
        }).fail(function (err) {
            console.log(err);
            toastr.error(err.responseJSON.message);
        })
    })
});
