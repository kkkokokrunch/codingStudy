-stylus -w style.styl -o style.css 将stylus同时变成css 
-.movie
    color $font_color_white
    padding 0.4rem
    line-height 1
    position relative
    box-sizing border-box
    filter blur(0)
    &-background,
    &-filter
        position absolute
        top 0
        right 0
        left 0
        bottom 0
        width 100%
        &-表示 .movie-background .movie-filter 表示父级