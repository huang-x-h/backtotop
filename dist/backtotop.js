$.backtotop = function(element) {
  function Debouncer(callback) {
    this.callback = callback
    this.ticking = false
  }

  Debouncer.prototype = {
    update: function() {
      this.callback && this.callback()
      this.ticking = false
    },

    requestTick: function() {
      if (!this.ticking) {
        requestAnimationFrame(this.rafCallback || (this.rafCallback = $.proxy(this.update, this)))
      }

      this.ticking = true
    },

    // EventListener implement
    handleEvent: function() {
      this.requestTick()
    }
  }

  var $el = $(element),
    offset = 100

  var debouncer = new Debouncer(function() {
    if ($(window).scrollTop() > offset) {
      $el.fadeIn()
    } else {
      $el.fadeOut()
    }
  })

  window.addEventListener('scroll', debouncer, false)
  debouncer.handleEvent()

  $el.on('click', function() {
    // 1 second of animation time
    // html works for FFX but not Chrome
    // body works for Chrome but not FFX
    // This strange selector seems to work universally
    $('html, body').animate({
      scrollTop: 0
    }, 700)
  })
}
