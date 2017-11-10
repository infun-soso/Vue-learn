<template>
</template>

<script>
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/global.styl"
    @import "../../common/stylus/border-1px"
    .songsheet
        position:fixed
        left:0
        top:0
        bottom:0
        right:0
        z-index: 14
        background: #fff
        overflow:auto
        -webkit-overflow-scrolling:touch
        .songheader
            position:fixed
            transform:translateZ(0)
            top:0
            left:0
            right:0
            height:50px
            z-index:10
            display:flex
            align-items:center
            padding:0 10px
            .songheaderimg
                position:absolute
                top:0
                left:0
                right:0
                bottom:0
                z-index: -1;
                opacity:0
            i
                flex:0 0 36px
                width:36px
                height:36px
                line-height:36px
                text-align:center
                font-size:24px
                color:#fff
                &.menu
                    font-size:20px
            .title
                flex:1 1 auto
                max-width:calc(100% - 108px)
                font-size:16px
                color:#fff
                font-weight:400
                text-overflow:ellipsis
                overflow:hidden
                white-space:nowrap
                margin:0
                padding:0 5px
        .content
            min-height: calc(100vh - 46px)
            background:#FFF
            box-sizing:border-box
            .top
                height:155px
                background:#000
                padding:70px 25px 20px 25px
                .songsheetdisc
                    height:100px
                    display:flex
                    .songsheetimg
                        position:relative
                        flex:0 0 100px
                        width:100px
                        height:100px
                        img
                            width:100px
                            height:100px
                        .info
                            display:block
                            position:absolute
                            bottom:2px
                            right:2px
                            width:16px
                            height:16px
                            border:1px solid #f0f0f0
                            border-radius:50%
                            text-align:center
                            line-height:16px
                            color:#fff
                            font-weight:400
                            background:rgba(0,0,0,0.6)
                    .disc
                        flex:1 1 auto
                        max-width: calc(100% - 100px)
                        margin-left:15px
                        display:flex
                        flex-direction:column
                        padding-top:10px
                        p
                            margin:0
                            &.songsheetname
                                height:40px
                                line-height:20px
                                font-size:14px
                                font-weight:500
                                overflow:hidden
                                color:#fff
                        .user
                            width:100%
                            height:30px
                            line-height:30px
                            display:flex
                            align-items:center
                            .avatar
                                width:20px
                                height:20px
                                border-radius:50%
                                color:#f0f0f0
                            .songsheetuser
                                text-indent:6px
                                max-width:calc( 100% - 40px )
                                text-overflow:ellipsis
                                white-space:nowrap
                                overflow:hidden
                                color:#f0f0f0
                                font-size:12px
                                color:#fff
                            i
                                width:20px
                                height:20px
                                text-align:center
                                line-height:20px
                                font-size:12px
                                color:#f0f0f0
                .do
                    display:flex
                    width:100%
                    height:40px
                    align-items:center
                    margin-top:15px
                    div
                        flex:1
                        display:flex
                        flex-direction:column
                        align-items:center
                        color:#fff
                        &:active
                            color:#ccc
                        &.nocollect
                            i
                                color:rgba(255,255,255,0.3)
                            span
                                color:rgba(255,255,255,0.8)
                        i
                            width:28px
                            height:28px
                            font-size:18px
                            text-align:center
                            line-height:28px
                        span
                            font-size:12px
            .bottom
                position:relative
                .border-1px
                    border-1px($border_1px)
                .bottom-wrapper
                    height:42px
                    line-height:42px
                    .info
                        position:absolute
                        top:0
                        right:0
                        height:42px
                        width:100%
                        line-height:42px
                        font-size:0
                        &:active
                            background:$list_active
                        i
                            height:42px
                            width:42px
                            line-height:42px
                            text-align:center
                            font-size:16px
                            margin-right:5px
                            margin-left:10px
                            vertical-align:middle
                            color:#666
                        span
                            display:inline-block
                            vertical-align:middle
                            font-size:14px
                            color:#333
                            &.count
                                font-size:10px
                                margin-left:5px
                                font-weight:400
                                color:#aaa
                    .rightSetting
                        position:absolute
                        top:0
                        right:0
                        height:42px
                        width:auto
                        font-size:0
                        padding:0 10px
                        &:active
                            background:$list_active
                        i
                            height:42px
                            width:42px
                            line-height:42px
                            text-align:center
                            font-size:16px
                            margin-right:2px
                            vertical-align:middle
                            color:#666
                        span
                            display:inline-block
                            vertical-align:middle
                            font-size:12px
                            color:#666

        &.sliderUpHideRight-enter-to,&.sliderUpHideRight-leave-to
            transition: all 0.3s
        &.sliderUpHideRight-enter
            transform:translate3d(0,100%,0)
            opacity: 0
        &.sliderUpHideRight-leave-to
            transform:translate3d(100%,0,0)
            opacity: 0
</style>
