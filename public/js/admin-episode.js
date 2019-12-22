$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    // Edit episode modal
    $('.btnEdit').click(function () {
        var modal = $('#editEpisodeModal');
        var id = $(this).attr('data-id');
        modal.find('#btnEditEpisode').attr('data-id', id);

        toastr.warning('Loading data...');

        $.ajax({
            url: '/episodes/' + id,
            method: 'GET'
        }).done(function (res) {
            modal.find('.modal-title').text('Edit episode with id ' + res.id);
            modal.find('#inputEditName').val(res.name);
            modal.find('#inputEditUrl').val(res.url);

            modal.modal('show');
            toastr.remove();
            toastr.success('Load data success! Start editing...', res.name);
        }).fail(function (err) {
            console.log(err);
            toastr.error(err.responseJSON.message);
        })
    });

    // Edit episode
    $('#btnEditEpisode').click(function () {
        toastr.warning('Save change...');
        var id = $(this).attr('data-id');
        var data = {
            name: $('#inputEditName').val(),
            url: $('#inputEditUrl').val()
        };

        $.ajax({
            url: '/episodes/' + id + '/edit',
            method: 'PUT',
            data: data
        }).done(function (res) {
            location.href = '/admin/episodes?message=Saved change!';
        }).fail(function (err) {
            console.log(err);
            toastr.error(err.responseJSON.message);
        })
    });

    // Delete episode
    $('.btnDelete').click(function () {
        var c = confirm('Do you want to delete this episode?');
        if (c) {
            var id = $(this).attr('data-id');
            toastr.warning('Deleting this episode...');
            $.ajax({
                url: '/episodes/' + id,
                method: 'DELETE'
            }).done(function (res) {
                location.href = '/admin/episodes?message=Deleted episode!';
            }).fail(function (err) {
                console.log(err);
                toastr.error(err.responseJSON.message);
            })
        }
    });
})
