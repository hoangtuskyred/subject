$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    // Add category
    $('#btnAddCategory').click(function () {
        var data = {
            name: $('#inputName').val()
        };

        $.ajax({
            url: '/categories',
            method: 'POST',
            data: data
        }).done(function (res) {
            location.href = '/admin/categories?message=Add film success!';
        }).fail(function (err) {
            console.log(err);
            toastr.error(err.responseJSON.message);
        })
    });

    // Edit category modal
    $('.btnEdit').click(function () {
        var modal = $('#editCategoryModal');
        var id = $(this).attr('data-id');
        modal.find('#btnEditCategory').attr('data-id', id);

        toastr.warning('Loading data...');

        $.ajax({
            url: '/categories/' + id,
            method: 'GET'
        }).done(function (res) {
            modal.find('.modal-title').text(res.name);
            modal.find('#inputEditName').val(res.name);

            modal.modal('show');
            toastr.remove();
            toastr.success('Load data success! Start editing...', res.name);
        }).fail(function (err) {
            console.log(err);
            toastr.error(err.responseJSON.message);
        })
    });

    // Edit category
    $('#btnEditCategory').click(function () {
        toastr.warning('Save change...');
        var id = $(this).attr('data-id');
        var data = {
            name: $('#inputEditName').val()
        };

        $.ajax({
            url: '/categories/' + id + '/edit',
            method: 'PUT',
            data: data
        }).done(function (res) {
            location.href = '/admin/categories?message=Saved change!';
        }).fail(function (err) {
            console.log(err);
            toastr.error(err.responseJSON.message);
        })
    });

    // Delete category
    $('.btnDelete').click(function () {
        var c = confirm('Do you want to delete this category?');
        if (c) {
            var id = $(this).attr('data-id');
            toastr.warning('Deleting this category...');
            $.ajax({
                url: '/categories/' + id,
                method: 'DELETE'
            }).done(function (res) {
                location.href = '/admin/categories?message=Deleted category!';
            }).fail(function (err) {
                console.log(err);
                toastr.error(err.responseJSON.message);
            })
        }
    });
})
