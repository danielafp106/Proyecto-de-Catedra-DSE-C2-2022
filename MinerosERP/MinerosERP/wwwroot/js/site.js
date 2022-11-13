﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(function () {
    var PlaceHolderElement = $('#ContenedorModal');
    $('button[data-toggle="ajax-modal"]').click(function (event) {
        var url = $(this).data('url');
        var decodedurl = decodeURIComponent
        $.get(url).done(function (data) {
            PlaceHolderElement.html(data);
            PlaceHolderElement.find('.modal').modal('show');
        })
    })

    PlaceHolderElement.on('click', '[data-save="modal"]', function (event){
        var form = $(this).parents('.modal').find('form');
        var actionUrl = form.attr('action');
        var index = $(this).data('index');
        var disabled = form.find(':input:disabled').removeAttr('disabled');
        var sendData = form.serialize();
        disabled.attr('disabled','disabled');
        $.post(actionUrl, sendData).done(function (data){
            PlaceHolderElement.find('.modal').modal('hide');
            top.location.href = index;
        })
    })
})

$(function () {
    var PlaceHolderElement = $('#ContenedorModal2');
    $('button[data-toggle="ajax-modal-h"]').click(function (event) {
        var id;
        var url;
        if ($(this).attr("asp-route-id")) {
            id = $(this).attr("asp-route-id");
            console.log(id);
            url = $(this).data('url') + "/" + id;
            url = url.replace('\'', '');
            url = url.replace(')', '');
            console.log(url);
        }
        else {
            url = $(this).data('url');
        }

        var decodedurl = decodeURIComponent
        $.get(url).done(function (data) {
            PlaceHolderElement.html(data);
            PlaceHolderElement.find('.modal').modal('show');
        })
    })

    PlaceHolderElement.on('click', '[data-save="modal"]', function (event) {
        var form = $(this).parents('.modal').find('form');
        var actionUrl = form.attr('action');
        var index = $(this).data('index');
        var disabled = form.find(':input:disabled').removeAttr('disabled');
        var sendData = form.serialize();
        disabled.attr('disabled', 'disabled');
        $.post(actionUrl, sendData).done(function (data) {
            PlaceHolderElement.find('.modal').modal('hide');
            top.location.href = index;
        })
    })
})
