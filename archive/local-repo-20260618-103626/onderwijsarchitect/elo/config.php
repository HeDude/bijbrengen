<?php  // Moodle configuration file
unset( $CFG );
global $CFG;
$CFG = new stdClass();
$CFG->admin                = 'admin';
$CFG->dirroot              = '/srv/production/controller/vendor/moodle';
$CFG->libdir               = $CFG->dirroot .'/lib';
$CFG->directorypermissions = 0777;
$CFG->dbtype               = 'mariadb';
$CFG->dblibrary            = 'native';
$CFG->dbhost               = 'localhost';
$CFG->prefix               = 'mdl_';
$CFG->dboptions            = array
(
  'dbpersist' => 0,
  'dbport' => '',
  'dbsocket' => '',
//  'dbcollation' => 'utf8mb4_general_ci',
   'dbcollation' => 'utf8mb4_unicode_ci',
);


if ( !array_key_exists ( 'SERVER_NAME', $_SERVER ) )
{
    require_once(  __DIR__ . '/' . 'commandline.php' );
    require_once( $CFG->dirroot . '/lib/setup.php');
    exit ( "Executed Moodle configuration from the command line.\n" );
}

$config_files = array
(
    'bclab_nl.php',
    'codeniacs_eu.php',
    'codeniacs_nl.php',
    'codeniacs_org.php',
    'entreprenasium_com.php',
    'entreprenasium_nl.php',
    'hedude_com.php',
    'leerparadijs_nl.php',
    'mecoaching_nl.php',
    'metherapy_nl.php',
    'nowscience_org.php',
    'onderwijsarchitect_nl.php',
    'stichtingknip_nl.php',
    'welgeleerd_nl.php'
);

$found = false;
foreach ( $config_files as $config_file )
{
    $config_filepath = __DIR__ . '/' . $config_file;

    if
    (
        file_exists( $config_filepath ) &&
        require_once( $config_filepath )
    )
    {
        require_once( $CFG->dirroot . '/lib/setup.php');
        $found = true;
        break;
    }
}
if ( !$found )
{
    exit ( "No elo configuration is available for this URL:" . $_SERVER['SERVER_NAME'] );
}
// There is no php closing tag in this file,
// it is intentional because it prevents trailing whitespace problems!
