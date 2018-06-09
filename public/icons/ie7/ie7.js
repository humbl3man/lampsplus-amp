/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'LPIcons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'lpIcon-lampsplus-ca': '&#xe95c;',
		'lpIcon-star-selected': '&#xe900;',
		'lpIcon-star': '&#xe901;',
		'lpIcon-addframe': '&#xe902;',
		'lpIcon-addgraphic': '&#xe903;',
		'lpIcon-addphoto': '&#xe904;',
		'lpIcon-addtext': '&#xe905;',
		'lpIcon-alert': '&#xe906;',
		'lpIcon-back': '&#xe907;',
		'lpIcon-backtotop': '&#xe908;',
		'lpIcon-bulb01': '&#xe909;',
		'lpIcon-bulb02': '&#xe90a;',
		'lpIcon-calendar01': '&#xe90b;',
		'lpIcon-calendar02': '&#xe90c;',
		'lpIcon-call': '&#xe90d;',
		'lpIcon-cart': '&#xe90e;',
		'lpIcon-center': '&#xe90f;',
		'lpIcon-chat': '&#xe910;',
		'lpIcon-close01': '&#xe911;',
		'lpIcon-close02': '&#xe912;',
		'lpIcon-cloud': '&#xe913;',
		'lpIcon-color': '&#xe914;',
		'lpIcon-coupon': '&#xe915;',
		'lpIcon-crop01': '&#xe916;',
		'lpIcon-crop02': '&#xe917;',
		'lpIcon-delete01': '&#xe918;',
		'lpIcon-delete02': '&#xe919;',
		'lpIcon-delete03': '&#xe91a;',
		'lpIcon-directions': '&#xe91b;',
		'lpIcon-duplicate': '&#xe91c;',
		'lpIcon-edittext': '&#xe91d;',
		'lpIcon-effects': '&#xe91e;',
		'lpIcon-email': '&#xe91f;',
		'lpIcon-facebook-rev': '&#xe920;',
		'lpIcon-facebook': '&#xe921;',
		'lpIcon-favorite': '&#xe922;',
		'lpIcon-favoriteselected': '&#xe923;',
		'lpIcon-font': '&#xe924;',
		'lpIcon-fontsize': '&#xe925;',
		'lpIcon-googleplus-rev': '&#xe926;',
		'lpIcon-googleplus': '&#xe927;',
		'lpIcon-handicapAccess': '&#xe928;',
		'lpIcon-help': '&#xe929;',
		'lpIcon-home': '&#xe92a;',
		'lpIcon-houzz-rev': '&#xe92b;',
		'lpIcon-houzz': '&#xe92c;',
		'lpIcon-instagram-rev': '&#xe92d;',
		'lpIcon-instagram': '&#xe92e;',
		'lpIcon-lampsplus': '&#xe92f;',
		'lpIcon-Lplus-rev': '&#xe930;',
		'lpIcon-Lplus': '&#xe931;',
		'lpIcon-menu': '&#xe932;',
		'lpIcon-mobile': '&#xe933;',
		'lpIcon-more': '&#xe934;',
		'lpIcon-movebackward': '&#xe935;',
		'lpIcon-moveforward': '&#xe936;',
		'lpIcon-parking': '&#xe937;',
		'lpIcon-pinterest-rev': '&#xe938;',
		'lpIcon-pinterest': '&#xe939;',
		'lpIcon-plugin': '&#xe93a;',
		'lpIcon-preview': '&#xe93b;',
		'lpIcon-print': '&#xe93c;',
		'lpIcon-redo': '&#xe93d;',
		'lpIcon-rotate': '&#xe93e;',
		'lpIcon-save': '&#xe93f;',
		'lpIcon-scrollleft': '&#xe940;',
		'lpIcon-scrollright': '&#xe941;',
		'lpIcon-search': '&#xe942;',
		'lpIcon-secure': '&#xe943;',
		'lpIcon-share01': '&#xe944;',
		'lpIcon-share02': '&#xe945;',
		'lpIcon-startover01': '&#xe946;',
		'lpIcon-startover02': '&#xe947;',
		'lpIcon-store': '&#xe948;',
		'lpIcon-straighten': '&#xe949;',
		'lpIcon-success': '&#xe94a;',
		'lpIcon-textEdit': '&#xe94b;',
		'lpIcon-tool': '&#xe94c;',
		'lpIcon-twitter-rev': '&#xe94d;',
		'lpIcon-twitter': '&#xe94e;',
		'lpIcon-undo': '&#xe94f;',
		'lpIcon-user': '&#xe950;',
		'lpIcon-video-old': '&#xe951;',
		'lpIcon-video': '&#xe952;',
		'lpIcon-yelp-rev': '&#xe953;',
		'lpIcon-yelp': '&#xe954;',
		'lpIcon-youtube-old-rev': '&#xe955;',
		'lpIcon-youtube-old': '&#xe956;',
		'lpIcon-youtube-rev': '&#xe957;',
		'lpIcon-youtube': '&#xe958;',
		'lpIcon-zoom01': '&#xe959;',
		'lpIcon-zoom02': '&#xe95a;',
		'lpIcon-open': '&#xe95b;',
		'lpIcon-brightness': '&#xe95d;',
		'lpIcon-saturation': '&#xe95e;',
		'lpIcon-contrast': '&#xe95f;',
		'lpIcon-loading': '&#xe960;',
		'lpIcon-erase': '&#xe961;',
		'lpIcon-megaphone': '&#xe962;',
		'lpIcon-tag': '&#xe963;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/lpIcon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
