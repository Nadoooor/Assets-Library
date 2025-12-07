AFRAME.registerComponent('switch', {
    
    init: function () {
        console.log("switch registered");
        const astro = [ '#Sun', '#Mercury', '#Venus' ,'#Earth', '#Mars' ,'#Jupitur', '#Saturn', '#Uranus', '#Neptune' ];
        astrocount = 0;
        const world = this.el.getAttribute('id')
    this.el.addEventListener('click', (e) => {
        console.log("clicked");
        if (world == 'Astro'){
            console.log("Astroed");
            const Model = document.querySelector('#astroMODELS');
            Model.setAttribute('gltf-model', astro[astrocount]);
            if (astro[astrocount] == '#Sun'){
                Model.setAttribute('scale', "0.08 0.08 0.08");
            } else if (astro[astrocount] == '#Mercury'){
                Model.setAttribute('scale', '1.5 1.5 1.5');
                Model.setAttribute('position', '');
            }
            console.log(Model);
            console.log(astro[astrocount]);
            astrocount++; 
        } else if (world == 'Food'){
            console.log("Fooded");
        } else if (world == 'Galla'){
            console.log("Gallaed");
        } else if (world == 'Winter'){
            console.log("Wintered");
        } else if (world == 'Fall'){
            console.log("Falled");
        } else if (world == 'Loopy'){
            console.log("Loopied");
        } else if (world == 'Puzz'){
            console.log("Puzzed");
        }

    });    
    },

    

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});
