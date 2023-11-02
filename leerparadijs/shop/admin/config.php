<?php
define( 'DIR_APPLICATION', '/srv/production/controller/vendor/opencart/admin/' );
define( 'DIR_TEMPLATE', DIR_APPLICATION . 'view/template/' );
define( 'URL_PATH', 'admin/' );
define( 'OPENCART_SERVER', 'https://www.opencart.com/' );
define( 'DIR_SYSTEM', '/srv/production/controller/vendor/opencart/system/' );

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
