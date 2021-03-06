    // //元素是否在可视区域内
    // function isInSight(el) {
    //   const bound = el.getBoundingClientRect()
    //   const clientHeight = window.innerHeight

    //   return bound.top <= clientHeight + 100
    // }

    // let index = 0

    // function checkImgs() {
    //   const imgs = document.querySelectorAll('photo')
    //   for (let i = index; i < imgs.length; i++) {
    //     //如果图片在可视区域内就加载
    //     if (isInSight(imgs[i])) {
    //       loadImg(imgs[i])
    //       index = i
    //     }
    //   }
    // }

    // //加载图片的函数，就是将data-src给src
    // function loadImg(el) {
    //   if (!el.src) {
    //     const source = el.dataset.src
    //     el.src = source
    //   }
    // }

    // //节流
    // function throttle(fn, mustRun = 500) {
    //   const timer = null
    //   let previous = null
    //   return function () {
    //     const now = new Date()
    //     const context = this
    //     const args = arguments
    //     if (!previous) {
    //       previous = now
    //     }

    //     const remaining = now - previous

    //     if (mustRun && remaining >= mustRun) {
    //       fn.apply(context, args)
    //       previous = now
    //     }
    //   }
    // }
    function isInSight(el) {
      const bound = el.getBoundingClientRect();
      const clientHeight = window.innerHeight;
      //如果只考虑向下滚动加载
      //const clientWidth=window.innerWeight;
      return bound.top <= clientHeight + 100;
    }

    let index = 0;

    function checkImgs() {
      const imgs = document.querySelectorAll('.my-photo');
      for (let i = index; i < imgs.length; i++) {
        if (isInSight(imgs[i])) {
          loadImg(imgs[i]);
          index = i;
        }
      }
      // Array.from(imgs).forEach(el => {
      //   if (isInSight(el)) {
      //     loadImg(el);
      //   }
      // })
    }

    function loadImg(el) {
      if (!el.src) {
        const source = el.dataset.src;
        el.src = source;
      }
    }

    function throttle(fn, mustRun = 500) {
      const timer = null;
      let previous = null;
      return function () {
        const now = new Date();
        const context = this;
        const args = arguments;
        if (!previous) {
          previous = now;
        }
        const remaining = now - previous;
        if (mustRun && remaining >= mustRun) {
          fn.apply(context, args);
          previous = now;
        }
      }
    }