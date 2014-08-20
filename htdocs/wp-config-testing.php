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


define('WP_DEBUG', true);

// ** MySQL Einstellungen - diese Angaben bekommst du von deinem Webhoster** //
/**  Ersetze database_name_here mit dem Namen der Datenbank, die du verwenden m�chtest. */
define('DB_NAME', 'perfectdeploy');

/** Ersetze username_here mit deinem MySQL-Datenbank-Benutzernamen */
define('DB_USER', 'root');

/** Ersetze password_here mit deinem MySQL-Passwort */
define('DB_PASSWORD', '');

/** Ersetze localhost mit der MySQL-Serveradresse */
define('DB_HOST', 'localhost');

/** Der Datenbankzeichensatz der beim Erstellen der Datenbanktabellen verwendet werden soll */
define('DB_CHARSET', 'utf8');

/** Der collate type sollte nicht ge�ndert werden */
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
define('AUTH_KEY',         'p(KLXy0<r+K`q[U0)9tBH_23:Xz6W=YW4M5-E6>cuUe[,BF)-Ot-C:T62Ak*oyb7');
define('SECURE_AUTH_KEY',  'N`e^;LP]OA&_87P3kmLB^CTm9xb_]+^`,PDNgn099aQm.B**]1A#+`j_q<(Y)6FV');
define('LOGGED_IN_KEY',    '658qRM|kJs7<hc`-a-7Isadd-jsj-H<bl6F|A%tSgRLKnnI@=7KO(P VM<]Bux!.');
define('NONCE_KEY',        '|Ih7~j/j|`JJ)W!y+h%?*^_VSW|}0a0mdt|+zJ?NWV1|V`iH>-IC@^2x{ mY;-;]');
define('AUTH_SALT',        'yeFh;WQ4^7gnj89+jjzKw&z`O6o$C:@AG1+Wq$ek>UD$C4N<Dd>C175iJJ8NIOde');
define('SECURE_AUTH_SALT', 'l._|)`;-[9Mi9aPVv-|B H5lL sMfkas)/5Ae-BRLYK.45h_J*:}G9aHJ5;M)inI');
define('LOGGED_IN_SALT',   '~4lj?+^y.-sA|TkAxl)+,w:h)29q[6Z0$B5OtP I+?bA3;pc|:%UBc>+RL+i8nY;');
define('NONCE_SALT',       '-sP}t+?zm2bl-z}@Y.DF+tQtoMz+P).o?=O-jKtf#~=5<PC{RwSJg/KzkTmeTM{4');

/**#@-*/

/**
 * WordPress Datenbanktabellen-Pr�fix.
 *
 *  Wenn du verschiedene Pr�fixe benutzt, kannst du innerhalb einer Datenbank
 *  verschiedene WordPress-Installationen betreiben. Nur Zahlen, Buchstaben und Unterstriche bitte!
 */
$table_prefix  = 'deploy_';

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
// define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/wp/');


define('CONCATENATE_SCRIPTS', false );

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');