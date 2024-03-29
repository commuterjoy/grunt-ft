module.exports = function(grunt) {
    "use strict";

    function getFileContents() {
        var content = [
            "// Temporary auto-generated file (see sass-env-vars.js) - do not add to Git.",
            '$o-assets-global-path: "/views/' + grunt.config.get('static_assets_version') + '/";'
        ];
        return content.join('\n');
    }

    grunt.registerTask('sass-env-vars', 'Creates temporary file containing environment SASS variables.', function (cmd) {
        var command = cmd || 'create',
            path = './src/main/resources/static/sass/common/_environment.scss';

        if (command === 'create') {
            grunt.file.write(path, getFileContents(), { encoding: 'utf8' });
            grunt.log.writeln('Created ' + path);
        }

        if (command === 'clean') {
            grunt.file.delete(path);
            grunt.log.writeln('Deleted ' + path);
        }

    });

};