/**
 * Plugin ownCloud
 *
 * Display your ownCloud instance in Roundcube w/ auth
 *
 * @author Thomas Payen <thomas.payen@i-carre.net>
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 2
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

$(document).ready(function() {
	$.ajax({
	   type: "POST",
	   url: rcmail.env.owncloud_url,
	   data: "rc_user="+rcmail.env.owncloud_username+"&rc_pwd="+rcmail.env.owncloud_password+"&from_roundcube=1",
	   xhrFields: {
	       withCredentials: true
	    },
	   success: function (data) {
		   if (navigator.appName == "Microsoft Internet Explorer"){
			    window.document.getElementById('melanie2_owncloud_frame').src = rcmail.env.owncloud_gotourl;
			    window.document.getElementById('melanie2_owncloud_frame').contentWindow.location.reload(true);
			} else {
			   window.document.getElementById('melanie2_owncloud_frame').src = rcmail.env.owncloud_gotourl;
			}
		   $("#wait_box").hide();
	   },
	   error: function (xhr, ajaxOptions, thrownError) {
		   $("#wait_box").hide();
	   },
	});
});