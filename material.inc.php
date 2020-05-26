<?php
/**
 *------
 * BGA framework: © Gregory Isabelli <gisabelli@boardgamearena.com> & Emmanuel Colin <ecolin@boardgamearena.com>
 * martiandice implementation : © Christopher Pierce <chrisjpierce@gmail.com>
 *
 * This code has been produced on the BGA studio platform for use on http://boardgamearena.com.
 * See http://en.boardgamearena.com/#!doc/Studio for more information.
 * -----
 *
 * material.inc.php
 *
 * martiandice game material description
 *
 * Here, you can describe the material of your game with PHP variables.
 *   
 * This file is loaded in your game logic class constructor, ie these variables
 * are available everywhere in your game logic code.
 *
 */


/*

Example:

$this->card_types = array(
    1 => array( "card_name" => ...,
                ...
              )
);

*/

$this->die_faces = array(
    1 => array( 'name' => clienttranslate('Death Ray'),
                'nametr' => self::_('Death Ray') ),
    2 => array( 'name' => clienttranslate('Human'),
                'nametr' => self::_('Human') ),
    3 => array( 'name' => clienttranslate('Cow'),
                'nametr' => self::_('Cow') ),
    4 => array( 'name' => clienttranslate('Tank'),
                'nametr' => self::_('Tank') ),
    5 => array( 'name' => clienttranslate('Chicken'),
                'nametr' => self::_('Chicken') ),
    6 => array( 'name' => clienttranslate('Death Ray'),
                'nametr' => self::_('Death Ray') ),
);




