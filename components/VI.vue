<template>
  <div class="vi-panel" v-if="viStatus">
    <div class="inner-wide">
      <div class="flex">

        <div class="vi-panel-group">
          <div class="vi-group-title">Цвет сайта</div>
          <div class="vi-group-btns">
            <a href="#" class="vi-bg vi-bg-white" :class="{active: viConfig.bg === 'white'}" @click.prevent="changeConfig('bg','white')">A</a>
            <a href="#" class="vi-bg vi-bg-black" :class="{active: viConfig.bg === 'black'}"  @click.prevent="changeConfig('bg','black')">A</a>
            <a href="#" class="vi-bg vi-bg-brown" :class="{active: viConfig.bg === 'brown'}"  @click.prevent="changeConfig('bg','brown')">A</a>
          </div>
        </div>

        <div class="vi-panel-group">
          <div class="vi-group-title">Размер шрифта</div>
          <div class="vi-group-btns">
						<a href="#" class="vi-font-minus" @click.prevent="changeConfig('fz','minus')"></a>
            <a href="#" class="vi-font-plus" @click.prevent="changeConfig('fz','plus')">+</a>
          </div>
        </div>

        <div class="vi-panel-group">
          <div class="vi-group-title">Межбуквенный интервал</div>
          <div class="vi-group-btns">
            <a href="#" class="vi-ls" :class="{active: viConfig.ls === 0}" @click.prevent="changeConfig('ls',0)">1</a>
            <a href="#" class="vi-ls" :class="{active: viConfig.ls === 25}" @click.prevent="changeConfig('ls',25)">1.25</a>
            <a href="#" class="vi-ls" :class="{active: viConfig.ls === 50}" @click.prevent="changeConfig('ls',50)">1.5</a>
          </div>
        </div>

        <div class="vi-panel-group">
          <div class="vi-group-title">Междустрочный интервал</div>
          <div class="vi-group-btns">
            <a href="#" :class="{active: viConfig.lh === 1}" @click.prevent="changeConfig('lh',1)">1</a>
            <a href="#" :class="{active: viConfig.lh === 15}" @click.prevent="changeConfig('lh',15)">1.5</a>
            <a href="#" :class="{active: viConfig.lh === 2}" @click.prevent="changeConfig('lh',2)">2</a>
          </div>
        </div>

				<div class="vi-panel-group">
          <div class="vi-group-title">Ч/Б гамма</div>
          <div class="vi-group-btns">
            <a href="#" :class="{active: viConfig.gray === false}" @click.prevent="changeConfig('gray',false)">Откл</a>
            <a href="#" :class="{active: viConfig.gray === true}" @click.prevent="changeConfig('gray',true)">Вкл</a>
          </div>
        </div>

        <div class="vi-panel-group">
          <div class="vi-group-title">Изображения</div>
          <div class="vi-group-btns">
            <a href="#" :class="{active: viConfig.imgs === 'nobright'}" @click.prevent="changeConfig('imgs','nobright')">Приглушенные</a>
            <a href="#" :class="{active: viConfig.imgs === 'colored'}" @click.prevent="changeConfig('imgs','colored')">Цветные</a>
            <a href="#" :class="{active: viConfig.imgs === 'gray'}" @click.prevent="changeConfig('imgs','gray')">Ч/б</a>
            <a href="#" :class="{active: viConfig.imgs === 'off'}" @click.prevent="changeConfig('imgs','off')">Откл</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'

export default {
  data() {
    return {
    }
  },

  computed: {
    ...mapGetters({
      viStatus: 'vi/getStatus',
      viClasses: 'vi/getClasses',
      viConfig: 'vi/getConfig'
    })
  },

  methods: {
    ...mapMutations({
      setValue: 'vi/setValue',
      setConfig: 'vi/setConfig',
      toggleStatus: 'vi/toggleStatus'
    }),

    changeConfig(type, value) {
      this.setValue({type, value})

      localStorage.setItem('viConfig',JSON.stringify(this.viConfig))
    },

    checkLocalStorage() {
      if (localStorage.getItem('viConfig')) {
        this.setConfig(JSON.parse(localStorage.getItem('viConfig')))
      }

			if (localStorage.getItem('viStatus')) {
				if (!this.viStatus) {
          this.toggleStatus()
        }
			}
    },

    printClasses() {
      document.documentElement.className = this.viClasses
    }
  },

  watch: {
    viClasses: function(val) {
      this.printClasses()
      // document.documentElement.className = val
    }
  },

  mounted() {
    this.checkLocalStorage()
    this.printClasses()
  }
}
function Mega() {
	//настройки хранимые в LS
	var viCookie;


	//проверяем активность версии + настройки
	setTimeout(function(){
		if( localStorage.getItem('vi') ) {
			viCookie = JSON.parse(localStorage.getItem('vi'));

			if ( viCookie.mode === true ) {
				$('.vi-start-btn').addClass('active');
				$('.vi-start-btn span').text('Обычная версия сайта');
				
				viConfig = viCookie;
				$('.vi-panel').addClass('opened');
				$('html').addClass('vi');
				$('html').addClass('vi-fz-'+viCookie.fz);

				if( viCookie.bg !== '' ) {
					$('html').addClass('vi-bg-'+viCookie.bg);
					$('a.vi-bg').removeClass('active');
					$('a.vi-bg[data-bg='+viCookie.bg+']').addClass('active');
				}
				if ( viCookie.imgs !== '' ) {
					$('html').addClass('vi-img-'+viCookie.imgs);
					$('a.vi-img').removeClass('active');
					$('a.vi-img[data-img='+viCookie.imgs+']').addClass('active');
				}
				if ( viCookie.ls !== '' ) {
					$('html').addClass('vi-ls-'+viCookie.ls);
					$('a.vi-ls').removeClass('active');
					$('a.vi-ls[data-ls='+viCookie.ls+']').addClass('active');
				}
				if ( viCookie.lh !== '' ) {
					$('html').addClass('vi-lh-'+viCookie.lh);
					$('a.vi-lh').removeClass('active');
					$('a.vi-lh[data-lh='+viCookie.lh+']').addClass('active');
				}
			}
		}
	},0);
	

	//активируем
	$(document).on('click', '.vi-start-btn',function(e){
		e.preventDefault();
		var span = $(this).find('span');
		
		// if (span.text() === 'Версия для слабовидящих') {
		if (!localStorage.getItem('vi')) {
			$(this).addClass('active');
			$('html').addClass('vi vi-fz-18 vi-bg-white');
			$('.vi-panel').addClass('opened');
			
			
			viConfig.mode = true;
			localStorage.setItem('vi',JSON.stringify(viConfig));
			span.text('Обычная версия сайта');
		} else {
			$(this).removeClass('active');
			$('html').removeClass('vi');
			$('html').removeClassMask('vi-*');
			$('.vi-panel').removeClass('opened');
			
			viConfig.mode = false;
			localStorage.removeItem('vi');
			span.text('Версия для слабовидящих');
		}
	});
	$(document).on('click', '.vi-toggler',function(e){
		e.preventDefault();
		
		if (!localStorage.getItem('vi')) {
			$(this).addClass('active');
			$('html').addClass('vi vi-fz-18 vi-bg-white');
			$('.vi-panel').addClass('opened');
			
			viConfig.mode = true;
			localStorage.setItem('vi',JSON.stringify(viConfig));
		} else {
			$(this).removeClass('active');
			$('html').removeClass('vi');
			$('html').removeClassMask('vi-*');
			$('.vi-panel').removeClass('opened');
			
			viConfig.mode = false;
			localStorage.removeItem('vi');
		}
	});

	/*$(document).on('click','.vi-panel-off',function(){
		$('html').removeClass('vi');
		$('html').removeClassMask('vi-*');
		$('.vi-panel').removeClass('opened');
		viConfig.mode = false;
		localStorage.removeItem('vi');
	});*/

	$(document).on('click','.vi-group-btns a:not(.vi-font-plus, .vi-font-minus)',function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});


	//шрифт +
	$(document).on('click','a.vi-font-plus',function(){
		var curFz = viConfig.fz + 1;
		console.log(curFz);
		if (curFz > 10 && curFz < 27) {
			$('html').removeClassMask('vi-fz-*');
			$('html').addClass('vi-fz-'+curFz);
			viConfig.fz = curFz;
			localStorage.setItem('vi',JSON.stringify(viConfig));
		}
	});

	//шрифт -
	$(document).on('click','a.vi-font-minus',function(){
		var curFz = viConfig.fz - 1;
		if (curFz > 10 && curFz < 27) {
			$('html').removeClassMask('vi-fz-*');
			$('html').addClass('vi-fz-'+curFz);
			viConfig.fz = curFz;
			localStorage.setItem('vi',JSON.stringify(viConfig));
		}

	});

	$(document).on('click','a.vi-bg',function(){
		var $bg = $(this).data('bg');
		$('html').removeClassMask('vi-bg-*');
		$('html').addClass('vi-bg-'+$bg);
		viConfig.bg = $bg;
		localStorage.setItem('vi',JSON.stringify(viConfig));
		// $.cookie('vi', JSON.stringify(viConfig), { expires: 1, path: '/' });
	});

	$(document).on('click','a.vi-ls',function(){
		var $ls = $(this).data('ls');
		$('html').removeClassMask('vi-ls-*');
		$('html').addClass('vi-ls-'+$ls);
		viConfig.ls = $ls;
		localStorage.setItem('vi',JSON.stringify(viConfig));
	});

	$(document).on('click','a.vi-lh',function(){
		var $lh = $(this).data('lh');
		$('html').removeClassMask('vi-lh-*');
		$('html').addClass('vi-lh-'+$lh);
		viConfig.lh = $lh;
		localStorage.setItem('vi',JSON.stringify(viConfig));
	});

	$(document).on('click','a.vi-img',function(){
		var $img = $(this).data('img');
		$('html').removeClassMask('vi-img-*');
		$('html').addClass('vi-img-'+$img);
		viConfig.imgs = $img;
		localStorage.setItem('vi',JSON.stringify(viConfig));
	});
}
</script>

<style src="~/assets/styles/vi.scss" lang="scss"></style>
// @import url('~/assets/styles/vi.scss');