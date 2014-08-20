<?php
/** Enable W3 Total Cache **/
 // Added by W3 Total Cache

/**
 * In dieser Datei werden die Grundeinstellungen f�r WordPress vorgenommen.
 *
 * Zu diesen Einstellungen geh�ren: MySQL-Zugangsdaten, Tabellenpr�fix,
 * Secret-Keys, Sprache und ABSPATH. Mehr Informationen zur wp-config.php gibt es auf der {@link http://codex.wordpress.org/Editing_wp-config.php
 * wp-config.php editieren} Seite im Codex. Die Informationen f�r die MySQL-Datenbank bekommst du von deinem Webhoster.
 *
 * Diese Datei wird von der wp-config.php-Erzeungsroutine verwendet. Sie wird ausgef�hrt, wenn noch keine wp-config.php (aber eine wp-config-sample.php) vorhanden ist,
 * und die Installationsroutine (/wp-admin/install.php) aufgerufen wird.
 * Man kann aber auch direkt in dieser Datei alle Eingaben vornehmen und sie von wp-config-sample.php in wp-config.php umbenennen und die Installation starten.
 *
 * @package WordPress
 */


//define('WP_DEBUG', true);

/**  MySQL Einstellungen - diese Angaben bekommst du von deinem Webhoster. */
/**  Ersetze database_name_here mit dem Namen der Datenbank, die du verwenden möchtest. */
define('DB_NAME', 'database_name_here');

/** Ersetze username_here mit deinem MySQL-Datenbank-Benutzernamen */
define('DB_USER', 'username_here');

/** Ersetze password_here mit deinem MySQL-Passwort */
define('DB_PASSWORD', 'password_here');

/** Ersetze localhost mit der MySQL-Serveradresse */
define('DB_HOST', 'localhost');

/** Der Datenbankzeichensatz der beim Erstellen der Datenbanktabellen verwendet werden soll */
define('DB_CHARSET', 'utf8');

/** Der collate type sollte nicht geändert werden */
define('DB_COLLATE', '');

//multiple sites
define('WP_ALLOW_MULTISITE', true);

// ========================
// Custom Content Directory
// ========================

define( 'WP_CONTENT_DIR', dirname( __FILE__ ) . '/app' );
define( 'WP_CONTENT_URL', 'http://' . $_SERVER['HTTP_HOST'] . '/app'  );

// ===============================
// Overwrite DB Setting for WP Siteurl and WP HOME
// ===============================

define('WP_SITEURL', 'http://www.domain.com/wp');
define('WP_HOME',    'http://www.domain.com');

// ===============================
// Moves deleted media files in trash instead of direct deletetion
// ===============================
define( 'MEDIA_TRASH', true );

// ===============================
// Turns the auto-updates off
// ===============================

define( 'AUTOMATIC_UPDATER_DISABLED', true );

// ===============================
// Skips the wp-content theme on updates
// ===============================

define( 'CORE_UPGRADE_SKIP_NEW_BUNDLED', true );


/**#@+
 * Sicherheitsschl�ssel.
 *
 * �ndere jeden KEY in eine beliebiege, m�glichst einzigartige Phrase.
 * Auf der Seite {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service} kannst du dir alle KEYS generieren lassen.
 * Bitte trage f�r jeden KEY eine eigene Phrase ein. Du kannst die Schl�ssel jederzeit wieder �ndern, alle angemeldeten Benutzer m�ssen sich danach erneut anmelden.
 *
 * @seit 2.6.0
 */
define('AUTH_KEY',         'amEaqyny,AJe(#%xOkypaMW+]V0ggiyd+PoC8XY+8!iQx:cg?hD<g#CGSd|H&DLW');
define('SECURE_AUTH_KEY',  'Dj zw@2OlV`SN@y Dw~r$8-8N[dVn~DlobTP!Eol0[%i+u|791YC93LR[&X1AIuC');
define('LOGGED_IN_KEY',    'n+B@,z}5`nScw5<_3)V2+P}S8ywaq5LYc9.9[e0YK5K@2{FgKmTg$-Q{6grH,%O#');
define('NONCE_KEY',        'qg%P4F<E0Vr^@`Eo0Zd+A0!Kyx~2~j:3_uE/rK_C,^M|&7o]f6PA08yZxq5_aW&/');
define('AUTH_SALT',        '>3sJ|2rZ,V(wS4V_CZEmNF8b/HDqPRFwd.8c~c6!,MJmXxP%*b7 tou8eH@k RT.');
define('SECURE_AUTH_SALT', 'm4?Zq`0G{@67I%-K.J2T] Q0c=X|c`vn5ueZX(Pg*OY-|@(7-Ycf+w$Sw<sfDT8_');
define('LOGGED_IN_SALT',   'CK6Oe9]-%gsT_63 wG{cAW%</H;Gc4%XKr^&4&UAT-M|#b0`:B:bYN#S9hN A/Zt');
define('NONCE_SALT',       'kRg3BXCN/mi#97*^K]#m#,YHt*@wJ5jn6SlG!N{..Q><{kXNKo(a:.p;7}o@fh]>');

/**#@-*/

/**
 * WordPress Datenbanktabellen-Pr�fix.
 *
 *  Wenn du verschiedene Pr�fixe benutzt, kannst du innerhalb einer Datenbank
 *  verschiedene WordPress-Installationen betreiben. Nur Zahlen, Buchstaben und Unterstriche bitte!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Sprachdatei
 *
 * Hier kannst du einstellen, welche Sprachdatei benutzt werden soll. Die entsprechende
 * Sprachdatei muss im Ordner wp-content/languages vorhanden sein, beispielsweise de_DE.mo
 * Wenn du nichts eintr�gst, wird Englisch genommen.
 */
define ('WPLANG', 'de_DE');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');


define('CONCATENATE_SCRIPTS', false );

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');