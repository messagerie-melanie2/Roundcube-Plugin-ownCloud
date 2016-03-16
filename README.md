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

* To avoid cross-domain errors you should use the same url (domain) for Roundcube and ownCloud.
* Add and enable "roundcube_external" apps to your ownCloud instance (in owncloud/apps/)
* You can also add melanie2 theme to owncloud
