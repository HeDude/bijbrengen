<?php
$my_view = '/var/www/production/view/';
require_once( __DIR__ . '/LocalSettings.orig.php' );
if ( require_once( $my_view . 'entreprenasium/mediawiki/LocalSettings.entreprenasium.php' ) ) return true;
if ( require_once( $my_view . 'leerparadijs/mediawiki/LocalSettings.leerparadijs.php' ) ) return true;
if ( require_once( $my_view . 'onderwijsarchitect/mediawiki/LocalSettings.onderwijsarchitect.php' ) ) return true;
if ( require_once( $my_view . 'mecoaching/mediawiki/LocalSettings.mecoaching.php' ) ) return true;
if ( require_once( $my_view . 'stichtingknip/mediawiki/LocalSettings.stichtingknip.php' ) ) return true;
if ( require_once( '/var/lib/hedude/production/model/configuration/mediawiki.php' ) ) return true;
exit;
