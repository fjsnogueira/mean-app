(function () {
    'use strict';

    MyProject.codeSetup({
        type: 'factory',
        name: 'bearsService',
        dependencies: [],
        services: ['crudService'],
        code: main
    });


    function main(my) {
        var self = my.crudService.Init({endpoint: '/api/bears/'});
        return self;
    }

})();
