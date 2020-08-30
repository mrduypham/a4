/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
const maxPages = 100;
let pageCount = 0;

function snipMe() {
  pageCount++;
  if (pageCount > maxPages) {
    return;
  }
  let long = $(this)[0].scrollHeight - Math.ceil($(this).innerHeight());
  const children = $(this).children().toArray();
  const removed = [];
  while (long > 0 && children.length > 0) {
    const child = children.pop();
    $(child).detach();
    removed.unshift(child);
    long = $(this)[0].scrollHeight - Math.ceil($(this).innerHeight());
  }
  if (removed.length > 0) {
    const a4 = $('<div class="a4"></div>');
    a4.append(removed);
    $(this).after(a4);
    snipMe.call(a4[0]);
  }
}

$(document).ready(function () {
  $('.a4').each(function () {
    snipMe.call(this);
  });
});
