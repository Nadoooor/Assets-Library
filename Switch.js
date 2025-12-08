AFRAME.registerComponent('switch', {
    schema:{
        dir: {type: 'string', default: '+' }
    },


    init: function () {
        console.log("switch registered");
        const astro = [ '#Sun', '#Mercury', '#Venus' ,'#Earth', '#Mars' ,'#Jupitur', '#Saturn', '#Uranus', '#Neptune' ];
        astrocount = -1;
        const Food = ['#Chips', '#Donuts', '#Fish', '#Turkey', '#Cupcake', '#Croissant', '#IceCream'];
        foodcount = -1;
        const Galla = ['#snakeboard', '#Current', '#here', '#Hirobo', '#Patric']
        Gallacount = -1;
        const Spooky = ['#TeenGirl', '#Skeleton', '#DamagedWall', '#Pumpkin', '#HalloweenChar', '#Monster', '#Snowman', '#House', '#Mouth', '#momwagy']
        spookycount = -1; 
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
        // #region Food
        else if (world == 'Food'){
            console.log("Fooded");
            if (this.data.dir == '+'){
            foodcount++; 
            if (foodcount > 6){
                foodcount = 6;
            }
            } else if (this.data.dir == '-'){
            foodcount--;
            if (foodcount < 0){
                foodcount = 0;
            }
            }
            const Model = document.querySelector('#foodMODELS');
            Model.setAttribute('gltf-model', Food[foodcount]);
            if (Food[foodcount] == '#Chips'){
                Model.setAttribute('scale', "3 3 3");
            } else if (Food[foodcount] == '#Fish'){
                Model.setAttribute('scale', '0.2 0.2 0.2');
                // Model.setAttribute('scale', "3 3 3");
            } else if (Food[foodcount] == '#Croissant'){
                Model.setAttribute('scale', '0.2 0.2 0.2');
                // Model.setAttribute('scale', "3 3 3");
            } else if (Food[foodcount] == '#Turkey'){
                Model.setAttribute('scale', '1 1 1');
            } else if (Food[foodcount] == '#Cupcake'){
                Model.setAttribute('scale', '1 1 1');
            } else if (Food[foodcount] == '#IceCream'){
                Model.setAttribute('scale', '1 1 1');
            } else if (Food[foodcount] == '#Donuts'){
                Model.setAttribute('scale', '1 1 1');
            };
            console.log(Food[foodcount]);
            console.log(foodcount);
            console.log(this.data.dir);
        }
        // #endregion
        // #region Galla
        else if (world == 'Galla'){
            console.log("Gallaed");
            if (this.data.dir == '+'){
            Gallacount++; 
            if (Gallacount > 6){
                Gallacount = 6;
            }
            } else if (this.data.dir == '-'){
            Gallacount--;
            if (Gallacount < 0){
                Gallacount = 0;
            }
            }

            const Model = document.querySelector('#gallaMODELS');
            Model.setAttribute('gltf-model', Galla[Gallacount]);
            if (Galla[Gallacount] == '#snakeboard'){
                Model.setAttribute('scale', '0.006 0.006 0.006 ');
                Model.setAttribute('position', '0 1.7 0');
            } else if (Galla[Gallacount] == '#Current'){
                Model.setAttribute('scale', '0.006 0.006 0.006 ');
                Model.setAttribute('position', '0 1.7 0');
            } else if (Galla[Gallacount] == '#here'){
                Model.setAttribute('scale', '0.006 0.006 0.006 ');
                Model.setAttribute('position', '0 1.7 0');
            } else if (Galla[Gallacount] == '#Hirobo'){
                Model.setAttribute('scale', '0.7 0.7 0.7');
                Model.setAttribute('position', '0 1.7 0');
            } else if (Galla[Gallacount] == '#Patric'){
                Model.setAttribute('scale', '0.7 0.7 0.7');
                Model.setAttribute('position', '0 1.7 0');
            }
            console.log(Galla[Gallacount]);
        }
        //#endregion Galla
        else if (world == 'Winter'){
            console.log("Wintered");
            
        }
        // #region Spooky
        else if (world == 'Spooky'){
            console.log("Spooked");
            if (this.data.dir == '+'){
            spookycount++; 
            if (spookycount > 9){
                spookycount = 9;
            }
            } else if (this.data.dir == '-'){
            spookycount--;
            if (spookycount < 0){
                spookycount = 0;
            }
            }
            const Model = document.querySelector('#spookyMODELS');
            Model.setAttribute('gltf-model', Spooky[spookycount]);
            console.log(spookycount);
            console.log(Spooky[spookycount]);
            if (Spooky[spookycount] == '#DamagedWall'){
                Model.setAttribute('scale', '0.01 0.01 0.01');
            } else if (Spooky[spookycount] == '#Skeleton'){
                Model.setAttribute('scale', '1 1 1');
            } else if (Spooky[spookycount] == '#Pumpkin'){
                Model.setAttribute('scale', '0.003 0.003 0.003');
            } else if (Spooky[spookycount] == '#HalloweenChar'){
                Model.setAttribute('scale', '0.7 0.7 0.7');
            } else if (Spooky[spookycount] == '#Monster'){
                Model.setAttribute('scale', '1 1 1');
            } else if (Spooky[spookycount] == '#Snowman'){
                Model.setAttribute('scale', '1 1 1');
            } else if (Spooky[spookycount] == '#House'){
                Model.setAttribute('scale', '1 1 1');
            } else if (Spooky[spookycount] == '#Mouth'){
                Model.setAttribute('scale', '3 3 3');
            } else if (Spooky[spookycount] == '#momwagy'){
                Model.setAttribute('scale', '3 3 3');
            } else if (Spooky[spookycount] == '#TeenGirl'){
                Model.setAttribute('scale', '1 1 1');
            }
        } 
        // #endregion Spooky
        else if (world == 'Loopy'){
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
