<?php
if ( !defined( 'MEDIAWIKI' ) )
{
        exit;
}
if ( empty( getenv ( 'SERVER_MODEL_PATH' ) ) )
{
    exit;
}
define( "SERVER_MODEL_PATH", getenv ( 'SERVER_MODEL_PATH' ) );


$wgExtensionDirectory = realpath( '/srv/production/controller/vendor/mediawiki/extensions' );
$wgStyleDirectory = realpath( '/srv/production/controller/vendor/mediawiki/skins' );
$wgScriptPath = "";
$wgResourceBasePath = $wgScriptPath;
$wgMetaNamespace = "Project";

$wgEnableEmail = true;
$wgEnableUserEmail = true;
$wgEnotifUserTalk = true;
$wgEnotifWatchlist = true;
$wgEmailAuthentication = true;

$wgDBtype = "mysql";
$wgDBserver = "localhost";
$wgDBprefix = "wiki_";
$wgDBTableOptions = "ENGINE=InnoDB, DEFAULT CHARSET=binary";
$wgDBmysql5 = false;

$wgMainCacheType = CACHE_ACCEL;
$wgMemCachedServers = [];

$wgEnableUploads = true;
$wgStrictFileExtensions = false;
$wgUseInstantCommons = true;
$wgAllowExternalImages = true;
$wgAllowImageTag = true;
$wgAllowUserCss = true;
$wgAllowSiteCSSOnRestrictedPages = true;
$wgShellLocale = "en_US.utf8";

$wgPingback = true;

$wgAuthenticationTokenVersion = "1";

$wgRightsPage = ""; # Set to the title of a wiki page that describes your license/copyright
$wgRightsUrl = "";
$wgRightsText = "";
$wgRightsIcon = "";

$wgDiff3 = "/usr/bin/diff3";

$wgGroupPermissions['*']['createaccount'] = false;
$wgGroupPermissions['*']['edit'] = false;
$wgGroupPermissions['*']['read'] = true;

$wgSecretKey = "06598ec094628e2a1308d78a1f15ee3eb939c1303b61b687649ec124ff327c98";
$wgUpgradeKey = "dedfd867b0af1fb7";

//wfLoadExtension( 'Maps' );
//require_once '/srv/production/controller/vendor/mediawiki/extensions/Maps/Maps_Settings.php';
//wfLoadExtension( 'SyntaxHighlight_GeSHi' );
wfLoadExtension( 'EmbedVideo' );
//wfLoadExtension( 'VisualEditor' );
//$wgDefaultUserOptions['visualeditor-enable'] = 1;
//$wgHiddenPrefs[] = 'visualeditor-enable';


$wgDefaultSkin = 'GreyStuff';
wfLoadSkin( 'GreyStuff' );

if ( !array_key_exists ( 'SERVER_NAME', $_SERVER ) )
    exit;

if ( substr( $_SERVER['SERVER_NAME'] , 0, 4) != "wiki" )
    exit;

$wgFavicon = "https://www." . substr( $_SERVER['SERVER_NAME'] , 5 ) . "/images/favicon.ico";

$config_files = array
(
    'bclab_nl.php',
    'codeniacs_eu.php',
    'codeniacs_nl.php',
    'codeniacs_org.php',
    'entreprenasium_com.php',
    'entreprenasium_nl.php',
    'equithic_nl.php',
    'hedude_com.php',
    'humanature_nl.php',
    'leerparadijs_nl.php',
    'mecoaching_nl.php',
    'metherapy_nl.php',
    'nowscience_org.php',
    'onderwijsarchitect_nl.php',
    'welgeleerd_nl.php'
);

foreach ( $config_files as $config_file )
{
    $config_filepath = __DIR__ . '/' . $config_file;
    if
    (
        file_exists( $config_filepath ) &&
        require_once( $config_filepath )
    )
    {
        break;
    }
}

if ( defined( 'MW_URL_WEBSITE' ) )
/* Change the main page url used in things like the logo to an absolute url */
{
    $wgHooks['SkinTemplateOutputPageBeforeExec'][] = 'lfChangeMainPageURL';
    function lfChangeMainPageURL( $sk, &$tpl )
    {
        $tpl->data['nav_urls']['mainpage']['href'] = MW_URL_WEBSITE; // Point the main page url to an absolute url
        return true;
    }
}
