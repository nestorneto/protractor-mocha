(function() {
    'use strict';

    var chai = require('chai'),
        chaiAsPromised = require('chai-as-promised');

    chai.use(chaiAsPromised);

    var expect = chai.expect;

    // jshint expr:true

    describe('testing colors >', function () {

        it('testing colors 1', function () {

            expect(true).to.be.true;

        });

        it('testing colors 2', function () {

            expect(true).to.be.false;

        });

        it('testing colors 3', function () {

            expect(true).to.be.true;

        });

        it('testing colors 4', function () {

            expect(true).to.be.false;

        });

        it('testing colors 5', function () {

            expect(true).to.be.true;

        });

    });

})();
