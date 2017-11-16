<template>
	<div class="musiclist">
		<transition name="sildUp">
			<div class="content" v-show="isShowMusicList">
			</div>
		</transition>
		<transition name="fade">
			<div class="mask" v-show="isShowMusicList" @click.stop="hideMusicList" @touchmove.prevent></div>
		</transition>
	</div>
</template>

<script>
	export default {
	  computed: {
        isShowMusicList () {
          return this.$store.getters.getIsShowMusicList
        },
        hideMusicList () {
          this.$store.dispatch('hideMusicList')
        }
	  }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./../common/stylus/border-1px/index.styl"
@import "./../common/stylus/global.styl"
	.musiclist
		.content
		position:fixed
		height:314px
		background:#fff
		bottom:0
		left:0
		right:0
		z-index:23
		&.sideUp-enter-to,&.sideUp-leave-to
		transition: transform 0.3s
		&.sideUp-enter,&.sideUp-leave-to
		transform:translate3d(0,100%,0) .title
		width:100%
		position:relative
		height:50px
		font-size:0  .play-type,.collect,.delete
		display:inline-block
		width:auto
		height:100%
		line-height:50px
		padding:0 15px
		&:active
		background:$list_active .play-type
		height:100%
		i
			color:#666
			font-size:18px
			display:inline-block
			width:20px
			height:20px
			vertical-align:middle
		span
			color:#666
			vertical-align:middle
			font-size:14px
			font-weight:300
	.right
		float:right
		height:100%
		line-height:50px
	.collect,.delete
		font-size:12px
		color:#666
		i
			font-size:18px
			vertical-align:middle
		span
			vertical-align:middle
			font-size:14px
			font-weight:300
	.border-1px
	border-1px($border_1px)
	.container
		height:calc(100% - 50px)
		margin:0
		padding:0
		overflow:scroll
		-webkit-overflow-scrolling:touch
		box-sizing:border-box
		padding: 6px 0
	.list
		margin:0
		padding:0
		list-style:none
		height:42px
		line-height:42px
		padding:0 15px
		font-weight:400
		font-size:14px
		color:#666
		overflow:hidden
	.playingicon
		font-size: 14px
		vertical-align: middle
		color:$primarycolor
		&:active
			background:$list_active
	.border-1px
	border-1px($border_1px)
		.mask
			position:fixed
			top:0
			left:0
			bottom:0
			right:0
			z-index:21
			opacity:1
			background:$maskBackground
				&.fade-enter-to,&.fade-leave-to
					transition: opacity 0.3s
				&.fade-enter,&.fade-leave-to
					opacity:0
</style>
