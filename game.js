(function(){  //  ANTIHACK  BI*CH 
  
  var timerPion = 100;
  var timerTour = 100;
  var timerCav = 100;
  var timerFou = 100;
  var timerRenne = 100;
  var timerPion2 = 100;
  var timerTour2 = 100;
  var timerCav2 = 100;
  var timerFou2 = 100;
  var timerRenne2 = 100;

  var rg = 0;
  var countB1 = 0;
  var rg2 = 0;
  var countB2 = 0;
  var selec = ['img.P1b1','img.P1b2','img.P1b3','img.P1b4','img.P1b5','img.P1b6'];
  var selec2 = ['img.P2b1','img.P2b2','img.P2b3','img.P2b4','img.P2b5','img.P2b6'];

  var vie1 = 0;
  var vie2 = 0;

  var Roi_on_off = 0;
  var Roi2_on_off = 0; 

  var engine = {
    pos: {x:0, y:0},
    pos2: {x:7, y:7},
    tab: {
      x: 8, 
      y: 8, 
      container: $('.tabContainer'),
      bombs: [],
      bombs2: [],

    },

    _init: function(){   // INITIALISATION DES FONCTION (load game)   /!\ ne pas toucher /!\
      this.genTab();
      this.listener();
      this.setCell();
      this.listener2();
      this.setCell2();
      $('.6-7').addClass('drapeaux');
      $('.5-7').addClass('bombPion');

       var posB = $('.'+this.pos.x[4]+'-'+this.pos.y[4]).addClass('bombPion');  
        var posB1x = this.pos.x+5; var posB1y = this.pos.y+5; var posB1 = $('.'+posB1x+'-'+posB1y); 
      var posB2x = this.pos.x+7; var posB2y = this.pos.y+5; var posB2 = $('.'+posB2x+'-'+posB2y);  
      var posB3x = this.pos.x; var posB3y = this.pos.y+1; var posB3 = $('.'+posB3x+'-'+posB3y); 
      var posB4x = this.pos.x; var posB4y = this.pos.y-1; var posB4 = $('.'+posB4x+'-'+posB4y);
       function ExPion(){
        timerPion=99;timePion.style.backgroundColor='orange';
        $('table tr td.bombPion').removeClass('bombPion');  
        $(posB).addClass('explosion');$(posB1).addClass('explosion');$(posB2).addClass('explosion');$(posB3).addClass('explosion');$(posB4).addClass('explosion');          
        setTimeout(function() {    
          timerPion=100;timePion.style.backgroundColor='cyan';
        
          $('img.P1b1').css('background-color', '#C775FE');
          countB1--;   
          self.tab.bombs[0] = false;          
        }, 600);
      }
      $('img.P1b1').css('background-color', 'red');
      this.tab.bombs[0] = true; 
      timerPion=0;timePion.style.backgroundColor='red';
      setTimeout(function() { timerPion=33; }, 1000); 
      setTimeout(function() { timerPion=66; }, 2000);                          
      setTimeout(function() { ExPion(); }, 3000); 
    },
     
    
     

     
  
    genTab: function(){   //  CREATION DU PLATEAU    /!\ ne pas toucher /!\
      var $table = $('<table></table>');
      for(var x = 0; x < this.tab.x; x++){
        var $line = $('<tr></tr>');
        $table.append($line);
        for(var y = 0; y < this.tab.y; y++){
          $line.append('<td class="'+x+'-'+y+'"></td>');
        }
      }
      this.tab.container.append($table);

    },

    selected: function() {
      if (countB1 < 3) {
        if (rg === 0) {engine.bombPion();};
        if (rg === 1) {engine.bombTour();};
        if (rg === 2) {engine.bombCav();};
        if (rg === 3) {engine.bombFou();};
        if (rg === 4) {engine.bombRe();};
        if (rg === 5) {engine.bombRoi();};
      }
    },
    down: function() { 
        $(selec[rg]).css('border', '5px solid white'); 
        rg++;  
        $(selec[rg]).css('border', '5px solid blue');
        if (rg === 6) {
            rg = 0;
            $(selec[rg]).css('border', '5px solid blue');
        }                                
    },
    up: function() {
        $(selec[rg]).css('border', '5px solid white');
        rg--;
        $(selec[rg]).css('border', '5px solid blue'); 
        if (rg === -1) {
            rg = 5;
            $(selec[rg]).css('border', '5px solid blue');
        } 
    },
    selected2: function() {
      if (countB2 < 3) {
        if (rg2 === 0) {engine.bombPion2();};
        if (rg2 === 1) {engine.bombTour2();};
        if (rg2 === 2) {engine.bombCav2();};
        if (rg2 === 3) {engine.bombFou2();};
        if (rg2 === 4) {engine.bombRe2();};
        if (rg2 === 5) {engine.bombRoi2();};
      }
    },
    down2: function() { 
        $(selec2[rg2]).css('border', '5px solid white'); 
        rg2++;  
        $(selec2[rg2]).css('border', '5px solid blue');
        if (rg2 === 6) {
            rg2 = 0;
            $(selec2[rg2]).css('border', '5px solid blue');
        }                                
    },
    up2: function() {
        $(selec2[rg2]).css('border', '5px solid white');
        rg2--;
        $(selec2[rg2]).css('border', '5px solid blue'); 
        if (rg2 === -1) {
            rg2 = 5;
            $(selec2[rg2]).css('border', '5px solid blue');
        } 
    },
    listener: function(){
      var me = this;
      $(document).keydown(function(e){   // DEPLACEMENT
          if (e.keyCode >= 49 && e.keyCode <= 83) {
            var pos = [me.pos.x, me.pos.y]; 
             switch(e.keyCode){
                case 83: pos[1]--; break; // left
                case 69: pos[0]--; break; // up
                case 70: pos[1]++; break; // right
                case 68: pos[0]++; break; // down
                case 49: engine.selected(); break;
                case 65: engine.up(); break;
                case 81: engine.down(); break;
              }
            me.move(pos[0], pos[1]);
          };
      });   
      var pos = [me.pos.x, me.pos.y]; 

      // BOUTON DIRECTIONELS
      pxgamepad.on('dpadLeft', function(){ me.move(pos[0], pos[1]--); console.log("BOUTON GAUCHE utiliser") });
      pxgamepad.on('dpadRight', function(){ me.move(pos[0], pos[1]++); console.log("BOUTON DROIT utiliser") });
      pxgamepad.on('dpadUp', function(){ me.move(pos[0]--, pos[1]); console.log("BOUTON HAUT utiliser") });
      pxgamepad.on('dpadDown', function(){ me.move(pos[0]++, pos[1]); console.log("BOUTON BAS utiliser") });

      // A B Y X
      pxgamepad.on('a', function() { engine.down(); console.log("A utiliser") });
      pxgamepad.on('b', function(){ engine.selected(); console.log("B utiliser") });
      pxgamepad.on('y', function(){ engine.up(); console.log("Y utiliser") });                                                          
    },         
    listener2: function(){
      var me2 = this;
      $(document).keydown(function(e){   // DEPLACEMENT
          if (e.keyCode >= 48 && e.keyCode <= 221) {
            var pos2 = [me2.pos2.x, me2.pos2.y]; 
             switch(e.keyCode){
                case 75: pos2[1]--; break; // left
                case 79: pos2[0]--; break; // up
                case 77: pos2[1]++; break; // right
                case 76: pos2[0]++; break; // down
                case 187: engine.selected2(); break;
                case 221: engine.up2(); break;
                case 192: engine.down2(); break;
             }
            me2.move2(pos2[0], pos2[1]);
          };
      });                                                                                                                     
    },  

    move: function(x,y,mur){   // DEPLACEMENT PERSO  BORDER 
     if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('.4-1')===true){
      console.log('mur');
     }
      if($('.'+this.pos.x +'-'+this.pos.y).hasClass('tunel1')===true && $('.'+this.pos.x+'-'+this.pos.y).hasClass('tunel2')) {
        this.pos.x = this.pos.x = 5;
        this.pos.y = this.pos.y = 6;
        
         
      }else{
        this.pos.x = x;
        this.pos.y = y;
      }

      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('active2')===true) return; // ROQUE
      this.setCell();
    },
    move2: function(x,y){   // DEPLACEMENT PERSO BORDER P2 
      if( x > this.tab.x-1 || x < 0 || y < 0 || y > this.tab.y-1){
        return;
      }else{
        this.pos2.x = x;
        this.pos2.y = y;
      }
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('active')===true) return; // ROQUE
      this.setCell2();
    },
    setCell: function(){   // DEPLACEMENT IMG PERSO
      $('table tr td.active').removeClass('active');
      $('.'+this.pos.x+'-'+this.pos.y).addClass('active');
      $('active').attr('active');      
    },
    setCell2: function(){   // DEPLACEMENT IMG PERSO P2
      $('table tr td.active2').removeClass('active2');
      $('.'+this.pos2.x+'-'+this.pos2.y).addClass('active2');
      $('active2').attr('active2');
    },
    vie: function(x,y){  
      if ($('.active').hasClass('explosion')) { 
        if (vie1 === 0) {
          $('img.coeur1_1').css('opacity', '0');            
          setTimeout(function(){
            vie1= 1;
          }, 2500);
        }
        if (vie1 === 1) {
          $('img.coeur1_2').css('opacity', '0'); 
          setTimeout(function(){  
            vie1= 2;            
          }, 2500);
        }
        if (vie1 === 2) {
          $('img.coeur1_3').css('opacity', '0');  
          setTimeout(function(){  
            alert("PURPLE PLAYER DIED");          
          }, 600); 
                     
        }
      } 
    },
    vie2: function(x,y){  
      if ($('.active2').hasClass('explosion')) { 
        if (vie2 === 0) {
          $('img.coeur2_1').css('opacity', '0');                      
          setTimeout(function(){
            vie2=1; 
          }, 2500);
        }
        if (vie2 === 1) {
          $('img.coeur2_2').css('opacity', '0');
          setTimeout(function(){  
            vie2=2;             
          }, 2500);
        }
        if (vie2 === 2) {
          $('img.coeur2_3').css('opacity', '0');
          setTimeout(function(){  
            alert("ORANGE PLAYER DIED");      
          }, 600);         
        }
      }
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                                                      PLAYER  1    BOMBS                                               //
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    bombPion: function(x,y) {   
      if (this.tab.bombs[0]===true) return; 
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombTour')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombCav')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombFou')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombRe')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombRoi')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombPion2')===true) return; 
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombTour2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombCav2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombFou2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombRe2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombPion2')===true) return; 
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('mur')===true) return; 
      countB1++; 
      console.log(countB1); 
      var posB = $('.'+this.pos.x+'-'+this.pos.y).addClass('bombPion'); 
      var posB1x = this.pos.x+2; var posB1y = this.pos.y; var posB1 = $('.'+posB1x+'-'+posB1y); 
      var posB2x = this.pos.x-1; var posB2y = this.pos.y; var posB2 = $('.'+posB2x+'-'+posB2y);  
      var posB3x = this.pos.x; var posB3y = this.pos.y+1; var posB3 = $('.'+posB3x+'-'+posB3y); 
      var posB4x = this.pos.x; var posB4y = this.pos.y-1; var posB4 = $('.'+posB4x+'-'+posB4y);
      function ExPion(){
        timerPion=99;timePion.style.backgroundColor='orange';
        $('table tr td.bombPion').removeClass('bombPion');  
        $(posB).addClass('explosion');$(posB1).addClass('explosion');$(posB2).addClass('explosion');$(posB3).addClass('explosion');$(posB4).addClass('explosion');          
        setTimeout(function() {    
          timerPion=100;timePion.style.backgroundColor='cyan';
        
          $('img.P1b1').css('background-color', '#C775FE');
          countB1--;   
          self.tab.bombs[0] = false;          
        }, 600);
      }
      $('img.P1b1').css('background-color', 'red');
      this.tab.bombs[0] = true; 
      timerPion=0;timePion.style.backgroundColor='red';
      setTimeout(function() { timerPion=33; }, 1000); 
      setTimeout(function() { timerPion=66; }, 2000);                          
      setTimeout(function() { ExPion(); }, 3000); 
    },
    bombTour: function(x,y) {
      if (this.tab.bombs[1]===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombPion')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombCav')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombFou')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombRe')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombRoi')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombPion2')===true) return; 
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombTour2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombCav2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombFou2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombRe2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombPion2')===true) return; 
      countB1++;   
      var posB= $('.'+this.pos.x+'-'+this.pos.y).addClass('bombTour'); 
      var posBy= this.pos.y;
      var posBx= this.pos.x;
      function ExTour() {
        timerTour=98;timeTour.style.backgroundColor='orange';
        $('table tr td.bombTour').removeClass('bombTour');                
        add_class_to_array('explosion', get_explosion_vertical(posBx,posBy));
        add_class_to_array('explosion', get_explosion_horizontal(posBx,posBy));
        setTimeout(function() {   
          timerTour=100;timeTour.style.backgroundColor='cyan';             
          $('table tr td.explosion').removeClass('explosion');
          $('img.P1b2').css('background-color', '#C775FE');
          countB1--;
          self.tab.bombs[1] = false
        }, 600);
      }
      $('img.P1b2').css('background-color', 'red');
      this.tab.bombs[1] = true;
      timerTour=0;timeTour.style.backgroundColor='red';
      setTimeout(function() { timerTour=14; }, 1000); 
      setTimeout(function() { timerTour=28; }, 2000); 
      setTimeout(function() { timerTour=42; }, 3000);
      setTimeout(function() { timerTour=56; }, 4000);
      setTimeout(function() { timerTour=70; }, 5000);
      setTimeout(function() { timerTour=84; }, 6000);
      setTimeout(function() { ExTour(); }, 7000); 
    }, 
    bombCav: function(x,y) {
      if (this.tab.bombs[2]===true) return; 
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombPion')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombTour')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombFou')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombRe')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombRoi')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombPion2')===true) return; 
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombTour2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombCav2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombFou2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombRe2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombPion2')===true) return; 
      countB1++;  
      var posB = $('.'+this.pos.x+'-'+this.pos.y).addClass('bombCav');
      var posB1x = this.pos.x+1; var posB1y = this.pos.y; var posB1 = $('.'+posB1x+'-'+posB1y); 
      var posB2x = this.pos.x-1; var posB2y = this.pos.y; var posB2 = $('.'+posB2x+'-'+posB2y);  
      var posB3x = this.pos.x; var posB3y = this.pos.y+1; var posB3 = $('.'+posB3x+'-'+posB3y); 
      var posB4x = this.pos.x; var posB4y = this.pos.y-1; var posB4 = $('.'+posB4x+'-'+posB4y);
      var posB11x = this.pos.x+1; var posB11y = this.pos.y+1; var posB11 = $('.'+posB11x+'-'+posB11y); 
      var posB21x = this.pos.x-1; var posB21y = this.pos.y-1; var posB21 = $('.'+posB21x+'-'+posB21y);  
      var posB31x = this.pos.x-1; var posB31y = this.pos.y+1; var posB31 = $('.'+posB31x+'-'+posB31y); 
      var posB41x = this.pos.x+1; var posB41y = this.pos.y-1; var posB41 = $('.'+posB41x+'-'+posB41y);  
      var posB12x = this.pos.x-2; var posB12y = this.pos.y; var posB12 = $('.'+posB12x+'-'+posB12y); 
      var posB22x = this.pos.x-2; var posB22y = this.pos.y-1; var posB22 = $('.'+posB22x+'-'+posB22y);  
      var posB32x = this.pos.x-2; var posB32y = this.pos.y+1; var posB32 = $('.'+posB32x+'-'+posB32y); 
      var posB13x = this.pos.x+2; var posB13y = this.pos.y; var posB13 = $('.'+posB13x+'-'+posB13y); 
      var posB23x = this.pos.x+2; var posB23y = this.pos.y-1; var posB23 = $('.'+posB23x+'-'+posB23y);  
      var posB33x = this.pos.x+2; var posB33y = this.pos.y+1; var posB33 = $('.'+posB33x+'-'+posB33y);
      var posB14x = this.pos.x; var posB14y = this.pos.y+2; var posB14 = $('.'+posB14x+'-'+posB14y); 
      var posB24x = this.pos.x-1; var posB24y = this.pos.y+2; var posB24 = $('.'+posB24x+'-'+posB24y);  
      var posB34x = this.pos.x+1; var posB34y = this.pos.y+2; var posB34 = $('.'+posB34x+'-'+posB34y);
      var posB15x = this.pos.x; var posB15y = this.pos.y-2; var posB15 = $('.'+posB15x+'-'+posB15y); 
      var posB25x = this.pos.x-1; var posB25y = this.pos.y-2; var posB25 = $('.'+posB25x+'-'+posB25y);  
      var posB35x = this.pos.x+1; var posB35y = this.pos.y-2; var posB35 = $('.'+posB35x+'-'+posB35y);
      function ExCav() {
        timerCav=99;timeCav.style.backgroundColor='orange';
        $('table tr td.bombCav').removeClass('bombCav');  
        $(posB).addClass('explosion');       
        if (Math.random() >=0.7) {$(posB1).addClass('explosion')};if (Math.random() >=0.7) {$(posB2).addClass('explosion')};if (Math.random() >=0.7) {$(posB3).addClass('explosion')};if (Math.random() >=0.7) {$(posB4).addClass('explosion')};if (Math.random() >=0.7) {$(posB11).addClass('explosion')};if (Math.random() >=0.7) {$(posB21).addClass('explosion')};if (Math.random() >=0.7) {$(posB31).addClass('explosion')};if (Math.random() >=0.7) {$(posB41).addClass('explosion')}; if (Math.random() >=0.7) {$(posB12).addClass('explosion')};if (Math.random() >=0.7) {$(posB22).addClass('explosion')};if (Math.random() >=0.7) {$(posB32).addClass('explosion')};if (Math.random() >=0.7) {$(posB13).addClass('explosion')};if (Math.random() >=0.7) {$(posB23).addClass('explosion')};if (Math.random() >=0.7) {$(posB33).addClass('explosion')};if (Math.random() >=0.7) {$(posB14).addClass('explosion')};if (Math.random() >=0.7) {$(posB24).addClass('explosion')};if (Math.random() >=0.7) {$(posB34).addClass('explosion')};if (Math.random() >=0.7) {$(posB15).addClass('explosion')};if (Math.random() >=0.7) {$(posB25).addClass('explosion')};if (Math.random() >=0.7) {$(posB35).addClass('explosion')};
        setTimeout(function() { 
          timerCav=100;timeCav.style.backgroundColor='cyan';                  
          $('table tr td.explosion').removeClass('explosion');
          $('img.P1b3').css('background-color', '#C775FE');
          countB1--;
          self.tab.bombs[2] = false
        }, 600);
      }      
      $('img.P1b3').css('background-color', 'red');
      this.tab.bombs[2] = true;
      timerCav=0;timeCav.style.backgroundColor='red';
      setTimeout(function() { timerCav=20; }, 1000); 
      setTimeout(function() { timerCav=40; }, 2000);
      setTimeout(function() { timerCav=60; }, 3000);
      setTimeout(function() { timerCav=80; }, 4000);
      setTimeout(function() { ExCav(); }, 5000);   
    },
    bombFou: function(x,y) {
      if (this.tab.bombs[3]===true) return;  
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombPion')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombCav')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombTour')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombRe')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombRoi')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombPion2')===true) return; 
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombTour2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombCav2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombFou2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombRe2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombPion2')===true) return; 
      countB1++; 
      var posB = $('.'+this.pos.x+'-'+this.pos.y).addClass('bombFou');
      var posBy= this.pos.y;
      var posBx= this.pos.x;
      function ExFou() {
        timerFou=98;timeFou.style.backgroundColor='orange';
        $('table tr td.bombFou').removeClass('bombFou');
        $(posB).addClass('explosion');
        add_class_to_array('explosion', get_explosion_diagonal(posBx,posBy));
        setTimeout(function() {  
          timerFou=100;timeFou.style.backgroundColor='cyan';              
         
          $('img.P1b4').css('background-color', '#C775FE');
          countB1--;
          self.tab.bombs[3] = false
        }, 600);
      }
      $('img.P1b4').css('background-color', 'red');
      this.tab.bombs[3] = true;
      timerFou=0;timeFou.style.backgroundColor='red';
      setTimeout(function() { timerFou=14; }, 1000); 
      setTimeout(function() { timerFou=28; }, 2000); 
      setTimeout(function() { timerFou=42; }, 3000);
      setTimeout(function() { timerFou=56; }, 4000);
      setTimeout(function() { timerFou=70; }, 5000);
      setTimeout(function() { timerFou=84; }, 6000);
      setTimeout(function() { ExFou(); }, 7000);   
    }, 
    bombRe: function(x,y) {
      if (this.tab.bombs[4]===true) return;  
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombPion')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombCav')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombFou')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombTour')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombRoi')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombPion2')===true) return; 
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombTour2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombCav2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombFou2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombRe2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombPion2')===true) return; 
      if (countB1 === 0 || countB1 === 1) {
        countB1++;countB1++;
        var posB = $('.'+this.pos.x+'-'+this.pos.y).addClass('bombRe');
        var posBy= this.pos.y;
        var posBx= this.pos.x;
        function ExRenne() {
          timerRenne=98;timeRenne.style.backgroundColor='orange';
          $('table tr td.bombRe').removeClass('bombRe'); 
          $(posB).addClass('explosion');
          add_class_to_array('explosion', get_explosion_vertical(posBx,posBy));
          add_class_to_array('explosion', get_explosion_horizontal(posBx,posBy)); 
          add_class_to_array('explosion', get_explosion_diagonal(posBx,posBy));      
          setTimeout(function() {  
            timerRenne=100;timeRenne.style.backgroundColor='cyan';                
            $('table tr td.explosion').removeClass('explosion');
            $('img.P1b5').css('background-color', '#C775FE');
            countB1--;countB1--;
            self.tab.bombs[4] = false
          }, 600);
        }
        $('img.P1b5').css('background-color', 'red');
        this.tab.bombs[4] = true;
        timerRenne=0;timeRenne.style.backgroundColor='red';
        setTimeout(function() { timerRenne=14; }, 1000); 
        setTimeout(function() { timerRenne=28; }, 2000); 
        setTimeout(function() { timerRenne=42; }, 3000);
        setTimeout(function() { timerRenne=56; }, 4000);
        setTimeout(function() { timerRenne=70; }, 5000);
        setTimeout(function() { timerRenne=84; }, 6000);
        setTimeout(function() { ExRenne(); }, 7000);   
      }
    },
    bombRoi: function(x,y) {
      if (this.tab.bombs[5]===true) return; 
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombPion')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombCav')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombFou')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombRe')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombTour')===true) return; 
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombPion2')===true) return; 
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombTour2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombCav2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombFou2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombRe2')===true) return;
      if ($('.'+this.pos.x+'-'+this.pos.y).hasClass('bombPion2')===true) return; 
      if (Roi_on_off === 0) {
        $('.'+this.pos.x+'-'+this.pos.y).addClass('bombRoi');
        posBy= this.pos.y;
        posBx= this.pos.x; 
        countB1++;
        $('img.P1b6').css('background-color', 'red'); 
        Roi_on_off++;
        return;
      }else if (Roi_on_off === 1) {
        this.tab.bombs[5] = true;
        $('.bombRoi').addClass('explosion');
        add_class_to_array('explosion', get_explosion_square(posBx, posBy)); 
        setTimeout(function() { 
          $('table tr td.bombRoi').removeClass('bombRoi');                
          $('table tr td.explosion').removeClass('explosion');
          $('img.P1b6').css('background-color', '#C775FE');
          countB1--;
          self.tab.bombs[5] = false
        }, 600);
        Roi_on_off--;
        return;
      }   
    }, 
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                                                      PLAYER  2    BOMBS                                               //
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    bombPion2: function(x,y) {
      if (this.tab.bombs2[0]===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombPion')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombTour')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombCav')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombFou')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRe')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRoi')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombTour2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombCav2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombFou2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRe2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRoi2')===true) return;    
      countB2++;    
      var pos2B = $('.'+this.pos2.x+'-'+this.pos2.y).addClass('bombPion2'); 
      var pos2B1x = this.pos2.x+1; var pos2B1y = this.pos2.y; var pos2B1 = $('.'+pos2B1x+'-'+pos2B1y); 
      var pos2B2x = this.pos2.x-1; var pos2B2y = this.pos2.y; var pos2B2 = $('.'+pos2B2x+'-'+pos2B2y);  
      var pos2B3x = this.pos2.x; var pos2B3y = this.pos2.y+1; var pos2B3 = $('.'+pos2B3x+'-'+pos2B3y); 
      var pos2B4x = this.pos2.x; var pos2B4y = this.pos2.y-1; var pos2B4 = $('.'+pos2B4x+'-'+pos2B4y);
      function ExPion2() {
        timerPion2=99;timePion2.style.backgroundColor='orange';
        $('table tr td.bombPion2').removeClass('bombPion2');  
        $(pos2B).addClass('explosion');$(pos2B1).addClass('explosion');$(pos2B2).addClass('explosion');$(pos2B3).addClass('explosion');$(pos2B4).addClass('explosion');
        setTimeout(function() {    
          timerPion2=100;timePion2.style.backgroundColor='cyan';
          $('table tr td.explosion').removeClass('explosion'); 
          $('img.P2b1').css('background-color', '#FDAD46');  
          countB2--;
          self.tab.bombs2[0] = false;           
        }, 600);      
      }
      $('img.P2b1').css('background-color', 'red');
      this.tab.bombs2[0] = true; 
      timerPion2=0;timePion2.style.backgroundColor='red';
      setTimeout(function() { timerPion2=33; }, 1000); 
      setTimeout(function() { timerPion2=66; }, 2000);                          
      setTimeout(function() { ExPion2(); }, 3000);    
    },
    bombTour2: function(x,y) {
      if (this.tab.bombs2[1]===true) return; 
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombPion')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombTour')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombCav')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombFou')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRe')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRoi')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombPion2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombCav2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombFou2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRe2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRoi2')===true) return;  
      countB2++;     
      var pos2B = $('.'+this.pos2.x+'-'+this.pos2.y).addClass('bombTour2');
      var posB2y= this.pos2.y;
      var posB2x= this.pos2.x;
      function ExTour2() {
        timerTour2=98;timeTour2.style.backgroundColor='orange';
        $('table tr td.bombTour2').removeClass('bombTour2');                 
        add_class_to_array('explosion', get_explosion_vertical(posB2x,posB2y));
        add_class_to_array('explosion', get_explosion_horizontal(posB2x,posB2y));              
        setTimeout(function() { 
          timerTour2=100;timeTour2.style.backgroundColor='cyan';                 
          $('table tr td.explosion').removeClass('explosion');
          $('img.P2b2').css('background-color', '#FDAD46');
          countB2--;
          self.tab.bombs2[1] = false;
        }, 600);
      }
      $('img.P2b2').css('background-color', 'red'); 
      this.tab.bombs2[1] = true; 
      timerTour2=0;timeTour2.style.backgroundColor='red';
      setTimeout(function() { timerTour2=14; }, 1000); 
      setTimeout(function() { timerTour2=28; }, 2000); 
      setTimeout(function() { timerTour2=42; }, 3000);
      setTimeout(function() { timerTour2=56; }, 4000);
      setTimeout(function() { timerTour2=70; }, 5000);
      setTimeout(function() { timerTour2=84; }, 6000);
      setTimeout(function() { ExTour2(); }, 7000);
    }, 
    bombCav2: function(x,y) {
      if (this.tab.bombs2[2]===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombPion')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombTour')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombCav')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombFou')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRe')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRoi')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombTour2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombPion2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombFou2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRe2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRoi2')===true) return;   
      countB2++;     
      var pos2B = $('.'+this.pos2.x+'-'+this.pos2.y).addClass('bombCav2');
      var pos2B1x = this.pos2.x+1; var pos2B1y = this.pos2.y; var pos2B1 = $('.'+pos2B1x+'-'+pos2B1y); 
      var pos2B2x = this.pos2.x-1; var pos2B2y = this.pos2.y; var pos2B2 = $('.'+pos2B2x+'-'+pos2B2y);  
      var pos2B3x = this.pos2.x; var pos2B3y = this.pos2.y+1; var pos2B3 = $('.'+pos2B3x+'-'+pos2B3y); 
      var pos2B4x = this.pos2.x; var pos2B4y = this.pos2.y-1; var pos2B4 = $('.'+pos2B4x+'-'+pos2B4y);
      var pos2B11x = this.pos2.x+1; var pos2B11y = this.pos2.y+1; var pos2B11 = $('.'+pos2B11x+'-'+pos2B11y); 
      var pos2B21x = this.pos2.x-1; var pos2B21y = this.pos2.y-1; var pos2B21 = $('.'+pos2B21x+'-'+pos2B21y);  
      var pos2B31x = this.pos2.x-1; var pos2B31y = this.pos2.y+1; var pos2B31 = $('.'+pos2B31x+'-'+pos2B31y); 
      var pos2B41x = this.pos2.x+1; var pos2B41y = this.pos2.y-1; var pos2B41 = $('.'+pos2B41x+'-'+pos2B41y);  
      var pos2B12x = this.pos2.x-2; var pos2B12y = this.pos2.y; var pos2B12 = $('.'+pos2B12x+'-'+pos2B12y); 
      var pos2B22x = this.pos2.x-2; var pos2B22y = this.pos2.y-1; var pos2B22 = $('.'+pos2B22x+'-'+pos2B22y);  
      var pos2B32x = this.pos2.x-2; var pos2B32y = this.pos2.y+1; var pos2B32 = $('.'+pos2B32x+'-'+pos2B32y); 
      var pos2B13x = this.pos2.x+2; var pos2B13y = this.pos2.y; var pos2B13 = $('.'+pos2B13x+'-'+pos2B13y); 
      var pos2B23x = this.pos2.x+2; var pos2B23y = this.pos2.y-1; var pos2B23 = $('.'+pos2B23x+'-'+pos2B23y);  
      var pos2B33x = this.pos2.x+2; var pos2B33y = this.pos2.y+1; var pos2B33 = $('.'+pos2B33x+'-'+pos2B33y);
      var pos2B14x = this.pos2.x; var pos2B14y = this.pos2.y+2; var pos2B14 = $('.'+pos2B14x+'-'+pos2B14y); 
      var pos2B24x = this.pos2.x-1; var pos2B24y = this.pos2.y+2; var pos2B24 = $('.'+pos2B24x+'-'+pos2B24y);  
      var pos2B34x = this.pos2.x+1; var pos2B34y = this.pos2.y+2; var pos2B34 = $('.'+pos2B34x+'-'+pos2B34y);
      var pos2B15x = this.pos2.x; var pos2B15y = this.pos2.y-2; var pos2B15 = $('.'+pos2B15x+'-'+pos2B15y); 
      var pos2B25x = this.pos2.x-1; var pos2B25y = this.pos2.y-2; var pos2B25 = $('.'+pos2B25x+'-'+pos2B25y);  
      var pos2B35x = this.pos2.x+1; var pos2B35y = this.pos2.y-2; var pos2B35 = $('.'+pos2B35x+'-'+pos2B35y);
      function ExCav2() {
        timerCav2=99;timeCav2.style.backgroundColor='orange';
        $('table tr td.bombCav2').removeClass('bombCav2'); 
        $(pos2B).addClass('explosion');       
        if (Math.random() >=0.7) {$(pos2B1).addClass('explosion')};if (Math.random() >=0.7) {$(pos2B2).addClass('explosion')};if (Math.random() >=0.7) {$(pos2B3).addClass('explosion')};if (Math.random() >=0.7) {$(pos2B4).addClass('explosion')};if (Math.random() >=0.7) {$(pos2B11).addClass('explosion')};if (Math.random() >=0.7) {$(pos2B21).addClass('explosion')};if (Math.random() >=0.7) {$(pos2B31).addClass('explosion')};if (Math.random() >=0.7) {$(pos2B41).addClass('explosion')}; if (Math.random() >=0.7) {$(pos2B12).addClass('explosion')};if (Math.random() >=0.7) {$(pos2B22).addClass('explosion')};if (Math.random() >=0.7) {$(pos2B32).addClass('explosion')};if (Math.random() >=0.7) {$(pos2B13).addClass('explosion')};if (Math.random() >=0.7) {$(pos2B23).addClass('explosion')};if (Math.random() >=0.7) {$(pos2B33).addClass('explosion')};if (Math.random() >=0.7) {$(pos2B14).addClass('explosion')};if (Math.random() >=0.7) {$(pos2B24).addClass('explosion')};if (Math.random() >=0.7) {$(pos2B34).addClass('explosion')};if (Math.random() >=0.7) {$(pos2B15).addClass('explosion')};if (Math.random() >=0.7) {$(pos2B25).addClass('explosion')};if (Math.random() >=0.7) {$(pos2B35).addClass('explosion')};
        setTimeout(function() { 
          timerCav2=100;timeCav2.style.backgroundColor='cyan';                  
          $('table tr td.explosion').removeClass('explosion');
          $('img.P2b3').css('background-color', '#FDAD46');
          countB2--;
          self.tab.bombs2[2] = false;
        }, 600);
      }
      $('img.P2b3').css('background-color', 'red');
      this.tab.bombs2[2] = true; 
      timerCav2=0;timeCav2.style.backgroundColor='red';
      setTimeout(function() { timerCav2=20; }, 1000); 
      setTimeout(function() { timerCav2=40; }, 2000);
      setTimeout(function() { timerCav2=60; }, 3000);
      setTimeout(function() { timerCav2=80; }, 4000);
      setTimeout(function() { ExCav2(); }, 5000);
    },
    bombFou2: function(x,y) {
      if (this.tab.bombs2[3]===true) return; 
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombPion')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombTour')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombCav')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombFou')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRe')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRoi')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombTour2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombCav2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombPion2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRe2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRoi2')===true) return;  
      countB2++;     
      var pos2B = $('.'+this.pos2.x+'-'+this.pos2.y).addClass('bombFou2');
      var posB2y= this.pos2.y;
      var posB2x= this.pos2.x;
      function ExFou2() {
        timerFou2=98;timeFou2.style.backgroundColor='orange';
        $('table tr td.bombFou2').removeClass('bombFou2'); 
        $(pos2B).addClass('explosion');
        add_class_to_array('explosion', get_explosion_diagonal(posB2x,posB2y));
        setTimeout(function() {  
          timerFou2=100;timeFou2.style.backgroundColor='cyan';              
          $('table tr td.explosion').removeClass('explosion');
          $('img.P2b4').css('background-color', '#FDAD46');
          countB2--;
          self.tab.bombs2[3] = false;
        }, 600);
      }
      $('img.P2b4').css('background-color', 'red');
      this.tab.bombs2[3] = true;
      timerFou2=0;timeFou2.style.backgroundColor='red';
      setTimeout(function() { timerFou2=14; }, 1000); 
      setTimeout(function() { timerFou2=28; }, 2000); 
      setTimeout(function() { timerFou2=42; }, 3000);
      setTimeout(function() { timerFou2=56; }, 4000);
      setTimeout(function() { timerFou2=70; }, 5000);
      setTimeout(function() { timerFou2=84; }, 6000); 
      setTimeout(function() { ExFou2(); }, 7000);
    }, 
    bombRe2: function(x,y) {
      if (this.tab.bombs2[4]===true) return; 
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombPion')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombTour')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombCav')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombFou')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRe')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRoi')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombTour2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombCav2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombFou2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombPion2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRoi2')===true) return;  
      if (countB2 === 0 || countB2 === 1) {
        countB2++;countB2++;    
        var pos2B = $('.'+this.pos2.x+'-'+this.pos2.y).addClass('bombRe2');
        var posB2y= this.pos2.y;
        var posB2x= this.pos2.x;
        function ExRenne2() {
          timerRenne2=98;timeRenne2.style.backgroundColor='orange';
          $('table tr td.bombRe2').removeClass('bombRe2'); 
          $(pos2B).addClass('explosion');
          add_class_to_array('explosion', get_explosion_vertical(posB2x,posB2y));
          add_class_to_array('explosion', get_explosion_horizontal(posB2x,posB2y));  
          add_class_to_array('explosion', get_explosion_diagonal(posB2x,posB2y));     
          setTimeout(function() { 
            timerRenne2=100;timeRenne2.style.backgroundColor='cyan';                  
            $('table tr td.explosion').removeClass('explosion');
            $('img.P2b5').css('background-color', '#FDAD46');
            countB2--;countB2--;
            self.tab.bombs2[4] = false;
          }, 600);
        }
        $('img.P2b5').css('background-color', 'red');
        this.tab.bombs2[4] = true; 
        timerRenne2=0;timeRenne2.style.backgroundColor='red';
        setTimeout(function() { timerRenne2=14; }, 1000); 
        setTimeout(function() { timerRenne2=28; }, 2000); 
        setTimeout(function() { timerRenne2=42; }, 3000);
        setTimeout(function() { timerRenne2=56; }, 4000);
        setTimeout(function() { timerRenne2=70; }, 5000);
        setTimeout(function() { timerRenne2=84; }, 6000);
        setTimeout(function() { ExRenne2(); }, 7000);
      }
    },
    bombRoi2: function(x,y) {
      if (this.tab.bombs2[5]===true) return; 
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombPion')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombTour')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombCav')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombFou')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRe')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRoi')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombTour2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombCav2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombFou2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombRe2')===true) return;
      if ($('.'+this.pos2.x+'-'+this.pos2.y).hasClass('bombPion2')===true) return;  
      if (Roi2_on_off === 0) {
        $('.'+this.pos2.x+'-'+this.pos2.y).addClass('bombRoi2');
        posB2y= this.pos2.y;
        posB2x= this.pos2.x;
        countB2++;
        $('img.P2b6').css('background-color', 'red');
        Roi2_on_off++;
        return;
      }else  if (Roi2_on_off === 1) {
        this.tab.bombs2[5] = true;
        $('.bombRoi2').addClass('explosion');
        add_class_to_array('explosion', get_explosion_square(posB2x, posB2y)); 
        setTimeout(function() {       
          $('table tr td.bombRoi2').removeClass('bombRoi2');        
          $('table tr td.explosion').removeClass('explosion');
          $('img.P2b6').css('background-color', '#FDAD46');
          countB2--; 
          self.tab.bombs2[5] = false;
        }, 600); 
        Roi2_on_off--;
        return;
      }  
    }, 
  }

  function refr() {
    document.getElementById("timePion").innerHTML = timerPion;
    document.getElementById("timeTour").innerHTML = timerTour;
    document.getElementById("timeCav").innerHTML = timerCav;
    document.getElementById("timeFou").innerHTML = timerFou;
    document.getElementById("timeRenne").innerHTML = timerRenne;
    document.getElementById("timePion2").innerHTML = timerPion2;
    document.getElementById("timeTour2").innerHTML = timerTour2;
    document.getElementById("timeCav2").innerHTML = timerCav2;
    document.getElementById("timeFou2").innerHTML = timerFou2;
    document.getElementById("timeRenne2").innerHTML = timerRenne2;

    timePion.style.width = timerPion+'%';
    timeTour.style.width = timerTour+'%';
    timeCav.style.width = timerCav+'%';
    timeFou.style.width = timerFou+'%';
    timeRenne.style.width = timerRenne+'%';
    timePion2.style.width = timerPion2+'%';
    timeTour2.style.width = timerTour2+'%';
    timeCav2.style.width = timerCav2+'%';
    timeFou2.style.width = timerFou2+'%';
    timeRenne2.style.width = timerRenne2+'%';
  
  }
  setInterval(refr, 10);
  setInterval(engine.vie, 50);
  setInterval(engine.vie2, 50);
  setInterval(function() {
      pxgamepad.update();
  },25);window.PxGamepad = PxGamepad;

  var self = engine;






  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                                MANETTE                                                //
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  function PxGamepad() {

    // map button indices to names
    this.buttonNames = [
        'a',
        'b',
        'x',
        'y',
        'leftTop',
        'rightTop',
        'leftTrigger',
        'rightTrigger',
        'select',
        'start',
        'leftStick',
        'rightStick',
        'dpadUp',
        'dpadDown',
        'dpadLeft',
        'dpadRight'
    ];

    // callbacks for buton up listeners
    this.callbacks = {};

    // some browsers use an event to provide the gamepad when connected
    this.connectedGamepad = null;

    this.reset();
}

// reset button and stick state
PxGamepad.prototype.reset = function() {
    this.leftStick = { x: 0, y: 0 };
    this.rightStick = { x: 0, y: 0 };
    this.dpad = { x: 0, y: 0 };
    this.buttons = {};
};

// start listening for gamepad connection events
PxGamepad.prototype.start = function() {

    this.reset();

    this.listeners = {
        'gamepadconnected': jQuery.proxy(function(e) {
            var gamepad = e.originalEvent.gamepad;
            if (gamepad.mapping === 'standard') {
                this.connectedGamepad = gamepad;
            }
        }),
        'gamepaddisconnected': jQuery.proxy(function(e) {
            var gamepad = e.originalEvent.gamepad;
            if (this.connectedGamepad === gamepad) {
                this.connectedGamepad = null;
            }
        })
    };

    jQuery(window).on(this.listeners);
};

// stop listening to gamepad connection events
PxGamepad.prototype.stop = function() {
    jQuery(window).off(this.listeners);
    this.connectedGamepad = null;
};

// listen to button up events
PxGamepad.prototype.on = function(buttonName, callback) {
    var buttonCallbacks = this.callbacks[buttonName];
    if (!buttonCallbacks) {
        this.callbacks[buttonName] = [ callback ];
    } else {
        buttonCallbacks.push(callback);
    }
};

// remove button up event listeners
PxGamepad.prototype.off = function(buttonName, callback) {
    var buttonCallbacks = this.callbacks[buttonName];
    if (buttonCallbacks) {
        if (!callback) {
            // remove all callbacks
            this.callbacks = [];
        } else {
            // search for specified callback
            var callbackIndex = buttonCallbacks.indexOf(callback);
            if (callbackIndex >= 0) {
                buttonCallbacks.splice(callbackIndex, 1);
            }
        }
    }
};

function buttonPressed(gamepad, index) {

    if (!gamepad || !gamepad.buttons || index >= gamepad.buttons.length) {
        return false;
    }

    var b = gamepad.buttons[index];
    if (!b) {
        return false;
    }

    if (typeof(b) === "object") {
        return b.pressed;
    }

    return (b === 1.0);
}

// helper to retrieve the currently connected gamepad
PxGamepad.prototype.getGamepad = function() {
    
    // default to connected gamepad
    var gp = this.connectedGamepad;
    if (gp) {
        return gp;
    }
    
    // fetch all available gamepads
    var gamepads;
    if (navigator.getGamepads) {
        gamepads = navigator.getGamepads();
    } else if (navigator.webkitGetGamepads) {
        gamepads = navigator.webkitGetGamepads();    
    }

    // look for a standard mapped gamepad
    if (gamepads) {
        for (var i = 0, len = gamepads.length; i < len; i++) {
            gp = gamepads[i];
            if (gp && gp.mapping === 'standard') {
                return gp;
            }
        }
    }

    return null;
};

// should be called during each frame update
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
    this.leftStick.x = gp.axes[83];
    this.leftStick.y = gp.axes[1];
    this.rightStick.x = gp.axes[2];
    this.rightStick.y = gp.axes[3];

    // dpad isn't a true stick, infer from buttons
    this.dpad.x = (this.buttons.dpadLeft ? -1 : 0) + (this.buttons.dpadRight ? 1 : 0);
    this.dpad.y = (this.buttons.dpadUp ? -1 : 0) + (this.buttons.dpadDown ? 1 : 0);

  };    
  var pxgamepad = new PxGamepad(); 

  pxgamepad.start();

  // var timeLaunch = 10;
  // document.getElementById("compteur").innerHTML = timeLaunch;
  // setTimeout(function() { timeLaunch = 9; document.getElementById("compteur").innerHTML = timeLaunch; }, 1000);
  // setTimeout(function() { timeLaunch = 8; document.getElementById("compteur").innerHTML = timeLaunch;}, 2000);
  // setTimeout(function() { timeLaunch = 7; document.getElementById("compteur").innerHTML = timeLaunch;}, 3000);
  // setTimeout(function() { timeLaunch = 6; document.getElementById("compteur").innerHTML = timeLaunch;}, 4000);
  // setTimeout(function() { timeLaunch = 5; document.getElementById("compteur").innerHTML = timeLaunch;}, 5000);
  // setTimeout(function() { timeLaunch = 4; document.getElementById("compteur").innerHTML = timeLaunch;}, 6000);
  // setTimeout(function() { timeLaunch = 3; document.getElementById("compteur").innerHTML = timeLaunch;}, 7000);
  // setTimeout(function() { timeLaunch = 2; document.getElementById("compteur").innerHTML = timeLaunch;}, 8000);
  // setTimeout(function() { timeLaunch = 1; document.getElementById("compteur").innerHTML = timeLaunch;}, 9000);
  // setTimeout(function() { $('.sup').css('display', 'none'); engine._init(); }, 10000); // LANCEMENT DU GAME
  engine._init();
}).call();  // pour tel, lol nan je dec