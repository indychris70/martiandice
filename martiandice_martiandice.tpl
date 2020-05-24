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


Welcome to Martian Dice!

<div id="test" class="whiteblock">Test</div>

<div class="scene">
    <div class="cube">
        <div class="cube__face cube__face--front">front</div>
        <div class="cube__face cube__face--back">back</div>
        <div class="cube__face cube__face--right">right</div>
        <div class="cube__face cube__face--left">left</div>
        <div class="cube__face cube__face--top">top</div>
        <div class="cube__face cube__face--bottom">bottom</div>
    </div>
</div>
<div class="scene">
    <div class="cube">
        <div class="cube__face cube__face--front">front</div>
        <div class="cube__face cube__face--back">back</div>
        <div class="cube__face cube__face--right">right</div>
        <div class="cube__face cube__face--left">left</div>
        <div class="cube__face cube__face--top">top</div>
        <div class="cube__face cube__face--bottom">bottom</div>
    </div>
</div>
<p class="radio-group">
    <label>
        <input type="radio" name="rotate-cube-side" value="front" checked /> front
    </label>
    <label>
        <input type="radio" name="rotate-cube-side" value="right" /> right
    </label>
    <label>
        <input type="radio" name="rotate-cube-side" value="back" /> back
    </label>
    <label>
        <input type="radio" name="rotate-cube-side" value="left" /> left
    </label>
    <label>
        <input type="radio" name="rotate-cube-side" value="top" /> top
    </label>
    <label>
        <input type="radio" name="rotate-cube-side" value="bottom" /> bottom
    </label>
</p>



<script type="text/javascript">

// Javascript HTML templates

/*
// Example:
var jstpl_some_game_item='<div class="my_game_item" id="my_game_item_${MY_ITEM_ID}"></div>';

*/

</script>  

{OVERALL_GAME_FOOTER}
