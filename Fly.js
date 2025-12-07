AFRAME.registerComponent('fly', {
  
    init: function () {
        console.log('compnent registered');
        this.flying = false;
      document.addEventListener('keydown', (e) => {
        if (e.key === 't'|| e.key === 'T'){
            const camera = document.querySelector('#camera');
            this.flying = !this.flying;
            console.log("Flying: ", this.flying);
            camera.setAttribute('wasd-controls','fly', this.flying);
        } 
      });  
}
});
