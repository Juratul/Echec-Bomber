<!--CODE MANETE XBOX POUR ECHEC BOMBER-->

  PxGamepad.prototype.update = function() {

        // make sure we have a gamepad
        var gp = this.getGamepad();
        if (!gp) {
            return;
        }

        // check state of each of the buttons
        var i, len, name, wasDown, isDown;
        for (i = 0, len = this.buttonNames.length; i < len; i++) {

            name = this.buttonNames[i];
            wasDown = !!this.buttons[name];
            isDown = this.buttons[name] = buttonPressed(gp, i);

            if (wasDown && !isDown) {
                jQuery.each(this.callbacks[name] || [], function(i, callback) {
                    if (callback) { callback(); }
                });
            }
        }

        // update the sticks
        this.leftStick.x = gp.axes[0];
        this.leftStick.y = gp.axes[1];
        this.rightStick.x = gp.axes[2];
        this.rightStick.y = gp.axes[3];

         move: function(x,y){   // DEPLACEMENT PERSO  BORDER 
      if( x > this.tab.x-5 || x < 0 || y < 0 || y > this.tab.y-1){
        return;
      }else{
        this.pos.x = x;
        this.pos.y = y;
      }
      this.setCell();
    },
       

    };


