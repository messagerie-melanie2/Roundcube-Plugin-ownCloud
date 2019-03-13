# Roundcube-Plugin-ownCloud

Open ownCloud instance directly in Roundcube with authentication

You can have interactions between mails and ownCloud attachments with the Roundrive plugin

License
-------

This plugin is released under the GNU General Public License Version 3
(http://www.gnu.org/licenses/gpl-3.0.html).

Install
-------

* Place this plugin folder into plugins directory of Roundcube
* Add owncloud to $config['plugins'] in your Roundcube config

NB: When downloading the plugin from GitHub you will need to create a
directory called owncloud and place the files in there,
ignoring the root directory in the downloaded archive directory in the
downloaded archive.

* To avoid cross-domain errors you should use the same url (domain) for Roundcube and ownCloud (See the [reverse proxy documentation](reverseproxy.md), to use ownCloud and Roundcube on separate servers with Apache)
* Add and enable "roundcube_external" apps to your ownCloud instance (in owncloud/apps/)
* You can also add melanie2 theme to owncloud

Configuration
-------------

* In Roundcube plugin you need to rename config.inc.php.dist to config.inc.php. And configure your owncloud URL and a random DES key of 24 characters.
* In ownCloud, you need to edit the config.php file and add a 'roundcube_owncloud_des_key' property with the same DES key.
