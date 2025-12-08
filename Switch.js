AFRAME.registerComponent('switch', {
    schema:{
        dir: {type: 'string', default: '+' }
    },


    init: function () {
        console.log("switch registered");
        const astro = [ '#Sun', '#Mercury', '#Venus' ,'#Earth', '#Mars' ,'#Jupitur', '#Saturn', '#Uranus', '#Neptune' ];
        astrocount = -1;
        const Food = ['#Chips', '#Donuts', '#Fish', '#Turkey', '#Cupcake', '#Croissant', '#Icecream', '#Chocolate_Cake'];
        foodcount = -1;
        const world = this.el.getAttribute('id')
    this.el.addEventListener('click', (e) => {
        console.log("clicked");
        // #region astro
        if (world == 'Astro'){
                        if (this.data.dir == '+'){
            astrocount++; 
            if (astrocount > 8){
                astrocount = 8;
            }
            } else if (this.data.dir == '-'){
            astrocount--;
            if (astrocount < 0){
                astrocount = 0;
            }
            }
            console.log("Astroed");
            const Model = document.querySelector('#astroMODELS');
            Model.setAttribute('gltf-model', astro[astrocount]);
            if (astro[astrocount] == '#Sun'){
                Model.setAttribute('scale', "0.08 0.08 0.08");
                Model.setAttribute('position', "0 0 0");
            } else if (astro[astrocount] == '#Mercury'){
                Model.setAttribute('scale', '0.8 0.8 0.8');
                Model.setAttribute('position', '-0.81 -0.7 -0.74');
            } else if (astro[astrocount] == '#Earth'){
                Model.setAttribute('scale', '0.7 0.7 0.7')
                Model.setAttribute('position', '0 0 0');
            }else if (astro[astrocount] == '#Mars'){
                Model.setAttribute('position', '0 0 0');
                Model.setAttribute('scale', '0.3 0.3 0.3');
            }else if (astro[astrocount] == '#Jupitur'){
                Model.setAttribute('position', '0 0 0');
                Model.setAttribute('scale', '0.5 0.5 0.5');
            }else if (astro[astrocount] == '#Saturn'){
                Model.setAttribute('position', '0 0 0');
                Model.setAttribute('scale', '1 1 1');
            } else if (astro[astrocount] == '#Uranus'){
                Model.setAttribute('position', '-0.081 -0.055 -1.277');
                Model.setAttribute("scale", '5 5 5');
            }else if (astro[astrocount] == '#Neptune'){
                Model.setAttribute('position', '0 0 0');
                Model.setAttribute('scale', '0.1 0.1 0.1');
            } else if (astro[astrocount] == '#Venus'){
                Model.setAttribute('scale', '0.8 0.8 0.8');
                Model.setAttribute('position', '-0.81 -0.7 -0.74');
            }
            console.log(Model);
            console.log(astro[astrocount]);
        } 
        // #endregion astro
        else if (world == 'Food'){
            console.log("Fooded");
            if (this.data.dir == '+'){
            foodcount++; 
            if (foodcount > 8){
                foodcount = 8;
            }
            } else if (this.data.dir == '-'){
            foodcount--;
            if (foodcount < 0){
                foodcount = 0;
            }
            }
            const Model = document.querySelector('#foodMODELS');
            Model.setAttribute('gltf_model', Food[foodcount]);
            console.log(Food[foodcount]);
            console.log(foodcount);
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
