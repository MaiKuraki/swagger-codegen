/*
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.6-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerPetstore);
  }
}(this, function(expect, SwaggerPetstore) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Name', function() {
      beforeEach(function() {
        instance = new SwaggerPetstore.Name();
      });

      it('should create an instance of Name', function() {
        // TODO: update the code to test Name
        expect(instance).to.be.a(SwaggerPetstore.Name);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property snakeCase (base name: "snake_case")', function() {
        // TODO: update the code to test the property snakeCase
        expect(instance).to.have.property('snakeCase');
        // expect(instance.snakeCase).to.be(expectedValueLiteral);
      });

      it('should have the property property (base name: "property")', function() {
        // TODO: update the code to test the property property
        expect(instance).to.have.property('property');
        // expect(instance.property).to.be(expectedValueLiteral);
      });

      it('should have the property _123Number (base name: "123Number")', function() {
        // TODO: update the code to test the property _123Number
        expect(instance).to.have.property('_123Number');
        // expect(instance._123Number).to.be(expectedValueLiteral);
      });

    });
  });

}));