jQuery(document).ready(function() {
  jQuery("#video a.fb").each(function() {
    jQuery(this).fancybox({
      titleShow: !1,
      overlayOpacity: "0.8",
      href : this.href.replace(new RegExp('youtu.be', 'i'), 'www.youtube.com/embed').replace(new RegExp('watch\\?v=([a-z0-9\_\-]+)(&|\\?)?(.*)', 'i'), 'embed/$1?version=3&$3'),
      type: "iframe"
    })
  }), jQuery("#view a").fancybox(), jQuery(".thumb-grid a").fancybox()
});