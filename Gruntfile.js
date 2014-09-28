/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
			' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
		// Task configuration.
		concat: {
			options: {
				// banner: '<%= banner %>',
				stripBanners: true
			},
			dist: {
				src: ['app/**/*.js'],
				dest: 'app/app.js'
			}
		},
		// uglify: {
		//   options: {
		//     banner: '<%= banner %>'
		//   },
		//   dist: {
		//     src: '<%= concat.dist.dest %>',
		//     dest: 'dist/<%= pkg.name %>.min.js'
		//   }
		// },
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				unused: true,
				boss: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true,
					$: true,
					App: true,
					Ember: true,
					Em: true,
					window: true,
					alert: true
				}
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			app: {
				src: ['app/**/*.js']
			}
			// lib_test: {
			//   src: ['lib/**/*.js', 'test/**/*.js']
			// }
		},
		// qunit: {
		//   files: ['test/**/*.html']
		// },
		emberTemplates: {
				compile: {
						options: {
							templateBasePath: 'app/templates',
						},
						files: {
						'app/templates.js' : ['app/templates/**/*.hbs']
						}
				},
		},
		include: {
			dev: {
				options: {
						include: 'tmp/scripts.html'
				},
				files: [{
						expand: true,
						// cwd: 'src/scripts',
						src: ['app/**/*.js', 'tests/qunit-runner.js'],
						// dest: 'build/'
				}],
				}
		},
		import: {
			options: {},
			dev: {
				src: 'index_import.html',
				dest: 'index.html'
			}
		},

		watch: {
			gruntfile: {
				options: {
					livereload: true
				},
				files: '<%= jshint.gruntfile.src %>',
				tasks: ['jshint:gruntfile']
			},
			// lib_test: {
			//   files: '<%= jshint.lib_test.src %>',
			//   tasks: ['jshint:lib_test', 'qunit']
			// }
			dev: {
				options: {
					livereload: true
				},
				files: ['app/**/*.js','app/**/*.hbs', '!app/templates.js'],
				tasks: ['jshint:app','emberTemplates','include','import']
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ember-templates');
	grunt.loadNpmTasks('grunt-script-include');
	grunt.loadNpmTasks('grunt-import');

	// Default task.
	// grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
	grunt.registerTask('default', ['jshint', 'emberTemplates','include','import','watch']);

};
