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
        const Galla = ['#snakeboard', '#Current', '#Snakepad', '#SnakeZero' ,'#Hirobo', '#Patric']
        Gallacount = -1;
        const Spooky = ['#TeenGirl', '#Skeleton', '#DamagedWall', '#Pumpkin', '#HalloweenChar', '#Monster', '#Snowman', '#House', '#Mouth', '#momwagy']
        spookycount = -1; 
        const Fall = ['#ball', '#bird', '#girl', '#hornet', '#pat', '#tree', '#treerock'];
        Fallcount = -1;
        const Winter = ['#Campfire', '#snowfloor', '#snowtrees' ] 
        Wintercount = -1;
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
            const astrotext = document.querySelector('#AstroText');
            const Model = document.querySelector('#astroMODELS');
            Model.setAttribute('gltf-model', astro[astrocount]);
            astrotext.setAttribute('value', astro[astrocount].replace('#', ''));
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
            const FoodText = document.querySelector('#FoodText');
            const Model = document.querySelector('#foodMODELS');
            Model.setAttribute('gltf-model', Food[foodcount]);
            FoodText.setAttribute('value', Food[foodcount].replace('#', ''));
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
            const GallaText = document.querySelector('#GallaText');
            const Model = document.querySelector('#gallaMODELS');
            Model.setAttribute('gltf-model', Galla[Gallacount]);
            GallaText.setAttribute('value', Galla[Gallacount].replace('#',''));
            if (Galla[Gallacount] == '#snakeboard'){
                Model.setAttribute('scale', '0.006 0.006 0.006 ');
                Model.setAttribute('position', '0 1.7 0');
            } else if (Galla[Gallacount] == '#Current'){
                Model.setAttribute('scale', '0.006 0.006 0.006 ');
                Model.setAttribute('position', '0 1.7 0');
            } else if (Galla[Gallacount] == '#SnakePad'){
                Model.setAttribute('scale', '0.006 0.006 0.006 ');
                Model.setAttribute('position', '0 1.7 0');
            } else if (Galla[Gallacount] == '#Hirobo'){
                Model.setAttribute('scale', '0.7 0.7 0.7');
                Model.setAttribute('position', '0 1.7 0');
            } else if (Galla[Gallacount] == '#Patric'){
                Model.setAttribute('scale', '0.7 0.7 0.7');
                Model.setAttribute('position', '0 1.7 0');

            } else if (Galla[Gallacount] == '#SnakeZero') {

            }
            console.log(Galla[Gallacount]);
        }
        //#endregion Galla
        // #region Puzz(Under-maintenance)
        else if (world == 'Puzz'){
            console.log("Puzzed");

        }
        //#endregion Puzz
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
            const SpookyText = document.querySelector('#SpookyText');
            const Model = document.querySelector('#spookyMODELS');
            Model.setAttribute('gltf-model', Spooky[spookycount]);
            SpookyText.setAttribute('value', Spooky[spookycount].replace('#', ''));
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
        // #region Fall
        else if (world == 'Fall'){
            console.log("Falled");
            if (this.data.dir == '+'){
            Fallcount++; 
            if (Fallcount > 6){
                Fallcount = 6;
            }
            } else if (this.data.dir == '-'){
            Fallcount--;
            if (Fallcount < 0){
                Fallcount = 0;
            }
            }
            const FallText = document.querySelector('#FallText');
            const Model = document.querySelector('#fallMODELS');
            Model.setAttribute('gltf-model', Fall[Fallcount]);
            FallText.setAttribute('value', Fall[Fallcount].replace('#', ''));
            console.log(Fallcount);
            console.log(Fall[Fallcount]);
            if (Fall[Fallcount] == '#ball'){
                Model.setAttribute('scale', '0.6 0.6 0.6');
            } else if (Fall[Fallcount] == '#bird'){
                Model.setAttribute('scale', '1 1 1');
            } else if (Fall[Fallcount] == '#girl'){
                Model.setAttribute('scale', '1 1 1');
            } else if (Fall[Fallcount] == '#hornet'){
                Model.setAttribute('scale', '1 1 1');
            } else if (Fall[Fallcount] == '#pat'){
                Model.setAttribute('scale', '0.8 0.8 0.8');
            } else if (Fall[Fallcount] == '#tree'){
                Model.setAttribute('scale', '0.3 0.3 0.3');
            } else if (Fall[Fallcount] == '#treerock'){
                Model.setAttribute('scale', '0.05 0.05 0.05');
            }
        } 
        // #endregion Fall
        else if (world == 'Winter'){
            console.log("Wintered");
            if (this.data.dir == '+'){
            Wintercount++; 
            if (Wintercount > 3){
                Wintercount = 3;
            }
            } else if (this.data.dir == '-'){
            Wintercount--;
            if (Wintercount < 0){
                Wintercount = 0;
            }
            }

            const WinterText = document.querySelector('#WinterText');
            const Model = document.querySelector('#winterMODELS');
            Model.setAttribute('gltf-model', Winter[Wintercount]);
            WinterText.setAttribute('value', Winter[Wintercount].replace('#',''));
            console.log(Wintercount);
            console.log(Winter[Wintercount]);
            if (Winter[Wintercount] == '#Campfire'){
                Model.setAttribute('scale', '0.08 0.08 0.08');
                Model.setAttribute('position', '0 1.5 0');
            } else if (Winter[Wintercount] == '#snowfloor'){
                Model.setAttribute('scale', '0.1 0.1 0.1');
                Model.setAttribute('position', '0 1.5 0');

            } else if (Winter[Wintercount] == '#snowtrees'){
                Model.setAttribute('scale', '0.7 0.7 0.7'); 
                Model.setAttribute('position', '0 1.5 0');
            }
        }

    });    
    },

    

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});
