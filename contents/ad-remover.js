'use strict';

(function (ad, sc, observer) {
    ad.parentNode.removeChild(ad);
    sc.style.right = 0;
    observer.observe(sc, {attributes: true});
})(
    document.getElementById('theAd'),
    document.getElementById('shellcontent'),
    new MutationObserver(function (mutations) {
        mutations.forEach(function (record) {
            if (record.attributeName === 'style') {
                record.target.style.right = 0;
            }
        });
    })
);
