/**
 *------
 * BGA framework: © Gregory Isabelli <gisabelli@boardgamearena.com> & Emmanuel Colin <ecolin@boardgamearena.com>
 * martiandice implementation : © Christopher Pierce <chrisjpierce@gmail.com>
 *
 * This code has been produced on the BGA studio platform for use on http://boardgamearena.com.
 * See http://en.boardgamearena.com/#!doc/Studio for more information.
 * -----
 *
 * martiandice.js
 *
 * martiandice user interface script
 * 
 * In this file, you are describing the logic of your user interface, in Javascript language.
 *
 */

define([
    "dojo","dojo/_base/declare",
    "ebg/core/gamegui",
    "ebg/counter",
    "ebg/stock"
    ],
function (dojo, declare) {
    return declare("bgagame.martiandice", ebg.core.gamegui, {
        constructor: function(){
            console.log('martiandice constructor');

            // Here, you can init the global variables of your user interface
            // Example:
            // this.myGlobalValue = 0;
            this.diewidth = 60;
            this.dieheight = 60;

        },
        
        /*
            setup:
            
            This method must set up the game user interface according to current game situation specified
            in parameters.
            
            The method is called each time the game interface is displayed to a player, ie:
            _ when the game starts
            _ when a player refreshes the game page (F5)
            
            "gamedatas" argument contains all datas retrieved by your "getAllDatas" PHP method.
        */
        
        setup: function( gamedatas )
        {
            console.log( "Starting game setup" );

            // Zone setup
            // Zone control
            // Player hand
            // this.cows = new ebg.stock();
            // this.cows.create( this, $('cows'), this.diewidth, this.dieheight );
            // this.humans = new ebg.stock();
            // this.humans.create( this, $('humans'), this.diewidth, this.dieheight );
            // this.chickens = new ebg.stock();
            // this.chickens.create( this, $('chickens'), this.diewidth, this.dieheight );
            // this.tanks = new ebg.stock();
            // this.tanks.create( this, $('tanks'), this.diewidth, this.dieheight );
            // this.deathRays = new ebg.stock();
            // this.deathRays.create( this, $('death_rays'), this.diewidth, this.dieheight );
            // this.diceTray = new ebg.stock();
            // this.diceTray.create( this, $('dice_tray'), this.diewidth, this.dieheight );
            
            // Setting up player boards
            for( var player_id in gamedatas.players )
            {
                var player = gamedatas.players[player_id];
                         
                // TODO: Setting up players boards if needed
            }
            
            // TODO: Set up your game interface here, according to "gamedatas"
            dojo.query( '#rollDice' ).connect( 'onclick', this, 'rollDice' );
            dojo.query('#pass').connect('onclick', this, 'pass' );
 
            // Setup game notifications to handle (see "setupNotifications" method below)
            this.setupNotifications();

            console.log( "Ending game setup" );
        },
       

        ///////////////////////////////////////////////////
        //// Game & client states
        
        // onEnteringState: this method is called each time we are entering into a new game state.
        //                  You can use this method to perform some user interface changes at this moment.
        //
        onEnteringState: function( stateName, args )
        {
            console.log( 'Entering state: '+stateName );
            
            switch( stateName )
            {
            
            /* Example:
            
            case 'myGameState':
            
                // Show some HTML block at this game state
                dojo.style( 'my_html_block_id', 'display', 'block' );
                
                break;
           */
           
           
            case 'dummmy':
                break;
            }
        },

        // onLeavingState: this method is called each time we are leaving a game state.
        //                 You can use this method to perform some user interface changes at this moment.
        //
        onLeavingState: function( stateName )
        {
            console.log( 'Leaving state: '+stateName );
            
            switch( stateName )
            {
            
            /* Example:
            
            case 'myGameState':
            
                // Hide the HTML block we are displaying only during this game state
                dojo.style( 'my_html_block_id', 'display', 'none' );
                
                break;
           */
           
           
            case 'dummmy':
                break;
            }               
        }, 

        // onUpdateActionButtons: in this method you can manage "action buttons" that are displayed in the
        //                        action status bar (ie: the HTML links in the status bar).
        //        
        onUpdateActionButtons: function( stateName, args )
        {
            console.log( 'onUpdateActionButtons: '+stateName );
                      
            if( this.isCurrentPlayerActive() )
            {            
                switch( stateName )
                {
/*               
                 Example:
 
                 case 'myGameState':
                    
                    // Add 3 action buttons in the action status bar:
                    
                    this.addActionButton( 'button_1_id', _('Button 1 label'), 'onMyMethodToCall1' ); 
                    this.addActionButton( 'button_2_id', _('Button 2 label'), 'onMyMethodToCall2' ); 
                    this.addActionButton( 'button_3_id', _('Button 3 label'), 'onMyMethodToCall3' ); 
                    break;
*/
                }
            }
        },        

        ///////////////////////////////////////////////////
        //// Utility methods
        
        /*
        
            Here, you can defines some utility methods that you can use everywhere in your javascript
            script.
        
        */


        ///////////////////////////////////////////////////
        //// Player's action
        
        /*
        
            Here, you are defining methods to handle player's action (ex: results of mouse click on 
            game objects).
            
            Most of the time, these methods:
            _ check the action is possible at this game state.
            _ make a call to the game server
        
        */

        rollDice: function( evt ) {
            console.log("rollDice called.");
            if (this.checkAction('rollDice'))    // Check that this action is possible at this moment
            {
                console.log("rollDice action is allowed")
                let cubes = document.querySelectorAll('.cube');
                console.log("there are this many cubes: ", cubes.length);
                this.ajaxcall("/martiandice/martiandice/rollDice.html", {
                    numDice: cubes.length
                }, this, function (result) {

                });

            }


        },

        pass: function( evt ) {
            console.log("pass called");
            if (this.checkAction('pass')) {
                console.log("pass action is allowed");
                this.ajaxcall("martiandice/martiandice/pass.html", {

                }, this, function(result) {});
            }
        },

        /* Example:
        
        onMyMethodToCall1: function( evt )
        {
            console.log( 'onMyMethodToCall1' );
            
            // Preventing default browser reaction
            dojo.stopEvent( evt );

            // Check that this action is possible (see "possibleactions" in states.inc.php)
            if( ! this.checkAction( 'myAction' ) )
            {   return; }

            this.ajaxcall( "/martiandice/martiandice/myAction.html", { 
                                                                    lock: true, 
                                                                    myArgument1: arg1, 
                                                                    myArgument2: arg2,
                                                                    ...
                                                                 }, 
                         this, function( result ) {
                            
                            // What to do after the server call if it succeeded
                            // (most of the time: nothing)
                            
                         }, function( is_error) {

                            // What to do after the server call in anyway (success or failure)
                            // (most of the time: nothing)

                         } );        
        },        
        
        */

        
        ///////////////////////////////////////////////////
        //// Reaction to cometD notifications

        /*
            setupNotifications:
            
            In this method, you associate each of your game notifications with your local method to handle it.
            
            Note: game notification names correspond to "notifyAllPlayers" and "notifyPlayer" calls in
                  your martiandice.game.php file.
        
        */
        setupNotifications: function()
        {
            console.log( 'notifications subscriptions setup' );
            
            // TODO: here, associate your game notifications with local methods
            dojo.subscribe( 'rollDice', this, "notif_rollDice" );
            dojo.subscribe('pass', this, "notif_pass");
            
            // Example 1: standard notification handling
            // dojo.subscribe( 'cardPlayed', this, "notif_cardPlayed" );
            
            // Example 2: standard notification handling + tell the user interface to wait
            //            during 3 seconds after calling the method in order to let the players
            //            see what is happening in the game.
            // dojo.subscribe( 'cardPlayed', this, "notif_cardPlayed" );
            // this.notifqueue.setSynchronous( 'cardPlayed', 3000 );
            // 
        },  
        
        // TODO: from this point and below, you can write your game notifications handling methods

        notif_rollDice: function( notif ) {
            console.log( 'notif_rollDice' );
            console.log( notif );
            let cubes = document.querySelectorAll('.cube');
            const rollValues = notif.args.rtnArray;
            const player_id = notif.args.player_id;
            const points_scored = notif.args.points_scored;
            this.scoreCtrl[player_id].incValue( points_scored )
            console.log("rolled values are ", rollValues);
            cubes.forEach(function (cube, index) {
                cube.classList.forEach(className => {
                    if (className.startsWith('show-')) {
                        cube.classList.remove(className);
                    }
                })
                // let rollValue = Math.floor(Math.random() * 6) + 1;
                cube.classList.add('show-' + rollValues[index]);
            });
        },

        notif_pass: function (notif) {
            console.log("notif_pass called");
            console.log(notif);

        }
        /*
        Example:
        
        notif_cardPlayed: function( notif )
        {
            console.log( 'notif_cardPlayed' );
            console.log( notif );
            
            // Note: notif.args contains the arguments specified during you "notifyAllPlayers" / "notifyPlayer" PHP call
            
            // TODO: play the card in the user interface.
        },    
        
        */
   });             
});
