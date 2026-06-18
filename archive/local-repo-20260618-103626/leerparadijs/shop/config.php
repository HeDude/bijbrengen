<?php
define( 'DIR_APPLICATION', getenv ( 'SERVER_CONTROLLER_PATH' ) . '/vendor/opencart/catalog/' );
define( 'DIR_TEMPLATE', DIR_APPLICATION . 'view/theme/' );
define( 'URL_PATH', '' );
define( 'DIR_SYSTEM', getenv ( 'SERVER_CONTROLLER_PATH' ) . '/vendor/opencart/system/' );

$config_files = array
(
    'leerparadijs_nl.php',
    'mecoaching_nl.php'
);

foreach ( $config_files as $config_file )
{
    if ( require_once( __DIR__ . '/' . $config_file ) )
        break;
}
include( 'common.php' );
