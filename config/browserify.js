module.exports = {
    main: {
        files: {
            '<%= path.target %><%= static_assets_path.js %>main.js': ['<%=path.js_src %>/main.js'],
        },
        options: {
            transform: ['debowerify', 'textrequireify', ['uglifyify', {global: true}]],
            bundleOptions: {
                debug: false
            }
        }
    },
    head: {
        files: {
            '<%= path.target %><%= static_assets_path.js %>head.js': ['<%=path.js_src %>/head/tracking.js'],
        },
        options: {
            transform: ['debowerify', 'textrequireify'],
            bundleOptions: {
                debug: false
            }
        }
    },
    dev: {
        files: {
            '<%= path.target %><%= static_assets_path.js %>main.js': ['<%=path.js_src %>/main.js'],
        },
        options: {
            transform: ['debowerify', 'textrequireify'],
            bundleOptions: {
                debug: true
            }
        }
    }
};