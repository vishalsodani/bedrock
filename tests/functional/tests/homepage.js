define([
    'intern!object',
    'intern/chai!assert',
    'base/functional/lib/config',
    'base/functional/lib/poll',
    'require'
], function(registerSuite, assert, config, poll, require) {

    var url = config.homepageUrl;

    // Register the tests to be run
    registerSuite({

        name: 'home',

        'Homepage promos should be displayed': function() {
            return this.remote
                .get(require.toUrl(url))
                .findAllByCssSelector('.promo-grid > li')
                .then(function (promos) {
                    assert.ok(promos.length === 16, 'There should be 16 promos on the homepage');
                })
                .end()
                .findAllByCssSelector('#promo-1 > a.panel-link')
                .then(function (promo) {
                    assert.ok(promo.length === 1, 'Promo-1 link should be displayed');
                })
                .end()
                .findAllByCssSelector('#promo-2 > a.panel-link')
                .then(function (promo) {
                    assert.ok(promo.length === 1, 'Promo-2 link should be displayed');
                })
                .end()
                .findAllByCssSelector('#promo-3 > a')
                .then(function (promo) {
                    assert.ok(promo.length === 1, 'Promo-3 link should be displayed');
                })
                .end()
                .findAllByCssSelector('#promo-4 > a')
                .then(function (promo) {
                    assert.ok(promo.length === 1, 'Promo-4 link should be displayed');
                })
                .end()
                .findAllByCssSelector('#promo-5 a.fxos-link')
                .then(function (promo) {
                    assert.ok(promo.length === 1, 'Promo-5 link should be displayed');
                })
                .end()
                .findAllByCssSelector('#promo-6 > a.panel-link')
                .then(function (promo) {
                    assert.ok(promo.length === 1, 'Promo-6 link should be displayed');
                })
                .end()
                .findAllByCssSelector('#promo-7 > a')
                .then(function (promo) {
                    assert.ok(promo.length === 1, 'Promo-7 link should be displayed');
                })
                .end()
                .findAllByCssSelector('#promo-8 > a.panel-link')
                .then(function (promo) {
                    assert.ok(promo.length === 1, 'Promo-8 link should be displayed');
                })
                .end()
                .findAllByCssSelector('#promo-9 > a.panel-link')
                .then(function (promo) {
                    assert.ok(promo.length === 1, 'Promo-9 link should be displayed');
                })
                .end()
                .findAllByCssSelector('#promo-10 > a.panel-link')
                .then(function (promo) {
                    assert.ok(promo.length === 1, 'Promo-10 link should be displayed');
                })
                .end()
                .findAllByCssSelector('#promo-11 > a.panel-link')
                .then(function (promo) {
                    assert.ok(promo.length === 1, 'Promo-11 link should be displayed');
                })
                .end()
                .findAllByCssSelector('#promo-12 > a')
                .then(function (promo) {
                    assert.ok(promo.length === 1, 'Promo-12 link should be displayed');
                })
                .end()
                .findAllByCssSelector('#promo-13 > a')
                .then(function (promo) {
                    assert.ok(promo.length === 1, 'Promo-13 link should be displayed');
                })
                .end()
                .findAllByCssSelector('#promo-14 > a')
                .then(function (promo) {
                    assert.ok(promo.length === 1, 'Promo-14 link should be displayed');
                })
                .end()
                .findAllByCssSelector('#promo-15 > a')
                .then(function (promo) {
                    assert.ok(promo.length === 1, 'Promo-15 link should be displayed');
                })
                .end()
                .findAllByCssSelector('#promo-16 a.twt-account')
                .then(function (promo) {
                    assert.ok(promo.length === 1, 'Promo-16 link should be displayed');
                });
        },

        'Hovering over promo should reveal the link': function() {
            return this.remote
                .get(require.toUrl(url))
                .findById('promo-1')
                .moveMouseTo(10, 10)
                .end()
                .findByCssSelector('#promo-1 > a.panel-link')
                .then(function(element) {
                    return poll.until(element, 'isDisplayed').then(function() {
                        assert.isTrue(true);
                    });
                });
        },

        'Contribute CTA should be displayed': function() {
            return this.remote
                .get(require.toUrl(url))
                .findByCssSelector('a.contribute-btn')
                .then(function (button) {
                    assert.ok(button.isDisplayed(), 'Contribute button should be visible');
                });
        },

        'Next featured event should be displayed': function() {
            return this.remote
                .get(require.toUrl(url))
                .findByCssSelector('.featured-event > a')
                .then(function (link) {
                    assert.ok(link.isDisplayed(), 'Next featured event should be visible');
                    link.getAttribute('src')
                    .then(function (url) {
                        assert.ok(url.indexOf('reps.mozilla.org') !== -1, 'Link destination should be reps.mozilla.org');
                    });
                });
        },

        'Next 3 upcoming events should be displayed': function() {
            return this.remote
                .get(require.toUrl(url))
                .findAllByCssSelector('.events-list > li > a')
                .then(function (links) {
                    assert.ok(links.length === 3, 'Events list should contain three links');
                })
                .end()
                .findByCssSelector('.events-list > li:nth-child(1) > a')
                .then(function (link) {
                    link.getAttribute('src')
                    .then(function (url) {
                        assert.ok(url.indexOf('reps.mozilla.org') !== -1, 'Link destination should be reps.mozilla.org');
                    });
                })
                .end()
                .findByCssSelector('.events-list > li:nth-child(2) > a')
                .then(function (link) {
                    link.getAttribute('src')
                    .then(function (url) {
                        assert.ok(url.indexOf('reps.mozilla.org') !== -1, 'Link destination should be reps.mozilla.org');
                    });
                })
                .end()
                .findByCssSelector('.events-list > li:nth-child(3) > a')
                .then(function (link) {
                    link.getAttribute('src')
                    .then(function (url) {
                        assert.ok(url.indexOf('reps.mozilla.org') !== -1, 'Link destination should be reps.mozilla.org');
                    });
                });
        },

        'Secondary links should be displayed correctly': function() {
            return this.remote
                .get(require.toUrl(url))
                .findAllByCssSelector('#secondary-links ul > li > a')
                .then(function (links) {
                    assert.ok(links.length === 3, 'Should contain three secondary links');
                })
                .end()
                .findByCssSelector('#secondary-links ul > li:nth-child(1) > a')
                .then(function (link) {
                    link.getAttribute('src')
                    .then(function (url) {
                        assert.ok(url.indexOf('addons.mozilla.org') !== -1, 'Link destination should be addons.mozilla.org');
                    });
                })
                .end()
                .findByCssSelector('#secondary-links ul > li:nth-child(2) > a')
                .then(function (link) {
                    link.getAttribute('src')
                    .then(function (url) {
                        assert.ok(url.indexOf('careers.mozilla.org') !== -1, 'Link destination should be careers.mozilla.org');
                    });
                })
                .end()
                .findByCssSelector('#secondary-links ul > li:nth-child(3) > a')
                .then(function (link) {
                    link.getAttribute('src')
                    .then(function (url) {
                        assert.ok(url.indexOf('support.mozilla.org') !== -1, 'Link destination should be support.mozilla.org');
                    });
                });
        },

        'Newsletter form is displayed': function() {
            return this.remote
                .findByCssSelector('.newsletter-form')
                .then(function (form) {
                    assert.ok(form.isDisplayed(), 'Newsletter form should be visible');
                })
        },

        'Newsletter form submission should work': function() {
            return this.remote
                .get(require.toUrl(url))
                .findById('id_email')
                .click()
                .type('noreply@mozilla.com')
                .end()
                .findById('id_privacy')
                .then(function(element) { return poll.until(element, 'isDisplayed')})
                .click()
                .end()
                .findByCssSelector('.newsletter-form')
                .submit()
                .end()
                .getCurrentUrl()
                .then(function (url) {
                    assert.isTrue(url.indexOf('sign-up-for-mozilla') !== -1);
                });
        }
    });

});
