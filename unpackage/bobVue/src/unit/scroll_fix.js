let scroll_fix = {
  inserted(el) {
    let moveEnd = false
    document.body.ontouchmove = event => {
      if (event.cancelable && !event.defaultPrevent) {
        event.preventDefault()
      }
    };
    let startY = 0

    function touchSatrtFunc(evt) {
      try {
        let touch = evt.touches[0]
        let y = Number(touch.pageY)
        startY = y
      } catch (e) {
        console.error("touchSatrtFunc：" + e.message)
      }
    }
    document.addEventListener("touchstart", touchSatrtFunc, false);
    let _ss = el
    _ss.ontouchmove = function (ev) {
      moveEnd = true
      let _point = ev.touches[0],
        _top = _ss.scrollTop
      let _bottomFaVal = _ss.scrollHeight - _ss.offsetHeight;
      if (_top === 0) {
        if (_point.clientY > startY) {
          ev.preventDefault();
        } else {
          ev.stopPropagation()
        }
      } else if (_top === _bottomFaVal) {
        if (_point.clientY < startY) {
          ev.preventDefault()
        } else {
          ev.stopPropagation()
        }
      } else if (_top > 0 && _top < _bottomFaVal) {
        ev.stopPropagation()
      } else {
        ev.preventDefault();
      }
      _ss.ontouchend = (e) => {
        if (moveEnd) {
          e.stopPropagation()
          moveEnd = false
          return false
        }
      }
    }
  }
}
export default scroll_fix;