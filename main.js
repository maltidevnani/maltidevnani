/* Check the location of each element */
$('.content').each( function(i){
  
    var bottom_of_object= $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).height();
    
    if( bottom_of_object > bottom_of_window){
      $(this).addClass('hidden');
    }
  });
  
  
  $(window).scroll( function(){
      /* Check the location of each element hidden */
      $('.hidden').each( function(i){
        
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
        
          /* If the object is completely visible in the window, fadeIn it */
          if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},700);
          }
      });
  });
  Vue.component('progressbar', {
    template: `<div>
                  <slot></slot>
                  <progress :value="value" max="100"/>
                </div>`,
    props: {
      target: {
        type: Number
      }
    },
    data () {
      return {
        value: 0,
        interval: null
      }
    },
    mounted () {
      this.interval = setInterval(() => {
        this.value++
      }, 10)
    },
    watch: {
      value (v) {
        if (v === this.target) {
          clearInterval(this.interval)
        }
      }
    }
  })
  
  new Vue({
    el: '.progressbar-container',
    components: ['progressbar'],
    data () {
      return {
        items: [
          {
            key: 'HTML/CSS',
            value: 50,
          },
          {
            key: 'JS',
            value: 75
          },
          {
            key: 'JAVA',
            value: 100
          },
          {
            key: 'PHP',
            value: 90
          },
          {
            key: 'HTML/CSS',
            value: 50,
          },
          {
            key: 'JS',
            value: 75
          },
          {
            key: 'JAVA',
            value: 100
          },
          {
            key: 'PHP',
            value: 90
          }
        ]
      }
    }
  })