const vm = Vue.createApp({
   data() {
      return {
         perspective: 100,
         rotateX: 0,
         rotateY: 0,
         rotateZ: 0,
      }
   },
   methods:{
     reset(){
      let id = document.getElementById('reset-btn')
      id.style.background = 'blue';
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
      setTimeout(() => {
         id.style.background = '#8d81f3';
      }, 2000);

     },
     copy(){
      let id = document.getElementById('copy-btn');
      id.style.background = 'blue';
      const el = document.createElement('textarea');
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      el.value = `transform: ${this.box.transform}`;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setTimeout(() => {
         id.style.background = '#8d81f3';
      }, 2000);
     },
   },
   computed: {
      box() {
         return {
            transform:
            `
               perspective(${this.perspective}px)
               rotateX(${this.rotateX}deg)
               rotateY(${this.rotateY}deg)
               rotateZ(${this.rotateZ}deg)
            `
         }
      },
     
   },
 }).mount('#app')
 