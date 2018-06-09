/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'logoca': '&#xe95c;',
            'lampsplusca': '&#xe95c;',
            'staron': '&#xe900;',
            'staroff': '&#xe901;',
            'addframe': '&#xe902;',
            'addgraphics': '&#xe903;',
            'addphoto': '&#xe904;',
            'addtext': '&#xe905;',
            'alert': '&#xe906;',
            'back': '&#xe907;',
            'backtotop': '&#xe908;',
            'bulb01': '&#xe909;',
            'bulb02': '&#xe90a;',
            'calendar01': '&#xe90b;',
            'calendar02': '&#xe90c;',
            'call': '&#xe90d;',
            'cart': '&#xe90e;',
            'center': '&#xe90f;',
            'chat': '&#xe910;',
            'close01': '&#xe911;',
            'close02': '&#xe912;',
            'cloud': '&#xe913;',
            'color': '&#xe914;',
            'coupon': '&#xe915;',
            'crop01': '&#xe916;',
            'crop02': '&#xe917;',
            'delete01': '&#xe918;',
            'delete02': '&#xe919;',
            'delete03': '&#xe91a;',
            'directioins': '&#xe91b;',
            'duplicate': '&#xe91c;',
            'edittext': '&#xe91d;',
            'effects': '&#xe91e;',
            'filters': '&#xe91e;',
            'email': '&#xe91f;',
            'facebook02': '&#xe920;',
            'facebook01': '&#xe921;',
            'favoriteoff': '&#xe922;',
            'favoriteon': '&#xe923;',
            'font': '&#xe924;',
            'fontsize': '&#xe925;',
            'googleplus02': '&#xe926;',
            'googleplus01': '&#xe927;',
            'handicap': '&#xe928;',
            'help': '&#xe929;',
            'home': '&#xe92a;',
            'houzz02': '&#xe92b;',
            'houzz01': '&#xe92c;',
            'instagram02': '&#xe92d;',
            'instagram01': '&#xe92e;',
            'lampsplus': '&#xe92f;',
            'logo': '&#xe92f;',
            'lplus02': '&#xe930;',
            'lplus01': '&#xe931;',
            'menu': '&#xe932;',
            'mobile': '&#xe933;',
            'more': '&#xe934;',
            'backward': '&#xe935;',
            'forward': '&#xe936;',
            'parking': '&#xe937;',
            'pinterest02': '&#xe938;',
            'pinterest01': '&#xe939;',
            'plugin': '&#xe93a;',
            'preview': '&#xe93b;',
            'print': '&#xe93c;',
            'redo': '&#xe93d;',
            'rotate': '&#xe93e;',
            'save': '&#xe93f;',
            'scrollleft': '&#xe940;',
            'scrollright': '&#xe941;',
            'search': '&#xe942;',
            'secure': '&#xe943;',
            'share01': '&#xe944;',
            'share02': '&#xe945;',
            'startover01': '&#xe946;',
            'startover02': '&#xe947;',
            'store': '&#xe948;',
            'straighten': '&#xe949;',
            'success': '&#xe94a;',
            'edit': '&#xe94b;',
            'tool': '&#xe94c;',
            'twitter02': '&#xe94d;',
            'twitter01': '&#xe94e;',
            'undo': '&#xe94f;',
            'user': '&#xe950;',
            'video02': '&#xe951;',
            'videoold': '&#xe951;',
            'video01': '&#xe952;',
            'videonew': '&#xe952;',
            'yelp02': '&#xe953;',
            'yelp01': '&#xe954;',
            'youtube04': '&#xe955;',
            'youtube03': '&#xe956;',
            'youtube02': '&#xe957;',
            'youtube01': '&#xe958;',
            'zoom01': '&#xe959;',
            'zoom02': '&#xe95a;',
            'open': '&#xe95b;',
            'brightness': '&#xe95d;',
            'saturation': '&#xe95e;',
            'contrast': '&#xe95f;',
            'loading': '&#xe960;',
            'erase': '&#xe961;',
            'megaphone': '&#xe962;',
            'tag': '&#xe963;',
            'partnership': '&#xe964;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/lpIcon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
