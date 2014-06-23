/**
 * flex-text.js v1.0
 * Patrick Fisher
 * patrick@pwfisher.com
 * MIT License © 2014
 *
 * Usage:
 *  <p class="flex-text em-20">This text will scale to a width of 20em.</p>
 *  <p class="flex-text em-15 min-12">Width 15em and minimum font size 12px.</p>
 *  <p class="flex-text em-15 min-30 max-60">Width 15em between 30px and 60px.</p>
 */
 var reEm = /em-(\d+)/,
    reMin = /min-(\d+)/,
    reMax = /max-(\d+)/;

$(window).on('resize orientationchange', function () {
  window.requestAnimationFrame(function() {
    $('.flex-text').each(function () {

      var node = $(this),
          klass = node.attr('class'),
          em = reEm.exec(klass),
          min = reMin.exec(klass),
          max = reMax.exec(klass),
          size;

      if (!em) return;

      size = (node.width() / em[1]);
      if (min) size = Math.max(min[1], size);
      if (max) size = Math.min(max[1], size);

      node.css('fontSize', size + 'px');
    });
  });
});
