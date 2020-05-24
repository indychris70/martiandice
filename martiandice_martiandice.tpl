{OVERALL_GAME_HEADER}

<!-- 
--------
-- BGA framework: © Gregory Isabelli <gisabelli@boardgamearena.com> & Emmanuel Colin <ecolin@boardgamearena.com>
-- martiandice implementation : © Christopher Pierce <chrisjpierce@gmail.com>
-- 
-- This code has been produced on the BGA studio platform for use on http://boardgamearena.com.
-- See http://en.boardgamearena.com/#!doc/Studio for more information.
-------

    martiandice_martiandice.tpl
    
    This is the HTML template of your game.
    
    Everything you are writing in this file will be displayed in the HTML page of your game user interface,
    in the "main game zone" of the screen.
    
    You can use in this template:
    _ variables, with the format {MY_VARIABLE_ELEMENT}.
    _ HTML block, with the BEGIN/END format
    
    See your "view" PHP file to check how to set variables and control blocks
    
    Please REMOVE this comment before publishing your game on BGA
-->

<div id="play_area">

    <div id="die_tray">
        <div class="scene">
            <div class="cube">
                <div class="cube__face cube__face--3">C</div>
                <div class="cube__face cube__face--4">T</div>
                <div class="cube__face cube__face--5">Ch</div>
                <div class="cube__face cube__face--2">H</div>
                <div class="cube__face cube__face--1">D1</div>
                <div class="cube__face cube__face--6">D6</div>
            </div>
        </div>
        <div class="scene">
            <div class="cube">
                <div class="cube__face cube__face--3">C</div>
                <div class="cube__face cube__face--4">T</div>
                <div class="cube__face cube__face--5">Ch</div>
                <div class="cube__face cube__face--2">H</div>
                <div class="cube__face cube__face--1">D1</div>
                <div class="cube__face cube__face--6">D6</div>
            </div>
        </div>
        <p class="radio-group">
            <label>
                <input type="radio" name="rotate-cube-side" value="1" /> 1
            </label>
            <label>
                <input type="radio" name="rotate-cube-side" value="2" /> 2
            </label>
            <label>
                <input type="radio" name="rotate-cube-side" value="3" checked /> 3
            </label>
            <label>
                <input type="radio" name="rotate-cube-side" value="4" /> 4
            </label>
            <label>
                <input type="radio" name="rotate-cube-side" value="5" /> 5
            </label>
            <label>
                <input type="radio" name="rotate-cube-side" value="6" /> 6
            </label>
        </p>
    </div>


    <div id="death_rays" class=""></div>
    <div id="tanks"></div>
    <div id="humans"></div>
    <div id="chickens"></div>
    <div id="cows"></div>

</div>




<script type="text/javascript">

// Javascript HTML templates

/*
// Example:
var jstpl_some_game_item='<div class="my_game_item" id="my_game_item_${MY_ITEM_ID}"></div>';

*/

</script>  

{OVERALL_GAME_FOOTER}
