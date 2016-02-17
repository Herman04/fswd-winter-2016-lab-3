$(function() {
  $('button#add').click(function() {
    // newTodo is what the user typed into the
    // text box
    var newTodo = $('input').val();
    var newListElement = $('<li>');
    newListElement.text(" " + newTodo);

    var newItemCheckbox = $('<input>');
    newItemCheckbox.attr('type', 'checkbox');

    // //newItemCheckbox.attr('input', 'checkbox');
    // //instead of line 10 above will produce a
    // //with comment boxes on the side which the user
    // can write something in there like I did this
    // already

    newListElement.prepend(newItemCheckbox);

    $("ul").append(newListElement);
    $('input').val("");
  });
});
